import Cookies from 'js-cookie';
import { get } from 'svelte/store';
import {
	trackingConsent,
	cookieConsentSeen,
	advertisementConsent,
	marketingConsent,
	allowAdvertising,
	allowTracking,
	allowMarketing
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
export function setAMarketingAllowedCookie() {
	Cookies.set('marketing-cookie-consent', 'true', { expires: 365 });
	marketingConsent.set(true);
}
export function setMarketingDisallowedCookie() {
	Cookies.set('marketing-cookie-consent', 'false', { expires: 365 });
	marketingConsent.set(false);
}
export function setCookieConsentSeen() {
	Cookies.set('cookie-banner-seen', 'true', { expires: 365 });
	cookieConsentSeen.set(true);
}

export function resetCookieBanner() {
	Cookies.remove('tracking-cookie-consent');
	Cookies.remove('advertising-cookie-consent');
	Cookies.remove('marketing-cookie-consent');
	Cookies.remove('cookie-banner-seen');
	trackingConsent.set(false);
	cookieConsentSeen.set(false);
	advertisementConsent.set(false);
	marketingConsent.set(false);
	resetSelection();
}

export function resetSelection() {
	allowTracking.set(false);
	allowAdvertising.set(false);
	allowAdvertising.set(false);
}

export function setSelectedConsent() {
	const tmpAd = get(allowAdvertising);
	const tmpTrack = get(allowTracking);
	const tmpMark = get(allowMarketing);
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
	if (tmpMark === false) {
		setMarketingDisallowedCookie();
	}
	if (tmpMark === true) {
		setAMarketingAllowedCookie();
	}
	resetSelection();
	setCookieConsentSeen();
}

export function allowAll() {
	setCookieConsentSeen();
	setTrackingAllowedCookie();
	setAdvertisementAllowedCookie();
	setAMarketingAllowedCookie();
	resetSelection();
}

export function denyAll() {
	setCookieConsentSeen();
	setTrackingDisallowedCookie();
	setAdvertismentDisallowedCookie();
	setMarketingDisallowedCookie();
	resetSelection();
}
