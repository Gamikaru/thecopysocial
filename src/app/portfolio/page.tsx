// src/app/portfolio/page.tsx
"use client";

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import Link from 'next/link';
import PortfolioGrid from '@/components/features/Portfolio/PortfolioGrid';
import TestimonialCarousel from '@/components/common/Testimonials/TestimonialCarousel';
import { portfolioProjects, portfolioHero, portfolioCta, testimonials as portfolioTestimonials } from '@/content/data/portfolio';
import EditorialSectionBreak from '@/components/common/Dividers/EditorialSectionBreak';

export default function PortfolioPage() {
  return (
    <motion.div
      className="relative bg-[var(--color-bg-primary)]"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      {/* Editorial page marker */}
      <div className="fixed bottom-6 right-6 text-[var(--color-text-tertiary)] uppercase tracking-widest text-xs hidden md:block pointer-events-none">
        Portfolio
      </div>

      {/* Hero Section - Editorial Style */}
      <section className="pt-36 pb-24 relative">
        {/* Editorial grid overlay */}
        <div className="absolute inset-0 grid grid-cols-12 pointer-events-none">
          {[...Array(12)].map((_, i) => (
            <div key={i} className="border-l border-[var(--color-text-primary)]/5 h-full" />
          ))}
        </div>

        {/* Oversized typography background element */}
        <div className="absolute -top-20 -left-20 text-[40vw] leading-none font-bold tracking-tighter text-[var(--color-accent-sage)]/[0.03] pointer-events-none z-0">
          WORK
        </div>

        <div className="container mx-auto px-6">
          <div className="grid grid-cols-12 gap-4">
            {/* Editorial section marker */}
            <motion.div
              className="col-span-12 mb-16"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="flex items-center">
                <div className="h-px w-16 bg-[var(--color-text-primary)] mr-4"></div>
                <span className="uppercase tracking-[0.3em] text-xs text-[var(--color-text-secondary)]">Portfolio 001</span>
              </div>
            </motion.div>

            {/* Hero Content - Asymmetrical grid layout */}
            <motion.div
              className="col-span-12 md:col-span-5 md:col-start-2"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6 text-[var(--color-text-primary)]">
                {portfolioHero.title}
              </h1>

              <p className="text-lg text-[var(--color-text-secondary)] font-light leading-relaxed">
                {portfolioHero.description}
              </p>
            </motion.div>

            {/* Hero Image - Editorial treatment */}
            <motion.div
              className="col-span-12 md:col-span-4 md:col-start-8 relative mt-12 md:mt-0"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              {/* Editorial image frame */}
              <div className="absolute inset-0 border border-[var(--color-accent-clay)] transform translate-x-4 translate-y-4 z-0"></div>

              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src="/images/legs_no_body.jpeg"
                  alt="Stylish and professional"
                  fill
                  className="object-cover grayscale hover:grayscale-0 transition-all duration-700"
                />

                {/* Editorial image caption */}
                <div className="absolute bottom-0 left-0 right-0 py-3 px-4 bg-[var(--color-bg-primary)]/90 flex justify-between items-center">
                  <span className="uppercase tracking-wider text-xs text-[var(--color-text-secondary)]">Portfolio Highlights</span>
                  <span className="h-px w-12 bg-[var(--color-text-primary)]"></span>
                </div>
              </div>

              {/* Decorative element */}
              <div className="absolute -bottom-4 -left-4 w-24 h-24 border border-[var(--color-accent-clay)] rounded-full -z-10"></div>
            </motion.div>

            {/* Editorial horizontal rule */}
            <motion.div
              className="col-span-12 mt-16"
              initial={{ width: 0 }}
              whileInView={{ width: "100%" }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
            >
              <div className="h-px w-full bg-[var(--color-text-primary)]/10"></div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Editorial Divider */}
      <EditorialSectionBreak
        sectionNumber="002"
        sectionTitle="Projects"
        alignment="center"
      />

      {/* Portfolio Grid Section - Editorial Style */}
      <section className="py-24 relative">
        {/* Editorial grid overlay */}
        <div className="absolute inset-0 grid grid-cols-12 pointer-events-none">
          {[...Array(12)].map((_, i) => (
            <div key={i} className="border-l border-[var(--color-text-primary)]/5 h-full" />
          ))}
        </div>

        {/* Background typography element */}
        <div className="absolute bottom-0 left-0 text-[25vw] leading-none font-bold tracking-tighter text-[var(--color-accent-mauve)]/[0.04] pointer-events-none z-0">
          PROJECTS
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <PortfolioGrid
            projects={portfolioProjects}
            title="Featured Projects"
            subtitle="Browse my copywriting work across various industries and formats. Filter by category to see specific types of projects."
          />
        </div>
      </section>

      {/* Editorial Divider */}
      <EditorialSectionBreak
        sectionNumber="003"
        sectionTitle="Process"
        alignment="left"
      />

      {/* Process Section - Editorial Style */}
      <section className="py-24 bg-[var(--color-bg-primary)] relative">
        {/* Editorial grid overlay */}
        <div className="absolute inset-0 grid grid-cols-12 pointer-events-none">
          {[...Array(12)].map((_, i) => (
            <div key={i} className="border-l border-[var(--color-text-primary)]/5 h-full" />
          ))}
        </div>

        {/* Background typography element */}
        <div className="absolute top-0 right-0 text-[25vw] leading-none font-bold tracking-tighter text-[var(--color-accent-sage)]/[0.08] pointer-events-none z-0">
          APPROACH
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            className="mb-20"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="grid grid-cols-12 gap-8">
              <div className="col-span-12 md:col-span-6 md:col-start-4">
                <motion.h2
                  className="text-4xl md:text-5xl font-bold tracking-tight mb-12 text-[var(--color-text-primary)]"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                >
                  My Approach to Client Projects
                </motion.h2>
              </div>
            </div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-y-16 md:gap-x-8">
            {/* Process Step 1 */}
            <motion.div
              className="col-span-12 md:col-span-5 md:col-start-2"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="flex items-baseline mb-4">
                <span className="text-6xl font-bold tracking-tighter text-[var(--color-accent-navy)]/20 mr-4">01</span>
                <h3 className="text-2xl font-bold tracking-tight text-[var(--color-text-primary)]">Discovery</h3>
              </div>
              <p className="text-[var(--color-text-secondary)] font-light pl-20">
                Every successful project starts with understanding your business, audience, and goals. I&apos;ll dive deep into your industry, analyze your competitors, and identify what makes your brand unique.
              </p>
            </motion.div>

            {/* Process Step 2 */}
            <motion.div
              className="col-span-12 md:col-span-5 md:col-start-7"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className="flex items-baseline mb-4">
                <span className="text-6xl font-bold tracking-tighter text-[var(--color-accent-navy)]/20 mr-4">02</span>
                <h3 className="text-2xl font-bold tracking-tight text-[var(--color-text-primary)]">Strategy</h3>
              </div>
              <p className="text-[var(--color-text-secondary)] font-light pl-20">
                Based on our research, I&apos;ll develop a customized content strategy that aligns with your brand voice and business objectives. This roadmap ensures every word serves a purpose and drives results.
              </p>
            </motion.div>

            {/* Process Step 3 */}
            <motion.div
              className="col-span-12 md:col-span-5 md:col-start-2"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <div className="flex items-baseline mb-4">
                <span className="text-6xl font-bold tracking-tighter text-[var(--color-accent-navy)]/20 mr-4">03</span>
                <h3 className="text-2xl font-bold tracking-tight text-[var(--color-text-primary)]">Creation</h3>
              </div>
              <p className="text-[var(--color-text-secondary)] font-light pl-20">
                I&apos;ll craft compelling copy that speaks directly to your target audience, communicates your value, and inspires action. Every sentence is carefully crafted to engage and convert.
              </p>
            </motion.div>

            {/* Process Step 4 */}
            <motion.div
              className="col-span-12 md:col-span-5 md:col-start-7"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <div className="flex items-baseline mb-4">
                <span className="text-6xl font-bold tracking-tighter text-[var(--color-accent-navy)]/20 mr-4">04</span>
                <h3 className="text-2xl font-bold tracking-tight text-[var(--color-text-primary)]">Refinement</h3>
              </div>
              <p className="text-[var(--color-text-secondary)] font-light pl-20">
                Your feedback is essential to the process. I&apos;ll collaborate with you to refine and polish the copy until it perfectly captures your brand voice and meets your expectations.
              </p>
            </motion.div>

            {/* Editorial page marker */}
            <motion.div
              className="col-span-12 mt-8 flex justify-center"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <div className="flex items-center text-[var(--color-text-tertiary)]">
                <div className="h-px w-12 bg-[var(--color-text-tertiary)] mr-4"></div>
                <span className="uppercase tracking-[0.2em] text-xs">003</span>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Editorial Divider */}
      <EditorialSectionBreak
        sectionNumber="004"
        sectionTitle="Testimonials"
        alignment="center"
      />

      {/* Testimonials Section - Already has good styling from TestimonialCarousel component */}
      <TestimonialCarousel
        testimonials={portfolioTestimonials}
        title="Client Testimonials"
        subtitle="Don&apos;t just take my word for it. Here&apos;s what clients have to say about working with me."
      />

      {/* CTA Section - Editorial Style (matching the home page) */}
      <section className="py-32 bg-[var(--color-accent-navy)] text-[var(--color-text-on-accent)] relative">
        {/* Editorial grid overlay */}
        <div className="absolute inset-0 grid grid-cols-12 pointer-events-none">
          {[...Array(12)].map((_, i) => (
            <div key={i} className="border-l border-[var(--color-text-on-accent)]/5 h-full" />
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
                <div className="h-px w-16 bg-[var(--color-text-on-accent)]/30 mr-4"></div>
                <span className="uppercase tracking-[0.3em] text-xs text-[var(--color-text-on-accent)]/70">Get Started</span>
              </div>

              {/* CTA Title with dramatic typography */}
              <motion.h2
                className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-8"
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                {portfolioCta.text}
              </motion.h2>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.6 }}
              >
                <Link
                  href={portfolioCta.buttonLink}
                  className="inline-flex items-center border border-[var(--color-text-on-accent)] px-8 py-4 uppercase tracking-widest text-sm font-light hover:bg-[var(--color-text-on-accent)] hover:text-[var(--color-accent-navy)] transition-colors group"
                >
                  <span>{portfolioCta.buttonText}</span>
                  <motion.span
                    className="ml-6 h-px bg-[var(--color-text-on-accent)] group-hover:bg-[var(--color-accent-navy)] transition-colors"
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
              <div className="uppercase tracking-[0.5em] text-xs text-[var(--color-text-on-accent)]/50 mb-4">
                The Copy Social
              </div>
              <div className="font-serif italic text-2xl text-[var(--color-accent-mauve-light)]">Ashley</div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Editorial end mark */}
      <div className="h-px w-full bg-[var(--color-text-primary)]"></div>
    </motion.div>
  );
}