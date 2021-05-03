#!/bin/bash

### requisiti ###
# - jq https://github.com/stedolan/jq/
# - yq https://github.com/kislyuk/yq
### requisiti ###

set -x
set -e
set -u
set -o pipefail

folder="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"

# per ogni comune presente nella lista degli aderenti
yq <"$folder"/../../dati/informacovid/informacovid.yml -r '.[].comune_codice_istat' | while read line; do
  # crea cartella contenitore
  mkdir -p "$folder"/../../dati/informacovid/"$line"

  # estrai URL file
  URL=$(yq <"$folder"/../../dati/informacovid/informacovid.yml -r '.[]|select(.comune_codice_istat| contains("'"$line"'"))|.URL_csv')
  # scarica file
  curl -kL "$URL" >"$folder"/../../dati/informacovid/"$line"/"$line".csv
done
