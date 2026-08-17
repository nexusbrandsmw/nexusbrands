import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { posts } from "@/data/posts";

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const post = posts.find((post) => post.slug === slug);

  if (!post) {
    notFound();
  }

  return (
    <>
      {/* HERO */}
      <section className="pt-28 pb-16 bg-[#000f22]">
        <div className="max-w-4xl mx-auto px-6">
          <div className="mt-8">
            <span className="text-xs uppercase tracking-[0.2em] text-[#e01e41]">
              {post.category}
            </span>

            <h1 className="mt-4 text-4xl md:text-6xl font-bold text-accent leading-tight">
              {post.title}<span className="text-primary">.</span>
            </h1>
          </div>

        </div>
      </section>

      {/* FEATURED IMAGE */}
      <section className="bg-white">
        <div className="max-w-5xl mx-auto px-6 -mt-1 py-10">

          <div className="overflow-hidden rounded-3xl">
            <Image
              src={post.image}
              alt={post.title}
              width={1200}
              height={700}
              className="w-full h-[300px] md:h-[500px] object-cover"
            />
          </div>

        </div>
      </section>

      {/* CONTENT */}
      <section className="pb-24 bg-white">
        <article className="max-w-3xl mx-auto px-6">

          <div className="text-lg text-[#000f22]/75 leading-8 whitespace-pre-line">
            {post.content}
          </div>

        </article>
      </section>

      {/* BACK TO BLOG */}
      <section className="py-16 bg-[#f8f9fb]">
        <div className="max-w-4xl mx-auto px-6 text-center">

          <p className="text-sm text-[#000f22]/60">
            Want to read more from Nexus Brands?
          </p>

          <Link
            href="/blog"
            className="mt-4 inline-flex items-center gap-2 text-[#e01e41] font-semibold hover:gap-3 transition-all"
          >
            View all articles →
          </Link>

        </div>
      </section>
    </>
  );
}