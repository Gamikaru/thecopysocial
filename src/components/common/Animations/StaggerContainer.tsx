"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { staggerContainerVariants } from './variants';

interface StaggerContainerProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  staggerDelay?: number;
}

const StaggerContainer: React.FC<StaggerContainerProps> = ({ 
  children, 
  className = "",
  delay = 0,
  staggerDelay = 0.1
}) => {
  // Create a custom variant with the provided stagger delay
  const customVariants = {
    ...staggerContainerVariants,
    visible: {
      ...staggerContainerVariants.visible,
      transition: {
        ...staggerContainerVariants.visible.transition,
        staggerChildren: staggerDelay,
        delayChildren: delay
      }
    }
  };

  return (
    <motion.div
      className={className}
      variants={customVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      {children}
    </motion.div>
  );
};

export default StaggerContainer;
