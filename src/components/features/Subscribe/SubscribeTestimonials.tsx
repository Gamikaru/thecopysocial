// src/components/features/Subscribe/SubscribeTestimonials.tsx

"use client";

import React from 'react';
import { motion } from 'framer-motion';

interface Testimonial {
  quote: string;
  author: string;
  role?: string;
}

interface SubscribeTestimonialsProps {
  testimonials: Testimonial[];
}

const SubscribeTestimonials: React.FC<SubscribeTestimonialsProps> = ({ testimonials }) => {
  return (
    <section className="py-24 bg-[var(--color-bg-primary)] relative">
      {/* Editorial grid overlay */}
      <div className="absolute inset-0 grid grid-cols-12 pointer-events-none">
        {[...Array(12)].map((_, i) => (
          <div key={i} className="border-l border-[var(--color-text-primary)]/5 h-full" />
        ))}
      </div>

      {/* Editorial background typography element */}
      <div className="absolute bottom-0 right-0 text-[25vw] leading-none font-bold tracking-tighter text-[var(--color-accent-clay)]/[0.05] pointer-events-none z-0">
        VOICES
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-12 gap-8">
          <div className="col-span-12 md:col-span-10 md:col-start-2">
            <motion.div
              className="mb-16 text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
                What Subscribers Say
              </h2>
              <p className="text-[var(--color-text-secondary)] text-lg max-w-3xl mx-auto">
                Join hundreds of readers who find value in my weekly newsletter.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {testimonials.map((testimonial, index) => (
                <motion.div
                  key={index}
                  className="bg-[var(--color-bg-secondary)] p-8 relative"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  {/* Editorial design accent */}
                  <div className="absolute top-0 right-0 w-1/5 h-1 bg-[var(--color-accent-clay)]"></div>

                  <blockquote className="mb-6">
                    <p className="text-xl font-serif italic mb-0 relative">
                      <span className="absolute -left-4 top-0 text-4xl text-[var(--color-accent-clay)]/30 font-serif">&quot;</span>
                      {testimonial.quote}
                      <span className="absolute -right-4 bottom-0 text-4xl text-[var(--color-accent-clay)]/30 font-serif">&quot;</span>
                    </p>
                  </blockquote>

                  <div className="flex items-center">
                    <div className="h-px w-12 bg-[var(--color-accent-clay)] mr-4"></div>
                    <div>
                      <p className="font-medium text-[var(--color-text-primary)]">
                        {testimonial.author}
                      </p>
                      {testimonial.role && (
                        <p className="text-sm text-[var(--color-text-tertiary)]">
                          {testimonial.role}
                        </p>
                      )}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SubscribeTestimonials;