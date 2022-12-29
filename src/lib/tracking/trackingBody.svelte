<script>
	import { trackingConsent } from '$lib/cookieConsent/bannerStores';
</script>

{#if $trackingConsent}
	<slot />
{/if}
