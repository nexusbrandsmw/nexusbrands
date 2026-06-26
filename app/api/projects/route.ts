import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const data = await req.json();

  const project = await prisma.project.create({
    data: {
      title: data.title,
      slug: data.slug,
      client: data.client,
      industry: data.industry,
      timeline: data.timeline,
      description: data.description,
      challenge: data.challenge,
      solution: data.solution,
      outcome: data.outcome,
      services: data.services,
      images: {
        create: data.images.map((url: string) => ({
          url,
        })),
      },
    },
  });

  return NextResponse.json(project);
}