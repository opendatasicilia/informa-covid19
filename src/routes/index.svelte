<script>
    import Meta from '../components/Meta.svelte';
    import Page from '../components/Page.svelte'
    import socialCardTwitter from '../assets/informa-covid-social-card-tw.png'
    import socialCardFacebook from '../assets/informa-covid-social-card-fb.png'

    const metadata = {
      title: 'Informa Covid',
      description:
        'Buone pratiche di comunicazione pubblica dei dati COVID19 per le Amministrazioni Locali',
      image: {
        general: socialCardFacebook,
        twitter: socialCardTwitter,
      },
      imageAlt: 'Informa Covid',
      url: 'https://informacovid.opendatasicilia.it/',
      type: 'article',
      twitterCard: 'summary_large_image',
      twitterHandler: '@opendatasicilia',
    }
</script>

<Meta {metadata} />
<Page />

<style global lang='postcss'>
    @tailwind base;
    @tailwind components;
    @tailwind utilities;

    @layer base {
        body {
            @apply antialiased font-normal text-current;
        }

        a {
            @apply md:hover:underline;
        }

        h1, h2, h3, h4 {
            @apply font-medium;
        }

        h2 {
            @apply text-5xl;
        }
    }
</style>
