"use client";

import { useState } from "react";

export default function BookingForm({
  teamName,
  whatsapp,
  selectedDate,
  selectedTime,
  duration,
  setTeamName,
  setWhatsapp,
  setSelectedDate,
  setSelectedTime,
  setDuration,
}: any) {

  const ALL_SLOTS = Array.from(
    { length: 24 },
    (_, i) => `${i.toString().padStart(2, "0")}:00`
  );

  const handleBooking = async () => {
    try {
      const response = await fetch("/api/bookings", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          team_name: teamName,
          whatsapp,
          booking_date: selectedDate,
          booking_time: selectedTime,
          duration,
        }),
      });

      const text = await response.text();

      let data = {};
      try {
        data = text ? JSON.parse(text) : {};
      } catch (e) {
        console.error("Invalid JSON from API:", text);
        alert("Server error. Try again.");
        return;
      }

      // 🚨 CLEAN ERROR HANDLING (BOOKED SLOT POPUP)
      if (!response.ok) {
        alert(data.message || "This slot is already booked. Please choose another time.");
        return;
      }

      alert("Booking request submitted successfully!");

    } catch (error) {
      console.error(error);
      alert("Something went wrong. Please try again.");
    }
  };

  return (
    <div className="bg-white p-6 rounded-3xl shadow-lg text-[#020f22]">

      <h2 className="text-xl text-[#b12526] font-bold mb-4">
        Quick Booking Request
      </h2>

      <form className="space-y-4">

        {/* TEAM NAME */}
        <input
          type="text"
          value={teamName}
          onChange={(e) => setTeamName(e.target.value)}
          placeholder="Team Name"
          className="w-full p-3 border border-black/50 rounded-2xl outline-none focus:border-[#4ebd45]"
        />

        {/* WHATSAPP */}
        <input
          type="text"
          value={whatsapp}
          onChange={(e) => setWhatsapp(e.target.value)}
          placeholder="WhatsApp Number"
          className="w-full p-3 border border-black/50 rounded-2xl outline-none focus:border-[#4ebd45]"
        />

        {/* DATE */}
        <input
          type="date"
          value={selectedDate || ""}
          onChange={(e) => setSelectedDate(e.target.value)}
          className="w-full p-3 border border-black/50 rounded-2xl outline-none focus:border-[#4ebd45]"
        />

        {/* TIME (24 HOURS) */}
        <select
          value={selectedTime}
          onChange={(e) => setSelectedTime(e.target.value)}
          className="w-full p-3 border border-black/50 rounded-2xl outline-none focus:border-[#4ebd45]"
        >
          <option value="">Select Time Slot</option>

          {ALL_SLOTS.map((slot) => (
            <option key={slot} value={slot}>
              {slot}
            </option>
          ))}
        </select>

        {/* DURATION */}
        <div>
          <label className="block mb-2 font-medium text-black">
            Duration (minutes)
          </label>

          <input
            type="number"
            min={60}
            step={30}
            value={duration}
            onChange={(e) =>
              setDuration(Number(e.target.value))
            }
            className="w-full p-3 border border-black/50 rounded-2xl outline-none focus:border-[#4ebd45]"
          />

          <p className="text-sm text-gray-500 mt-1">
            Minimum 1 hour • Increments of 30 minutes
          </p>

          <p className="text-sm font-medium text-[#4ebd45] mt-2">
            Selected duration:{" "}
            {Math.floor(duration / 60)}h
            {duration % 60 !== 0 ? ` ${duration % 60}m` : ""}
          </p>
        </div>

        {/* SUBMIT BUTTON */}
        <button
          type="button"
          onClick={handleBooking}
          className={`w-full p-3 rounded-2xl font-bold text-white transition ${
            teamName &&
            whatsapp &&
            selectedDate &&
            selectedTime &&
            duration
              ? "bg-[#b12526]"
              : "bg-gray-400 cursor-not-allowed"
          }`}
          disabled={
            !teamName ||
            !whatsapp ||
            !selectedDate ||
            !selectedTime ||
            !duration
          }
        >
          Book Now
        </button>

      </form>
    </div>
  );
}