"use client";

export default function AddBlogPage() {
  return (
    <div>

      {/* HEADER */}
      <div className="mb-10">

        <h1 className="text-3xl font-bold text-[#000f22]">
          Add New Post
        </h1>

        <p className="text-[#000f22]/60 mt-2">
          Create and publish articles for your website.
        </p>

      </div>

      <div className="grid lg:grid-cols-3 gap-8">

        {/* LEFT SIDE */}
        <div className="lg:col-span-2 space-y-6">

          {/* TITLE */}
          <div className="bg-white rounded-3xl border border-[#000f22]/10 p-8">

            <label className="block text-sm font-medium text-[#000f22]/70 mb-3">
              Post Title
            </label>

            <input
              type="text"
              placeholder="Enter title..."
              className="w-full border border-[#000f22]/10 rounded-xl px-5 py-4 outline-none focus:border-[#e01e41]"
            />

          </div>

          {/* CONTENT */}
          <div className="bg-white rounded-3xl border border-[#000f22]/10 p-8">

            <label className="block text-sm font-medium text-[#000f22]/70 mb-3">
              Content
            </label>

            <textarea
              rows={20}
              placeholder="Write your article..."
              className="w-full border border-[#000f22]/10 rounded-xl px-5 py-4 outline-none resize-none focus:border-[#e01e41]"
            />

          </div>

        </div>

        {/* RIGHT SIDEBAR */}
        <div className="space-y-6">

          {/* PUBLISH */}
          <div className="bg-white rounded-3xl border border-[#000f22]/10 p-7">

            <h3 className="font-bold text-[#000f22] mb-6">
              Publish
            </h3>

            <button className="w-full bg-[#e01e41] text-white py-3 rounded-xl font-medium hover:opacity-90 transition">
              Publish Post
            </button>

            <button className="w-full mt-3 border border-[#000f22]/10 text-[#000f22] py-3 rounded-xl font-medium hover:bg-[#f8f9fb] transition">
              Save Draft
            </button>

          </div>

          {/* CATEGORY */}
          <div className="bg-white rounded-3xl border border-[#000f22]/10 p-7">

            <h3 className="font-bold text-[#000f22] mb-5">
              Category
            </h3>

            <select className="w-full border border-[#000f22]/10 rounded-xl px-4 py-3 outline-none focus:border-[#e01e41]">

              <option>Branding</option>
              <option>Graphic Design</option>
              <option>Website Development</option>
              <option>Marketing</option>
              <option>Business</option>

            </select>

          </div>

          {/* FEATURED IMAGE */}
          <div className="bg-white rounded-3xl border border-[#000f22]/10 p-7">

            <h3 className="font-bold text-[#000f22] mb-5">
              Featured Image
            </h3>

            <div className="border-2 border-dashed border-[#000f22]/15 rounded-2xl p-10 text-center">

              <p className="text-[#000f22]/50">
                Upload Image
              </p>

            </div>

          </div>

          {/* TAGS */}
          <div className="bg-white rounded-3xl border border-[#000f22]/10 p-7">

            <h3 className="font-bold text-[#000f22] mb-5">
              Tags
            </h3>

            <input
              type="text"
              placeholder="branding, website..."
              className="w-full border border-[#000f22]/10 rounded-xl px-4 py-3 outline-none focus:border-[#e01e41]"
            />

          </div>

        </div>

      </div>

    </div>
  );
}
