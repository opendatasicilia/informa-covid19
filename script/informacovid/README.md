# informacovid.sh

È uno script `bash` che a partire dal [file](../../dati/informacovid/informacovid.yml) che contiene l'anagrafica dei file CSV che hanno aderito `informacovid`, li scarica nella cartella [`dati/informacovid/`](../../dati/informacovid).

Per ogni comune viene creata un cartella a cui, come nome, viene assegnato il codice ISTAT del comune, e al suo interno viene creato un CSV con lo stesso nome.

Quindi ad esempio il file del comune di Regalbuto, codice ISTAT `086016`, sarà in questa posizione: [`dati/informacovid/086016/086016.csv`](../../dati/informacovid/086016/086016.csv).

## Schema dati

Lo schema è quello di [questo file](../../dati/informacovid/informacovid_schema.yaml), descritto secondo le specifiche [*frictionless*](https://frictionlessdata.io/).

## Validazione dati

Ad ogni aggiornamento viene fatto anche un controllo di validità delle fonti dati. Questi alcuni dei controlli, basati sul [file](../../dati/informacovid/informacovid_schema.yaml) che definisce lo schema:

- la presenza dei campi;
- la coerenza del contenuto dei campi, rispetto alla loro definizione (testo, numeri, date, ecc.);
- il rispetto di eventuali vincoli (ad esempio che il campo con il codice ISTAT sia composto da 6 caratteri numerici).

### Essere avvisati sui report di validazione

Uno dei modi per farlo è iscriversi al Feed RSS del file di report:<br>
<https://github.com/opendatasicilia/informa-covid19/commits/main/dati/informacovid/report.csv.atom>

Il report di validazione è fatto così:

| comune_codice_istat | valid |
| --- | --- |
| 082004 | true |
| 082006 | false |
| ... | ... |

Questo verrà aggiornato soltanto quando ci sarà una variazione nel file, quindi quando:

- sarà cancellato o aggiunto un nuovo comune;
- la validazione su un file di un comune passerà da `true` a `false` e viceversa.


## Quando e come viene eseguito lo script

È gestito tramite [questo workflow di github](../../.github/workflows/informacovid.yml).

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

## URL dei CSV dei comuni

Al momento ha questa struttura:


ht<span>t</span>ps://raw.githubusercontent.com/opendatasicilia/informa-covid19/main/dati/informacovid/`codiceISTAT`/`codiceISTAT.csv`


Quindi ad esempio:

<https://raw.githubusercontent.com/opendatasicilia/informa-covid19/main/dati/informacovid/086016/086016.csv>

