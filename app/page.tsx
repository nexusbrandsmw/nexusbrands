"use client";

import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";
import {Palette, PenTool, Megaphone, Globe, BadgeCheck, ShieldCheck, Medal, Users, Clock, Printer, Package } from "lucide-react";
import OurWork from "@/components/OurWork";
import Testimonials from "@/components/Testimonials";
import CTASection from "@/components/CTA";
import TrustedBy from "@/components/TrustedBy";

export default function Hero() {
  return (
    <>
      {/* HERO SECTION */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-accent text-center">

        {/* BACKGROUND GLOW */}
        <div className="absolute inset-0">
          <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-[#e01e41]/10 blur-[140px] rounded-full" />
          <div className="absolute bottom-[-200px] left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-[#000f22]/10 blur-[140px] rounded-full" />
        </div>

        {/* CONTENT */}
        <div className="relative z-10 max-w-3xl mx-auto px-6">

          <p className="text-sm tracking-[0.1em] uppercase text-[#000f22]/60">
            Nexus Brands Mw
          </p>

          <h1 className="mt-6 text-4xl md:text-6xl font-extrabold leading-tight text-[#000f22]">
            We build brands that {" "}
            <span className="text-[#e01e41]">
              connect, compete & grow
            </span>
          </h1>

          <p className="mt-6 text-lg text-[#000f22]/70 leading-relaxed">
            From brand strategy and creative campaigns to
            branded materials and digital execution, we help businesses
            build a presence that customers notice and competitors respect.
          </p>

          {/* CTA */}
          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">

            <Link
              href="/contact"
              className="bg-[#e01e41] text-white px-7 py-3 rounded-full font-medium hover:opacity-90 transition"
            >
              Start a Project
            </Link>

            <Link
              href="/our-work"
              className="group border border-[#000f22]/20 text-[#000f22] px-7 py-3 rounded-full hover:border-[#e01e41] hover:text-[#e01e41] transition flex items-center gap-2 justify-center"
            >
              View Our Work
              <FaArrowRight className="transition-transform group-hover:translate-x-1" />
            </Link>

          </div>

        </div>

      </section>

      <TrustedBy />

      {/* TOP BLACK LINE */}
      <div className="border-t border-accent/10 overflow-hidden" />

      {/* ABOUT INTRO */}
      <section className="bg-white py-14">

        <div className="max-w-6xl mx-auto px-6">

          <div className="grid lg:grid-cols-2 gap-20 items-center">

            {/* LEFT */}
            <div>

              {/* WHO WE ARE */}
              <div className="flex items-center justify-center md:justify-start gap-4 mb-6">
                <span className="uppercase tracking-[0.2em] text-sm text-[#e01e41] font-medium">
                  Who We Are
                </span>

                <div className="w-40 h-px bg-[#e01e41]/35"></div>
              </div>

              <h2 className="mt-6 text-4xl md:text-5xl font-bold leading-tight text-[#000f22]">
                We are a Malawian marketing and brand agency built for ambitious businesses<span className="text-primary">.</span>
              </h2>

            </div>

            {/* RIGHT */}
            <div>

              <p className="text-lg leading-relaxed text-[#000f22]/70">
                Nexus Brands is a full-service marketing and brand
                agency helping businesses build credibility, communicate with
                purpose, and grow through strategy, creative, branded
                materials, and digital execution.
              </p>

              <p className="mt-8 text-lg leading-relaxed text-[#000f22]/70">
                From individuals, startups and growing SMEs to established companies and organizations, 
                we believe every business deserves a creates meaningful connections with customers.
              </p>

            </div>

          </div>
        </div>

          {/* MOVING VALUES */}
          <div className="mt-16 border-t border-[#000f22]/10 pt-8 overflow-hidden">

            <div className="relative">

              {/* Left fade */}
              <div className="absolute left-0 top-0 h-full w-20 bg-gradient-to-r from-white to-transparent z-10" />

              {/* Right fade */}
              <div className="absolute right-0 top-0 h-full w-20 bg-gradient-to-l from-white to-transparent z-10" />

              <div className="flex w-max animate-values gap-10 text-sm uppercase tracking-[0.15em] text-[#000f22]/50">

                <span>Creative Thinking</span>
                <span>•</span>

                <span>Strategic Approach</span>
                <span>•</span>

                <span>Long-Term Partnerships</span>
                <span>•</span>

                <span>Growth Focused</span>
                <span>•</span>

                <span>Creative Thinking</span>
                <span>•</span>

                <span>Strategic Approach</span>
                <span>•</span>

                <span>Long-Term Partnerships</span>
                <span>•</span>

                <span>Growth Focused</span>

              </div>

            </div>

          </div>

      </section>

      {/* SERVICES */}
      <section className="py-20 bg-secondary">
        <div className="max-w-6xl mx-auto px-6">

          {/* SECTION HEADER */}
          <div className="text-center mb-12">
            <span className="uppercase tracking-[0.2em] text-sm text-[#e01e41] font-medium">
              Our Services
            </span>

            <h2 className="mt-4 text-3xl md:text-5xl font-bold text-white">
              Where Strategy Meets Execution<span className="text-primary">.</span>
            </h2>

            <p className="mt-4 text-white/70 max-w-2xl mx-auto">
              We work across four connected disciplines
              so every brand touchpoint tells the same story.
            </p>
          </div>

          {/* SERVICES GRID */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">

            {/* BRAND STRATEGY */}
          <div className="p-6 rounded-xl border border-white/10 bg-white/5 hover:bg-white/10 transition group">
            <Palette className="text-[#e01e41] mb-4" size={28} />

            <h3 className="text-xl font-bold text-white group-hover:text-[#e01e41] transition">
              Brand Strategy & Identity
            </h3>

            <p className="mt-3 text-sm text-white/70 leading-relaxed">
              We build strong brand identities, positioning, visual identity,
              and brand systems that define how your business looks, feels,
              and is remembered across every platform.
            </p>
          </div>

            {/* DESIGN */}
          <div className="p-6 rounded-xl border border-white/10 bg-white/5 hover:bg-white/10 transition group">
            <PenTool className="text-[#e01e41] mb-4" size={28} />

            <h3 className="text-xl font-bold text-white group-hover:text-[#e01e41] transition">
              Creative & Campaign Design
            </h3>

            <p className="mt-3 text-sm text-white/70 leading-relaxed">
              From visual design to social content and campaign management,
              we create work that communicates clearly, builds engagement,
              and grows your reach.
            </p>
          </div>

            {/* SUPPLY */}
          <div className="p-6 rounded-xl border border-white/10 bg-white/5 hover:bg-white/10 transition group">
            <Printer className="text-[#e01e41] mb-4" size={28} />

            <h3 className="text-xl font-bold text-white group-hover:text-[#e01e41] transition">
              Branded Materials & Supply
            </h3>

            <p className="mt-3 text-sm text-white/70 leading-relaxed">
              Modern, responsive websites designed to represent your brand professionally and
              convert visitors into customers.
            </p>
          </div>

            {/* DIGITAL PRESENCE */}
          <div className="p-6 rounded-xl border border-white/10 bg-white/5 hover:bg-white/10 transition group">
            <Globe className="text-[#e01e41] mb-4" size={28} />

            <h3 className="text-xl font-bold text-white group-hover:text-[#e01e41] transition">
              Digital Presence
            </h3>

            <p className="mt-3 text-sm text-white/70 leading-relaxed">
              Modern, responsive websites and digital platforms that represent
              your brand professionally and convert visitors into customers.
            </p>
          </div>

          </div>

        </div>
      </section>

      
      <section className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-6">

          <div className="grid md:grid-cols-2 gap-16 items-center">

            {/* LEFT SIDE */}
            <div>
              <span className="uppercase tracking-[0.2em] text-sm text-[#e01e41] font-medium">
                  Why Choose Us
                </span>

              <h2 className="mt-4 text-3xl md:text-5xl font-bold text-[#000f22] leading-tight">
                Built for businesses that want real growth<span className="text-primary">.</span>
              </h2>

              <p className="mt-4 text-[#000f22]/70 leading-relaxed">
                Whether you are an individual, a business starting out or scaling up, we position your business
                to communicate better, look professional, and compete confidently.
              </p>
            </div>

            {/* RIGHT SIDE */}
            <div className="space-y-6">

              <div className="flex gap-4 items-start">
                <BadgeCheck className="text-[#e01e41] mt-1" size={24} />
                <div>
                  <h3 className="font-bold text-[#000f22]">Registered Business</h3>
                  <p className="text-sm text-[#000f22]/60">
                    We are a legally registered by the Government of Malawi.
                  </p>
                </div>
              </div>

              <div className="flex gap-4 items-start">
                <Medal className="text-[#e01e41] mt-1" size={24} />
                <div>
                  <h3 className="font-bold text-[#000f22]">Experienced</h3>
                  <p className="text-sm text-[#000f22]/60">
                    A skilled team combining creativity, strategy, and technical expertise.
                  </p>
                </div>
              </div>

              <div className="flex gap-4 items-start">
                <Clock className="text-[#e01e41] mt-1" size={24} />
                <div>
                  <h3 className="font-bold text-[#000f22]">Reliable Delivery</h3>
                  <p className="text-sm text-[#000f22]/60">
                    We value deadlines and consistency, ensuring every project is delivered on time and with quality.
                  </p>
                </div>
              </div>

              <div className="flex gap-4 items-start">
                <Users className="text-[#e01e41] mt-1" size={24} />
                <div>
                  <h3 className="font-bold text-[#000f22]">Client-Centered</h3>
                  <p className="text-sm text-[#000f22]/60">
                    We work closely with you to understand your goals.
                  </p>
                </div>
              </div>

            </div>

          </div>

        </div>
      </section>

      {/* PROJECTS */}
      <OurWork />

      {/* TESTIMONIALS */}
      <Testimonials />

      {/* CTA */}
      <CTASection />

      {/* BOTTOM WHITE LINE */}
      <div className="mt-16 h-px w-full bg-accent/20" />
      
    </>
    
  );
}