"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { introSection } from '@/content/data/home';
import { Heading, Text } from '@/components/core/Typography';

const MobileIntro: React.FC = () => {
  return (
    <section className="py-20 bg-[var(--color-bg-primary)] relative">
      {/* Simplified background typography element for mobile */}
      <div className="absolute -bottom-5 right-0 text-[20vw] leading-none font-bold tracking-tighter text-[var(--color-text-primary)]/[0.02] pointer-events-none z-0">
        ASHLEY
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Mobile-optimized section header */}
        <motion.div
          className="mb-10 flex items-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="h-px w-12 bg-[var(--color-text-primary)] mr-4"></div>
          <span className="uppercase tracking-[0.2em] text-xs text-[var(--color-text-secondary)]">Introduction</span>
        </motion.div>

        {/* Statement headline - editorial style, optimized for mobile */}
        <motion.div
          className="relative mb-10"
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <Heading
            level={2}
            className="text-3xl font-bold tracking-tight leading-tight mb-2 text-[var(--color-text-primary)]"
            serif={true}
          >
            {introSection.title.split("I'm")[0]}
            <span className="relative inline-block">
              I&apos;m <span className="text-bold">Ashley</span>
              <motion.span
                className="absolute -bottom-1 left-0 h-[2px] bg-[var(--color-accent-mauve)]"
                initial={{ width: 0 }}
                whileInView={{ width: "100%" }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
              />
            </span>
          </Heading>
        </motion.div>

        {/* Editorial pull quote - positioned above the image on mobile */}
        <motion.div
          className="mb-8 relative"
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          {/* Smaller quote marks for mobile */}
          <div className="absolute -top-6 -left-2 text-[3rem] leading-none font-serif text-[var(--color-text-primary)]/10 select-none pointer-events-none">
            &quot;
          </div>

          <Text
            as="div"
            size="lg"
            serif
            italic
            className="relative pl-4 border-l-2 border-[var(--color-accent-clay)] font-light"
          >
            I believe that your words should work as hard as you do.
          </Text>

          {/* Line detail */}
          <div className="h-px w-12 bg-[var(--color-accent-clay)]/50 mt-4 ml-4"></div>
        </motion.div>

        {/* Mobile image treatment */}
        <motion.div
          className="relative mb-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          {/* Simplified geometric frame for mobile */}
          <div className="absolute inset-0 border border-[var(--color-accent-sage)] transform translate-x-3 translate-y-3 z-0"></div>

          {/* Main image with editorial treatment */}
          <div className="relative aspect-[4/5] overflow-hidden">
            <Image
              src="/images/body_no_face.jpeg"
              alt={introSection.imageAlt}
              fill
              className="object-cover grayscale hover:grayscale-0 transition-all duration-700"
              sizes="(max-width: 768px) 90vw, 40vw"
            />

            {/* Editorial image caption - simplified for mobile */}
            <div className="absolute bottom-0 left-0 right-0 py-2 px-3 bg-[var(--color-bg-primary)]/90 flex justify-between items-center">
              <span className="uppercase tracking-wider text-xs">Founder & Copywriter</span>
              <span className="h-px w-8 bg-[var(--color-text-primary)]"></span>
            </div>
          </div>
        </motion.div>

        {/* Body copy with refined typography - after the image on mobile */}
        <motion.div
          className="mb-8"
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <Text
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
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <div className="font-serif italic text-xl mt-2 flex items-center">
            <div className="h-px w-6 bg-[var(--color-accent-mauve)] mr-3"></div>
            Ashley
          </div>
        </motion.div>

        {/* Simplified editorial page marker for mobile */}
        <motion.div
          className="mt-12 flex justify-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <div className="flex items-center text-[var(--color-text-tertiary)]">
            <div className="h-px w-8 bg-[var(--color-text-tertiary)] mr-3"></div>
            <span className="uppercase tracking-[0.2em] text-xs">002</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default MobileIntro;