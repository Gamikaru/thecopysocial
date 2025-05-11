"use client";

import React from "react";
import { motion } from "framer-motion";
import { processSection } from '@/content/data/home';
import type { ProcessStep } from '@/content/types/types';

const DesktopProcessSection: React.FC = () => {
  return (
    <section className="py-32 bg-[var(--color-bg-primary)] relative">
      {/* Editorial grid overlay */}
      <div className="absolute inset-0 grid grid-cols-12 pointer-events-none">
        {[...Array(12)].map((_, i) => (
          <div key={i} className="border-l border-[var(--color-text-primary)]/5 h-full" />
        ))}
      </div>

      {/* Editorial background typography element */}
      <div className="absolute top-0 right-0 text-[25vw] leading-none font-bold tracking-tighter text-[var(--color-accent-sage)]/[0.1] pointer-events-none z-0">
        PROCESS
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-12 gap-4">
          {/* Editorial section header */}
          <motion.div
            className="col-span-12 mb-24"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex items-center mb-6">
              <div className="h-px w-16 bg-[var(--color-text-primary)] mr-4"></div>
              <span className="uppercase tracking-[0.3em] text-xs text-[var(--color-text-secondary)]">Process 004</span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
              <div className="md:col-span-5 md:col-start-2">
                <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-6 text-[var(--color-text-primary)]">
                  {processSection.title}
                </h2>
              </div>

              <div className="md:col-span-5 md:col-start-7">
                <p className="text-lg text-[var(--color-text-secondary)] font-light leading-relaxed">
                  {processSection.description}
                </p>
              </div>
            </div>

            {/* Editorial horizontal line */}
            <motion.div
              className="h-px bg-[var(--color-text-primary)]/10 w-full mt-16"
              initial={{ width: 0 }}
              whileInView={{ width: "100%" }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
            />
          </motion.div>

          {/* Editorial process timeline */}
          <div className="col-span-12 relative">
            {/* Vertical timeline line */}
            <motion.div
              className="absolute left-[28px] md:left-1/2 top-0 bottom-0 w-px bg-[var(--color-accent-mauve)]/30 hidden md:block"
              initial={{ height: 0 }}
              whileInView={{ height: "100%" }}
              viewport={{ once: true }}
              transition={{ duration: 1.5, ease: "easeOut" }}
            />

            {/* Process steps with editorial treatment */}
            {processSection.steps.map((step: ProcessStep, index: number) => {
              const isEven = index % 2 === 0;

              return (
                <motion.div
                  key={step.number}
                  className="mb-24 last:mb-0"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                >
                  <div className="grid grid-cols-12 gap-4 items-center">
                    {/* Process step number - dramatically oversized for editorial impact */}
                    <div className={`col-span-12 md:col-span-2 md:col-start-${isEven ? '1' : '9'} mb-6 md:mb-0 md:order-${isEven ? '1' : '3'}`}>
                      <div className="overflow-hidden">
                        <motion.div
                          initial={{ y: 100 }}
                          whileInView={{ y: 0 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.6 }}
                        >
                          <span className="inline-block text-[8rem] md:text-[10rem] font-bold leading-[0.8] tracking-tighter text-[var(--color-accent-clay)]/10">
                            {step.number}
                          </span>
                        </motion.div>
                      </div>
                    </div>

                    {/* Process step title with editorial styling */}
                    <div className={`col-span-12 md:col-span-3 md:col-start-${isEven ? '4' : '6'} mb-4 md:mb-0 md:order-${isEven ? '2' : '2'}`}>
                      <div className="md:flex items-center h-full">
                        {/* Timeline node - editorial marker */}
                        <div className="hidden md:block relative">
                          <div className="absolute top-1/2 transform -translate-y-1/2 -left-6">
                            <div className="w-3 h-3 border border-[var(--color-accent-mauve)] bg-[var(--color-bg-primary)]"></div>
                          </div>
                        </div>

                        {/* Step title */}
                        <h3 className="text-2xl md:text-3xl font-bold tracking-tight relative text-[var(--color-text-primary)]">
                          {step.title}
                          <motion.div
                            className="absolute -bottom-2 left-0 h-[2px] bg-[var(--color-accent-mauve)]"
                            initial={{ width: 0 }}
                            whileInView={{ width: "40%" }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.4 }}
                          />
                        </h3>
                      </div>
                    </div>

                    {/* Process step description with editorial typography */}
                    <div className={`col-span-12 md:col-span-4 md:col-start-${isEven ? '7' : '2'} md:order-${isEven ? '3' : '1'}`}>
                      <p className="text-[var(--color-text-secondary)] font-light leading-relaxed">
                        {step.description}
                      </p>
                    </div>
                  </div>

                  {/* Horizontal dividers between steps - except last item */}
                  {index < processSection.steps.length - 1 && (
                    <motion.div
                      className="md:hidden h-px bg-[var(--color-text-primary)]/10 w-full my-12"
                      initial={{ width: 0 }}
                      whileInView={{ width: "100%" }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.8 }}
                    />
                  )}
                </motion.div>
              );
            })}
          </div>

          {/* Editorial page marker at bottom */}
          <motion.div
            className="col-span-12 mt-16 flex justify-center"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <div className="flex items-center text-[var(--color-text-tertiary)]">
              <div className="h-px w-12 bg-[var(--color-text-tertiary)] mr-4"></div>
              <span className="uppercase tracking-[0.2em] text-xs">004</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default DesktopProcessSection;