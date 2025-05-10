// src/app/blog/page.tsx
"use client";

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Heading, Text } from '@/components/core';
import BlogGrid from '@/components/features/Blog/BlogGrid';
import NewsletterSignup from '@/components/core/NewsLetterSignUp';
import { blogHero, blogPosts, blogCta, featuredCategories } from '@/content/data/blog';
import Icon from '@/components/core/Icon';
import Link from 'next/link';

import type { IconName } from '@/components/core/Icon';

export default function BlogPage() {
  return (
    <div className="pt-20 pb-0 bg-[var(--color-bg-primary)]">
      {/* Hero Section with Editorial Design */}
      <section className="py-32 relative">
        {/* Editorial grid overlay */}
        <div className="absolute inset-0 grid grid-cols-12 pointer-events-none">
          {[...Array(12)].map((_, i) => (
            <div key={i} className="border-l border-[var(--color-text-primary)]/5 h-full" />
          ))}
        </div>

        {/* Oversized typography background element */}
        <motion.div
          initial={{ opacity: 1 }}
          animate={{ opacity: 0 }}
          transition={{ delay: 1, duration: 0.8 }}
          className="absolute -top-20 -left-20 text-[30vw] leading-none font-bold tracking-tighter text-[var(--color-text-primary)]/[0.03] pointer-events-none z-0"
        >
          BLOG
        </motion.div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
            {/* Text content with editorial typography */}
            <div className="md:col-span-6 md:col-start-2">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                {/* Editorial page indicator */}
                <div className="flex items-center mb-16">
                  <div className="h-px w-16 bg-[var(--color-text-primary)] mr-4"></div>
                  <span className="uppercase tracking-[0.3em] text-xs text-[var(--color-text-secondary)]">The Journal</span>
                </div>

                {/* Dramatically oversized headline */}
                <div className="overflow-hidden mb-12">
                  <motion.div
                    initial={{ y: 100 }}
                    animate={{ y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                  >
                    <Heading
                      level={1}
                      className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight leading-none"
                    >
                      {blogHero.title}
                    </Heading>
                  </motion.div>
                </div>

                <Text
                  size="lg"
                  className="font-light leading-relaxed mb-0 max-w-xl"
                >
                  {blogHero.description}
                </Text>
              </motion.div>
            </div>

            {/* Editorial imagery */}
            <motion.div
              className="md:col-span-4 md:col-start-8 relative mt-12 md:mt-0"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <div className="relative">
                {/* Sharp geometric frame */}
                <div className="absolute inset-0 border border-[var(--color-text-primary)] transform translate-x-6 translate-y-6 z-0"></div>

                {/* Main image */}
                <div className="relative aspect-[3/4] overflow-hidden">
                  <Image
                    src="/images/home/book_covering_face_funny.jpeg"
                    alt="Ashley holding an open book"
                    fill
                    className="object-cover grayscale hover:grayscale-0 transition-all duration-700"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />

                  {/* Editorial caption overlay */}
                  <div className="absolute bottom-0 left-0 right-0 bg-[var(--color-bg-primary)]/90 py-3 px-4 flex justify-between items-center">
                    <span className="uppercase tracking-wider text-xs">The Journal</span>
                    <span className="h-px w-12 bg-[var(--color-text-primary)]"></span>
                  </div>
                </div>

                {/* Vertical text */}
                <div className="absolute -right-8 top-0 bottom-0 hidden md:flex items-center">
                  <div className="transform -rotate-90 origin-center whitespace-nowrap uppercase tracking-[0.5em] text-xs text-[var(--color-text-tertiary)]">
                    Stories & Insights
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Editorial Category Section */}
      <section className="py-20 relative bg-[var(--color-bg-secondary)]">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
            <div className="md:col-span-3 md:col-start-2">
              <div className="flex items-center mb-6">
                <div className="h-px w-12 bg-[var(--color-text-primary)] mr-4"></div>
                <span className="uppercase tracking-[0.3em] text-xs text-[var(--color-text-secondary)]">Categories</span>
              </div>
            </div>

            <div className="md:col-span-7 md:col-start-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                {featuredCategories.map((category: string, index: number) => (
                  <motion.div
                    key={category}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: 0.1 + (index * 0.05) }}
                  >
                    <Link
                      href={`/blog?category=${encodeURIComponent(category)}`}
                      className="block text-center border border-[var(--color-text-primary)]/20 hover:border-[var(--color-accent-mauve)] transition-colors duration-300 px-4 py-6 group"
                    >
                      <span className="uppercase tracking-[0.3em] text-xs text-[var(--color-text-secondary)] group-hover:text-[var(--color-accent-mauve)] transition-colors duration-300">
                        {category}
                      </span>
                    </Link>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Blog Grid */}
      <BlogGrid
        posts={blogPosts}
        title="Latest Articles"
        subtitle="Insights, strategies, and tips to help you communicate better and grow your business."
        featuredPost={true}
        showFilters={true}
      />

      {/* Newsletter Section with Editorial Design */}
      <section className="py-32 bg-[var(--color-bg-primary)] relative">
        {/* Editorial grid overlay */}
        <div className="absolute inset-0 grid grid-cols-12 pointer-events-none">
          {[...Array(12)].map((_, i) => (
            <div key={i} className="border-l border-[var(--color-text-primary)]/5 h-full" />
          ))}
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
            <div className="md:col-span-8 md:col-start-3">
              <div className="bg-[var(--color-bg-secondary)] p-12 relative">
                {/* Editorial design elements */}
                <div className="absolute top-0 right-0 w-1/4 h-6 bg-[var(--color-accent-mauve)]/10"></div>
                <div className="absolute bottom-0 left-0 w-1/5 h-8 bg-[var(--color-accent-mauve)]/10"></div>

                <div className="grid grid-cols-1 md:grid-cols-4 gap-8 items-center">
                  <div className="md:col-span-1 flex justify-center">
                    <div className="relative w-24 h-24 md:w-32 md:h-32">
                      {/* Geometric frame */}
                      <div className="absolute inset-0 border border-[var(--color-text-primary)] transform translate-x-3 translate-y-3 z-0"></div>

                      <div className="relative h-full w-full overflow-hidden">
                        <Image
                          src="/images/new_chapter.jpeg"
                          alt="New chapter book"
                          fill
                          className="object-cover"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="md:col-span-3">
                    <div className="text-center md:text-left mb-6">
                      <div className="flex md:justify-start justify-center items-center mb-6">
                        <div className="h-px w-12 bg-[var(--color-text-primary)] mr-4"></div>
                        <span className="uppercase tracking-[0.3em] text-xs text-[var(--color-text-secondary)]">Newsletter</span>
                      </div>

                      <Heading level={3} className="mb-3 text-2xl md:text-3xl font-bold tracking-tight">
                        {blogCta.text}
                      </Heading>
                    </div>

                    <NewsletterSignup className="bg-transparent shadow-none p-0" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Resource Library Section with Editorial Design */}
      <section className="py-32 bg-[var(--color-bg-secondary)] relative">
        {/* Editorial background typographic element */}
        <div className="absolute bottom-0 right-0 text-[25vw] leading-none font-bold tracking-tighter text-[var(--color-text-primary)]/[0.02] pointer-events-none z-0">
          RESOURCES
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
            <div className="md:col-span-10 md:col-start-2">
              {/* Editorial section header */}
              <motion.div
                className="mb-20"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
                  <div className="md:col-span-5 md:col-start-1">
                    <div className="flex items-center mb-6">
                      <div className="h-px w-16 bg-[var(--color-text-primary)] mr-4"></div>
                      <span className="uppercase tracking-[0.3em] text-xs text-[var(--color-text-secondary)]">Resources</span>
                    </div>

                    <Heading level={2} className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
                      Resource Library
                    </Heading>
                  </div>

                  <div className="md:col-span-6 md:col-start-7">
                    <Text
                      size="lg"
                      className="font-light leading-relaxed"
                    >
                      Download free resources to help elevate your copywriting and marketing efforts.
                    </Text>
                  </div>
                </div>
              </motion.div>

              {/* Resource Cards with Editorial Design */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {([
                  {
                    title: "Copywriting Checklist",
                    description: "A comprehensive checklist to ensure your copy is persuasive, error-free, and conversion-focused.",
                    icon: "fi:FiFileText"
                  },
                  {
                    title: "Email Template Bundle",
                    description: "10 proven email templates to nurture leads, announce launches, and re-engage customers.",
                    icon: "fi:FiBook"
                  },
                  {
                    title: "Website Copy Worksheet",
                    description: "A step-by-step worksheet to plan and write compelling website copy that converts visitors into customers.",
                    icon: "fi:FiLayers"
                  }
                ] as { title: string; description: string; icon: IconName }[]).map((resource, index) => (
                  <motion.div
                    key={resource.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.2 * index }}
                  >
                    <div className="border border-[var(--color-text-primary)]/20 p-8 h-full relative">
                      {/* Geometric accent */}
                      <div className="absolute top-0 right-0 w-12 h-12 bg-[var(--color-accent-clay)]/10"></div>

                      <div className="flex items-start mb-6">
                        <Icon name={resource.icon} size={24} className="text-[var(--color-accent-mauve)] mr-4" />
                        <Heading level={4} className="text-xl font-bold tracking-tight mb-0">
                          {resource.title}
                        </Heading>
                      </div>

                      <Text className="mb-8 font-light">
                        {resource.description}
                      </Text>

                      {/* Download Link */}
                      <Link
                        href="#"
                        className="inline-flex items-center group mt-auto"
                      >
                        <span className="uppercase tracking-widest text-xs font-medium mr-3 text-[var(--color-accent-navy)]">
                          Download Free
                        </span>
                        <motion.span
                          className="h-px bg-[var(--color-accent-navy)] group-hover:w-10 transition-all duration-300"
                          initial={{ width: 16 }}
                          whileInView={{ width: 24 }}
                          viewport={{ once: true }}
                        />
                      </Link>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Editorial page marker */}
      <div className="flex justify-center py-12 bg-[var(--color-bg-primary)]">
        <motion.div
          className="flex items-center text-[var(--color-text-tertiary)]"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <div className="h-px w-12 bg-[var(--color-text-tertiary)] mr-4"></div>
          <span className="uppercase tracking-[0.2em] text-xs">The Copy Social • Journal</span>
        </motion.div>
      </div>
    </div>
  );
}