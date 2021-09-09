<script>
    import { scrollTo as scrollToAction } from '../actions/scrollTo';

    export let href = '#'
    export let scrollTo = null
    export let target = null
    export let variant = 'primary'
</script>

{#if scrollTo}
    <a use:scrollToAction={scrollTo} href='/#' class='{`button button-${variant}`}'>
        <slot />
    </a>
{:else }
    <a href='{href}' target={target}  class='{`button button-${variant}`}'>
        <slot />
    </a>
{/if}

<style lang='postcss'>
    @layer components {
        .button {
            @apply inline-block px-12 py-3 rounded-md transition-colors text-white hover:no-underline;
        }

        .button-highlight {
            @apply bg-highlight hover:bg-highlight-500;
        }

        .button-primary {
            @apply bg-primary hover:bg-primary-500;
        }

        .button-primary-light {
            @apply bg-primary-light hover:bg-primary-light-500 text-current;
        }

        .button-secondary {
            @apply bg-secondary hover:bg-secondary-500;
        }
    }
</style>
