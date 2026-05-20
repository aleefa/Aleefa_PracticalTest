"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const links = [
  { href: "#home", label: "Home" },
  { href: "#services", label: "Services" },
  { href: "#about", label: "About" },
  { href: "#safety", label: "Safety" },
  { href: "#contact", label: "Contact" },
];

export function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-black/5 bg-white/90 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:h-[4.25rem] sm:px-6 lg:px-8">
        <a href="#home" className="flex shrink-0 items-center gap-0.5 text-xl font-extrabold tracking-tight">
          <span className="text-[#FF4D2D]">AAVO</span>
          <span className="text-[#1a1a1a]">Ride</span>
        </a>

        <nav className="hidden items-center gap-8 md:flex" aria-label="Main">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className={`relative text-sm font-medium text-[#374151] transition-colors hover:text-[#1a1a1a] ${
                l.href === "#home" ? "text-[#1a1a1a]" : ""
              }`}
            >
              {l.label}
              {l.href === "#home" && (
                <span className="absolute -bottom-1 left-0 right-0 mx-auto h-0.5 w-6 rounded-full bg-[#FF4D2D]" />
              )}
            </a>
          ))}
        </nav>

        <a
          href="#cta"
          className="hidden rounded-full bg-[#FF4D2D] px-5 py-2.5 text-sm font-semibold text-white shadow-lg shadow-[#FF4D2D]/25 transition hover:scale-[1.02] hover:bg-[#e63e22] md:inline-flex"
        >
          Join as AAVORider Partner
        </a>

        <button
          type="button"
          className="inline-flex rounded-lg p-2 text-[#1a1a1a] md:hidden"
          aria-expanded={open}
          aria-controls="mobile-nav"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X className="size-6" /> : <Menu className="size-6" />}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            id="mobile-nav"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="overflow-hidden border-t border-black/5 bg-white md:hidden"
          >
            <nav className="flex flex-col gap-1 px-4 py-4" aria-label="Mobile">
              {links.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  className="rounded-lg px-3 py-3 text-sm font-medium text-[#374151] hover:bg-[#FFF9F5]"
                  onClick={() => setOpen(false)}
                >
                  {l.label}
                </a>
              ))}
              <a
                href="#cta"
                className="mt-2 rounded-full bg-[#FF4D2D] px-4 py-3 text-center text-sm font-semibold text-white"
                onClick={() => setOpen(false)}
              >
                Join as AAVORider Partner
              </a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
