<script>
    import comuni from '../routes/d/_comuni'
</script>

<svelte:head>
  <title>Informa Covid - Esperienze</title>
  <meta name="robots" content="noindex, nofollow">
</svelte:head>

<article>
    <h2 class="title">Esperienze</h2>
      <section class='mt-8'>
          I comuni che hanno aderito a <strong>InformaCOVID</strong>
      </section>
    {#if comuni}
    <section class='tabs'>
      <ul>
        {#each comuni as comune}
            <div class='tab'>
                <a class='experience' target='_blank' rel='noopener nofollow' href={`d/${comune.slug}`}>
                  <div class='wrapper'>
                    <img class='stemma' src={comune.stemma} alt={comune.comune_denominazione} />
                  </div>
                  <p>{comune.comune_denominazione}</p>
                </a>
            </div>
        {/each}
      </ul>
    </section>
    {:else}
      <p>Caricamento...</p>
    {/if}    
</article>

<style lang='postcss'>
  article {
    @apply mx-auto py-12 text-center max-w-xs;
    @apply md:max-w-4xl;
  }
  ul {
    @apply mx-auto max-w-xs;
    @apply md:grid md:grid-cols-4 md:gap-24 md:text-left md:max-w-full;
  }
  .tabs {
    margin-top: 50px;
  }
  .tab {
    text-align: center;
    margin: 0 auto;
  }
  .wrapper {
    width: 160px;
    height: 160px;
    background-color: white;
    box-shadow: 0 0px 20px 1px rgb(64 60 67 / 16%);
    border-radius: 100%;
    margin: 0 auto;
  }
  .stemma {
    height: 100px;
    transform: translateY(30px);
    margin: 0 auto;
  }
</style>