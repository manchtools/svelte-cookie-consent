<script>
	import { trackingConsent } from '$lib/cookieConsent/bannerStores';
</script>

<svelte:head>
	{#if $trackingConsent}
		<slot />
	{/if}
</svelte:head>
