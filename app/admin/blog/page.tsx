"use client";

import Link from "next/link";
import { useState } from "react";
import { FilePlus, Edit, Trash2 } from "lucide-react";

export default function AdminBlogPage() {
  const [posts] = useState([
    {
      id: 1,
      title: "How Branding Builds Trust",
      category: "Branding",
      status: "Published",
      author: "Nexus Team",
      date: "June 20, 2026",
    },
    {
      id: 2,
      title: "Why Every Business Needs a Website",
      category: "Web Design",
      status: "Draft",
      author: "Admin",
      date: "June 18, 2026",
    },
    {
      id: 3,
      title: "Design Trends for 2026",
      category: "Design",
      status: "Published",
      author: "Creative Desk",
      date: "June 15, 2026",
    },
  ]);

  return (
    <div className="min-h-screen bg-[#f8f9fb] p-6 md:p-10">

      {/* HEADER (Shards-style) */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-8">

        <div>
          <h1 className="text-3xl font-bold text-[#000f22]">
            Blog Posts
          </h1>

          <p className="text-[#000f22]/60 mt-1">
            Manage articles, drafts, and published content.
          </p>
        </div>

        <Link
          href="/admin/blog/new"
          className="flex items-center gap-2 bg-[#e01e41] text-white px-5 py-3 rounded-xl font-medium hover:opacity-90 transition"
        >
          <FilePlus size={18} />
          Add New Post
        </Link>

      </div>

      {/* STATS ROW (Shards-style small cards) */}
      <div className="grid md:grid-cols-3 gap-6 mb-10">

        <div className="bg-white rounded-2xl border border-[#000f22]/10 p-6">
          <p className="text-sm text-[#000f22]/60">Total Posts</p>
          <h2 className="text-3xl font-bold text-[#000f22] mt-2">
            {posts.length}
          </h2>
        </div>

        <div className="bg-white rounded-2xl border border-[#000f22]/10 p-6">
          <p className="text-sm text-[#000f22]/60">Published</p>
          <h2 className="text-3xl font-bold text-green-600 mt-2">
            {posts.filter(p => p.status === "Published").length}
          </h2>
        </div>

        <div className="bg-white rounded-2xl border border-[#000f22]/10 p-6">
          <p className="text-sm text-[#000f22]/60">Drafts</p>
          <h2 className="text-3xl font-bold text-yellow-600 mt-2">
            {posts.filter(p => p.status === "Draft").length}
          </h2>
        </div>

      </div>

      {/* BLOG TABLE (Shards-style card posts layout) */}
      <div className="bg-white rounded-2xl border border-[#000f22]/10 overflow-hidden">

        <table className="w-full">

          <thead className="bg-[#f8f9fb] text-sm text-[#000f22]/70">
            <tr>
              <th className="text-left p-5">Title</th>
              <th className="text-left p-5">Category</th>
              <th className="text-left p-5">Author</th>
              <th className="text-left p-5">Status</th>
              <th className="text-left p-5">Date</th>
              <th className="text-left p-5">Actions</th>
            </tr>
          </thead>

          <tbody className="text-sm">

            {posts.map((post) => (
              <tr
                key={post.id}
                className="border-t border-[#000f22]/10 hover:bg-[#f8f9fb] transition"
              >

                {/* TITLE */}
                <td className="p-5 font-medium text-[#000f22]">
                  {post.title}
                </td>

                {/* CATEGORY */}
                <td className="p-5 text-[#000f22]/70">
                  {post.category}
                </td>

                {/* AUTHOR */}
                <td className="p-5 text-[#000f22]/70">
                  {post.author}
                </td>

                {/* STATUS */}
                <td className="p-5">
                  <span
                    className={`px-3 py-1 rounded-full text-xs font-medium ${
                      post.status === "Published"
                        ? "bg-green-100 text-green-700"
                        : "bg-yellow-100 text-yellow-700"
                    }`}
                  >
                    {post.status}
                  </span>
                </td>

                {/* DATE */}
                <td className="p-5 text-[#000f22]/60">
                  {post.date}
                </td>

                {/* ACTIONS */}
                <td className="p-5 flex gap-3">

                  <button className="text-blue-600 hover:opacity-70">
                    <Edit size={18} />
                  </button>

                  <button className="text-red-600 hover:opacity-70">
                    <Trash2 size={18} />
                  </button>

                </td>

              </tr>
            ))}

          </tbody>

        </table>

      </div>

    </div>
  );
}