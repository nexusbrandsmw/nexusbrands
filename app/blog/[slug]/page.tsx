import PageHeader from "@/components/PageHeader";
import { Post } from "@/lib/posts";

export default function BlogPost({ params }: any) {
  const post = posts.find((p) => p.slug === params.slug);

  if (!post) {
    return (
      <div className="p-10 text-center">
        <h1 className="text-2xl font-bold">Post not found</h1>
      </div>
    );
  }

  return (
    <>
      <PageHeader
        title={post.title}
        subtitle={post.description}
        backgroundImage={post.image}
      />

      <div className="max-w-4xl mx-auto px-6 py-12">
        <p className="text-lg leading-relaxed text-gray-700">
          {post.content}
        </p>
      </div>
    </>
  );
}