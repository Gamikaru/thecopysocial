// src/components/features/Subscribe/SubscribeHero.tsx

"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

interface SubscribeHeroProps {
  title: string;
  description: string;
}

const SubscribeHero: React.FC<SubscribeHeroProps> = ({
  title,
  description,
}) => {
  return (
    <section className="pt-36 pb-24 relative">
      {/* Editorial grid overlay */}
      <div className="absolute inset-0 grid grid-cols-12 pointer-events-none">
        {[...Array(12)].map((_, i) => (
          <div
            key={i}
            className="border-l border-[var(--color-text-primary)]/5 h-full"
          />
        ))}
      </div>

      <div className="container mx-auto px-6">
        <div className="grid grid-cols-12 gap-4">
          {/* Editorial section marker */}
          <motion.div
            className="col-span-12 mb-16"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex items-center">
              <div className="h-px w-16 bg-[var(--color-text-primary)] mr-4"></div>
              <span className="uppercase tracking-[0.3em] text-xs text-[var(--color-text-secondary)]">
                Newsletter 001
              </span>
            </div>
          </motion.div>

          {/* Hero Content */}
          <motion.div
            className="col-span-12 md:col-span-5 md:col-start-2"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6 text-[var(--color-text-primary)]">
              {title}
            </h1>

            <p className="text-lg text-[var(--color-text-secondary)] font-light leading-relaxed">
              {description}
            </p>
          </motion.div>

          {/* Hero Image - Editorial treatment */}
          <motion.div
            className="col-span-12 md:col-span-4 md:col-start-8 relative mt-12 md:mt-0"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {/* Editorial image frame */}
            <div className="absolute inset-0 border border-[var(--color-accent-mauve)] transform translate-x-4 translate-y-4 z-0"></div>

            <div className="relative aspect-[4/3] overflow-hidden">
              <Image
                src="/images/new_chapter.jpeg"
                alt="Newsletter subscription"
                fill
                className="object-cover grayscale hover:grayscale-0 transition-all duration-700"
              />

              {/* Editorial image caption */}
              <div className="absolute bottom-0 left-0 right-0 py-3 px-4 bg-[var(--color-bg-primary)]/90 flex justify-between items-center">
                <span className="uppercase tracking-wider text-xs text-[var(--color-text-secondary)]">
                  Stay Updated
                </span>
                <span className="h-px w-12 bg-[var(--color-text-primary)]"></span>
              </div>
            </div>

            {/* Decorative element */}
            <div className="absolute -bottom-4 -left-4 w-24 h-24 border border-[var(--color-accent-mauve)] rounded-full -z-10"></div>
          </motion.div>

          {/* Editorial horizontal rule */}
          <motion.div
            className="col-span-12 mt-16"
            initial={{ width: 0 }}
            whileInView={{ width: "100%" }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
          >
            <div className="h-px w-full bg-[var(--color-text-primary)]/10"></div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default SubscribeHero;
