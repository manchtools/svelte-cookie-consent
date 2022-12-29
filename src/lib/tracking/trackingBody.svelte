<script>
	import { trackingConsent } from '$lib/cookieConsent/bannerFunctions';
</script>

{#if $trackingConsent}
	<slot />
{/if}
