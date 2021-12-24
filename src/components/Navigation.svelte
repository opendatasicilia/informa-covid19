<script>
    import { scrollTo } from './actions/scrollTo';
    import { onMount } from 'svelte';
    import Button from './ui/Button.svelte'

    let pathname

    onMount(() => {
        pathname = location.pathname
    });

</script>

<ul>
    {#if pathname === '/'}
        <li class='nav-item'>
            <a use:scrollTo={'#cosa'} class='nav-item-link' href='#cosa'>Cosa è InformaCOVID?</a>
        </li>
        <li class='nav-item'>
            <a use:scrollTo={'#come-funziona'} class='nav-item-link' href='#come-funziona'>Come funziona?</a>
        </li>
        <li class='nav-item'>
            <a use:scrollTo={'#esperienze'} class='nav-item-link' href='#esperienze'>Esperienze</a>
        </li>
        <li class='nav-item'>
            <Button scrollTo={'#contattaci'} variant='primary-light'>Contattaci</Button>
        </li>
    {:else}
        <li class='nav-item'>
            <a class='nav-item-link' href='#cosa'>Cosa è InformaCOVID?</a>
        </li>
        <li class='nav-item'>
            <a class='nav-item-link' href='#come-funziona'>Come funziona?</a>
        </li>
        <li class='nav-item'>
            <a class='nav-item-link' href='#esperienze'>Esperienze</a>
        </li>
        <li class='nav-item'>
            <Button href='#contattaci' variant='primary-light'>Contattaci</Button>
        </li>
    {/if}
</ul>

<style lang='postcss'>
    ul {
        @apply flex;
    }

    .nav-item {
        @apply self-center mx-8;
    }
</style>
