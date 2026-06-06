"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();

  const isActive = (path: string) => pathname === path;

  const linkClass = (path: string) =>
    `text-sm font-medium transition ${
      isActive(path)
        ? "text-[#4ebd45] font-semibold"
        : "text-[#020f22] hover:text-[#4ebd45]"
    }`;

  return (
    <nav className="w-full bg-white border-b">
      <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">

        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <Image
            src="/logo.png"
            alt="Logo"
            width={140}
            height={140}
            priority
          />
        </Link>

        {/* Links */}
        <div className="hidden md:flex gap-6">
          <Link href="/" className={linkClass("/")}>
            Home
          </Link>

          <Link href="/about" className={linkClass("/about")}>
            About
          </Link>

          <Link href="/blog" className={linkClass("/blog")}>
            Blog
          </Link>

          <Link href="/events" className={linkClass("/events")}>
            Events
          </Link>

          <Link href="/contact" className={linkClass("/contact")}>
            Contact
          </Link>
        </div>

        {/* CTA */}
        <Link
          href="/booking"
          className="bg-[#4ebd45] text-white px-6 py-3 rounded-md text-sm font-bold hover:bg-[#3ea83a] transition shadow-md"
            >
          Book Now
        </Link>
      </div>
    </nav>
  );
}