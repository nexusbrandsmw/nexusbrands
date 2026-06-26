"use client";
import { prisma } from "@/lib/prisma";
import Link from "next/link";

import OurWorkSection from "@/components/OurWork";
import PageHeader from "@/components/PageHeader";

export default async function OurWorkPage() {
  const projects = await prisma.project.findMany({
    include: { images: true },
  });
 
  
  return (
    <>
      {/* HEADER */}
      <PageHeader
        title="Our Work"
        description="A collection of branding, design, social media, and website projects built for growing businesses."
        label="Nexus Brands"
      />

      {/* WORK SECTION */}
      <div className="grid md:grid-cols-3 gap-6">

      {projects.map((p) => (
        <Link
          key={p.id}
          href={`/our-work/${p.slug}`}
          className="rounded-2xl overflow-hidden bg-white border"
        >

          <img
            src={p.images[0]?.url}
            className="h-[250px] w-full object-cover"
          />

          <div className="p-4">
            <h2 className="font-bold">{p.title}</h2>
            <p className="text-sm text-gray-500">{p.industry}</p>
          </div>

        </Link>
      ))}

    </div>
    </>
  );
}