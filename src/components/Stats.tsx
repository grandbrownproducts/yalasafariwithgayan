import { stats } from "@/lib/data";
import ScrollReveal from "./ScrollReveal";
import AnimatedCounter from "./AnimatedCounter";

export default function Stats() {
  return (
    <section className="bg-safari-green py-16 sm:py-20">
      <div className="mx-auto grid max-w-7xl grid-cols-2 gap-10 px-6 lg:grid-cols-4 lg:px-8">
        {stats.map((stat, i) => (
          <ScrollReveal key={stat.label} delay={i * 0.1} className="text-center">
            <AnimatedCounter value={stat.value} suffix={stat.suffix} />
            <p className="mt-2 text-sm font-medium text-safari-cream/80 sm:text-base">
              {stat.label}
            </p>
          </ScrollReveal>
        ))}
      </div>
    </section>
  );
}
