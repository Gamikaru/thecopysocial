// src/components/features/About/AboutHero.tsx
"use client";

import React from "react";
import { motion } from "framer-motion";
import { Text } from '@/components/core/Typography';
import Image from "next/image";
import Icon from '@/components/core/Icon';

interface AboutHeroProps {
  title: string;
  content: string;
  imagePath?: string;
  imageAlt?: string;
}

const AboutHero: React.FC<AboutHeroProps> = ({
  title,
  content,
  imagePath = "/images/ashley_laughing_candid.jpeg",
  imageAlt = "Ashley Rudolph, professional copywriter",
}) => {
  // Split content into paragraphs for better typographic treatment
  const paragraphs = content.split(". ").filter(Boolean).map((p, i, arr) =>
    i === arr.length - 1 ? p : p + "."
  );

  return (
    <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
      {/* Text content with editorial typography */}
      <div className="md:col-span-6 md:col-start-2">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          {/* Editorial page indicator */}
          <div className="flex items-center mb-16">
            <div className="h-px w-16 bg-[var(--color-text-primary)] mr-4"></div>
            <span className="uppercase tracking-[0.3em] text-xs text-[var(--color-text-secondary)]">My Story</span>
          </div>

          {/* Dramatically oversized headline */}
          <div className="overflow-hidden mb-12">
            <motion.div
              initial={{ y: 100 }}
              animate={{ y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-none mb-6 text-[var(--color-text-primary)]">
                {title}
              </h1>

              <div className="h-px w-32 bg-[var(--color-accent-mauve)] mb-12"></div>
            </motion.div>
          </div>

          <div className="space-y-6">
            {paragraphs.map((paragraph, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 + (index * 0.1) }}
              >
                <Text
                  size="lg"
                  className="font-light leading-relaxed mb-0 text-[var(--color-text-secondary)]"
                >
                  {paragraph}
                </Text>
              </motion.div>
            ))}
          </div>

          {/* Editorial signature */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="mt-8"
          >
            <div className="font-serif italic text-xl flex items-center">
              <div className="h-px w-8 bg-[var(--color-accent-mauve)] mr-4"></div>
              Ashley
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Editorial imagery */}
      <motion.div
        className="md:col-span-4 md:col-start-8 relative mt-12 md:mt-0"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.3 }}
      >
        <div className="relative">
          {/* Sharp geometric frame */}
          <div className="absolute inset-0 border border-[var(--color-accent-sage)] transform translate-x-6 translate-y-6 z-0"></div>

          {/* Main image */}
          <div className="relative aspect-[3/4] overflow-hidden">
            <Image
              src={imagePath}
              alt={imageAlt}
              fill
              className="object-cover grayscale hover:grayscale-0 transition-all duration-700"
              sizes="(max-width: 768px) 100vw, 33vw"
            />

            {/* Editorial caption overlay */}
            <div className="absolute bottom-0 left-0 right-0 bg-[var(--color-bg-primary)]/90 py-3 px-4 flex justify-between items-center">
              <span className="uppercase tracking-wider text-xs">Founder & Copywriter</span>
              <span className="h-px w-12 bg-[var(--color-text-primary)]"></span>
            </div>
          </div>

          {/* Vertical text */}
          <div className="absolute -right-8 top-0 bottom-0 hidden md:flex items-center">
            <div className="transform -rotate-90 origin-center whitespace-nowrap uppercase tracking-[0.5em] text-xs text-[var(--color-text-tertiary)]">
              Est. 2022
            </div>
          </div>
        </div>
      </motion.div>

      {/* Editorial scroll indicator */}
      <div className="col-span-12 mt-12 flex justify-center">
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="flex flex-col items-center text-[var(--color-text-tertiary)]"
        >
          <Icon name="fi:FiArrowDown" size={16} className="mb-2" />
          <span className="uppercase tracking-[0.2em] text-xs">Scroll</span>
        </motion.div>
      </div>
    </div>
  );
};

export default AboutHero;