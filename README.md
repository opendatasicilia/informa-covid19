[![](https://img.shields.io/badge/discussioni-partecipa-%2344CC11)](https://github.com/opendatasicilia/informa-covid19/discussions) [![](https://img.shields.io/badge/frictionless-ready-%23EA6D4C)](https://frictionlessdata.io/)


---

![](./risorse/informa-covid-logo.svg)

### Contenuti

- [InformaCovid](#informacovid)
    - [Processo di pubblicazione](#processo-di-pubblicazione)
    - [Esempi d'uso](#esempi-duso)
- [Landing Page](#landing-page)
    - [Sviluppo locale](#sviluppo-locale)
    - [Suggerimenti pratici](#suggerimenti-pratici)
- [Licenza](#licenza)

---

# InformaCOVID

Buone pratiche di comunicazione pubblica dei dati COVID19 da parte dei comuni

InformaCOVID19 è una cassetta degli attrezzi (_toolkit_) per le buone pratiche di comunicazione dei dati.

Il _kit_ comprende:

- Un form attraverso il quale è possibil inserire dati
- Uno [schema dati](https://github.com/opendatasicilia/informa-covid19/blob/main/dati/informacovid/informacovid_schema.yaml)
- Una template dashboard per visualizzare i dati

### Processo di pubblicazione

Il processo di comunicazione, elaborazione, pubblicazione e visualizzazione dei dati è di seguito descritto:
![Documentazione](https://user-images.githubusercontent.com/77018886/131860826-d7786bf1-796f-4f86-ada1-cdbf662f4271.png)
È bene sottolineare che tale processo risulta essere estremamente flessibile e facilmente adattabile ad associazioni, scuole, testate giornalistiche: praticamente chiunque sia in possesso di dati COVID19, provenienti da fonti ufficiali ed autorevoli, può utilizzare la piattaforma per dare comunicazione alla cittadinanza.

L'aggiornamento dei dati (che è possibile trovare in [questa cartella](https://github.com/opendatasicilia/informa-covid19/tree/main/dati/informacovid)) avviene a seguito dell'esecuzione giornaliera di [questo script](https://github.com/opendatasicilia/informa-covid19/blob/main/script/informacovid/informacovid.sh) `bash`. [Qui](https://github.com/opendatasicilia/informa-covid19/blob/main/script/informacovid/README.md) maggiori informazioni.

### Esempi d'uso

InformaCOVID è già utilizzato da alcune Amministrazioni Pubbliche e testate giornalistiche. Guarda degli esempi:

- [Comune di Catenanuova (EN)](https://notizie.link/dashboardcatenanuova)
- [Comune di Regalbuto (EN)](https://newsl.ink/dashboardregalbuto)
- [Comune di Serradifalco (CL)](https://datastudio.google.com/reporting/45ec94b1-32f0-489e-b882-977c12af81d4)
- [Comune di Barrafranca (EN)](https://notizie.link/barrafranca-informacovid)

---

# Landing Page

La Landing Page di InformaCovid utilizza `Sapper` con `Svelte` e `Tailwind CSS`.

`Sapper` permette di generare una Landing Page statica così da essere meglio utilizzata in contesti SEO e social
(per le anteprime sharing).

### Sviluppo locale

Se vuoi contribuire e vuoi visualizzare l'anteprima delle modifiche in locale:

1. fai `clone` del progetto
1. da terminale, all'interno della `root folder` del progetto: `npm install`
1. da terminale, all'interno della `root folder` del progetto: `npm run dev`

Quest'ultimo comando farà partire un server di svilppo locale con cui potrai accedere alla landing page
(di solito in [http://localhost:3000/](http://localhost:3000/)).

Per ulteriori informazioni

### Suggerimenti pratici

Per rendere la UI omogenea e lo sviluppo più semplice, Informa Covid utilizza [Svelte](https://svelte.dev/)
e [Tailwind CSS](https://tailwindcss.com/). Entrambi possono essere utilizzati da chiunque abbia già conoscenze di base
di HTML/CSS e JavaScript.

Se vuoi modificare gli stili del progetto, considera l'utilizzo delle utility messe a disposzione da Tailwind CSS. Trovi
maggiorni info nella [documentazione](https://tailwindcss.com/docs_).

Per mantenere lo stile di codice omogeneo tra i vari `contributors`, Informa Covid utilizza `prettier` con `eslint`.
Guarda [qui](https://eslint.org/docs/user-guide/integrations#editors) e [qui](https://prettier.io/docs/en/editors.html)
impostare il tuo IDE/editor di codice preferito per trarre il massimo da questi strumenti.

# Licenza

Tutti i contenuti del sito sono forniti in licenza [CC-BY 4.0](https://creativecommons.org/licenses/by/4.0/deed.it).

Le illustrazioni sono state realizzate [Tatiana Di Majo](https://instagram.com/tatianasketches).
