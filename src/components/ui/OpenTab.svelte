<script>
    export let title = undefined;
</script>

<li>
    {#if title} <h4>{title}</h4> {/if}
    <div>
        <slot />
    </div>
    <slot name='action' />
</li>

<style lang='postcss'>
    h4 {
        @apply leading-6 text-xl;
        letter-spacing: -1px;
    }

    div {
        @apply my-2;
    }

    li {
        @apply mb-16;
        @apply md:mb-0 last:mb-0;
    }
</style>
