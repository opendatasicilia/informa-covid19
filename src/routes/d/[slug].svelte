<script context="module">
export async function preload({ params }) {
	const res = await this.fetch(`d/${params.slug}.json`);
	const data = await res.json();
	if (res.status === 200) {
		return { comune: data };
	} else {
		this.error(res.status, data.message);
	}
}
</script>

<script>
	export let comune;
	import { goto } from '@sapper/app';
	import { onMount } from 'svelte';

	onMount(async () => {
		let mobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)
		if(mobile){
			goto(comune.mobile)
		}else{
			goto(comune.desktop)
		}
	});
</script>

<svelte:head>
	<title>{`${comune.comune_denominazione} - Rapporto dati COVID19`}</title>
	<meta property="og:url" content={`https://informacovid.opendatasicilia.it/d/${comune.slug}`} />
	<meta property="og:title" content={`${comune.comune_denominazione} - Rapporto dati COVID19`} />
	<meta property="og:description" content={`Dashboard Situazione Epidemiologica a ${comune.comune_denominazione}`} />
	<meta property="og:image" content={comune.stemma} />
</svelte:head>
