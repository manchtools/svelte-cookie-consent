import Cookies from 'js-cookie';
import { writable } from 'svelte/store';

export function setTrackingAllowedCookie() {
	Cookies.set('tracking-cookie-consent', 'true', { expires: 365 });
	trackingConsent.set(true);
}
export function setTrackingDisallowedCookie() {
	Cookies.set('tracking-cookie-consent', 'false', { expires: 365 });
	trackingConsent.set(false);
}
export function setCookieConsentSeen() {
	Cookies.set('cookie-banner-seen', 'true', { expires: 365 });
	cookieConsentSeen.set(true);
}

export function resetCookieBanner() {
	Cookies.remove('tracking-cookie-consent');
	Cookies.remove('cookie-banner-seen');
	trackingConsent.set(false);
	cookieConsentSeen.set(false);
}

export const trackingConsent = writable(false);
export const cookieConsentSeen = writable();
