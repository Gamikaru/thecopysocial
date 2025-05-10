// src/components/ui/Divider.tsx
"use client";

import React from "react";
import { motion } from "framer-motion";
import Icon, { IconName } from "../../core/Icon";

type DividerVariant =
  | "simple"
  | "dot"
  | "icon"
  | "wave"
  | "angled"
  | "gradient"
  | "double";

type DividerProps = {
  variant?: DividerVariant;
  icon?: IconName;
  color?: string;
  width?: string;
  spacing?: "sm" | "md" | "lg" | "xl";
  className?: string;
  animated?: boolean;
};

const Divider: React.FC<DividerProps> = ({
  variant = "simple",
  icon = "fi:FiStar",
  color = "brand-accent",
  width = "max-w-xs",
  spacing = "md",
  className = "",
  animated = true,
}) => {
  // Spacing maps to padding values
  const spacingClasses = {
    sm: "py-2",
    md: "py-4",
    lg: "py-8",
    xl: "py-12",
  };

  // Color opacity mapping
  const colorOpacity = {
    primary: "/20",
    secondary: "/30",
    subtle: "/10",
  };

  // Motion props based on whether animation is enabled
  const motionProps = animated
    ? {
        initial: { opacity: 0, y: 10 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true, margin: "-100px" },
        transition: { duration: 0.6 },
      }
    : {};

  // Render different divider variants
  const renderDivider = () => {
    switch (variant) {
      case "dot":
        return (
          <div className="flex items-center justify-center">
            <div
              className={`h-px bg-${color}${colorOpacity.primary} w-8`}
            ></div>
            <div className={`h-2 w-2 rounded-full bg-${color} mx-2`}></div>
            <div
              className={`h-px bg-${color}${colorOpacity.primary} w-8`}
            ></div>
          </div>
        );

      case "icon":
        return (
          <div className="flex items-center justify-center">
            <div
              className={`h-px bg-${color}${colorOpacity.primary} w-12`}
            ></div>
            <div className={`mx-4 text-${color}`}>
              <Icon name={icon} size={16} />
            </div>
            <div
              className={`h-px bg-${color}${colorOpacity.primary} w-12`}
            ></div>
          </div>
        );

      case "wave":
        return (
          <svg
            className={`w-full h-6 text-${color}${colorOpacity.subtle}`}
            viewBox="0 0 100 10"
            preserveAspectRatio="none"
          >
            <path
              d="M0,5 C25,15 25,-5 50,5 C75,15 75,-5 100,5"
              fill="none"
              stroke="currentColor"
              strokeWidth="1"
            />
          </svg>
        );

      case "angled":
        return (
          <div className="relative h-8">
            <div className="absolute inset-0 bg-bg-secondary -z-10 transform -skew-y-1"></div>
          </div>
        );

      case "gradient":
        return (
          <div
            className={`h-px w-full ${width} mx-auto bg-gradient-to-r from-transparent via-${color} to-transparent`}
          ></div>
        );

      case "double":
        return (
          <div className="flex flex-col items-center space-y-1">
            <div
              className={`h-px bg-${color}${colorOpacity.primary} w-24`}
            ></div>
            <div
              className={`h-px bg-${color}${colorOpacity.secondary} w-16`}
            ></div>
          </div>
        );

      case "simple":
      default:
        return (
          <div
            className={`h-px bg-${color}${colorOpacity.primary} w-full ${width} mx-auto`}
          ></div>
        );
    }
  };

  return (
    <motion.div
      className={`flex justify-center items-center ${spacingClasses[spacing]} ${className}`}
      {...motionProps}
    >
      {renderDivider()}
    </motion.div>
  );
};

export default Divider;
