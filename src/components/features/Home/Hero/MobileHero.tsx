"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { heroSection } from "@/content/data/home";
import Icon from "@/components/core/Icon";

const MobileHero: React.FC = () => {
  return (
    <section className="relative min-h-[100vh] bg-[var(--color-bg-primary)] overflow-hidden pt-20">
      {/* Simplified background typography for mobile */}
      <div className="absolute -top-10 -left-10 text-[30vw] leading-none font-bold tracking-tighter text-[var(--color-text-primary)]/[0.02] pointer-events-none">
        COPY
      </div>

      <div className="container mx-auto px-6 h-full">
        <div className="flex flex-col h-full pt-10">
          {/* Editorial page indicator - simplified for mobile */}
          <motion.div
            className="mb-8 flex items-center"
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="h-px w-12 bg-[var(--color-text-primary)]"></div>
            <span className="ml-4 uppercase tracking-[0.2em] text-xs">
              Home 001
            </span>
          </motion.div>

          {/* Dramatically simplified headline for mobile */}
          <div className="overflow-hidden mb-8">
            <motion.h1
              className="text-[3.5rem] font-bold tracking-tight leading-[0.9] uppercase mb-6 text-[var(--color-text-primary)]"
              initial={{ y: 80 }}
              animate={{ y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <span className="block text-base uppercase tracking-[0.2em] font-light mb-3">
                Professional Copywriter
              </span>
              Words
              <span className="block">That</span>
              <span className="inline-block relative">
                <motion.span
                  className="absolute -bottom-1 left-0 h-1 bg-[var(--color-accent-mauve)] w-0"
                  initial={{ width: 0 }}
                  animate={{ width: "100%" }}
                  transition={{ duration: 1.2, delay: 0.8 }}
                />
                <span className="relative z-10">Work</span>
              </span>
            </motion.h1>
          </div>

          {/* Mobile-optimized subheadline */}
          <motion.p
            className="text-base text-[var(--color-text-secondary)] mb-10 font-light max-w-[280px]"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            {heroSection.subheadline}
          </motion.p>

          {/* Mobile-optimized call to action - stacked buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="space-y-4 mb-10"
          >
            <Link
              href={heroSection.cta.link}
              className="block py-4 w-full bg-[var(--color-accent-navy)] text-[var(--color-text-on-accent)] text-center uppercase tracking-widest text-sm font-light hover:bg-[var(--color-accent-navy-dark)] transition-colors"
            >
              {heroSection.cta.text}
            </Link>

            <Link
              href="/portfolio"
              className="block py-4 w-full border border-[var(--color-text-primary)] text-center uppercase tracking-widest text-sm font-light hover:bg-[var(--color-text-primary)] hover:text-[var(--color-bg-primary)] transition-colors group"
            >
              Portfolio
              <span className="ml-3 h-px w-4 inline-block bg-[var(--color-text-primary)] group-hover:bg-[var(--color-bg-primary)] transition-colors"></span>
            </Link>
          </motion.div>

          {/* Image - centered on mobile */}
          <motion.div
            className="w-full relative flex justify-center mb-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
          >
            <div className="relative">
              {/* Sharp geometric frames - simplified for mobile */}
              <div className="absolute -top-3 -left-3 right-16 bottom-16 border border-[var(--color-text-primary)]"></div>
              <div className="absolute -bottom-3 -right-3 left-16 top-16 border border-[var(--color-text-primary)]"></div>

              {/* Main image with editorial treatment */}
              <div className="relative h-[65vh] max-h-[500px] aspect-[3/4] overflow-hidden">
                <Image
                  src="/images/peeping_over_book_funny.jpeg"
                  alt="Ashley Rudolph, Copywriter"
                  fill
                  className="object-cover grayscale hover:grayscale-0 transition-all duration-700"
                  priority
                  sizes="(max-width: 768px) 90vw, 33vw"
                />

                {/* Editorial image caption overlay */}
                <div className="absolute bottom-0 left-0 right-0 bg-[var(--color-bg-primary)]/90 py-2 px-3 flex justify-between items-center">
                  <span className="uppercase tracking-wider text-xs">
                    Ashley Rudolph
                  </span>
                  <span className="h-px w-8 bg-[var(--color-text-primary)]"></span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Mobile scroll indicator at bottom */}
          <motion.div
            className="absolute bottom-8 left-0 right-0 flex justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1.5 }}
          >
            <div className="flex flex-col items-center">
              <span className="uppercase tracking-wider text-xs mb-2">
                Scroll
              </span>
              <motion.div
                animate={{ y: [0, 8, 0] }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  repeatType: "loop",
                }}
              >
                <Icon
                  name="fi:FiArrowDown"
                  size={16}
                  className="text-[var(--color-text-primary)]"
                />
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default MobileHero;
