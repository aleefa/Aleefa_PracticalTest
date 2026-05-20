"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const services = {
  featured: {
    title: "Outstation Trips",
    description:
      "Intercity journeys made luxurious with professional chauffeurs and guaranteed fleet availability.",
    image:
      "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?auto=format&fit=crop&w=1600&q=80",
    badge: "Most Popular",
  },
  stack: [
    {
      title: "Airport Transfers",
      description: "Punctual pickups & drops with real-time flight tracking.",
      image:
        "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&w=1200&q=80",
    },
    {
      title: "Wedding Cars",
      description: "Make your special day grand with our luxury fleet.",
      image:
        "https://images.unsplash.com/photo-1520038410233-714127be75be?auto=format&fit=crop&w=1200&q=80",
    },
  ],
  row: [
    {
      title: "Local Rentals",
      description: "Hourly packages for all your city exploration needs.",
      image:
        "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=1200&q=80",
    },
    {
      title: "Round Trips",
      description: "Seamless multi-day travel with zero hidden costs.",
      image:
        "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1200&q=80",
    },
    {
      title: "Tempo Travellers",
      description: "Premium group travel with spacious, modern vans.",
      image:
        "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?auto=format&fit=crop&w=1200&q=80",
    },
  ],
};

function ServiceCard({
  title,
  description,
  image,
  minHeightClass = "min-h-[280px] sm:min-h-[320px] lg:min-h-[340px]",
}: {
  title: string;
  description: string;
  image: string;
  minHeightClass?: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.45 }}
      className={`group relative flex flex-col overflow-hidden rounded-[2rem] ${minHeightClass}`}
    >
      <div className="absolute inset-0">
        <Image
          src={image}
          alt=""
          fill
          className="object-cover transition duration-700 ease-out group-hover:scale-105"
          sizes="(max-width: 1024px) 100vw, 33vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
      </div>
      <div className="relative z-10 mt-auto p-4 sm:p-6">
        <div className="rounded-2xl border border-white/30 bg-white/55 p-4 shadow-lg shadow-black/10 backdrop-blur-md sm:p-5">
          <h3 className="text-lg font-bold text-[#1a1a1a] sm:text-xl">{title}</h3>
          <p className="mt-2 text-sm leading-relaxed text-[#4b5563]">{description}</p>
        </div>
      </div>
    </motion.div>
  );
}

export function ServicesSection() {
  const f = services.featured;

  return (
    <section id="services" className="bg-[#FFF8F1] py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mx-auto max-w-3xl text-center"
        >
          <span className="inline-flex rounded-full border border-[#FF4D2D]/40 px-3 py-1 text-xs font-semibold text-[#FF4D2D]">
            Services
          </span>
          <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-[#1a1a1a] sm:text-4xl">
            Travel Solutions for Every Journey
          </h2>
          <p className="mt-4 text-base text-[#6b7280] sm:text-lg">
            From airport rides to outstation adventures — experience smarter, safer, and more
            comfortable travel with AAVORide.
          </p>
          <div className="mx-auto mt-6 h-1 w-14 rounded-full bg-[#FF4D2D]" />
        </motion.div>

        <div className="mt-14 grid gap-4 lg:grid-cols-3 lg:gap-5">
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="group relative flex min-h-[420px] overflow-hidden rounded-[2rem] lg:col-span-2 lg:min-h-[480px]"
          >
            <div className="absolute inset-0">
              <Image
                src={f.image}
                alt=""
                fill
                className="object-cover transition duration-700 group-hover:scale-105"
                sizes="(max-width: 1024px) 100vw, 66vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/25 to-transparent" />
            </div>
            <span className="absolute left-5 top-5 z-10 rounded-full bg-[#FF4D2D] px-3 py-1 text-xs font-bold text-white shadow-lg">
              {f.badge}
            </span>
            <div className="relative z-10 mt-auto flex w-full flex-col justify-end p-5 sm:p-8">
              <div className="max-w-xl rounded-2xl border border-white/35 bg-white/60 p-5 shadow-xl shadow-black/15 backdrop-blur-md">
                <h3 className="text-xl font-bold text-[#1a1a1a] sm:text-2xl">{f.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-[#4b5563] sm:text-base">
                  {f.description}
                </p>
                <div className="mt-5 flex flex-wrap gap-3">
                  <a
                    href="#cta"
                    className="inline-flex rounded-full bg-[#FF4D2D] px-5 py-2.5 text-sm font-semibold text-white transition hover:scale-[1.02] hover:bg-[#e63e22]"
                  >
                    Explore Routes
                  </a>
                  <a
                    href="#about"
                    className="inline-flex rounded-full border border-gray-300/80 bg-white/40 px-5 py-2.5 text-sm font-semibold text-[#1a1a1a] backdrop-blur transition hover:bg-white/60"
                  >
                    Learn More
                  </a>
                </div>
              </div>
            </div>
          </motion.div>

          <div className="flex flex-col gap-4 lg:gap-5">
            {services.stack.map((s) => (
              <ServiceCard
                key={s.title}
                {...s}
                minHeightClass="min-h-[220px] sm:min-h-[240px] lg:flex-1 lg:min-h-0 lg:basis-0"
              />
            ))}
          </div>
        </div>

        <div className="mt-4 grid gap-4 md:grid-cols-2 lg:mt-5 lg:grid-cols-3 lg:gap-5">
          {services.row.map((s) => (
            <ServiceCard key={s.title} {...s} />
          ))}
        </div>
      </div>
    </section>
  );
}
