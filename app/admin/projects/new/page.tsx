"use client";

import { useState } from "react";
import ImageUploader from "@/components/ImageUploader";

export default function AddProjectPage() {
  const [form, setForm] = useState({
    title: "",
    slug: "",
    client: "",
    industry: "",
    timeline: "",
    description: "",
    challenge: "",
    solution: "",
    outcome: "",
    services: "",
    images: "",
  });

  const inputClass =
    "w-full mt-2 px-4 py-3 rounded-xl border border-[#000f22]/20 text-[#000f22] placeholder:text-[#000f22]/40 outline-none focus:border-[#e01e41] bg-white";

  const labelClass = "text-sm font-semibold text-[#000f22]";

  const handleSubmit = async () => {
    await fetch("/api/projects", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        ...form,
        services: form.services.split(","),
        images: form.images.split(","),
      }),
    });

    alert("Project created successfully!");
  };

  return (
    <div className="max-w-4xl mx-auto space-y-8">

      {/* HEADER */}
      <div>
        <h1 className="text-3xl font-bold text-[#000f22]">
          Add New Project
        </h1>
        <p className="text-[#000f22]/70 mt-2">
          Fill in project details to publish it on your portfolio.
        </p>
      </div>

      {/* FORM CARD */}
      <div className="bg-white border border-[#000f22]/10 rounded-3xl p-8 space-y-6 shadow-sm">

        <div>
          <label className={labelClass}>Project Title</label>
          <input
            className={inputClass}
            placeholder="e.g. Tiata Investment"
            onChange={(e) =>
              setForm({ ...form, title: e.target.value })
            }
          />
        </div>

        <div>
          <label className={labelClass}>Slug</label>
          <input
            className={inputClass}
            placeholder="e.g. tiata-investment"
            onChange={(e) =>
              setForm({ ...form, slug: e.target.value })
            }
          />
        </div>

        <div className="grid md:grid-cols-3 gap-4">

          <div>
            <label className={labelClass}>Client</label>
            <input
              className={inputClass}
              placeholder="Client name"
              onChange={(e) =>
                setForm({ ...form, client: e.target.value })
              }
            />
          </div>

          <div>
            <label className={labelClass}>Industry</label>
            <input
              className={inputClass}
              placeholder="Finance, Tech..."
              onChange={(e) =>
                setForm({ ...form, industry: e.target.value })
              }
            />
          </div>

          <div>
            <label className={labelClass}>Timeline</label>
            <input
              className={inputClass}
              placeholder="3 Weeks"
              onChange={(e) =>
                setForm({ ...form, timeline: e.target.value })
              }
            />
          </div>

        </div>

        <div>
          <label className={labelClass}>Description</label>
          <textarea
            rows={4}
            className={inputClass}
            placeholder="Project overview..."
            onChange={(e) =>
              setForm({ ...form, description: e.target.value })
            }
          />
        </div>

        <div>
          <label className={labelClass}>Challenge</label>
          <textarea
            rows={3}
            className={inputClass}
            onChange={(e) =>
              setForm({ ...form, challenge: e.target.value })
            }
          />
        </div>

        <div>
          <label className={labelClass}>Solution</label>
          <textarea
            rows={3}
            className={inputClass}
            onChange={(e) =>
              setForm({ ...form, solution: e.target.value })
            }
          />
        </div>

        <div>
          <label className={labelClass}>Outcome</label>
          <textarea
            rows={3}
            className={inputClass}
            onChange={(e) =>
              setForm({ ...form, outcome: e.target.value })
            }
          />
        </div>

        <div>
          <label className={labelClass}>
            Services (comma separated)
          </label>
          <input
            className={inputClass}
            placeholder="Branding, Website, Design"
            onChange={(e) =>
              setForm({ ...form, services: e.target.value })
            }
          />
        </div>

        <div>
          <label className={labelClass}>
            Images (comma separated URLs)
          </label>
          <ImageUploader
            onUpload={(urls) =>
              setForm((prev) => ({
                ...prev,
                images: urls.join(","),
              }))
            }
          />
        </div>

        {/* SUBMIT */}
        <button
          onClick={handleSubmit}
          className="w-full bg-[#e01e41] text-white py-3.5 rounded-xl font-medium hover:opacity-90 transition"
        >
          Save Project
        </button>

      </div>
    </div>
  );
}