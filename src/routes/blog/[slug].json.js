import posts from "./_posts.js";

const lookup = new Map();
posts.forEach((post) => {
  lookup.set(post.slug, JSON.stringify(post));
});

export function get(req, context) {
  const { slug } = req.params;

  if (lookup.has(slug)) {
    return {
      body: lookup.get(slug),
    };
  }

  return {
    body: {
      error: "Not found",
    },
  };
}
