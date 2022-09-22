<script lang="ts">
    import getTimeAgo from "../../service/getTimeAgo";
    import type { HomePageAPIQuestion } from "src/types";
    export let question: HomePageAPIQuestion;
</script>

{#if question}
    <a class="question" href="/question/{question.id}">
        <div class="question-header">
            <p>Pregunta #{question.id}</p>
        </div>
        <div class="question-content">
            <p>{question.content}</p>
        </div>
        <div class="question-footer">
            <p>{getTimeAgo(question.createdAt)}</p>
            <p>{question._count.answers} respuestas</p>
        </div>
    </a>
{/if}

<style lang="scss">
    a {
        text-decoration: none;
    }

    .question {
        display: flex;
        justify-content: flex-start;
        align-items: center;
        flex-direction: column;

        background-color: #323238;
        border-radius: 10px;
        padding: 1rem;
        margin: 1rem 0;

        max-width: 40ch;
        height: 250px;

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

        transition: transform 0.25s ease-in-out;
        &:hover {
            transform: scale(1.05);
        }
    }
</style>