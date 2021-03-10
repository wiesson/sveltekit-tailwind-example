import posts from "./_posts.js";

const contents = posts.map((post) => {
  return {
    title: post.title,
    slug: post.slug,
  };
});

export async function get() {
  return {
    body: contents,
  };
}
