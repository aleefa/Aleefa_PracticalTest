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

      <div className="relative mx-auto grid max-w-7xl gap-10 px-4 py-12 lg:grid-cols-2 lg:items-center lg:gap-12 lg:px-8 lg:py-16">
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
              className="inline-flex items-center justify-center rounded-xl bg-[#FF4D2D] px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-black/20 transition hover:scale-[1.02] hover:bg-[#e63e22]"
            >
              Start Your Journey
            </a>
            <a
              href="#app"
              className="inline-flex items-center justify-center rounded-xl border border-white/40 bg-white/10 px-6 py-3 text-sm font-semibold text-white backdrop-blur transition hover:bg-white/15"
            >
              Download App
            </a>
          </div>
          <div className="mt-10 flex items-center gap-3">
            <div className="flex -space-x-2">
              {[1, 2, 3].map((i) => (
                <div
                  key={i}
                  className="size-9 rounded-full border-2 border-white/80 bg-gradient-to-br from-orange-200 to-orange-400"
                  style={{ zIndex: 4 - i }}
                />
              ))}
            </div>
            <p className="text-sm font-medium text-white/90">
              4.9/5 Rating from 50k+ Happy Travelers
            </p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
          className="relative"
        >
          <div className="absolute -right-3 -top-3 z-10 flex size-12 items-center justify-center rounded-xl bg-[#FF4D2D] shadow-lg shadow-[#FF4D2D]/40">
            <Car className="size-6 text-white" aria-hidden />
          </div>
          <div className="rounded-[1.75rem] bg-white p-5 shadow-2xl shadow-black/25 ring-1 ring-black/5 sm:p-6">
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
              <label className="flex items-center gap-2 rounded-xl border border-gray-100 bg-gray-50/80 px-3 py-2.5">
                <MapPin className="size-4 shrink-0 text-[#FF4D2D]" />
                <input
                  className="w-full bg-transparent text-sm outline-none placeholder:text-gray-400"
                  placeholder="Pickup location"
                />
              </label>
              <label className="flex items-center gap-2 rounded-xl border border-gray-100 bg-gray-50/80 px-3 py-2.5">
                <MapPin className="size-4 shrink-0 text-gray-400" />
                <input
                  className="w-full bg-transparent text-sm outline-none placeholder:text-gray-400"
                  placeholder="Destination"
                />
              </label>
              <div className="grid grid-cols-2 gap-3">
                <label className="flex items-center gap-2 rounded-xl border border-gray-100 bg-gray-50/80 px-3 py-2.5">
                  <Calendar className="size-4 shrink-0 text-gray-500" />
                  <input type="date" className="w-full bg-transparent text-sm outline-none" />
                </label>
                <label className="flex items-center gap-2 rounded-xl border border-gray-100 bg-gray-50/80 px-3 py-2.5">
                  <Clock className="size-4 shrink-0 text-gray-500" />
                  <input type="time" className="w-full bg-transparent text-sm outline-none" />
                </label>
              </div>
              <button
                type="button"
                className="flex w-full items-center justify-between rounded-xl border border-gray-100 bg-gray-50/80 px-3 py-2.5 text-left text-sm text-[#1a1a1a]"
              >
                <span className="flex items-center gap-2">
                  <Users className="size-4 text-gray-500" />
                  1 Passenger
                </span>
                <ChevronDown className="size-4 text-gray-400" />
              </button>
            </div>

            <p className="mt-4 text-xs font-semibold uppercase tracking-wider text-gray-400">
              Choose vehicle
            </p>
            <div className="mt-2 flex gap-2 overflow-x-auto pb-1 scrollbar-thin">
              {vehicles.map((v) => (
                <button
                  key={v.id}
                  type="button"
                  onClick={() => setVehicle(v.id)}
                  className={`flex min-w-[4.5rem] flex-col items-center gap-1 rounded-xl border px-2 py-2 text-[10px] font-medium transition sm:text-xs ${
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

            <div className="mt-4 rounded-xl bg-gradient-to-r from-[#FFF5F2] to-white px-3 py-3 ring-1 ring-[#FF4D2D]/15">
              <p className="text-[10px] font-bold uppercase tracking-widest text-[#FF4D2D]">
                Recommended for you
              </p>
              <div className="mt-1 flex items-center justify-between gap-2">
                <span className="text-sm font-bold text-[#1a1a1a]">Premium Sedan</span>
                <span className="text-sm font-bold text-[#FF4D2D]">₹12/km</span>
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
