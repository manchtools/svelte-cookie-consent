<script>
	import {
		setCookieConsentSeen,
		setTrackingDisallowedCookie,
		setTrackingAllowedCookie
	} from './bannerFunctions';
	import { cookieConsentSeen, trackingConsent } from './bannerStores';
	import { fade, fly } from 'svelte/transition';

	import Cookies from 'js-cookie';

	import { onMount } from 'svelte';

	export const bannerClasses = 'bg-base-200';

	onMount(() => {
		$trackingConsent = Cookies.get('tracking-cookie-consent') || false;
		$cookieConsentSeen = Cookies.get('cookie-banner-seen') || false;
	});
</script>

{#if $cookieConsentSeen === false}
	<div class="cookie-banner" in:fly={{ x: 400, duration: 175 }} out:fade>
		<div>
			<h1>
				<slot name="titleText">We want to track you!</slot>
			</h1>
			<p>
				<slot name="mainText">
					This is a Banner that adheres to GDPR best practices!<br /> Visit our
					<a href="/privacy">privacy policy</a> for more informations.
				</slot>
			</p>
		</div>
		<div class="button-group">
			<button
				class="allow"
				on:click={() => {
					setCookieConsentSeen();
					setTrackingAllowedCookie();
				}}><slot name="giveTrackingConsentText">Yes please track me!</slot></button
			>
			<button
				class="deny"
				on:click={() => {
					setCookieConsentSeen();
					setTrackingDisallowedCookie();
				}}><slot name="preventTrackingConsentText">Only accept neccessary</slot></button
			>
		</div>
	</div>
{/if}

<style>
	:global(:root) {
		--ccb-dark-color-bg: black;
		--ccb-light-color-bg: white;
		--ccb-dark-color-text: black;
		--ccb-light-color-text: white;
		--ccb-dark-color-border: black;
		--ccb-light-color-border: white;
		--ccb-allow-button: green;
		--ccb-deny-button: red;
	}
	* {
		margin: 0;
	}
	h1 {
		margin-bottom: 0.5rem;
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
	button {
		all: unset;
		cursor: pointer;
		text-align: center;
		padding: 0.7rem;
		font-weight: bold;
		text-transform: uppercase;
		border-radius: 0.65rem;
	}

	button.allow {
		background-color: var(--ccb-allow-button);
	}
	button.deny {
		background-color: var(--ccb-deny-button);
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
		.button-group {
			gap: 1.5rem;
			flex-direction: row;
		}
	}
	@media (prefers-color-scheme: light) {
		.cookie-banner {
			background-color: var(--ccb-light-color-bg);
			color: var(--ccb-dark-color-text);
			border-color: var(--ccb-dark-color-border);
		}
	}
	@media (prefers-color-scheme: dark) {
		.cookie-banner {
			background-color: var(--ccb-dark-color-bg);
			color: var(--ccb-light-color-text);
			border-color: var(--ccb-light-color-border);
		}
	}
</style>
