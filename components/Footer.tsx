import Link from "next/link";
import { Phone, Mail, MapPin } from "lucide-react";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaTiktok,
} from "react-icons/fa6";

export default function Footer() {
  return (
    <footer className="bg-[#020f22] text-white">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid md:grid-cols-3 gap-10">

          {/* ABOUT */}
          <div>
            <h3 className="text-[#4ebd45] text-xl font-bold mb-4">
              The Dstrict Sports Arena
            </h3>

            <p className="text-white/80 leading-relaxed">
              A premium football facility providing quality sporting experiences
              for individuals, teams, schools, organizations, and the wider
              community.
            </p>
          </div>

          {/* QUICK LINKS */}
          <div>
            <h3 className="text-[#4ebd45] text-xl font-bold mb-4">
              Quick Links
            </h3>

            <ul className="space-y-3">
              <li>
                <Link
                  href="/"
                  className="text-white/80 hover:text-[#4ebd45] transition"
                >
                  Home
                </Link>
              </li>

              <li>
                <Link
                  href="/about"
                  className="text-white/80 hover:text-[#4ebd45] transition"
                >
                  About
                </Link>
              </li>

              <li>
                <Link
                  href="/booking"
                  className="text-white/80 hover:text-[#4ebd45] transition"
                >
                  Booking
                </Link>
              </li>

              <li>
                <Link
                  href="/contact"
                  className="text-white/80 hover:text-[#4ebd45] transition"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* CONTACT */}
          <div>
            <h3 className="text-[#4ebd45] text-xl font-bold mb-4">
              Contact Us
            </h3>

            <div className="space-y-4">

              {/* PHONE */}
              <div className="flex items-start gap-3">
                <Phone
                  size={20}
                  className="text-[#4ebd45] mt-1 flex-shrink-0"
                />

                <a
                  href="tel:+265994150446"
                  className="text-white/80 hover:text-[#4ebd45] transition"
                >
                  +265 994 150 446
                </a>
              </div>

              {/* EMAIL */}
              <div className="flex items-start gap-3">
                <Mail
                  size={20}
                  className="text-[#4ebd45] mt-1 flex-shrink-0"
                />

                <a
                  href="mailto:info@thedstrict.com"
                  className="text-white/80 hover:text-[#4ebd45] transition"
                >
                  info@thedstrict.com
                </a>
              </div>

              {/* LOCATION */}
              <div className="flex items-start gap-3">
                <MapPin
                  size={20}
                  className="text-[#4ebd45] mt-1 flex-shrink-0"
                />

                <span className="text-white/80">
                  Area 46, Grand Business Park, Lilongwe
                </span>
              </div>

            </div>

            {/* SOCIAL MEDIA */}
            <div className="pt-4">
              <br></br>
              <div className="flex gap-4">

                <a
                  href="#"
                  className="text-white hover:text-[#4ebd45] transition"
                >
                  <FaFacebookF size={20} />
                </a>

                <a
                  href="#"
                  className="text-white hover:text-[#4ebd45] transition"
                >
                  <FaInstagram size={20} />
                </a>

                <a
                  href="#"
                  className="text-white hover:text-[#4ebd45] transition"
                >
                  <FaLinkedinIn size={20} />
                </a>

                <a
                  href="#"
                  className="text-white hover:text-[#4ebd45] transition"
                >
                  <FaTiktok size={20} />
                </a>

              </div>
            </div>
          </div>

        </div>

        {/* BOTTOM BAR */}
        <div className="border-t border-white/10 mt-10 pt-6">
          <div className="flex flex-col md:flex-row justify-center items-center gap-8 md:gap-16">

            <p className="text-white/60 text-sm">
              © {new Date().getFullYear()} The Dstrict Sports Arena
            </p>

            <p className="text-white/60 text-sm">
              Developed by{" "}
              <a
                href="https://nexusbrandsmw.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#4ebd45] hover:text-white transition font-medium"
              >
                Nexus Brands Mw
              </a>
            </p>

          </div>

        </div>
      </div>
    </footer>
  );
}