<script>
    export let metadata = {};
    const defaultBasePath = 'https://informacovid.opendatasicilia.it/';
</script>

<svelte:head>
    <meta property='og:locale' content='it_IT' />

    {#if metadata.title}
        <title>{metadata.title}</title>
        <meta name='title' content={metadata.title} />
        <meta property='og:title' content={metadata.title} />
        <meta property='twitter:title' content={metadata.title} />
    {/if}

    {#if metadata.description}
        <meta name='description' content={metadata.description} />
        <meta property='og:description' content={metadata.description} />
        <meta property='twitter:description' content={metadata.description} />
    {/if}

    {#if metadata.image}
        <meta property='og:image' content={`${defaultBasePath}${metadata.image.general}`} />
        <meta property='twitter:image' content={`${defaultBasePath}${metadata.image.twitter}`} />
        <meta property='og:image:secure_url' content={`${defaultBasePath}${metadata.image.general}`} />
        <meta property='og:image:width' content='1200' />
        <meta property='og:image:height' content='627' />
    {/if}

    {#if metadata.imageAlt}
        <meta property='og:image:alt' content={metadata.imageAlt} />
        <meta property='twitter:image:alt' content={metadata.imageAlt} />
    {/if}

    {#if metadata.url}
        <meta property='og:url' content={metadata.url} />
        <meta property='twitter:url' content={metadata.url} />
    {/if}

    {#if metadata.type}
        <meta property='og:type' content={metadata.type} />
    {/if}

    {#if metadata.twitterCard}
        <meta property='twitter:card' content={metadata.twitterCard} />
    {/if}

    {#if metadata.twitterHandler}
        <meta property='twitter:site' content={metadata.twitterHandler} />
        <meta property='twitter:creator' content={metadata.twitterHandler} />
    {/if}
</svelte:head>
