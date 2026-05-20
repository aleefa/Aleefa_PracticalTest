"use client";

import { motion } from "framer-motion";
import { Send, Globe, Share2, Video } from "lucide-react";

export function CtaFooter() {
  return (
    <>
      <section id="cta" className="bg-[#F3F4F6] px-4 py-16 sm:py-20 lg:py-24">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="relative mx-auto max-w-5xl overflow-hidden rounded-[2rem] bg-gradient-to-br from-[#FF5A35] via-[#FF4D2D] to-[#DC2626] px-6 py-12 text-center shadow-2xl shadow-[#FF4D2D]/25 sm:px-12 sm:py-16"
        >
          <div className="pointer-events-none absolute -left-16 -top-16 size-56 rounded-full bg-white/25 blur-3xl" />
          <h2 className="relative text-3xl font-extrabold tracking-tight text-white sm:text-4xl md:text-[2.5rem] md:leading-tight">
            Ready to Travel Smarter?
          </h2>
          <p className="relative mx-auto mt-4 max-w-2xl text-base leading-relaxed text-white/90 sm:text-lg">
            Join 50,000+ travelers who choose AAVORide for their executive outstation journeys. Book your
            first ride today and get ₹500 off.
          </p>
          <div className="relative mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row sm:gap-6">
            <a
              href="#home"
              className="inline-flex rounded-full bg-white px-8 py-3 text-sm font-bold text-[#FF4D2D] shadow-lg transition hover:scale-[1.03]"
            >
              Book Your Ride Now
            </a>
            <span className="text-sm font-medium text-white/95">
              Or Call Us: <span className="underline underline-offset-2">1800-AAVO-RIDE</span>
            </span>
          </div>
        </motion.div>
      </section>

      <footer id="contact" className="border-t border-gray-200 bg-[#F3F4F6] pb-10 pt-4">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="grid gap-12 py-14 md:grid-cols-2 lg:grid-cols-4">
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <p className="text-xl font-extrabold text-[#FF4D2D]">AAVORide</p>
              <p className="mt-3 text-sm leading-relaxed text-[#374151]">
                Redefining outstation travel across India with safety, luxury, and transparency at its core.
              </p>
              <div className="mt-5 flex gap-3">
                {[Share2, Globe, Video].map((Icon, i) => (
                  <a
                    key={i}
                    href="#"
                    className="flex size-10 items-center justify-center rounded-full bg-white text-[#FF4D2D] shadow-sm ring-1 ring-black/5 transition hover:scale-105"
                    aria-label="Social"
                  >
                    <Icon className="size-[18px]" />
                  </a>
                ))}
              </div>
            </motion.div>

            <div>
              <h3 className="text-sm font-bold text-[#374151]">Company</h3>
              <ul className="mt-4 space-y-2 text-sm text-[#6b7280]">
                {["Partner with Us", "Careers", "Press Kit", "Luxury Fleet"].map((l) => (
                  <li key={l}>
                    <a href="#" className="transition hover:text-[#1a1a1a]">
                      {l}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-sm font-bold text-[#374151]">Resources</h3>
              <ul className="mt-4 space-y-2 text-sm text-[#6b7280]">
                {["Safety Protocol", "Help Center", "Travel Blog", "Sitemap"].map((l) => (
                  <li key={l}>
                    <a href="#" className="transition hover:text-[#1a1a1a]">
                      {l}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-sm font-bold text-[#374151]">Newsletter</h3>
              <p className="mt-3 text-sm text-[#6b7280]">
                Get travel tips and exclusive luxury offers.
              </p>
              <form
                className="mt-4 flex gap-2"
                onSubmit={(e) => e.preventDefault()}
              >
                <input
                  type="email"
                  placeholder="Your email"
                  className="min-w-0 flex-1 rounded-xl border-none bg-gray-100 px-4 py-2.5 text-sm outline-none ring-1 ring-transparent transition focus:bg-white focus:ring-[#FF4D2D]/40"
                  aria-label="Email"
                />
                <button
                  type="submit"
                  className="flex size-11 shrink-0 items-center justify-center rounded-full bg-[#FF4D2D] text-white shadow-md transition hover:scale-[1.05]"
                  aria-label="Subscribe"
                >
                  <Send className="size-4" />
                </button>
              </form>
            </div>
          </div>

          <div className="flex flex-col gap-4 border-t border-gray-200/90 py-8 text-xs text-[#9ca3af] sm:flex-row sm:items-center sm:justify-between">
            <p>© {new Date().getFullYear()} AAVORide Premium Mobility. All rights reserved. Driven by Excellence.</p>
            <nav className="flex flex-wrap gap-4">
              {["Privacy Policy", "Terms of Service", "Refund Policy"].map((l) => (
                <a key={l} href="#" className="hover:text-[#6b7280]">
                  {l}
                </a>
              ))}
            </nav>
          </div>
        </div>
      </footer>
    </>
  );
}
