import os
import csv
import requests
import pandas as pd
from geopy import Nominatim
'''
regione_codice,
regione_denominazione,
provincia_sigla,
provincia_denominazione,
comune_codice_istat,
comune_denominazione,
latitudine,
longitudine,
popolazione
'''
permalink = 'https://www.istat.it/storage/codici-unita-amministrative/Elenco-comuni-italiani.csv'
req = requests.get(permalink)
csv = req.content
f = open('Elenco-comuni-italiani-download.csv', 'wb')
f.write(csv)
f.close()

df = pd.DataFrame(pd.read_csv("Elenco-comuni-italiani-download.csv", encoding='latin-1', sep=';', keep_default_na=False, converters={'Codice Regione': '{:0>2}'.format,'Codice Comune formato alfanumerico': '{:0>6}'.format}))
df1 = df[['Codice Regione', 'Denominazione Regione', 'Sigla automobilistica', 'Denominazione dell\'Unità territoriale sovracomunale \n(valida a fini statistici)', 'Codice Comune formato alfanumerico', 'Denominazione in italiano']]
df1.columns = ['regione_codice', 'regione_denominazione', 'provincia_sigla', 'provincia_denominazione', 'comune_codice_istat', 'comune_denominazione']
#df1 = df1.head()

geolocator = Nominatim(user_agent="http")

print("Cominciamo...")
lat = []
long = []

for index, row in df1.iterrows():
        comune = row['comune_denominazione']+", "+row['regione_denominazione']
        location = geolocator.geocode(comune, country_codes="IT")
        lat.append(location.latitude)
        long.append(location.longitude)
        print(comune+", "+str(location.latitude)+", "+str(location.longitude))

df1['latitudine'] = lat
df1['longitudine'] = long

print("Fatto\n")

df1.to_csv('com.csv', index=None)
os.remove(f.name)
