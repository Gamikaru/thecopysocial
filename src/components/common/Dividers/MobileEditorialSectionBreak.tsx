"use client";

import React from 'react';
import { motion } from 'framer-motion';

interface MobileEditorialSectionBreakProps {
  sectionNumber: string;
  sectionTitle: string;
  alignment?: 'left' | 'center' | 'right';
  className?: string;
}

const MobileEditorialSectionBreak: React.FC<MobileEditorialSectionBreakProps> = ({
  sectionNumber,
  sectionTitle,
  // alignment is intentionally unused for mobile, so remove assignment to avoid lint error
  className = '',
}) => {
  // Simplified for mobile - always center aligned
  return (
    <div className={`py-8 relative overflow-hidden ${className}`}>
      <div className="container mx-auto px-6">
        <motion.div
          className="flex flex-col items-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {/* Simplified section title */}
          <div className="flex items-center mb-3">
            <div className="h-px w-8 bg-[var(--color-text-primary)]/30 mr-3"></div>
            <span className="uppercase tracking-[0.2em] text-xs text-[var(--color-text-tertiary)]">
              {sectionTitle}
            </span>
            <div className="h-px w-8 bg-[var(--color-text-primary)]/30 ml-3"></div>
          </div>

          {/* Simplified section number */}
          <div className="text-sm uppercase tracking-wider text-[var(--color-text-tertiary)]">
            {sectionNumber}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default MobileEditorialSectionBreak;