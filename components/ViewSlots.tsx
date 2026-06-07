"use client";

import { useState } from "react";

export default function ViewSlots({
  selectedDate,
  setSelectedDate,
  setSelectedTime,
}: any) {
  const [showSlots, setShowSlots] = useState(false);

  const slots = [
    "06:00 - 07:00",
    "07:00 - 08:00",
    "08:00 - 09:00",
    "09:00 - 10:00",
    "10:00 - 11:00",
    "11:00 - 12:00",
    "12:00 - 13:00",
    "13:00 - 14:00",
    "14:00 - 15:00",
    "15:00 - 16:00",
    "16:00 - 17:00",
    "17:00 - 18:00",
    "18:00 - 19:00",
    "19:00 - 20:00",
    "20:00 - 21:00",
  ];

  const booked = ["06:00 - 07:00", "08:00 - 09:00", "11:00 - 12:00"];

  return (
    <div className="bg-white p-6 rounded-3xl shadow-lg text-[#020f22]">

      <h2 className="text-xl text-[#b12526] font-bold mb-4">
        View Available Slots
      </h2>

      {/* DATE */}
      <input
        type="date"
        value={selectedDate}
        onChange={(e) => setSelectedDate(e.target.value)}
        className="w-full p-3 border border-black/50 rounded-2xl mb-4"
      />

      {/* DROPDOWN BUTTON */}
      <button
        onClick={() => setShowSlots(!showSlots)}
        className="w-full p-3 border border-black/50 rounded-2xl flex justify-between"
      >
        Time Slots
        <span>{showSlots ? "▲" : "▼"}</span>
      </button>

      {/* SLOTS */}
      {showSlots && (
        <div className="mt-4 space-y-2">

          {slots.map((slot, i) => {
            const isBooked = booked.includes(slot);

            return (
              <div
                key={i}
                onClick={() => {
                  if (isBooked) return;

                  setSelectedTime(slot);

                  // ✅ AUTO COLLAPSE AFTER SELECTION
                  setShowSlots(false);
                }}
                className={`flex justify-between items-center px-4 py-3 rounded-2xl border transition
                  ${
                    isBooked
                      ? "bg-red-50 text-red-500 cursor-not-allowed"
                      : "cursor-pointer hover:border-[#4ebd45]"
                  }
                `}
              >
                <span>{slot}</span>

                <span className={isBooked ? "" : "text-green-600"}>
                  {isBooked ? "Booked" : "Available"}
                </span>
              </div>
            );
          })}

        </div>
      )}

    </div>
  );
}