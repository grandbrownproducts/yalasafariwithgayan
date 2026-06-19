"use client";

import { useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import {
  Binoculars,
  CheckCircle2,
  Clock,
  Droplets,
  MessageCircle,
  Snowflake,
  Truck,
  Users,
} from "lucide-react";
import {
  safariDestinations,
  safariPackages,
  packageImagesByDestination,
  includedServices,
  type IncludedService,
} from "@/lib/data";
import { whatsappLink } from "@/lib/site-config";
import ScrollReveal from "./ScrollReveal";

const serviceIcons: Record<IncludedService["icon"], typeof Droplets> = {
  water: Droplets,
  coolbox: Snowflake,
  binoculars: Binoculars,
  driver: Truck,
};

export default function Packages() {
  const [activeDestination, setActiveDestination] = useState(
    safariDestinations[0].slug
  );
  const destination = safariDestinations.find(
    (d) => d.slug === activeDestination
  )!;

  return (
    <section id="packages" className="bg-safari-dark py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <ScrollReveal className="mx-auto max-w-2xl text-center">
          <span className="font-semibold uppercase tracking-wide text-safari-gold">
            Safari Packages
          </span>
          <h2 className="mt-3 font-display text-3xl font-bold text-safari-cream sm:text-4xl">
            Choose Your Safari Destination
          </h2>
          <p className="mt-4 text-safari-cream/70">
            Select a national park to see available private safari packages,
            timings, and pricing.
          </p>
        </ScrollReveal>

        {/* Destination selector */}
        <div className="mt-12 flex flex-wrap justify-center gap-4">
          {safariDestinations.map((d) => (
            <button
              key={d.slug}
              onClick={() => setActiveDestination(d.slug)}
              className={`relative overflow-hidden rounded-2xl ring-1 transition-all ${
                activeDestination === d.slug
                  ? "ring-2 ring-safari-gold scale-[1.03]"
                  : "ring-white/10 hover:ring-safari-gold/50"
              }`}
            >
              <div className="relative h-28 w-44 sm:h-32 sm:w-56">
                <Image
                  src={d.image}
                  alt={d.name}
                  fill
                  className="object-cover"
                />
                <div
                  className={`absolute inset-0 flex items-end p-3 transition-colors ${
                    activeDestination === d.slug
                      ? "bg-safari-dark/30"
                      : "bg-safari-dark/60"
                  }`}
                >
                  <span className="font-display text-sm font-bold text-safari-cream sm:text-base">
                    {d.name}
                  </span>
                </div>
              </div>
            </button>
          ))}
        </div>

        {/* Packages for selected destination */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeDestination}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            className="mt-14"
          >
            <p className="text-center text-sm text-safari-cream/60">
              Private safari packages for{" "}
              <span className="text-safari-gold">{destination.name}</span>
            </p>

            <div className="mt-8 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
              {safariPackages.map((pkg, i) => {
                const pkgImage =
                  packageImagesByDestination[activeDestination]?.[pkg.slug] ??
                  pkg.image;
                return (
                <ScrollReveal key={pkg.slug} delay={i * 0.1}>
                  <div className="group flex h-full flex-col overflow-hidden rounded-2xl bg-white/5 ring-1 ring-white/10 transition-transform hover:-translate-y-2">
                    <div className="relative h-52 w-full overflow-hidden">
                      <Image
                        src={pkgImage}
                        alt={pkg.title}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                      <div className="absolute right-3 top-3 flex items-center gap-1 rounded-full bg-safari-dark/80 px-3 py-1 text-xs font-medium text-safari-gold-light">
                        <Clock size={14} />
                        {pkg.time}
                      </div>
                    </div>

                    <div className="flex flex-1 flex-col p-6">
                      <h3 className="font-display text-lg font-bold text-safari-cream">
                        {pkg.title}
                      </h3>
                      <p className="mt-2 font-display text-2xl font-bold text-safari-gold">
                        {pkg.price}
                        <span className="ml-1 text-sm font-normal text-safari-cream/60">
                          / jeep
                        </span>
                      </p>

                      <ul className="mt-4 flex-1 space-y-2">
                        {pkg.features.map((feature) => (
                          <li
                            key={feature}
                            className="flex items-start gap-2 text-sm text-safari-cream/80"
                          >
                            <CheckCircle2
                              size={16}
                              className="mt-0.5 shrink-0 text-safari-gold"
                            />
                            {feature}
                          </li>
                        ))}
                      </ul>

                      <div className="mt-6 flex flex-col gap-2">
                        <a
                          href={whatsappLink(
                            `Hi Gayan! I'd like to book the ${pkg.title} at ${destination.name}.`
                          )}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center justify-center rounded-full bg-safari-gold px-5 py-2.5 text-sm font-semibold text-safari-dark transition-transform hover:scale-105"
                        >
                          Book Now
                        </a>
                        <a
                          href={whatsappLink(
                            `Hi Gayan! I have a question about the ${pkg.title} at ${destination.name}.`
                          )}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center justify-center gap-2 rounded-full bg-[#25D366]/15 px-5 py-2.5 text-sm font-semibold text-[#25D366] ring-1 ring-[#25D366]/30 transition-transform hover:scale-105"
                        >
                          <MessageCircle size={16} />
                          WhatsApp Inquiry
                        </a>
                      </div>
                    </div>
                  </div>
                </ScrollReveal>
                );
              })}
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Included free services */}
        <ScrollReveal className="mx-auto mt-24 max-w-2xl text-center">
          <span className="font-semibold uppercase tracking-wide text-safari-gold">
            On Every Booking
          </span>
          <h3 className="mt-3 font-display text-2xl font-bold text-safari-cream sm:text-3xl">
            Included Free With Every Safari
          </h3>
        </ScrollReveal>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {includedServices.map((service, i) => {
            const Icon = serviceIcons[service.icon];
            return (
              <ScrollReveal key={service.title} delay={i * 0.08}>
                <div className="group flex h-full flex-col items-center gap-4 rounded-2xl bg-white/5 p-7 text-center ring-1 ring-white/10 transition-all hover:-translate-y-1 hover:bg-white/8">
                  <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-safari-gold text-safari-dark transition-transform group-hover:scale-110">
                    <Icon size={26} />
                  </div>
                  <p className="font-display text-base font-bold text-safari-cream">
                    {service.title}
                  </p>
                </div>
              </ScrollReveal>
            );
          })}
        </div>

        {/* Sharing safari */}
        <ScrollReveal className="mt-24">
          <div className="overflow-hidden rounded-3xl border-2 border-dashed border-safari-gold/40 bg-linear-to-br from-safari-green/40 via-safari-dark to-safari-dark p-8 sm:p-12">
            <div className="flex flex-col items-start gap-6 lg:flex-row lg:items-center lg:justify-between">
              <div className="max-w-2xl">
                <span className="inline-flex items-center gap-2 rounded-full bg-safari-gold/15 px-4 py-1 text-xs font-semibold uppercase tracking-wide text-safari-gold ring-1 ring-safari-gold/30">
                  <Users size={14} />
                  Sharing Safari
                </span>
                <h3 className="mt-4 font-display text-2xl font-bold text-safari-cream sm:text-3xl">
                  Join a Shared Jeep, Travel for Less
                </h3>
                <p className="mt-4 text-safari-cream/70">
                  Prefer to share the adventure? Hop into a jeep with other
                  travelers heading into the park at the same time. It&apos;s
                  a relaxed, social way to experience the safari — perfect for
                  solo travelers and small groups.
                </p>
                <p className="mt-3 text-sm text-safari-cream/60">
                  Seats depend on existing bookings for that time slot, so
                  availability changes day to day. Message us on WhatsApp and
                  we&apos;ll confirm the best available option for your dates.
                </p>
              </div>

              <a
                href={whatsappLink(
                  "Hi Gayan! I'm interested in a Sharing Safari — could you check availability for me?"
                )}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex shrink-0 items-center justify-center gap-2 rounded-full bg-[#25D366] px-7 py-3.5 text-sm font-semibold text-white shadow-lg shadow-[#25D366]/20 transition-transform hover:scale-105"
              >
                <MessageCircle size={18} />
                Check Availability on WhatsApp
              </a>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
