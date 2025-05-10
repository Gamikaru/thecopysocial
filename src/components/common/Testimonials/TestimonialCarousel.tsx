// src/components/sections/Testimonials/TestimonialCarousel.tsx
"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { TestimonialItem } from '@/content/types/types';
import { IconButton } from '@/components/common/Buttons';

interface TestimonialCarouselProps {
  testimonials: TestimonialItem[];
  title?: string;
  subtitle?: string;
  autoPlay?: boolean;
  interval?: number;
}

const TestimonialCarousel: React.FC<TestimonialCarouselProps> = ({
  testimonials,
  title = "What My Clients Say",
  subtitle = "Don't just take my word for it. Here's what clients have to say about working with me.",
  autoPlay = true,
  interval = 5000,
}) => {
  // State for active testimonial
  const [activeIndex, setActiveIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  // Navigation functions
  const changeTestimonial = (index: number) => {
    if (isAnimating) return;
    setIsAnimating(true);
    setActiveIndex(index);
    setTimeout(() => setIsAnimating(false), 600);
  };

  const nextTestimonial = React.useCallback(() => {
    const nextIndex = (activeIndex + 1) % testimonials.length;
    changeTestimonial(nextIndex);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [activeIndex, testimonials.length]);

  const prevTestimonial = () => {
    const prevIndex = activeIndex === 0 ? testimonials.length - 1 : activeIndex - 1;
    changeTestimonial(prevIndex);
  };

  // Auto advance carousel if enabled
  React.useEffect(() => {
    if (!autoPlay || isAnimating) return;

    const timer = setTimeout(() => {
      nextTestimonial();
    }, interval);

    return () => clearTimeout(timer);
  }, [activeIndex, autoPlay, interval, isAnimating, nextTestimonial]);

  return (
    <section className="py-32 bg-[var(--color-bg-primary)] relative">
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
              <span className="uppercase tracking-[0.3em] text-xs text-[var(--color-text-secondary)]">Testimonials 005</span>
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
                      &quot;{testimonials[activeIndex].quote}&quot;
                    </blockquote>

                    {/* Attribution with editorial treatment */}
                    <div className="flex items-center">
                      <div className="h-px w-12 bg-[var(--color-accent-clay)] mr-6"></div>
                      <div>
                        <p className="font-medium text-[var(--color-text-primary)]">
                          {testimonials[activeIndex].author}
                        </p>
                        {testimonials[activeIndex].company && (
                          <p className="text-sm text-[var(--color-text-secondary)]">
                            {testimonials[activeIndex].company}
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
                        / {testimonials.length}
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
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => changeTestimonial(index)}
                    className={`h-px w-8 transition-all duration-300 ${
                      index === activeIndex ? 'bg-[var(--color-accent-mauve)]' : 'bg-[var(--color-text-primary)]/20 hover:bg-[var(--color-text-primary)]/50'
                    }`}
                    aria-label={`Go to testimonial ${index + 1}`}
                  />
                ))}
              </div>

              {/* Navigation buttons */}
              <div className="flex space-x-4">
                <IconButton
                  icon="fi:FiChevronLeft"
                  variant="outline"
                  shape="square"
                  ariaLabel="Previous testimonial"
                  onClick={prevTestimonial}
                  disabled={isAnimating}
                />
                <IconButton
                  icon="fi:FiChevronRight"
                  variant="outline"
                  shape="square"
                  ariaLabel="Next testimonial"
                  onClick={nextTestimonial}
                  disabled={isAnimating}
                />
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

export default TestimonialCarousel;