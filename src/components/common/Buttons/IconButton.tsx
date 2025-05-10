// src/components/ui/Button/IconButton.tsx
"use client";

import React from "react";
import { motion } from "framer-motion";
import Icon, { IconName } from "../../core/Icon";
import Link from "next/link";
import { cva, type VariantProps } from "class-variance-authority";

const iconButtonVariants = cva(
  "inline-flex items-center justify-center transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2",
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
        ghost:
          "bg-transparent text-[var(--color-button-ghost-text)] hover:bg-[var(--color-button-ghost-hover-bg)]", // no fill, dark text
        light:
          "bg-transparent text-[var(--color-button-outline-text)] hover:bg-[var(--color-button-ghost-hover-bg)] border border-[var(--color-button-outline-border)]/10", // no fill, dark text
        editorial:
          "border border-[var(--color-button-outline-border)] text-[var(--color-button-outline-text)] hover:bg-[var(--color-button-outline-border)] hover:text-[var(--color-button-filled-text)]", // no fill, dark text, hover black fill
      },
      size: {
        xs: "p-1 text-sm rounded-sm",
        sm: "p-2 text-sm rounded-md",
        md: "p-3 text-base rounded-md",
        lg: "p-4 text-lg rounded-lg",
        xl: "p-5 text-xl rounded-xl",
      },
      shape: {
        square: "rounded-md",
        circle: "rounded-full",
        geometric: "rounded-[0.5rem_2rem_2rem_0.5rem]",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "md",
      shape: "circle",
    },
  }
);

interface IconButtonProps extends VariantProps<typeof iconButtonVariants> {
  icon: IconName;
  className?: string;
  disabled?: boolean;
  type?: "button" | "submit" | "reset";
  href?: string;
  target?: string;
  rel?: string;
  ariaLabel: string;
  iconSize?: number;
  onClick?: (
    e: React.MouseEvent<HTMLButtonElement | HTMLAnchorElement>
  ) => void;
  animate?: boolean;
  // Explicitly add these props for type safety
  variant?: "primary" | "secondary" | "outline" | "minimal" | "ghost" | "light" | "editorial";
  size?: "xs" | "sm" | "md" | "lg" | "xl";
  shape?: "square" | "circle" | "geometric";
}

const IconButton: React.FC<IconButtonProps> = ({
  icon,
  className = "",
  disabled = false,
  type = "button",
  href,
  target,
  rel,
  ariaLabel,
  iconSize = 20,
  onClick,
  variant,
  size,
  shape,
  animate = false,
  ...props
}) => {
  const buttonClass = `
    ${iconButtonVariants({ variant, size, shape })}
    ${disabled ? "opacity-50 cursor-not-allowed pointer-events-none" : ""}
    ${className}
  `;

  const content = <Icon name={icon} size={iconSize} />;

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
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
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
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
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

export { IconButton, iconButtonVariants };
export type { IconButtonProps };
