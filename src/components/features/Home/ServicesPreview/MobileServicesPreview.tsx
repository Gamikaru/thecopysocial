"use client";

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { servicesPreview } from '@/content/data/home';
import Icon, { IconName } from '@/components/core/Icon';

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

const MobileServicesPreview: React.FC = () => {
  return (
    <section className="py-20 bg-[var(--color-bg-primary)] relative">
      {/* Simplified background typography for mobile */}
      <div className="absolute top-0 right-0 text-[18vw] leading-none font-bold tracking-tighter text-[var(--color-accent-navy)]/[0.05] pointer-events-none overflow-hidden">
        SERVICES
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Mobile section header */}
        <motion.div
          className="mb-12"
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center mb-4">
            <div className="h-px w-12 bg-[var(--color-text-primary)] mr-4"></div>
            <span className="uppercase tracking-[0.2em] text-xs text-[var(--color-text-secondary)]">Services</span>
          </div>

          <h2 className="text-3xl font-bold tracking-tight mb-4 text-[var(--color-text-primary)]">
            {servicesPreview.title}
          </h2>

          <p className="text-base text-[var(--color-text-secondary)] font-light leading-relaxed">
            {servicesPreview.description}
          </p>
        </motion.div>

        {/* Services list - mobile optimized */}
        {servicesPreview.services.map((service: ServicePreviewItem, index: number) => {
          // Add fallback icon if the mapping is missing
          const iconName = iconMap[service.icon] || 'fi:FiBox';
          const number = (index + 1).toString().padStart(2, '0');

          return (
            <motion.div
              key={service.title}
              className="mb-14 last:mb-8"
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              {/* Service number and content container */}
              <div className="relative">
                {/* Oversized number - scaled down for mobile */}
                <div className="absolute -top-6 -left-2 text-[5rem] leading-none font-bold opacity-10 text-[var(--color-accent-navy)]">
                  {number}
                </div>

                <div className="relative">
                  {/* Service title and icon */}
                  <div className="flex items-start mb-4 pl-4">
                    {/* Icon wrapper */}
                    <div className="mr-4 h-10 w-10 border border-[var(--color-text-primary)] flex items-center justify-center flex-shrink-0">
                      <Icon
                        name={iconName}
                        size={18}
                        className="text-[var(--color-accent-clay)]"
                      />
                    </div>

                    {/* Service title */}
                    <div>
                      <h3 className="text-xl font-bold tracking-tight text-[var(--color-text-primary)] relative">
                        {service.title}
                        <motion.div
                          className="absolute -bottom-1 left-0 h-[2px] bg-[var(--color-accent-mauve)]"
                          initial={{ width: 0 }}
                          whileInView={{ width: "30%" }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.4, delay: 0.2 }}
                        />
                      </h3>
                    </div>
                  </div>

                  {/* Service description */}
                  <div className="pl-14">
                    <p className="text-[var(--color-text-secondary)] font-light mb-4">
                      {service.description}
                    </p>

                    {/* Learn more link */}
                    <Link
                      href={service.link}
                      className="inline-flex items-center group"
                    >
                      <span className="uppercase tracking-widest text-xs font-medium text-[var(--color-accent-navy)]">
                        Learn more
                      </span>
                      <span className="ml-3 h-px w-4 bg-[var(--color-accent-navy)] group-hover:w-6 transition-all duration-300"></span>
                    </Link>
                  </div>
                </div>
              </div>

              {/* Divider between services */}
              {index < servicesPreview.services.length - 1 && (
                <motion.div
                  className="h-px bg-[var(--color-text-primary)]/5 w-full mt-8"
                  initial={{ width: 0 }}
                  whileInView={{ width: "100%" }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                />
              )}
            </motion.div>
          );
        })}

        {/* Simplified editorial page marker */}
        <motion.div
          className="mt-10 flex justify-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <div className="flex items-center text-[var(--color-text-tertiary)]">
            <div className="h-px w-8 bg-[var(--color-text-tertiary)] mr-3"></div>
            <span className="uppercase tracking-[0.2em] text-xs">003</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default MobileServicesPreview;