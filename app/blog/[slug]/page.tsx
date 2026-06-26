import { posts } from "@/data/posts";
import Image from "next/image";

type BlogParams = { slug: string };

export default function BlogPost({ params }: { params: BlogParams }) {
  const post = posts.find((p) => p.slug === params.slug);

  if (!post) {
    return (
      <div className="p-20 text-center">
        <h1 className="text-2xl font-bold">Post not found</h1>
      </div>
    );
  }

  return (
    <article className="max-w-4xl mx-auto px-6 py-20">

      {/* IMAGE */}
      <div className="rounded-3xl overflow-hidden mb-10">
        <Image
          src={post.image}
          alt={post.title}
          width={1200}
          height={600}
          className="w-full h-[400px] object-cover"
        />
      </div>

      {/* CATEGORY */}
      <span className="text-sm uppercase tracking-[0.15em] text-[#e01e41]">
        {post.category}
      </span>

      {/* TITLE */}
      <h1 className="text-4xl font-bold mt-4 text-[#000f22]">
        {post.title}
      </h1>

      {/* CONTENT */}
      <div className="mt-8 text-[#000f22]/70 leading-relaxed space-y-4">
        {post.content}
      </div>

    </article>
  );
}