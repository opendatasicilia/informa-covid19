<script>
    import ods from '../assets/logo-ods-white.svg';
    import { remove } from '../components/actions/optOut'
</script>

<footer>
    <ul>
        <li class='logo'>
            <img src={ods} alt='Logo Open Data Sicilia'>
        </li>
        <li class='empty'>

        </li>
        <li>
            <h3>Licenza</h3>
            <p>Tutti i contenuti del sito hanno licenza
                <a target='_blank' rel='noopener nofollow'
                   href='https://creativecommons.org/licenses/by/4.0/deed.it'>
                    CC-BY 4.0
                </a>.
            </p>
            <p>Le illustrazioni sono state realizzate da
                <a target='_blank' rel='noopener nofollow'
                   href='https://instagram.com/tatianasketches'>
                    Tatiana Di Majo
                </a>.
            </p>
        </li>
        <li>
            <h3>-</h3>
            <p>Hai trovato un errore? Vuoi contribuire al progetto?
                <a target='_blank' rel='noopener nofollow'
                   href='https://github.com/opendatasicilia/informa-covid19/discussions'>
                    Unisciti alla discussione
                </a>.
            </p>
        </li>
    </ul>
    {#if process.browser && localStorage.getItem('consent')}
    <div class='analytics'>
        <small>
            Google Analytics tracks number of visitors.<br/>
            You have
            {#if localStorage.getItem('consent') === 'yes'}
                accepted
            {:else}
            {#if localStorage.getItem('consent') === 'no'}
                refused
            {/if}
            {/if}
             to take part.
            <button on:click={() => remove()}>Review my choice</button>
        </small>
    </div>
    {/if}
</footer>

<style lang='postcss'>
    a {
        @apply underline;
    }

    footer {
        @apply bg-secondary leading-snug mt-12 py-12 pb-16 text-white;
    }

    h3 {
        @apply text-lg;
    }

    ul {
        @apply container grid grid-rows-4 justify-items-center px-12 text-center mx-auto;
        @apply md:grid-cols-4 md:grid-rows-none md:gap-20 md:text-left;
    }

    li {
        @apply mb-8;
        @apply md:mb-0;
    }
    
    @media(max-width:640px) {
        .empty {
            display: none;
        }
    }

    .logo {
        width: 74px;
    }

    .logo img {
        @apply w-full;
    }

    .analytics {
        @apply text-center
    }
    button {
        @apply underline
    }
</style>
