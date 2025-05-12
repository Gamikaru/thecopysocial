// src/components/sections/Dividers/EditorialSectionBreak.tsx
"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { useDevice } from '@/context/DeviceContext';
import MobileEditorialSectionBreak from './MobileEditorialSectionBreak';

interface EditorialSectionBreakProps {
  sectionNumber?: string;
  sectionTitle?: string;
  className?: string;
  alignment?: 'left' | 'center' | 'right';
  showGrid?: boolean;
}

const EditorialSectionBreak: React.FC<EditorialSectionBreakProps> = ({
  sectionNumber = "002",
  sectionTitle = "Section",
  className = "",
  alignment = 'center',
  showGrid = true
}) => {
  const { isMobile } = useDevice();

  if (isMobile) {
    return (
      <MobileEditorialSectionBreak
        sectionNumber={sectionNumber}
        sectionTitle={sectionTitle}
        alignment={alignment}
        className={className}
      />
    );
  }

  // Define alignment classes
  const alignmentClasses = {
    left: "justify-start text-left",
    center: "justify-center text-center",
    right: "justify-end text-right"
  };

  return (
    <section className={`py-24 relative bg-[var(--color-bg-primary)] ${className}`}>
      {/* Editorial grid overlay */}
      {showGrid && (
        <div className="absolute inset-0 grid grid-cols-12 pointer-events-none">
          {[...Array(12)].map((_, i) => (
            <div key={i} className="border-l border-[var(--color-text-primary)]/5 h-full"></div>
          ))}
        </div>
      )}

      <div className="container mx-auto px-6">
        <div className={`flex ${alignmentClasses[alignment]}`}>
          <div className="w-full max-w-md">
            {/* Top line */}
            <motion.div
              className="flex items-center mb-8"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className={`h-px bg-[var(--color-text-primary)] flex-grow ${alignment === 'right' ? 'order-1 ml-6' : alignment === 'center' ? 'w-full' : 'mr-6'}`}></div>

              {alignment !== 'center' && (
                <div className="uppercase tracking-[0.3em] text-xs text-[var(--color-text-secondary)]">
                  {sectionNumber}
                </div>
              )}
            </motion.div>

            {/* Section title - only for center alignment */}
            {alignment === 'center' && (
              <motion.div
                className="mb-8"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <div className="uppercase tracking-[0.5em] text-xs text-[var(--color-text-secondary)]">
                  {sectionTitle}
                </div>
              </motion.div>
            )}

            {/* Geometric elements */}
            <div className="flex items-center">
              {alignment !== 'right' && (
                <motion.div
                  className="w-4 h-4 border border-[var(--color-accent-sage)] relative"
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4 }}
                >
                  <div className="absolute top-1/2 left-1/2 w-1 h-1 bg-[var(--color-accent-sage)] transform -translate-x-1/2 -translate-y-1/2"></div>
                </motion.div>
              )}

              <motion.div
                className={`h-px bg-[var(--color-text-primary)] flex-grow mx-6`}
                initial={{ width: 0 }}
                whileInView={{ width: "100%" }}
                viewport={{ once: true }}
                transition={{ duration: 1 }}
              ></motion.div>

              {alignment !== 'left' && (
                <motion.div
                  className="w-4 h-4 border border-[var(--color-accent-sage)] relative"
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4 }}
                >
                  <div className="absolute top-1/2 left-1/2 w-1 h-1 bg-[var(--color-accent-sage)] transform -translate-x-1/2 -translate-y-1/2"></div>
                </motion.div>
              )}
            </div>

            {/* Bottom typography - magazine style page marker */}
            <motion.div
              className={`flex items-center mt-8 ${alignment === 'center' ? 'justify-center' : ''}`}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <div className="uppercase tracking-widest text-xs text-[var(--color-text-tertiary)] flex items-center">
                <span className="block h-[3px] w-[3px] bg-[var(--color-text-tertiary)] mr-3"></span>
                The Copy Social
                <span className="mx-3">•</span>
                Portfolio {new Date().getFullYear()}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EditorialSectionBreak;