import { FaPhone, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

export default function Navbar() {
  return (
    <header className="w-full">
      {/* Top Bar */}
      <div className="bg-[#b12526] text-white text-sm">
        <div className="max-w-6xl mx-auto px-4 py-2 flex justify-between items-center">
          
          {/* Left Side */}
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-2">
              <FaPhone />
              <span>+265 994 150 446</span>
            </div>

            <div className="flex items-center gap-2">
              <FaEnvelope />
              <span>info@thedstrictmw.com</span>
            </div>
          </div>

          {/* Right Side */}
          <div className="flex items-center gap-2">
            <FaMapMarkerAlt />
            <span>Area 46, Grand Business Park, Lilongwe, Malawi</span>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <nav className="bg-white shadow-md">
        <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
          
          {/* Logo */}
          <div>
            <h1 className="text-2xl font-bold text-green-700">
              THE DSTRICT
            </h1>
          </div>

          {/* Navigation Links */}
          <ul className="hidden md:flex items-center gap-8 font-medium text-[#020f22]">
            <li>
              <a href="/" className="hover:text-green-700">
                Home
              </a>
            </li>

            <li>
              <a href="/about" className="hover:text-green-700">
                About
              </a>
            </li>

            <li>
              <a href="/blog" className="hover:text-green-700">
                Blog
              </a>
            </li>

            <li>
              <a href="/contact" className="hover:text-green-700">
                Contact
              </a>
            </li>
          </ul>

          {/* CTA Button */}
          <a
            href="/booking"
            className="bg-green-700 text-white px-5 py-2 rounded-lg hover:bg-green-800 transition"
          >
            Book Now
          </a>
        </div>
      </nav>
    </header>
  );
}
