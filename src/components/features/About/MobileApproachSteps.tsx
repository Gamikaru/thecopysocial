// src/components/features/About/MobileApproachSteps.tsx
"use client";

import React from "react";
import { motion } from "framer-motion";
import { Heading, Text } from "@/components/core/Typography";
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

const MobileApproachSteps: React.FC<ApproachStepsProps> = ({
  title = "My Approach",
  subtitle = "It all begins with an idea. Maybe you want to launch a business. Maybe you want to turn a hobby into something more. Or maybe you have a creative project to share with the world.",
  steps,
  className = "",
}) => {
  // Expanded content for each step - reused from desktop version
  const expandedContent = [
    {
      keyPoints: [
        "Authenticity over perfection",
        "Your unique voice matters",
        "Stand out from 1.5+ billion websites",
      ],
      image: "/images/peeping_over_book_funny.jpeg",
    },
    {
      keyPoints: [
        "Clarity builds confidence",
        "Evolve as your story grows",
        "Focus on what feels right now",
      ],
      image: "/images/ashley_laughing_candid.jpeg",
    },
  ];

  return (
    <section
      className={`py-16 relative bg-[var(--color-bg-secondary)] ${className}`}
    >
      {/* Mobile-optimized header section */}
      <div className="px-6 mb-12">
        {/* Section label */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="mb-4"
        >
          <div className="uppercase tracking-[0.2em] text-xs font-light text-[var(--color-text-tertiary)]">
            Philosophy
          </div>
          <Heading
            level={2}
            className="text-3xl font-bold tracking-tight mb-3 text-[var(--color-text-primary)]"
          >
            {title}
          </Heading>
          <div className="h-px w-12 bg-[var(--color-accent-mauve)]"></div>
        </motion.div>

        {/* Subtitle */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.1 }}
        >
          <Text
            size="base"
            className="font-light leading-relaxed text-[var(--color-text-secondary)]"
          >
            {subtitle}
          </Text>
        </motion.div>

        {/* Mobile-sized pull quote */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.2 }}
          className="border-l border-[var(--color-accent-clay-20)] pl-4 py-2 my-8"
        >
          <Text
            size="base"
            italic
            serif
            className="leading-relaxed text-[var(--color-text-primary)]"
          >
            &quot;Whatever it is, the way you tell your story online can make
            all the difference.&quot;
          </Text>
          <div className="mt-2 uppercase tracking-wider text-xs font-medium text-[var(--color-accent-mauve)]">
            Ashley Rudolph
          </div>
        </motion.div>
      </div>

      {/* Steps Section - Card-based layout for mobile */}
      <div className="px-6">
        <div className="space-y-16">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="relative"
            >
              {/* Step indicator - top-right corner circle */}
              <div className="absolute -top-4 -right-2 w-10 h-10 rounded-full bg-[var(--color-accent-clay-10)] flex items-center justify-center z-10">
                <span className="text-lg font-bold text-[var(--color-accent-clay)]">
                  {index + 1}
                </span>
              </div>

              {/* Step content card */}
              <div className="border border-[var(--color-text-primary)]/10 bg-[var(--color-bg-primary)] p-5 shadow-sm">
                {/* Image - at the top for mobile */}
                <div className="mb-5">
                  <div className="relative aspect-[3/2] overflow-hidden bg-gray-100">
                    <Image
                      src={expandedContent[index]?.image}
                      alt={`Illustration for ${step.title}`}
                      fill
                      className="object-cover grayscale hover:grayscale-0 transition-all duration-500"
                      sizes="100vw"
                    />

                    {/* Simplified caption overlay */}
                    <div className="absolute bottom-0 left-0 right-0 py-2 px-3 bg-[var(--color-bg-primary)]/80">
                      <span className="text-xs uppercase tracking-wider">
                        Step {index + 1}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Title and content */}
                <Heading
                  level={3}
                  className="text-2xl font-bold tracking-tight mb-3 text-[var(--color-text-primary)]"
                >
                  {step.title}
                </Heading>

                <Text
                  className="font-light mb-5 text-[var(--color-text-secondary)]"
                  size="sm"
                >
                  {step.content}
                </Text>

                {/* Key points - simplified for mobile */}
                <div className="space-y-3 mt-4 pt-4 border-t border-[var(--color-text-primary)]/10">
                  {expandedContent[index]?.keyPoints.map((point, idx) => (
                    <div key={idx} className="flex items-start">
                      <div className="mr-3 pt-1">
                        <div className="w-3 h-px bg-[var(--color-accent-mauve)]"></div>
                      </div>
                      <Text
                        size="sm"
                        weight="medium"
                        className="mb-0 text-[var(--color-text-primary)]"
                      >
                        {point}
                      </Text>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Simple ending mark */}
      <div className="flex justify-center mt-16">
        <div className="h-8 w-px bg-[var(--color-text-primary)]/20"></div>
      </div>
    </section>
  );
};

export default MobileApproachSteps;
