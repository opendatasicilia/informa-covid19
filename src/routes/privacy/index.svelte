<script>
    import Meta from '../../components/Meta.svelte'
    import Page from '../../components/Page.svelte'
    import Privacy from '../../components/Privacy.svelte'
    import socialCardFacebook from '../../assets/informa-covid-social-card-fb.png'
    import socialCardTwitter from '../../assets/informa-covid-social-card-tw.png'

    const metadata = {
      title: 'Informa Covid - Cookie Policy',
      description:
        'Buone pratiche di comunicazione pubblica dei dati COVID19 per le Amministrazioni Locali',
      image: {
        general: socialCardFacebook,
        twitter: socialCardTwitter,
      },
      imageAlt: 'Informa Covid',
      url: 'https://informacovid.opendatasicilia.it/privacy',
      type: 'article',
      twitterCard: 'summary_large_image',
      twitterHandler: '@opendatasicilia',
    }

</script>

<Meta {metadata} />
<Page page={Privacy} />

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

        h3 {
            @apply text-4xl;
        }

        p {
            @apply my-8;
        }
    }
</style>