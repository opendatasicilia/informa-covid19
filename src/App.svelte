<script>
    import Page from './components/Page.svelte';
</script>

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
