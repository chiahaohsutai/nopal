<script lang="ts">
	import favicon from '$lib/assets/favicon.svg';
	import './layout.css';

	let { children } = $props();
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
	<title>NOPAL</title>
	<meta name="description" content="A very sophisticated temperature conversion tool." />
</svelte:head>
{@render children()}
