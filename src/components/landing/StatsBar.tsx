"use client";

import { motion } from "framer-motion";

const stats = [
  { value: "10k+", label: "Active Travelers" },
  { value: "5k+", label: "Verified Drivers" },
  { value: "100+", label: "Cities Covered" },
  { value: "4.9", label: "User Rating" },
] as const;

export function StatsBar() {
  return (
    <section className="border-y border-dashed border-gray-200/80 bg-[#FFF9F5] py-10 sm:py-12">
      <div className="mx-auto grid max-w-7xl grid-cols-2 gap-8 px-4 md:grid-cols-4 md:gap-6 lg:px-8">
        {stats.map((s, i) => (
          <motion.div
            key={s.label}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ delay: i * 0.08, duration: 0.45 }}
            className="text-center"
          >
            <p className="text-3xl font-extrabold text-[#FF4D2D] sm:text-4xl">{s.value}</p>
            <p className="mt-1 text-sm font-medium text-[#374151]">{s.label}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
