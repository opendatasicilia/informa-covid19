#!/bin/bash

### requisiti ###
# - jq https://github.com/stedolan/jq/
# - yq https://github.com/kislyuk/yq
# - fritionless https://github.com/frictionlessdata/frictionless-py
# - Miller https://github.com/johnkerl/miller
### requisiti ###

set -x
set -e
set -u
set -o pipefail

folder="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"

git pull

# se il file di report esiste già, cancellalo
if [ -f "$folder"/../../dati/informacovid/report.csv ]; then
  rm "$folder"/../../dati/informacovid/report.csv
fi

# per ogni comune presente nella lista degli aderenti
yq <"$folder"/../../dati/informacovid/informacovid.yml -r '.[].comune_codice_istat' | while read line; do
  # crea cartella contenitore
  mkdir -p "$folder"/../../dati/informacovid/"$line"

  # estrai URL file
  URL=$(yq <"$folder"/../../dati/informacovid/informacovid.yml -r '.[]|select(.comune_codice_istat| contains("'"$line"'"))|.URL_csv')
  # scarica file
  curl -kL "$URL" >"$folder"/../../dati/informacovid/"$line"/tmp.csv

  # valida il file
  valido=$(frictionless validate --schema "$folder"/../../dati/informacovid/informacovid_schema.yaml "$folder"/../../dati/informacovid/"$line"/tmp.csv --json | jq -r '.valid')

  # aggiorna il file sul repo, soltanto se è valido
  if [[ "$valido" == "true" ]]; then
    mv "$folder"/../../dati/informacovid/"$line"/tmp.csv "$folder"/../../dati/informacovid/"$line"/"$line".csv
  fi

  # crea report validazione
  #data=$(date --iso-8601=seconds)
  echo "comune_codice_istat=$line,valid=$valido" >>"$folder"/../../dati/informacovid/report.csv
done

# converti report in csv
mlr -I --ocsv sort -f comune_codice_istat "$folder"/../../dati/informacovid/report.csv
