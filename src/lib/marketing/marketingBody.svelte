<script>
	import { marketingConsent } from '../cookieConsent/bannerStores';
</script>

{#if $marketingConsent}
	<slot />
{/if}
