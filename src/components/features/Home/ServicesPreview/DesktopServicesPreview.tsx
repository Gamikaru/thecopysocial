"use client";

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { servicesPreview } from '@/content/data/home';
import Icon, { IconName } from '@/components/core/Icon';

interface DesktopServicesPreviewProps {
  className?: string;
}

// Map service icon names to actual icon component names with proper typing
const iconMap: Record<string, IconName> = {
  'Globe': 'fi:FiGlobe',
  'Rocket': 'fi:FiSend',
  'Strategy': 'fi:FiTarget'
};

// If you don't have ServicePreviewItem, define it here:
type ServicePreviewItem = {
  title: string;
  description: string;
  icon: string;
  link: string;
};

const DesktopServicesPreview: React.FC<DesktopServicesPreviewProps> = () => {
  return (
    <section className="py-32 bg-[var(--color-bg-primary)] relative">
      {/* Editorial grid overlay */}
      <div className="absolute inset-0 grid grid-cols-12 pointer-events-none">
        {[...Array(12)].map((_, i) => (
          <div key={i} className="border-l border-[var(--color-text-primary)]/5 h-full" />
        ))}
      </div>

      {/* Editorial background typography element */}
      <div className="absolute top-0 -left-20 text-[25vw] leading-none font-bold tracking-tighter text-[var(--color-accent-navy)]/[0.1] pointer-events-none">
        SERVICES
      </div>

      <div className="container mx-auto px-6">
        <div className="grid grid-cols-12 gap-4">
          {/* Editorial section header */}
          <motion.div
            className="col-span-12 mb-16 md:mb-24"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex items-center mb-6">
              <div className="h-px w-16 bg-[var(--color-text-primary)] mr-4"></div>
              <span className="uppercase tracking-[0.3em] text-xs text-[var(--color-text-secondary)]">Services 003</span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
              <div className="md:col-span-5 md:col-start-2">
                <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-6 text-[var(--color-text-primary)]">
                  {servicesPreview.title}
                </h2>
              </div>

              <div className="md:col-span-5 md:col-start-7">
                <p className="text-lg text-[var(--color-text-secondary)] font-light leading-relaxed">
                  {servicesPreview.description}
                </p>
              </div>
            </div>
          </motion.div>

          {/* Editorial service listing */}
          {servicesPreview.services.map((service: ServicePreviewItem, index: number) => {
            // Add fallback icon if the mapping is missing
            const iconName = iconMap[service.icon] || 'fi:FiBox';
            const number = (index + 1).toString().padStart(2, '0');

            return (
              <motion.div
                key={service.title}
                className="col-span-12 mb-24 last:mb-0"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
              >
                <div className="grid grid-cols-1 md:grid-cols-12 gap-4 items-center">
                  {/* Dramatically oversized number */}
                  <div className="md:col-span-2 md:col-start-1 overflow-hidden mb-4 md:mb-0">
                    <motion.div
                      initial={{ y: 80 }}
                      whileInView={{ y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: 0.2 }}
                    >
                      <span className="text-[8rem] md:text-[12rem] font-bold leading-none tracking-tighter text-[var(--color-accent-navy)]/10">
                        {number}
                      </span>
                    </motion.div>
                  </div>

                  {/* Service details with editorial treatment */}
                  <div className="md:col-span-4 md:col-start-3 mb-6 md:mb-0">
                    <div className="flex items-start mb-6">
                      {/* Minimal icon treatment */}
                      <div className="mr-4 h-12 w-12 border border-[var(--color-text-primary)] flex items-center justify-center">
                        <Icon
                          name={iconName}
                          size={24}
                          className="text-[var(--color-accent-clay)]"
                        />
                      </div>

                      {/* Service title with editorial styling */}
                      <div>
                        <h3 className="text-2xl font-bold tracking-tight relative text-[var(--color-text-primary)]">
                          {service.title}
                          <motion.div
                            className="absolute bottom-0 left-0 h-[2px] bg-[var(--color-accent-mauve)]"
                            initial={{ width: 0 }}
                            whileInView={{ width: "40%" }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.4 }}
                          />
                        </h3>
                      </div>
                    </div>

                    {/* Editorial call-to-action */}
                    <Link
                      href={service.link}
                      className="mt-6 inline-flex items-center group"
                    >
                      <span className="uppercase tracking-widest text-xs font-medium text-[var(--color-accent-navy)]">
                        Learn more
                      </span>
                      <motion.span
                        className="ml-4 h-px bg-[var(--color-accent-navy)] transition-all duration-300 group-hover:bg-[var(--color-accent-navy-dark)]"
                        initial={{ width: 12 }}
                        whileInView={{ width: 24 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.4, delay: 0.6 }}
                      />
                    </Link>
                  </div>

                  {/* Service description with editorial typography */}
                  <div className="md:col-span-5 md:col-start-8 relative">
                    {/* Left border marker - editorial design element */}
                    <div className="absolute left-0 top-0 bottom-0 w-px bg-[var(--color-text-primary)]/20 hidden md:block"></div>

                    <p className="md:pl-6 text-[var(--color-text-secondary)] font-light">
                      {service.description}
                    </p>
                  </div>
                </div>

                {/* Horizontal divider between services */}
                {index < servicesPreview.services.length - 1 && (
                  <motion.div
                    className="h-px bg-[var(--color-text-primary)]/10 w-full mt-16"
                    initial={{ width: 0 }}
                    whileInView={{ width: "100%" }}
                    viewport={{ once: true }}
                    transition={{ duration: 1 }}
                  />
                )}
              </motion.div>
            );
          })}

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
};

export default DesktopServicesPreview;