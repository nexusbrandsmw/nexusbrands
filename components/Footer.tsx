"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { Phone, Mail, MapPin } from "lucide-react";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaTiktok,
} from "react-icons/fa6";

export default function Footer() {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        // Trigger only when footer starts entering viewport
        if (entry.isIntersecting) {
          setVisible(true);
        }
      },
      {
        threshold: 0.15,
      }
    );

    const current = ref.current;
    if (current) observer.observe(current);

    return () => {
      if (current) observer.unobserve(current);
    };
  }, []);

  return (
    <footer className="bg-secondary text-white">
      <div
        ref={ref}
        className={`max-w-6xl mx-auto px-6 py-12 transition-all duration-700 ease-out ${
          visible
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-16"
        }`}
      >
        <div className="grid gap-10 md:grid-cols-3">

          {/* ABOUT */}
          <div>
            <h3 className="mb-4 text-xl font-bold text-primary">
              Nexus Brands
            </h3>
            <p className="leading-relaxed text-white/80">
              Building brands forward through branding, graphic design,
              website development, digital marketing, and business consultancy.
            </p>
          </div>

          {/* QUICK LINKS */}
          <div>
            <h3 className="mb-4 text-xl font-bold text-primary">
              Quick Links
            </h3>

            <ul className="space-y-3">
              <li><Link href="/" className="hover:text-primary text-white/80">Home</Link></li>
              <li><Link href="/about" className="hover:text-primary text-white/80">About</Link></li>
              <li><Link href="/services" className="hover:text-primary text-white/80">Services</Link></li>
              <li><Link href="/contact" className="hover:text-primary text-white/80">Contact</Link></li>
            </ul>
          </div>

          {/* CONTACT */}
          <div>
            <h3 className="mb-4 text-xl font-bold text-primary">
              Contact Us
            </h3>

            <div className="space-y-4">

              <div className="flex gap-3">
                <Phone className="text-primary mt-1" size={20} />
                <a href="tel:+265994150446" className="text-white/80 hover:text-primary">
                  +265 884 831 850
                </a>
              </div>

              <div className="flex gap-3">
                <Mail className="text-primary mt-1" size={20} />
                <a href="mailto:info@nexusbrandsmw.com" className="text-white/80 hover:text-primary">
                  info@nexusbrandsmw.com
                </a>
              </div>

              <div className="flex gap-3">
                <MapPin className="text-primary mt-1" size={20} />
                <span className="text-white/80">
                  Area 47/2 Lilongwe, Malawi
                </span>
              </div>

            </div>

            {/* SOCIAL */}
            <div className="pt-6 flex gap-4">
              <FaFacebookF className="hover:text-primary cursor-pointer" />
              <FaInstagram className="hover:text-primary cursor-pointer" />
              <FaLinkedinIn className="hover:text-primary cursor-pointer" />
              <FaTiktok className="hover:text-primary cursor-pointer" />
            </div>
          </div>

        </div>

        {/* BOTTOM */}
        <div className="mt-10 border-t border-white/10 pt-6 text-center text-sm text-white/60">
          © {new Date().getFullYear()} Nexus Brands. All rights reserved.
        </div>
      </div>
    </footer>
  );
}