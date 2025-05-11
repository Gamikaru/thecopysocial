// src/components/features/About/DesktopApproachSteps.tsx
"use client";

import React from "react";
import { motion } from "framer-motion";
import { Heading, Text } from '@/components/core/Typography';
import Image from "next/image";

interface ApproachStep {
  title: string;
  content: string;
}

interface ApproachStepsProps {
  title?: string;
  subtitle?: string;
  steps: ApproachStep[];
  className?: string;
}

const DesktopApproachSteps: React.FC<ApproachStepsProps> = ({
  title = "My Approach",
  subtitle = "It all begins with an idea. Maybe you want to launch a business. Maybe you want to turn a hobby into something more. Or maybe you have a creative project to share with the world.",
  steps,
  className = "",
}) => {
  // Expanded content for each step
  const expandedContent = [
    {
      keyPoints: [
        "Authenticity over perfection",
        "Your unique voice matters",
        "Stand out from 1.5+ billion websites"
      ],
      image: "/images/peeping_over_book_funny.jpeg"
    },
    {
      keyPoints: [
        "Clarity builds confidence",
        "Evolve as your story grows",
        "Focus on what feels right now"
      ],
      image: "/images/ashley_laughing_candid.jpeg"
    }
  ];

  return (
    <section className={`py-32 relative bg-[var(--color-bg-secondary)] ${className}`}>
      {/* Editorial typographic background element */}
      <div className="absolute top-0 right-0 text-[30vw] leading-none font-bold tracking-tighter pointer-events-none select-none text-[var(--color-text-primary)]/[0.03]">
        APPROACH
      </div>

      <div className="container mx-auto px-6">
        {/* Minimal typographic header with editorial layout */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-32">
          <div className="md:col-span-4 md:col-start-1">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="uppercase tracking-[0.25em] text-xs font-light mb-3 text-[var(--color-text-tertiary)]">
                Philosophy
              </div>
              <Heading
                level={2}
                className="text-4xl md:text-5xl font-bold tracking-tight mb-4 text-[var(--color-text-primary)]"
              >
                {title}
              </Heading>
              <div className="h-px w-16 bg-[var(--color-accent-mauve)]"></div>
            </motion.div>
          </div>

          <div className="md:col-span-7 md:col-start-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <Text
                size="lg"
                className="font-light leading-relaxed mb-8 text-[var(--color-text-secondary)]"
              >
                {subtitle}
              </Text>

              {/* Pull quote - editorial feature */}
              <div className="border-l-2 border-[var(--color-accent-clay-20)] pl-6 py-2 my-12">
                <Text
                  size="xl"
                  italic
                  serif
                  className="leading-relaxed text-[var(--color-text-primary)]"
                >
                  &quot;Whatever it is, the way you tell your story online can make all the difference.&quot;
                </Text>
                <div className="mt-4 uppercase tracking-widest text-xs font-medium text-[var(--color-accent-mauve)]">
                  Ashley Rudolph
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Editorial steps with dramatic layout and typography */}
        <div className="space-y-32">
          {steps.map((step, index) => (
            <div key={index}>
              {/* Dramatically oversized step number */}
              <div className="overflow-hidden mb-12">
                <motion.div
                  initial={{ y: 100 }}
                  whileInView={{ y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8 }}
                >
                  <span className="inline-block text-[20vw] font-bold leading-none tracking-tighter text-[var(--color-accent-clay-10)]">
                    {index + 1}
                  </span>
                </motion.div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-center">
                {/* Text content with editorial layout */}
                <div className={`md:col-span-5 ${index % 2 === 0 ? 'md:col-start-1' : 'md:col-start-7'}`}>
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                  >
                    <Heading
                      level={3}
                      className="text-3xl md:text-4xl font-bold tracking-tight mb-8 text-[var(--color-text-primary)]"
                    >
                      {step.title}
                    </Heading>

                    <Text className="font-light leading-relaxed mb-12 text-[var(--color-text-secondary)]">
                      {step.content}
                    </Text>

                    {/* Key points with minimal design */}
                    <div className="space-y-6">
                      {expandedContent[index]?.keyPoints.map((point, idx) => (
                        <motion.div
                          key={idx}
                          initial={{ opacity: 0, x: -10 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.4, delay: 0.2 + (idx * 0.1) }}
                          className="flex items-start"
                        >
                          <div className="mr-4 pt-1">
                            <div className="w-4 h-px bg-[var(--color-accent-mauve)]"></div>
                          </div>
                          <Text
                            weight="medium"
                            className="mb-0 text-[var(--color-text-primary)]"
                          >
                            {point}
                          </Text>
                        </motion.div>
                      ))}
                    </div>
                  </motion.div>
                </div>

                {/* Editorial image treatment */}
                <div className={`md:col-span-6 ${index % 2 === 0 ? 'md:col-start-7' : 'md:col-start-1'}`}>
                  <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.3 }}
                    className="relative"
                  >
                    {/* Sharp geometric frame - sage accent */}
                    <div className="absolute inset-0 border border-[var(--color-accent-sage)] translate-x-6 translate-y-6 z-0"></div>

                    {/* High-contrast image */}
                    <div className="relative aspect-[5/6] overflow-hidden bg-gray-100">
                      <Image
                        src={expandedContent[index]?.image}
                        alt={`Illustration for ${step.title}`}
                        fill
                        className="object-cover grayscale hover:grayscale-0 transition-all duration-700"
                        sizes="(max-width: 768px) 100vw, 50vw"
                      />

                      {/* Overlay with split design - editorial feature */}
                      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/30"></div>

                      {/* Editorial caption overlay */}
                      <div className="absolute bottom-0 left-0 right-0 p-6">
                        <div className="flex justify-between items-end">
                          <div className="uppercase tracking-widest text-xs text-white font-medium">
                            Step {index + 1}
                          </div>
                          <div className="h-px w-16 bg-white/70"></div>
                        </div>
                      </div>
                    </div>

                    {/* Vertical text - editorial design element */}
                    <div className="absolute -right-10 top-0 bottom-0 flex items-center">
                      <div className="transform -rotate-90 origin-center whitespace-nowrap uppercase tracking-[0.5em] text-xs font-light">
                        {step.title}
                      </div>
                    </div>
                  </motion.div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Minimalist ending mark */}
        <div className="flex justify-center mt-32">
          <div className="h-12 w-px bg-black"></div>
        </div>
      </div>
    </section>
  );
};

export default DesktopApproachSteps;