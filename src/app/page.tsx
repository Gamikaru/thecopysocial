"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { ctaSection } from '../content/data/home';
import Link from 'next/link';

// Import updated editorial components
import Hero from '../components/features/Home/Hero/Hero';
import EditorialSectionBreak from '../components/common/Dividers/EditorialSectionBreak';
import Intro from '../components/features/Home/Intro/Intro';
import ServicesPreview from '../components/features/Home/ServicesPreview/ServicesPreview';
import ProcessSection from '../components/features/Home/Process/ProcessSection';
import TestimonialCarousel from '../components/common/Testimonials/TestimonialCarousel';
import BlogPreview from '../components/features/Home/BlogPreview/BlogPreview';
import { testimonials as homeTestimonials } from '../content/data/home';

export default function HomePage() {
  return (
    <motion.div
      className="relative bg-white"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      {/* Editorial typographic background element */}
      <div className="fixed top-0 left-0 w-full h-screen pointer-events-none overflow-hidden -z-20">
        <div className="absolute top-[5%] right-[-5%] text-[40vw] leading-none font-bold tracking-tighter text-black/[0.01]">
          TCS
        </div>
      </div>

      {/* Editorial page marker */}
      <div className="fixed bottom-6 right-6 text-black/40 uppercase tracking-widest text-xs hidden md:block pointer-events-none">
        The Copy Social
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

      {/* Final CTA Section - Editorial Style */}
      <section className="py-32 bg-black text-white relative">
        {/* Editorial grid overlay */}
        <div className="absolute inset-0 grid grid-cols-12 pointer-events-none">
          {[...Array(12)].map((_, i) => (
            <div key={i} className="border-l border-white/5 h-full" />
          ))}
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
            <motion.div
              className="md:col-span-7 md:col-start-3"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              {/* Editorial section marker */}
              <div className="flex items-center mb-16">
                <div className="h-px w-16 bg-white/30 mr-4"></div>
                <span className="uppercase tracking-[0.3em] text-xs text-white/70">Next Steps</span>
              </div>

              {/* CTA Title with dramatic typography */}
              <motion.h2
                className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-8"
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                {ctaSection.title}
              </motion.h2>

              <motion.p
                className="text-xl font-light leading-relaxed mb-12 text-white/80"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                {ctaSection.description}
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.6 }}
              >
                <Link
                  href={ctaSection.buttonLink}
                  className="inline-flex items-center border border-white px-8 py-4 uppercase tracking-widest text-sm font-light hover:bg-white hover:text-black transition-colors group"
                >
                  <span>{ctaSection.buttonText}</span>
                  <motion.span
                    className="ml-6 h-px bg-white group-hover:bg-black transition-colors"
                    initial={{ width: 24 }}
                    whileInView={{ width: 48 }}
                    viewport={{ once: true }}
                  />
                </Link>
              </motion.div>
            </motion.div>
          </div>

          {/* Editorial signature */}
          <motion.div
            className="mt-24 flex justify-center"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            <div className="text-center">
              <div className="uppercase tracking-[0.5em] text-xs text-white/50 mb-4">
                The Copy Social
              </div>
              <div className="font-serif italic text-2xl">Ashley</div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Editorial end mark */}
      <div className="h-px w-full bg-black"></div>
    </motion.div>
  );
}