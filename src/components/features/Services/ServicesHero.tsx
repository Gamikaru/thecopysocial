"use client";

import React from "react";
import { motion } from "framer-motion";
import { servicesHero } from "@/content/data/services";

const ServicesHero: React.FC = () => (
  <section className="pt-36 pb-24 relative">
    {/* Editorial grid overlay */}
    <div className="absolute inset-0 grid grid-cols-12 pointer-events-none">
      {[...Array(12)].map((_, i) => (
        <div
          key={i}
          className="border-l border-[var(--color-text-primary)]/5 h-full"
        />
      ))}
    </div>
    <div className="container mx-auto px-6">
      <div className="grid grid-cols-12 gap-4">
        {/* Editorial section marker */}
        <motion.div
          className="col-span-12 mb-16"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="flex items-center">
            <div className="h-px w-16 bg-[var(--color-text-primary)] mr-4"></div>
            <span className="uppercase tracking-[0.3em] text-xs text-[var(--color-text-secondary)]">
              Services 001
            </span>
          </div>
        </motion.div>
        <div className="col-span-12 md:col-span-5 md:col-start-2">
          <motion.h1
            className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6 text-[var(--color-text-primary)]"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            {servicesHero.title}
          </motion.h1>
        </div>
        <div className="col-span-12 md:col-span-5 md:col-start-7">
          <motion.p
            className="text-lg text-[var(--color-text-secondary)] font-light leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {servicesHero.description}
          </motion.p>
        </div>
        {/* Editorial horizontal rule */}
        <motion.div
          className="col-span-12 mt-16"
          initial={{ width: 0 }}
          whileInView={{ width: "100%" }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          <div className="h-px w-full bg-[var(--color-text-primary)]/10"></div>
        </motion.div>
      </div>
    </div>
  </section>
);

export default ServicesHero;
