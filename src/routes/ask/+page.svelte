<script lang="ts">
    import { goto } from "$app/navigation";

    function handleSubmit(e: SubmitEvent){
        e.preventDefault();
        const form = e.target as HTMLFormElement;
        const formData = new FormData(form);
        
        fetch('/api/ask', {
            method: 'POST',
            body: formData
        })
        .then((res) => {
            if (res.ok) {
                form.reset();
                goto('/');
            }
        })
        .catch((err) => {
            console.error(err);
        });
    }
</script>

<svelte:head>
    <title>Haz una pregunta | Svelte Q&A</title>
</svelte:head>
<form action="/api/ask" method="POST" on:submit={handleSubmit}>
    <label for="content">Escribe tu pregunta</label>
    <textarea type="text" name="content" id="content" />
    <button type="submit">Preguntar</button>
</form>

<style lang="scss">
    form {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: 2rem;

        background-color: #323238;
        color: white;
        padding: 3rem;

        border-radius: 1rem;
        box-shadow: 0 0 2rem rgba(0 , 0 , 0 , 0.2);

        label {
            font-size: 1.5rem;
        }

        textarea {
            border: none;
            border-radius: 1rem;

            font-size: 1rem;
            color: white;

            background-color: #666;
            padding: 1rem 1.5rem;
            width: 50ch;
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