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

<Banner showTrackingOption={true} showAdvertisingOption={false} showMarketingOption={false}
	><span slot="mainText">
		Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt
		ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo
		dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor
		sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor
		invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et
		justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem
		ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
		eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos
		et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus
		est Lorem ipsum dolor sit amet. Duis autem vel eum iriure dolor in hendrerit in vulputate velit
		esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et
		iusto
	</span></Banner
>
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
