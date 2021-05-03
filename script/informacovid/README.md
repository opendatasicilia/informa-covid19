# informacovid.sh

È uno script che a partire dal [file](../../dati/informacovid/informacovid.yml) che contiene l'anagrafica dei file CSV che hanno aderito `informacovid`, li scarica nella cartella `dati/informacovid/`.

Per ogni comune viene creata un cartella a cui come nome viene assegnato il codice ISTAT del comune, e al suo interno viene creato un CSV con lo stesso nome.

Quindi ad esempio il file del comune di Regalbuto, codice ISTAT `086016`, sarà in questa posizione: [`dati/informacovid/086016/086016.csv`](../../dati/informacovid/086016/086016.csv).
