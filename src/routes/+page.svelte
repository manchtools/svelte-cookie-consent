<script>
	import Banner from '$lib/cookieConsent/banner.svelte';
	import TrackingHead from '$lib/tracking/trackingHead.svelte';
	import TrackingBody from '$lib/tracking/trackingBody.svelte';
	import AdvertisementBody from '$lib/advertisement/advertisementBody.svelte';
	import AdvertisementHead from '$lib/advertisement/advertisementHead.svelte';
	import { resetCookieBanner } from '$lib/cookieConsent/bannerFunctions';
</script>

<button on:click={resetCookieBanner}>Reset banner</button>

<Banner />
<TrackingBody>This Body can only be seen once Tracking is accepted</TrackingBody>
<AdvertisementBody>This Body can only be seen once Advertisement is accepted</AdvertisementBody>
<TrackingHead><title>Tracking accepted </title></TrackingHead>
<AdvertisementHead><title>Advertising accepted </title></AdvertisementHead>

<style>
	:global(body) {
		background-color: darkgray;
	}
</style>
