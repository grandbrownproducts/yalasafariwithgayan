"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import { galleryImages } from "@/lib/data";
import ScrollReveal from "./ScrollReveal";

export default function Gallery() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const triggerRef = useRef<HTMLElement | null>(null);

  const close = () => {
    setActiveIndex(null);
    triggerRef.current?.focus();
  };
  const prev = () =>
    setActiveIndex((i) => (i === null ? null : (i - 1 + galleryImages.length) % galleryImages.length));
  const next = () =>
    setActiveIndex((i) => (i === null ? null : (i + 1) % galleryImages.length));

  const openAt = (i: number, e: React.MouseEvent<HTMLButtonElement>) => {
    triggerRef.current = e.currentTarget;
    setActiveIndex(i);
  };

  useEffect(() => {
    if (activeIndex === null) return;

    document.body.style.overflow = "hidden";
    closeButtonRef.current?.focus();

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      else if (e.key === "ArrowLeft") prev();
      else if (e.key === "ArrowRight") next();
    };
    document.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = "";
      document.removeEventListener("keydown", onKeyDown);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [activeIndex !== null]);

  return (
    <section id="gallery" className="bg-safari-cream py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <ScrollReveal className="mx-auto max-w-2xl text-center">
          <span className="font-semibold uppercase tracking-wide text-safari-gold">
            Gallery
          </span>
          <h2 className="mt-3 font-display text-3xl font-bold text-safari-green sm:text-4xl">
            Moments from the Wild
          </h2>
        </ScrollReveal>

        <div className="mt-14 [column-fill:balance] columns-1 gap-4 sm:columns-2 lg:columns-3">
          {galleryImages.map((img, i) => (
            <ScrollReveal key={img.src} delay={(i % 6) * 0.06} className="mb-4">
              <button
                onClick={(e) => openAt(i, e)}
                aria-label={`View larger image: ${img.alt}`}
                className="focus-ring group relative block w-full overflow-hidden rounded-2xl"
              >
                <Image
                  src={img.src}
                  alt={img.alt}
                  width={600}
                  height={i % 3 === 0 ? 750 : 450}
                  className="w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-linear-to-t from-black/30 via-transparent to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
              </button>
            </ScrollReveal>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {activeIndex !== null && (
          <motion.div
            role="dialog"
            aria-modal="true"
            aria-label={galleryImages[activeIndex].alt}
            className="fixed inset-0 z-90 flex items-center justify-center bg-black/90 p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={close}
          >
            <button
              ref={closeButtonRef}
              aria-label="Close lightbox"
              className="focus-ring absolute right-5 top-5 text-white/80 hover:text-white"
              onClick={close}
            >
              <X size={32} />
            </button>

            <button
              aria-label="Previous image"
              className="focus-ring absolute left-3 text-white/80 hover:text-white sm:left-8"
              onClick={(e) => {
                e.stopPropagation();
                prev();
              }}
            >
              <ChevronLeft size={40} />
            </button>

            <motion.div
              key={activeIndex}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="relative h-[70vh] w-full max-w-4xl"
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={galleryImages[activeIndex].src}
                alt={galleryImages[activeIndex].alt}
                fill
                sizes="(min-width: 1024px) 896px, 100vw"
                className="object-contain"
              />
            </motion.div>

            <button
              aria-label="Next image"
              className="focus-ring absolute right-3 text-white/80 hover:text-white sm:right-8"
              onClick={(e) => {
                e.stopPropagation();
                next();
              }}
            >
              <ChevronRight size={40} />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
