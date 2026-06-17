"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { navLinks } from "@/lib/data";
import { siteConfig } from "@/lib/site-config";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 z-50 w-full transition-all duration-300 ${
        scrolled
          ? "bg-safari-dark/95 shadow-lg backdrop-blur-sm"
          : "bg-transparent"
      }`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 lg:px-8">
        <Link href="#home" className="font-display text-xl text-safari-cream sm:text-2xl">
          {siteConfig.shortName}
        </Link>

        <ul className="hidden items-center gap-8 lg:flex">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="text-sm font-medium text-safari-cream/90 transition-colors hover:text-safari-gold"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <a
          href="#packages"
          className="hidden rounded-full bg-safari-gold px-6 py-2.5 text-sm font-semibold text-safari-dark transition-transform hover:scale-105 lg:inline-block"
        >
          Book Your Safari
        </a>

        <button
          aria-label="Toggle menu"
          className="text-safari-cream lg:hidden"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X size={28} /> : <Menu size={28} />}
        </button>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="overflow-hidden bg-safari-dark/98 lg:hidden"
          >
            <ul className="flex flex-col gap-1 px-5 pb-6">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className="block py-3 text-safari-cream/90 transition-colors hover:text-safari-gold"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
              <li>
                <a
                  href="#packages"
                  onClick={() => setOpen(false)}
                  className="mt-2 block rounded-full bg-safari-gold px-6 py-3 text-center text-sm font-semibold text-safari-dark"
                >
                  Book Your Safari
                </a>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
