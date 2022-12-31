<script>
	import { advertisementConsent } from '../cookieConsent/bannerStores';
</script>

{#if $advertisementConsent}
	<slot />
{/if}
