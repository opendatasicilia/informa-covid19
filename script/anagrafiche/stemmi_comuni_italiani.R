#scraping stemmi di tutti i comuni italiani
#sito araldicacivica.it/

#carico librerie 
library(beepr)
library(rvest)
library(dplyr)
library(tidyverse)

#ricostruisco url delle pagine con gsheet

#importo df con link alle pagine
df <- read_csv("https://docs.google.com/spreadsheets/d/e/2PACX-1vQXbH81DH4Wst-WUe9iy2B4u0C_y7rC44JYW32XpHLkRDMoYgIrVWcT5BqRAsShrCtH9OAzxl4XjcF_/pub?gid=0&single=true&output=csv")

#rimpiccilisco df
#df <- head(df)

#estraggo url immagini
img <- c()

for (link in df$link){
  imageURL <- read_html(link) %>% html_nodes("#archive-container img") %>% html_attr("src")
  img<-c(img,imageURL)
}

#estraggo comuni
comune <- c()

for (link in df$link){
  comune_title <- read_html(link) %>% html_nodes(".tb-heading a") %>% html_text()
  comune <-c(comune,comune_title)
}

#segnale acustico
beep(8)

#creo df
stemmi <- data.frame(comune,img)

#esporto csv
write.csv(stemmi, file = "~/R/Script/Web scraping/stemmi_comuni_italiani_without_55_78.csv")