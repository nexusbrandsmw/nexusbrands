"use client";

export default function BookingForm({
  selectedDate,
  selectedTime,
  setSelectedDate,
  setSelectedTime,
}: any) {
  return (
    <div className="bg-white p-6 rounded-3xl shadow-lg text-[#020f22]">

      <h2 className="text-xl text-[#b12526] font-bold mb-4">
        Quick Booking Request
      </h2>

      <form className="space-y-4">

        {/* ✅ TOP FIELDS */}
        <input
          type="text"
          placeholder="Team Name"
          className="w-full p-3 border border-black/50 rounded-2xl outline-none focus:border-[#4ebd45]"
        />

        <input
          type="text"
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

        {/* TIME */}
          <select
            value={selectedTime}
            onChange={(e) => setSelectedTime(e.target.value)}
            className="w-full p-3 border border-black/50 rounded-2xl outline-none focus:border-[#4ebd45]"
          >
            <option value="">Select Time Slot</option>

            <option value="06:00 - 07:00">06:00 - 07:00</option>
            <option value="07:00 - 08:00">07:00 - 08:00</option>
            <option value="08:00 - 09:00">08:00 - 09:00</option>
            <option value="09:00 - 10:00">09:00 - 10:00</option>
            <option value="10:00 - 11:00">10:00 - 11:00</option>
            <option value="11:00 - 12:00">11:00 - 12:00</option>
            <option value="12:00 - 13:00">12:00 - 13:00</option>
            <option value="13:00 - 14:00">13:00 - 14:00</option>
            <option value="14:00 - 15:00">14:00 - 15:00</option>
            <option value="15:00 - 16:00">15:00 - 16:00</option>
            <option value="16:00 - 17:00">16:00 - 17:00</option>
            <option value="17:00 - 18:00">17:00 - 18:00</option>
            <option value="18:00 - 19:00">18:00 - 19:00</option>
            <option value="19:00 - 20:00">19:00 - 20:00</option>
            <option value="20:00 - 21:00">20:00 - 21:00</option>
          </select>

        <button
          type="button"
          className={`w-full p-3 rounded-2xl font-bold text-white transition ${
            selectedDate && selectedTime
              ? "bg-[#4ebd45]"
              : "bg-gray-400 cursor-not-allowed"
          }`}
          disabled={!selectedDate || !selectedTime}
        >
          Book Now
        </button>

      </form>

    </div>
  );
}