<script>
	import { allowAll, denyAll, setSelectedConsent } from './bannerFunctions';
	import {
		cookieConsentSeen,
		trackingConsent,
		advertisementConsent,
		marketingConsent,
		allowAdvertising,
		allowTracking,
		allowMarketing
	} from './bannerStores';
	import { fade, fly } from 'svelte/transition';

	import Cookies from 'js-cookie';

	import { onMount } from 'svelte';
	export let showMarketingOption = true;
	export let showAdvertisingOption = true;
	export let showTrackingOption = true;

	onMount(() => {
		$trackingConsent = Cookies.get('tracking-cookie-consent') || false;
		$cookieConsentSeen = Cookies.get('cookie-banner-seen') || false;
		$advertisementConsent = Cookies.get('tracking-cookie-consent') || false;
		$marketingConsent = Cookies.get('marketing-cookie-consent') || false;
	});
</script>

{#if $cookieConsentSeen === false}
	<div class="cookie-banner" in:fly={{ x: 400, duration: 175 }} out:fade>
		<div>
			<h1>
				<slot name="titleText">We want to track you!</slot>
			</h1>
			<p class="mainText">
				<slot name="mainText">
					This is a Banner that adheres to GDPR best practices!<br /> Visit our
					<a href="/privacy">privacy policy</a> for more informations.
				</slot>
			</p>
		</div>
		<div class="switch-group">
			{#if showTrackingOption}
				<div>
					<input type="checkbox" name="tracking" bind:checked={$allowTracking} />
					<label for="tracking"> <slot name="allowTrackingCheckText">Allow Tracking</slot></label>
				</div>
			{/if}
			{#if showAdvertisingOption}
				<div>
					<input type="checkbox" name="advertising" bind:checked={$allowAdvertising} />
					<label for="advertising">
						<slot name="allowAdvertisingCheckText">Allow Advertising</slot>
					</label>
				</div>
			{/if}
			{#if showMarketingOption}
				<div>
					<input type="checkbox" name="marketing" bind:checked={$allowMarketing} />
					<label for="marketing">
						<slot name="allowMarketingCheckText">Allow Marketing</slot>
					</label>
				</div>
			{/if}
		</div>
		<div class="button-group">
			{#if showAdvertisingOption || showTrackingOption || showMarketingOption}
				<button
					class="allowAll"
					on:click={() => {
						allowAll();
					}}><slot name="giveConsentAllText">Allow Everything</slot></button
				>
				<button
					class="allowSelected"
					on:click={() => {
						setSelectedConsent();
					}}><slot name="giveConsentSelectedText">Allow Selected</slot></button
				>
			{/if}
			<button
				class="deny"
				on:click={() => {
					denyAll();
				}}><slot name="denyConsentText">Only accept neccessary</slot></button
			>
		</div>
	</div>
{/if}

<style>
	:global(:root) {
		--ccb-dark-color-bg: #121212;
		--ccb-light-color-bg: #ffffff;
		--ccb-dark-color-text: hsla(0, 0%, 100%, 0.8);
		--ccb-light-color-text: #000000;
		--ccb-dark-color-border: #ffffff;
		--ccb-light-color-border: #000000;
		--ccb-light-color-button-text: hsla(0, 0%, 100%, 1);
		--ccb-dark-color-button-text: hsla(0, 0%, 100%, 0.85);
		--ccb-allow-all-button: #38b000;
		--ccb-allow-selected-button: #ff9500;
		--ccb-deny-button: #bd1f36;
	}
	* {
		margin: 0;
		padding: 0;
	}

	h1 {
		margin-bottom: 0.2rem;
		font-size: x-large;
	}

	.mainText {
		max-height: 33vh;
		overflow-y: scroll;
	}

	.cookie-banner {
		align-items: center;
		font-family: sans-serif;
		width: 100%;
		display: flex;
		flex-direction: column;
		position: fixed;
		right: 0rem;
		bottom: 0rem;

		padding: 1rem;
		border-style: solid;
		border-bottom: 0;
		border-left: 0;
		border-right: 0;

		-webkit-box-sizing: border-box;
		-moz-box-sizing: border-box;
		-ms-box-sizing: border-box;
		-o-box-sizing: border-box;
		box-sizing: border-box;
		z-index: 99999;
	}
	.button-group {
		width: 100%;
		display: flex;
		flex-direction: column;
		margin-top: 1rem;
		gap: 1rem;
		justify-content: center;
	}
	.switch-group {
		width: 100%;
		display: flex;
		flex-direction: column;
		margin-top: 1rem;
		gap: 0.4rem;
		justify-content: center;
	}
	.switch-group div {
		display: flex;
		gap: 0.4rem;
	}
	button {
		all: unset;
		cursor: pointer;
		text-align: center;
		padding: 0.7rem;
		font-weight: bold;
		text-transform: uppercase;
		border-radius: 0.65rem;
		font-size: small;
	}

	@media (min-width: 1024px) {
		.cookie-banner {
			border-radius: 0.5rem;
			min-width: 480px;
			width: fit-content;
			max-width: 870px;
			right: 1.5rem;
			bottom: 1.5rem;
			border: solid;
		}
	}
	@media (min-width: 768px) {
		h1 {
			margin-bottom: 0.5rem;
			font-size: xx-large;
		}
		.button-group {
			gap: 1.5rem;
			flex-direction: row;
		}
		.switch-group {
			gap: 1.5rem;
			flex-direction: row;
		}
		.switch-group div {
			display: flex;
			gap: 0.75rem;
		}
		button {
			font-size: medium;
		}
	}
	@media (prefers-color-scheme: light) {
		a {
			color: var(--ccb-light-color-text);
		}
		button {
			color: var(--ccb-light-color-button-text);
		}
		.cookie-banner {
			background-color: var(--ccb-light-color-bg);
			color: var(--ccb-light-color-text);
			border-color: var(--ccb-light-color-border);
		}
		button.allowAll {
			background-color: var(--ccb-allow-all-button);
		}
		button.allowSelected {
			background-color: var(--ccb-allow-selected-button);
		}
		button.deny {
			background-color: var(--ccb-deny-button);
		}
	}
	@media (prefers-color-scheme: dark) {
		a {
			color: var(--ccb-dark-color-text);
		}
		button {
			border-width: 1px;
			border-style: solid;
		}
		button:hover {
			color: var(--ccb-dark-color-button-text) !important ;
			transition: background-color 75ms ease, color 75ms ease;
			-webkit-transition: background-color 75ms ease, color 75ms ease;
			-o-transition: background-color 75ms ease, color 75ms ease;
			-moz-transition: background-color 75ms ease, color 75ms ease;
		}
		.cookie-banner {
			background-color: var(--ccb-dark-color-bg);
			color: var(--ccb-dark-color-text);
			border-color: var(--ccb-dark-color-border);
		}
		button.allowAll {
			border-color: var(--ccb-allow-all-button);
			color: var(--ccb-allow-all-button);
		}
		button.allowAll:hover {
			background-color: var(--ccb-allow-all-button);
		}
		button.allowSelected {
			border-color: var(--ccb-allow-selected-button);
			color: var(--ccb-allow-selected-button);
		}
		button.allowSelected:hover {
			background-color: var(--ccb-allow-selected-button);
		}
		button.deny {
			border-color: var(--ccb-deny-button);
			color: var(--ccb-deny-button);
		}
		button.deny:hover {
			background-color: var(--ccb-deny-button);
		}
	}
</style>
