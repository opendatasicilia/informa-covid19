#!/bin/bash

set -x
set -e
set -u
set -o pipefail

folder="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"

mkdir -p "$folder"/rawdata
mkdir -p "$folder"/../../dati/anagrafiche

enti="https://indicepa.gov.it/ipa-dati/datastore/dump/d09adf99-dc10-4349-8c53-27b1e5aa97b6?bom=True"
natureGiuridiche="https://indicepa.gov.it/ipa-dati/datastore/dump/f1764ae3-7f47-4183-84e4-4c8786cc337f?bom=True"
categorieEnti="https://indicepa.gov.it/ipa-dati/datastore/dump/84ebb2e7-0e61-427b-a1dd-ab8bb2a84f07?bom=True"

curl -kL "$enti" >"$folder"/rawdata/enti.csv
curl -kL "$natureGiuridiche" >"$folder"/rawdata/natureGiuridiche.csv
curl -kL "$categorieEnti" >"$folder"/rawdata/categorieEnti.csv

# estrai comuni
mlr --csv filter -S '$Codice_Categoria=="L6" && tolower($Denominazione_ente)=~"^comun"' "$folder"/rawdata/enti.csv >"$folder"/rawdata/comuniIPA.csv

# email comuni no PEC
mlr --csv cut -r -f "^(Codice_IPA|Mail[2-9])" then \
  reshape -r "Mail" -o i,v then \
  filter -S '$v=~".+" && $v!=~"cert[.]" && $v!=~"certificata" && $v!=~"certym" && $v!=~"certgov" && $v!=~"postacert" && $v!=~"pec[.]" && $v!=~"[.]pec" && $v!=~"@pec" && $v!=~"gmail"' then \
  sort -f Codice_IPA,i then \
  rename i,tipo,v,email then \
  cat -n -g Codice_IPA then \
  put -S 'if($email =~ "protoco"){$protocollo="x"}else{$protocollo=""}' then \
  count-similar -g Codice_IPA "$folder"/rawdata/comuniIPA.csv >"$folder"/rawdata/comuniIPA-noPEC.csv

# email no PEC univoche o protocollo
mlr --csv cut -r -f "^(Codice_IPA|Mail[2-9])" then \
  reshape -r "Mail" -o i,v then \
  filter -S '$v=~".+" && $v!=~"cert[.]" && $v!=~"certificata" && $v!=~"certym" && $v!=~"certgov" && $v!=~"postacert" && $v!=~"pec[.]" && $v!=~"[.]pec" && $v!=~"@pec" && $v!=~"gmail"' then \
  sort -f Codice_IPA,i then rename i,tipo,v,email then cat -n -g Codice_IPA then put -S 'if($email =~ "protoco"){$protocollo="x"}else{$protocollo=""}' then count-similar -g Codice_IPA then filter -S '$count=="1" || $protocollo=="x"' "$folder"/rawdata/comuniIPA.csv >"$folder"/rawdata/tmp_01.csv

# elenco codici IPA file tmp_01.csv
mlr --csv cut -f Codice_IPA "$folder"/rawdata/tmp_01.csv >"$folder"/rawdata/tmp_01_check.csv

# estrai dall'elenco comuni, quelli non già presenti in tmp_01.csv
mlr --csv join --np --ul --ur -u -j 'Codice_IPA' -f "$folder"/rawdata/comuniIPA-noPEC.csv then unsparsify then filter '$n==1' "$folder"/rawdata/tmp_01_check.csv >"$folder"/rawdata/tmp_02.csv

# crea versione finale
mlr --csv cut -x -f protocollo,count "$folder"/rawdata/tmp_01.csv "$folder"/rawdata/tmp_02.csv >"$folder"/../../dati/anagrafiche/comuniIPA-noPEC.csv
