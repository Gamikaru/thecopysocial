// src/components/sections/Blog/BlogGrid.tsx
"use client";

import React, { useState, useMemo } from "react";
import { motion } from "framer-motion";
import { BlogPost } from "@/content/types/types";
import { Heading, Text } from "@/components/core/Typography";
import Icon from "@/components/core/Icon";
import Link from "next/link";
import Image from "next/image";

interface BlogGridProps {
  posts: BlogPost[];
  title?: string;
  subtitle?: string;
  className?: string;
  featuredPost?: boolean;
  showFilters?: boolean;
  maxPosts?: number;
  viewAllLink?: string;
  viewAllText?: string;
}

const BlogGrid: React.FC<BlogGridProps> = ({
  posts,
  title = "Latest Articles",
  subtitle,
  className = "",
  featuredPost = true,
  showFilters = true,
  maxPosts,
  viewAllLink = "/blog",
  viewAllText = "View All Posts",
}) => {
  // Get all unique categories from posts
  const allCategories = useMemo(() => {
    const categorySet = new Set<string>();
    posts.forEach((post) => {
      post.tags?.forEach((tag) => categorySet.add(tag));
    });
    return ["All", ...Array.from(categorySet)];
  }, [posts]);

  // State for active filter
  const [activeFilter, setActiveFilter] = useState("All");

  // Filtered and limited posts
  const displayPosts = useMemo(() => {
    let filtered =
      activeFilter === "All"
        ? posts
        : posts.filter((post) => post.tags?.includes(activeFilter));

    // Limit number of posts if maxPosts is specified
    if (maxPosts && filtered.length > maxPosts) {
      filtered = filtered.slice(0, maxPosts);
    }

    return filtered;
  }, [posts, activeFilter, maxPosts]);

  // Featured post (if enabled and posts exist)
  const featured = featuredPost && posts.length > 0 ? posts[0] : null;

  // Regular posts (excluding featured if it's shown)
  const regularPosts =
    featuredPost && featured
      ? displayPosts.filter((post) => post.id !== featured.id)
      : displayPosts;

  return (
    <section className={`py-32 relative bg-[var(--color-bg-primary)] ${className}`}>
      {/* Editorial grid overlay */}
      <div className="absolute inset-0 grid grid-cols-12 pointer-events-none">
        {[...Array(12)].map((_, i) => (
          <div key={i} className="border-l border-[var(--color-text-primary)]/5 h-full" />
        ))}
      </div>

      {/* Editorial background typography element */}
      <div className="absolute bottom-0 right-0 text-[25vw] leading-none font-bold tracking-tighter text-[var(--color-text-primary)]/[0.02] pointer-events-none z-0">
        JOURNAL
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header with Editorial Design */}
        <motion.div
          className="mb-24"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
            <div className="md:col-span-5 md:col-start-2">
              <div className="flex items-center mb-6">
                <div className="h-px w-16 bg-[var(--color-text-primary)] mr-4"></div>
                <span className="uppercase tracking-[0.3em] text-xs text-[var(--color-text-secondary)]">The Archive</span>
              </div>

              <Heading level={2} className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
                {title}
              </Heading>
            </div>

            <div className="md:col-span-5 md:col-start-7">
              {subtitle && (
                <Text
                  size="lg"
                  color="secondary"
                  className="font-light leading-relaxed mb-8"
                >
                  {subtitle}
                </Text>
              )}
            </div>
          </div>

          {/* Category Filters with Editorial Styling */}
          {showFilters && allCategories.length > 1 && (
            <div className="mt-12">
              <div className="overflow-x-auto pb-4">
                <div className="flex space-x-2 min-w-max">
                  {allCategories.map((category, index) => (
                    <motion.button
                      key={category}
                      onClick={() => setActiveFilter(category)}
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: 0.1 + (index * 0.05) }}
                      className={`
                        px-6 py-3 text-xs uppercase tracking-widest transition-colors duration-300
                        ${
                          activeFilter === category
                            ? "bg-[var(--color-text-primary)] text-[var(--color-bg-primary)]"
                            : "border border-[var(--color-text-primary)]/20 hover:border-[var(--color-accent-mauve)]"
                        }
                      `}
                    >
                      {category}
                    </motion.button>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* Editorial horizontal line */}
          <motion.div
            className="h-px bg-[var(--color-text-primary)]/10 w-full mt-12"
            initial={{ width: 0 }}
            whileInView={{ width: "100%" }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
          />
        </motion.div>

        {/* Featured Post with Editorial Design */}
        {featuredPost && featured && activeFilter === "All" && (
          <motion.div
            className="mb-24"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
              {/* Featured post image with editorial treatment */}
              <div className="md:col-span-7 md:col-start-1 relative">
                <div className="absolute inset-0 border border-[var(--color-accent-clay-light)] transform translate-x-4 translate-y-4 z-0"></div>
                <div className="relative aspect-[16/9] overflow-hidden">
                  <Image
                    src={featured.coverImage}
                    alt={featured.title}
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
                    {new Date(featured.date).toLocaleDateString('en-US', {
                      month: 'long',
                      day: 'numeric',
                      year: 'numeric'
                    })}
                  </div>
                  <div className="h-px w-12 bg-[var(--color-text-tertiary)] ml-4"></div>
                </div>
              </div>

              {/* Featured post content with editorial typography */}
              <div className="md:col-span-4 md:col-start-9">
                <div className="pl-0 md:pl-6 border-l-0 md:border-l border-[var(--color-text-primary)]/10">
                  {/* Tags */}
                  {featured.tags && featured.tags.length > 0 && (
                    <div className="flex flex-wrap gap-2 mb-4">
                      {featured.tags.slice(0, 2).map(tag => (
                        <span key={tag} className="text-xs uppercase tracking-wider text-[var(--color-text-tertiary)]">
                          {tag}
                        </span>
                      ))}
                    </div>
                  )}

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
                    {featured.title}
                  </Heading>

                  <Text color="secondary" className="mb-8 font-light text-[var(--color-text-secondary)]">
                    {featured.excerpt}
                  </Text>

                  <Link
                    href={`/blog/${featured.slug}`}
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
        )}

        {/* Editorial horizontal line */}
        <motion.div
          className="h-px bg-[var(--color-text-primary)]/10 w-full mb-16"
          initial={{ width: 0 }}
          whileInView={{ width: "100%" }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        />

        {/* Regular Posts Grid with Editorial Layout */}
        {regularPosts.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-12 gap-x-4 gap-y-16">
            {regularPosts.map((post, index) => (
              <motion.div
                key={post.id}
                className="col-span-12 md:col-span-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 * (index % 2) }}
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
        ) : (
          <div className="text-center py-16">
            <Icon
              name="fi:FiFileText"
              size={48}
              className="text-[var(--color-text-tertiary)] mx-auto mb-4"
            />
            <Text color="secondary" size="lg">
              No articles found for this category. Please try another filter.
            </Text>
          </div>
        )}

        {/* View All Button with Editorial Styling */}
        {maxPosts && posts.length > maxPosts && (
          <motion.div
            className="mt-24 text-center"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <Link
              href={viewAllLink}
              className="inline-flex flex-col items-center group"
            >
              <span className="uppercase tracking-[0.3em] text-sm font-medium mb-3 text-[var(--color-text-secondary)]">
                {viewAllText}
              </span>
              <div className="w-px h-8 bg-[var(--color-accent-navy)] group-hover:h-12 transition-all duration-300"></div>
            </Link>
          </motion.div>
        )}

        {/* Editorial page marker at bottom */}
        <motion.div
          className="mt-16 flex justify-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <div className="flex items-center text-[var(--color-text-tertiary)]">
            <div className="h-px w-12 bg-[var(--color-text-tertiary)] mr-4"></div>
            <span className="uppercase tracking-[0.2em] text-xs">The Copy Social</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default BlogGrid;