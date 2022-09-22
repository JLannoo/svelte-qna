<script lang="ts">
  import type { Answer } from "@prisma/client";
  import getTimeAgo from "../../service/getTimeAgo";


    export let answer: Answer;
    export let id: number;
</script>

{#if answer}
    <div class="answer">
        <div class="answer-header">
            <p>Respuesta #{id}</p>
            <p>{getTimeAgo(answer.createdAt)}</p>
        </div>
        <div class="answer-content">
            <p>{answer.content}</p>
        </div>
    </div>
{/if}

<style lang="scss">
    .answer {
        display: flex;
        justify-content: flex-start;
        align-items: center;
        flex-direction: column;

        padding: 1rem;
        margin: 1rem 0;
        
        border-bottom: 1px solid #555;
        border-top: 1px solid #555;

        width: 100%;

        &-header {
            display: flex;
            justify-content: space-between;
            align-items: center;
            width: 100%;
            margin-bottom: 1rem;

            p {
                font-size: 1rem;
                color: #aaa;
                margin-bottom: 1rem;
            }
        }

        &-content {
            width: 100%;
            text-align: left;

            p {
                font-size: 1rem;
                color: white;
            }
        }

        transition: background-color 0.2s ease-in-out;
        &:hover {
            background-color: #404044;
        }
    }
</style>