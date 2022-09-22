<script lang="ts">
  import getTimeAgo from "../../../service/getTimeAgo";
    import type { QuestionPageAPIQuestion } from "src/types";
  import Answer from "$lib/answer/Answer.svelte";

    export let data: { question: QuestionPageAPIQuestion };
    const { question } = data;

    function handleAnswer(e: SubmitEvent) {
        e.preventDefault();

        const form = e.target as HTMLFormElement;
        const formData = new FormData(form);
        formData.append("questionId", question.id.toString());

        fetch("/api/answer", {
            method: "POST",
            body: formData,
        })
        .then((res) => {
            if (res.ok) {
                form.reset();
                window.location.reload();
            }
        })
        .catch((err) => {
            console.error(err);
        });
    }
</script>

<svelte:head>
    <title>Pregunta #{question.id} | Svelte Q&A</title>
</svelte:head>
{#if question}
    <div class="question">
        <div class="question-header">
            <p>Pregunta #{question.id}</p>
        </div>
        <div class="question-content">
            <p>{question.content}</p>
        </div>
        <div class="question-footer">
            <p>{getTimeAgo(question.createdAt)}</p>
        </div>

        <div class="question-answers">
            {#each question.answers as answer , i}
                <Answer {answer} id={i+1}/>
            {/each}
        </div>

        <form action="/api/answer" method="post" on:submit={handleAnswer}>
            <input type="hidden" name="questionId" value="{question.id}" />
            <input type="text" name="content" />
            <button type="submit">Responder</button>
        </form>
    </div>
{/if}

<style lang="scss">
    .question {
        display: flex;
        justify-content: flex-start;
        align-items: center;
        flex-direction: column;

        background-color: #323238;
        border-radius: 10px;
        padding: 1rem;
        margin: 1rem 0;

        width: 80%;

        &-header {
            display: flex;
            justify-content: space-between;
            align-items: center;
            width: 100%;
            margin-bottom: 1rem;
            border-bottom: 1px solid #555;

            p {
                font-size: 1rem;
                color: white;
                margin-bottom: 1rem;
            }
        }

        &-content {
            width: 100%;
            text-align: left;
            min-height: 10ch;

            p {
                font-size: 1.5rem;
                color: white;
            }
        }

        &-footer {
            display: flex;
            justify-content: space-between;
            align-items: center;
            width: 100%;
            margin-top: auto;
            border-top: 1px solid #555;
            gap: 3rem;

            p {
                font-size: 1rem;
                color: #aaa;
                margin-top: 1rem;
            }
        }
    }

    .question-answers {
        width: 100%;
        margin-block: 2rem;
    }
    
    form {
        display: flex;
        gap: 1rem;
        width: 100%;

        input {
            width: 100%;
            padding: 1rem;
            border: none;
            border-radius: 10px;
            background-color: #555;
            color: white;
        }

        button {
            border: none;
            border-radius: 1rem;

            font-size: 1.25rem;
            color: white;

            background-color: #669;
            padding: 1rem 1.5rem;

            transition: background-color 0.2s ease-in-out;

            &:hover {
                cursor: pointer;
                background-color: #558;
            }
        }
    }
</style>