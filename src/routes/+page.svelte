<script>
	import Banner from '$lib/cookieConsent/banner.svelte';
	import TrackingHead from '$lib/tracking/trackingHead.svelte';
	import TrackingBody from '$lib/tracking/trackingBody.svelte';
	import { resetCookieBanner } from '$lib/cookieConsent/bannerFunctions';
</script>

<button on:click={resetCookieBanner}>Reset banner</button>

<Banner />
<TrackingBody>This Body can only be seen once Tracking is accepted</TrackingBody>
<TrackingHead><title>

	This Header can only be seen once Tracking is accepted
</title>
</TrackingHead>

<style>
	:global(body) {
		background-color: darkgray;
	}
</style>
