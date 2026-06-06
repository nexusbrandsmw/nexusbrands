import Link from "next/link";
import {
  ShieldCheck,
  Trophy,
  Clock3,
  Goal,
  Lightbulb,
  Car,
  CalendarDays,
  Phone,
  Mail,
  MapPin,
} from "lucide-react";

export default function HomePage() {
  return (
    <main className="min-h-screen">

      {/* HERO SECTION */}
      <section
        className="relative min-h-[90vh] flex items-center"
        style={{
          backgroundImage: "url('/hero.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >

        {/* LEFT → RIGHT GRADIENT */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-transparent"></div>

        {/* CONTENT GRID */}
        <div className="relative z-10 w-full max-w-6xl mx-auto px-6 py-16 grid md:grid-cols-2 gap-10">

          {/* LEFT SIDE */}
          <div className="flex flex-col justify-end text-white">

            <h1 className="text-4xl md:text-6xl font-extrabold leading-tight">
              Welcome to The Dstrict Sports Arena
            </h1>

            <p className="mt-4 text-gray-200 text-lg">
              A modern football facility in Malawi offering pitch bookings,
              tournaments, events, and community sports experiences.
            </p>

            {/* VIEW SLOTS BUTTON (PRIMARY COLOR) */}
            <div className="mt-8">
              <Link
                href="/booking"
                className="bg-[#4ebd45] text-white px-6 py-3 rounded-md font-bold hover:bg-[#3ea83a] transition shadow-md inline-block"
              >
                View Available Slots
              </Link>
            </div>

          </div>

          {/* RIGHT SIDE - BOOKING FORM */}
          <div className="w-full max-w-sm ml-auto">

            <div className="bg-white p-6 rounded-lg shadow-lg text-[#020f22]">

              <h2 className="text-xl font-bold mb-4">
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
                  type="text"
                  placeholder="Phone Number"
                  className="w-full p-3 border border-black/50 rounded-md outline-none focus:border-[#4ebd45] transition"
                />

                {/* DATE */}
                <input
                  type="date"
                  className="w-full p-3 border border-black/50 rounded-md outline-none focus:border-[#4ebd45] transition appearance-none"
                />

                {/* TIME */}
                <select className="w-full p-3 border border-black/50 rounded-md outline-none focus:border-[#4ebd45] transition">
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

                {/* SUBMIT BUTTON (SECONDARY COLOR) */}
                <button
                  type="button"
                  className="w-full bg-[#b12526] text-white p-3 rounded-md font-bold hover:opacity-90 transition"
                >
                  Request Booking
                </button>

              </form>

            </div>

          </div>

        </div>

      </section>

      {/* IMAGE SLIDER STRIP */}
      <section className="w-full overflow-hidden bg-white pt-6 pb-6">

        <div className="flex w-max animate-scroll gap-3">

          <img src="/gallery/1.jpg" className="h-64 w-80 object-cover rounded-lg" />
          <img src="/gallery/2.jpg" className="h-64 w-80 object-cover rounded-lg" />
          <img src="/gallery/3.jpg" className="h-64 w-80 object-cover rounded-lg" />
          <img src="/gallery/4.jpg" className="h-64 w-80 object-cover rounded-lg" />
          <img src="/gallery/5.jpg" className="h-64 w-80 object-cover rounded-lg" />
          <img src="/gallery/6.jpg" className="h-64 w-80 object-cover rounded-lg" />
          

          <img src="/gallery/1.jpg" className="h-64 w-80 object-cover rounded-lg" />
          <img src="/gallery/2.jpg" className="h-64 w-80 object-cover rounded-lg" />
          <img src="/gallery/3.jpg" className="h-64 w-80 object-cover rounded-lg" />
          <img src="/gallery/4.jpg" className="h-64 w-80 object-cover rounded-lg" />
          <img src="/gallery/5.jpg" className="h-64 w-80 object-cover rounded-lg" />
          <img src="/gallery/6.jpg" className="h-64 w-80 object-cover rounded-lg" />

        </div>

      </section>


      {/* WHY CHOOSE US */}
      <section className="bg-[#4ebd45] py-16">

        <div className="max-w-6xl mx-auto px-6">

          {/* TITLE */}
          <h2 className="text-3xl md:text-4xl font-extrabold text-white text-center">
            Why Choose The Dstrict Sports Arena
          </h2>

          <p className="text-center text-white/90 mt-3">
            Built for players, teams, and communities who want the best football experience
          </p>

          {/* CARDS */}
          <div className="mt-10 grid md:grid-cols-3 gap-6">

            {/* CARD 1 */}
            <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition">
              <ShieldCheck
                size={30}
                className="text-[#b12526] mb-4"
              />

              <h3 className="text-xl font-bold text-[#020f22]">
                Great Service & No Blackouts
              </h3>

              <p className="text-gray-600 mt-2">
                Reliable pitch availability, smooth booking system, and uninterrupted football experience.
              </p>
            </div>

            {/* CARD 2 */}
            <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition">
              <Trophy
                size={30}
                className="text-[#b12526] mb-4"
              />

              <h3 className="text-xl font-bold text-[#020f22]">
                Premium Pitch Quality
              </h3>

              <p className="text-gray-600 mt-2">
                Well-maintained playing surface designed for competitive and recreational football.
              </p>
            </div>

            {/* CARD 3 */}
            <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition">
              <Clock3
                size={30}
                className="text-[#b12526] mb-4"
              />

              <h3 className="text-xl font-bold text-[#020f22]">
                Flexible Time Slots
              </h3>

              <p className="text-gray-600 mt-2">
                Hourly booking slots available throughout the day for teams and groups.
              </p>
            </div>

          </div>

        </div>

      </section>


      {/* OUR FACILITIES */}
      <section className="py-20 bg-gray-100">

        <div className="max-w-6xl mx-auto px-6">

          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-extrabold text-[#020f22]">
              Our Facilities
            </h2>

            <p className="text-gray-600 mt-3">
              Everything you need for a great football experience.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">

            <div className="bg-white rounded-xl p-6 text-center shadow-md">
              <Goal
                size={30}
                className="text-[#b12526] mx-auto mb-4"
              />
              <h3 className="font-bold text-[#020f22] text-xl">
                Football Pitch
              </h3>
              <p className="text-gray-600 mt-2">
                Quality playing surface for competitive and recreational matches.
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 text-center shadow-md">
              <Lightbulb
                size={30}
                className="text-[#b12526] mx-auto mb-4"
              />
              <h3 className="font-bold text-[#020f22] text-xl">
                Floodlights
              </h3>
              <p className="text-gray-600 mt-2">
                Evening games supported by reliable lighting.
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 text-center shadow-md">
              <Car
                size={30}
                className="text-[#b12526] mx-auto mb-4"
              />
              <h3 className="font-bold text-[#020f22] text-xl">
                Parking Space
              </h3>
              <p className="text-gray-600 mt-2">
                Convenient parking for players and visitors.
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 text-center shadow-md">
              <CalendarDays
                size={30}
                className="text-[#b12526] mx-auto mb-4"
              />
              <h3 className="font-bold text-[#020f22] text-xl">
                Events & Tournaments
              </h3>
              <p className="text-gray-600 mt-2">
                Ideal venue for tournaments, leagues, and football events.
              </p>
            </div>

          </div>

        </div>

      </section>


      {/* CTA SECTION */}
      <section className="bg-[#b12526] py-20">

        <div className="max-w-4xl mx-auto px-6 text-center">

          <h2 className="text-4xl md:text-5xl font-extrabold text-white">
            Ready to Book Your Next Match?
          </h2>

          <p className="text-white/80 mt-4 text-lg">
            Secure your preferred time slot today and enjoy a premium football experience at The Dstrict Sports Arena.
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-4 mt-8">

            <a
              href="/booking"
              className="bg-[#4ebd45] hover:opacity-90 transition text-white font-bold px-8 py-4 rounded-lg"
            >
              Book a Session
            </a>

            <a
              href="/booking"
              className="border-2 border-white text-white hover:bg-white hover:text-[#020f22] transition font-bold px-8 py-4 rounded-lg"
            >
              View Available Slots
            </a>

          </div>

        </div>

      </section>

    </main>
  );
}