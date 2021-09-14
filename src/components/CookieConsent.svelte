<script>
    import { set } from '../components/actions/optOut'
</script>

{#if process.browser && localStorage.getItem('consent') === null}
    <div class="cookie">
        <div class="wrapper">
            <h3>Informativa</h3>
            <p>Questo sito o gli strumenti di terze parti in esso integrati fanno uso di cookie necessari per il funzionamento e per il raggiungimento delle finalità descritte nella cookie policy.</p>
            <div class="buttons">
                <div class="left">
                    <a href="/privacy">
                        <button>Scopri di piu</button>
                    </a>
                </div>
                <div class="right">
                    <button on:click={() => set('no')}>Rifiuta</button>
                    <button on:click={() => set('yes')}>Accetta</button>
                </div>
            </div>
        </div>
    </div>
{/if}

<style lang='postcss'>
    h3 {
        @apply text-lg;
        font-weight: bold;
    }
    .wrapper{
        @apply mx-auto py-4 max-w-xs;
        @apply md:max-w-4xl;
    }
    .cookie{
        @apply text-white;
        background-color: #2F2E41;
        opacity: 0.99;
        z-index: 11;
        position: fixed;
        bottom: 0;
        width: 100%;
    }
    .cookie p{
        margin-top: 0.618rem
    }
    .buttons{
        display: flex;
        justify-content: space-between;
    }
    button{
        border-radius: 42px;
        padding: 10px;
        min-width: 161px;
    }
    @media (max-width: 640px) {
        button, .buttons {
            display: block;
            width: 93%;
            margin: 8px auto;
        }
    }
    .left button{
        background-color:#2A3D4B
    }
    .right button{
        background-color:#09A191
    }
</style>
