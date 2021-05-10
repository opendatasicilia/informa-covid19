<script>
    export let id = undefined;
    export let title
    export let subTitle
</script>

<article {id}>
    <header>
        {#if title} <h2 class='title'>{title}</h2> {/if}
        {#if subTitle} <h3 class='sub-title'>{subTitle}</h3> {/if}
    </header>
    <slot />
</article>

<style lang='postcss'>
    article {
        @apply mx-auto py-12 text-center max-w-xs;
        @apply md:max-w-4xl;
    }

    header {
        @apply mb-3;
    }

    .sub-title {
        @apply leading-6 mx-auto py-3;
        @apply md:leading-7 md:text-xl md:max-w-xl;
    }

    .title {
        @apply py-3;
    }
</style>
