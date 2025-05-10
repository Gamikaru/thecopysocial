"use client";

import React from "react";
import { motion } from "framer-motion";

interface LinearDividerProps {
  fillTop?: string;
  fillBottom?: string;
  height?: number;
  className?: string;
  showTypography?: boolean;
  text?: string;
}

const LinearDivider: React.FC<LinearDividerProps> = ({
  fillTop = "var(--color-bg-primary)",
  fillBottom = "var(--color-bg-secondary)",
  height = 120,
  className = "",
  showTypography = false,
  text = "SECTION"
}) => {
  return (
    <div
      className={`relative w-full overflow-hidden ${className}`}
      style={{ height: `${height}px` }}
    >
      {/* Simple split with top and bottom colors */}
      <div
        className="absolute top-0 left-0 right-0"
        style={{
          height: `${height/2}px`,
          backgroundColor: fillTop
        }}
      ></div>

      <div
        className="absolute bottom-0 left-0 right-0"
        style={{
          height: `${height/2}px`,
          backgroundColor: fillBottom
        }}
      ></div>

      {/* Editorial design elements */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="container mx-auto px-6 relative z-10">
          {showTypography ? (
            <div className="flex items-center justify-center">
              <motion.div
                className="h-px bg-black opacity-20"
                style={{ width: "100px" }}
                initial={{ width: 0 }}
                whileInView={{ width: "100px" }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              ></motion.div>

              <motion.div
                className="mx-6 uppercase tracking-[0.5em] text-xs font-light text-black opacity-60"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 0.6 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                {text}
              </motion.div>

              <motion.div
                className="h-px bg-black opacity-20"
                style={{ width: "100px" }}
                initial={{ width: 0 }}
                whileInView={{ width: "100px" }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              ></motion.div>
            </div>
          ) : (
            <motion.div
              className="h-px w-full bg-black opacity-10"
              initial={{ width: 0 }}
              whileInView={{ width: "100%" }}
              viewport={{ once: true }}
              transition={{ duration: 1.2 }}
            ></motion.div>
          )}
        </div>
      </div>
    </div>
  );
};

export default LinearDivider;
