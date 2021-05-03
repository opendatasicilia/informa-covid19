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


yq <"$folder"/../../dati/informacovid/informacovid.yml -r '.[].comune_codice_istat' | while read line; do
  mkdir -p "$folder"/../../dati/informacovid/"$line"

  URL=$(<"$folder"/../../dati/informacovid/informacovid.yml yq -r '.[]|select(.comune_codice_istat| contains("'"$line"'"))|.URL_csv')
  curl -kL "$URL" >"$folder"/../../dati/informacovid/"$line"/"$line".csv
done
