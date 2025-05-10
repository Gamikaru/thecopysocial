// src/components/ui/Typography.tsx
"use client";

import React, { JSX as ReactJSX } from "react"; // 1. Import JSX namespace
import { motion } from "framer-motion";
import { textRevealVariants } from "@/components/common/Animations/variants";

// ============= HEADING COMPONENTS =============

export interface HeadingProps {
  children: React.ReactNode;
  level?: 1 | 2 | 3 | 4 | 5 | 6;
  as?: keyof ReactJSX.IntrinsicElements; // 1. Use ReactJSX.IntrinsicElements
  className?: string;
  weight?: "light" | "normal" | "medium" | "semibold" | "bold";
  serif?: boolean;
  color?: "primary" | "secondary" | "tertiary" | "accent" | "brand";
  align?: "left" | "center" | "right";
  animate?: boolean;
  letterSpacing?: "normal" | "wide" | "wider" | "tight";
}

export const Heading: React.FC<HeadingProps> = ({
  children,
  level = 2,
  as,
  className = "",
  weight = "semibold",
  serif = true, // Default to serif for headings in this luxury brand
  color = "primary",
  align = "left",
  animate = false,
  letterSpacing = "normal",
}) => {
  // Define base sizing classes by heading level
  const sizeClasses = {
    1: "text-4xl md:text-5xl lg:text-6xl",
    2: "text-3xl md:text-4xl",
    3: "text-2xl md:text-3xl",
    4: "text-xl md:text-2xl",
    5: "text-lg md:text-xl",
    6: "text-base md:text-lg",
  };

  // Define weight classes
  const weightClasses = {
    light: "font-light",
    normal: "font-normal",
    medium: "font-medium",
    semibold: "font-semibold",
    bold: "font-bold",
  };

  // Define color classes
  const colorClasses = {
    primary: "text-text-primary",
    secondary: "text-text-secondary",
    tertiary: "text-text-tertiary",
    accent: "text-brand-accent",
    brand: "text-brand-primary",
  };

  // Define alignment classes
  const alignClasses = {
    left: "text-left",
    center: "text-center",
    right: "text-right",
  };

  // Define letter spacing classes
  const letterSpacingClasses = {
    normal: "tracking-normal",
    wide: "tracking-wide",
    wider: "tracking-wider",
    tight: "tracking-tight",
  };

  // Combine all the classes
  const combinedClasses = `
    ${sizeClasses[level]}
    ${weightClasses[weight]}
    ${colorClasses[color]}
    ${alignClasses[align]}
    ${letterSpacingClasses[letterSpacing]}
    ${serif ? "font-serif" : "font-sans"}
    leading-tight mb-4
    ${className}
  `;

  // Determine which HTML tag to use (either the one specified or based on level)
  const Tag = as || (`h${level}` as keyof ReactJSX.IntrinsicElements); // 2. Ensure Tag is always a string (not a number)

  // If animation is enabled, wrap in motion component
  if (animate) {
    return (
      <motion.div
        variants={textRevealVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
      >
        {React.createElement(Tag, { className: combinedClasses }, children)}
      </motion.div>
    );
  }

  // Without animation
  return React.createElement(Tag, { className: combinedClasses }, children);
};

// ============= PARAGRAPH COMPONENTS =============

export interface TextProps {
  children: React.ReactNode;
  as?: "p" | "span" | "div";
  className?: string;
  size?: "xs" | "sm" | "base" | "lg" | "xl";
  weight?: "light" | "normal" | "medium" | "semibold" | "bold";
  color?: "primary" | "secondary" | "tertiary" | "accent" | "brand";
  align?: "left" | "center" | "right";
  animate?: boolean;
  serif?: boolean;
  italic?: boolean;
  letterSpacing?: "normal" | "wide" | "wider" | "tight";
  leading?: "none" | "tight" | "normal" | "relaxed" | "loose";
}

export const Text: React.FC<TextProps> = ({
  children,
  as = "p",
  className = "",
  size = "base",
  weight = "normal",
  color = "primary",
  align = "left",
  animate = false,
  serif = false,
  italic = false,
  letterSpacing = "normal",
  leading = "normal",
}) => {
  // Define size classes
  const sizeClasses = {
    xs: "text-xs",
    sm: "text-sm",
    base: "text-base",
    lg: "text-lg",
    xl: "text-xl",
  };

  // Define weight classes
  const weightClasses = {
    light: "font-light",
    normal: "font-normal",
    medium: "font-medium",
    semibold: "font-semibold",
    bold: "font-bold",
  };

  // Define color classes
  const colorClasses = {
    primary: "text-text-primary",
    secondary: "text-text-secondary",
    tertiary: "text-text-tertiary",
    accent: "text-brand-accent",
    brand: "text-brand-primary",
  };

  // Define alignment classes
  const alignClasses = {
    left: "text-left",
    center: "text-center",
    right: "text-right",
  };

  // Define letter spacing classes
  const letterSpacingClasses = {
    normal: "tracking-normal",
    wide: "tracking-wide",
    wider: "tracking-wider",
    tight: "tracking-tight",
  };

  // Define line height classes
  const lineHeightClasses = {
    none: "leading-none",
    tight: "leading-tight",
    normal: "leading-normal",
    relaxed: "leading-relaxed",
    loose: "leading-loose",
  };

  // Combine all the classes
  const combinedClasses = `
    ${sizeClasses[size]}
    ${weightClasses[weight]}
    ${colorClasses[color]}
    ${alignClasses[align]}
    ${letterSpacingClasses[letterSpacing]}
    ${lineHeightClasses[leading]}
    ${serif ? "font-serif" : "font-sans"}
    ${italic ? "italic" : ""}
    mb-4
    ${className}
  `;

  // If animation is enabled, wrap in motion component
  if (animate) {
    return (
      <motion.div
        variants={textRevealVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
      >
        {React.createElement(as, { className: combinedClasses }, children)}
      </motion.div>
    );
  }

  // Without animation
  return React.createElement(as, { className: combinedClasses }, children);
};

// ============= SPECIALIZED TEXT COMPONENTS =============

// Lead paragraph (larger, more prominent)
export const Lead: React.FC<Omit<TextProps, "size">> = (props) => (
  <Text {...props} size="lg" className={`mb-6 ${props.className || ""}`} />
);

// Caption text (smaller, usually for images or secondary content)
export const Caption: React.FC<Omit<TextProps, "size" | "color">> = (props) => (
  <Text
    {...props}
    size="sm"
    color="tertiary"
    className={`mb-2 ${props.className || ""}`}
  />
);

// Quote blockquote component
export interface QuoteProps extends Omit<TextProps, "as"> {
  author?: string;
  source?: string;
}

export const Quote: React.FC<QuoteProps> = ({
  children,
  author,
  source,
  className = "",
  ...restProps
}) => {
  return (
    <blockquote
      className={`border-l-4 border-brand-accent pl-5 py-2 my-6 ${className}`}
    >
      <Text {...restProps} italic serif size="lg" className="mb-2">
        {/* 3. Escape quotes */}
        &quot;{children}&quot;
      </Text>

      {(author || source) && (
        <footer className="mt-2">
          {author && (
            <Text size="sm" weight="medium" color="secondary" className="mb-0">
              &mdash; {author}
              {source && <span>, </span>}
            </Text>
          )}

          {source && (
            <Text as="span" size="sm" color="tertiary" italic className="mb-0">
              {source}
            </Text>
          )}
        </footer>
      )}
    </blockquote>
  );
};

// Highlight text component for emphasizing important text
export interface HighlightProps extends Omit<TextProps, "as"> {
  type?: "brand" | "accent" | "subtle";
}

export const Highlight: React.FC<HighlightProps> = ({
  children,
  type = "brand",
  className = "",
  ...restProps
}) => {
  // Define background classes based on type
  const bgClasses = {
    brand: "bg-brand-primary text-text-on-accent",
    accent: "bg-brand-accent text-text-on-accent",
    subtle: "bg-bg-tertiary",
  };

  return (
    <Text
      as="span"
      {...restProps}
      className={`px-1 py-0.5 rounded-sm inline-block ${bgClasses[type]} ${className}`}
    >
      {children}
    </Text>
  );
};

// Animated text reveal component
export const RevealText: React.FC<TextProps> = (props) => (
  <Text {...props} animate />
);

// Export a simple usage example component
const TypographyDemo: React.FC = () => (
  <div className="max-w-4xl mx-auto p-6">
    <Heading level={1} align="center" animate letterSpacing="tight">
      Typography System
    </Heading>

    <Heading level={2} color="brand">
      Headings
    </Heading>
    <Heading level={3} weight="medium">
      Consistent text styling
    </Heading>
    <Heading level={4} serif={false}>
      Sans-serif option
    </Heading>

    <Heading level={2} color="brand" className="mt-8">
      Text Components
    </Heading>
    <Lead>
      This lead paragraph stands out with larger text. Perfect for introductions
      or important statements that deserve extra attention.
    </Lead>

    <Text>
      Regular paragraph text provides clear, readable content. This is where the
      bulk of your page information lives, so it&apos;s designed for optimal
      readability and comfort during longer reading sessions.
    </Text>

    <Text size="sm" color="secondary">
      Smaller text works well for supporting information that doesn&apos;t need to
      draw as much attention but still provides value to the reader.
    </Text>

    <Heading level={2} color="brand" className="mt-8">
      Specialty Components
    </Heading>

    <Quote author="Jane Doe" source="Design Magazine">
      Typography is the art and technique of arranging type to make written
      language legible, readable, and appealing when displayed.
    </Quote>

    <Text>
      When you need to <Highlight>emphasize important points</Highlight> within
      your text, highlights make them{" "}
      <Highlight type="accent">stand out</Highlight> visually while maintaining
      the <Highlight type="subtle">flow of content</Highlight>.
    </Text>

    <Caption>
      This caption text works well for image descriptions or small print
      information.
    </Caption>
  </div>
);

export default TypographyDemo;
