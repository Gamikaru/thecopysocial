"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { introSection } from '@/content/data/home';
import { Heading, Text } from '@/components/core/Typography';

interface DesktopIntroProps {
  className?: string;
}

const DesktopIntro: React.FC<DesktopIntroProps> = () => {
  return (
    <section className="py-32 bg-[var(--color-bg-primary)] relative">
      {/* Editorial grid overlay */}
      <div className="absolute inset-0 grid grid-cols-12 pointer-events-none">
        {[...Array(12)].map((_, i) => (
          <div key={i} className="border-l border-[var(--color-text-primary)]/5 h-full" />
        ))}
      </div>

      {/* Editorial background typography element */}
      <div className="absolute -bottom-10 -right-20 text-[25vw] leading-none font-bold tracking-tighter text-[var(--color-text-primary)]/[0.02] pointer-events-none z-0">
        ASHLEY
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-12 gap-4 items-center">
          {/* Editorial column numbering */}
          <motion.div
            className="col-span-12 mb-24 flex"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="ml-auto flex items-center">
              <div className="h-px w-16 bg-[var(--color-text-primary)]/30 mr-4"></div>
              <span className="uppercase tracking-[0.3em] text-xs text-[var(--color-text-tertiary)]">About</span>
            </div>
          </motion.div>

          {/* Left column - Text content with editorial typography */}
          <motion.div
            className="col-span-12 md:col-span-5 md:col-start-2"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            {/* Introduction line */}
            <div className="flex items-center mb-12">
              <div className="h-px w-12 bg-[var(--color-text-primary)] mr-4"></div>
              <span className="uppercase tracking-[0.2em] text-xs text-[var(--color-text-secondary)]">Introduction</span>
            </div>

            {/* Statement headline - editorial style */}
            <div className="relative">
              <Heading
                level={2}
                className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-tight mb-2 text-[var(--color-text-primary)]"
                serif={true}
              >
                {introSection.title.split("I'm")[0]}
                <span className="relative inline-block">
                  I&apos;m <span className="text-bold">Ashley</span>
                  <motion.span
                    className="absolute -bottom-2 left-0 h-1 bg-[var(--color-accent-mauve)]"
                    initial={{ width: 0 }}
                    whileInView={{ width: "100%" }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                  />
                </span>
              </Heading>

              {/* Editorial label/annotation */}
              <div className="absolute -left-6 top-0 bottom-0 flex items-center">
                <div className="h-6 w-px bg-[var(--color-text-primary)]/30"></div>
              </div>
            </div>

            {/* Body copy with refined typography */}
            <motion.div
              className="mt-12 mb-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <Text
                size="lg"
                className="text-[var(--color-text-secondary)] font-light leading-relaxed"
              >
                {introSection.description.replace(/'/g, "&apos;")}
              </Text>
            </motion.div>

            {/* Editorial signature element */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <div className="font-serif italic text-xl mt-2 flex items-center">
                <div className="h-px w-8 bg-[var(--color-accent-mauve)] mr-4"></div>
                Ashley
              </div>
            </motion.div>
          </motion.div>

          {/* Right column - Editorial pull quote and image */}
          <div className="col-span-12 md:col-span-5 md:col-start-7 relative">
            {/* Editorial pull quote */}
            <motion.div
              className="mb-20 md:mb-24 relative"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              {/* Oversized quote marks */}
              <div className="absolute -top-16 -left-6 text-[8rem] leading-none font-serif text-[var(--color-text-primary)]/10 select-none pointer-events-none">
                &quot;
              </div>
              <div className="absolute -top-16 -right-6 text-[8rem] leading-none font-serif text-[var(--color-text-primary)]/10 select-none pointer-events-none transform rotate-180">
                &quot;
              </div>

              <Text
                as="div"
                size="xl"
                serif
                italic
                className="relative pl-6 py-2 border-l-2 border-[var(--color-accent-clay)] font-light"
              >
                I believe that your words should work as hard as you do.
              </Text>

              {/* Line detail */}
              <div className="h-px w-16 bg-[var(--color-accent-clay)]/50 mt-6 ml-6"></div>
            </motion.div>

            {/* Editorial image treatment */}
            <motion.div
              className="relative"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.3 }}
            >
              {/* Geometric frame */}
              <div className="absolute inset-0 border border-[var(--color-accent-sage)] transform translate-x-4 translate-y-4 z-0"></div>

              {/* Main image with editorial treatment */}
              <div className="relative aspect-[3/4] overflow-hidden">
                <Image
                  src="/images/body_no_face.jpeg"
                  alt={introSection.imageAlt}
                  fill
                  className="object-cover grayscale hover:grayscale-0 transition-all duration-700"
                  sizes="(max-width: 768px) 100vw, 40vw"
                />

                {/* Editorial image caption */}
                <div className="absolute bottom-0 left-0 right-0 py-3 px-4 bg-[var(--color-bg-primary)]/90 flex justify-between items-center">
                  <span className="uppercase tracking-wider text-xs">Founder & Copywriter</span>
                  <span className="h-px w-12 bg-[var(--color-text-primary)]"></span>
                </div>
              </div>

              {/* Vertical text element - editorial design feature */}
              <div className="absolute -right-10 top-0 bottom-0 flex items-center">
                <div className="transform -rotate-90 origin-center whitespace-nowrap uppercase tracking-[0.5em] text-xs text-[var(--color-text-tertiary)]">
                  Since 2022
                </div>
              </div>
            </motion.div>
          </div>

          {/* Editorial page marker at bottom */}
          <motion.div
            className="col-span-12 mt-16 flex justify-center"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <div className="flex items-center text-[var(--color-text-tertiary)]">
              <div className="h-px w-12 bg-[var(--color-text-tertiary)] mr-4"></div>
              <span className="uppercase tracking-[0.2em] text-xs">002</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default DesktopIntro;