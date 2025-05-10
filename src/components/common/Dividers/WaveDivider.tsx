// src/components/ui/Dividers/WaveDivider.tsx
"use client";

import React from 'react';
import { motion } from 'framer-motion';

interface WaveDividerProps {
  fillTop?: string;
  fillBottom?: string;
  height?: number;
  className?: string;
  invert?: boolean;
  animationDuration?: number;
}

const WaveDivider: React.FC<WaveDividerProps> = ({
  fillTop = "var(--color-brand-primary)",
  fillBottom = "var(--color-bg-primary)",
  height = 120,
  className = "",
  invert = false,
  animationDuration = 1.5,
}) => {
  return (
    <div className={`relative w-full overflow-hidden ${className}`} style={{ height: `${height}px` }}>
      <motion.svg
        className="absolute w-full h-full"
        preserveAspectRatio="none"
        viewBox="0 0 1200 120"
        style={{ transform: invert ? 'rotate(180deg)' : 'none' }}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <motion.path
          d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
          fill={fillTop}
          initial={{ pathLength: 0 }}
          whileInView={{ pathLength: 1 }}
          viewport={{ once: true }}
          transition={{ duration: animationDuration, ease: "easeInOut" }}
        />
      </motion.svg>
      <div
        className="absolute bottom-0 w-full"
        style={{
          height: `${height/2}px`,
          backgroundColor: fillBottom,
          transform: invert ? 'translateY(-100%)' : 'none'
        }}
      ></div>
    </div>
  );
};

export default WaveDivider;