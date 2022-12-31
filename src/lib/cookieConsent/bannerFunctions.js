import Cookies from 'js-cookie';
import { get } from 'svelte/store';
import {
	trackingConsent,
	cookieConsentSeen,
	advertisementConsent,
	allowAdvertising,
	allowTracking
} from './bannerStores';

export function setTrackingAllowedCookie() {
	Cookies.set('tracking-cookie-consent', 'true', { expires: 365 });
	trackingConsent.set(true);
}
export function setTrackingDisallowedCookie() {
	Cookies.set('tracking-cookie-consent', 'false', { expires: 365 });
	trackingConsent.set(false);
}
export function setAdvertisementAllowedCookie() {
	Cookies.set('advertising-cookie-consent', 'true', { expires: 365 });
	advertisementConsent.set(true);
}
export function setAdvertismentDisallowedCookie() {
	Cookies.set('advertising-cookie-consent', 'false', { expires: 365 });
	advertisementConsent.set(false);
}
export function setCookieConsentSeen() {
	Cookies.set('cookie-banner-seen', 'true', { expires: 365 });
	cookieConsentSeen.set(true);
}

export function resetCookieBanner() {
	Cookies.remove('tracking-cookie-consent');
	Cookies.remove('advertising-cookie-consent');
	Cookies.remove('cookie-banner-seen');
	trackingConsent.set(false);
	cookieConsentSeen.set(false);
	advertisementConsent.set(false);
	resetSelection();
}

export function resetSelection() {
	allowTracking.set(false);
	allowAdvertising.set(false);
}

export function setSelectedConsent() {
	const tmpAd = get(allowAdvertising);
	const tmpTrack = get(allowTracking);
	if (tmpAd === false) {
		setAdvertismentDisallowedCookie();
	}
	if (tmpAd === true) {
		setAdvertisementAllowedCookie();
	}
	if (tmpTrack === false) {
		setTrackingDisallowedCookie();
	}
	if (tmpTrack === true) {
		setTrackingAllowedCookie();
	}
	resetSelection();
	setCookieConsentSeen();
}

export function allowAll() {
	setCookieConsentSeen();
	setTrackingAllowedCookie();
	setAdvertisementAllowedCookie();
	resetSelection();
}

export function denyAll() {
	setCookieConsentSeen();
	setTrackingDisallowedCookie();
	setAdvertismentDisallowedCookie();
	resetSelection();
}
