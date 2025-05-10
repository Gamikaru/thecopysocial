// src/components/ui/Button/EditorialButton.tsx
"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Icon, { IconName } from "../../core/Icon";

interface EditorialButtonProps {
  children: React.ReactNode;
  href?: string;
  onClick?: (e: React.MouseEvent<HTMLButtonElement | HTMLAnchorElement>) => void;
  className?: string;
  variant?: "bordered" | "minimal" | "underline" | "accent";
  size?: "sm" | "md" | "lg";
  color?: "primary" | "light";
  icon?: IconName;
  iconPosition?: "left" | "right";
  iconSize?: number;
  animate?: boolean;
  disabled?: boolean;
  ariaLabel?: string;
  underlinePosition?: "bottom" | "right";
  uppercase?: boolean;
  forceTextColor?: string; // New prop for explicit text color
  forceBackgroundColor?: string; // New prop for explicit background color
}

const EditorialButton: React.FC<EditorialButtonProps> = ({
  children,
  href,
  onClick,
  className = "",
  variant = "bordered",
  size = "md",
  color = "primary",
  icon,
  iconPosition = "right",
  iconSize = 16,
  animate = true,
  disabled = false,
  ariaLabel,
  underlinePosition = "bottom",
  uppercase = true,
  forceTextColor, // Add new props
  forceBackgroundColor,
  ...props
}) => {
  // Size classes
  const sizeClasses = {
    sm: "text-xs py-2 px-3",
    md: "text-sm py-3 px-5",
    lg: "text-base py-4 px-7",
  };

  // Color classes
  const colorVariants = {
    primary: {
      text: "text-[var(--color-button-outline-text)]",
      border: "border-[var(--color-button-outline-border)]",
      hover: "hover:bg-[var(--color-button-outline-border)] hover:text-[var(--color-button-filled-text)]",
      underline: "bg-[var(--color-button-outline-border)]",
    },
    light: {
      text: "text-[var(--color-button-filled-text)]",
      border: "border-white",
      hover: "hover:bg-white hover:text-black",
      underline: "bg-white",
    },
  };

  // Variant specific classes
  const variantClasses = {
    bordered: `border ${colorVariants[color].border} ${colorVariants[color].text} hover:bg-[var(--color-button-outline-border)] hover:text-[var(--color-button-filled-text)] transition-colors`,
    minimal: `${colorVariants[color].text} hover:opacity-70 transition-opacity`,
    underline: `${colorVariants[color].text}`,
    accent: `bg-[var(--color-button-filled-primary)] text-[var(--color-button-filled-text)] hover:bg-[var(--color-button-filled-primary-hover)] transition-opacity`, // filled, white text
  };

  // Force specific text/background color if provided
  const forcedColorClasses = [
    forceTextColor ? forceTextColor : "",
    forceBackgroundColor ? forceBackgroundColor : "",
  ].filter(Boolean).join(" ");

  // Combined classes - put forced colors at the end to ensure highest specificity
  const buttonClasses = `
    ${sizeClasses[size]}
    ${variantClasses[variant]}
    ${uppercase ? "uppercase tracking-wider" : ""}
    ${disabled ? "opacity-50 cursor-not-allowed pointer-events-none" : ""}
    inline-flex items-center justify-center
    font-light
    ${className}
    ${forcedColorClasses}
  `;

  // Create the content with icon placement
  const content = (
    <>
      {icon && iconPosition === "left" && (
        <Icon name={icon} size={iconSize} className="mr-2" />
      )}
      <span>{children}</span>
      {icon && iconPosition === "right" && (
        <Icon name={icon} size={iconSize} className="ml-2" />
      )}
      {variant === "underline" && (
        <div
          className={`
            transition-all duration-300 group-hover:w-full
            ${underlinePosition === "bottom" ? "absolute bottom-0 left-0 h-px w-0" : "ml-4 h-px w-8"}
            ${colorVariants[color].underline}
          `}
        ></div>
      )}
    </>
  );

  // Wrap in motion component if animate is true
  const animatedContent = animate ? (
    <motion.div
      className="flex items-center"
      whileHover={
        variant !== "underline"
          ? { scale: 1.05, y: -2 }
          : { x: underlinePosition === "bottom" ? 0 : 3 }
      }
      whileTap={{ scale: 0.98 }}
      transition={{ duration: 0.2 }}
    >
      {content}
    </motion.div>
  ) : (
    content
  );

  // Render as link or button
  if (href) {
    return (
      <Link
        href={href}
        className={`group relative ${buttonClasses}`}
        aria-label={ariaLabel}
        onClick={onClick as React.MouseEventHandler<HTMLAnchorElement>}
        {...props}
      >
        {animatedContent}
      </Link>
    );
  }

  return (
    <button
      type="button"
      className={`group relative ${buttonClasses}`}
      disabled={disabled}
      aria-label={ariaLabel}
      onClick={onClick}
      {...props}
    >
      {animatedContent}
    </button>
  );
};

export { EditorialButton };
export type { EditorialButtonProps };