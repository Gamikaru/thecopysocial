// src/components/sections/Testimonials/TestimonialsSection.tsx
"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { testimonials as homeTestimonials } from '@/content/data/home';
import { fadeVariants } from '../Animations/variants';
import Icon from '@/components/core/Icon';
import { TestimonialItem } from '@/content/types/types';

interface TestimonialsSectionProps {
  className?: string;
}

const TestimonialsSection: React.FC<TestimonialsSectionProps> = ({ className = '' }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  const nextTestimonial = () => {
    setActiveIndex((prev) => (prev === homeTestimonials.length - 1 ? 0 : prev + 1));
  };

  const prevTestimonial = () => {
    setActiveIndex((prev) => (prev === 0 ? homeTestimonials.length - 1 : prev - 1));
  };

  const currentTestimonial = homeTestimonials[activeIndex];

  return (
    <section className={`py-20 ${className}`}>
      <div className="container mx-auto px-5 md:px-8">
        <motion.div
          className="text-center mb-12"
          variants={fadeVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          <h2 className="text-3xl md:text-4xl font-serif mb-4">
            What Clients Say
          </h2>
        </motion.div>

        <div className="max-w-4xl mx-auto relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeIndex}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
              className="bg-bg-secondary p-8 md:p-12 rounded-lg text-center"
            >
              <div className="mb-6 text-brand-accent">
                <Icon name="fi:FiMessageCircle" size={40} />
              </div>

              <blockquote className="text-xl md:text-2xl italic mb-8">
                &ldquo;{currentTestimonial.quote}&rdquo;
              </blockquote>

              <div>
                <p className="font-semibold text-lg">
                  {currentTestimonial.author}
                </p>
                {currentTestimonial.company && (
                  <p className="text-text-secondary">
                    {currentTestimonial.company}
                  </p>
                )}
              </div>
            </motion.div>
          </AnimatePresence>

          <div className="flex justify-center mt-8 space-x-3">
            {homeTestimonials.map((_: TestimonialItem, index: number) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`w-3 h-3 rounded-full transition-colors duration-300 ${
                  index === activeIndex ? 'bg-brand-primary' : 'bg-bg-tertiary'
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>

          <button
            onClick={prevTestimonial}
            className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-4 md:-translate-x-12 bg-bg-primary p-3 rounded-full shadow-md hover:shadow-lg transition-shadow duration-300"
            aria-label="Previous testimonial"
          >
            <Icon name="fi:FiChevronLeft" />
          </button>

          <button
            onClick={nextTestimonial}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-4 md:translate-x-12 bg-bg-primary p-3 rounded-full shadow-md hover:shadow-lg transition-shadow duration-300"
            aria-label="Next testimonial"
          >
            <Icon name="fi:FiChevronRight" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;