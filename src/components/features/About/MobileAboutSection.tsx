// src/components/features/About/MobileAboutSection.tsx
"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Heading, Text } from '@/components/core/Typography';
import { fadeVariants } from '@/components/common/Animations/variants';
import Image from 'next/image';

interface AboutSectionProps {
  title: string;
  content: string[] | string;
  imagePath?: string;
  imagePosition?: 'left' | 'right' | 'none';
  className?: string;
  index?: number; // Used for staggered animations
}

const MobileAboutSection: React.FC<AboutSectionProps> = ({
  title,
  content,
  imagePath,
  className = "",
  index = 0,
}) => {
  // Convert content to array if it's a string
  const contentArray = Array.isArray(content) ? content : [content];

  // On mobile, we always show the image if it exists, regardless of position setting
  const showImage = !!imagePath;

  return (
    <motion.section
      className={`py-10 ${className}`}
      style={{ background: "var(--color-bg-primary)" }}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
    >
      <div className="px-5">
        <div className="flex flex-col">
          {/* Title */}
          <motion.div
            className="mb-6"
            variants={fadeVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
          >
            <div className="relative inline-block mb-4">
              <Heading level={2} className="text-3xl font-bold tracking-tight">
                {title}
              </Heading>
              {/* Decorative underline - mauve accent */}
              <div
                className="absolute -bottom-2 left-0 h-0.5 w-12 rounded-full"
                style={{ background: "var(--color-accent-mauve)", opacity: 0.5 }}
              ></div>
            </div>
          </motion.div>

          {/* Image - On mobile, we show the image before content if it exists */}
          {showImage && (
            <motion.div
              className="mb-6"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <div
                className="relative aspect-[4/3] w-full overflow-hidden shadow-md rounded-sm"
              >
                {imagePath ? (
                  <Image
                    src={imagePath}
                    alt={title}
                    fill
                    className="object-cover"
                    sizes="100vw"
                    style={{ border: "1px solid var(--color-accent-sage)" }}
                  />
                ) : (
                  <div className="bg-bg-tertiary h-full w-full flex items-center justify-center">
                    <span className="text-text-tertiary">Image</span>
                  </div>
                )}

                {/* Corner accent - simplified for mobile */}
                <div
                  className="absolute bottom-0 right-0 w-8 h-8 clip-corner-bl"
                  style={{ background: "var(--color-accent-mauve-20)" }}
                ></div>
              </div>
            </motion.div>
          )}

          {/* Text Content */}
          <div className="space-y-3">
            {contentArray.map((paragraph, pIndex) => (
              <motion.div
                key={pIndex}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.4, delay: 0.2 + (pIndex * 0.1) }}
              >
                <Text
                  size="base"
                  color="secondary"
                  className="relative text-[color:var(--color-text-secondary)]"
                >
                  {paragraph}
                </Text>
              </motion.div>
            ))}
          </div>

          {/* Optional quote decoration for mobile - simplified */}
          <div className="mt-4 pt-4 border-t border-[var(--color-accent-clay-20)]">
            <Text
              size="xs"
              color="tertiary"
              className="uppercase tracking-wider text-center"
            >
              {index + 1 < 10 ? `0${index + 1}` : index + 1} · {title}
            </Text>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default MobileAboutSection;