"use client";

import { motion } from "framer-motion";
import {
  CircleCheck,
  MapPin,
  ArrowLeftRight,
  PartyPopper,
  Shield,
  Award,
  Brain,
} from "lucide-react";
import Image from "next/image";

const steps = [
  {
    n: "1",
    title: "Enter Destination",
    body: "Tell us where you want to go and when you want to start.",
    Icon: MapPin,
    active: true,
  },
  {
    n: "2",
    title: "Compare Cabs",
    body: "Choose from a fleet of hatchbacks, sedans, and premium SUVs.",
    Icon: ArrowLeftRight,
    active: false,
  },
  {
    n: "3",
    title: "Instant Booking",
    body: "Confirm with a small advance or pay later in full.",
    Icon: CircleCheck,
    active: false,
  },
  {
    n: "4",
    title: "Travel Comfortably",
    body: "Experience the premium hospitality of AAVORide.",
    Icon: PartyPopper,
    active: false,
  },
] as const;

const driverPhoto =
  "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=400&q=80";

export function JourneyDrivers() {
  return (
    <>
      <section className="bg-[#F9F9F9] py-16 sm:py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center text-3xl font-extrabold text-[#1a1a1a] sm:text-4xl"
          >
            Your Journey in 4 Simple Steps
          </motion.h2>

          {/* Desktop */}
          <div className="relative mx-auto mt-14 hidden lg:block">
            <div className="absolute left-[10%] right-[10%] top-[2.35rem] h-px bg-gray-200" />
            <div className="absolute left-[10%] top-[2.35rem] h-px w-[22%] bg-[#FF5A3D]" />
            <div className="grid grid-cols-4 gap-6">
              {steps.map(({ n, title, body, Icon, active }, i) => (
                <motion.div
                  key={title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08 }}
                  className="relative flex flex-col items-center text-center"
                >
                  <div className="relative">
                    <span
                      className={`absolute -right-1 -top-1 flex size-6 items-center justify-center rounded-full text-[11px] font-bold text-white ${
                        active ? "bg-[#FF5A3D]" : "bg-[#FFD5CC] text-[#9a3412]"
                      }`}
                    >
                      {n}
                    </span>
                    <div
                      className={`flex size-[4.25rem] items-center justify-center rounded-full border-2 bg-white ${
                        active ? "border-[#FF5A3D]" : "border-gray-200"
                      }`}
                    >
                      <Icon
                        className={`size-7 ${active ? "text-[#FF5A3D]" : "text-gray-400"}`}
                        strokeWidth={1.75}
                      />
                    </div>
                  </div>
                  <h3 className="mt-5 text-lg font-bold text-[#1a1a1a]">{title}</h3>
                  <p className="mt-2 max-w-[14rem] text-sm leading-relaxed text-[#6b7280]">{body}</p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Mobile / tablet */}
          <div className="mt-10 space-y-8 lg:hidden">
            {steps.map(({ n, title, body, Icon, active }, i) => (
              <motion.div
                key={title}
                initial={{ opacity: 0, x: -12 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="relative flex gap-4 pl-8"
              >
                {i < steps.length - 1 && (
                  <span className="absolute left-[1.125rem] top-10 bottom-[-1.75rem] w-px bg-gray-200" />
                )}
                <span
                  className={`absolute left-0 top-3 flex size-9 items-center justify-center rounded-full border-2 bg-white text-xs font-bold ${
                    active ? "border-[#FF5A3D] text-[#FF5A3D]" : "border-gray-200 text-gray-400"
                  }`}
                >
                  {n}
                </span>
                <div className="flex gap-4 rounded-2xl bg-white p-4 shadow-sm ring-1 ring-black/[0.04]">
                  <div
                    className={`flex size-12 shrink-0 items-center justify-center rounded-full border ${
                      active ? "border-[#FF5A3D]" : "border-gray-200"
                    }`}
                  >
                    <Icon
                      className={`size-6 ${active ? "text-[#FF5A3D]" : "text-gray-400"}`}
                      strokeWidth={1.75}
                    />
                  </div>
                  <div>
                    <h3 className="font-bold text-[#1a1a1a]">{title}</h3>
                    <p className="mt-1 text-sm text-[#6b7280]">{body}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section id="safety" className="bg-[#FFF8F4] py-16 sm:py-20 lg:py-24">
        <div className="mx-auto grid max-w-7xl gap-12 px-4 lg:grid-cols-2 lg:items-center lg:gap-16 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-extrabold tracking-tight text-[#1a1a1a] sm:text-4xl">
              Our Drivers are our Heroes
            </h2>
            <p className="mt-4 text-[#6b7280]">
              Every elite partner completes rigorous verification — including agency-led background
              checks, behavioural assessments, and hospitality training focused on traveller
              safety and comfort.
            </p>
            <ul className="mt-8 space-y-3">
              {[
                {
                  icon: Shield,
                  text: "Background Verified by Top Agencies",
                },
                { icon: Brain, text: "Psychometric Safety Testing" },
                { icon: Award, text: "Hospitality & Professionalism Certified" },
              ].map(({ icon: IconCmp, text }) => (
                <li
                  key={text}
                  className="flex items-center gap-4 rounded-2xl bg-[#F3EDE8] px-4 py-3.5 ring-1 ring-black/[0.04]"
                >
                  <IconCmp className="size-6 shrink-0 text-[#FF5A3D]" strokeWidth={1.75} />
                  <span className="text-sm font-semibold text-[#1a1a1a]">{text}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.06 }}
            whileHover={{ y: -4 }}
            className="relative mx-auto max-w-md rounded-3xl border border-[#FF5A3D]/30 bg-white p-6 shadow-xl shadow-black/[0.06] sm:p-8"
          >
            <Shield
              className="pointer-events-none absolute right-4 top-4 size-28 text-gray-100"
              strokeWidth={1}
            />
            <div className="flex items-start gap-4">
              <div className="relative">
                <div className="absolute inset-0 rounded-full bg-[#FF5A3D]/25 blur-md" />
                <Image
                  src={driverPhoto}
                  alt="Rajesh Kumar"
                  width={72}
                  height={72}
                  className="relative rounded-full ring-2 ring-[#FF5A3D]/40"
                />
              </div>
              <div className="min-w-0 flex-1">
                <p className="truncate text-xl font-bold text-[#1a1a1a]">Rajesh Kumar</p>
                <p className="text-sm font-semibold text-[#FF5A3D]">Elite Partner • 5.0 ★</p>
                <div className="mt-2 flex flex-wrap gap-2">
                  <span className="rounded-full bg-[#FFE8E2] px-2.5 py-0.5 text-[11px] font-bold text-[#FF5A3D]">
                    VERIFIED
                  </span>
                  <span className="rounded-full bg-gray-100 px-2.5 py-0.5 text-[11px] font-semibold text-gray-600">
                    1000+ TRIPS
                  </span>
                </div>
              </div>
            </div>

            <div className="mt-6 grid grid-cols-2 gap-3">
              {[
                ["VEHICLE", "Toyota Innova Crysta"],
                ["LANGUAGE", "Hindi, English, Kannada"],
                ["BASE CITY", "Bangalore"],
                ["EXPERTISE", "Night Driving, Hill Stations"],
              ].map(([k, v]) => (
                <div key={k} className="rounded-xl bg-[#F3F4F6] px-3 py-3">
                  <p className="text-[10px] font-semibold uppercase tracking-wide text-[#9ca3af]">
                    {k}
                  </p>
                  <p className="mt-1 text-sm font-bold text-[#1a1a1a]">{v}</p>
                </div>
              ))}
            </div>

            <div className="relative mt-6 overflow-hidden rounded-xl bg-[#FFE8E2]/80 px-4 py-4">
              <p className="pr-10 text-sm font-medium italic text-[#4b5563]">
                &ldquo;Ensuring every traveler reaches their destination with a smile.&rdquo;
              </p>
              <span className="absolute bottom-2 right-3 font-serif text-4xl leading-none text-[#FF5A3D]/40">
                &rdquo;
              </span>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
