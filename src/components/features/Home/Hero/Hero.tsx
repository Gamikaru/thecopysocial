// src/components/sections/Hero/Hero.tsx
"use client";

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { heroSection } from '@/content/data/home';
import Icon from '@/components/core/Icon';
import { EditorialButton } from '@/components/common/Buttons';

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-[100vh] bg-[var(--color-bg-primary)] overflow-hidden pt-20">
      {/* Editorial grid overlay - fashion magazine style */}
      <div className="absolute inset-0 grid grid-cols-12 pointer-events-none">
        {[...Array(12)].map((_, i) => (
          <div key={i} className="border-l border-[var(--color-text-primary)]/5 h-full" />
        ))}
      </div>

      {/* Oversized typography background element */}
      <div className="absolute -top-20 -left-20 text-[30vw] leading-none font-bold tracking-tighter text-[var(--color-text-primary)]/[0.03] pointer-events-none">
        COPY
      </div>

      <div className="container mx-auto px-6 h-full">
        <div className="grid grid-cols-12 gap-4 h-full">
          {/* Editorial asymmetric column layout */}
          <div className="col-span-12 md:col-span-6 lg:col-span-5 md:col-start-2 flex items-center">
            <div className="pt-28 md:pt-0">
              {/* Editorial page indicator */}
              <motion.div
                className="mb-16 flex items-center"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1, delay: 0.2 }}
              >
                <div className="h-px w-16 bg-[var(--color-text-primary)]"></div>
                <span className="ml-4 uppercase tracking-[0.3em] text-xs">Home 001</span>
              </motion.div>

              {/* Dramatically oversized headline with editorial treatment */}
              <div className="overflow-hidden">
                <motion.h1
                  className="text-[5rem] md:text-[8rem] lg:text-[10rem] font-bold tracking-tight leading-[0.9] uppercase mb-12 text-[var(--color-text-primary)]"
                  initial={{ y: 150 }}
                  animate={{ y: 0 }}
                  transition={{ duration: 1, ease: "easeOut" }}
                >
                  <span className="block text-[1.5rem] md:text-[2rem] uppercase tracking-[0.2em] font-light mb-4">
                    Professional Copywriter
                  </span>
                  Words
                  <span className="block">That</span>
                  <span className="inline-block relative">
                    <motion.span
                      className="absolute -bottom-2 md:-bottom-3 left-0 h-1 md:h-2 bg-[var(--color-accent-mauve)] w-0"
                      initial={{ width: 0 }}
                      animate={{ width: "100%" }}
                      transition={{ duration: 1.5, delay: 1 }}
                    />
                    <span className="relative z-10">Work</span>
                  </span>
                </motion.h1>
              </div>

              {/* Editorial subheadline */}
              <motion.p
                className="text-lg text-[var(--color-text-secondary)] max-w-md mb-16 font-light"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.8 }}
              >
                {heroSection.subheadline}
              </motion.p>

              {/* Editorial call to action */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 1 }}
                className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-6"
              >
                {/* Primary CTA Button: black fill, white text */}
                <EditorialButton
                  href={heroSection.cta.link}
                  variant="accent"
                  color="light"
                  size="lg"
                  className="w-full sm:w-auto"
                  forceBackgroundColor="!bg-black"
                  forceTextColor="!text-white"
                  uppercase
                >
                  {heroSection.cta.text}
                </EditorialButton>

                {/* Secondary Portfolio Button: no fill, black text */}
                <EditorialButton
                  href="/portfolio"
                  variant="bordered"
                  color="primary"
                  size="lg"
                  icon="fi:FiArrowRight"
                  iconPosition="right"
                  className="w-full sm:w-auto"
                  forceBackgroundColor="!bg-transparent"
                  forceTextColor="!text-black"
                  uppercase
                >
                  Portfolio
                </EditorialButton>
              </motion.div>
            </div>
          </div>

          {/* Editorial imagery with geometric framing - Adjusted to not cover header */}
          <motion.div
            className="col-span-12 md:col-span-5 lg:col-span-4 md:col-start-8 relative flex items-center justify-center py-12 md:py-12 mt-12 md:mt-20"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
          >
            <div className="relative">
              {/* Sharp geometric frames */}
              <div className="absolute -top-4 -left-4 right-20 bottom-20 border border-[var(--color-text-primary)]"></div>
              <div className="absolute -bottom-4 -right-4 left-20 top-20 border border-[var(--color-text-primary)]"></div>

              {/* Main image with editorial treatment */}
              <div className="relative h-[65vh] max-h-[700px] aspect-[3/4] overflow-hidden">
                <Image
                  src="/images/peeping_over_book_funny.jpeg"
                  alt="Ashley Rudolph, Copywriter"
                  fill
                  className="object-cover grayscale hover:grayscale-0 transition-all duration-700"
                  priority
                  sizes="(max-width: 768px) 100vw, 33vw"
                />

                {/* Editorial image caption overlay */}
                <div className="absolute bottom-0 left-0 right-0 bg-[var(--color-bg-primary)]/90 py-3 px-4 flex justify-between items-center">
                  <span className="uppercase tracking-wider text-xs">Ashley Rudolph</span>
                  <span className="h-px w-12 bg-[var(--color-text-primary)]"></span>
                </div>
              </div>

              {/* Vertical text element - editorial design feature */}
              <div className="absolute -right-12 top-0 bottom-0 flex items-center">
                <div className="transform -rotate-90 origin-center whitespace-nowrap uppercase tracking-[0.5em] text-xs text-[var(--color-text-tertiary)]">
                  Founder / Writer / Strategist
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Editorial page indicator */}
      <motion.div
        className="absolute bottom-12 left-6 md:left-12"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.5 }}
      >
        <div className="flex items-center">
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, repeatType: "loop" }}
          >
            <Icon name="fi:FiArrowDown" size={20} className="text-[var(--color-text-primary)]" />
          </motion.div>
          <div className="ml-4 h-px w-8 bg-[var(--color-text-primary)]"></div>
          <span className="ml-4 uppercase tracking-wider text-xs">Scroll</span>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;