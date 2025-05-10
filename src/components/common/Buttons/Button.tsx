// src/components/ui/Button/Button.tsx
"use client";

import React from "react";
import { motion } from "framer-motion";
import Icon, { IconName } from "../../core/Icon";
import Link from "next/link";
import { cva, type VariantProps } from "class-variance-authority";

// Define button variants using class-variance-authority
const buttonVariants = cva(
  "inline-flex items-center justify-center transition-all duration-300 font-medium focus:outline-none focus:ring-2 focus:ring-offset-2",
  {
    variants: {
      variant: {
        primary:
          "bg-[var(--color-button-filled-primary)] text-[var(--color-button-filled-text)] hover:bg-[var(--color-button-filled-primary-hover)] shadow-sm", // filled, white text
        secondary:
          "bg-[var(--color-button-filled-secondary)] text-[var(--color-button-filled-text)] hover:bg-[var(--color-button-filled-secondary-hover)] shadow-sm", // filled, white text
        outline:
          "bg-transparent border-2 border-[var(--color-button-outline-border)] text-[var(--color-button-outline-text)] hover:bg-[var(--color-button-ghost-hover-bg)]", // no fill, dark text
        minimal:
          "bg-transparent text-[var(--color-button-ghost-text)] hover:bg-[var(--color-button-ghost-hover-bg)]", // no fill, dark text
        dark:
          "bg-[var(--color-text-primary)] text-[var(--color-button-filled-text)] hover:bg-[var(--color-text-secondary)]", // black fill, white text
        light:
          "bg-transparent text-[var(--color-button-outline-text)] hover:bg-[var(--color-button-ghost-hover-bg)] border border-[var(--color-button-outline-border)]/10", // no fill, dark text
        editorial:
          "border border-[var(--color-button-outline-border)] text-[var(--color-button-outline-text)] hover:bg-[var(--color-button-outline-border)] hover:text-[var(--color-button-filled-text)]", // no fill, dark text, hover black fill
      },
      size: {
        sm: "px-3 py-1.5 text-sm rounded-sm",
        md: "px-5 py-2.5 text-base rounded-md",
        lg: "px-8 py-3.5 text-lg rounded-md",
        xl: "px-10 py-4 text-xl rounded-lg",
      },
      fullWidth: {
        true: "w-full",
        false: "w-auto",
      },
      alignment: {
        left: "justify-start",
        center: "justify-center",
        right: "justify-end",
      },
      motion: {
        none: "",
        pulse: "animate-pulse",
        bounce: "animate-bounce",
        lift: "hover:-translate-y-1",
        scale: "hover:scale-105 active:scale-95",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "md",
      fullWidth: false,
      alignment: "center",
      motion: "scale",
    },
  }
);

// Extended variant props with additional custom props
interface ButtonProps extends VariantProps<typeof buttonVariants> {
  children: React.ReactNode;
  className?: string;
  disabled?: boolean;
  type?: "button" | "submit" | "reset";
  leftIcon?: IconName;
  rightIcon?: IconName;
  iconSize?: number;
  href?: string;
  target?: string;
  rel?: string;
  ariaLabel?: string;
  onClick?: (
    e: React.MouseEvent<HTMLButtonElement | HTMLAnchorElement>
  ) => void;
  animate?: boolean;
  underline?: boolean;
  uppercase?: boolean;
  // Explicitly add these props for type safety
  variant?: "primary" | "secondary" | "outline" | "minimal" | "dark" | "light" | "editorial";
  size?: "sm" | "md" | "lg" | "xl";
  fullWidth?: boolean;
  alignment?: "left" | "center" | "right";
  motion?: "none" | "pulse" | "bounce" | "lift" | "scale";
}

const Button: React.FC<ButtonProps> = ({
  children,
  className = "",
  disabled = false,
  type = "button",
  leftIcon,
  rightIcon,
  iconSize = 18,
  href,
  target,
  rel,
  ariaLabel,
  onClick,
  variant,
  size,
  fullWidth,
  alignment,
  motion: motionVariant,
  animate = false,
  underline = false,
  uppercase = false,
  ...props
}) => {
  // Build composite class based on props
  const buttonClass = `
    ${buttonVariants({ variant, size, fullWidth, alignment, motion: motionVariant })}
    ${disabled ? "opacity-50 cursor-not-allowed pointer-events-none" : ""}
    ${underline ? "underline decoration-1 underline-offset-4 hover:decoration-2" : ""}
    ${uppercase ? "uppercase tracking-wider text-xs" : ""}
    ${className}
  `;

  // Content including icons
  const content = (
    <>
      {leftIcon && (
        <Icon
          name={leftIcon}
          size={iconSize}
          className={`${children ? "mr-2" : ""}`}
          ariaHidden={!!children}
        />
      )}
      <span>{children}</span>
      {rightIcon && (
        <Icon
          name={rightIcon}
          size={iconSize}
          className={`${children ? "ml-2" : ""}`}
          ariaHidden={!!children}
        />
      )}
    </>
  );

  // If href is provided, render as Link
  if (href) {
    return (
      <Link
        href={href}
        className={buttonClass}
        target={target}
        rel={target === "_blank" ? "noopener noreferrer" : rel}
        aria-label={ariaLabel}
        onClick={onClick as React.MouseEventHandler<HTMLAnchorElement>}
        {...props}
      >
        {animate ? (
          <motion.div
            className="flex items-center justify-center w-full h-full"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            transition={{ duration: 0.2 }}
          >
            {content}
          </motion.div>
        ) : (
          content
        )}
      </Link>
    );
  }

  // Otherwise render as button
  return (
    <button
      type={type}
      className={buttonClass}
      disabled={disabled}
      aria-label={ariaLabel}
      onClick={onClick}
      {...props}
    >
      {animate ? (
        <motion.div
          className="flex items-center justify-center w-full h-full"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          transition={{ duration: 0.2 }}
        >
          {content}
        </motion.div>
      ) : (
        content
      )}
    </button>
  );
};

export { Button, buttonVariants };
export type { ButtonProps };
