<script>
    import { onMount } from 'svelte';

    let todos = [];
    let todoText = '';

    onMount(() => {
        const existingTodos = localStorage.getItem('todos');
        todos = JSON.parse(existingTodos) || [];
    });

    const addTodos = () => {
        todos = [...todos, todoText];
        localStorage.setItem('todos', JSON.stringify(todos));
        todoText = '';
    };

    const deleteTodos = () => {
        todos = [];
        localStorage.setItem('todos', []);
    };
</script>

<section>
    <form on:submit|preventDefault={addTodos}>
        <input type="text" bind:value={todoText} />
        <input type="submit" value="Add todo" />
        <input type="reset" />
        <button on:click={deleteTodos}>Delete all</button>
    </form>

    {#if todos.length === 1}
        <p>Nothing to display</p>
    {:else}
        <ul>
            {#each todos as todo, i}
                <li>{i + 1}. {todo}</li>
            {/each}
        </ul>
    {/if}
</section>

<style>
    section {
        margin-top: 6em;
        padding-top: 2em;
        border-top: 0.1em solid #414141;
    }
    ul {
        list-style: none;
    }
</style>
