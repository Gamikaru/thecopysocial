// src/components/features/Testimonials/DesktopTestimonialsSection.tsx
"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { testimonials as homeTestimonials } from '@/content/data/home';

interface DesktopTestimonialsSectionProps {
  className?: string;
  title?: string;
  subtitle?: string;
}

const DesktopTestimonialsSection: React.FC<DesktopTestimonialsSectionProps> = ({
  className = '',
  title = "What Clients Say",
  subtitle = "Don't just take my word for it. Here's what clients have to say about working with me."
}) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const nextTestimonial = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setActiveIndex((prev) => (prev === homeTestimonials.length - 1 ? 0 : prev + 1));
    setTimeout(() => setIsAnimating(false), 400);
  };

  const prevTestimonial = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setActiveIndex((prev) => (prev === 0 ? homeTestimonials.length - 1 : prev - 1));
    setTimeout(() => setIsAnimating(false), 400);
  };

  const currentTestimonial = homeTestimonials[activeIndex];

  return (
    <section className={`py-32 bg-[var(--color-bg-primary)] relative ${className}`}>
      {/* Editorial grid overlay */}
      <div className="absolute inset-0 grid grid-cols-12 pointer-events-none">
        {[...Array(12)].map((_, i) => (
          <div key={i} className="border-l border-[var(--color-text-primary)]/5 h-full" />
        ))}
      </div>

      {/* Editorial background typography element */}
      <div className="absolute bottom-20 left-0 text-[20vw] leading-none font-bold tracking-tighter text-[var(--color-accent-mauve)]/[0.05] pointer-events-none z-0">
        REVIEWS
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-12 gap-4">
          {/* Editorial section header */}
          <motion.div
            className="col-span-12 mb-24"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex items-center mb-6">
              <div className="h-px w-16 bg-[var(--color-text-primary)] mr-4"></div>
              <span className="uppercase tracking-[0.3em] text-xs text-[var(--color-text-secondary)]">Testimonials</span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
              <div className="md:col-span-5 md:col-start-2">
                <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-6 text-[var(--color-text-primary)]">
                  {title}
                </h2>
              </div>

              <div className="md:col-span-5 md:col-start-7">
                <p className="text-lg text-[var(--color-text-secondary)] font-light leading-relaxed">
                  {subtitle}
                </p>
              </div>
            </div>

            {/* Editorial horizontal line */}
            <motion.div
              className="h-px bg-[var(--color-text-primary)]/10 w-full mt-16"
              initial={{ width: 0 }}
              whileInView={{ width: "100%" }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
            />
          </motion.div>

          {/* Editorial testimonial carousel */}
          <div className="col-span-12 md:col-span-10 md:col-start-2 relative min-h-[320px]">
            {/* Dramatically oversized quotation marks */}
            <div className="absolute -top-24 left-0 text-[10rem] md:text-[15rem] leading-none font-serif text-[var(--color-accent-clay)]/5 pointer-events-none z-0">
              &quot;
            </div>
            <div className="absolute -bottom-24 right-0 text-[10rem] md:text-[15rem] leading-none font-serif text-[var(--color-accent-clay)]/5 pointer-events-none z-0 transform rotate-180">
              &quot;
            </div>

            {/* Carousel with AnimatePresence for transitions */}
            <AnimatePresence mode="wait">
              <motion.div
                key={activeIndex}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -30 }}
                transition={{ duration: 0.6, ease: "easeInOut" }}
                className="relative py-8"
              >
                <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
                  {/* Testimonial text with editorial styling */}
                  <div className="md:col-span-8 md:col-start-1">
                    <blockquote className="text-xl md:text-3xl font-light italic font-serif leading-relaxed mb-10 text-[var(--color-text-primary)]">
                      &quot;{currentTestimonial.quote}&quot;
                    </blockquote>

                    {/* Attribution with editorial treatment */}
                    <div className="flex items-center">
                      <div className="h-px w-12 bg-[var(--color-accent-clay)] mr-6"></div>
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
                  </div>

                  {/* Editorial page indicator */}
                  <div className="hidden md:block md:col-span-3 md:col-start-10">
                    <div className="border border-[var(--color-accent-mauve-light)] aspect-square flex items-center justify-center relative">
                      <span className="text-6xl font-bold text-[var(--color-accent-mauve)]">
                        {activeIndex + 1}
                      </span>
                      <span className="absolute bottom-2 right-2 text-sm text-[var(--color-text-secondary)]">
                        / {homeTestimonials.length}
                      </span>
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Editorial navigation */}
            <div className="mt-16 flex justify-between items-center">
              {/* Indicators */}
              <div className="flex space-x-1">
                {homeTestimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setActiveIndex(index)}
                    className={`h-px w-8 transition-all duration-300 ${
                      index === activeIndex ? 'bg-[var(--color-accent-mauve)]' : 'bg-[var(--color-text-primary)]/20 hover:bg-[var(--color-text-primary)]/50'
                    }`}
                    aria-label={`Go to testimonial ${index + 1}`}
                  />
                ))}
              </div>

              {/* Navigation buttons */}
              <div className="flex space-x-4">
                <button
                  onClick={prevTestimonial}
                  className="w-12 h-12 border border-[var(--color-text-primary)] flex items-center justify-center hover:bg-[var(--color-accent-navy)] hover:border-[var(--color-accent-navy)] hover:text-[var(--color-text-on-accent)] transition-colors"
                  aria-label="Previous testimonial"
                >
                  <span className="sr-only">Previous</span>
                  ←
                </button>
                <button
                  onClick={nextTestimonial}
                  className="w-12 h-12 border border-[var(--color-text-primary)] flex items-center justify-center hover:bg-[var(--color-accent-navy)] hover:border-[var(--color-accent-navy)] hover:text-[var(--color-text-on-accent)] transition-colors"
                  aria-label="Next testimonial"
                >
                  <span className="sr-only">Next</span>
                  →
                </button>
              </div>
            </div>
          </div>

          {/* Editorial page marker at bottom */}
          <motion.div
            className="col-span-12 mt-16 flex justify-center"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <div className="flex items-center text-[var(--color-text-tertiary)]">
              <div className="h-px w-12 bg-[var(--color-text-tertiary)] mr-4"></div>
              <span className="uppercase tracking-[0.2em] text-xs">005</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default DesktopTestimonialsSection;