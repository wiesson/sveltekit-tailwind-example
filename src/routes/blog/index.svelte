<script context="module">
  export function load({ fetch }) {
    return fetch(`blog.json`)
      .then((r) => r.json())
      .then((posts) => {
        return { props: { posts } };
      });
  }
</script>

<script>
  export let posts = [];
</script>

<svelte:head>
  <title>Blog</title>
</svelte:head>

<h1 class="font-bold text-3xl pb-8">Recent posts</h1>

<div class="mx-auto max-w-7xl px-4">
  <ul class="space-y-4">
    {#each posts as post}
      <li class="text-md hover:underline">
        <a rel="prefetch" href="/blog/{post.slug}">{post.title}</a>
      </li>
    {/each}
  </ul>
</div>
