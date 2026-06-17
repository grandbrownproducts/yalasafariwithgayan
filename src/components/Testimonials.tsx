import Image from "next/image";
import { Star } from "lucide-react";
import { testimonials } from "@/lib/data";
import ScrollReveal from "./ScrollReveal";

export default function Testimonials() {
  return (
    <section id="testimonials" className="bg-safari-dark py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <ScrollReveal className="mx-auto max-w-2xl text-center">
          <span className="font-semibold uppercase tracking-wide text-safari-gold">
            Testimonials
          </span>
          <h2 className="mt-3 font-display text-3xl font-bold text-safari-cream sm:text-4xl">
            What Our Travelers Say
          </h2>
        </ScrollReveal>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((t, i) => (
            <ScrollReveal key={t.name} delay={i * 0.08}>
              <div className="flex h-full flex-col rounded-2xl bg-white/5 p-7 ring-1 ring-white/10">
                <div className="flex gap-1 text-safari-gold">
                  {Array.from({ length: t.rating }).map((_, idx) => (
                    <Star key={idx} size={16} fill="currentColor" strokeWidth={0} />
                  ))}
                </div>
                <p className="mt-4 flex-1 text-sm leading-relaxed text-safari-cream/85">
                  &ldquo;{t.text}&rdquo;
                </p>
                <div className="mt-6 flex items-center gap-3">
                  <div className="relative h-11 w-11 overflow-hidden rounded-full">
                    <Image src={t.image} alt={t.name} fill className="object-cover" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-safari-cream">{t.name}</p>
                    <p className="text-xs text-safari-cream/60">{t.country}</p>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
