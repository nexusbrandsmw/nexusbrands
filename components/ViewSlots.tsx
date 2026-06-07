"use client";

import { useEffect, useState } from "react";

export default function ViewSlots({
  selectedDate,
  setSelectedDate,
  setSelectedTime,
}: any) {
  const [slots, setSlots] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!selectedDate) return;

    fetchSlots();
  }, [selectedDate]);

  const fetchSlots = async () => {
    try {
      setLoading(true);

      const res = await fetch(
        `/api/slots?date=${selectedDate}`
      );

      const data = await res.json();

      setSlots(data);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-white p-6 rounded-3xl shadow-lg">

      <h2 className="text-xl font-bold text-[#b12526] mb-4">
        View Available Slots
      </h2>

      <input
        type="date"
        value={selectedDate}
        onChange={(e) =>
          setSelectedDate(e.target.value)
        }
        className="w-full p-3 border border-black/50 rounded-2xl mb-4"
      />

      {loading && (
        <p>Loading slots...</p>
      )}

      {!loading && slots.length === 0 && (
        <p>No slots available.</p>
      )}

      <div className="space-y-2">
        {slots.map((slot) => (
          <button
            key={slot.id}
            onClick={() =>
              setSelectedTime(slot.slot_time)
            }
            className="w-full p-3 rounded-2xl border border-[#4ebd45] hover:bg-[#4ebd45] hover:text-white transition"
          >
            {slot.slot_time}
          </button>
        ))}
      </div>

    </div>
  );
}