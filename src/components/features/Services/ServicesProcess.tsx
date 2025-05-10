"use client";

import React from "react";
import { motion } from "framer-motion";

const ServicesProcess: React.FC = () => (
  <section className="py-24 bg-[var(--color-bg-primary)] relative">
    {/* Editorial grid overlay */}
    <div className="absolute inset-0 grid grid-cols-12 pointer-events-none">
      {[...Array(12)].map((_, i) => (
        <div
          key={i}
          className="border-l border-[var(--color-text-primary)]/5 h-full"
        />
      ))}
    </div>
    <div className="container mx-auto px-6 relative z-10">
      <motion.div
        className="mb-20"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <div className="grid grid-cols-12 gap-8">
          <div className="col-span-12 md:col-span-6 md:col-start-4">
            <motion.h2
              className="text-4xl md:text-5xl font-bold tracking-tight mb-12 text-[var(--color-text-primary)]"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              My Copywriting Process
            </motion.h2>
          </div>
        </div>
      </motion.div>
      <div className="grid grid-cols-1 md:grid-cols-12 gap-y-16 md:gap-x-8">
        {/* Process Step 1 */}
        <motion.div
          className="col-span-12 md:col-span-5 md:col-start-2"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="flex items-baseline mb-4">
            <span className="text-6xl font-bold tracking-tighter text-[var(--color-accent-clay)]/20 mr-4">
              01
            </span>
            <h3 className="text-2xl font-bold tracking-tight text-[var(--color-text-primary)]">
              Discovery & Research
            </h3>
          </div>
          <p className="text-[var(--color-text-secondary)] font-light pl-20">
            I start by taking a deep dive into your business, industry, and
            audience. This includes analyzing your competitors,
            understanding your unique value proposition, and identifying the
            specific challenges you&apos;re facing.
          </p>
        </motion.div>
        {/* Process Step 2 */}
        <motion.div
          className="col-span-12 md:col-span-5 md:col-start-7"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="flex items-baseline mb-4">
            <span className="text-6xl font-bold tracking-tighter text-[var(--color-accent-clay)]/20 mr-4">
              02
            </span>
            <h3 className="text-2xl font-bold tracking-tight text-[var(--color-text-primary)]">
              Strategy Development
            </h3>
          </div>
          <p className="text-[var(--color-text-secondary)] font-light pl-20">
            Based on our research, I&apos;ll craft a tailored messaging
            strategy that aligns with your brand voice and business goals.
            This roadmap ensures all copy is purposeful and strategic.
          </p>
        </motion.div>
        {/* Process Step 3 */}
        <motion.div
          className="col-span-12 md:col-span-5 md:col-start-2"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <div className="flex items-baseline mb-4">
            <span className="text-6xl font-bold tracking-tighter text-[var(--color-accent-clay)]/20 mr-4">
              03
            </span>
            <h3 className="text-2xl font-bold tracking-tight text-[var(--color-text-primary)]">
              Writing & Refinement
            </h3>
          </div>
          <p className="text-[var(--color-text-secondary)] font-light pl-20">
            I&apos;ll create compelling copy that speaks directly to your
            audience, incorporates SEO best practices, and drives the
            actions you need. Each draft is carefully crafted and refined.
          </p>
        </motion.div>
        {/* Process Step 4 */}
        <motion.div
          className="col-span-12 md:col-span-5 md:col-start-7"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <div className="flex items-baseline mb-4">
            <span className="text-6xl font-bold tracking-tighter text-[var(--color-accent-clay)]/20 mr-4">
              04
            </span>
            <h3 className="text-2xl font-bold tracking-tight text-[var(--color-text-primary)]">
              Review & Optimization
            </h3>
          </div>
          <p className="text-[var(--color-text-secondary)] font-light pl-20">
            You&apos;ll have the opportunity to review the copy and request
            revisions. I&apos;ll fine-tune the messaging to ensure it
            perfectly captures your brand voice and meets your objectives.
          </p>
        </motion.div>
        {/* Editorial page marker */}
        <motion.div
          className="col-span-12 mt-8 flex justify-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <div className="flex items-center text-[var(--color-text-tertiary)]">
            <div className="h-px w-12 bg-[var(--color-text-tertiary)] mr-4"></div>
            <span className="uppercase tracking-[0.2em] text-xs">003</span>
          </div>
        </motion.div>
      </div>
    </div>
  </section>
);

export default ServicesProcess;