<script>
    import Button from './ui/Button.svelte';
    import dashboardDesktop from '../assets/dashboard-desktop.svg'
    import dashboardMobile from '../assets/dashboard-mobile.svg'
    import OpenTab from './ui/OpenTab.svelte'
    import OpenTabs from './ui/OpenTabs.svelte'
    import PageSection from './ui/PageSection.svelte'
    import Meta from './Meta.svelte'

    const metadata = {
        title: 'Informa Covid',
        description: 'Buone pratiche di comunicazione pubblica dei dati COVID19 da parte dei comuni',
        image: 'https://informacovid.opendatasicilia.it/informa-covid19.jpg',
        imageAlt: 'Informa Covid',
        url:'https://informacovid.opendatasicilia.it/',
        type: 'article',
        twitterCard: 'summary_large_image',
	}
</script>

<Meta {metadata}/>
<main class='main'>
    <PageSection title='Il tuo kit di comunicazione'
                 subTitle='Ti aiutiamo a comunicare in maniera trasparente ed efficace i dati Covid della tua Amministrazione'>
        <Button scrollTo='#come-funziona' variant='highlight'>Inizia da qui</Button>
        <div class='dashboard'>
            <img class='hidden md:block' src={dashboardDesktop} alt='Immagine di una dashboard'>
            <img class='md:hidden' src={dashboardMobile} alt='Immagine di una dashboard'>
        </div>
    </PageSection>
    <PageSection id='come-funziona'
                 title='Come funziona'
                 subTitle='Gli strumenti del kit sono facili da usare e forniscono tutto quello che serve per comunicare alla cittadinanza.'>
        <section class='video'></section>
        <section class='tabs'>
            <OpenTabs>
                <OpenTab title='Inserisci i dati con il Google Form'>
                    <p>Lorem ipsum dolor sit amet, tincidunt vestibulum. Fusce egeabus consectetuer turpis,
                        suspendisse.</p>
                    <a slot='action' class='action' href='#'>Crea il Form Google</a>
                </OpenTab>
                <OpenTab title='Comunica i dati con la tua dashboard'>
                    <p>Lorem ipsum dolor sit amet, tincidunt vestibulum. Fusce egeabus consectetuer turpis,
                        suspendisse.</p>
                    <a slot='action' class='action' href='#'>
                        Crea la dashbaord con Google Data Studio
                    </a>
                </OpenTab>
                <OpenTab title='Scopri il SiciliaCovid19Bot'>
                    <p>Lorem ipsum dolor sit amet, tincidunt vestibulum. Fusce egeabus consectetuer turpis,
                        suspendisse.</p>
                    <a slot='action' class='action' href='#'>
                        Vai a CovidBot
                    </a>
                </OpenTab>
            </OpenTabs>
        </section>
    </PageSection>
    <PageSection title='Esperienze'
                 subTitle='Le Amministrazioni che usano già Informa Covid'>
        <section class='tabs'>
            <OpenTabs>
                <OpenTab>
                </OpenTab>
                <OpenTab>
                </OpenTab>
                <OpenTab>
                </OpenTab>
            </OpenTabs>
        </section>
    </PageSection>
</main>

<style lang='postcss'>
    article {
        @apply mt-12 text-center;
    }

    .action {
        @apply text-secondary;
    }

    .dashboard {
        @apply flex justify-center mt-16;
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
