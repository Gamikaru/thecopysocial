// src/components/sections/Blog/BlogPost.tsx
"use client";

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Heading, Text } from '@/components/core/Typography';
import RichText from '@/components/core/RichText';
import ImagePlaceholder from '@/components/core/ImagePlaceholder';
import { BlogPost } from '@/content/types/types';
import { RichTextBlock } from '@/components/core/RichText';

interface BlogPostProps {
  post: {
    id: string;
    title: string;
    publishDate: string;
    author: string;
    authorBio?: string;
    coverImage?: string;
    tags?: string[];
    content: RichTextBlock[]; // Use the correct type here
    relatedPosts?: string[];
    cta?: {
      heading: string;
      text: string;
      buttonText: string;
      buttonLink: string;
    };
  };
  relatedPostsData?: BlogPost[];
  className?: string;
}

const BlogPostComponent: React.FC<BlogPostProps> = ({
  post,
  relatedPostsData = [],
  className = '',
}) => {
  // Format date for display
  const formattedDate = new Date(post.publishDate).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  // Filter related posts data based on IDs in the post
  const relatedPosts = post.relatedPosts
    ? relatedPostsData.filter(p => post.relatedPosts?.includes(p.id))
    : [];

  return (
    <article className={`py-32 relative bg-[var(--color-bg-primary)] ${className}`}>
      {/* Editorial grid overlay */}
      <div className="absolute inset-0 grid grid-cols-12 pointer-events-none">
        {[...Array(12)].map((_, i) => (
          <div key={i} className="border-l border-[var(--color-text-primary)]/5 h-full" />
        ))}
      </div>

      {/* Editorial background typography element */}
      <div className="absolute top-0 right-0 text-[25vw] leading-none font-bold tracking-tighter text-[var(--color-text-primary)]/[0.02] pointer-events-none z-0">
        ARTICLE
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Editorial Header */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 mb-20">
          <div className="md:col-span-8 md:col-start-3">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="mb-2"
            >
              {/* Editorial page indicator */}
              <div className="flex items-center mb-16">
                <div className="h-px w-16 bg-[var(--color-text-primary)] mr-4"></div>
                <span className="uppercase tracking-[0.3em] text-xs text-[var(--color-text-secondary)]">Article</span>
              </div>

              {/* Tags with editorial styling */}
              {post.tags && post.tags.length > 0 && (
                <div className="flex flex-wrap gap-4 mb-8">
                  {post.tags.map(tag => (
                    <Link
                      key={tag}
                      href={`/blog?category=${encodeURIComponent(tag)}`}
                      className="uppercase tracking-[0.3em] text-xs text-[var(--color-text-tertiary)] hover:text-[var(--color-accent-mauve)] transition-colors"
                    >
                      {tag}
                    </Link>
                  ))}
                </div>
              )}

              {/* Title with editorial typography */}
              <div className="overflow-hidden mb-8">
                <motion.div
                  initial={{ y: 100 }}
                  animate={{ y: 0 }}
                  transition={{ duration: 0.8, ease: "easeOut" }}
                >
                  <Heading level={1} className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-tight" serif>
                    {post.title}
                  </Heading>
                </motion.div>
              </div>

              {/* Meta with editorial styling */}
              <div className="mb-16">
                <div className="flex items-center text-[var(--color-text-secondary)]">
                  <span className="uppercase tracking-widest text-xs">
                    {formattedDate}
                  </span>
                  <span className="mx-3">•</span>
                  <span className="uppercase tracking-widest text-xs">
                    By {post.author}
                  </span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Featured Image with Editorial Treatment */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mb-20"
        >
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
            <div className="md:col-span-10 md:col-start-2 relative">
              {/* Geometric frame */}
              <div className="absolute inset-0 border border-[var(--color-text-primary)] transform translate-x-6 -translate-y-6 z-0"></div>

              {post.coverImage ? (
                <div className="relative aspect-[16/9] w-full overflow-hidden">
                  <Image
                    src={post.coverImage}
                    alt={post.title}
                    fill
                    className="object-cover"
                    priority
                    sizes="(max-width: 768px) 100vw, 80vw"
                  />
                </div>
              ) : (
                <ImagePlaceholder
                  alt={post.title}
                  aspectRatio="16/9"
                  placeholderText="Article Featured Image"
                />
              )}

              {/* Editorial image caption */}
              <div className="absolute bottom-0 left-0 right-0 bg-[var(--color-bg-primary)]/90 py-3 px-4 flex justify-between items-center">
                <span className="uppercase tracking-wider text-xs">Featured Image</span>
                <span className="h-px w-12 bg-[var(--color-text-primary)]"></span>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Content with Literary Typography */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mb-20"
        >
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
            <div className="md:col-span-6 md:col-start-4">
              {/* Dramatic first letter */}
              <div className="relative">
                <RichText content={post.content} className="article-content" />
              </div>
            </div>
          </div>
        </motion.div>

        {/* Author Bio with Editorial Treatment */}
        {post.authorBio && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            className="mb-20"
          >
            <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
              <div className="md:col-span-8 md:col-start-3">
                <div className="border-t border-b border-[var(--color-text-primary)]/10 py-12 relative">
                  {/* Decorative quote marks */}
                  <div className="absolute top-6 left-0 text-6xl leading-none font-serif text-[var(--color-text-primary)]/10">

                  </div>

                  <div className="pl-8">
                    <Heading level={4} className="mb-4 font-serif">
                      About the Author
                    </Heading>

                    <Text className="text-[var(--color-text-secondary)] italic mb-6">
                      {post.authorBio}
                    </Text>

                    <div className="flex items-center">
                      <div className="h-px w-12 bg-[var(--color-text-primary)]/20 mr-4"></div>
                      <span className="font-serif italic">{post.author}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        )}

        {/* Related Posts with Editorial Grid */}
        {relatedPosts.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="mb-20"
          >
            <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
              <div className="md:col-span-10 md:col-start-2">
                {/* Editorial section header */}
                <div className="flex items-center mb-12">
                  <div className="h-px w-16 bg-[var(--color-text-primary)] mr-4"></div>
                  <span className="uppercase tracking-[0.3em] text-xs text-[var(--color-text-secondary)]">Continue Reading</span>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                  {relatedPosts.map((post, index) => (
                    <div key={post.id} className="relative">
                      <div className="mb-4 relative">
                        <div className="relative aspect-[3/2] overflow-hidden">
                          <Image
                            src={post.coverImage}
                            alt={post.title}
                            fill
                            className="object-cover grayscale hover:grayscale-0 transition-all duration-700"
                            sizes="(max-width: 768px) 100vw, 40vw"
                          />

                          {/* Editorial image number */}
                          <div className="absolute top-0 left-0 bg-[var(--color-bg-primary)] py-1 px-2 text-sm font-bold text-[var(--color-accent-navy)]">
                            0{index + 1}
                          </div>
                        </div>
                      </div>

                      <div className="uppercase tracking-widest text-xs text-[var(--color-text-tertiary)] mb-2">
                        {new Date(post.date).toLocaleDateString('en-US', {
                          month: 'long',
                          day: 'numeric',
                          year: 'numeric'
                        })}
                      </div>

                      <Heading level={4} className="mb-3">
                        <Link
                          href={`/blog/${post.slug}`}
                          className="hover:text-[var(--color-accent-mauve)] transition-colors duration-300"
                        >
                          {post.title}
                        </Link>
                      </Heading>

                      <Link
                        href={`/blog/${post.slug}`}
                        className="inline-flex items-center group mt-2"
                      >
                        <span className="uppercase tracking-widest text-xs font-medium mr-3 text-[var(--color-accent-navy)]">
                          Read
                        </span>
                        <span className="h-px w-6 bg-[var(--color-accent-navy)] transition-all duration-300 group-hover:w-10"></span>
                      </Link>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        )}

        {/* CTA Section with Editorial Design */}
        {post.cta && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.9 }}
          >
            <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
              <div className="md:col-span-8 md:col-start-3">
                <div className="bg-[var(--color-text-primary)] text-[var(--color-bg-primary)] p-12 relative">
                  {/* Geometric overlay elements */}
                  <div className="absolute top-0 right-0 w-1/4 h-12 bg-[var(--color-bg-primary)] opacity-10"></div>
                  <div className="absolute bottom-0 left-0 w-1/5 h-16 bg-[var(--color-bg-primary)] opacity-10"></div>

                  <Heading level={3} className="mb-4 font-serif">
                    {post.cta.heading}
                  </Heading>

                  <Text size="lg" className="mb-8 font-light">
                    {post.cta.text}
                  </Text>

                  <Link
                    href={post.cta.buttonLink}
                    className="inline-flex items-center border border-[var(--color-bg-primary)] px-8 py-4 hover:bg-[var(--color-bg-primary)] hover:text-[var(--color-text-primary)] transition-colors duration-300 uppercase tracking-widest text-sm"
                  >
                    {post.cta.buttonText}
                    <span className="ml-3 h-px w-6 bg-current transition-all duration-300"></span>
                  </Link>
                </div>
              </div>
            </div>
          </motion.div>
        )}

        {/* Editorial page marker */}
        <motion.div
          className="mt-24 flex justify-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 1 }}
        >
          <div className="flex items-center text-[var(--color-text-tertiary)]">
            <div className="h-px w-12 bg-[var(--color-text-tertiary)] mr-4"></div>
            <span className="uppercase tracking-[0.2em] text-xs">The Copy Social • Journal</span>
          </div>
        </motion.div>
      </div>
    </article>
  );
};

export default BlogPostComponent;