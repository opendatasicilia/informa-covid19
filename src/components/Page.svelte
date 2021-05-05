<script>
    import Navigation from './Navigation.svelte';
    import Main from './Main.svelte'
    import Logo from './Logo.svelte'
    import { scrollToTop } from './actions/scrollTo'
    import Footer from './Footer.svelte'
</script>

<div class='container leading-snug mx-auto'>
    <header>
        <h1 class='logo'>
            <a href='/'>
                <span class='sr-only'>Informa Covid</span>
                <Logo />
            </a>
        </h1>
        <span class='nav'>
        <Navigation />
    </span>
    </header>
    <Main />
</div>
<Footer />
<div class='top'>
    <!-- svelte-ignore a11y-missing-attribute -->
    <a use:scrollToTop href='/#'>Torna su</a>
</div>

<style lang='postcss'>
    header {
        @apply flex flex-col mt-8;
        @apply md:flex-row md:mb-12;
    }

    .logo {
        @apply self-center;
    }

    .nav {
        @apply hidden ml-auto mr-0 text-center;
        @apply md:block;
    }

    .top {
        @apply bg-primary-light fixed bottom-6 right-6 h-14 rounded-full w-14 z-10;
    }

    .top a {
        @apply block h-full relative text-primary-light w-full;
        font-size: 0;
    }

    .top a:before {
        @apply block border-primary h-0 relative w-0;
        content: '';
        border-top-color: transparent;
        border-top-style: none;
        border-top-width: 0;
        border-right-color: transparent;
        border-right-style: solid;
        border-right-width: 12px;
        border-bottom-style: solid;
        border-bottom-width: 12px;
        border-left-color: transparent;
        border-left-style: solid;
        border-left-width: 12px;
        margin: -7px auto 0;
        top: 50%;
    }
</style>
