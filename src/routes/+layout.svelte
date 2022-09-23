<script lang="ts">
	import Header from '$lib/header/Header.svelte';
	import Footer from '$lib/footer/footer.svelte';
	import '../app.scss';
</script>

<Header />

<main>
	<slot />
</main>

<Footer />

<style>
	main {
		display: flex;
		flex-direction: column;
		justify-content: flex-start;
		align-items: center;

		padding: 1rem;
		width: 100%;
		height: calc(100vh - 120px);
		overflow-y: auto;

		margin: 0;
		box-sizing: border-box;
	}
</style>
