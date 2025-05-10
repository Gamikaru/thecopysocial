// src/components/ui/Dividers/ScallopDivider.tsx
"use client";

import React from 'react';
import { motion } from 'framer-motion';

interface ScallopDividerProps {
  fillTop?: string;
  fillBottom?: string;
  height?: number;
  scallops?: number;
  className?: string;
  invert?: boolean;
}

const ScallopDivider: React.FC<ScallopDividerProps> = ({
  fillTop = "var(--color-brand-primary)", // update to var(--color-brand-primary) if that's the intended variable, otherwise use accent or primary
  fillBottom = "var(--color-bg-primary)",
  height = 80,
  scallops = 5,
  className = "",
  invert = false,
}) => {
  // Generate the scallop SVG path
  const generateScallopPath = () => {
    const width = 100; // SVG viewbox width percentage
    const scallop = width / scallops;

    let path = `M0,${height} `;

    // Create a semi-circle for each scallop
    for (let i = 0; i < scallops; i++) {
      const startX = i * scallop;
      const midX = startX + (scallop / 2);
      const endX = startX + scallop;

      // Draw a semi-circle curve
      path += `C${startX},${height/2} ${midX},0 ${endX},${height/2} `;
    }

    // Close the path
    path += `L${width},${height} L0,${height}Z`;

    return path;
  };

  return (
    <div className={`relative w-full overflow-hidden ${className}`} style={{ height: `${height}px` }}>
      <motion.svg
        className="absolute w-full h-full"
        preserveAspectRatio="none"
        viewBox={`0 0 100 ${height}`}
        style={{ transform: invert ? 'rotate(180deg)' : 'none' }}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <motion.path
          d={generateScallopPath()}
          fill={fillTop}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
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

export default ScallopDivider;