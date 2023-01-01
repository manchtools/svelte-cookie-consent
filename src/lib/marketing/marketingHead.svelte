<script>
	import { marketingConsent } from '../cookieConsent/bannerStores';
</script>

<svelte:head>
	{#if $marketingConsent}
		<slot />
	{/if}
</svelte:head>
