"use client";

import React from "react";
import { motion } from "framer-motion";

interface GeometricDividerProps {
  fillTop?: string;
  fillBottom?: string;
  height?: number;
  className?: string;
  pattern?: "stepped" | "zigzag" | "blocks";
}

const GeometricDivider: React.FC<GeometricDividerProps> = ({
  fillTop = "var(--color-bg-primary)",
  fillBottom = "var(--color-bg-secondary)",
  height = 120,
  className = "",
  pattern = "stepped"
}) => {
  // Generate SVG path based on pattern
  const generatePath = () => {
    // const width = 100; // Removed unused variable

    switch (pattern) {
      case "zigzag":
        return `M0,0 L0,${height/2} L25,${height/2} L50,0 L75,${height/2} L100,${height/2} L100,0 Z`;
      case "blocks":
        return `M0,0 L0,${height/2} L20,${height/2} L20,${height/4} L40,${height/4} L40,${height/2} L60,${height/2} L60,${height/4} L80,${height/4} L80,${height/2} L100,${height/2} L100,0 Z`;
      case "stepped":
      default:
        return `M0,0 L0,${height/2} L33,${height/2} L33,${height/3} L66,${height/3} L66,${height/2} L100,${height/2} L100,0 Z`;
    }
  };

  return (
    <div
      className={`relative w-full overflow-hidden ${className}`}
      style={{ height: `${height}px` }}
    >
      {/* SVG geometric pattern */}
      <svg
        className="absolute w-full h-full"
        preserveAspectRatio="none"
        viewBox={`0 0 100 ${height}`}
      >
        <motion.path
          d={generatePath()}
          fill={fillTop}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        />
      </svg>

      {/* Bottom fill */}
      <div
        className="absolute bottom-0 left-0 w-full"
        style={{
          height: `${height/2}px`,
          backgroundColor: fillBottom
        }}
      ></div>

      {/* Editorial grid marker */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="container px-6 mx-auto flex justify-between">
          {[...Array(5)].map((_, i: number) => (
            <motion.div
              key={i}
              className="h-full w-px bg-black opacity-[0.03]"
              initial={{ height: 0 }}
              whileInView={{ height: "100%" }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: i * 0.1 }}
            ></motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default GeometricDivider;
