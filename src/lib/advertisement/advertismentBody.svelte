<script>
	import { trackingConsent } from '../cookieConsent/bannerStores';
</script>

{#if $trackingConsent}
	<slot />
{/if}
