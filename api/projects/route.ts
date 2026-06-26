import { NextResponse } from "next/server";

// Prisma removed. This endpoint will be wired to WordPress Headless later.
// For now we keep the route shape so the frontend can be updated safely.

export async function GET() {
  return NextResponse.json(
    { error: "Not implemented: Prisma removed; wire to WordPress REST" },
    { status: 501 }
  );
}

export async function POST() {
  return NextResponse.json(
    { error: "Not implemented: Prisma removed; wire to WordPress REST" },
    { status: 501 }
  );
}

