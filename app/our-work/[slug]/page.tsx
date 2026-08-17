import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { projects } from "@/data/projects";
import {AlertTriangle, Wrench, TrendingUp, X, ChevronLeft, ChevronRight, ArrowRight, } from "lucide-react";
import { FaArrowRight, FaWhatsapp } from "react-icons/fa";
import CTASection from "@/components/CTA";

export default async function OurWorkProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const project = projects.find(
    (p) => p.slug.toLowerCase() === slug.toLowerCase()
  );

  if (!project) {
    notFound();
  }

  const galleryImages = project.images ?? [];

  return (
    <>
      {/* HERO */}
      <section className="pt-28 pb-16 bg-[#000f22] relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-[#e01e41]/20 blur-[140px] rounded-full" />
        </div>

        <div className="relative max-w-6xl mx-auto px-6 grid md:grid-cols-3 gap-10 items-start">

          {/* TITLE */}
          <div className="md:col-span-2">
            <h1 className="mt-4 text-5xl md:text-6xl font-bold text-white leading-none">
              {project.title}
            </h1>
          </div>

          {/* RIGHT — PROJECT DETAILS */}
          <div className="space-y-8 md:pt-2">

            {/* CLIENT */}
            <div>
              <p className="text-xs uppercase tracking-[0.15em] text-[#e01e41]">
                Client
              </p>

              <p className="mt-2 text-lg font-semibold text-white">
                {project.client}
              </p>
            </div>

            {/* SCOPE OF WORK */}
            <div>
              <p className="text-xs uppercase tracking-[0.15em] text-[#e01e41]">
                Scope of Work
              </p>

              <div className="mt-3 flex flex-wrap gap-2">
                {project.services.map((service) => (
                  <span
                    key={service}
                    className="px-3 py-1.5 rounded-full text-xs font-medium bg-white/10 text-white border border-white/10"
                  >
                    {service}
                  </span>
                ))}
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* CHALLENGE / SOLUTION / OUTCOME */}
      <section className="pt-16 pb-16 bg-white">
        <div className="max-w-5xl mx-auto px-6 grid md:grid-cols-3 gap-5">

          {/* CHALLENGE */}
          <div className="border border-[#000f22]/10 rounded-2xl p-5 flex gap-4 items-start hover:border-[#e01e41]/30 transition">
            <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-[#e01e41]/10 flex items-center justify-center">
              <AlertTriangle
                size={20}
                className="text-[#e01e41]"
              />
            </div>

            <div>
              <h3 className="text-base font-bold text-[#000f22]">
                Challenge
              </h3>

              <p className="mt-2 text-sm text-[#000f22]/65 leading-relaxed">
                {project.challenge}
              </p>
            </div>
          </div>

          {/* SOLUTION */}
          <div className="border border-[#000f22]/10 rounded-2xl p-5 flex gap-4 items-start hover:border-[#e01e41]/30 transition">
            <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-[#e01e41]/10 flex items-center justify-center">
              <Wrench
                size={20}
                className="text-[#e01e41]"
              />
            </div>

            <div>
              <h3 className="text-base font-bold text-[#000f22]">
                Solution
              </h3>

              <p className="mt-2 text-sm text-[#000f22]/65 leading-relaxed">
                {project.solution}
              </p>
            </div>
          </div>

          {/* OUTCOME */}
          <div className="border border-[#000f22]/10 rounded-2xl p-5 flex gap-4 items-start hover:border-[#e01e41]/30 transition">
            <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-[#e01e41]/10 flex items-center justify-center">
              <TrendingUp
                size={20}
                className="text-[#e01e41]"
              />
            </div>

            <div>
              <h3 className="text-base font-bold text-[#000f22]">
                Outcome
              </h3>

              <p className="mt-2 text-sm text-[#000f22]/65 leading-relaxed">
                {project.outcome}
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* GALLERY */}
      {galleryImages.length > 0 && (
        <section className="pb-20 bg-white">
          <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {galleryImages.map((image, index) => (
              <div
                key={`${image.url}-${index}`}
                className="rounded-2xl overflow-hidden"
              >
                <Image
                  src={image.url}
                  alt={`${project.title} project image ${index + 1}`}
                  width={700}
                  height={500}
                  className="w-full h-[240px] object-cover hover:scale-105 transition duration-500"
                />
              </div>
            ))}
          </div>
        </section>
      )}
      

      {/* WEBSITE */}
      {project.liveUrl && (
        <section className="pb-24 bg-white text-center">
          <Link
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-[#e01e41] text-white px-8 py-4 rounded-full font-medium hover:opacity-90 transition"
          >
            Visit Website →
          </Link>
        </section>
      )}

      {/* MORE PROJECTS */}
      <section className="py-16 bg-secondary">
        <div className="max-w-6xl mx-auto px-6 text-center">

          <p className="text-sm text-white/60">
            Want to explore more of our work?
          </p>

          <Link
            href="/our-work"
            className="mt-4 inline-flex items-center gap-2 text-primary font-semibold hover:text-white transition"
          >
            View all projects
            <ArrowRight size={18} />
          </Link>

        </div>
      </section>

      {/* CTA */}
      <section className="pt-24 pb-24 bg-primary text-white">
      <div className="max-w-4xl mx-auto px-6 text-center">

        {/* SMALL LABEL */}
        <span className="uppercase tracking-[0.2em] text-sm text-white/60">
          Let’s Work Together
        </span>

        {/* HEADING */}
        <h2 className="mt-6 text-3xl md:text-5xl font-bold leading-tight">
          Ready to build a strong brand for your business?
        </h2>

        {/* DESCRIPTION */}
        <p className="mt-6 text-white/70 leading-relaxed">
          Whether you are a startup or an established company, we help you
          create a strong digital presence that attracts and converts customers.
        </p>

        {/* BUTTONS */}
        <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">

          {/* PRIMARY CTA */}
          <Link
            href="/contact"
            className="group bg-secondary text-white px-7 py-3 rounded-full font-medium hover:opacity-90 transition inline-flex items-center justify-center gap-2"
          >
            Start a Project
            <FaArrowRight className="transition-transform group-hover:translate-x-1" />
          </Link>

          {/* SECONDARY CTA */}
          <a
            href="https://wa.me/265884831850"
            target="_blank"
            className="group border border-white/70 px-7 py-3 rounded-full font-medium hover:border-[#e01e41] transition inline-flex items-center justify-center gap-2"
          >
            WhatsApp Us
            <FaWhatsapp className="text-green-400" />
          </a>

        </div>

      </div>

      
    </section>
    </>
  );
}