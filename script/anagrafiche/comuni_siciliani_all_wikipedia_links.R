#Scraping delle pagine wikiperdia dei comuni italinai per ottenere i rispettivi stemmi

library(rvest)
library(magrittr)
library(tidyverse)

#importo dati
df <- read_csv("https://docs.google.com/spreadsheets/d/e/2PACX-1vTJN6bxxxqPqpNGQWmUsmH1uH85mkas1Bta4BH_EPBgl9qzg_SEVUjlbaOIiZE3gvMbrEgUYdkhXTBk/pub?gid=1260593482&single=true&output=csv")

#filtro dati dei comuni siciliani
df_sic <- subset (df, regione_denominazione == "Sicilia")

#ridimensiono df
#df_sic <- head(df_sic)

#creo liste
img1 <- c()
img2 <- c()
img3 <- c()
img4 <- c()

#estraggo url immagini
for (link in df_sic$wikipedia_link){
  imageURL <- read_html(link) %>%
    html_nodes(css = "img") %>%
    html_attr("src")
  img1 <- c(img1, imageURL[1])
  img2 <- c(img2, imageURL[2])
  img3 <- c(img3, imageURL[3])
  img4 <- c(img4, imageURL[4])
}

#creo nomi nuove colonne
link_img1 <- img1
link_img2 <- img2
link_img3 <- img3
link_img4 <- img4

#aggiungo nuove colonne
df_sic <- cbind(link_img1,df_sic)
df_sic <- cbind(link_img2,df_sic)
df_sic <- cbind(link_img3,df_sic)
df_sic <- cbind(link_img4,df_sic)

#riordino colonne
df_sic <- df_sic[, c(5,6,7,8,4,3,2,1)]

#esporto csv
write.csv(df_sic, file="../../dati/anagrafiche/comuni_siciliani_all_wikipedia_links.csv", row.names = FALSE)

#il csv processato con solo il link dello stemma è https://raw.githubusercontent.com/opendatasicilia/informa-covid19/main/dati/anagrafiche/stemmi_comuni_siciliani.csv