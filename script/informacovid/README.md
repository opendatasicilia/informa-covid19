# informacovid.sh

È uno script che a partire dal [file](../../dati/informacovid/informacovid.yml) che contiene l'anagrafica dei file CSV che hanno aderito `informacovid`, li scarica nella cartella [`dati/informacovid/`](../../dati/informacovid).

Per ogni comune viene creata un cartella a cui come nome viene assegnato il codice ISTAT del comune, e al suo interno viene creato un CSV con lo stesso nome.

Quindi ad esempio il file del comune di Regalbuto, codice ISTAT `086016`, sarà in questa posizione: [`dati/informacovid/086016/086016.csv`](../../dati/informacovid/086016/086016.csv).

## Quando e come viene eseguito lo script

È gestito tramite [questo workflow di github](.github/workflows/informacovid.yml).

## Come aggiungere un comune alla lista

- aprire il [file con l'anagrafica](../../dati/informacovid/informacovid.yml). **NOTA BENE** il codice ISTAT deve essere composto da 6 caratteri;
- aggiungere codice ISTAT e URL del CSV del nuovo comune, utilizzando la stessa struttura del file di anagrafica (esempio).


```yaml
- comune_codice_istat: 086016
  URL_csv: https://docs.google.com/spreadsheets/d/e/2PACX-1vRXHbLv9Jm42EA8Y3YExNUUwKJkRTkrtQklpbnRjWI6IjqDyd6Qz6qg2vMpYQa6gTfS47qgzP0GnpuM/pub?output=csv
- comune_codice_istat: 086006
  URL_csv: https://docs.google.com/spreadsheets/d/e/2PACX-1vSCEjFPsKDAaBAtlMFiOz14BUGKwhndMYZ6QK5824dRAwU0c0Zrq-8x1cdLN1t5aBUHxrUtRb2LxJxf/pub?gid=234868662&single=true&output=csv
- comune_codice_istat: nuovoCodiceISTAT
  URL_csv: https://nuovoURL/file.csv
```
