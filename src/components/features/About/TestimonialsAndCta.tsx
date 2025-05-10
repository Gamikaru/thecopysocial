// src/components/sections/About/TestimonialsAndCta.tsx
"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Heading, Text } from '@/components/core/Typography';
import Link from 'next/link';

import { TestimonialItem } from '@/content/types/types';

interface TestimonialsAndCtaProps {
  testimonials: TestimonialItem[];
  ctaText: string;
  ctaButtonText: string;
  ctaButtonLink: string;
}

const TestimonialsAndCta: React.FC<TestimonialsAndCtaProps> = ({
  testimonials,
  ctaText,
  ctaButtonText,
  ctaButtonLink,
}) => {
  // State for active testimonial
  const [activeIndex, setActiveIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  // Functions to navigate testimonials
  const changeTestimonial = (index: number) => {
    if (isAnimating) return;
    setIsAnimating(true);
    setActiveIndex(index);
    setTimeout(() => setIsAnimating(false), 500);
  };

  const nextTestimonial = () => {
    if (isAnimating) return;
    const nextIndex = (activeIndex + 1) % testimonials.length;
    changeTestimonial(nextIndex);
  };

  const prevTestimonial = () => {
    if (isAnimating) return;
    const prevIndex = activeIndex === 0 ? testimonials.length - 1 : activeIndex - 1;
    changeTestimonial(prevIndex);
  };

  return (
    <>
      {/* Editorial Testimonials Section */}
      <section
        className="py-32 relative"
        style={{ background: "var(--color-bg-primary)" }}
      >
        {/* Editorial background typographic element */}
        <div
          className="absolute top-0 left-0 text-[25vw] leading-none font-bold tracking-tighter pointer-events-none select-none z-0"
          style={{ color: "var(--color-text-primary)", opacity: 0.03 }}
        >
          REVIEWS
        </div>

        <div className="container mx-auto px-6 relative z-10">
          {/* Editorial section header */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 mb-24">
            <div className="md:col-span-4 md:col-start-1">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <div
                  className="uppercase tracking-[0.25em] text-xs font-light mb-3"
                  style={{ color: "var(--color-text-tertiary)" }}
                >
                  Testimonials
                </div>
                <Heading
                  level={2}
                  className="text-4xl md:text-5xl font-bold tracking-tight mb-4 text-[color:var(--color-text-primary)]"
                >
                  What Clients Say
                </Heading>
                <div
                  className="h-px w-16"
                  style={{ background: "var(--color-accent-mauve)" }}
                ></div>
              </motion.div>
            </div>

            <div className="md:col-span-7 md:col-start-6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <Text
                  className="font-light leading-relaxed text-[color:var(--color-text-secondary)]"
                >
                  Don&apos;t just take my word for it. Here&apos;s what some amazing clients have to say about working together.
                </Text>
              </motion.div>
            </div>
          </div>

          {/* DESKTOP LAYOUT: Editorial Quote Display */}
          <div className="hidden md:block">
            <div className="relative mb-16">
              {/* Dramatically oversized quotation marks - editorial feature */}
              <div
                className="absolute top-0 left-0 -translate-x-12 -translate-y-16 text-[16rem] leading-none font-serif pointer-events-none"
                style={{ color: "var(--color-accent-clay)", opacity: 0.05 }}
              >
                &quot;
              </div>

              <AnimatePresence mode="wait">
                <motion.div
                  key={activeIndex}
                  initial={{ opacity: 0, y: 40 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -40 }}
                  transition={{ duration: 0.5 }}
                  className="grid grid-cols-12 gap-6 items-center"
                >
                  {/* Primary quote display - magazine-style layout */}
                  <div className="col-span-8 col-start-1">
                    <div
                      className="relative pl-8 border-l-2"
                      style={{ borderColor: "var(--color-accent-clay-20)" }}
                    >
                      <Text
                        as="div"
                        size="xl"
                        serif
                        italic
                        className="font-light leading-relaxed mb-8 text-[color:var(--color-text-primary)]"
                      >
                        &quot;{testimonials[activeIndex].quote}&quot;
                      </Text>

                      <div className="flex items-center">
                        <div
                          className="h-px w-8 mr-4"
                          style={{ background: "var(--color-accent-navy)" }}
                        ></div>
                        <div>
                          <div className="font-medium" style={{ color: "var(--color-text-primary)" }}>
                            {testimonials[activeIndex].author}
                          </div>
                          {testimonials[activeIndex].company && (
                            <div className="text-sm"
                              style={{ color: "var(--color-text-tertiary)" }}>
                              {testimonials[activeIndex].company}
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Abstract geometric element - editorial design feature */}
                  <div className="col-span-3 col-start-10">
                    <div
                      className="aspect-square border-2 relative"
                      style={{ borderColor: "var(--color-accent-mauve)" }}
                    >
                      <div
                        className="absolute top-0 right-0 w-1/2 h-1/2"
                        style={{ background: "var(--color-accent-mauve)" }}
                      ></div>
                      <div
                        className="absolute bottom-0 left-0 w-1/2 h-1/2"
                        style={{ background: "var(--color-accent-mauve-10)" }}
                      ></div>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Editorial navigation */}
            <div className="flex justify-between items-center">
              <div className="flex space-x-4">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => changeTestimonial(index)}
                    className={`w-8 h-px transition-all duration-300 ${
                      index === activeIndex
                        ? ''
                        : 'hover:bg-gray-500'
                    }`}
                    style={{
                      background:
                        index === activeIndex
                          ? "var(--color-accent-mauve)"
                          : "var(--color-accent-mauve-20)",
                      opacity: index === activeIndex ? 1 : 0.7,
                    }}
                    aria-label={`View testimonial ${index + 1}`}
                  />
                ))}
              </div>

              {/* Minimal navigation buttons */}
              <div className="flex space-x-4">
                <button
                  onClick={prevTestimonial}
                  className="p-3 border hover:text-white transition-colors duration-300"
                  style={{
                    borderColor: "var(--color-accent-navy)",
                    color: "var(--color-accent-navy)",
                    background: "transparent",
                  }}
                  disabled={isAnimating}
                  aria-label="Previous testimonial"
                >
                  ←
                </button>
                <button
                  onClick={nextTestimonial}
                  className="p-3 border hover:text-white transition-colors duration-300"
                  style={{
                    borderColor: "var(--color-accent-navy)",
                    color: "var(--color-accent-navy)",
                    background: "transparent",
                  }}
                  disabled={isAnimating}
                  aria-label="Next testimonial"
                >
                  →
                </button>
              </div>
            </div>
          </div>

          {/* MOBILE LAYOUT: Editorial card grid */}
          <div className="grid grid-cols-1 gap-12 md:hidden">
            {testimonials.slice(0, 2).map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="border p-6 relative"
                style={{ borderColor: "var(--color-accent-mauve)" }}
              >
                {/* Editorial quote mark */}
                <div
                  className="absolute top-0 right-0 h-8 w-8 flex items-center justify-center"
                  style={{
                    background: "var(--color-accent-clay)",
                    color: "var(--color-text-on-accent)",
                  }}
                >
                  &quot;
                </div>

                <Text
                  serif
                  italic
                  className="mb-6 text-[color:var(--color-text-primary)]"
                >
                  &quot;{testimonial.quote}&quot;
                </Text>

                <div className="flex items-center">
                  <div
                    className="h-px w-6 mr-3"
                    style={{ background: "var(--color-accent-navy)" }}
                  ></div>
                  <div>
                    <div className="font-medium text-sm" style={{ color: "var(--color-text-primary)" }}>
                      {testimonial.author}
                    </div>
                    {testimonial.company && (
                      <div className="text-xs"
                        style={{ color: "var(--color-text-tertiary)" }}>
                        {testimonial.company}
                      </div>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Editorial CTA Section */}
      <section
        className="py-32 relative"
        style={{
          background: "var(--color-accent-navy)",
          color: "var(--color-text-on-dark)",
        }}
      >
        {/* Editorial geometric elements */}
        <div
          className="absolute top-0 right-0 w-1/4 h-16"
          style={{ background: "var(--color-text-on-dark)", opacity: 0.05 }}
        ></div>
        <div
          className="absolute bottom-0 left-0 w-1/5 h-24"
          style={{ background: "var(--color-text-on-dark)", opacity: 0.05 }}
        ></div>

        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-center">
            {/* CTA content with dramatic typography */}
            <div className="md:col-span-7 md:col-start-1">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <Heading
                  level={2}
                  className="text-4xl md:text-6xl font-bold tracking-tight mb-6 text-[color:var(--color-text-on-dark)]"
                >
                  {ctaText}
                </Heading>
              </motion.div>
            </div>

            <div className="md:col-span-4 md:col-start-9">
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="relative"
              >
                {/* Sharp, editorial CTA button styling */}
                <Link
                  href={ctaButtonLink}
                  className="block w-full border py-5 px-6 text-center hover:bg-white hover:text-black transition-colors duration-300 relative"
                  style={{
                    borderColor: "var(--color-text-on-dark)",
                    color: "var(--color-text-on-dark)",
                    background: "transparent",
                  }}
                >
                  <span className="uppercase tracking-widest text-sm font-light">
                    {ctaButtonText}
                  </span>
                  <div
                    className="absolute top-0 right-0 h-8 w-8 border-t border-r"
                    style={{ borderColor: "var(--color-text-on-dark)" }}
                  ></div>
                  <div
                    className="absolute bottom-0 left-0 h-8 w-8 border-b border-l"
                    style={{ borderColor: "var(--color-text-on-dark)" }}
                  ></div>
                </Link>

                {/* Editorial signature element */}
                <div className="mt-12 flex justify-end">
                  <div className="text-right">
                    <div
                      className="italic font-light text-sm mb-1"
                      style={{ color: "var(--color-text-on-dark)" }}
                    >
                      Looking forward to our conversation,
                    </div>
                    <div
                      className="font-serif italic text-lg"
                      style={{ color: "var(--color-text-on-dark)" }}
                    >
                      Ashley
                    </div>
                    <div
                      className="h-px w-12 mt-1 ml-auto"
                      style={{
                        background: "var(--color-accent-mauve-light)",
                        opacity: 0.5,
                      }}
                    ></div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default TestimonialsAndCta;