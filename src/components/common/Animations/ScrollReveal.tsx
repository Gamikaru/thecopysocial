"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { scrollRevealVariants } from './variants';

interface ScrollRevealProps {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}

const ScrollReveal: React.FC<ScrollRevealProps> = ({ 
  children, 
  delay = 0,
  className = "" 
}) => {
  return (
    <motion.div
      className={className}
      variants={scrollRevealVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      transition={{ delay }}
    >
      {children}
    </motion.div>
  );
};

export default ScrollReveal;
