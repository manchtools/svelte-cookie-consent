<script>
	import { advertisementConsent } from '../cookieConsent/bannerStores';
</script>

<svelte:head>
	{#if $advertisementConsent}
		<slot />
	{/if}
</svelte:head>
