<script>
    import dashboardDesktop from '../assets/dashboard-desktop.svg';
    import dashboardMobile from '../assets/dashboard-mobile.svg'
    import exampleCate from '../assets/catenanuova-600x600.png'
    import exampleRega from '../assets/regalbuto-600x600.png'
    import exampleSerra from '../assets/serradifalco-600x600.png'
    import youtubeCover from '../assets/informa-covid-youtube-cover-mobile.png'
    import Button from './ui/Button.svelte'
    import OpenTab from './ui/OpenTab.svelte'
    import OpenTabs from './ui/OpenTabs.svelte'
    import PageSection from './ui/PageSection.svelte'
</script>

<main class='main'>
    <PageSection id='cosa'
                 title='Il tuo kit di comunicazione'
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
            dispositivo mobile.
        </section>
    </PageSection>
    <PageSection id='come-funziona'
                 title='Come funziona'
                 subTitle=''>
        <section class='my-8'>
            La soluzione che proponiamo utilizza strumenti gratuiti disponibili in rete e mettiamo a disposizione una
            video-guida per realizzarla. Inoltre è disponibile un tutorial per seguire passo-passo l'intera procedura di
            attivazione. In pochi semplici passaggi la piattaforma è disponibile e pronta per essere utilizzata. I
            servizi su cui si basa la soluzione proposta sono gratuiti e disponibili in rete.
        </section>
        <section class='video mb-8'>
            <iframe class='hidden md:block' width='100%' height='500' src='https://www.youtube.com/embed/gVvy9KQune0'
                    title='Informa Covid guida video' frameborder='0'
                    allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
                    allowfullscreen></iframe>
            <a href='https://www.youtube.com/embed/gVvy9KQune0' class='md:hidden' target='_blank'>
                <img src={youtubeCover} alt='Informa Covid Video preview'>
            </a>
        </section>
        <Button href='https://github.com/opendatasicilia/informa-covid19/raw/main/risorse/informa-covid-guida.pdf'
                target='_blank'
                variant='highlight'>Vai alla Guida in PDF
        </Button>
    </PageSection>
    <PageSection id='esperienze' title='Esperienze'>
        <section class='mt-8'>
            <strong>InformaCovid</strong> è rivolto principalmente ai sindaci delle città italiane, <strong>ma non solo</strong>. Associazioni, scuole, testate giornalistiche, praticamente chiunque sia in possesso di dati COVID19, provenienti da fonti ufficiali ed autorevoli, può utilizzare la piattaforma per dare comunicazione alla cittadinanza. Di seguito i primi comuni che hanno aderito a <strong>InformaCovid</strong>.
        </section>

        <section class='tabs'>
            <OpenTabs>
                <OpenTab>
                    <div>
                        <a class='experience' target='_blank' rel='noopener nofollow' href='https://newsl.ink/dashboardregalbuto'>
                            <img src={exampleRega} alt=''>
                            <p>Regalbuto (EN)</p>
                        </a>
                    </div>
                </OpenTab>
                <OpenTab>
                    <div>
                        <a class='experience' target='_blank' rel='noopener nofollow' href='https://notizie.link/dashboardcatenanuova'>
                            <img src={exampleCate} alt=''>
                            <p>Catenanuova (EN)</p>
                        </a>
                    </div>
                </OpenTab>
                <OpenTab>
                    <div>
                        <a class='experience' target='_blank' rel='noopener nofollow'
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
    </PageSection>

    <PageSection id='contattaci' title='Contattaci'>
        <section>
            InformaCovid è un prodotto gratuito e che noi, come comunità, non vendiamo né servizi né consulenze. Tuttavia, per qualsiasi dubbio, chiarimento e/o supporto (sempre gratuito), non esitate a contattarci. Come comunità saremo lieti di potervi dare il nostro aiuto attraverso il nostro <a class='underline' target='_blank' rel='noopener nofollow' href='https://github.com/opendatasicilia/informa-covid19/discussions/4'>spazio di discussione</a>.
            È anche possibile contribuire con idee, richieste e qualunque altro tipo di feedback.
        </section>
    </PageSection>

</main>

<style lang='postcss'>
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
        @apply border mx-auto;
    }
</style>
