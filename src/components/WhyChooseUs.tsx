import {
  Binoculars,
  Bird,
  HeartHandshake,
  PawPrint,
  Truck,
  Wallet,
} from "lucide-react";
import { whyChooseUs, type Feature } from "@/lib/data";
import ScrollReveal from "./ScrollReveal";

const icons: Record<Feature["icon"], typeof Binoculars> = {
  guide: Binoculars,
  jeep: Truck,
  leopard: PawPrint,
  bird: Bird,
  family: HeartHandshake,
  price: Wallet,
};

export default function WhyChooseUs() {
  return (
    <section className="bg-safari-cream py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <ScrollReveal className="mx-auto max-w-2xl text-center">
          <span className="font-semibold uppercase tracking-wide text-safari-gold">
            Why Choose Us
          </span>
          <h2 className="mt-3 font-display text-3xl font-bold text-safari-green sm:text-4xl">
            What Makes Our Safaris Different
          </h2>
        </ScrollReveal>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {whyChooseUs.map((feature, i) => {
            const Icon = icons[feature.icon];
            return (
              <ScrollReveal key={feature.title} delay={i * 0.08}>
                <div className="group h-full rounded-2xl bg-white p-7 shadow-sm ring-1 ring-safari-green/10 transition-all hover:-translate-y-1 hover:shadow-xl">
                  <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-safari-green text-safari-gold transition-colors group-hover:bg-safari-gold group-hover:text-safari-dark">
                    <Icon size={28} />
                  </div>
                  <h3 className="mt-5 font-display text-lg font-bold text-safari-green">
                    {feature.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-safari-dark/70">
                    {feature.description}
                  </p>
                </div>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
