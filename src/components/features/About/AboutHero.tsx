// src/components/sections/About/AboutHero.tsx
"use client";

import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { Text } from "../../../components/core/Typography";
import Image from "next/image";
import Icon from "../../../components/core/Icon";

interface AboutHeroProps {
  title: string;
  content: string;
  imagePath?: string;
  imageAlt?: string;
  className?: string;
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

  // Animation controls
  const controls = useAnimation();

  useEffect(() => {
    controls.start("visible");
  }, [controls]);

  return (
    <section
      className="relative min-h-screen flex items-center py-20"
      style={{
        background: "var(--color-bg-primary)",
        color: "var(--color-text-primary)",
      }}
    >
      {/* Editorial-style oversized letter as decorative element */}
      <div
        className="absolute top-0 -left-10 text-[32rem] font-serif opacity-5 leading-none select-none pointer-events-none z-0"
        style={{ color: "var(--color-text-primary)" }}
      >
        {title.charAt(0)}
      </div>

      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          {/* Editorial asymmetric column with dramatic typography - 7 columns */}
          <motion.div
            className="lg:col-span-7 lg:col-start-1 order-2 lg:order-1 relative z-10"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {/* Oversized "ABOUT" text as editorial design element */}
            <div className="mb-8">
              <div className="uppercase tracking-[0.5em] text-xs font-light mb-6"
                style={{ color: "var(--color-text-tertiary)" }}>
                The Story
              </div>

              <motion.div
                className="overflow-hidden"
                initial={{ y: 100 }}
                animate={{ y: 0 }}
                transition={{ duration: 1, ease: "easeOut" }}
              >
                <h1
                  className="text-[10vw] lg:text-[8rem] font-bold leading-none tracking-tighter mb-10"
                  style={{ color: "var(--color-text-primary)" }}
                >
                  {title}
                </h1>
                {/* Mauve underline */}
                <div
                  className="h-2 w-24 rounded-full mb-10"
                  style={{
                    background: "var(--color-accent-mauve)",
                    opacity: 0.5,
                  }}
                ></div>
              </motion.div>
            </div>

            {/* Content with literary typographic treatment */}
            <div className="space-y-8 max-w-2xl">
              {paragraphs.map((paragraph, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.5 + (index * 0.1) }}
                >
                  <Text
                    size="lg"
                    className="font-light leading-relaxed text-[color:var(--color-text-secondary)]"
                  >
                    {paragraph}
                  </Text>
                </motion.div>
              ))}
            </div>

            {/* Signature element with mauve underline */}
            <motion.div
              className="mt-16"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 1.2 }}
            >
              <div className="flex items-center">
                <div
                  className="h-px w-12 mr-6"
                  style={{ background: "var(--color-accent-mauve)" }}
                ></div>
                <div className="font-serif italic text-xl">Ashley</div>
              </div>
            </motion.div>
          </motion.div>

          {/* High-contrast editorial image - 5 columns with intentional positioning */}
          <motion.div
            className="lg:col-span-5 lg:col-start-8 order-1 lg:order-2 relative"
            initial={{ opacity: 0, scale: 1.1 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
          >
            <div className="relative">
              {/* Sage border frame */}
              <div
                className="absolute inset-0 border-2 -translate-x-4 translate-y-4 z-0"
                style={{ borderColor: "var(--color-accent-sage)" }}
              ></div>

              {/* Full-bleed editorial image */}
              <div className="relative aspect-[3/4] overflow-hidden">
                <Image
                  src={imagePath}
                  alt={imageAlt}
                  fill
                  className="object-cover grayscale hover:grayscale-0 transition-all duration-700"
                  sizes="(max-width: 768px) 100vw, 50vw"
                  priority
                />

                {/* Minimal typographic overlay */}
                <div
                  className="absolute bottom-0 left-0 right-0 p-6"
                  style={{
                    background: "rgba(255,255,255,0.9)",
                    color: "var(--color-text-primary)",
                  }}
                >
                  <div className="flex justify-between items-center">
                    <div className="uppercase tracking-widest text-xs">Founder & Copywriter</div>
                    <div
                      className="h-px w-12"
                      style={{ background: "var(--color-accent-sage)" }}
                    ></div>
                  </div>
                </div>
              </div>

              {/* Vertical text as editorial design element */}
              <div className="absolute -right-8 top-0 bottom-0 flex items-center">
                <div className="transform -rotate-90 origin-center whitespace-nowrap uppercase tracking-[0.5em] text-xs"
                  style={{ color: "var(--color-accent-sage-dark)" }}>
                  Est. 2022
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Editorial page marker */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex items-center">
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          <Icon name="fi:FiArrowDown" className="text-black" size={18} />
        </motion.div>
      </div>
    </section>
  );
};

export default AboutHero;