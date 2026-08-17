"use client";

import Link from "next/link";
import { projects } from "@/data/projects";

export default function BlogPage() {
  const posts = [
    {
      title: "How strong branding builds trust",
      category: "Branding",
      image: "/blog/1.jpg",
      slug: "branding-builds-trust",
      excerpt:
        "Discover how consistent branding influences customer perception and long-term business growth.",
    },
    {
      title: "Design principles every business should know",
      category: "Design",
      image: "/blog/2.jpg",
      slug: "design-principles",
      excerpt:
        "Simple design rules that make your brand look professional and credible.",
    },
    {
      title: "Why most small businesses fail online",
      category: "Marketing",
      image: "/blog/3.jpg",
      slug: "business-failure-online",
      excerpt:
        "Common mistakes businesses make when trying to grow digitally.",
    },
    {
      title: "Building a modern website in 2026",
      category: "Web",
      image: "/blog/4.jpg",
      slug: "modern-website-2026",
      excerpt:
        "What makes a modern, fast, and conversion-driven website today.",
    },
  ];

  return (
    <>
      {/* HERO */}
      <section className="py-20 bg-[#f8f9fb] relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-[#e01e41]/10 blur-[120px] rounded-full" />
          <div className="absolute bottom-[-200px] left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-[#000f22]/10 blur-[120px] rounded-full" />
        </div>

        <div className="relative max-w-4xl mx-auto px-6 text-center">
          <span className="uppercase tracking-[0.2em] text-sm text-[#000f22]/60">
            Insights & Articles
          </span>

          <h1 className="mt-6 text-4xl md:text-6xl font-extrabold text-[#000f22]">
            Our Blog
          </h1>

          <p className="mt-6 text-lg text-[#000f22]/70 leading-relaxed">
            Thoughts, insights, and strategies on branding, design, marketing, and digital growth.
          </p>
        </div>
      </section>

      {/* BLOG GRID */}
      <section className="pt-14 pb-24 bg-white">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 lg:grid-cols-3 gap-6">

          {posts.map((post, i) => (
            <Link
              key={i}
              href={`/blog/${post.slug}`}
              className="group bg-white border border-[#000f22]/10 rounded-3xl overflow-hidden hover:shadow-lg transition"
            >
              <div className="overflow-hidden">
                <img
                  src={post.image}
                  className="h-[220px] w-full object-cover group-hover:scale-105 transition duration-500"
                />
              </div>

              <div className="p-6">

                <span className="text-xs uppercase tracking-[0.15em] text-[#e01e41]">
                  {post.category}
                </span>

                <h3 className="mt-3 text-xl font-bold text-[#000f22] leading-snug">
                  {post.title}
                </h3>

                <p className="mt-3 text-sm text-[#000f22]/60 leading-relaxed">
                  {post.excerpt}
                </p>

                <p className="mt-5 text-sm font-medium text-[#e01e41] group-hover:translate-x-1 transition">
                  Read More →
                </p>

              </div>
            </Link>
          ))}

        </div>
      </section>
    </>
  );
}