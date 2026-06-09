import { NextResponse } from "next/server";
import { supabase } from "@/lib/supabase";

// GET BOOKINGS
export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);

    const date = searchParams.get("date");

    let query = supabase
      .from("bookings")
      .select("*");

    if (date) {
      query = query.eq("booking_date", date);
    }

    const { data, error } = await query;

    if (error) throw error;

    return NextResponse.json(data);

  } catch (error) {
    console.error(error);

    return NextResponse.json(
      {
        success: false,
        message: "Failed to fetch bookings",
      },
      { status: 500 }
    );
  }
}

// CREATE BOOKING
export async function POST(request: Request) {
  try {
    const body = await request.json();

    const {
      team_name,
      whatsapp,
      booking_date,
      booking_time,
    } = body;

    const { data, error } = await supabase
      .from("bookings")
      .insert([
        {
          team_name,
          whatsapp,
          booking_date,
          booking_time,
        },
      ])
      .select()
      .single();

    if (error) throw error;

    // Mark slot unavailable (if you still use slots table)
    await supabase
      .from("slots")
      .update({
        available: false,
      })
      .eq("slot_date", booking_date)
      .eq("slot_time", booking_time);

    return NextResponse.json({
      success: true,
      booking: data,
    });

  } catch (error) {
    console.error(error);

    return NextResponse.json(
      {
        success: false,
        message: "Failed to create booking",
      },
      { status: 500 }
    );
  }
}