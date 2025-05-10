"use client";

import React from "react";
import { motion } from "framer-motion";

interface AngularDividerProps {
  fillTop?: string;
  fillBottom?: string;
  height?: number;
  className?: string;
  angle?: number; // degrees, defaults to 4
  direction?: "right" | "left";
}

const AngularDivider: React.FC<AngularDividerProps> = ({
  fillTop = "var(--color-bg-primary)",
  fillBottom = "var(--color-bg-secondary)",
  height = 100,
  className = "",
  angle = 4,
  direction = "right"
}) => {
  // Clamp angle to reasonable values (1-10 degrees)
  const safeAngle = Math.max(1, Math.min(10, angle));

  // Create skew transform based on angle and direction
  const skewTransform = direction === "right"
    ? `skewY(${safeAngle}deg)`
    : `skewY(-${safeAngle}deg)`;

  return (
    <div
      className={`relative w-full overflow-hidden ${className}`}
      style={{ height: `${height}px` }}
    >
      {/* Top section */}
      <motion.div
        className="absolute top-0 left-0 w-full bg-transparent"
        style={{
          height: `${height + 20}px`, // extra height to prevent gaps
          transformOrigin: direction === "right" ? "bottom left" : "bottom right",
          backgroundColor: fillTop
        }}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      ></motion.div>

      {/* Bottom section with angular cut */}
      <motion.div
        className="absolute bottom-0 left-0 w-full"
        style={{
          height: `${height}px`,
          backgroundColor: fillBottom,
          transform: skewTransform,
          transformOrigin: direction === "right" ? "bottom left" : "bottom right",
        }}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.2 }}
      ></motion.div>

      {/* Editorial design details */}
      <div className="absolute inset-0 flex items-center pointer-events-none">
        <div className="container px-6 mx-auto">
          <motion.div
            className="flex justify-end"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <div className="flex items-center space-x-3">
              <div className="w-12 h-px bg-black opacity-20"></div>
              <div className="w-2 h-2 border border-black"></div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default AngularDivider;
