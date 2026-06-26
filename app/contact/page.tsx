"use client";

import { useState } from "react";
import PageHeader from "@/components/PageHeader";
import { FaWhatsapp } from "react-icons/fa";
import { Phone, Mail, MapPin } from "lucide-react";

export default function ContactPage() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(form);
  };

  return (
    <>
      {/* HEADER */}
      <PageHeader
        label="Contact"
        title="Let’s build something great together"
        subtitle="Tell us about your project and we’ll respond as soon as possible."
      />

      {/* CONTACT SECTION */}
      <section className="py-24 bg-accent">
        <div className="max-w-6xl mx-auto px-6 grid lg:grid-cols-2 gap-12">

          {/* LEFT INFO */}
          <div>
            <h2 className="text-3xl font-bold text-[#000f22]">
              Get in touch
            </h2>

            <p className="mt-4 text-[#000f22]/70">
              We respond quickly and help you choose the right solution for your business.
            </p>

            <div className="mt-10 space-y-6">

              <div className="flex items-center gap-4">
                <Phone className="text-[#e01e41]" />
                <span className="text-[#000f22]/70">+265 884 831 850</span>
              </div>

              <div className="flex items-center gap-4">
                <Mail className="text-[#e01e41]" />
                <span className="text-[#000f22]/70">info@nexusbrandsmw.com</span>
              </div>

              <div className="flex items-center gap-4">
                <MapPin className="text-[#e01e41]" />
                <span className="text-[#000f22]/70">Area 47/2 Lilongwe, Malawi</span>
              </div>

              {/* WHATSAPP CTA */}
              <a
                href="https://wa.me/265994150446"
                target="_blank"
                className="inline-flex items-center gap-2 mt-6 bg-green-500 text-white px-5 py-3 rounded-full hover:opacity-90 transition"
              >
                <FaWhatsapp />
                Chat on WhatsApp
              </a>

            </div>
          </div>

          {/* RIGHT FORM */}
          <form
            onSubmit={handleSubmit}
            className="bg-secondary p-8 rounded-2xl border border-[#000f22]/10"
          >
            <div className="space-y-5">

              <h2 className="text-3xl py-5 font-bold text-accent">
                Send a Message
              </h2>

              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={form.name}
                onChange={handleChange}
                className="w-full p-3 rounded-xl border border-accent/50 focus:outline-none focus:border-[#e01e41]"
              />

              <input
                type="email"
                name="email"
                placeholder="Your Email"
                value={form.email}
                onChange={handleChange}
                className="w-full p-3 rounded-xl border border-accent/50 focus:outline-none focus:border-[#e01e41]"
              />

              <textarea
                name="message"
                placeholder="Your Message"
                value={form.message}
                onChange={handleChange}
                rows={6}
                className="w-full p-3 rounded-xl border border-accent/50 focus:outline-none focus:border-[#e01e41]"
              />

              <button
                type="submit"
                className="w-full bg-[#e01e41] text-white py-3 rounded-xl font-medium hover:opacity-90 transition"
              >
                Send Message
              </button>

            </div>
          </form>

        </div>
      </section>
    </>
  );
}