<script context="module">
	export async function preload({ params }) {
		const res = await this.fetch(`dashboard/${params.slug}.json`);
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
	import { stores } from '@sapper/app';
    import UAParser  from 'ua-parser-js';

    const { preloading, page, session } = stores();
    var parser = new UAParser();
    parser.setUA($session['user-agent']);

    let mobile = parser.getResult().device['type'] == 'mobile';
</script>

<svelte:head>
	<title>Redirect a {comune.title}</title>
</svelte:head>

{#if mobile}
	{window.location.href = comune.mobile}
{:else}
	{window.location.href = comune.desktop}
{/if}
