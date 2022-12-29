<script>
	import Banner from '$lib/cookieConsent/banner.svelte';
</script>

<h1>Welcome to your library project</h1>
<p>Create your package using @sveltejs/package and preview/showcase your work with SvelteKit</p>
<p>Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation</p>
<Banner />

<style>
	@media (prefers-color-scheme: light) {
		:global(body) {
			background-color: var(--light-color-bg);
			color: var(--dark-color-text);
		}
	}
	@media (prefers-color-scheme: dark) {
		:global(body) {
			background-color: var(--dark-color-bg);
			color: var(--light-color-text);
		}
	}
</style>
