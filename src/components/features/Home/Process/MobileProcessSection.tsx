"use client";

import React from "react";
import { motion } from "framer-motion";
import { processSection } from '@/content/data/home';
import type { ProcessStep } from '@/content/types/types';

const MobileProcessSection: React.FC = () => {
  return (
    <section className="py-20 bg-[var(--color-bg-primary)] relative">
      {/* Simplified background typography element for mobile */}
      <div className="absolute top-5 right-0 text-[20vw] leading-none font-bold tracking-tighter text-[var(--color-accent-sage)]/[0.05] pointer-events-none z-0">
        PROCESS
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Mobile-optimized section header */}
        <motion.div
          className="mb-12"
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center mb-4">
            <div className="h-px w-12 bg-[var(--color-text-primary)] mr-4"></div>
            <span className="uppercase tracking-[0.2em] text-xs text-[var(--color-text-secondary)]">Process</span>
          </div>

          <h2 className="text-3xl font-bold tracking-tight mb-4 text-[var(--color-text-primary)]">
            {processSection.title}
          </h2>

          <p className="text-base text-[var(--color-text-secondary)] font-light leading-relaxed">
            {processSection.description}
          </p>

          {/* Simplified horizontal line */}
          <motion.div
            className="h-px bg-[var(--color-text-primary)]/10 w-full mt-8"
            initial={{ width: 0 }}
            whileInView={{ width: "100%" }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          />
        </motion.div>

        {/* Mobile vertical timeline */}
        <div className="relative">
          {/* Vertical timeline line */}
          <motion.div
            className="absolute left-[28px] top-0 bottom-0 w-px bg-[var(--color-accent-mauve)]/20"
            initial={{ height: 0 }}
            whileInView={{ height: "100%" }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, ease: "easeOut" }}
          />

          {/* Process steps with mobile-optimized layout */}
          {processSection.steps.map((step: ProcessStep, index: number) => (
            <motion.div
              key={step.number}
              className="relative pl-16 mb-16 last:mb-0"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              {/* Timeline node marker */}
              <div className="absolute left-[24px] top-[14px] w-[9px] h-[9px] border border-[var(--color-accent-mauve)] bg-[var(--color-bg-primary)] transform translate-x(-50%)"></div>

              {/* Step number */}
              <div className="absolute left-0 top-0 text-2xl font-bold leading-none text-[var(--color-accent-clay)]/60">
                {step.number}
              </div>

              {/* Step content */}
              <div>
                <h3 className="text-xl font-bold tracking-tight relative mb-3 text-[var(--color-text-primary)]">
                  {step.title}
                  <motion.div
                    className="absolute -bottom-1 left-0 h-[2px] bg-[var(--color-accent-mauve)]"
                    initial={{ width: 0 }}
                    whileInView={{ width: "30%" }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.2 }}
                  />
                </h3>

                <p className="text-[var(--color-text-secondary)] font-light leading-relaxed">
                  {step.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Simplified editorial page marker */}
        <motion.div
          className="mt-12 flex justify-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <div className="flex items-center text-[var(--color-text-tertiary)]">
            <div className="h-px w-8 bg-[var(--color-text-tertiary)] mr-3"></div>
            <span className="uppercase tracking-[0.2em] text-xs">004</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default MobileProcessSection;