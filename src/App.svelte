<script lang="ts">
    import Tailwind from './Tailwind.svelte';
    import Todo from './Todo.svelte';
    export let name: string;
</script>

<Tailwind />
<main>
    <h1>Hello {name}!</h1>

    <h3 class="text-red-400">The rest of our app will be here</h3>

    <p>Visit the <a href="https://svelte.dev/tutorial">Svelte tutorial</a> to learn how to build Svelte apps.</p>

    <Todo />
</main>

<style lang="scss">
    main {
        text-align: center;
        padding: 1em;
        max-width: 240px;
        margin: 0 auto;

        h1 {
            color: #ff3e00;
            text-transform: uppercase;
            font-size: 4em;
            font-weight: 100;
        }

        @media (min-width: 640px) {
            max-width: none;
            /* color: $primary-color; */
        }
    }
</style>
