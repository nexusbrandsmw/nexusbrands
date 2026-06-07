import { NextResponse } from "next/server";
import { supabase } from "@/lib/supabase";

// GET ALL SLOTS
export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);

    const date = searchParams.get("date");

    let query = supabase
      .from("slots")
      .select("*")
      .eq("available", true);

    if (date) {
      query = query.eq("slot_date", date);
    }

    const { data, error } = await query.order("slot_time");

    if (error) throw error;

    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json(
      { message: "Failed to fetch slots" },
      { status: 500 }
    );
  }
}

// CREATE SLOT
export async function POST(request: Request) {
  try {
    const body = await request.json();

    const { slot_date, slot_time } = body;

    const { data, error } = await supabase
      .from("slots")
      .insert([
        {
          slot_date,
          slot_time,
          available: true,
        },
      ])
      .select()
      .single();

    if (error) throw error;

    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json(
      { message: "Failed to create slot" },
      { status: 500 }
    );
  }
}

// DELETE SLOT
export async function DELETE(request: Request) {
  try {
    const { searchParams } = new URL(request.url);

    const id = searchParams.get("id");

    const { error } = await supabase
      .from("slots")
      .delete()
      .eq("id", id);

    if (error) throw error;

    return NextResponse.json({
      success: true,
    });
  } catch (error) {
    return NextResponse.json(
      { message: "Failed to delete slot" },
      { status: 500 }
    );
  }
}