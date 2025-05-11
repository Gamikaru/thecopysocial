// src/components/features/About/MobileTestimonialsAndCta.tsx
"use client";

import React, { useState, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Heading, Text } from '@/components/core/Typography';
import { TestimonialItem } from '@/content/types/types';
import Icon from '@/components/core/Icon';

interface TestimonialsAndCtaProps {
  testimonials: TestimonialItem[];
}

const MobileTestimonialsAndCta: React.FC<TestimonialsAndCtaProps> = ({
  testimonials,
}) => {
  // State for active testimonial
  const [activeIndex, setActiveIndex] = useState(0);
  const [touchStartX, setTouchStartX] = useState(0);
  const [touchEndX, setTouchEndX] = useState(0);

  // Navigation functions
  const changeTestimonial = (index: number) => {
    setActiveIndex(index);
  };

  const nextTestimonial = useCallback(() => {
    const nextIndex = (activeIndex + 1) % testimonials.length;
    changeTestimonial(nextIndex);
  }, [activeIndex, testimonials.length]);

  const prevTestimonial = () => {
    const prevIndex = activeIndex === 0 ? testimonials.length - 1 : activeIndex - 1;
    changeTestimonial(prevIndex);
  };

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

  return (
    <section className="py-16 relative bg-[var(--color-bg-primary)]">
      {/* Simplified header for mobile */}
      <div className="px-6">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="mb-8"
        >
          <div className="mb-2">
            <div className="uppercase tracking-[0.2em] text-xs text-[var(--color-text-tertiary)]">
              Testimonials
            </div>
            <Heading
              level={2}
              className="text-3xl font-bold tracking-tight mb-3 text-[var(--color-text-primary)]"
            >
              What Clients Say
            </Heading>
            <div className="h-px w-12 bg-[var(--color-accent-mauve)]"></div>
          </div>

          <Text
            size="sm"
            className="font-light text-[var(--color-text-secondary)]"
          >
            Don&apos;t just take my word for it. Here&apos;s what clients say about working with me.
          </Text>
        </motion.div>

        {/* Mobile Testimonial Carousel with swipe support */}
        <div
          className="relative mb-8 overflow-hidden"
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          {/* Card container */}
          <div className="border border-[var(--color-text-primary)]/10 p-5 bg-[var(--color-bg-secondary)] shadow-sm min-h-[220px]">
            {/* Progress indicator */}
            <div className="flex justify-between items-center mb-4">
              <div className="text-xs uppercase tracking-wider text-[var(--color-text-tertiary)]">
                Testimonial {activeIndex + 1}/{testimonials.length}
              </div>
              <div className="flex space-x-1">
                {testimonials.map((_, idx) => (
                  <div
                    key={idx}
                    className={`h-1 w-3 rounded-full ${idx === activeIndex ? 'bg-[var(--color-accent-mauve)]' : 'bg-[var(--color-text-primary)]/10'}`}
                  ></div>
                ))}
              </div>
            </div>

            {/* Quote mark */}
            <div className="mb-3 text-3xl font-serif text-[var(--color-accent-clay-20)]">
              &quot;
            </div>

            {/* Testimonial content with animation */}
            <div className="min-h-[120px]">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeIndex}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.3 }}
                >
                  <Text
                    serif
                    italic
                    className="mb-4 text-[var(--color-text-primary)]"
                  >
                    {testimonials[activeIndex].quote}
                  </Text>

                  <div className="flex items-center mt-4">
                    <div className="h-px w-4 bg-[var(--color-accent-navy)] mr-2"></div>
                    <div>
                      <div className="font-medium text-sm text-[var(--color-text-primary)]">
                        {testimonials[activeIndex].author}
                      </div>
                      {testimonials[activeIndex].company && (
                        <div className="text-xs text-[var(--color-text-tertiary)]">
                          {testimonials[activeIndex].company}
                        </div>
                      )}
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>

          {/* Swipe indicator - appears briefly */}
          <motion.div
            initial={{ opacity: 1 }}
            animate={{ opacity: 0 }}
            transition={{ delay: 2, duration: 1 }}
            className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-xs flex items-center text-[var(--color-text-tertiary)]"
          >
            <Icon name="fi:FiArrowLeft" size={12} className="mr-1" />
            <span>Swipe</span>
            <Icon name="fi:FiArrowRight" size={12} className="ml-1" />
          </motion.div>
        </div>

        {/* Mobile navigation buttons */}
        <div className="flex justify-center space-x-3 mb-6">
          <button
            onClick={prevTestimonial}
            className="w-9 h-9 flex items-center justify-center border border-[var(--color-accent-navy)] text-[var(--color-accent-navy)] active:bg-[var(--color-accent-navy)] active:text-white"
            aria-label="Previous testimonial"
          >
            ←
          </button>
          <button
            onClick={nextTestimonial}
            className="w-9 h-9 flex items-center justify-center border border-[var(--color-accent-navy)] text-[var(--color-accent-navy)] active:bg-[var(--color-accent-navy)] active:text-white"
            aria-label="Next testimonial"
          >
            →
          </button>
        </div>

        {/* Additional mobile-only prompt */}
        <div className="text-center text-xs text-[var(--color-text-tertiary)] uppercase tracking-wider mt-4">
          See more client stories in portfolio
        </div>
      </div>
    </section>
  );
};

export default MobileTestimonialsAndCta;