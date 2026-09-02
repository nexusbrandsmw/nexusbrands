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
      {/* HERO */}
      <section className="pt-28 pb-20 bg-[#000f22] relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-[#e01e41]/20 blur-[140px] rounded-full" />
        </div>

        <div className="relative max-w-4xl mx-auto px-6 text-center">
          <span className="uppercase tracking-[0.2em] text-sm text-primary/90">
            Contact
          </span>

          <h1 className="mt-6 text-4xl md:text-6xl font-extrabold text-accent">
            Let’s build something great together<span className="text-primary">.</span>
          </h1>

          <p className="mt-6 text-lg text-white/70 leading-relaxed">
            Tell us about your project and we’ll respond as soon as possible.
          </p>
        </div>
      </section>

      {/* CONTACT SECTION */}
      <section className="py-24 bg-accent">
        <div className="max-w-6xl mx-auto px-6 grid lg:grid-cols-2 gap-12">

          {/* LEFT INFO */}
          <div>
            <h2 className="text-3xl font-bold text-[#000f22]">
              Get in touch
            </h2>

            <p className="mt-4 text-[#000f22]/70">
              We respond quickly and help you find the right fit for your brand and business goals.
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