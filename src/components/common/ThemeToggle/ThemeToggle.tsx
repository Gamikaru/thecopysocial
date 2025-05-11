// src/components/common/ThemeToggle/ThemeToggle.tsx
"use client";

import React from "react";
import { motion } from "framer-motion";
import { useTheme } from "@/context/ThemeContext";
import Icon from "@/components/core/Icon";

interface ThemeToggleProps {
  className?: string;
  size?: "sm" | "md" | "lg";
}

const ThemeToggle: React.FC<ThemeToggleProps> = ({
  className = "",
  size = "md"
}) => {
  const { theme, toggleTheme } = useTheme();

  // Size class mapping
  const sizeClasses = {
    sm: "w-8 h-8",
    md: "w-10 h-10",
    lg: "w-12 h-12"
  };

  // Icon size mapping
  const iconSizes = {
    sm: 14,
    md: 18,
    lg: 22
  };

  return (
    <motion.button
      aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
      className={`${sizeClasses[size]} flex items-center justify-center transition-colors relative ${className}`}
      onClick={toggleTheme}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      transition={{ duration: 0.2 }}
    >
      <motion.div
        initial={false}
        animate={{ opacity: theme === "light" ? 1 : 0 }}
        transition={{ duration: 0.2 }}
        className="absolute inset-0 flex items-center justify-center"
      >
        <Icon name="fi:FiMoon" size={iconSizes[size]} />
      </motion.div>

      <motion.div
        initial={false}
        animate={{ opacity: theme === "dark" ? 1 : 0 }}
        transition={{ duration: 0.2 }}
        className="absolute inset-0 flex items-center justify-center"
      >
        <Icon name="fi:FiSun" size={iconSizes[size]} />
      </motion.div>
    </motion.button>
  );
};

export default ThemeToggle;