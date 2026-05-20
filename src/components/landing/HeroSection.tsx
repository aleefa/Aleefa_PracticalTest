"use client";

import Image from "next/image";
import { useState } from "react";
import { motion } from "framer-motion";
import {
  Calendar,
  Car,
  CheckCircle2,
  Clock,
  MapPin,
  Users,
  ChevronDown,
} from "lucide-react";

const vehicles = [
  { id: "hatch", label: "Hatchback" },
  { id: "sedan", label: "Sedan" },
  { id: "suv", label: "SUV" },
  { id: "van", label: "Comfort Van" },
  { id: "crysta", label: "Innova Crysta" },
  { id: "innova", label: "Innova" },
] as const;

const HERO_IMG =
  "https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?auto=format&fit=crop&w=2400&q=80";
const sedanThumb =
  "https://images.unsplash.com/photo-1550355291-bbee04a92027?auto=format&fit=crop&w=240&q=80";
const travelerAvatars = [
  "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=200&q=80",
  "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&q=80",
  "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=200&q=80",
];

function FormFieldFrame({
  title,
  children,
  className = "",
}: {
  title: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={`relative rounded-[0.95rem] border border-[#f5c5ba] bg-[#f8f8f8] ${className}`}>
      <span className="absolute -top-2 left-3 bg-white px-1.5 text-[11px] font-medium text-[#7b7b7b]">
        {title}
      </span>
      <div className="flex min-h-[2.75rem] items-center px-3">{children}</div>
    </div>
  );
}

export function HeroSection() {
  const [trip, setTrip] = useState<"oneway" | "round">("oneway");
  const [vehicle, setVehicle] = useState<string>("sedan");

  return (
    <section id="home" className="relative min-h-[100svh] overflow-hidden pt-16 sm:pt-[4.25rem]">
      <div className="absolute inset-0">
        <Image
          src={HERO_IMG}
          alt="Premium cab on an open road at sunset"
          fill
          priority
          className="object-cover object-center"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/45 to-black/25" />
      </div>

      <div className="relative mx-auto grid max-w-7xl gap-10 overflow-x-clip px-4 py-12 lg:grid-cols-2 lg:items-center lg:gap-12 lg:px-8 lg:py-16">
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-xl text-white"
        >
          <div className="mb-5 inline-flex items-center gap-2 rounded-full bg-[#FF4D2D]/20 px-3 py-1.5 text-xs font-semibold text-orange-100 ring-1 ring-white/20 backdrop-blur">
            <CheckCircle2 className="size-3.5 text-[#FF9A85]" aria-hidden />
            India&apos;s Most Trusted Outstation Network
          </div>
          <h1 className="text-4xl font-extrabold leading-tight tracking-tight sm:text-5xl lg:text-[3.25rem] lg:leading-[1.1]">
            India&apos;s Smarter{" "}
            <span className="text-[#FF7359]">Outstation</span> Cab Platform.
          </h1>
          <p className="mt-4 max-w-lg text-base leading-relaxed text-white/85 sm:text-lg">
            Experience executive-grade travel with AAVORide. Punctual arrivals, verified luxury
            fleet, and transparent pricing for your intercity journeys.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="#services"
              className="inline-flex items-center justify-center rounded-full bg-[#FF4D2D] px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-black/20 transition hover:scale-[1.02] hover:bg-[#e63e22]"
            >
              Start Your Journey
            </a>
            <a
              href="#app"
              className="inline-flex items-center justify-center rounded-full border border-white/40 bg-white/10 px-6 py-3 text-sm font-semibold text-white backdrop-blur transition hover:bg-white/15"
            >
              Download App
            </a>
          </div>
          <div className="mt-10 flex items-center gap-3">
            <div className="flex -space-x-2">
              {travelerAvatars.map((avatar, i) => (
                <Image
                  key={avatar}
                  src={avatar}
                  alt="Happy traveler"
                  width={36}
                  height={36}
                  className="size-9 rounded-full border-2 border-white/80 object-cover"
                  style={{ zIndex: 4 - i }}
                />
              ))}
            </div>
            <p className="text-sm font-medium text-white/90">
              <span className="text-[#FFD45A]">4.9/5 Rating</span> from 50k+ Happy Travelers
            </p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
          className="relative mx-auto w-full max-w-[33rem]"
        >
          <div className="absolute right-2 top-2 z-10 flex size-12 items-center justify-center rounded-xl bg-[#FF4D2D] shadow-lg shadow-[#FF4D2D]/40 sm:-right-3 sm:-top-3">
            <Car className="size-6 text-white" aria-hidden />
          </div>
          <div className="w-full rounded-[1.75rem] bg-white p-4 shadow-2xl shadow-black/25 ring-1 ring-black/5 sm:p-6">
            <h2 className="text-lg font-bold text-[#1a1a1a]">Plan Your Trip</h2>
            <div className="mt-4 flex gap-6 border-b border-gray-100 text-sm font-semibold">
              <button
                type="button"
                onClick={() => setTrip("oneway")}
                className={`relative pb-3 transition ${
                  trip === "oneway" ? "text-[#1a1a1a]" : "text-gray-400 hover:text-gray-600"
                }`}
              >
                One Way
                {trip === "oneway" && (
                  <motion.span
                    layoutId="trip-tab"
                    className="absolute inset-x-0 bottom-0 h-0.5 rounded-full bg-[#FF4D2D]"
                  />
                )}
              </button>
              <button
                type="button"
                onClick={() => setTrip("round")}
                className={`relative pb-3 transition ${
                  trip === "round" ? "text-[#1a1a1a]" : "text-gray-400 hover:text-gray-600"
                }`}
              >
                Round Trip
                {trip === "round" && (
                  <motion.span
                    layoutId="trip-tab"
                    className="absolute inset-x-0 bottom-0 h-0.5 rounded-full bg-[#FF4D2D]"
                  />
                )}
              </button>
            </div>

            <div className="mt-5 space-y-3">
              <FormFieldFrame title="Pickup Location">
                <MapPin className="size-4 shrink-0 text-[#FF4D2D]" />
                <input
                  className="ml-2 w-full bg-transparent text-sm text-[#374151] outline-none placeholder:text-gray-500"
                  placeholder="Enter City or Airport"
                />
              </FormFieldFrame>
              <FormFieldFrame title="Destination">
                <MapPin className="size-4 shrink-0 text-gray-500" />
                <input
                  className="ml-2 w-full bg-transparent text-sm text-[#374151] outline-none placeholder:text-gray-500"
                  placeholder="Where are you heading?"
                />
              </FormFieldFrame>
              <div className="grid grid-cols-2 gap-3">
                <FormFieldFrame title="Date">
                  <Calendar className="size-4 shrink-0 text-gray-500" />
                  <input
                    type="text"
                    value="24 Oct 2024"
                    readOnly
                    className="ml-2 w-full bg-transparent text-sm text-[#374151] outline-none"
                  />
                </FormFieldFrame>
                <FormFieldFrame title="Time">
                  <Clock className="size-4 shrink-0 text-gray-500" />
                  <input
                    type="text"
                    value="09:00 AM"
                    readOnly
                    className="ml-2 w-full bg-transparent text-sm text-[#374151] outline-none"
                  />
                </FormFieldFrame>
              </div>
              <FormFieldFrame title="Travellers">
                <button
                  type="button"
                  className="flex w-full items-center justify-between text-left text-sm text-[#1a1a1a]"
                >
                  <span className="flex items-center gap-2">
                    <Users className="size-4 text-gray-500" />
                    1 Passenger
                  </span>
                  <ChevronDown className="size-4 text-gray-400" />
                </button>
              </FormFieldFrame>
            </div>

            <p className="mt-4 text-xs font-semibold uppercase tracking-wider text-gray-400">
              Choose vehicle
            </p>
            <div className="mt-2 flex gap-2 overflow-x-auto pb-1">
              {vehicles.map((v) => (
                <button
                  key={v.id}
                  type="button"
                  onClick={() => setVehicle(v.id)}
                  className={`flex min-w-[4.65rem] flex-col items-center gap-1 rounded-xl border px-2 py-2 text-[10px] font-medium transition sm:text-xs ${
                    vehicle === v.id
                      ? "border-[#FF4D2D] bg-[#FFF5F2] text-[#FF4D2D]"
                      : "border-gray-100 bg-white text-gray-600 hover:border-[#FF4D2D]/40"
                  }`}
                >
                  <Car className="size-5" />
                  {v.label}
                </button>
              ))}
            </div>

            <p className="mt-4 text-[10px] font-bold uppercase tracking-widest text-[#8a8a8a]">
              Recommended for you
            </p>
            <div className="mt-2 rounded-xl bg-gradient-to-r from-[#FFF5F2] to-white px-3 py-3 ring-1 ring-[#FF4D2D]/15">
              <div className="flex items-center justify-between gap-2">
                <div className="flex items-center gap-2.5">
                  <div className="rounded-full bg-gradient-to-br from-[#ffe0d7] via-[#ffd1c4] to-[#ffc4b4] p-0.5">
                    <Image
                      src={sedanThumb}
                      alt="Premium sedan"
                      width={36}
                      height={36}
                      className="size-9 rounded-full object-cover ring-1 ring-[#FF4D2D]/20"
                    />
                  </div>
                  <div>
                    <p className="text-sm font-bold text-[#1a1a1a]">Premium Sedan</p>
                    <p className="text-xs text-[#8a8a8a]">Honda City or similar</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-sm font-bold text-[#FF4D2D]">₹12/km</p>
                  <p className="text-[10px] text-[#9ca3af]">Fastest Response</p>
                </div>
              </div>
            </div>

            <button
              type="button"
              className="mt-5 w-full rounded-xl bg-[#FF4D2D] py-3.5 text-sm font-bold text-white shadow-lg shadow-[#FF4D2D]/30 transition hover:scale-[1.01] hover:bg-[#e63e22]"
            >
              Search Cabs
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
