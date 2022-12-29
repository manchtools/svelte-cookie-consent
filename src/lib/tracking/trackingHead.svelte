<script>
	import { trackingConsent } from '../cookieConsent/bannerStores';
</script>

<svelte:head>
	{#if $trackingConsent}
		<slot />
	{/if}
</svelte:head>
