<script>
    import dashboardDesktop from '../assets/dashboard-desktop.svg';
    import dashboardMobile from '../assets/dashboard-mobile.svg'
    import exampleCate from '../assets/catenanuova-600x600.png'
    import exampleRega from '../assets/regalbuto-600x600.png'
    import exampleSerra from '../assets/serradifalco-600x600.png'
    import Button from './ui/Button.svelte'
    import OpenTab from './ui/OpenTab.svelte'
    import OpenTabs from './ui/OpenTabs.svelte'
    import PageSection from './ui/PageSection.svelte'
</script>

<main class='main'>
    <PageSection title='Il tuo kit di comunicazione'
                 subTitle='Ti aiutiamo a comunicare in maniera trasparente ed efficace i dati Covid della tua Amministrazione'>
        <Button scrollTo='#come-funziona' variant='highlight'>Inizia da qui</Button>
        <div class='dashboard'>
            <img class='hidden md:block' src={dashboardDesktop} alt='Immagine di una dashboard'>
            <img class='md:hidden' src={dashboardMobile} alt='Immagine di una dashboard'>
        </div>
        <section class='mt-8'>
            <strong>InformaCovid</strong> è una cassetta degli attrezzi contenente strumenti digitali gratuiti, che
            proponiamo a tutti
            i comuni che vorranno aderire alla nostra iniziativa per fornire alla propria comunità un'informazione
            puntuale e di qualità. La cittadinanza avrà a disposizione una dashboard interattiva, aggiornata
            dinamicamente, attraverso cui visualizzare l'andamento dei contagi della propria città tramite PC, tablet e
            dispositivo mobile
        </section>
    </PageSection>
    <PageSection id='come-funziona'
                 title='Come funziona'
                 subTitle='Gli strumenti del kit sono facili da usare e forniscono tutto quello che serve per comunicare alla cittadinanza.'>
        <section class='video'></section>
        <section class='my-8'>
            La soluzione che proponiamo utilizza strumenti gratuiti disponibili in rete e mettiamo a disposizione una
            video-guida per realizzarla. Inoltre è disponibile un tutorial per seguire passo-passo l'intera procedura di
            attivazione. In pochi semplici passaggi la piattaforma è disponibile e pronta per essere utilizzata. I
            servizi su cui si basa la soluzione proposta sono gratuiti e disponibili in rete.
        </section>
        <Button variant='highlight'>Scarica la Guida in PDF</Button>
    </PageSection>
    <PageSection id='esperienze' title='Esperienze'>
        <section class='mt-8'>
            InformaCovid è rivolto principalmente ai sindaci delle città italiane, ma non solo. Associazioni,
            scuole, testate giornalistiche, praticamente chiunque sia in possesso di dati COVID19, provenienti da
            fonti ufficiali ed autorevoli, può utilizzare la piattaforma per dare comunicazione alla cittadinanza.
        </section>
        <section class='tabs'>
            <OpenTabs>
                <OpenTab>
                    <div>
                        <a class='experience' href='https://newsl.ink/dashboardregalbuto'>
                            <img src={exampleRega} alt=''>
                            <p>Regalbuto (EN)</p>
                        </a>
                    </div>
                </OpenTab>
                <OpenTab>
                    <div>
                        <a class='experience' href='https://notizie.link/dashboardcatenanuova'>
                            <img src={exampleCate} alt=''>
                            <p>Catenanuova (EN)</p>
                        </a>
                    </div>
                </OpenTab>
                <OpenTab>
                    <div>
                        <a class='experience'
                           href='https://datastudio.google.com/reporting/45ec94b1-32f0-489e-b882-977c12af81d4'>
                            <img src={exampleSerra} alt=''>
                            <p>Serradifalco (CL)</p>
                        </a>
                    </div>
                </OpenTab>
            </OpenTabs>
        </section>
    </PageSection>
    <PageSection id='contattaci' title='Chi siamo'>
        <section>
            Siamo la comunità <a class='underline' href='http://opendatasicilia.it/' target='_blank'
                                 rel='nofollow noopener'>Open Data
            Sicilia</a>,
            da anni impegnata a diffondere la cultura dell'open government e le
            prassi dell'open data nel nostro territorio siciliano. Siamo accomunati dalla genuina volontà di
            contribuire a migliorare la qualità della vita delle nostre comunità e vogliamo farlo con spirito di
            collaborazione e concretezza.
        </section>
        <section class='mt-8'>
            <strong>InformaCovid</strong> è rivolto principalmente ai sindaci delle città italiane. Associazioni,
            scuole, testate giornalistiche, praticamente chiunque sia in possesso di dati COVID19, provenienti da
            fonti ufficiali ed autorevoli, può utilizzare la piattaforma per dare comunicazione alla cittadinanza.
            È anche possibile contribuire con idee, richieste e qualunque altro tipo di feedback
            <a class='underline' target='_blank' rel='noopener nofollow'
               href='https://github.com/opendatasicilia/informa-covid19/discussions'>
                partecipando alla conversazione qui</a>.
        </section>
    </PageSection>
</main>

<style lang='postcss'>
    .action {
        @apply text-secondary;
    }

    .dashboard {
        @apply flex justify-center mt-16;
    }

    .experience {
        @apply flex flex-col text-center;
    }

    .experience p {
        @apply mt-8;
    }

    .tabs {
        @apply mt-16 md:mt-24;
    }

    .video {
        @apply mx-auto hidden md:block;
        background: lightgray;
        height: 400px;
        width: 800px;
    }
</style>
