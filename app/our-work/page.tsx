"use client";

import { useState } from "react";
import Link from "next/link";
import { projects } from "@/data/projects";

const categories = [
  "All",
  "Graphic Designing",
  "Branding",
  "Social Media Marketing",
  "Website Development",
];

export default function OurWorkPage() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProjects =
    activeCategory === "All"
      ? projects
      : projects.filter((project) =>
          project.services.includes(activeCategory)
        );

  return (
    <>
      {/* HERO */}
      <section className="py-20 bg-[#f8f9fb] relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-[#e01e41]/10 blur-[120px] rounded-full" />

          <div className="absolute bottom-[-200px] left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-[#000f22]/10 blur-[120px] rounded-full" />
        </div>

        <div className="relative max-w-4xl mx-auto px-6 text-center">
          <span className="uppercase tracking-[0.2em] text-sm text-[#000f22]/60">
            Nexus Brands
          </span>

          <h1 className="mt-6 text-4xl md:text-6xl font-extrabold text-[#000f22]">
            Our Work
          </h1>

          <p className="mt-6 text-lg text-[#000f22]/70 leading-relaxed">
            A collection of branding, design, social media, and website
            projects built for growing businesses.
          </p>
        </div>
      </section>

      {/* FILTERS */}
      <section className="py-10 bg-white">
        <div className="max-w-6xl mx-auto px-6 flex flex-wrap gap-3">
          {categories.map((category) => {
            const isActive = activeCategory === category;

            return (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-5 py-2 rounded-full text-sm font-medium transition ${
                  isActive
                    ? "bg-[#e01e41] text-white"
                    : "border border-[#000f22]/15 text-[#000f22] bg-white hover:border-[#e01e41] hover:text-[#e01e41]"
                }`}
              >
                {category}
              </button>
            );
          })}
        </div>
      </section>

      {/* PROJECTS GRID */}
      <section className="pt-4 pb-24 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          {filteredProjects.length === 0 ? (
            <div className="py-20 text-center">
              <h2 className="text-2xl font-bold text-[#000f22]">
                No projects found
              </h2>

              <p className="mt-3 text-[#000f22]/60">
                There are currently no projects in this category.
              </p>
            </div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredProjects.map((project) => {
                const coverImage = project.images?.[0]?.url;

                return (
                  <Link
                    key={project.slug}
                    href={`/our-work/${project.slug}`}
                    className="group bg-white border border-[#000f22]/10 rounded-3xl overflow-hidden hover:shadow-lg transition"
                  >
                    {/* IMAGE */}
                    <div className="overflow-hidden bg-[#f8f9fb]">
                      {coverImage ? (
                        <img
                          src={coverImage}
                          alt={project.title}
                          className="h-[220px] w-full object-cover group-hover:scale-105 transition duration-500"
                        />
                      ) : (
                        <div className="h-[220px] flex items-center justify-center text-[#000f22]/40">
                          No image
                        </div>
                      )}
                    </div>

                    {/* CONTENT */}
                    <div className="p-6">
                      {/* SERVICES */}
                      <div className="flex flex-wrap gap-2">
                        {project.services.slice(0, 2).map((service) => (
                          <span
                            key={service}
                            className="text-xs uppercase tracking-[0.12em] text-[#e01e41]"
                          >
                            {service}
                          </span>
                        ))}
                      </div>

                      {/* TITLE */}
                      <h3 className="mt-3 text-xl font-bold text-[#000f22] leading-snug">
                        {project.title}
                      </h3>

                      {/* TAGLINE */}
                      {project.tagline && (
                        <p className="mt-2 text-sm text-[#000f22]/60 line-clamp-2">
                          {project.tagline}
                        </p>
                      )}

                      {/* VIEW PROJECT */}
                      <p className="mt-5 text-sm font-medium text-[#e01e41] group-hover:translate-x-1 transition">
                        View Project →
                      </p>
                    </div>
                  </Link>
                );
              })}
            </div>
          )}
        </div>
      </section>
    </>
  );
}