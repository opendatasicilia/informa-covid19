<ul>
    <slot />
</ul>

<style lang='postcss'>
    ul {
        @apply mx-auto max-w-xs;
        @apply md:grid md:grid-cols-3 md:gap-24 md:text-left md:max-w-full;
    }
</style>
