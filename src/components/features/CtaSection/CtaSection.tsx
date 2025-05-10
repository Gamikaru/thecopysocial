// src/components/sections/CtaSection/CtaSection.tsx
"use client";

import React from "react";
import { motion } from "framer-motion";
import { Heading, Text } from "../../core/Typography";
import Image from "next/image";
import ScrollReveal from "../../common/Animations/ScrollReveal";
import { EditorialButton } from "../../common/Buttons";

interface CtaSectionProps {
  title: string;
  subtitle?: string;
  buttonText: string;
  buttonLink: string;
  showSignature?: boolean;
  showLogo?: boolean;
  variant?:
    | "navy"
    | "sage"
    | "cream"
    | "minimal"
    | "mauve"
    | "dark"
    | "editorial";
  className?: string;
  logoPath?: string;
  logoAlt?: string;
  logoWidth?: number;
  logoHeight?: number;
  alignment?: "center" | "left" | "right";
  showDecorations?: boolean;
}

const CtaSection: React.FC<CtaSectionProps> = ({
  title,
  subtitle,
  buttonText,
  buttonLink,
  showSignature = true,
  showLogo = true,
  variant = "navy",
  className = "",
  logoPath = "/images/copy_social_logo.png",
  logoAlt = "The Copy Social",
  logoWidth = 200,
  logoHeight = 67,
  alignment = "center",
  showDecorations = true,
}) => {
  // Define styling based on variant
  const getVariantStyles = () => {
    switch (variant) {
      case "navy":
        return {
          container: "bg-[var(--color-accent-navy)] text-white",
          button:
            // Always outlined, no fill
            "border-2 border-white text-white bg-transparent hover:bg-white/10",
          buttonFocus:
            "focus:ring-white focus:ring-offset-[var(--color-accent-navy)]",
          overlay: "bg-white/5",
          overlayDark: "bg-black/5",
          decorative: "bg-white/5",
          line: "bg-white/30",
          signatureAccent: "bg-[var(--color-accent-mauve-light)]",
          heading: "text-white",
          text: "text-white/90",
        };
      case "sage":
        return {
          container:
            "bg-[var(--color-accent-sage)] text-[var(--color-text-primary)]",
          button:
            "border-2 border-[var(--color-accent-navy)] text-[var(--color-accent-navy)] bg-transparent hover:bg-[var(--color-accent-navy)]/10",
          buttonFocus:
            "focus:ring-[var(--color-accent-navy)] focus:ring-offset-[var(--color-accent-sage)]",
          overlay: "bg-[var(--color-text-primary)]/5",
          overlayDark: "bg-[var(--color-text-primary)]/10",
          decorative: "bg-[var(--color-text-primary)]/5",
          line: "bg-[var(--color-text-primary)]/30",
          signatureAccent: "bg-[var(--color-accent-navy)]",
          heading: "text-[var(--color-text-primary)]",
          text: "text-[var(--color-text-secondary)]",
        };
      case "cream":
        return {
          container:
            "bg-[var(--color-bg-tertiary)] text-[var(--color-text-primary)]",
          button:
            "border-2 border-[var(--color-accent-navy)] text-[var(--color-accent-navy)] bg-transparent hover:bg-[var(--color-accent-navy)]/10",
          buttonFocus:
            "focus:ring-[var(--color-accent-navy)] focus:ring-offset-[var(--color-bg-tertiary)]",
          overlay: "bg-[var(--color-text-primary)]/5",
          overlayDark: "bg-[var(--color-text-primary)]/10",
          decorative: "bg-[var(--color-accent-mauve)]/10",
          line: "bg-[var(--color-text-primary)]/20",
          signatureAccent: "bg-[var(--color-accent-mauve)]",
          heading: "text-[var(--color-text-primary)]",
          text: "text-[var(--color-text-secondary)]",
        };
      case "minimal":
        return {
          container:
            "bg-transparent border-t border-b border-[var(--color-text-primary)]/10 text-[var(--color-text-primary)]",
          button:
            "border-2 border-[var(--color-accent-navy)] text-[var(--color-accent-navy)] bg-transparent hover:bg-[var(--color-accent-navy)]/10",
          buttonFocus: "focus:ring-[var(--color-accent-navy)]",
          overlay: "bg-transparent",
          overlayDark: "bg-transparent",
          decorative: "bg-[var(--color-text-primary)]/10",
          line: "bg-[var(--color-text-primary)]/20",
          signatureAccent: "bg-[var(--color-accent-mauve)]",
          heading: "text-[var(--color-text-primary)]",
          text: "text-[var(--color-text-secondary)]",
        };
      case "mauve":
        return {
          container: "bg-[var(--color-accent-mauve)] text-white",
          button:
            "border-2 border-white text-white bg-transparent hover:bg-white/10",
          buttonFocus:
            "focus:ring-white focus:ring-offset-[var(--color-accent-mauve)]",
          overlay: "bg-white/5",
          overlayDark: "bg-[var(--color-accent-mauve-dark)]/20",
          decorative: "bg-white/10",
          line: "bg-white/30",
          signatureAccent: "bg-white",
          heading: "text-white",
          text: "text-white/90",
        };
      case "dark":
        return {
          container: "bg-[var(--color-text-primary)] text-white",
          button:
            "border-2 border-white text-white bg-transparent hover:bg-white/10",
          buttonFocus:
            "focus:ring-white focus:ring-offset-[var(--color-text-primary)]",
          overlay: "bg-white/5",
          overlayDark: "bg-black/20",
          decorative: "bg-white/5",
          line: "bg-white/20",
          signatureAccent: "bg-[var(--color-accent-mauve)]",
          heading: "text-white",
          text: "text-white/90",
        };
      case "editorial":
        return {
          container:
            "bg-[var(--color-bg-primary)] text-[var(--color-text-primary)] border border-[var(--color-text-primary)]/10",
          button:
            "border border-[var(--color-text-primary)] text-[var(--color-text-primary)] bg-transparent hover:bg-[var(--color-text-primary)]/5",
          buttonFocus: "focus:ring-[var(--color-accent-mauve)]",
          overlay: "bg-[var(--color-accent-clay)]/5",
          overlayDark: "bg-[var(--color-accent-sage)]/5",
          decorative: "bg-[var(--color-text-primary)]/5",
          line: "bg-[var(--color-text-primary)]/20",
          signatureAccent: "bg-[var(--color-accent-mauve)]",
          heading: "text-[var(--color-text-primary)]",
          text: "text-[var(--color-text-secondary)]",
        };
      default:
        return {
          container: "bg-[var(--color-accent-navy)] text-white",
          button:
            "border-2 border-white text-white bg-transparent hover:bg-white/10",
          buttonFocus:
            "focus:ring-white focus:ring-offset-[var(--color-accent-navy)]",
          overlay: "bg-white/5",
          overlayDark: "bg-black/5",
          decorative: "bg-white/5",
          line: "bg-white/30",
          signatureAccent: "bg-[var(--color-accent-mauve-light)]",
          heading: "text-white",
          text: "text-white/90",
        };
    }
  };

  const styles = getVariantStyles();

  // Define alignment classes
  const alignmentClasses = {
    center: "text-center items-center justify-center",
    left: "text-left items-start justify-start",
    right: "text-right items-end justify-end",
  };

  return (
    <section
      className={`py-28 ${styles.container} relative overflow-hidden ${className}`}
      aria-labelledby="cta-heading"
    >
      {/* Decorative elements - shown only if showDecorations is true */}
      {showDecorations && (
        <div className="absolute inset-0 pointer-events-none">
          {/* Light overlay at top */}
          <div
            className={`absolute top-0 left-0 w-full h-16 ${styles.overlay}`}
          ></div>
          <div
            className={`absolute top-16 left-0 w-full h-8 ${styles.overlay}`}
          ></div>

          {/* Dark overlay at bottom */}
          <div
            className={`absolute bottom-0 left-0 w-full h-16 ${styles.overlayDark}`}
          ></div>
          <div
            className={`absolute bottom-16 left-0 w-full h-8 ${styles.overlayDark}`}
          ></div>

          {/* Animated floating elements */}
          <motion.div
            className={`absolute top-1/3 right-1/4 w-40 h-40 rounded-full ${styles.decorative}`}
            animate={{
              scale: [1, 1.1, 1],
              opacity: [0.1, 0.15, 0.1],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />

          <motion.div
            className={`absolute bottom-1/4 left-1/4 w-24 h-24 rounded-full ${styles.decorative}`}
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.05, 0.1, 0.05],
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1,
            }}
          />

          {/* Additional decorative element */}
          <motion.div
            className={`absolute top-1/4 left-1/3 w-16 h-16 ${styles.decorative}`}
            style={{ borderRadius: "30% 70% 70% 30% / 30% 30% 70% 70%" }}
            animate={{
              scale: [1, 1.3, 1],
              opacity: [0.05, 0.1, 0.05],
              rotate: [0, 45, 0],
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 2,
            }}
          />

          {/* Background pattern */}
          {variant !== "minimal" && (
            <div className="absolute inset-0 opacity-5">
              <div
                className="h-full w-full"
                style={{
                  backgroundImage:
                    "linear-gradient(135deg, currentColor 1px, transparent 1px)",
                  backgroundSize: "40px 40px",
                }}
              ></div>
            </div>
          )}

          {/* Editorial grid overlay for sophisticated design */}
          {variant === "editorial" && (
            <div className="absolute inset-0 grid grid-cols-12 pointer-events-none">
              {[...Array(12)].map((_, i) => (
                <div
                  key={i}
                  className="border-l border-[var(--color-text-primary)]/5 h-full"
                />
              ))}
            </div>
          )}
        </div>
      )}

      <div className="container mx-auto px-5 md:px-8 relative z-10">
        <ScrollReveal>
          <div
            className={`max-w-3xl mx-auto flex flex-col ${alignmentClasses[alignment]}`}
          >
            <div className={`${alignmentClasses[alignment]}`}>
              {/* Logo */}
              {showLogo && (
                <div
                  className={`mb-10 flex ${alignment === "center" ? "justify-center" : alignment === "right" ? "justify-end" : "justify-start"}`}
                >
                  <motion.div
                    className="relative inline-block"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                  >
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: "100%" }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: 0.5 }}
                      className={`absolute bottom-0 left-0 h-0.5 ${styles.line}`}
                    />
                    <Image
                      src={logoPath}
                      alt={logoAlt}
                      width={logoWidth}
                      height={logoHeight}
                      className="mb-4"
                    />
                  </motion.div>
                </div>
              )}

              {/* Title and subtitle */}
              <div className="mb-10" id="cta-heading">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                >
                  <Heading
                    level={2}
                    align={alignment}
                    className={`mb-6 font-serif ${styles.heading}`}
                  >
                    {title}
                  </Heading>
                </motion.div>

                {subtitle && (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                  >
                    <Text
                      size="lg"
                      align={alignment}
                      className={`max-w-2xl mx-auto mb-8 ${styles.text}`}
                    >
                      {subtitle}
                    </Text>
                  </motion.div>
                )}
              </div>

              {/* Enhanced CTA button with animation and hover effects */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="inline-block"
              >
                <motion.div
                  whileHover={{ scale: 1.05, y: -3 }}
                  whileTap={{ scale: 0.98 }}
                  transition={{ duration: 0.2 }}
                >
                  <EditorialButton
                    href={buttonLink}
                    variant={variant === "editorial" ? "bordered" : "accent"}
                    color={variant === "editorial" ? "primary" : "light"}
                    size="lg"
                    className="font-medium shadow-lg hover:shadow-xl transition-all duration-300"
                  >
                    {buttonText}
                  </EditorialButton>
                </motion.div>
              </motion.div>

              {/* Personal signature with animation */}
              {showSignature && (
                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, delay: 0.9 }}
                  className={`mt-16 text-opacity-90 text-sm ${styles.text}`}
                >
                  <div
                    className={`flex flex-col ${alignment === "center" ? "items-center" : alignment === "right" ? "items-end" : "items-start"}`}
                  >
                    <span className="text-lg italic mb-1">
                      Looking forward to our conversation,
                    </span>
                    <div className="font-serif italic text-xl mt-2">Ashley</div>
                    <motion.div
                      className={`mt-1 w-16 h-0.5 ${styles.signatureAccent} rounded-full opacity-50`}
                      initial={{ width: 0 }}
                      whileInView={{ width: "4rem" }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: 1.2 }}
                    />
                  </div>
                </motion.div>
              )}
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default CtaSection;
