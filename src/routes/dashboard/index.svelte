<script context="module">
	export function preload() {
		return this.fetch(`dashboard.json`).then(r => r.json()).then(comuni => {
			return { comuni };
		});
	}
</script>

<script>
	export let comuni;
</script>

<style>
	ul {
		margin: 0 0 1em 0;
		line-height: 1.5;
	}
</style>

<svelte:head>
	<title>Le Dashboards dei Comuni che hanno aderito</title>
</svelte:head>

<h1>Le Dashboards dei Comuni che hanno aderito</h1>

<ul>
	{#each comuni as comune}
		<li><a rel="prefetch" href="dashboard/{comune.slug}">{comune.title}</a></li>
	{/each}
</ul>
