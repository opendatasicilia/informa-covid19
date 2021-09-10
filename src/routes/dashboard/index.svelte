<script>
  import {onMount} from 'svelte'
  let data, comune, comuni, columns, datarows;
  const gsheet = 'https://docs.google.com/spreadsheets/d/1eaKiVQhifRZpxqLh2vUCk4F7vm3nNP9nz67GrzArqtI/gviz/tq?tqx=out:json&sheet=csv_redirect'

   onMount(async () => {
    await fetch(gsheet)
      .then(res => res.text())
      .then(text => {
        data = JSON.parse(text.substr(47).slice(0, -2))
        data = data.table
        const cols = data.cols
        const rows = data.rows

        columns = []
        for(const col of cols){
          columns.push(col.label)
        }

        datarows = []
        for(const row of rows){
          datarows.push(row.c.map(obj => obj.v));
        }

        comuni = []
        for(var y = 0; y < rows.length; y++){
          comune = {};
          for(var i = 0; i < columns.length; i++){
            comune[columns[i]] = datarows[y][i];
          }
          comuni.push(comune)
        }
    })
      .catch(error => {
        console.log(error)
      })
  });
</script>

<div>
    {#if comuni}
    <pre>{JSON.stringify(comuni, null, 4)}</pre>
    {:else}
    <p>Caricamento...</p>
    {/if}
</div>