"use client";

import { useState } from "react";
import PageHeader from "@/components/PageHeader";
import BookingForm from "@/components/BookingForm";
import ViewSlots from "@/components/ViewSlots";

export default function BookingPage() {
  const [selectedDate, setSelectedDate] = useState("");
  const [selectedTime, setSelectedTime] = useState("");
  const [teamName, setTeamName] = useState("");
  const [whatsapp, setWhatsapp] = useState("");

  return (
    <>
      {/* HEADER (FULL WIDTH ALWAYS) */}
      <PageHeader
        title="Book a Pitch"
        subtitle="Select your preferred date and time to reserve a slot instantly."
        backgroundImage="/images/booking.jpg"
      />

      {/* PAGE CONTENT (CONSTRAINED ONLY HERE) */}
      <div className="max-w-6xl mx-auto px-6 py-10 grid md:grid-cols-2 gap-8">

        <BookingForm
          teamName={teamName}
          whatsapp={whatsapp}
          selectedDate={selectedDate}
          selectedTime={selectedTime}
          setTeamName={setTeamName}
          setWhatsapp={setWhatsapp}
          setSelectedDate={setSelectedDate}
          setSelectedTime={setSelectedTime}
        />

        <ViewSlots
          selectedDate={selectedDate}
          setSelectedDate={setSelectedDate}
          setSelectedTime={setSelectedTime}
        />

      </div>
    </>
  );
}