// src/components/Navbar.jsx

import { useState, useEffect } from "react";

const navLinks = [
  { name: "Features", href: "#features" },
  { name: "Pricing", href: "#pricing" },
  { name: "Testimonials", href: "#testimonials" },
  { name: "FAQ", href: "#faq" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#F1F6F4]/90 backdrop-blur-xl shadow-md"
          : "bg-transparent"
      }`}
    >
      <nav className="max-w-7xl mx-auto flex items-center justify-between px-6 lg:px-10 py-5">

        {/* Logo */}

        <a
          href="/"
          className="flex items-center gap-3"
        >
          <div className="w-11 h-11 rounded-xl bg-[#114C5A] flex items-center justify-center shadow-md">

            {/* Replace with provided SVG */}

            <span className="text-[#FFC801] font-bold font-mono text-lg">
              AI
            </span>

          </div>

          <div>

            <h2 className="font-mono font-bold text-xl text-[#172B36]">

              DataFlow AI

            </h2>

            <p className="text-xs text-gray-500">

              Intelligent Automation

            </p>

          </div>

        </a>

        {/* Desktop */}

        <ul className="hidden lg:flex items-center gap-10">

          {navLinks.map((item) => (

            <li key={item.name}>

              <a
                href={item.href}
                className="font-medium text-[#172B36] hover:text-[#114C5A] transition"
              >
                {item.name}
              </a>

            </li>

          ))}

        </ul>

        {/* CTA */}

        <div className="hidden lg:flex items-center gap-4">

          <button
            className="border border-[#114C5A]
            text-[#114C5A]
            px-5 py-2.5
            rounded-xl
            hover:bg-[#114C5A]
            hover:text-white
            transition"
          >
            Login
          </button>

          <button
            className="bg-[#FFC801]
            hover:bg-[#FF9932]
            transition
            px-6
            py-2.5
            rounded-xl
            font-semibold
            shadow-lg"
          >
            Get Started
          </button>

        </div>

        {/* Mobile Toggle */}

        <button
          className="lg:hidden flex flex-col gap-1"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle Navigation"
        >

          <span
            className={`h-0.5 w-6 bg-[#172B36] transition ${
              menuOpen ? "rotate-45 translate-y-2" : ""
            }`}
          />

          <span
            className={`h-0.5 w-6 bg-[#172B36] transition ${
              menuOpen ? "opacity-0" : ""
            }`}
          />

          <span
            className={`h-0.5 w-6 bg-[#172B36] transition ${
              menuOpen ? "-rotate-45 -translate-y-2" : ""
            }`}
          />

        </button>

      </nav>

      {/* Mobile Menu */}

      <div
        className={`lg:hidden overflow-hidden transition-all duration-300 ${
          menuOpen ? "max-h-[500px]" : "max-h-0"
        }`}
      >

        <div className="bg-[#F1F6F4] border-t border-gray-200 px-6 py-6">

          <ul className="space-y-5">

            {navLinks.map((item) => (

              <li key={item.name}>

                <a
                  href={item.href}
                  onClick={closeMenu}
                  className="block text-lg text-[#172B36] hover:text-[#114C5A]"
                >
                  {item.name}
                </a>

              </li>

            ))}

          </ul>

          <div className="mt-8 flex flex-col gap-4">

            <button
              className="border border-[#114C5A]
              rounded-xl
              py-3"
            >
              Login
            </button>

            <button
              className="bg-[#FFC801]
              hover:bg-[#FF9932]
              rounded-xl
              py-3
              font-semibold
              transition"
            >
              Get Started
            </button>

          </div>

        </div>

      </div>

    </header>
  );
}