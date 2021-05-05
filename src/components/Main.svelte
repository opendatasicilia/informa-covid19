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
                    <a slot='action' class='action' href='/#'>Crea il Form Google</a>
                </OpenTab>
                <OpenTab title='Comunica i dati con la tua dashboard'>
                    <p>Lorem ipsum dolor sit amet, tincidunt vestibulum. Fusce egeabus consectetuer turpis,
                        suspendisse.</p>
                    <a slot='action' class='action' href='/#'>
                        Crea la dashbaord con Google Data Studio
                    </a>
                </OpenTab>
                <OpenTab title='Scopri il SiciliaCovid19Bot'>
                    <p>Lorem ipsum dolor sit amet, tincidunt vestibulum. Fusce egeabus consectetuer turpis,
                        suspendisse.</p>
                    <a slot='action' class='action' href='/#'>
                        Vai a CovidBot
                    </a>
                </OpenTab>
            </OpenTabs>
        </section>
    </PageSection>
    <PageSection id='esperienze'
                 title='Esperienze'
                 subTitle='Le Amministrazioni che usano già Informa Covid'>
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
