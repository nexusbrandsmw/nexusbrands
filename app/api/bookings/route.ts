import { NextResponse } from "next/server";
import { supabase } from "@/lib/supabase";

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

    return NextResponse.json({
      success: true,
      booking: data,
    });

  } catch (error) {
    return NextResponse.json(
      {
        success: false,
        message: "Failed to create booking",
      },
      { status: 500 }
    );
  }
}

await supabase
  .from("slots")
  .update({
    available: false,
  })
  .eq("slot_date", booking_date)
  .eq("slot_time", booking_time);