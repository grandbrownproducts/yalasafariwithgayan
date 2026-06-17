import Image from "next/image";
import { CheckCircle2, Clock } from "lucide-react";
import { safariPackages } from "@/lib/data";
import { whatsappLink } from "@/lib/site-config";
import ScrollReveal from "./ScrollReveal";

export default function Packages() {
  return (
    <section id="packages" className="bg-safari-dark py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <ScrollReveal className="mx-auto max-w-2xl text-center">
          <span className="font-semibold uppercase tracking-wide text-safari-gold">
            Safari Packages
          </span>
          <h2 className="mt-3 font-display text-3xl font-bold text-safari-cream sm:text-4xl">
            Choose Your Yala Adventure
          </h2>
          <p className="mt-4 text-safari-cream/70">
            From sunrise tracking to private full-day expeditions — there&apos;s
            a safari experience designed for every traveler.
          </p>
        </ScrollReveal>

        <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {safariPackages.map((pkg, i) => (
            <ScrollReveal key={pkg.slug} delay={i * 0.1}>
              <div className="group flex h-full flex-col overflow-hidden rounded-2xl bg-white/5 ring-1 ring-white/10 transition-transform hover:-translate-y-2">
                <div className="relative h-52 w-full overflow-hidden">
                  <Image
                    src={pkg.image}
                    alt={pkg.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute right-3 top-3 flex items-center gap-1 rounded-full bg-safari-dark/80 px-3 py-1 text-xs font-medium text-safari-gold-light">
                    <Clock size={14} />
                    {pkg.duration}
                  </div>
                </div>

                <div className="flex flex-1 flex-col p-6">
                  <h3 className="font-display text-xl font-bold text-safari-cream">
                    {pkg.title}
                  </h3>
                  <p className="mt-2 flex-1 text-sm text-safari-cream/70">
                    {pkg.description}
                  </p>

                  <ul className="mt-4 space-y-2">
                    {pkg.features.map((feature) => (
                      <li
                        key={feature}
                        className="flex items-start gap-2 text-sm text-safari-cream/80"
                      >
                        <CheckCircle2 size={16} className="mt-0.5 shrink-0 text-safari-gold" />
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <a
                    href={whatsappLink(`Hi Gayan! I'd like to book the ${pkg.title}.`)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-6 inline-flex items-center justify-center rounded-full bg-safari-gold px-5 py-2.5 text-sm font-semibold text-safari-dark transition-transform hover:scale-105"
                  >
                    Book Now
                  </a>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
