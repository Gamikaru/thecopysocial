// src/components/features/Subscribe/SubscribeCTA.tsx

"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";

interface SubscribeCTAProps {
  text: string;
  buttonText: string;
  formId: string;
}

const SubscribeCTA: React.FC<SubscribeCTAProps> = ({
  text,
  buttonText,
  formId,
}) => {
  return (
    <section className="py-32 bg-[var(--color-accent-navy)] text-[var(--color-text-on-accent)] relative">
      {/* Editorial grid overlay */}
      <div className="absolute inset-0 grid grid-cols-12 pointer-events-none">
        {[...Array(12)].map((_, i) => (
          <div
            key={i}
            className="border-l border-[var(--color-text-on-accent)]/5 h-full"
          />
        ))}
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
          <motion.div
            className="md:col-span-7 md:col-start-3"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            {/* Editorial section marker */}
            <div className="flex items-center mb-16">
              <div className="h-px w-16 bg-[var(--color-text-on-accent)]/30 mr-4"></div>
              <span className="uppercase tracking-[0.3em] text-xs text-[var(--color-text-on-accent)]/70">
                Join Now
              </span>
            </div>

            {/* CTA Title with dramatic typography */}
            <motion.h2
              className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-8"
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              {text}
            </motion.h2>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <Link
                href={`#${formId}`}
                className="inline-flex items-center border border-[var(--color-text-on-accent)] px-8 py-4 uppercase tracking-widest text-sm font-light hover:bg-[var(--color-text-on-accent)] hover:text-[var(--color-accent-navy)] transition-colors group"
              >
                <span>{buttonText}</span>
                <motion.span
                  className="ml-6 h-px bg-[var(--color-text-on-accent)] group-hover:bg-[var(--color-accent-navy)] transition-colors"
                  initial={{ width: 24 }}
                  whileInView={{ width: 48 }}
                  viewport={{ once: true }}
                />
              </Link>
            </motion.div>
          </motion.div>
        </div>

        {/* Editorial signature */}
        <motion.div
          className="mt-24 flex justify-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <div className="text-center">
            <div className="uppercase tracking-[0.5em] text-xs text-[var(--color-text-on-accent)]/50 mb-4">
              The Copy Social
            </div>
            <div className="font-serif italic text-2xl text-[var(--color-accent-mauve-light)]">
              Ashley
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default SubscribeCTA;
