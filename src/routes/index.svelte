<script>
  import Counter from '$components/Counter.svelte';
</script>

<main class="text-center mx-auto my-0 p-4">
  <h1 class="text-6xl uppercase text-red-500 font-thin my-16 mx-auto">Hello world!</h1>

  <Counter/>
  <p class="my-8 mx-auto">Visit the <a href="https://svelte.dev">svelte.dev</a> to learn how to build Svelte apps.</p>
</main>

<style global>
  @tailwind base;
  @tailwind components;
  @tailwind utilities;

  :root {}
</style>
