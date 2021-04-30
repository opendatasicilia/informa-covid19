import os
import csv
import requests
import pandas as pd
from zipfile import ZipFile
'''
ISTAT (2020)
comune_codice_istat
comune_denominazione
popolazione
'''
#Scarica temporaneamente il file .zip
permalink = 'http://demo.istat.it/pop2020/dati/comuni.zip'
print("Scaricamento dati...")
req = requests.get(permalink)
csv = req.content
f = open('comuni.zip', 'wb')
f.write(csv)
f.close()

#Estrai e rimuovi archivio .zip
print("Estraggo archivio ISTAT...")
with ZipFile('comuni.zip', 'r') as zipObj:
   zipObj.extractall()
os.remove(f.name)

#Adatta dataframe
df = pd.DataFrame(pd.read_csv("comuni.csv", low_memory=False, skiprows=1, converters={'Codice comune': '{:0>6}'.format}))
df.drop(df.tail(2).index,inplace=True)                                                  #Rimuovi le ultime 2 righe..
df = df[['Codice comune','Denominazione','Totale Maschi','Totale Femmine']]             #Seleziona colonne utili
df = df.groupby(['Codice comune']).last().reset_index()                                 #Raggruppa per codice istat e seleziona i totali
df['popolazione'] = df.sum(axis=1).astype(int)                                          #Somma tutt*
df.drop(["Denominazione","Totale Maschi","Totale Femmine"], axis = 1, inplace = True)   #Rimuovi singol*
df.columns = ['comune_codice_istat','popolazione']                                      #Seleziona colonne finali

#Esporta csv
df.to_csv("pop.csv", index=False)

#Rimuovi file temporanei
os.remove('comuni.csv')
print("Fatto\n")
