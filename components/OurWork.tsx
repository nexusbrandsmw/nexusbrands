"use client";

import { useState } from "react";
import Link from "next/link";
import { projects } from "@/data/projects";

export default function OurWork() {
  const [activeFilter, setActiveFilter] = useState("All");

  const filters = [
    "All",
    "Brand Strategy",
    "Creative & Campaigns",
    "Branded  Materials",
    "Digital Presence",
  ];

  const filteredProjects =
    activeFilter === "All"
      ? projects
      : projects.filter((project) =>
          project.services.includes(activeFilter)
        );

  return (
    <section className="py-24 bg-accent">
      <div className="max-w-6xl mx-auto px-6">
        <span className="uppercase tracking-[0.2em] text-sm text-[#e01e41]">
          Portfolio
        </span>

        <h2 className="mt-4 mb-10 text-3xl md:text-5xl font-bold text-[#000f22] leading-tight">
          The work we are proud for<span className="text-primary">.</span>
        </h2>

        {/* FILTERS */}
        <div className="flex flex-wrap gap-3 mb-12">
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`px-5 py-2 rounded-full font-medium transition ${
                activeFilter === filter
                  ? "bg-[#e01e41] text-white"
                  : "border border-[#000f22]/15 text-[#000f22] hover:border-[#e01e41] hover:text-[#e01e41]"
              }`}
            >
              {filter}
            </button>
          ))}
        </div>

        {/* PROJECT GRID */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">

          {filteredProjects.map((project) => (
            <Link
              key={project.slug}
              href={`/our-work/${project.slug}`}
              className="group relative block aspect-square overflow-hidden rounded-3xl"
            >
              {/* PROJECT IMAGE */}
              <img
                src={project.images[0]?.url || "/images/placeholder.jpg"}
                alt={project.title}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />

              {/* HOVER OVERLAY */}
              <div
                className="
                  absolute inset-0
                  bg-secondary/85
                  opacity-0
                  group-hover:opacity-100
                  transition-opacity
                  duration-300
                  flex items-center justify-center
                  p-8
                  text-center
                "
              >
                <div className="translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">

                  {/* SERVICE */}
                  <p className="text-xs rounded-full font-medium bg-white/10 text-white px-3 pt-1 pb-1 inline-block">
                    {project.services[0]}
                  </p>

                  {/* TITLE */}
                  <h3 className="mt-3 text-2xl font-bold text-primary">
                    {project.title}
                  </h3>

                  {/* LINK */}
                  <span className="inline-block mt-6 text-sm font-semibold text-white border-b border-white/60 pb-1">
                    View Project →
                  </span>

                </div>
              </div>
            </Link>
          ))}

        </div>

        {/* EMPTY STATE */}
        {filteredProjects.length === 0 && (
          <div className="py-16 text-center">
            <p className="text-[#000f22]/60">
              No projects found in this category.
            </p>
          </div>
        )}

      </div>
    </section>
  );
}