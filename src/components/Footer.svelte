<script>
    import ods from '../assets/logo-ods-white.svg';
    import { remove, set } from '../components/actions/optOut'
</script>

<footer>
    <ul>
        <li class='logo'>
            <img src={ods} alt='Logo Open Data Sicilia'>
        </li>
        <li>

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
    <div class='analytics'>
        <small>
            Google Analytics tracks number of visitors<br/>
            You can 
            {#if process.browser}
                {#if localStorage.getItem('opt') === null}
                    <button on:click={() => set()}>opt out.</button>
                {:else}
                    <button on:click={() => remove()}>opt in.</button>
                {/if}
            {/if}
        </small>
    </div>
</footer>

<style>
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
