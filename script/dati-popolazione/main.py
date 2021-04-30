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

print("Unisco dataframes...")
df = pd.merge(left=com, right=pop, how='left', on=['comune_codice_istat'])

#Format e alcuni datatypes
df['regione_codice'] = df['regione_codice'].apply('{:0>2}'.format)
df['comune_codice_istat'] = df['comune_codice_istat'].apply('{:0>6}'.format)
df[['latitudine','longitudine']] = df[['latitudine','longitudine']].round(decimals=6)
df['popolazione'] = np.nan_to_num(df['popolazione']).astype(int)

#Esporta a CSV
df.to_csv('elenco-comuni-italiani.csv', index=None)

choice = input("Rimuovere files temporanei? [y/n] \n")
if choice == "y":
    os.remove('com.csv')
    os.remove('pop.csv')
else:
    pass

print("Finito!")
