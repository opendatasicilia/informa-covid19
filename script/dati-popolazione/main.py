import os
import csv
import numpy as np
import pandas as pd

if not os.path.isfile('com.csv'):
    exec(open('1_latlong.py').read())
if not os.path.isfile('pop.csv'):
    exec(open('2_popolazione.py').read())

com = pd.read_csv("com.csv",keep_default_na=False)
pop = pd.read_csv("pop.csv")

print("Unisco dataframes...\n")
df = pd.merge(left=com, right=pop, how='left', on=['comune_codice_istat'])

#Format e alcuni datatypes
df['regione_codice'] = df['regione_codice'].apply('{:0>2}'.format)
df['comune_codice_istat'] = df['comune_codice_istat'].apply('{:0>6}'.format)
df[['latitudine','longitudine']] = df[['latitudine','longitudine']].round(decimals=6)
df['popolazione'] = np.nan_to_num(df['popolazione']).astype(int)

#Popolazioni non aggiornate
zero_pop = df[df['popolazione'].isin(['0'])]
nuova_pop = {}

#Aggiornare con i dati nuovi
nuova_pop = {
    'Borgo d\'Anaunia': 2478,
    'Novella' : 3618,
    'Ville di Fiemme' : 2563,
    'Misiliscemi' : 8669,
    }

#Aggiornamento popolazione
if(len(zero_pop)>0):
    print("Alcuni comuni non presentano dati aggiornati rispettivi alla popolazione:")
    for comune in zero_pop['comune_denominazione']:
        print(comune)
        if comune in nuova_pop:
            df.loc[df['comune_denominazione'] == comune, 'popolazione'] = nuova_pop[comune]
            mode = "automaticamente"
        else:
            new_pop = input("Inserire popolazione per "+comune+": ")
            df.loc[df['comune_denominazione'] == comune, 'popolazione'] = new_pop
            mode = "manualmente"
    print("\nLe popolazioni di questi paesi sono state aggiornate "+mode+"!")

#Esporta a CSV
df.to_csv('../../dati/dati-popolazione/elenco-comuni-italiani.csv', index=None)

choice = input("\nRimuovere files temporanei? [y/n] \n")
if choice == "y":
    os.remove('com.csv')
    os.remove('pop.csv')
else:
    pass

print("Finito!")
