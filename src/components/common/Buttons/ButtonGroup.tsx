// src/components/ui/Button/ButtonGroup.tsx
import React from "react";

interface ButtonGroupProps {
  children: React.ReactNode;
  className?: string;
  orientation?: "horizontal" | "vertical";
  spacing?: "none" | "sm" | "md" | "lg";
  fullWidth?: boolean;
  alignment?: "left" | "center" | "right";
  dividers?: boolean;
}

const ButtonGroup: React.FC<ButtonGroupProps> = ({
  children,
  className = "",
  orientation = "horizontal",
  spacing = "md",
  fullWidth = false,
  alignment = "left",
  dividers = false,
}) => {
  // Spacing classes
  const spacingClasses = {
    none: orientation === "horizontal" ? "space-x-0" : "space-y-0",
    sm: orientation === "horizontal" ? "space-x-2" : "space-y-2",
    md: orientation === "horizontal" ? "space-x-4" : "space-y-4",
    lg: orientation === "horizontal" ? "space-x-6" : "space-y-6",
  };

  // Alignment classes
  const alignmentClasses = {
    left: "justify-start",
    center: "justify-center",
    right: "justify-end",
  };

  // Divider classes if enabled
  const dividerClass = dividers
    ? orientation === "horizontal"
      ? "divide-x divide-[var(--color-text-primary)]/10"
      : "divide-y divide-[var(--color-text-primary)]/10"
    : "";

  return (
    <div
      className={`
        flex
        ${orientation === "horizontal" ? "flex-row" : "flex-col"}
        ${spacingClasses[spacing]}
        ${fullWidth ? "w-full" : "w-fit"}
        ${alignmentClasses[alignment]}
        ${dividerClass}
        ${className}
      `}
      role="group"
    >
      {React.Children.map(children, (child) => {
        if (!React.isValidElement(child)) return child;

        // Only add className if the child accepts it (i.e., is a component or element that supports className)
        if (fullWidth) {
          // Type guard: only pass className to elements that accept it
          // Most custom button components and HTML elements accept className
          return React.cloneElement(
            child as React.ReactElement<{ className?: string }>,
            {
              className: `${(child.props && (child.props as { className?: string }).className) || ''} w-full`
            }
          );
        }
        return child;
      })}
    </div>
  );
};

export { ButtonGroup };
export type { ButtonGroupProps };