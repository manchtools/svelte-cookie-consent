<script>
	import Banner from '$lib/cookieConsent/banner.svelte';
	import TrackingHead from '$lib/tracking/trackingHead.svelte';
	import TrackingBody from '$lib/tracking/trackingBody.svelte';
	import AdvertisementBody from '$lib/advertisement/advertisementBody.svelte';
	import AdvertisementHead from '$lib/advertisement/advertisementHead.svelte';
	import MarketingHead from '$lib/marketing/marketingHead.svelte';
	import MarketingBody from '$lib/marketing/marketingBody.svelte';
	import { resetCookieBanner } from '$lib/cookieConsent/bannerFunctions';
</script>

<button on:click={resetCookieBanner}>Reset banner</button>

<Banner />
<TrackingBody>This Body can only be seen once Tracking is accepted</TrackingBody>
<AdvertisementBody>This Body can only be seen once Advertisement is accepted</AdvertisementBody>
<MarketingBody>This Body can only be seen once Marketing is accepted</MarketingBody>
<TrackingHead><title>Tracking accepted </title></TrackingHead>
<AdvertisementHead><title>Advertising accepted </title></AdvertisementHead>
<MarketingHead><title>Marketing accepted </title></MarketingHead>

<style>
	:global(body) {
		background-color: darkgray;
	}
</style>
