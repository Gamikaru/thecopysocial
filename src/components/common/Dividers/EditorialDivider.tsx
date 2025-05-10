"use client";

import React from "react";
import { motion } from "framer-motion";

interface EditorialDividerProps {
  fillTop?: string;
  fillBottom?: string;
  height?: number;
  className?: string;
  orientation?: "horizontal" | "diagonal";
  contrast?: boolean;
}

const EditorialDivider: React.FC<EditorialDividerProps> = ({
  fillTop = "var(--color-bg-primary)",
  fillBottom = "var(--color-bg-secondary)",
  height = 120,
  className = "",
  orientation = "horizontal",
  contrast = false,
}) => {
  // Animation variants
  const lineVariants = {
    hidden: { width: 0 },
    visible: {
      width: "100%",
      transition: {
        duration: 1.2,
        ease: "easeInOut"
      }
    }
  };

  return (
    <div
      className={`relative w-full overflow-hidden ${className}`}
      style={{ height: `${height}px` }}
    >
      {/* Top section styling */}
      <div
        className="absolute top-0 left-0 w-full"
        style={{
          height: orientation === "horizontal" ? `${height/2}px` : `${height}px`,
          backgroundColor: fillTop
        }}
      ></div>

      {/* Bottom section styling */}
      <div
        className="absolute bottom-0 left-0 w-full"
        style={{
          height: orientation === "horizontal" ? `${height/2}px` : `${height}px`,
          backgroundColor: fillBottom,
          clipPath: orientation === "diagonal"
            ? "polygon(0% 100%, 100% 0%, 100% 100%, 0% 100%)"
            : undefined
        }}
      ></div>

      {/* Editorial design elements */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="container px-6 mx-auto">
          <motion.div
            className="relative"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {/* Center line - editorial design element */}
            <motion.div
              className="h-px bg-black"
              style={{
                opacity: contrast ? 0.8 : 0.2,
                width: "100%"
              }}
              variants={lineVariants}
            ></motion.div>

            {/* Optional editorial mark */}
            {contrast && (
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                <div className="h-4 w-4 border border-black bg-white"></div>
              </div>
            )}
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default EditorialDivider;
