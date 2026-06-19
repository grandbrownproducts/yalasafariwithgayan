import Image from "next/image";
import { wildlifeHighlights } from "@/lib/data";
import ScrollReveal from "./ScrollReveal";

export default function Wildlife() {
  return (
    <section className="bg-safari-dark py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <ScrollReveal className="mx-auto max-w-2xl text-center">
          <span className="font-semibold uppercase tracking-wide text-safari-gold">
            Wildlife Highlights
          </span>
          <h2 className="mt-3 font-display text-3xl font-bold text-safari-cream sm:text-4xl">
            Who You Might Meet in Yala
          </h2>
        </ScrollReveal>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {wildlifeHighlights.map((animal, i) => (
            <ScrollReveal key={animal.name} delay={i * 0.08}>
              <div className="group relative h-80 overflow-hidden rounded-2xl">
                <Image
                  src={animal.image}
                  alt={animal.name}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
