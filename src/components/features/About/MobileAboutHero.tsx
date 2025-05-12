// src/components/features/About/MobileAboutHero.tsx
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

const MobileAboutHero: React.FC<AboutHeroProps> = ({
  title,
  content,
  imagePath = "/images/ashley_laughing_candid.jpeg",
  imageAlt = "Ashley Rudolph, professional copywriter",
}) => {
  // Split content into paragraphs
  const paragraphs = content.split(". ").filter(Boolean).map((p, i, arr) =>
    i === arr.length - 1 ? p : p + "."
  );

  // For mobile, we'll limit to first paragraph plus ellipsis for brevity
  const mobileParagraphs = paragraphs.length > 1
    ? [paragraphs[0], "..."]
    : paragraphs;

  return (
    <div className="flex flex-col">
      {/* Editorial page indicator - simplified for mobile */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="mb-8"
      >
        <div className="flex items-center">
          <div className="h-px w-12 bg-[var(--color-text-primary)] mr-3"></div>
          <span className="uppercase tracking-[0.2em] text-xs text-[var(--color-text-secondary)]">My Story</span>
        </div>
      </motion.div>

      {/* Image - positioned before text on mobile */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="mb-8"
      >
        <div className="relative">
          {/* Simplified frame for mobile */}
          <div className="absolute inset-0 border border-[var(--color-accent-sage)] transform translate-x-4 translate-y-4 z-0"></div>

          {/* Main image - adjusted aspect ratio for mobile */}
          <div className="relative aspect-[4/5] overflow-hidden">
            <Image
              src={imagePath}
              alt={imageAlt}
              fill
              className="object-cover grayscale hover:grayscale-0 transition-all duration-700"
              sizes="100vw"
              priority
            />

            {/* Simplified caption overlay */}
            <div className="absolute bottom-0 left-0 right-0 bg-[var(--color-bg-primary)]/90 py-2 px-3">
              <span className="uppercase tracking-wider text-xs">Founder & Copywriter</span>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Title - more compact for mobile */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="mb-6"
      >
        <h1 className="text-4xl font-bold tracking-tight leading-tight mb-4 text-[var(--color-text-primary)]">
          {title}
        </h1>
        <div className="h-px w-24 bg-[var(--color-accent-mauve)] mb-6"></div>
      </motion.div>

      {/* Content - shorter paragraphs for mobile */}
      <div className="space-y-4">
        {mobileParagraphs.map((paragraph, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.3 + (index * 0.1) }}
          >
            <Text
              size="base"
              className="font-light leading-relaxed mb-0 text-[var(--color-text-secondary)]"
            >
              {paragraph}
            </Text>
          </motion.div>
        ))}
      </div>

      {/* Signature - simplified for mobile */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.5 }}
        className="mt-6 flex justify-end"
      >
        <div className="font-serif italic text-lg">
          Ashley
        </div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        className="flex flex-col items-center mt-8 text-[var(--color-text-tertiary)]"
      >
        <Icon name="fi:FiArrowDown" size={14} className="mb-1" />
        <span className="uppercase tracking-[0.15em] text-xs">Scroll</span>
      </motion.div>
    </div>
  );
};

export default MobileAboutHero;