"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import slugify from "slugify";

export default function EditProjectPage({
  params,
}: {
  params: { id: string };
}) {
  const router = useRouter();

  const [form, setForm] = useState({
    title: "",
    category: "",
    description: "",
    imageUrl: "",
  });

  useEffect(() => {
    fetch("/api/projects")
      .then((res) => res.json())
      .then((data) => {
        const project = data.find(
          (p: { id: string | number }) => String(p.id) === params.id
        );

        if (project) {
          setForm(project);
        }
      });
  }, [params.id]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleUpdate = async (e: React.FormEvent) => {
    e.preventDefault();

    const slug = slugify(form.title, { lower: true });

    await fetch(`/api/projects/${params.id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        ...form,
        slug,
      }),
    });

    router.push("/admin/projects");
  };

  return (
    <div>
      <h1 className="text-4xl font-bold mb-10">
        Edit Project
      </h1>

      <form
        onSubmit={handleUpdate}
        className="bg-white p-8 rounded-3xl border border-[#000f22]/10 space-y-5"
      >
        <input
          name="title"
          value={form.title}
          onChange={handleChange}
          className="w-full p-4 border rounded-xl"
        />

        <input
          name="category"
          value={form.category}
          onChange={handleChange}
          className="w-full p-4 border rounded-xl"
        />

        <textarea
          name="description"
          value={form.description}
          onChange={handleChange}
          className="w-full p-4 border rounded-xl"
        />

        <input
          name="imageUrl"
          value={form.imageUrl}
          onChange={handleChange}
          className="w-full p-4 border rounded-xl"
        />

        <button className="bg-[#e01e41] text-white px-6 py-3 rounded-xl">
          Update Project
        </button>
      </form>
    </div>
  );
}