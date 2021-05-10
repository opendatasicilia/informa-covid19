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
	import { stores, goto } from '@sapper/app';
	import { onMount } from 'svelte';
	import UAParser  from 'ua-parser-js';
	const { preloading, page, session } = stores();
	var parser = new UAParser();
	parser.setUA($session['user-agent']);
	let mobile = parser.getResult().device['type'] == 'mobile';

	onMount(async () => {
			if(mobile){
				goto(comune.mobile)
			}else{
				goto(comune.desktop)
			}
		});
</script>

<svelte:head>
	<title>Redirect a {comune.title}</title>
</svelte:head>
