"use client";

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { blogPosts } from '@/content/data/blog';
import { Heading, Text } from '@/components/core/Typography';

interface MobileBlogPreviewProps {
  title?: string;
  description?: string;
  postsToShow?: number;
}

const MobileBlogPreview: React.FC<MobileBlogPreviewProps> = ({
  title = "From the Blog",
  description = "Insights, tips, and strategies to help you communicate better and grow your business.",
  postsToShow = 2 // Reduced number for mobile
}) => {
  // Get the required number of blog posts
  const recentPosts = blogPosts.slice(0, postsToShow);

  return (
    <section className="py-20 bg-[var(--color-bg-primary)] relative">
      {/* Simplified background typography for mobile */}
      <div className="absolute bottom-0 right-0 text-[20vw] leading-none font-bold tracking-tighter text-[var(--color-accent-sage)]/[0.05] pointer-events-none z-0">
        BLOG
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Mobile-optimized section header */}
        <motion.div
          className="mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center mb-4">
            <div className="h-px w-12 bg-[var(--color-text-primary)] mr-4"></div>
            <span className="uppercase tracking-[0.2em] text-xs text-[var(--color-text-secondary)]">Journal</span>
          </div>

          <h2 className="text-3xl font-bold tracking-tight mb-4 text-[var(--color-text-primary)]">
            {title}
          </h2>

          <p className="text-base text-[var(--color-text-secondary)] font-light leading-relaxed">
            {description}
          </p>

          {/* Simplified horizontal line */}
          <motion.div
            className="h-px bg-[var(--color-text-primary)]/10 w-full mt-8"
            initial={{ width: 0 }}
            whileInView={{ width: "100%" }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          />
        </motion.div>

        {/* Featured post - mobile optimized */}
        <motion.div
          className="mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {/* Featured post image */}
          <div className="relative mb-6">
            <div className="absolute inset-0 border border-[var(--color-accent-clay-light)] transform translate-x-3 translate-y-3 z-0"></div>
            <div className="relative aspect-[16/9] overflow-hidden">
              <Image
                src={recentPosts[0].coverImage}
                alt={recentPosts[0].title}
                fill
                className="object-cover grayscale hover:grayscale-0 transition-all duration-700"
                sizes="(max-width: 768px) 100vw, 50vw"
              />

              {/* Editorial image number */}
              <div className="absolute top-0 left-0 bg-[var(--color-bg-primary)] py-1 px-3 font-bold text-[var(--color-accent-navy)]">
                01
              </div>

              {/* Editorial image caption */}
              <div className="absolute bottom-0 left-0 right-0 py-2 px-3 bg-[var(--color-bg-primary)]/90 flex justify-between items-center">
                <span className="uppercase tracking-wider text-xs text-[var(--color-text-secondary)]">Featured</span>
                <span className="h-px w-8 bg-[var(--color-text-primary)]"></span>
              </div>
            </div>
          </div>

          {/* Publication date - editorial style */}
          <div className="mb-3 flex items-center">
            <div className="uppercase tracking-widest text-xs text-[var(--color-text-tertiary)]">
              {new Date(recentPosts[0].date).toLocaleDateString('en-US', {
                month: 'long',
                day: 'numeric',
                year: 'numeric'
              })}
            </div>
            <div className="h-px w-8 bg-[var(--color-text-tertiary)] ml-3"></div>
          </div>

          {/* Featured post content */}
          <div>
            <Heading level={3} className="text-xl font-bold tracking-tight mb-3 text-[var(--color-text-primary)]">
              {recentPosts[0].title}
            </Heading>

            <Text color="secondary" className="mb-4 font-light text-[var(--color-text-secondary)]">
              {recentPosts[0].excerpt.length > 120
                ? `${recentPosts[0].excerpt.substring(0, 120)}...`
                : recentPosts[0].excerpt}
            </Text>

            <Link
              href={`/blog/${recentPosts[0].slug}`}
              className="inline-flex items-center group"
            >
              <span className="uppercase tracking-widest text-xs font-medium mr-3 text-[var(--color-accent-navy)]">
                Read Article
              </span>
              <span className="h-px w-5 bg-[var(--color-accent-navy)] group-hover:w-8 transition-all duration-300"></span>
            </Link>
          </div>
        </motion.div>

        {/* Secondary posts - simplified for mobile */}
        {recentPosts.slice(1).map((post, index) => (
          <motion.div
            key={post.id}
            className="mb-10 last:mb-0"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 * (index + 1) }}
          >
            <div className="flex gap-4">
              {/* Post image with editorial treatment */}
              <div className="w-1/3 relative">
                <div className="relative aspect-[4/5] overflow-hidden">
                  <Image
                    src={post.coverImage}
                    alt={post.title}
                    fill
                    className="object-cover grayscale hover:grayscale-0 transition-all duration-700"
                    sizes="33vw"
                  />

                  {/* Editorial image number */}
                  <div className="absolute top-0 left-0 bg-[var(--color-bg-primary)] py-1 px-2 text-xs font-bold text-[var(--color-accent-navy)]">
                    {(index + 2).toString().padStart(2, '0')}
                  </div>
                </div>
              </div>

              {/* Post content with editorial typography */}
              <div className="w-2/3">
                {/* Publication date - editorial style */}
                <div className="uppercase tracking-widest text-xs text-[var(--color-text-tertiary)] mb-2">
                  {new Date(post.date).toLocaleDateString('en-US', {
                    month: 'long',
                    day: 'numeric'
                  })}
                </div>

                <Heading level={4} className="text-lg font-bold tracking-tight mb-2 text-[var(--color-text-primary)]">
                  {post.title}
                </Heading>

                <Link
                  href={`/blog/${post.slug}`}
                  className="inline-flex items-center group mt-2"
                >
                  <span className="uppercase tracking-widest text-xs font-medium mr-2 text-[var(--color-accent-navy)]">
                    Read
                  </span>
                  <span className="h-px w-4 bg-[var(--color-accent-navy)] group-hover:w-6 transition-all duration-300"></span>
                </Link>
              </div>
            </div>

            {/* Horizontal divider between posts except last */}
            {index < recentPosts.slice(1).length - 1 && (
              <motion.div
                className="h-px bg-[var(--color-text-primary)]/5 w-full my-10"
                initial={{ width: 0 }}
                whileInView={{ width: "100%" }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              />
            )}
          </motion.div>
        ))}

        {/* Editorial "View All" link */}
        <motion.div
          className="mt-12 flex justify-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <Link
            href="/blog"
            className="inline-flex flex-col items-center group"
          >
            <span className="uppercase tracking-[0.2em] text-sm font-medium mb-2 text-[var(--color-text-secondary)]">
              View All Articles
            </span>
            <div className="w-px h-6 bg-[var(--color-accent-navy)] group-hover:h-8 transition-all duration-300"></div>
          </Link>
        </motion.div>

        {/* Simplified editorial page marker */}
        <motion.div
          className="mt-8 flex justify-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <div className="flex items-center text-[var(--color-text-tertiary)]">
            <div className="h-px w-8 bg-[var(--color-text-tertiary)] mr-3"></div>
            <span className="uppercase tracking-[0.2em] text-xs">006</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default MobileBlogPreview;