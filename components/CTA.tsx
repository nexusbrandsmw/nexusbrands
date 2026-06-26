import Link from "next/link";
import { FaArrowRight, FaWhatsapp } from "react-icons/fa";

export default function CTASection() {
  return (
    <section className="pt-24 pb-4 bg-[#000f22] text-white">
      <div className="max-w-4xl mx-auto px-6 text-center">

        {/* SMALL LABEL */}
        <span className="uppercase tracking-[0.2em] text-sm text-white/60">
          Let’s Work Together
        </span>

        {/* HEADING */}
        <h2 className="mt-6 text-3xl md:text-5xl font-bold leading-tight">
          Ready to build a strong brand for your business?
        </h2>

        {/* DESCRIPTION */}
        <p className="mt-6 text-white/70 leading-relaxed">
          Whether you are a startup or an established company, we help you
          create a strong digital presence that attracts and converts customers.
        </p>

        {/* BUTTONS */}
        <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">

          {/* PRIMARY CTA */}
          <Link
            href="/contact"
            className="group bg-[#e01e41] text-white px-7 py-3 rounded-full font-medium hover:opacity-90 transition inline-flex items-center justify-center gap-2"
          >
            Start a Project
            <FaArrowRight className="transition-transform group-hover:translate-x-1" />
          </Link>

          {/* SECONDARY CTA */}
          <a
            href="https://wa.me/265884831850"
            target="_blank"
            className="group border border-white/20 px-7 py-3 rounded-full font-medium hover:border-[#e01e41] transition inline-flex items-center justify-center gap-2"
          >
            WhatsApp Us
            <FaWhatsapp className="text-green-400" />
          </a>

        </div>

      </div>

      
    </section>

    
    
  );
}