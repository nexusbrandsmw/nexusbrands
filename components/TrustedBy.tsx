"use client";

import { trustedLogos } from "@/data/trustedLogos";

export default function TrustedBy() {
  return (
    <section className="py-14 bg-white overflow-hidden">
      
      {/* TITLE */}
      <div className="max-w-6xl mx-auto px-6 mb-10">
        <div className="flex items-center justify-center gap-6">
          
          <div className="w-20 h-px bg-[#000f22]/10 shrink-0" />

          <p className="text-sm text-[#000f22]/60 text-center whitespace-nowrap">
            Brands that trusted us.
          </p>

          <div className="w-20 h-px bg-[#000f22]/10 shrink-0" />

        </div>
      </div>

      {/* LOGO SCROLLER */}
      <div className="relative w-full overflow-hidden">

        {/* LEFT FADE */}
        <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-24 md:w-40 bg-gradient-to-r from-white to-transparent z-10" />

        {/* RIGHT FADE */}
        <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-24 md:w-40 bg-gradient-to-l from-white to-transparent z-10" />

        {/* TRACK */}
        <div className="flex w-max animate-marquee hover:[animation-play-state:paused]">

          {/* FIRST SET */}
          <div className="flex items-center gap-24 md:gap-32 shrink-0 px-12 md:px-16">

            {trustedLogos.map((logo, index) => (
              <img
                key={`logo-${index}`}
                src={logo.src}
                alt={logo.alt}
                className="h-8 w-auto grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition"
              />
            ))}

          </div>

          {/* DUPLICATE SET */}
          <div
            className="flex items-center gap-24 md:gap-32 shrink-0 px-12 md:px-16"
            aria-hidden="true"
          >

            {trustedLogos.map((logo, index) => (
              <img
                key={`duplicate-logo-${index}`}
                src={logo.src}
                alt=""
                className="h-8 w-auto grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition"
              />
            ))}

          </div>

        </div>
      </div>
    </section>
  );
}