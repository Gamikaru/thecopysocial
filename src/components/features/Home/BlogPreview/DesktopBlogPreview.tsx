"use client";

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { blogPosts } from '../../../../content/data/blog';
import { Heading, Text } from '@/components/core/Typography';

interface DesktopBlogPreviewProps {
  className?: string;
  title?: string;
  description?: string;
  postsToShow?: number;
}

const DesktopBlogPreview: React.FC<DesktopBlogPreviewProps> = ({
  title = "From the Blog",
  description = "Insights, tips, and strategies to help you communicate better and grow your business.",
  postsToShow = 3
}) => {
  // Get the required number of blog posts
  const recentPosts = blogPosts.slice(0, postsToShow);

  return (
    <section className="py-32 bg-[var(--color-bg-primary)] relative">
      {/* Editorial grid overlay */}
      <div className="absolute inset-0 grid grid-cols-12 pointer-events-none">
        {[...Array(12)].map((_, i) => (
          <div key={i} className="border-l border-[var(--color-text-primary)]/5 h-full" />
        ))}
      </div>

      {/* Editorial background typography element */}
      <div className="absolute bottom-0 right-0 text-[25vw] leading-none font-bold tracking-tighter text-[var(--color-accent-sage)]/[0.08] pointer-events-none z-0">
        JOURNAL
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
              <span className="uppercase tracking-[0.3em] text-xs text-[var(--color-text-secondary)]">Journal 006</span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
              <div className="md:col-span-5 md:col-start-2">
                <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-6 text-[var(--color-text-primary)]">
                  {title}
                </h2>
              </div>

              <div className="md:col-span-5 md:col-start-7">
                <p className="text-lg text-[var(--color-text-secondary)] font-light leading-relaxed">
                  {description}
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

          {/* Featured post - editorial treatment */}
          <motion.div
            className="col-span-12 mb-20"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
              {/* Featured post image with editorial treatment */}
              <div className="md:col-span-6 md:col-start-1 relative">
                <div className="absolute inset-0 border border-[var(--color-accent-clay-light)] transform translate-x-4 translate-y-4 z-0"></div>
                <div className="relative aspect-[16/9] overflow-hidden">
                  <Image
                    src={recentPosts[0].coverImage}
                    alt={recentPosts[0].title}
                    fill
                    className="object-cover grayscale hover:grayscale-0 transition-all duration-700"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />

                  {/* Editorial image number */}
                  <div className="absolute top-0 left-0 bg-[var(--color-bg-primary)] py-2 px-4 font-bold text-[var(--color-accent-navy)]">
                    01
                  </div>

                  {/* Editorial image caption */}
                  <div className="absolute bottom-0 left-0 right-0 py-3 px-4 bg-[var(--color-bg-primary)]/90 flex justify-between items-center">
                    <span className="uppercase tracking-wider text-xs text-[var(--color-text-secondary)]">Featured Article</span>
                    <span className="h-px w-12 bg-[var(--color-text-primary)]"></span>
                  </div>
                </div>

                {/* Publication date - editorial style */}
                <div className="mt-4 flex items-center">
                  <div className="uppercase tracking-widest text-xs text-[var(--color-text-tertiary)]">
                    {new Date(recentPosts[0].date).toLocaleDateString('en-US', {
                      month: 'long',
                      day: 'numeric',
                      year: 'numeric'
                    })}
                  </div>
                  <div className="h-px w-12 bg-[var(--color-text-tertiary)] ml-4"></div>
                </div>
              </div>

              {/* Featured post content with editorial typography */}
              <div className="md:col-span-5 md:col-start-8">
                <div className="pl-0 md:pl-6 border-l-0 md:border-l border-[var(--color-text-primary)]/10">
                  {/* Dramatically oversized article number - editorial style */}
                  <div className="overflow-hidden mb-6 hidden md:block">
                    <motion.div
                      initial={{ y: 80 }}
                      whileInView={{ y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6 }}
                    >
                      <span className="text-[8rem] font-bold leading-none tracking-tighter text-[var(--color-accent-navy)]/10">
                        01
                      </span>
                    </motion.div>
                  </div>

                  <Heading level={3} className="text-2xl md:text-3xl font-bold tracking-tight mb-4 text-[var(--color-text-primary)]">
                    {recentPosts[0].title}
                  </Heading>

                  <Text color="secondary" className="mb-8 font-light text-[var(--color-text-secondary)]">
                    {recentPosts[0].excerpt}
                  </Text>

                  <Link
                    href={`/blog/${recentPosts[0].slug}`}
                    className="inline-flex items-center group"
                  >
                    <span className="uppercase tracking-widest text-xs font-medium mr-4 text-[var(--color-accent-navy)]">
                      Read Article
                    </span>
                    <motion.span
                      className="h-px bg-[var(--color-accent-navy)] group-hover:w-12 transition-all duration-300"
                      initial={{ width: 24 }}
                      whileInView={{ width: 36 }}
                      viewport={{ once: true }}
                    />
                  </Link>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Secondary posts - editorial grid layout */}
          <div className="col-span-12 grid grid-cols-1 md:grid-cols-12 gap-x-4 gap-y-16">
            {recentPosts.slice(1).map((post, index) => (
              <motion.div
                key={post.id}
                className="col-span-12 md:col-span-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 * (index + 1) }}
              >
                <div className="grid grid-cols-12 gap-4">
                  {/* Post image with editorial treatment */}
                  <div className="col-span-5 relative">
                    <div className="relative aspect-[4/5] overflow-hidden">
                      <Image
                        src={post.coverImage}
                        alt={post.title}
                        fill
                        className="object-cover grayscale hover:grayscale-0 transition-all duration-700"
                        sizes="(max-width: 768px) 40vw, 20vw"
                      />

                      {/* Editorial image number */}
                      <div className="absolute top-0 left-0 bg-[var(--color-bg-primary)] py-1 px-2 text-sm font-bold text-[var(--color-accent-navy)]">
                        {(index + 2).toString().padStart(2, '0')}
                      </div>
                    </div>
                  </div>

                  {/* Post content with editorial typography */}
                  <div className="col-span-7 relative">
                    {/* Publication date - editorial style */}
                    <div className="uppercase tracking-widest text-xs text-[var(--color-text-tertiary)] mb-4">
                      {new Date(post.date).toLocaleDateString('en-US', {
                        month: 'long',
                        day: 'numeric',
                        year: 'numeric'
                      })}
                    </div>

                    <Heading level={4} className="text-xl font-bold tracking-tight mb-2 text-[var(--color-text-primary)]">
                      {post.title}
                    </Heading>

                    <Link
                      href={`/blog/${post.slug}`}
                      className="inline-flex items-center group mt-4"
                    >
                      <span className="uppercase tracking-widest text-xs font-medium mr-3 text-[var(--color-accent-navy)]">
                        Read
                      </span>
                      <motion.span
                        className="h-px bg-[var(--color-accent-navy)] group-hover:w-10 transition-all duration-300"
                        initial={{ width: 16 }}
                        whileInView={{ width: 24 }}
                        viewport={{ once: true }}
                      />
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Editorial "View All" link */}
          <motion.div
            className="col-span-12 mt-24 flex justify-center"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            <Link
              href="/blog"
              className="inline-flex flex-col items-center group"
            >
              <span className="uppercase tracking-[0.3em] text-sm font-medium mb-3 text-[var(--color-text-secondary)]">
                View All Articles
              </span>
              <div className="w-px h-8 bg-[var(--color-accent-navy)] group-hover:h-12 transition-all duration-300"></div>
            </Link>
          </motion.div>

          {/* Editorial page marker */}
          <motion.div
            className="col-span-12 mt-8 flex justify-center"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.9 }}
          >
            <div className="flex items-center text-[var(--color-text-tertiary)]">
              <div className="h-px w-12 bg-[var(--color-text-tertiary)] mr-4"></div>
              <span className="uppercase tracking-[0.2em] text-xs">006</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default DesktopBlogPreview;