"use client";

import { motion } from "framer-motion";
import { Check, X } from "lucide-react";

const leftItems = [
  {
    title: "Last Minute Cancellations",
    body: "Drivers often cancel just before the trip starts.",
  },
  {
    title: "Hidden Tolls & Charges",
    body: "Vague pricing that changes at the end of the trip.",
  },
  {
    title: "Unverified Drivers",
    body: "Lack of safety standards and background checks.",
  },
];

const rightItems = [
  {
    title: "Zero Cancellation Policy",
    body: "Confirmed rides, guaranteed every single time.",
  },
  {
    title: "Fixed & Transparent",
    body: "Pay exactly what you see. No hidden toll surprises.",
  },
  {
    title: "Luxury Fleet & Elite Drivers",
    body: "5-point background checks for premium safety.",
  },
];

export function WhySection() {
  return (
    <section id="about" className="bg-[#F9F9F9] py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
          className="mx-auto max-w-3xl text-center"
        >
          <h2 className="text-3xl font-extrabold tracking-tight text-[#1a1a1a] sm:text-4xl">
            Why AAVORide is Smarter?
          </h2>
          <p className="mt-4 text-base text-[#6b7280] sm:text-lg">
            We&apos;ve redesigned outstation travel from the ground up to solve every pain point of
            traditional cab bookings.
          </p>
        </motion.div>

        <div className="mt-12 grid gap-6 lg:grid-cols-2 lg:gap-8">
          <motion.article
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5 }}
            whileHover={{ y: -4 }}
            className="relative rounded-3xl bg-white p-6 shadow-sm ring-1 ring-black/[0.04] sm:p-8"
          >
            <span className="absolute right-5 top-5 rounded-full bg-gray-100 px-3 py-1 text-xs font-semibold text-gray-600">
              Traditional Cabs
            </span>
            <ul className="mt-10 space-y-6">
              {leftItems.map((item) => (
                <li key={item.title} className="flex gap-4">
                  <span className="mt-0.5 flex size-7 shrink-0 items-center justify-center rounded-full bg-[#EF4444] text-white">
                    <X className="size-4" strokeWidth={3} />
                  </span>
                  <div>
                    <p className="font-bold text-[#1a1a1a]">{item.title}</p>
                    <p className="mt-1 text-sm text-[#6b7280]">{item.body}</p>
                  </div>
                </li>
              ))}
            </ul>
          </motion.article>

          <motion.article
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5, delay: 0.06 }}
            whileHover={{ y: -4 }}
            className="relative rounded-3xl bg-white p-6 shadow-sm ring-1 ring-[#FF4D2D]/15 sm:p-8"
          >
            <span className="absolute right-5 top-5 rounded-full bg-[#FF4D2D] px-3 py-1 text-xs font-semibold text-white">
              AAVORide Experience
            </span>
            <ul className="mt-10 space-y-6">
              {rightItems.map((item) => (
                <li key={item.title} className="flex gap-4">
                  <span className="mt-0.5 flex size-7 shrink-0 items-center justify-center rounded-full bg-[#FF4D2D] text-white">
                    <Check className="size-4" strokeWidth={3} />
                  </span>
                  <div>
                    <p className="font-bold text-[#1a1a1a]">{item.title}</p>
                    <p className="mt-1 text-sm text-[#6b7280]">{item.body}</p>
                  </div>
                </li>
              ))}
            </ul>
          </motion.article>
        </div>
      </div>
    </section>
  );
}
