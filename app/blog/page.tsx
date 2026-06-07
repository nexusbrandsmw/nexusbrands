import PageHeader from "@/components/PageHeader";
import Image from "next/image";
import Link from "next/link";
import { getPosts } from "@/lib/posts";

export default function BlogPage() {
  const posts = getPosts();

  return (
    <>
      <PageHeader
        title="News & Updates"
        subtitle="Stay updated with match highlights, upcoming fixtures, tournaments, and everything happening at The Dstrict Sports Arena."
        backgroundImage="/images/blog-bg.jpg"
      />

      <div className="bg-gray-100 py-12">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-3 gap-6">

          {posts.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="bg-white border border-gray-300 rounded-2xl overflow-hidden hover:scale-[1.02] transition"
            >

              <div className="relative w-full h-48">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  className="object-cover"
                />
              </div>

              <div className="p-5">
                <h3 className="text-xl font-bold text-[#020f22]">
                  {post.title}
                </h3>

                <p className="text-gray-600 mt-2">
                  {post.description}
                </p>
              </div>

            </Link>
          ))}

        </div>
      </div>
    </>
  );
}