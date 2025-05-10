"use client";

import React from "react";
import { motion } from "framer-motion";

const ServicesFAQ: React.FC = () => (
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
    {/* Background typography element */}
    <div className="absolute bottom-0 left-0 text-[25vw] leading-none font-bold tracking-tighter text-[var(--color-accent-mauve)]/[0.05] pointer-events-none z-0">
      FAQ
    </div>
    <div className="container mx-auto px-6 relative z-10">
      <div className="grid grid-cols-12 gap-4">
        <motion.div
          className="col-span-12 mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
            <div className="md:col-span-8 md:col-start-3">
              <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-6 text-center text-[var(--color-text-primary)]">
                Frequently Asked Questions
              </h2>
            </div>
          </div>
        </motion.div>
        {/* ...existing FAQ items (01-04) and editorial marker... */}
        {/* FAQ Item 1 */}
        <motion.div
          className="col-span-12 md:col-span-10 md:col-start-2 mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="grid grid-cols-1 md:grid-cols-12 gap-4 items-start">
            <div className="md:col-span-5 md:col-start-1 mb-4 md:mb-0">
              <div className="flex items-center">
                <span className="text-lg md:text-xl font-bold tracking-tight text-[var(--color-accent-mauve)]">
                  01
                </span>
                <div className="h-px w-8 bg-[var(--color-accent-mauve)] mx-4"></div>
                <h3 className="text-xl md:text-2xl font-bold tracking-tight text-[var(--color-text-primary)]">
                  How long does the copywriting process take?
                </h3>
              </div>
            </div>
            <div className="md:col-span-6 md:col-start-7">
              <p className="text-[var(--color-text-secondary)] font-light">
                Timelines vary depending on the scope of your project.
                Typically, a website copywriting project takes 2-3 weeks
                from start to finish, while launch copywriting may require
                3-4 weeks to ensure proper research and strategy.
              </p>
            </div>
          </div>
        </motion.div>
        {/* ...repeat for FAQ 02, 03, 04 and editorial marker... */}
        <motion.div
          className="col-span-12 md:col-span-10 md:col-start-2 mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="grid grid-cols-1 md:grid-cols-12 gap-4 items-start">
            <div className="md:col-span-5 md:col-start-1 mb-4 md:mb-0">
              <div className="flex items-center">
                <span className="text-lg md:text-xl font-bold tracking-tight text-[var(--color-accent-mauve)]">
                  02
                </span>
                <div className="h-px w-8 bg-[var(--color-accent-mauve)] mx-4"></div>
                <h3 className="text-xl md:text-2xl font-bold tracking-tight text-[var(--color-text-primary)]">
                  How many revisions are included?
                </h3>
              </div>
            </div>
            <div className="md:col-span-6 md:col-start-7">
              <p className="text-[var(--color-text-secondary)] font-light">
                All packages include two rounds of revisions to ensure
                you&apos;re completely satisfied with the final copy.
                Additional revisions can be arranged at an hourly rate if
                needed.
              </p>
            </div>
          </div>
        </motion.div>
        <motion.div
          className="col-span-12 md:col-span-10 md:col-start-2 mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <div className="grid grid-cols-1 md:grid-cols-12 gap-4 items-start">
            <div className="md:col-span-5 md:col-start-1 mb-4 md:mb-0">
              <div className="flex items-center">
                <span className="text-lg md:text-xl font-bold tracking-tight text-[var(--color-accent-mauve)]">
                  03
                </span>
                <div className="h-px w-8 bg-[var(--color-accent-mauve)] mx-4"></div>
                <h3 className="text-xl md:text-2xl font-bold tracking-tight text-[var(--color-text-primary)]">
                  Do you offer rush services?
                </h3>
              </div>
            </div>
            <div className="md:col-span-6 md:col-start-7">
              <p className="text-[var(--color-text-secondary)] font-light">
                Yes, expedited services are available for an additional fee,
                depending on current availability and the scope of your
                project. Please contact me to discuss your timeline needs.
              </p>
            </div>
          </div>
        </motion.div>
        <motion.div
          className="col-span-12 md:col-span-10 md:col-start-2"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <div className="grid grid-cols-1 md:grid-cols-12 gap-4 items-start">
            <div className="md:col-span-5 md:col-start-1 mb-4 md:mb-0">
              <div className="flex items-center">
                <span className="text-lg md:text-xl font-bold tracking-tight text-[var(--color-accent-mauve)]">
                  04
                </span>
                <div className="h-px w-8 bg-[var(--color-accent-mauve)] mx-4"></div>
                <h3 className="text-xl md:text-2xl font-bold tracking-tight text-[var(--color-text-primary)]">
                  What if I&apos;m not satisfied with the copy?
                </h3>
              </div>
            </div>
            <div className="md:col-span-6 md:col-start-7">
              <p className="text-[var(--color-text-secondary)] font-light">
                Your satisfaction is my priority. If you&apos;re not happy
                with the direction after our initial draft, we&apos;ll
                discuss your concerns and make adjustments until the copy
                aligns with your vision and goals.
              </p>
            </div>
          </div>
        </motion.div>
        {/* Editorial page marker */}
        <motion.div
          className="col-span-12 mt-16 flex justify-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <div className="flex items-center text-[var(--color-text-tertiary)]">
            <div className="h-px w-12 bg-[var(--color-text-tertiary)] mr-4"></div>
            <span className="uppercase tracking-[0.2em] text-xs">005</span>
          </div>
        </motion.div>
      </div>
    </div>
  </section>
);

export default ServicesFAQ;
