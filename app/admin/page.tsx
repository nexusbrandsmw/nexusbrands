"use client";

import { useState } from "react";
import { addPost } from "@/lib/posts";

export default function AdminPage() {
  const [form, setForm] = useState({
    slug: "",
    title: "",
    description: "",
    content: "",
    image: "",
  });

  const [message, setMessage] = useState("");

  const handleChange = (e: any) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();

    try {
      addPost(form);

      setMessage("Post created successfully!");

      setForm({
        slug: "",
        title: "",
        description: "",
        content: "",
        image: "",
      });
    } catch (err: any) {
      setMessage(err.message);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 py-12">

      <div className="max-w-3xl mx-auto px-6">

        <h1 className="text-3xl font-bold text-[#020f22] mb-6">
          Admin - Create Blog Post
        </h1>

        {/* FORM */}
        <form
          onSubmit={handleSubmit}
          className="bg-white border border-gray-300 rounded-2xl p-6 space-y-4"
        >

          <input
            name="slug"
            value={form.slug}
            onChange={handleChange}
            placeholder="Slug (e.g. new-match-update)"
            className="w-full p-3 border rounded-xl"
          />

          <input
            name="title"
            value={form.title}
            onChange={handleChange}
            placeholder="Title"
            className="w-full p-3 border rounded-xl"
          />

          <input
            name="description"
            value={form.description}
            onChange={handleChange}
            placeholder="Short Description"
            className="w-full p-3 border rounded-xl"
          />

          <textarea
            name="content"
            value={form.content}
            onChange={handleChange}
            placeholder="Full Content"
            className="w-full p-3 border rounded-xl h-32"
          />

          <input
            name="image"
            value={form.image}
            onChange={handleChange}
            placeholder="Image path (e.g. /images/blog1.jpg)"
            className="w-full p-3 border rounded-xl"
          />

          <button
            type="submit"
            className="w-full bg-[#b12526] text-white p-3 rounded-xl font-bold hover:opacity-90"
          >
            Create Post
          </button>

          {message && (
            <p className="text-center text-sm mt-2 text-[#020f22]">
              {message}
            </p>
          )}

        </form>

      </div>

    </div>
  );
}