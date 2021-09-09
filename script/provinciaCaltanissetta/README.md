# provinciaCaltanissetta.sh

È uno [script ](https://github.com/opendatasicilia/informa-covid19/blob/main/script/provinciaCaltanissetta/provinciaCaltanissetta.sh)`bash` che **converte** i bollettini `.xslx` rilasciati quotidinamente dall'ASP di Caltanissetta in `.csv` e li **unisce** generando in output [questo file](https://github.com/opendatasicilia/informa-covid19/blob/main/dati/rawdata/provinciaCaltanissetta/target/output.txt). I file Excel sono contenuti in [questa cartella](https://github.com/opendatasicilia/informa-covid19/tree/main/dati/rawdata/provinciaCaltanissetta/source)

## Esecuzione dello script

Lo script viene gestito da [questa action](https://github.com/opendatasicilia/informa-covid19/blob/main/.github/workflows/provinciaCaltanissetta.yml) che lo esegue ogniqualvolta un nuovo excel viene caricato nella cartella /dati/rawdata/provinciaCaltanissetta/[source](https://github.com/opendatasicilia/informa-covid19/tree/main/dati/rawdata/provinciaCaltanissetta/source)/

## Input

I file Excel dell'ASP CL hanno questa struttura:

![image](https://user-images.githubusercontent.com/77018886/132376844-7070fa90-1e08-45ca-9853-b68339476e1e.png)

## Output

Il [file ](https://raw.githubusercontent.com/opendatasicilia/informa-covid19/main/dati/rawdata/provinciaCaltanissetta/target/output.txt)di output ha questa struttura:
<html>
<body>

denominazione_comune | terapia_intensiva | malattie_infettive | positivi_quarantena_domiciliare | ricoverati_altrove | guariti_clinicamente | guariti_da_covid | deceduti_in_provincia | deceduti_fuori_provincia | data
-- | -- | -- | -- | -- | -- | -- | -- | -- | --
Acquaviva Platani |   |   |   |   |   | 10 |   |   | 2021-03-23
Bompensiere |   |   |   |   |   | 18 | 1 |   | 2021-03-23
Butera |   |   |   |   |   | 81 |   |   | 2021-03-23
Campofranco |   | 1 |   |   |   | 40 | 2 |   | 2021-03-23
Caltanissetta | 3 | 43 | 430 | 1 |   | 1174 | 27 | 1 | 2021-03-23
Delia | 1 |   | 14 |   |   | 31 |   |   | 2021-03-23
Gela | 1 | 7 | 50 | 3 |   | 2786 | 62 |   | 2021-03-23
Marianopoli |   |   |   |   |   | 6 | 1 |   | 2021-03-23
Mazzarino |   |   | 18 |   |   | 192 | 3 |   | 2021-03-23
Milena | 1 |   | 10 |   |   | 142 | 5 |   | 2021-03-23
Montedoro |   |   | 22 |   |   | 49 | 3 |   | 2021-03-23
Mussomeli |   | 1 | 31 |   |   | 168 | 4 | 1 | 2021-03-23
Niscemi |   | 1 | 72 |   |   | 999 | 20 |   | 2021-03-23
Resuttano |   |   | 4 |   |   | 54 |   |   | 2021-03-23
Riesi |   | 3 | 44 | 1 |   | 207 | 6 |   | 2021-03-23
San Cataldo |   | 2 | 44 |   |   | 563 | 9 |   | 2021-03-23
Santa Caterina Villarmosa |   |   | 7 |   |   | 62 | 1 |   | 2021-03-23
Serradifalco |   | 2 | 56 |   |   | 91 | 1 |   | 2021-03-23
Sommatino |   |   | 14 |   |   | 49 | 3 |   | 2021-03-23
Sutera |   |   | 1 |   |   | 3 |   |   | 2021-03-23
Vallelunga Pratameno |   | 1 | 15 |   |   | 23 |   |   | 2021-03-23
Villalba |   |   | 15 |   |   | 29 |   |   | 2021-03-23
altreProvince |   | 2 |   | 2 | 14 | 46 | 25 |   | 2021-03-23

<!--EndFragment-->
</body>
</html>

Quest'ultimo file viene processato in Google Sheets (che calcola alcuni campi necessari e lo adegua allo [schema informaCOVID](https://github.com/opendatasicilia/informa-covid19/blob/main/dati/informacovid/informacovid_schema.yaml)) e viene trattato dallo [script informacovid.sh](https://github.com/opendatasicilia/informa-covid19/blob/main/script/informacovid/informacovid.sh)

## Processo di pubblicazione dati dell'ASP di Caltanissetta
![Documentazione - Bollettini ASP CL](https://user-images.githubusercontent.com/77018886/132263722-363327eb-40cd-4190-abd7-3921a4cec0da.png)
