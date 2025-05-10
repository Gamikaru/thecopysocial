// src/components/common/Animations/TextReveal.tsx - FIXED VERSION

"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { textRevealVariants } from './variants';

interface TextRevealProps {
  children: React.ReactNode;
  delay?: number;
  className?: string;
  // Changed from JSX.IntrinsicElements to React.ElementType for simpler typing
  as?: React.ElementType;
}

const TextReveal: React.FC<TextRevealProps> = ({
  children,
  delay = 0,
  className = "",
  as = "div"
}) => {
  const Component = as;
  return (
    <motion.div
      className={className}
      variants={textRevealVariants}
      initial="hidden"
      animate="visible"
      transition={{ delay }}
    >
      <Component>{children}</Component>
    </motion.div>
  );
};

export default TextReveal;