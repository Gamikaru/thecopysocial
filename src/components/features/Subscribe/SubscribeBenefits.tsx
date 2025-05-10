// src/components/features/Subscribe/SubscribeBenefits.tsx

"use client";

import React from "react";
import { motion } from "framer-motion";
import Icon from "@/components/core/Icon";
import { IconName } from "@/components/core/Icon";

interface Feature {
  title: string;
  description: string;
  iconName: string;
}

interface SubscribeBenefitsProps {
  features: Feature[];
}

const SubscribeBenefits: React.FC<SubscribeBenefitsProps> = ({ features }) => {
  return (
    <section className="py-24 bg-[var(--color-bg-secondary)] relative">
      {/* Editorial grid overlay */}
      <div className="absolute inset-0 grid grid-cols-12 pointer-events-none">
        {[...Array(12)].map((_, i) => (
          <div
            key={i}
            className="border-l border-[var(--color-text-primary)]/5 h-full"
          />
        ))}
      </div>

      {/* Background typography element */}
      <div className="absolute top-0 left-0 text-[25vw] leading-none font-bold tracking-tighter text-[var(--color-accent-mauve)]/[0.04] pointer-events-none z-0">
        PERKS
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-12 gap-8">
          <div className="col-span-12 md:col-span-10 md:col-start-2">
            <motion.div
              className="mb-16 text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
                What You&apos;ll Get
              </h2>
              <p className="text-[var(--color-text-secondary)] text-lg max-w-3xl mx-auto">
                When you join the newsletter, you&apos;ll receive exclusive content
                and resources to help elevate your copywriting and marketing
                efforts.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  className="bg-[var(--color-bg-primary)] p-8 border border-[var(--color-text-primary)]/10"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <div className="flex items-center justify-center mb-6">
                    <div className="w-16 h-16 border border-[var(--color-accent-mauve)] flex items-center justify-center">
                      <Icon
                        name={feature.iconName as IconName}
                        size={24}
                        className="text-[var(--color-accent-mauve)]"
                      />
                    </div>
                  </div>
                  <h3 className="text-xl font-bold tracking-tight mb-4 text-center">
                    {feature.title}
                  </h3>
                  <p className="text-[var(--color-text-secondary)] text-center font-light">
                    {feature.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SubscribeBenefits;
