import { NextResponse } from "next/server";

// Prisma removed. This endpoint will be wired to WordPress Headless later.

export async function DELETE() {
  return NextResponse.json(
    { error: "Not implemented: Prisma removed; wire to WordPress REST" },
    { status: 501 }
  );
}

export async function PUT() {
  return NextResponse.json(
    { error: "Not implemented: Prisma removed; wire to WordPress REST" },
    { status: 501 }
  );
}

