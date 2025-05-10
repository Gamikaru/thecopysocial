// src/components/sections/CtaSection/CtaSection.tsx
"use client";

import React from "react";
import { motion } from "framer-motion";
import { Heading, Text } from '../../../core/Typography';
import Icon from '../../../core/Icon';
import Link from "next/link";
import Image from "next/image";
import ScrollReveal from '../../../common/Animations/ScrollReveal';

interface CtaSectionProps {
  title: string;
  subtitle?: string;
  buttonText: string;
  buttonLink: string;
  showSignature?: boolean;
  showLogo?: boolean;
  variant?: "navy" | "sage" | "cream" | "minimal";
  className?: string;
  logoPath?: string;
  logoAlt?: string;
  logoWidth?: number;
  logoHeight?: number;
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
}) => {
  // Define styling based on variant
  const getVariantStyles = () => {
    switch (variant) {
      case "navy":
        return {
          container:
            "bg-[var(--color-navy-primary)] text-[var(--color-off-white)]",
          button:
            "bg-[var(--color-off-white)] text-[var(--color-navy-primary)] hover:bg-[var(--color-cream)]",
          buttonFocus:
            "focus:ring-white focus:ring-offset-[var(--color-navy-primary)]",
          overlay: "bg-white/5",
          overlayDark: "bg-black/5",
          decorative: "bg-white/5",
          line: "bg-white/30",
          signatureAccent: "bg-[var(--color-accent-pink-light)]",
        };
      case "sage":
        return {
          container:
            "bg-[var(--color-sage-primary)] text-[var(--color-navy-primary)]",
          button:
            "bg-[var(--color-navy-primary)] text-[var(--color-off-white)] hover:bg-[var(--color-navy-secondary)]",
          buttonFocus:
            "focus:ring-[var(--color-navy-primary)] focus:ring-offset-[var(--color-sage-primary)]",
          overlay: "bg-[var(--color-navy-primary)]/5",
          overlayDark: "bg-[var(--color-navy-primary)]/10",
          decorative: "bg-[var(--color-navy-primary)]/5",
          line: "bg-[var(--color-navy-primary)]/30",
          signatureAccent: "bg-[var(--color-navy-primary)]",
        };
      case "cream":
        return {
          container: "bg-[var(--color-cream)] text-[var(--color-navy-primary)]",
          button:
            "bg-[var(--color-navy-primary)] text-[var(--color-off-white)] hover:bg-[var(--color-navy-secondary)]",
          buttonFocus:
            "focus:ring-[var(--color-navy-primary)] focus:ring-offset-[var(--color-cream)]",
          overlay: "bg-[var(--color-navy-primary)]/5",
          overlayDark: "bg-[var(--color-navy-primary)]/10",
          decorative: "bg-[var(--color-accent-pink-light)]/10",
          line: "bg-[var(--color-navy-primary)]/20",
          signatureAccent: "bg-[var(--color-accent-pink-light)]",
        };
      case "minimal":
        return {
          container:
            "bg-transparent border-t border-b border-[var(--color-sage-10)] text-[var(--color-navy-primary)]",
          button:
            "bg-[var(--color-navy-primary)] text-[var(--color-off-white)] hover:bg-[var(--color-navy-secondary)]",
          buttonFocus: "focus:ring-[var(--color-navy-primary)]",
          overlay: "bg-transparent",
          overlayDark: "bg-transparent",
          decorative: "bg-[var(--color-sage-10)]",
          line: "bg-[var(--color-sage-primary)]/20",
          signatureAccent: "bg-[var(--color-accent-pink-light)]",
        };
      default:
        return {
          container:
            "bg-[var(--color-navy-primary)] text-[var(--color-off-white)]",
          button:
            "bg-[var(--color-off-white)] text-[var(--color-navy-primary)] hover:bg-[var(--color-cream)]",
          buttonFocus:
            "focus:ring-white focus:ring-offset-[var(--color-navy-primary)]",
          overlay: "bg-white/5",
          overlayDark: "bg-black/5",
          decorative: "bg-white/5",
          line: "bg-white/30",
          signatureAccent: "bg-[var(--color-accent-pink-light)]",
        };
    }
  };

  const styles = getVariantStyles();

  return (
    <section
      className={`py-28 ${styles.container} relative overflow-hidden ${className}`}
    >
      {/* Enhanced decorative elements */}
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
      </div>

      <div className="container mx-auto px-5 md:px-8 relative z-10">
        <ScrollReveal>
          <div className="max-w-3xl mx-auto">
            <div className="text-center">
              {/* Logo */}
              {showLogo && (
                <div className="mb-10 flex justify-center">
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
              <div className="mb-10">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                >
                  <Heading level={2} align="center" className="mb-6 font-serif">
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
                      align="center"
                      className="max-w-2xl mx-auto mb-8"
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
                  <Link
                    href={buttonLink}
                    className={`inline-flex items-center px-8 py-4 ${styles.button} rounded-md font-medium shadow-lg hover:shadow-xl transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 ${styles.buttonFocus}`}
                  >
                    {buttonText}
                    <Icon name="fi:FiArrowRight" size={18} className="ml-2" />
                  </Link>
                </motion.div>
              </motion.div>

              {/* Personal signature with animation */}
              {showSignature && (
                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, delay: 0.9 }}
                  className="mt-16 text-opacity-90 text-sm"
                >
                  <div className="flex flex-col items-center">
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
