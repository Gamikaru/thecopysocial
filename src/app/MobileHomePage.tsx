// src/app/MobileHomePage.tsx
"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { ctaSection } from '../content/data/home';
import Link from 'next/link';

// Import components
import Hero from '../components/features/Home/Hero';
import EditorialSectionBreak from '../components/common/Dividers/EditorialSectionBreak';
import Intro from '../components/features/Home/Intro/Intro';
import ServicesPreview from '../components/features/Home/ServicesPreview';
import ProcessSection from '../components/features/Home/Process';
import TestimonialCarousel from '../components/common/Testimonials/TestimonialsCarousel';
import BlogPreview from '../components/features/Home/BlogPreview/BlogPreview';
import { testimonials as homeTestimonials } from '../content/data/home';

const MobileHomePage: React.FC = () => {
  return (
    <motion.div
      className="relative bg-white"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      {/* Simplified background typography for mobile */}
      <div className="fixed top-0 left-0 w-full h-screen pointer-events-none overflow-hidden -z-20">
        <div className="absolute top-[10%] right-[-10%] text-[60vw] leading-none font-bold tracking-tighter text-black/[0.01]">
          TCS
        </div>
      </div>

      {/* Hero Section */}
      <Hero />

      {/* Editorial Divider - Introduction */}
      <EditorialSectionBreak
        sectionNumber="002"
        sectionTitle="Introduction"
        alignment="center"
      />

      {/* Intro Section */}
      <Intro />

      {/* Editorial Divider - Services */}
      <EditorialSectionBreak
        sectionNumber="003"
        sectionTitle="Services"
        alignment="right"
      />

      {/* Services Preview Section */}
      <ServicesPreview />

      {/* Editorial Divider - Process */}
      <EditorialSectionBreak
        sectionNumber="004"
        sectionTitle="Process"
        alignment="left"
      />

      {/* Process Section */}
      <ProcessSection />

      {/* Editorial Divider - Testimonials */}
      <EditorialSectionBreak
        sectionNumber="005"
        sectionTitle="Testimonials"
        alignment="center"
      />

      {/* Testimonials Section */}
      <TestimonialCarousel
        testimonials={homeTestimonials}
        title="What My Clients Say"
        subtitle="Don't just take my word for it. Here's what clients have to say about working with me."
      />

      {/* Editorial Divider - Journal */}
      <EditorialSectionBreak
        sectionNumber="006"
        sectionTitle="Journal"
        alignment="right"
      />

      {/* Blog Preview Section */}
      <BlogPreview />

      {/* Final CTA Section - Optimized for mobile */}
      <section className="py-24 bg-black text-white relative">
        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            {/* Editorial section marker - simplified for mobile */}
            <div className="flex items-center mb-8">
              <div className="h-px w-12 bg-white/30 mr-4"></div>
              <span className="uppercase tracking-[0.2em] text-xs text-white/70">Next Steps</span>
            </div>

            {/* CTA Title - scaled for mobile */}
            <motion.h2
              className="text-3xl md:text-4xl font-bold tracking-tight mb-6"
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              {ctaSection.title}
            </motion.h2>

            <motion.p
              className="text-base font-light leading-relaxed mb-10 text-white/80"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              {ctaSection.description}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="w-full"
            >
              <Link
                href={ctaSection.buttonLink}
                className="block w-full text-center border border-white py-4 uppercase tracking-widest text-sm font-light hover:bg-white hover:text-black transition-colors"
              >
                {ctaSection.buttonText}
              </Link>
            </motion.div>
          </motion.div>

          {/* Editorial signature - simplified for mobile */}
          <motion.div
            className="mt-16 flex justify-center"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <div className="text-center">
              <div className="uppercase tracking-[0.3em] text-xs text-white/50 mb-3">
                The Copy Social
              </div>
              <div className="font-serif italic text-xl">Ashley</div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Editorial end mark */}
      <div className="h-px w-full bg-black"></div>
    </motion.div>
  );
};

export default MobileHomePage;