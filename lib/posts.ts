export type Post = {
  slug: string;
  title: string;
  description: string;
  content: string;
  image: string;
};

let posts: Post[] = [
  {
    slug: "weekend-tournament-recap",
    title: "Weekend Tournament Recap",
    description:
      "A thrilling weekend of football action as teams battled it out for top spot.",
    content: "Full article content goes here.",
    image: "/images/blog1.jpg",
  },
  {
    slug: "new-lighting-system",
    title: "New Lighting System Installed",
    description:
      "Our upgraded floodlights now allow better evening match experiences.",
    content: "Details about lighting upgrade.",
    image: "/images/blog2.jpg",
  },
];

// ✅ GET ALL POSTS
export function getPosts() {
  return posts;
}

// ✅ GET SINGLE POST BY SLUG
export function getPostBySlug(slug: string) {
  return posts.find((post) => post.slug === slug);
}

// ✅ ADD NEW POST (THIS IS WHAT YOU ASKED FOR)
export function addPost(newPost: Post) {
  const exists = posts.find((p) => p.slug === newPost.slug);

  if (exists) {
    throw new Error("Post with this slug already exists");
  }

  posts = [newPost, ...posts];

  return posts;
}