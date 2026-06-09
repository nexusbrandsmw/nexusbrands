import { NextResponse } from "next/server";
import { supabase } from "@/lib/supabase";

/* ======================================================
   GET BOOKINGS (USED BY ViewSlots)
====================================================== */
export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const date = searchParams.get("date");

    let query = supabase.from("bookings").select("*");

    if (date) {
      query = query.eq("booking_date", date);
    }

    const { data, error } = await query;

    if (error) {
      console.error("GET BOOKINGS ERROR:", error);

      return NextResponse.json(
        {
          success: false,
          message: error.message,
        },
        { status: 400 }
      );
    }

    return NextResponse.json(data || []);
  } catch (error: any) {
    console.error("SERVER ERROR (GET):", error);

    return NextResponse.json(
      {
        success: false,
        message: "Failed to fetch bookings",
      },
      { status: 500 }
    );
  }
}

/* ======================================================
   CREATE BOOKING (USED BY BookingForm)
====================================================== */
export async function POST(request: Request) {
  try {
    let body;

    try {
      body = await request.json();
    } catch (err) {
      return NextResponse.json(
        {
          success: false,
          message: "Invalid request body",
        },
        { status: 400 }
      );
    }

    const {
      team_name,
      whatsapp,
      booking_date,
      booking_time,
      duration,
    } = body;

    const { data, error } = await supabase
      .from("bookings")
      .insert([
        {
          team_name,
          whatsapp,
          booking_date,
          booking_time,
          duration,
        },
      ])
      .select()
      .single();

    if (error) {
      console.error("SUPABASE ERROR:", error);

      // Duplicate slot error (unique constraint)
      if (error.code === "23505") {
        return NextResponse.json(
          {
            success: false,
            message:
              "This slot is already booked. Please choose another time.",
          },
          { status: 409 }
        );
      }

      return NextResponse.json(
        {
          success: false,
          message: error.message,
        },
        { status: 400 }
      );
    }

    return NextResponse.json({
      success: true,
      booking: data,
    });
  } catch (error: any) {
    console.error("SERVER ERROR (POST):", error);

    return NextResponse.json(
      {
        success: false,
        message: "Failed to create booking",
      },
      { status: 500 }
    );
  }
}