import { writable } from 'svelte/store';
export const trackingConsent = writable(false);
export const cookieConsentSeen = writable();