"use client";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { useEffect, useState } from "react";

const SESSION_KEY = "yala-gaya-safari-loaded";

export default function LoadingScreen() {
  const prefersReducedMotion = useReducedMotion();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const alreadyShown = window.sessionStorage.getItem(SESSION_KEY);
    window.sessionStorage.setItem(SESSION_KEY, "1");

    const delay = alreadyShown || prefersReducedMotion ? 0 : 700;
    const timer = setTimeout(() => setLoading(false), delay);
    return () => clearTimeout(timer);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          className="fixed inset-0 z-100 flex flex-col items-center justify-center bg-safari-dark"
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
        >
          <motion.span
            className="font-display text-3xl text-safari-gold tracking-wide"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
          >
            Yala Gaya Safari
          </motion.span>
          <motion.div
            className="mt-6 h-0.75 w-32 overflow-hidden rounded-full bg-white/10"
          >
            <motion.div
              className="h-full w-full bg-safari-gold"
              initial={{ x: "-100%" }}
              animate={{ x: "100%" }}
              transition={{ duration: 0.9, repeat: Infinity, ease: "easeInOut" }}
            />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
