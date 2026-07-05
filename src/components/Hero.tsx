"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { whatsappLink } from "@/lib/site-config";

const heroImages = [
  {
    src: "/wildlife/leopard-walking-road.jpeg",
    alt: "Sri Lankan leopard walking along a jungle road in Yala National Park",
  },
  {
    src: "/wildlife/tusker-elephant-walking.jpeg",
    alt: "Tusker elephant walking through the grasslands of Yala National Park",
  },
  {
    src: "/wildlife/sambar-deer.jpeg",
    alt: "Sambar deer stag in the grasslands of Yala National Park",
  },
  {
    src: "/wildlife/peacock-on-stump.jpeg",
    alt: "Peacock displaying its feathers in Yala National Park",
  },
];

export default function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "35%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);
  const prefersReducedMotion = useReducedMotion();

  const [activeSlide, setActiveSlide] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (prefersReducedMotion || paused) return;
    const timer = setInterval(() => {
      setActiveSlide((i) => (i + 1) % heroImages.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [prefersReducedMotion, paused]);

  return (
    <section
      id="home"
      ref={ref}
      className="relative flex h-screen min-h-160 w-full items-center justify-center overflow-hidden"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <motion.div style={{ y }} className="absolute inset-0 -z-10 h-[135%]">
        {heroImages.map((image, i) => (
          <motion.div
            key={image.src}
            className="absolute inset-0"
            initial={false}
            animate={{ opacity: activeSlide === i ? 1 : 0 }}
            transition={{ duration: 1.2, ease: "easeInOut" }}
          >
            <Image
              src={image.src}
              alt={image.alt}
              fill
              priority={i === 0}
              quality={95}
              sizes="100vw"
              className="object-cover"
            />
          </motion.div>
        ))}
        <div className="absolute inset-0 bg-linear-to-b from-black/60 via-black/40 to-safari-dark" />
      </motion.div>

      <motion.div
        style={{ opacity }}
        className="relative z-10 mx-auto flex max-w-4xl flex-col items-center px-6 text-center"
      >
        <motion.span
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="mb-5 rounded-full border border-safari-gold/50 bg-white/10 px-5 py-1.5 text-sm font-medium text-safari-gold-light backdrop-blur-sm"
        >
          Yala National Park, Sri Lanka
        </motion.span>

        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.35 }}
          className="font-display text-balance text-4xl font-bold leading-tight text-white sm:text-5xl md:text-6xl lg:text-7xl"
        >
          Discover the Wild Beauty with{" "}
          <span className="text-safari-gold">Yala Gaya Safari</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-6 max-w-2xl text-balance text-base text-white/85 sm:text-lg md:text-xl"
        >
          Experience unforgettable wildlife adventures in Sri Lanka&apos;s most
          famous national park.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.65 }}
          className="mt-10 flex flex-col gap-4 sm:flex-row"
        >
          <a
            href="#packages"
            className="focus-ring rounded-full bg-safari-gold px-8 py-3.5 text-base font-semibold text-safari-dark shadow-lg transition-transform hover:scale-105"
          >
            Book Your Safari
          </a>
          <a
            href={whatsappLink("Hi Gayan! I'd like to know more about your safaris.")}
            target="_blank"
            rel="noopener noreferrer"
            className="focus-ring rounded-full border border-white/40 bg-white/10 px-8 py-3.5 text-base font-semibold text-white backdrop-blur-sm transition-transform hover:scale-105 hover:bg-white/20"
          >
            WhatsApp Us
          </a>
        </motion.div>

        <div className="mt-10 flex items-center gap-2.5" role="group" aria-label="Hero image selector">
          {heroImages.map((image, i) => (
            <button
              key={image.src}
              aria-label={`Show image ${i + 1} of ${heroImages.length}`}
              aria-current={activeSlide === i}
              onClick={() => setActiveSlide(i)}
              className={`focus-ring h-2.5 rounded-full transition-all ${
                activeSlide === i
                  ? "w-7 bg-safari-gold"
                  : "w-2.5 bg-white/40 hover:bg-white/70"
              }`}
            />
          ))}
        </div>
      </motion.div>

      <motion.div
        className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2 text-white/80"
        animate={prefersReducedMotion ? {} : { y: [0, 10, 0] }}
        transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
      >
        <ChevronDown size={32} />
      </motion.div>
    </section>
  );
}
