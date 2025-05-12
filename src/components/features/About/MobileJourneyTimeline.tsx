// src/components/features/About/MobileJourneyTimeline.tsx
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

const MobileJourneyTimeline: React.FC<JourneyTimelineProps> = ({
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
      className={`py-16 relative bg-[var(--color-bg-primary)] ${className}`}
    >
      {/* Simplified header for mobile */}
      <div className="px-6 mb-12">
        <div className="mb-4">
          <div className="h-px w-16 mb-4 bg-[var(--color-accent-mauve)]"></div>
          <div className="uppercase tracking-[0.2em] text-xs mb-2 text-[var(--color-text-tertiary)]">
            The Process
          </div>
          <Heading
            level={2}
            className="text-3xl font-bold tracking-tight mb-4 text-[var(--color-text-primary)]"
          >
            {title}
          </Heading>
        </div>

        <Text
          color="secondary"
          size="base"
          className="font-light leading-relaxed text-[var(--color-text-secondary)]"
        >
          {subtitle}
        </Text>
      </div>

      {/* Mobile timeline with vertical layout */}
      <div className="px-6">
        <div className="relative">
          {/* Vertical timeline line */}
          <div className="absolute left-3 top-0 bottom-0 w-px bg-[var(--color-accent-sage-20)]"></div>

          {/* Timeline sections */}
          <div className="space-y-16">
            {sections.map((section, index) => {
              const imagePath = imagePaths[index % imagePaths.length];
              const imageAlt = imageAlts[index % imageAlts.length];
              const timelinePeriod = timelinePeriods[index % timelinePeriods.length];

              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.5 }}
                  className="relative pl-10" // Padding for timeline indicator
                >
                  {/* Timeline dot indicator */}
                  <div className="absolute left-0 top-0 w-6 h-6 rounded-full bg-[var(--color-accent-sage-20)] border-2 border-[var(--color-accent-sage)] flex items-center justify-center">
                    <span className="text-xs font-medium text-[var(--color-text-primary)]">
                      {index + 1}
                    </span>
                  </div>

                  {/* Section content */}
                  <div className="mb-4">
                    {/* Time period tag */}
                    <div className="mb-2">
                      <span className="inline-block uppercase tracking-wider text-xs font-medium text-[var(--color-accent-sage-dark)] bg-[var(--color-accent-sage-10)] px-2 py-1">
                        {timelinePeriod}
                      </span>
                    </div>

                    {/* Section title */}
                    <Heading
                      level={3}
                      className="text-2xl font-bold tracking-tight mb-4 text-[var(--color-text-primary)]"
                    >
                      {section.title}
                    </Heading>

                    {/* Image - simplified for mobile */}
                    <div className="mb-4">
                      <div className="relative aspect-[3/2] overflow-hidden bg-gray-100 shadow-sm">
                        <Image
                          src={imagePath}
                          alt={imageAlt}
                          fill
                          className="object-cover"
                          sizes="100vw"
                        />

                        {/* Caption overlay - simplified */}
                        <div className="absolute bottom-0 left-0 right-0 py-2 px-3 bg-white/80">
                          <div className="text-xs">Chapter {index + 1}</div>
                        </div>
                      </div>
                    </div>

                    {/* Content - limit to first paragraph on mobile for brevity */}
                    <div className="space-y-3">
                      {section.content.slice(0, 1).map((paragraph: string, idx: number) => (
                        <motion.div
                          key={idx}
                          initial={{ opacity: 0, y: 10 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.4, delay: 0.1 }}
                        >
                          <Text className="font-light text-[var(--color-text-secondary)]">
                            {paragraph}
                          </Text>
                        </motion.div>
                      ))}

                      {/* "Read more" indicator if there are more paragraphs */}
                      {section.content.length > 1 && (
                        <div className="flex items-center mt-2">
                          <div className="h-px w-4 bg-[var(--color-accent-mauve-20)] mr-2"></div>
                          <span className="text-xs text-[var(--color-accent-mauve)] uppercase tracking-wider">More</span>
                        </div>
                      )}
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Simplified ending marker for mobile */}
        <div className="flex justify-center mt-12">
          <div className="text-center">
            <div className="w-px h-8 bg-[var(--color-text-primary)]/20 mx-auto mb-3"></div>
            <div className="uppercase tracking-[0.2em] text-xs font-light text-[var(--color-text-tertiary)]">
              End
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MobileJourneyTimeline;