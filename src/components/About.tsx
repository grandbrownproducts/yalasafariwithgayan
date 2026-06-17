import Image from "next/image";
import { CheckCircle2 } from "lucide-react";
import ScrollReveal from "./ScrollReveal";

const points = [
  "Experienced local safari guide born and raised near Yala",
  "Personalized safari experiences tailored to your interests",
  "Deep knowledge of Yala National Park's terrain and wildlife",
  "Safe and comfortable tours in well-maintained 4x4 jeeps",
  "Fluent English-speaking guide for international travelers",
];

export default function About() {
  return (
    <section id="about" className="bg-safari-cream py-20 sm:py-28">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-6 lg:grid-cols-2 lg:px-8">
        <ScrollReveal>
          <div className="relative h-[420px] w-full overflow-hidden rounded-3xl shadow-2xl sm:h-[500px]">
            <Image
              src="https://images.unsplash.com/photo-1516815231560-8f41ec531527?q=80&w=1200&auto=format&fit=crop"
              alt="Safari guide Gayan leading a tour in Yala National Park"
              fill
              className="object-cover"
            />
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.15}>
          <span className="font-semibold uppercase tracking-wide text-safari-gold">
            About Us
          </span>
          <h2 className="mt-3 font-display text-3xl font-bold text-safari-green sm:text-4xl">
            Your Trusted Guide to Yala&apos;s Untamed Wilderness
          </h2>
          <p className="mt-5 text-base leading-relaxed text-safari-dark/80 sm:text-lg">
            Gayan has spent over a decade exploring every trail and waterhole
            of Yala National Park. What started as a passion for wildlife
            tracking has grown into a trusted safari service loved by
            travelers from around the world — built on safety, authenticity,
            and an unmatched eye for spotting the park&apos;s most elusive
            residents.
          </p>

          <ul className="mt-8 space-y-4">
            {points.map((point) => (
              <li key={point} className="flex items-start gap-3">
                <CheckCircle2 className="mt-0.5 shrink-0 text-safari-gold" size={22} />
                <span className="text-safari-dark/85">{point}</span>
              </li>
            ))}
          </ul>
        </ScrollReveal>
      </div>
    </section>
  );
}
