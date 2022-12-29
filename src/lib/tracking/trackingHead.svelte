<script>
	import { trackingConsent } from '$lib/cookieConsent/bannerFunctions';
</script>

<svelte:head>
	{#if $trackingConsent}
		<slot />
	{/if}
</svelte:head>
