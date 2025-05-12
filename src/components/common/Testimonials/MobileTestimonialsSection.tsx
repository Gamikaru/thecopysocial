// src/components/features/Testimonials/MobileTestimonialsSection.tsx
"use client";

import React, { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { testimonials as homeTestimonials } from "@/content/data/home";

interface MobileTestimonialsSectionProps {
  className?: string;
  title?: string;
  subtitle?: string;
}

const MobileTestimonialsSection: React.FC<MobileTestimonialsSectionProps> = ({
  className = "",
  title = "What Clients Say",
  subtitle = "Don't just take my word for it. Here's what clients have to say about working with me.",
}) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [touchStartX, setTouchStartX] = useState(0);
  const [touchEndX, setTouchEndX] = useState(0);

  const nextTestimonial = useCallback(() => {
    if (isAnimating) return;
    setIsAnimating(true);
    setActiveIndex((prev) =>
      prev === homeTestimonials.length - 1 ? 0 : prev + 1
    );
    setTimeout(() => setIsAnimating(false), 400);
  }, [isAnimating]);

  const prevTestimonial = useCallback(() => {
    if (isAnimating) return;
    setIsAnimating(true);
    setActiveIndex((prev) =>
      prev === 0 ? homeTestimonials.length - 1 : prev - 1
    );
    setTimeout(() => setIsAnimating(false), 400);
  }, [isAnimating]);

  const currentTestimonial = homeTestimonials[activeIndex];

  // Handle touch events for swipe
  const handleTouchStart = (e: React.TouchEvent<HTMLDivElement>) => {
    setTouchStartX(e.touches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent<HTMLDivElement>) => {
    setTouchEndX(e.touches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (!touchStartX || !touchEndX) return;
    const distance = touchStartX - touchEndX;
    const isSwipe = Math.abs(distance) > 50; // Minimum swipe distance

    if (isSwipe) {
      if (distance > 0) {
        // Swipe left -> next
        nextTestimonial();
      } else {
        // Swipe right -> prev
        prevTestimonial();
      }
    }

    // Reset touch coordinates
    setTouchStartX(0);
    setTouchEndX(0);
  };

  // Auto advance carousel
  useEffect(() => {
    const timer = setTimeout(() => {
      if (!isAnimating) {
        nextTestimonial();
      }
    }, 6000);

    return () => clearTimeout(timer);
  }, [activeIndex, isAnimating, nextTestimonial]);

  return (
    <section
      className={`py-20 bg-[var(--color-bg-primary)] relative ${className}`}
    >
      {/* Simplified background typography for mobile */}
      <div className="absolute bottom-10 left-0 text-[18vw] leading-none font-bold tracking-tighter text-[var(--color-accent-mauve)]/[0.05] pointer-events-none z-0">
        WORDS
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Mobile-optimized section header */}
        <motion.div
          className="mb-10"
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center mb-4">
            <div className="h-px w-12 bg-[var(--color-text-primary)] mr-4"></div>
            <span className="uppercase tracking-[0.2em] text-xs text-[var(--color-text-secondary)]">
              Testimonials
            </span>
          </div>

          <h2 className="text-3xl font-bold tracking-tight mb-4 text-[var(--color-text-primary)]">
            {title}
          </h2>

          <p className="text-base text-[var(--color-text-secondary)] font-light leading-relaxed">
            {subtitle}
          </p>
        </motion.div>

        {/* Mobile-optimized carousel with swipe functionality */}
        <div
          className="relative mb-8"
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          {/* Quotation marks - smaller for mobile */}
          <div className="absolute -top-8 left-0 text-[5rem] leading-none font-serif text-[var(--color-accent-clay)]/5 pointer-events-none">
            &quot;
          </div>
          <div className="absolute -bottom-8 right-0 text-[5rem] leading-none font-serif text-[var(--color-accent-clay)]/5 pointer-events-none transform rotate-180">
            &quot;
          </div>

          <div className="relative min-h-[240px] py-4">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeIndex}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
              >
                {/* Testimonial text */}
                <blockquote className="text-lg italic font-light font-serif leading-relaxed mb-6 text-[var(--color-text-primary)]">
                  &quot;{currentTestimonial.quote}&quot;
                </blockquote>

                {/* Attribution with editorial treatment */}
                <div className="flex items-center mt-4">
                  <div className="h-px w-8 bg-[var(--color-accent-clay)] mr-4"></div>
                  <div>
                    <p className="font-medium text-[var(--color-text-primary)]">
                      {currentTestimonial.author}
                    </p>
                    {currentTestimonial.company && (
                      <p className="text-sm text-[var(--color-text-secondary)]">
                        {currentTestimonial.company}
                      </p>
                    )}
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* Mobile-optimized navigation and indicators */}
        <div className="flex flex-col items-center">
          {/* Touch-friendly navigation buttons */}
          <div className="flex justify-center space-x-4 mb-6">
            <button
              onClick={prevTestimonial}
              className="w-10 h-10 border border-[var(--color-text-primary)] flex items-center justify-center hover:bg-[var(--color-text-primary)] hover:text-[var(--color-bg-primary)] transition-colors"
              aria-label="Previous testimonial"
            >
              <span className="sr-only">Previous</span>←
            </button>
            <button
              onClick={nextTestimonial}
              className="w-10 h-10 border border-[var(--color-text-primary)] flex items-center justify-center hover:bg-[var(--color-text-primary)] hover:text-[var(--color-bg-primary)] transition-colors"
              aria-label="Next testimonial"
            >
              <span className="sr-only">Next</span>→
            </button>
          </div>

          {/* Indicators */}
          <div className="flex space-x-1">
            {homeTestimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`h-px w-6 transition-all duration-300 ${
                  index === activeIndex
                    ? "bg-[var(--color-accent-mauve)]"
                    : "bg-[var(--color-text-primary)]/20 hover:bg-[var(--color-text-primary)]/40"
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Simplified editorial page marker */}
        <motion.div
          className="mt-10 flex justify-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <div className="flex items-center text-[var(--color-text-tertiary)]">
            <div className="h-px w-8 bg-[var(--color-text-tertiary)] mr-3"></div>
            <span className="uppercase tracking-[0.2em] text-xs">005</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default MobileTestimonialsSection;
