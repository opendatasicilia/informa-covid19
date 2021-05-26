<script>
    const id = "UA-197920505-1";
    import { stores } from '@sapper/app';
    const { page } = stores();
    $: {
      if (typeof gtag !== "undefined"){
        gtag("config", id, {
          page_path: $page.path
        });
      }
    }
</script>