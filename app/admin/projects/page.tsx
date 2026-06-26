import { prisma } from "@/lib/prisma";
import Link from "next/link";
import { Plus } from "lucide-react";

export default async function ProjectsPage() {

  const projects = await prisma.project.findMany({
    include: {
      images: true,
    },
    orderBy: {
      createdAt: "desc",
    },
  });

  return (
    <>
      {/* HEADER */}
      <div className="flex items-center justify-between mb-10">

        <div>
          <h1 className="text-3xl font-bold text-[#000f22]">
            Portfolio Projects
          </h1>

          <p className="text-[#000f22]/60 mt-2">
            Manage and showcase your portfolio work.
          </p>
        </div>

        <Link
          href="/admin/projects/new"
          className="bg-[#e01e41] text-white px-5 py-3 rounded-xl flex items-center gap-2 hover:opacity-90 transition"
        >
          <Plus size={18} />
          Add Project
        </Link>

      </div>

      {/* PROJECTS GRID */}
      <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">

        {projects.map((project) => (

          <div
            key={project.id}
            className="bg-white rounded-3xl overflow-hidden border border-[#000f22]/10 shadow-sm"
          >

            {/* IMAGE */}
            <div className="relative">

              <img
                src={project.images[0]?.url || "/placeholder.jpg"}
                alt={project.title}
                className="h-[230px] w-full object-cover"
              />

              {/* CATEGORY BADGE */}
              <div className="absolute top-4 left-4">
                <span className="bg-[#e01e41] text-white text-xs px-3 py-1 rounded-full">
                  {project.industry}
                </span>
              </div>

            </div>

            {/* CONTENT */}
            <div className="p-6">

              <h3 className="text-xl font-bold text-[#000f22]">
                {project.title}
              </h3>

              <p className="text-sm text-[#000f22]/50 mt-2">
                {new Date(project.createdAt).toDateString()}
              </p>

              {/* FOOTER ACTIONS */}
              <div className="mt-6 pt-5 border-t border-[#000f22]/10 flex justify-between items-center">

                <button className="text-sm text-[#000f22]/60 hover:text-[#000f22] transition">
                  View Project
                </button>

                <div className="flex gap-5">

                  <button className="text-sm text-blue-600 hover:opacity-80 transition">
                    Edit
                  </button>

                  <button className="text-sm text-red-600 hover:opacity-80 transition">
                    Delete
                  </button>

                </div>

              </div>

            </div>

          </div>

        ))}

      </div>
    </>
  );
}