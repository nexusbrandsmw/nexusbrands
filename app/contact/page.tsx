import PageHeader from "@/components/PageHeader";
import GoogleMap from "@/components/GoogleMap";
import { Phone, Mail, MapPin } from "lucide-react";

export default function ContactPage() {
  return (
    <>
      {/* HEADER */}
      <PageHeader
        title="Contact Us"
        subtitle="Get in touch with The Dstrict Sports Arena for bookings, inquiries, and partnerships."
        backgroundImage="/images/contact-bg.jpg"
      />

      {/* PAGE BACKGROUND WRAPPER */}
      <div className="bg-gray-100">

        {/* CONTACT SECTION */}
        <div className="max-w-6xl mx-auto px-6 py-12 grid md:grid-cols-2 gap-10 text-[#020f22]">

          {/* LEFT SIDE - INFO */}
          <div className="space-y-6">

            {/* CARD CONTAINER */}
            <div className="space-y-6">

              {/* OUTLINE CARD ONLY */}
              <div className="border border-gray-300 rounded-2xl p-6">

                <h2 className="text-2xl font-bold mb-6 text-[#020f22]">
                  Reach Us Directly
                </h2>

                {/* PHONE */}
                <div className="flex items-start gap-3 mb-4">
                  <Phone className="text-[#4ebd45] mt-1" />
                  <p>+265 994 150 446</p>
                </div>

                {/* EMAIL */}
                <div className="flex items-start gap-3 mb-4">
                  <Mail className="text-[#4ebd45] mt-1" />
                  <p>info@thedstrict.com</p>
                </div>

                {/* LOCATION */}
                <div className="flex items-start gap-3 mb-6">
                  <MapPin className="text-[#4ebd45] mt-1" />
                  <p>Area 46, Grand Business Park, Lilongwe</p>
                </div>

                {/* WHATSAPP BUTTON */}
                <a
                  href="https://wa.me/265994150446"
                  target="_blank"
                  className="inline-block bg-[#25D366] text-white px-5 py-2 rounded-xl font-semibold hover:opacity-90 transition"
                >
                  Chat on WhatsApp
                </a>

              </div>

            </div>
          </div>

          {/* RIGHT SIDE - FORM */}
          <div className="bg-white p-6 rounded-2xl shadow-lg">

            <h2 className="text-xl font-bold mb-4">
              Send a Message
            </h2>

            <form className="space-y-4">

              <input
                type="text"
                placeholder="Your Name"
                className="w-full p-3 border rounded-xl outline-none focus:border-[#4ebd45]"
              />

              <input
                type="email"
                placeholder="Your Email"
                className="w-full p-3 border rounded-xl outline-none focus:border-[#4ebd45]"
              />

              <textarea
                placeholder="Your Message"
                rows={2}
                className="w-full p-3 border rounded-xl outline-none focus:border-[#4ebd45]"
              />

              <button
                type="button"
                className="w-full bg-[#b12526] text-white p-3 rounded-xl font-bold hover:opacity-90 transition"
              >
                Send Message
              </button>

            </form>

          </div>

        </div>

        {/* MAP SECTION */}
        <div className="max-w-6xl mx-auto px-6 pb-12">
  
          <GoogleMap />
        </div>

      </div>
    </>
  );
}