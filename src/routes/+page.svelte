<script lang="ts">
	import Question from "$lib/question/Question.svelte";
  	import type { HomePageAPIQuestion } from "src/types";

	export let data;
	const { questions } = data as { questions: HomePageAPIQuestion[] };
</script>

<svelte:head>
	<title>Inicio | Svelte Q&A</title>
</svelte:head>
<div class="questions">
	{#if questions?.length}
		{#each questions as question}
			<Question {question}/>
		{/each}
	{:else}
		<p class="no-messages">Todavía no hay preguntas...</p>
		<p class="no-messages">Ház una!</p>
	{/if}
</div>


<style lang="scss">
	.questions {
		display: flex;
		align-items: stretch;
		justify-content: center;
		flex-wrap: wrap;
		gap: 2rem;

		width: 100vw;
		height: 100%;
		padding: 1rem;
	}

	.no-messages {
		text-align: center;
		color: white;
		font-size: 3rem;
	}
</style>
