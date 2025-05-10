// src/components/ui/Dividers/CurvedDivider.tsx
"use client";

import React from "react";
import { motion } from "framer-motion";

interface CurvedDividerProps {
  fillTop?: string;
  fillBottom?: string;
  height?: number;
  curvature?: number; // Controls how pronounced the curve is (0-1)
  className?: string;
  invert?: boolean;
}

const CurvedDivider: React.FC<CurvedDividerProps> = ({
  fillTop = "var(--color-brand-primary)", // update to var(--color-brand-primary) if that's the intended variable, otherwise use accent or primary
  fillBottom = "var(--color-bg-primary)",
  height = 100,
  curvature = 0.5, // Default medium curve
  className = "",
  invert = false,
}) => {
  // Ensure curvature is within bounds
  const safeCurvature = Math.max(0, Math.min(1, curvature));

  // Calculate control point height based on curvature
  const controlY = height * safeCurvature;

  // Generate the curved path
  const generateCurvedPath = () => {
    // For a simple curve, we use a quadratic bezier with one control point
    return `M0,0 L0,0 L0,0 Q50,${controlY} 100,0 L100,0 L100,${height} L0,${height} Z`;
  };

  return (
    <div
      className={`relative w-full overflow-hidden ${className}`}
      style={{ height: `${height}px` }}
    >
      <motion.svg
        className="absolute w-full h-full"
        preserveAspectRatio="none"
        viewBox={`0 0 100 ${height}`}
        style={{ transform: invert ? "rotate(180deg)" : "none" }}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <motion.path
          d={generateCurvedPath()}
          fill={fillTop}
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        />
      </motion.svg>

      <div
        className="absolute bottom-0 w-full"
        style={{
          height: `${height / 2}px`,
          backgroundColor: fillBottom,
          transform: invert ? "translateY(-100%)" : "none",
        }}
      ></div>
    </div>
  );
};

export default CurvedDivider;
