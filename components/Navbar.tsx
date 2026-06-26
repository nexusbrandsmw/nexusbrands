"use client";

import { useState } from "react";
import { usePathname } from "next/navigation";
import {
  FaPhone,
  FaEnvelope,
  FaBars,
  FaTimes,
  FaChevronDown,
} from "react-icons/fa";
import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  const isActive = (path: string) => pathname === path;

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
      <nav className="backdrop-blur-md bg-accent border-b border-black/5">
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

            {/* HOME */}
            <li>
              <Link
                href="/"
                className={`relative pb-1 transition ${
                  isActive("/")
                    ? "text-[#e01e41]"
                    : "hover:text-[#e01e41]"
                }`}
              >
                Home
                {isActive("/") && (
                  <span className="absolute left-0 -bottom-1 w-full h-[2px] bg-[#e01e41] rounded-full" />
                )}
              </Link>
            </li>

            {/* ABOUT DROPDOWN (FIXED) */}
            <li className="relative group">

              {/* TRIGGER */}
              <div className="flex items-center gap-1 cursor-pointer pb-1 hover:text-[#e01e41] transition">
                About
                <FaChevronDown className="text-xs group-hover:rotate-180 transition" />
              </div>

              {/* IMPORTANT: hover buffer FIX */}
              <div className="absolute left-0 top-full pt-2 hidden group-hover:block z-50">

                <div className="bg-white shadow-lg border border-black/5 rounded-xl min-w-[200px] overflow-hidden">

                  <Link
                    href="/about"
                    className="block px-4 py-2 hover:bg-gray-50"
                  >
                    Company
                  </Link>

                  <Link
                    href="/services"
                    className="block px-4 py-2 hover:bg-gray-50"
                  >
                    Services
                  </Link>

                  <Link
                    href="/blog"
                    className="block px-4 py-2 hover:bg-gray-50"
                  >
                    Blog
                  </Link>

                </div>

              </div>
            </li>

            {/* OUR WORK */}
            <li>
              <Link
                href="/our-work"
                className={`relative pb-1 transition ${
                  isActive("/our-work")
                    ? "text-[#e01e41]"
                    : "hover:text-[#e01e41]"
                }`}
              >
                Our Work
                {isActive("/our-work") && (
                  <span className="absolute left-0 -bottom-1 w-full h-[2px] bg-[#e01e41] rounded-full" />
                )}
              </Link>
            </li>

            {/* CONTACT */}
            <li>
              <Link
                href="/contact"
                className={`relative pb-1 transition ${
                  isActive("/contact")
                    ? "text-[#e01e41]"
                    : "hover:text-[#e01e41]"
                }`}
              >
                Contact
                {isActive("/contact") && (
                  <span className="absolute left-0 -bottom-1 w-full h-[2px] bg-[#e01e41] rounded-full" />
                )}
              </Link>
            </li>

          </ul>

          {/* CTA */}
          <Link
            href="/booking"
            className="hidden md:block bg-[#e01e41] text-white px-5 py-2 rounded-full text-sm hover:opacity-90 transition"
          >
Let&apos;s Collaborate
            <span className="transition-transform group-hover:translate-x-1"> → </span>
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

              <li>
                <Link href="/" onClick={() => setOpen(false)}>
                  Home
                </Link>
              </li>

              <li>
                <Link href="/about" onClick={() => setOpen(false)}>
                  Company
                </Link>
              </li>

              <li>
                <Link href="/services" onClick={() => setOpen(false)}>
                  Services
                </Link>
              </li>

              <li>
                <Link href="/blog" onClick={() => setOpen(false)}>
                  Blog
                </Link>
              </li>

              <li>
                <Link href="/our-work" onClick={() => setOpen(false)}>
                  Our Work
                </Link>
              </li>

              <li>
                <Link href="/contact" onClick={() => setOpen(false)}>
                  Contact
                </Link>
              </li>

              <li>
                <Link
                  href="/booking"
                  onClick={() => setOpen(false)}
                  className="bg-[#e01e41] text-white px-4 py-2 rounded-lg inline-block"
                >
                  Book Now
                </Link>
              </li>

            </ul>

          </div>
        )}

      </nav>
    </header>
  );
}