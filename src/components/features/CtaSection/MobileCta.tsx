"use client";

import React from "react";
import { motion } from "framer-motion";
import { Heading, Text } from "@/components/core/Typography";
import Image from "next/image";
import { EditorialButton } from "@/components/common/Buttons";

interface MobileCtaProps {
  title: string;
  subtitle?: string;
  buttonText: string;
  buttonLink: string;
  showSignature?: boolean;
  showLogo?: boolean;
  variant?: "navy" | "sage" | "cream" | "minimal" | "mauve" | "dark" | "editorial";
  className?: string;
  logoPath?: string;
  logoAlt?: string;
  logoWidth?: number;
  logoHeight?: number;
}

const MobileCta: React.FC<MobileCtaProps> = ({
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
  logoWidth = 160, // Reduced size for mobile
  logoHeight = 53, // Proportionally adjusted
}) => {
  // Define styling based on variant
  const getVariantStyles = () => {
    switch (variant) {
      case "navy":
        return {
          container: "bg-[var(--color-accent-navy)] text-white",
          button: "border-2 border-white text-white bg-transparent hover:bg-white/10",
          line: "bg-white/30",
          signatureAccent: "bg-[var(--color-accent-mauve-light)]",
          heading: "text-white",
          text: "text-white/90",
        };
      case "sage":
        return {
          container: "bg-[var(--color-accent-sage)] text-[var(--color-text-primary)]",
          button: "border-2 border-[var(--color-accent-navy)] text-[var(--color-accent-navy)] bg-transparent hover:bg-[var(--color-accent-navy)]/10",
          line: "bg-[var(--color-text-primary)]/30",
          signatureAccent: "bg-[var(--color-accent-navy)]",
          heading: "text-[var(--color-text-primary)]",
          text: "text-[var(--color-text-secondary)]",
        };
      case "cream":
        return {
          container: "bg-[var(--color-bg-tertiary)] text-[var(--color-text-primary)]",
          button: "border-2 border-[var(--color-accent-navy)] text-[var(--color-accent-navy)] bg-transparent hover:bg-[var(--color-accent-navy)]/10",
          line: "bg-[var(--color-text-primary)]/20",
          signatureAccent: "bg-[var(--color-accent-mauve)]",
          heading: "text-[var(--color-text-primary)]",
          text: "text-[var(--color-text-secondary)]",
        };
      case "minimal":
        return {
          container: "bg-transparent border-t border-b border-[var(--color-text-primary)]/10 text-[var(--color-text-primary)]",
          button: "border-2 border-[var(--color-accent-navy)] text-[var(--color-accent-navy)] bg-transparent hover:bg-[var(--color-accent-navy)]/10",
          line: "bg-[var(--color-text-primary)]/20",
          signatureAccent: "bg-[var(--color-accent-mauve)]",
          heading: "text-[var(--color-text-primary)]",
          text: "text-[var(--color-text-secondary)]",
        };
      case "mauve":
        return {
          container: "bg-[var(--color-accent-mauve)] text-white",
          button: "border-2 border-white text-white bg-transparent hover:bg-white/10",
          line: "bg-white/30",
          signatureAccent: "bg-white",
          heading: "text-white",
          text: "text-white/90",
        };
      case "dark":
        return {
          container: "bg-[var(--color-text-primary)] text-white",
          button: "border-2 border-white text-white bg-transparent hover:bg-white/10",
          line: "bg-white/20",
          signatureAccent: "bg-[var(--color-accent-mauve)]",
          heading: "text-white",
          text: "text-white/90",
        };
      case "editorial":
        return {
          container: "bg-[var(--color-bg-primary)] text-[var(--color-text-primary)] border border-[var(--color-text-primary)]/10",
          button: "border border-[var(--color-text-primary)] text-[var(--color-text-primary)] bg-transparent hover:bg-[var(--color-text-primary)]/5",
          line: "bg-[var(--color-text-primary)]/20",
          signatureAccent: "bg-[var(--color-accent-mauve)]",
          heading: "text-[var(--color-text-primary)]",
          text: "text-[var(--color-text-secondary)]",
        };
      default:
        return {
          container: "bg-[var(--color-accent-navy)] text-white",
          button: "border-2 border-white text-white bg-transparent hover:bg-white/10",
          line: "bg-white/30",
          signatureAccent: "bg-[var(--color-accent-mauve-light)]",
          heading: "text-white",
          text: "text-white/90",
        };
    }
  };

  const styles = getVariantStyles();

  return (
    <section
      className={`py-20 ${styles.container} relative overflow-hidden ${className}`}
      aria-labelledby="mobile-cta-heading"
    >
      {/* Simple background pattern - optimized for mobile */}
      {variant !== "minimal" && (
        <div className="absolute inset-0 opacity-5">
          <div
            className="h-full w-full"
            style={{
              backgroundImage: "linear-gradient(135deg, currentColor 1px, transparent 1px)",
              backgroundSize: "30px 30px", // Smaller pattern for mobile
            }}
          ></div>
        </div>
      )}

      <div className="container mx-auto px-5 relative z-10">
        <div className="flex flex-col items-center text-center">
          {/* Logo - Simplified for mobile */}
          {showLogo && (
            <div className="mb-8">
              <motion.div
                className="relative inline-block"
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <Image
                  src={logoPath}
                  alt={logoAlt}
                  width={logoWidth}
                  height={logoHeight}
                  className="mb-3"
                />
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: "100%" }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  className={`h-px ${styles.line}`}
                />
              </motion.div>
            </div>
          )}

          {/* Title and subtitle - Mobile optimized */}
          <div className="mb-8" id="mobile-cta-heading">
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <Heading
                level={2}
                align="center"
                className={`mb-4 font-serif text-3xl ${styles.heading}`}
              >
                {title}
              </Heading>
            </motion.div>

            {subtitle && (
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <Text
                  size="base" // Smaller for mobile
                  align="center"
                  className={`mb-6 ${styles.text}`}
                >
                  {subtitle}
                </Text>
              </motion.div>
            )}
          </div>

          {/* Full-width CTA button optimized for mobile */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="w-full"
          >
            <EditorialButton
              href={buttonLink}
              variant="bordered"
              size="lg"
              className={`w-full ${styles.button}`}
            >
              {buttonText}
            </EditorialButton>
          </motion.div>

          {/* Signature - Mobile optimized */}
          {showSignature && (
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className={`mt-12 ${styles.text}`}
            >
              <div className="flex flex-col items-center">
                <span className="text-base italic mb-1">
                  Looking forward to our conversation,
                </span>
                <div className="font-serif italic text-lg mt-1">Ashley</div>
                <motion.div
                  className={`mt-1 w-12 h-0.5 ${styles.signatureAccent} rounded-full opacity-50`}
                  initial={{ width: 0 }}
                  whileInView={{ width: "3rem" }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.7 }}
                />
              </div>
            </motion.div>
          )}
        </div>
      </div>
    </section>
  );
};

export default MobileCta;