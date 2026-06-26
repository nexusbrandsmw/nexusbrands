import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const formData = await req.formData();
  const file = formData.get("file") as File;

  if (!file) {
    return NextResponse.json(
      { error: "No file uploaded" },
      { status: 400 }
    );
  }

  // Fake URL (replace with Spaceship/S3 later)
  const url = `/uploads/${Date.now()}-${file.name}`;

  return NextResponse.json({ url });
}