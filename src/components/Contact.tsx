"use client";

import { useState, type FormEvent } from "react";
import { Mail, MapPin, MessageCircle } from "lucide-react";
import { siteConfig, whatsappLink } from "@/lib/site-config";
import ScrollReveal from "./ScrollReveal";

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // UI-only submission — wire up an email/CRM service here when ready.
    setSubmitted(true);
  };

  return (
    <section id="contact" className="bg-safari-cream py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <ScrollReveal className="mx-auto max-w-2xl text-center">
          <span className="font-semibold uppercase tracking-wide text-safari-gold">
            Contact
          </span>
          <h2 className="mt-3 font-display text-3xl font-bold text-safari-green sm:text-4xl">
            Plan Your Yala Safari Today
          </h2>
        </ScrollReveal>

        <div className="mt-14 grid gap-10 lg:grid-cols-2">
          <ScrollReveal className="space-y-6">
            <div className="rounded-2xl bg-white p-7 shadow-sm ring-1 ring-safari-green/10">
              <h3 className="font-display text-xl font-bold text-safari-green">
                {siteConfig.name}
              </h3>
              <div className="mt-5 space-y-4 text-safari-dark/80">
                <p className="flex items-center gap-3">
                  <MapPin size={20} className="shrink-0 text-safari-gold" />
                  {siteConfig.location}
                </p>
                <p className="flex items-center gap-3">
                  <Mail size={20} className="shrink-0 text-safari-gold" />
                  <a href={`mailto:${siteConfig.email}`} className="hover:text-safari-green">
                    {siteConfig.email}
                  </a>
                </p>
                <p className="flex items-center gap-3">
                  <MessageCircle size={20} className="shrink-0 text-safari-gold" />
                  {siteConfig.phoneDisplay}
                </p>
              </div>

              <a
                href={whatsappLink("Hi Gayan! I'd like to plan a Yala safari.")}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 inline-flex items-center gap-2 rounded-full bg-[#25D366] px-6 py-3 text-sm font-semibold text-white transition-transform hover:scale-105"
              >
                <MessageCircle size={18} />
                Chat on WhatsApp
              </a>
            </div>

            <div className="h-64 overflow-hidden rounded-2xl shadow-sm ring-1 ring-safari-green/10">
              <iframe
                src={siteConfig.mapEmbedUrl}
                title="Yala National Park location map"
                className="h-full w-full border-0"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.15}>
            <form
              onSubmit={handleSubmit}
              className="space-y-5 rounded-2xl bg-white p-7 shadow-sm ring-1 ring-safari-green/10"
            >
              <div>
                <label className="mb-1.5 block text-sm font-medium text-safari-dark/80">
                  Full Name
                </label>
                <input
                  required
                  type="text"
                  className="w-full rounded-lg border border-safari-green/20 px-4 py-2.5 outline-none focus:border-safari-gold focus:ring-2 focus:ring-safari-gold/30"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label className="mb-1.5 block text-sm font-medium text-safari-dark/80">
                  Email
                </label>
                <input
                  required
                  type="email"
                  className="w-full rounded-lg border border-safari-green/20 px-4 py-2.5 outline-none focus:border-safari-gold focus:ring-2 focus:ring-safari-gold/30"
                  placeholder="you@example.com"
                />
              </div>
              <div>
                <label className="mb-1.5 block text-sm font-medium text-safari-dark/80">
                  Message
                </label>
                <textarea
                  required
                  rows={4}
                  className="w-full rounded-lg border border-safari-green/20 px-4 py-2.5 outline-none focus:border-safari-gold focus:ring-2 focus:ring-safari-gold/30"
                  placeholder="Tell us about the safari you'd like to book..."
                />
              </div>

              <button
                type="submit"
                className="w-full rounded-full bg-safari-green px-6 py-3 text-sm font-semibold text-safari-cream transition-transform hover:scale-[1.02]"
              >
                Send Message
              </button>

              {submitted && (
                <p className="text-center text-sm font-medium text-safari-green">
                  Thanks! We&apos;ll get back to you shortly.
                </p>
              )}
            </form>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
