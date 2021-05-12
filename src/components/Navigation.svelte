<script>
    import { scrollTo } from './actions/scrollTo';

    import Button from './ui/Button.svelte'
</script>

<ul>
    <li class='nav-item'>
        <a use:scrollTo={'#cosa'} class='nav-item-link' href='#cosa'>Cosa è Informa Covid?</a>
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
</ul>

<style lang='postcss'>
    ul {
        @apply grid grid-cols-4;
    }

    .nav-item {
        @apply self-center;
    }
</style>
