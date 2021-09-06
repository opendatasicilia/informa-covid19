#!/bin/bash

set -x
set -e
set -u
set -o pipefail

folder="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"

for i in "$folder"/../../dati/rawdata/provinciaCaltanissetta/source/*.xlsx; do
  nome=$(basename "$i" .xlsx)
  date=$(in2csv -I "$i" | mlr --csv clean-whitespace then remove-empty-columns then skip-trivial-records | grep -Po '[0-9]{4}-[0-9]{2}-[0-9]{2}' || : errors ignored)
  if [ -z "$date" ]; then
    date=""
  fi
  in2csv -I "$i" | mlr --headerless-csv-output --csv clean-whitespace \
    then remove-empty-columns \
    then skip-trivial-records \
    then filter -S '$c=~"^([0-9]|PROVE)" || $d=~"COMU"' \
    then put -S 'if($c=~"PROVE"){$d="altreProvince"}' \
    then cut -x -f c >"$folder"/../../dati/rawdata/provinciaCaltanissetta/target/"$nome.csv"
  mlr -I --csv put -S '$data="'"$date"'"' "$folder"/../../dati/rawdata/provinciaCaltanissetta/target/"$nome.csv"
done

mlr --csv unsparsify then sort -f data,COMUNI "$folder"/../../dati/rawdata/provinciaCaltanissetta/target/*.csv >"$folder"/../../dati/rawdata/provinciaCaltanissetta/target/output.txt

while read p; do
  source=$(echo "$p" | mlr --j2n cut -f source)
  target=$(echo "$p" | mlr --j2n cut -f target)
  mlr -I --csv put -S 'if($COMUNI=="'"$source"'"){$COMUNI="'"$target"'"}' "$folder"/../../dati/rawdata/provinciaCaltanissetta/target/output.txt
done <"$folder"/correzioniComuni.jsonl

mlr -I --csv rename 'COMUNI,denominazione_comune,Positivi in Terapia Intensiva,terapia_intensiva,Positivi in Malattie Infettive,malattie_infettive,Positivi in Quarantena domiciliare,positivi_quarantena_domiciliare,ricoverati altro presidio,ricoverati_altrove,Pazienti Guariti Clinicamente,guariti_clinicamente,Pazienti Guariti da Covid,guariti_da_covid,Deceduti in provincia,deceduti_in_provincia,Deceduti fuori provincia,deceduti_fuori_provincia' then cut -o -f 'denominazione_comune,terapia_intensiva,malattie_infettive,positivi_quarantena_domiciliare,ricoverati_altrove,guariti_clinicamente,guariti_da_covid,deceduti_in_provincia,deceduti_fuori_provincia,data' "$folder"/../../dati/rawdata/provinciaCaltanissetta/target/output.txt

find "$folder"/../../dati/rawdata/provinciaCaltanissetta/target -name "*.csv"  -delete
