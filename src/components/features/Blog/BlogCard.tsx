// src/components/ui/BlogCard.tsx
"use client";

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Heading, Text } from '../../core/Typography';
import ImagePlaceholder from '../../core/ImagePlaceholder';
import Icon from '../../core/Icon';

interface BlogCardProps {
  id: string;
  title: string;
  excerpt: string;
  coverImage?: string;
  date: string;
  slug: string;
  tags?: string[];
  variant?: 'default' | 'featured' | 'minimal';
  className?: string;
}

const BlogCard: React.FC<BlogCardProps> = ({
  // id, // Remove this line
  title,
  excerpt,
  coverImage,
  date,
  slug,
  tags = [],
  variant = 'default',
  className = '',
}) => {
  // Format date nicely
  const formattedDate = new Date(date).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  // Different layouts based on variant
  if (variant === 'featured') {
    return (
      <motion.div
        whileHover={{ y: -5 }}
        transition={{ duration: 0.3 }}
        className={`bg-bg-secondary rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300 ${className}`}
      >
        <div className="grid md:grid-cols-2 gap-0">
          {/* Image Section */}
          <div className="relative h-full min-h-[240px]">
            {coverImage ? (
              <Image
                src={coverImage}
                alt={title}
                fill
                className="object-cover"
              />
            ) : (
              <ImagePlaceholder
                alt={title}
                fill
                placeholderText="Featured Article Image"
              />
            )}

            {/* Tags overlay */}
            {tags.length > 0 && (
              <div className="absolute top-4 left-4">
                <div className="flex flex-wrap gap-2">
                  {tags.slice(0, 3).map((tag) => (
                    <span
                      key={tag}
                      className="text-xs px-2 py-1 bg-bg-primary/80 text-text-primary rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                  {tags.length > 3 && (
                    <span className="text-xs px-2 py-1 bg-bg-primary/80 text-text-primary rounded-full">
                      +{tags.length - 3}
                    </span>
                  )}
                </div>
              </div>
            )}
          </div>

          {/* Content Section */}
          <div className="p-8 flex flex-col">
            <div className="text-text-tertiary text-sm mb-2">
              {formattedDate}
            </div>

            <Heading level={3} className="mb-3">
              {title}
            </Heading>

            <Text color="secondary" className="mb-6">
              {excerpt}
            </Text>

            <div className="mt-auto">
              <Link
                href={`/blog/${slug}`}
                className="inline-flex items-center px-4 py-2 bg-brand-primary text-text-on-accent rounded-md hover:bg-brand-primary/90 transition-colors duration-300"
              >
                Read Article
                <Icon name="fi:FiArrowRight" className="ml-2" size={16} />
              </Link>
            </div>
          </div>
        </div>
      </motion.div>
    );
  }

  if (variant === 'minimal') {
    return (
      <motion.div
        whileHover={{ y: -3 }}
        transition={{ duration: 0.3 }}
        className={`p-6 border-b border-bg-tertiary last:border-b-0 ${className}`}
      >
        <Link href={`/blog/${slug}`} className="block group">
          <div className="flex gap-4">
            {/* Optional tiny thumbnail */}
            {coverImage && (
              <div className="relative w-16 h-16 flex-shrink-0">
                <Image
                  src={coverImage}
                  alt={title}
                  fill
                  className="object-cover rounded"
                />
              </div>
            )}

            <div>
              <div className="text-text-tertiary text-xs mb-1">
                {formattedDate}
              </div>

              <Heading level={5} className="mb-1 group-hover:text-brand-accent transition-colors duration-300">
                {title}
              </Heading>

              {tags.length > 0 && (
                <div className="flex gap-2 mt-1">
                  {tags.slice(0, 2).map((tag) => (
                    <span
                      key={tag}
                      className="text-xs text-text-tertiary"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              )}
            </div>
          </div>
        </Link>
      </motion.div>
    );
  }

  // Default variant
  return (
    <motion.div
      whileHover={{ y: -5 }}
      transition={{ duration: 0.3 }}
      className={`bg-bg-secondary rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300 h-full flex flex-col ${className}`}
    >
      {/* Image */}
      <div className="relative aspect-video w-full">
        {coverImage ? (
          <Image
            src={coverImage}
            alt={title}
            fill
            className="object-cover"
          />
        ) : (
          <ImagePlaceholder
            alt={title}
            aspectRatio="16/9"
            placeholderText="Article Image"
          />
        )}

        {/* Tags overlay */}
        {tags.length > 0 && (
          <div className="absolute top-4 left-4">
            <div className="flex flex-wrap gap-2">
              {tags.slice(0, 2).map((tag) => (
                <span
                  key={tag}
                  className="text-xs px-2 py-1 bg-bg-primary/80 text-text-primary rounded-full"
                >
                  {tag}
                </span>
              ))}
              {tags.length > 2 && (
                <span className="text-xs px-2 py-1 bg-bg-primary/80 text-text-primary rounded-full">
                  +{tags.length - 2}
                </span>
              )}
            </div>
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-6 flex flex-col flex-grow">
        <div className="text-text-tertiary text-sm mb-2">
          {formattedDate}
        </div>

        <Heading level={4} className="mb-2">
          {title}
        </Heading>

        <Text color="secondary" className="mb-4 line-clamp-3">
          {excerpt}
        </Text>

        <div className="mt-auto pt-4">
          <Link
            href={`/blog/${slug}`}
            className="inline-flex items-center text-brand-primary hover:underline"
          >
            Read More
            <Icon name="fi:FiArrowRight" className="ml-1" size={16} />
          </Link>
        </div>
      </div>
    </motion.div>
  );
};

export default BlogCard;