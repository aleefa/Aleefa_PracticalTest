"use client";

import { motion } from "framer-motion";
import {
  Bell,
  Check,
  Shield,
  Target,
  MapPin as MapPinIcon,
} from "lucide-react";
import Image from "next/image";

const testimonials = [
  {
    quote:
      "Monthly Bangalore–Chennai runs are effortless now. Drivers are courteous, punctual, and the cars feel brand new every time.",
    name: "Ananya Sharma",
    role: "Frequent Traveler",
    avatar:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=200&q=80",
  },
  {
    quote:
      "Our family trip to Ooty was perfect — roomy Innova Crysta, spotless interiors, and a driver who genuinely cared about safety on the ghats.",
    name: "Vikram Malhotra",
    role: "Tech Executive",
    avatar:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80",
  },
  {
    quote:
      "Finally, transparent pricing without last-minute toll debates. What I booked is exactly what I paid — huge relief.",
    name: "Priya Das",
    role: "Digital Nomad",
    avatar:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=200&q=80",
  },
];

export function AppTestimonials() {
  return (
    <>
      <section id="app" className="bg-white py-16 sm:py-20 lg:py-24">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 lg:grid-cols-2 lg:gap-16 lg:px-8">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative mx-auto max-w-[320px]"
          >
            <motion.div
              animate={{ y: [0, -6, 0] }}
              transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
              className="relative rounded-[2.25rem] border-[10px] border-[#ececec] bg-white p-4 shadow-2xl shadow-black/15"
            >
              <div className="flex items-center justify-between px-1 pb-3">
                <span className="text-base font-bold text-[#FF4D4D]">AAVORide</span>
                <Bell className="size-5 text-[#FF4D4D]" aria-hidden />
              </div>
              <div className="relative rounded-2xl bg-slate-100 px-4 py-16 text-center">
                <p className="text-xs font-semibold text-slate-500">Live Map View</p>
                <motion.span
                  animate={{ scale: [1, 1.03, 1] }}
                  transition={{ repeat: Infinity, duration: 2 }}
                  className="mt-3 inline-flex rounded-full bg-emerald-500/90 px-2 py-1 text-[10px] font-semibold text-white"
                >
                  • Driver is 2 mins away
                </motion.span>
              </div>
              <div className="mt-4 space-y-2 px-1">
                <p className="text-xs font-semibold">
                  Trip ID: <span className="text-[#FF4D4D]">#AAV0784</span>
                </p>
                <p className="text-xs font-semibold">
                  OTP: <span className="text-[#FF4D4D]">4521</span>
                </p>
              </div>
              <div className="mt-3 space-y-2">
                <div className="flex items-start gap-2 rounded-xl bg-gray-100 px-3 py-2">
                  <span className="mt-1 size-2 shrink-0 rounded-full bg-[#FF4D4D]" />
                  <span className="text-xs text-gray-600">HSR Layout, Bangalore</span>
                </div>
                <div className="flex items-start gap-2 rounded-xl bg-gray-100 px-3 py-2">
                  <MapPinIcon className="mt-0.5 size-4 shrink-0 text-gray-400" />
                  <span className="text-xs text-gray-600">Electronic City Phase 2</span>
                </div>
              </div>
            </motion.div>

            <motion.div
              animate={{ y: [0, 5, 0] }}
              transition={{ repeat: Infinity, duration: 3.5, ease: "easeInOut", delay: 0.5 }}
              className="absolute -left-4 top-[38%] z-10 max-w-[9.5rem] rounded-2xl border border-black/5 bg-white p-3 shadow-xl shadow-black/10"
            >
              <Target className="size-5 text-[#FF4D4D]" aria-hidden />
              <p className="mt-1 text-[11px] font-semibold text-[#1a1a1a]">Live Link Shared</p>
            </motion.div>

            <motion.div
              animate={{ y: [0, -5, 0] }}
              transition={{ repeat: Infinity, duration: 3.2, ease: "easeInOut", delay: 0.2 }}
              className="absolute -right-3 top-[55%] z-10 max-w-[9.5rem] rounded-2xl border border-black/5 bg-white p-3 shadow-xl shadow-black/10"
            >
              <div className="flex size-6 items-center justify-center rounded-full bg-emerald-500">
                <Check className="size-3.5 text-white" strokeWidth={3} />
              </div>
              <p className="mt-1 text-[11px] font-semibold text-[#1a1a1a]">Payment Success</p>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-extrabold tracking-tight text-[#1a1a1a] sm:text-4xl">
              Control Your Journey from Your Pocket
            </h2>
            <p className="mt-4 text-[#6b7280]">
              Track rides in real time, share trips with trusted contacts, and activate emergency
              assistance instantly — engineered for executives and families alike.
            </p>
            <div className="mt-8 grid gap-6 sm:grid-cols-2">
              <div className="flex gap-3">
                <Target className="mt-1 size-10 shrink-0 rounded-full bg-[#FF4D4D]/10 p-2 text-[#FF4D4D]" />
                <div>
                  <h3 className="font-bold text-[#1a1a1a]">Live Tracking</h3>
                  <p className="mt-1 text-sm text-[#6b7280]">
                    Precisely track your ride&apos;s ETA.
                  </p>
                </div>
              </div>
              <div className="flex gap-3">
                <Shield className="mt-1 size-10 shrink-0 rounded-full bg-[#FF4D4D]/10 p-2 text-[#FF4D4D]" />
                <div>
                  <h3 className="font-bold text-[#1a1a1a]">SOS Safety</h3>
                  <p className="mt-1 text-sm text-[#6b7280]">Instant emergency assistance.</p>
                </div>
              </div>
            </div>
            <div className="mt-10 flex flex-wrap gap-3">
              <a
                href="#cta"
                className="inline-flex min-h-[52px] min-w-[200px] items-center justify-center gap-3 rounded-full bg-black px-6 py-3 text-sm font-semibold text-white transition hover:scale-[1.02]"
              >
                <svg width="26" height="26" viewBox="0 0 24 24" fill="none" aria-hidden>
                  <path
                    fill="currentColor"
                    d="M3 2.5v19l17.5-9.55L3 2.5z"
                  />
                </svg>
                <span className="text-left leading-tight">
                  Get it on
                  <br />
                  <span className="text-xs font-normal text-white/80">Google Play</span>
                </span>
              </a>
              <a
                href="#cta"
                className="inline-flex min-h-[52px] min-w-[200px] items-center justify-center gap-3 rounded-full bg-black px-6 py-3 text-sm font-semibold text-white transition hover:scale-[1.02]"
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                  <path d="M16.365 2.764c-.59 0-1.354.36-2.036.957-.62.547-1.043 1.32-1.043 2.087 0 .09.015.173.029.259.74-.025 1.516-.478 2.17-1.092.579-.547.996-1.303 1.044-2.086-.086-.026-.173-.046-.274-.065l.11-.061-.001-.001zm3.084 17.086c-.66.743-1.388 1.485-2.446 1.498-.93.015-1.234-.578-2.445-.578-1.21 0-1.596.578-2.445.594-1.09.019-1.93-.978-2.596-1.734C8.764 17.986 8 15.465 8 13.068c0-3.78 2.596-5.694 5.125-5.694 1.16 0 2.12.379 2.834.743.596.297 1.09.579 1.61.579.478 0 1 .313 1.734.743.956.579 2.086 1.285 2.086 3.086 0 1.9-1.19 3.086-2.086 4.086zM18.764 8.26c-.58-.743-1.09-2.086-2.086-4.086-.957 1-.579 3.086-.086 4.086.743-.957 2.086-2.743 2.172-4.743z" />
                </svg>
                <span className="text-left leading-tight">
                  Download on
                  <br />
                  <span className="text-xs font-normal text-white/80">the App Store</span>
                </span>
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="border-t border-gray-100 bg-slate-50 py-16 sm:py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <motion.h2
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center text-3xl font-extrabold text-[#1a1a1a] sm:text-4xl"
          >
            Stories from Our Travelers
          </motion.h2>
          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {testimonials.map((t, i) => (
              <motion.article
                key={t.name}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-20px" }}
                transition={{ delay: i * 0.06 }}
                whileHover={{ y: -6 }}
                className="rounded-3xl bg-white p-6 shadow-xl shadow-black/[0.04] ring-1 ring-black/[0.04]"
              >
                <div className="flex gap-0.5 text-[#FF4D4D]">
                  {Array.from({ length: 5 }).map((_, j) => (
                    <svg key={j} className="size-4 fill-current" viewBox="0 0 24 24" aria-hidden>
                      <title>Star</title>
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                    </svg>
                  ))}
                </div>
                <p className="mt-4 text-sm leading-relaxed text-[#4b5563]">{t.quote}</p>
                <div className="mt-6 flex items-center gap-3">
                  <Image
                    src={t.avatar}
                    alt=""
                    width={44}
                    height={44}
                    className="rounded-full object-cover"
                  />
                  <div>
                    <p className="font-bold text-[#1a1a1a]">{t.name}</p>
                    <p className="text-xs text-[#9ca3af]">{t.role}</p>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
