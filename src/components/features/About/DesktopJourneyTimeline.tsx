// src/components/features/About/DesktopJourneyTimeline.tsx
"use client";

import React from "react";
import { motion } from "framer-motion";
import { Heading, Text } from '@/components/core/Typography';
import Image from "next/image";
import { AboutSection } from '@/content/types/types';

interface JourneyTimelineProps {
  title?: string;
  subtitle?: string;
  sections: AboutSection[];
  className?: string;
}

const DesktopJourneyTimeline: React.FC<JourneyTimelineProps> = ({
  title = "My Journey",
  subtitle = "Every path has twists and turns. Here's how my story unfolded.",
  sections,
  className = "",
}) => {
  // Define image paths that correspond to each section
  const imagePaths = [
    "/images/ashley_on_her_laptop.jpeg",
    "/images/ashley_on_the_phone.jpeg",
    "/images/ashley_on_the_stairs.jpeg",
    "/images/peeping_over_book_funny.jpeg",
  ];

  // Define image alt text for each image
  const imageAlts = [
    "Ashley working on laptop",
    "Ashley on a phone call",
    "Ashley sitting on stairs",
    "Ashley peeking over a book",
  ];

  // Timeline periods for each section
  const timelinePeriods = [
    "Present Day",
    "2016-2022",
    "The Turning Point",
    "Looking Forward"
  ];

  return (
    <section
      className={`py-32 relative bg-[var(--color-bg-primary)] ${className}`}
    >
      {/* Minimal typographic header */}
      <div className="container mx-auto px-6 mb-24">
        <div className="max-w-5xl">
          <div className="grid grid-cols-12 gap-6">
            <div className="col-span-12 md:col-span-4">
              <div className="h-px w-20 mb-6 bg-[var(--color-accent-mauve)]"></div>
              <div className="uppercase tracking-[0.25em] text-xs mb-2 text-[var(--color-text-tertiary)]">
                The Process
              </div>
              <Heading
                level={2}
                className="text-4xl md:text-5xl font-bold tracking-tight mb-0 text-[var(--color-text-primary)]"
              >
                {title}
              </Heading>
            </div>
            <div className="col-span-12 md:col-span-8 md:pt-16">
              <Text
                color="secondary"
                size="lg"
                className="max-w-2xl font-light leading-relaxed text-[var(--color-text-secondary)]"
              >
                {subtitle}
              </Text>
            </div>
          </div>
        </div>
      </div>

      {/* Editorial timeline sections */}
      <div className="container mx-auto px-6">
        {sections.map((section, index) => {
          const imagePath = imagePaths[index % imagePaths.length];
          const imageAlt = imageAlts[index % imageAlts.length];
          const timelinePeriod = timelinePeriods[index % timelinePeriods.length];

          return (
            <motion.div
              key={index}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
              className="mb-40 last:mb-0"
            >
              <div className="grid grid-cols-12 gap-6">
                {/* CHAPTER NUMBER - Dramatically oversized */}
                <div className="col-span-12 mb-12">
                  <div className="overflow-hidden">
                    <motion.div
                      initial={{ y: 100 }}
                      whileInView={{ y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.8 }}
                    >
                      <span className="inline-block text-[15vw] md:text-[20vw] font-bold leading-none text-[var(--color-accent-clay-10)]">
                        {String(index + 1).padStart(2, '0')}
                      </span>
                    </motion.div>
                  </div>
                </div>

                {/* CONTENT LAYOUT - Editorial, asymmetrical grid */}
                <div className={`col-span-12 md:col-span-6 ${index % 2 === 0 ? 'md:col-start-1' : 'md:col-start-7'}`}>
                  {/* Time period - typographic detail */}
                  <div className="mb-4">
                    <div className="flex items-center">
                      <div className="h-px w-8 mr-4 bg-[var(--color-accent-sage)]"></div>
                      <span className="uppercase tracking-widest text-xs font-medium text-[var(--color-accent-sage-dark)]">
                        {timelinePeriod}
                      </span>
                    </div>
                  </div>

                  {/* Section title - editorial typography */}
                  <Heading
                    level={3}
                    className="text-3xl md:text-4xl font-bold tracking-tight mb-8 relative text-[var(--color-text-primary)]"
                  >
                    {section.title}
                    <div className="absolute -left-12 top-1/2 transform -translate-y-1/2 w-8 h-px hidden md:block bg-[var(--color-accent-mauve)]"></div>
                  </Heading>

                  {/* Content with literary typographic treatment */}
                  <div className="space-y-6 mb-12">
                    {section.content.map((paragraph: string, idx: number) => (
                      <motion.div
                        key={idx}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 + (idx * 0.1) }}
                      >
                        <Text className="font-light leading-relaxed">
                          {paragraph}
                        </Text>
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* EDITORIAL IMAGE - Sharp geometric treatment */}
                <div className={`col-span-12 md:col-span-5 ${index % 2 === 0 ? 'md:col-start-8' : 'md:col-start-1'}`}>
                  <motion.div
                    className="relative"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.3 }}
                  >
                    {/* Sage border frame */}
                    <div className="absolute inset-0 border border-[var(--color-accent-sage)] transform translate-x-4 -translate-y-4 z-0"></div>

                    {/* High-contrast image */}
                    <div className="relative aspect-[4/5] overflow-hidden bg-gray-100">
                      <Image
                        src={imagePath}
                        alt={imageAlt}
                        fill
                        className="object-cover grayscale hover:grayscale-0 transition-all duration-700"
                        sizes="(max-width: 768px) 100vw, 40vw"
                      />

                      {/* Minimal caption overlay */}
                      <div className="absolute bottom-0 left-0 right-0 py-3 px-4 bg-white/80">
                        <div className="uppercase tracking-widest text-xs">Chapter {index + 1}</div>
                      </div>
                    </div>

                    {/* Vertical text as editorial design element - only on desktop */}
                    <div className="absolute -right-8 top-0 bottom-0 md:flex items-center hidden">
                      <div className="transform -rotate-90 origin-center whitespace-nowrap uppercase tracking-[0.5em] text-xs font-light">
                        {section.title}
                      </div>
                    </div>
                  </motion.div>
                </div>
              </div>

              {/* Sharp timeline connector - only between sections */}
              {index < sections.length - 1 && (
                <div className="my-24 flex justify-center">
                  <div className="h-24 w-px bg-[var(--color-accent-sage)]"></div>
                </div>
              )}
            </motion.div>
          );
        })}

        {/* Editorial ending marker */}
        <div className="flex justify-center mt-16">
          <div className="text-center">
            <div className="w-px h-12 bg-black mx-auto mb-6"></div>
            <div className="uppercase tracking-[0.25em] text-xs font-light">
              Continue Reading
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DesktopJourneyTimeline;