// src/components/sections/About/AboutSection.tsx
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

const AboutSection: React.FC<AboutSectionProps> = ({
  title,
  content,
  imagePath,
  imagePosition = 'none',
  className = "",
  index = 0,
}) => {
  // Convert content to array if it's a string
  const contentArray = Array.isArray(content) ? content : [content];

  // Determine if we should render an image
  const showImage = imagePath && imagePosition !== 'none';

  // Grid classes based on image position
  const gridClasses = showImage
    ? "grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
    : "";

  // Order classes for image positioning
  const textOrderClass = imagePosition === 'left' ? 'lg:order-last' : '';
  const imageOrderClass = imagePosition === 'right' ? 'lg:order-last' : '';

  return (
    <motion.section
      className={`py-16 ${className}`}
      style={{ background: "var(--color-bg-primary)" }}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
    >
      <div className="container mx-auto px-5 md:px-8">
        <div className={showImage ? gridClasses : "max-w-3xl mx-auto"}>
          {/* Text Content */}
          <motion.div
            className={`${textOrderClass} relative`}
            variants={fadeVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            <div className="relative inline-block mb-6">
              <Heading level={2} align={showImage ? "left" : "center"}>
                {title}
              </Heading>
              {/* Decorative underline - mauve accent */}
              <div
                className="absolute -bottom-2 left-0 h-1 w-16 rounded-full"
                style={{ background: "var(--color-accent-mauve)", opacity: 0.5 }}
              ></div>
            </div>

            <div className="space-y-4">
              {contentArray.map((paragraph, pIndex) => (
                <Text
                  key={pIndex}
                  size="lg"
                  color="secondary"
                  className="relative text-[color:var(--color-text-secondary)]"
                >
                  {pIndex === 0 && (
                    <span
                      className="absolute -left-8 top-0 text-4xl font-serif hidden md:block"
                      style={{ color: "var(--color-accent-clay-20)" }}
                    >
                      &quot;
                    </span>
                  )}
                  {paragraph}
                  {pIndex === contentArray.length - 1 && (
                    <span
                      className="absolute -right-4 bottom-0 text-4xl font-serif hidden md:block"
                      style={{ color: "var(--color-accent-clay-20)" }}
                    >
                      &quot;
                    </span>
                  )}
                </Text>
              ))}
            </div>

            {/* Decorative element */}
            {showImage && imagePosition === 'right' && (
              <div className="absolute -right-12 top-1/2 transform -translate-y-1/2 hidden xl:block">
                <div
                  className="w-24 h-0.5"
                  style={{ background: "var(--color-accent-mauve-20)" }}
                ></div>
              </div>
            )}
            {showImage && imagePosition === 'left' && (
              <div className="absolute -left-12 top-1/2 transform -translate-y-1/2 hidden xl:block">
                <div
                  className="w-24 h-0.5"
                  style={{ background: "var(--color-accent-mauve-20)" }}
                ></div>
              </div>
            )}
          </motion.div>

          {/* Image (if provided) */}
          {showImage && (
            <motion.div
              className={imageOrderClass}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <motion.div
                className="relative aspect-square w-full rounded-lg overflow-hidden shadow-xl"
                whileHover={{ scale: 1.03 }}
                transition={{ duration: 0.4 }}
              >
                {imagePath ? (
                  <Image
                    src={imagePath}
                    alt={title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 50vw"
                    style={{ border: "2px solid var(--color-accent-sage)" }}
                  />
                ) : (
                  <div className="bg-bg-tertiary h-full w-full flex items-center justify-center">
                    <span className="text-text-tertiary">Image</span>
                  </div>
                )}

                {/* Corner accent */}
                <div
                  className="absolute bottom-0 right-0 w-16 h-16 clip-corner-bl"
                  style={{ background: "var(--color-accent-mauve-20)" }}
                ></div>
              </motion.div>
            </motion.div>
          )}
        </div>
      </div>
    </motion.section>
  );
};

export default AboutSection;