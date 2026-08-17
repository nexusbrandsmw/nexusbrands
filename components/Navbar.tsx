"use client";

import { useState } from "react";
import { usePathname } from "next/navigation";
import {
  FaPhone,
  FaEnvelope,
  FaBars,
  FaTimes,
  FaWhatsapp,
} from "react-icons/fa";
import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  const isActive = (path: string) => pathname === path;

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/our-work", label: "Our Work" },
    { href: "/blog", label: "Blog" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <header className="w-full sticky top-0 z-50">

      {/* TOP BAR */}
      <div className="hidden md:block bg-[#000f22] text-white text-xs">
        <div className="max-w-6xl mx-auto px-6 py-2 flex justify-between items-center">

          <div className="flex items-center gap-2 text-white/80">
            <FaEnvelope className="text-[#e01e41]" />
            <span>info@nexusbrandsmw.com</span>
          </div>

          <div className="flex items-center gap-2 text-white/80">
            <FaPhone className="text-[#e01e41]" />
            <span>+265 994 150 446</span>
          </div>

        </div>
      </div>

      {/* MAIN NAV */}
      <nav className="backdrop-blur-md bg-white border-b border-black/5">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">

          {/* LOGO */}
          <Link href="/" className="flex items-center">
            <Image
              src="/logo.png"
              alt="Nexus Brands"
              width={120}
              height={40}
              priority
            />
          </Link>

          {/* DESKTOP NAV */}
          <ul className="hidden md:flex items-center gap-10 text-sm font-medium text-[#000f22]">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={`relative pb-1 transition ${
                    isActive(link.href)
                      ? "text-[#e01e41]"
                      : "hover:text-[#e01e41]"
                  }`}
                >
                  {link.label}
                  {isActive(link.href) && (
                    <span className="absolute left-0 -bottom-1 w-full h-[2px] bg-[#e01e41] rounded-full" />
                  )}
                </Link>
              </li>
            ))}
          </ul>

          {/* CTA */}
          <Link
            href="https://wa.me/265994150446?text=Hi%2C%20I%27m%20reaching%20out%20from%20the%20Nexus%20Brands%20website%20and%20would%20like%20to%20discuss%20a%20project."
            target="_blank"
            className="hidden md:flex items-center gap-2 bg-[#e01e41] text-white px-5 py-2 rounded-full text-sm hover:opacity-90 transition"
          >
            <FaWhatsapp />
            Let&apos;s Collaborate
          </Link>

          {/* MOBILE MENU BUTTON */}
          <button
            className="md:hidden text-2xl text-[#000f22]"
            onClick={() => setOpen(!open)}
          >
            {open ? <FaTimes /> : <FaBars />}
          </button>

        </div>

        {/* MOBILE MENU */}
        {open && (
          <div className="md:hidden bg-white border-t">

            <ul className="flex flex-col p-4 gap-4 text-[#000f22]">

              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} onClick={() => setOpen(false)}>
                    {link.label}
                  </Link>
                </li>
              ))}

              <li>
                <Link
                  href="https://wa.me/265994150446?text=Hi%2C%20I%27m%20reaching%20out%20from%20the%20Nexus%20Brands%20website%20and%20would%20like%20to%20discuss%20a%20project."
                  target="_blank"
                  onClick={() => setOpen(false)}
                  className="flex items-center gap-2 bg-[#e01e41] text-white px-4 py-2 rounded-lg w-fit"
                >
                  <FaWhatsapp />
                  Let&apos;s Collaborate
                </Link>
              </li>

            </ul>

          </div>
        )}

      </nav>
    </header>
  );
}