export default function BookingPage() {
  return (
    <main className="min-h-screen bg-gray-50">

      {/* HERO */}
      <section className="bg-[#020f22] py-16 text-center px-6">
        <h1 className="text-4xl md:text-5xl font-extrabold text-white">
          Book a Football Session
        </h1>

        <p className="text-white/80 mt-4 max-w-2xl mx-auto text-lg">
          Choose a date, select a time slot, and confirm your booking instantly.
        </p>
      </section>

      {/* MAIN SECTION */}
      <section className="py-16 px-6">

        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8">

          {/* LEFT SIDE - BOOKING FORM */}
          <div className="bg-white rounded-lg shadow-lg p-6 text-[#020f22]">

            <h2 className="text-xl font-bold mb-6">
              Quick Booking Request
            </h2>

            <form className="space-y-4">

              {/* NAME */}
              <input
                type="text"
                placeholder="Full Name"
                className="w-full p-3 border border-black/50 rounded-md outline-none focus:border-[#4ebd45] transition"
              />

              {/* PHONE */}
              <input
                type="tel"
                placeholder="Phone Number"
                className="w-full p-3 border border-black/50 rounded-md outline-none focus:border-[#4ebd45] transition"
              />

              {/* DATE */}
              <input
                type="date"
                className="w-full p-3 border border-black/50 rounded-md outline-none focus:border-[#4ebd45] transition"
              />

              {/* TIME SLOT */}
              <select className="w-full p-3 border border-black/50 rounded-md outline-none focus:border-[#4ebd45] transition">

                <option value="">Select Time Slot</option>
                <option>06:00 - 07:00</option>
                <option>07:00 - 08:00</option>
                <option>08:00 - 09:00</option>
                <option>09:00 - 10:00</option>
                <option>10:00 - 11:00</option>
                <option>11:00 - 12:00</option>
                <option>12:00 - 13:00</option>
                <option>13:00 - 14:00</option>
                <option>14:00 - 15:00</option>
                <option>15:00 - 16:00</option>
                <option>16:00 - 17:00</option>
                <option>17:00 - 18:00</option>
                <option>18:00 - 19:00</option>
                <option>19:00 - 20:00</option>
                <option>20:00 - 21:00</option>

              </select>

              {/* BUTTON */}
              <button
                type="submit"
                className="w-full bg-[#b12526] text-white p-3 rounded-md font-bold hover:opacity-90 transition"
              >
                Request Booking
              </button>

            </form>

          </div>

          {/* RIGHT SIDE - SLOT VIEW */}
          <div className="bg-white rounded-lg shadow-lg p-6">

            <h2 className="text-xl font-bold text-[#020f22] mb-6">
              View Slot Availability
            </h2>

            {/* DATE SELECT */}
            <input
              type="date"
              className="w-full p-3 border border-black/50 rounded-md outline-none focus:border-[#4ebd45] transition mb-4"
            />

            {/* TIME DROPDOWN */}
            <select className="w-full p-3 border border-black/50 rounded-md outline-none focus:border-[#4ebd45] transition">

              <option value="">Select a Time Slot</option>

              {/* AVAILABLE */}
              <option value="06:00 - 07:00">06:00 - 07:00 — Available</option>

              {/* BOOKED */}
              <option value="07:00 - 08:00" disabled>
                07:00 - 08:00 — Booked
              </option>

              {/* AVAILABLE */}
              <option value="08:00 - 09:00">08:00 - 09:00 — Available</option>

              {/* BOOKED */}
              <option value="09:00 - 10:00" disabled>
                09:00 - 10:00 — Booked
              </option>

              {/* AVAILABLE */}
              <option value="10:00 - 11:00">10:00 - 11:00 — Available</option>

              <option value="11:00 - 12:00">11:00 - 12:00 — Available</option>
              <option value="12:00 - 13:00">12:00 - 13:00 — Available</option>
              <option value="13:00 - 14:00">13:00 - 14:00 — Available</option>
              <option value="14:00 - 15:00">14:00 - 15:00 — Available</option>
              <option value="15:00 - 16:00">15:00 - 16:00 — Available</option>

              <option value="16:00 - 17:00">16:00 - 17:00 — Available</option>

              {/* BOOKED */}
              <option value="17:00 - 18:00" disabled>
                17:00 - 18:00 — Booked
              </option>

              <option value="18:00 - 19:00">18:00 - 19:00 — Available</option>
              <option value="19:00 - 20:00">19:00 - 20:00 — Available</option>
              <option value="20:00 - 21:00">20:00 - 21:00 — Available</option>

            </select>

            {/* LEGEND */}
            <div className="mt-4 flex gap-4 text-sm">

              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                <span>Available</span>
              </div>

              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                <span>Booked</span>
              </div>

            </div>

          </div>

        </div>

      </section>

    </main>
  );
}