// src/components/ui/PortfolioCard.tsx
"use client";

import React, { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import Image from "next/image";
import ImagePlaceholder from "../../core/ImagePlaceholder";


interface PortfolioCardProps {
  id: string;
  title: string;
  description: string;
  imagePath?: string;
  tags?: string[];
  link?: string;
  className?: string;
}

const PortfolioCard: React.FC<PortfolioCardProps> = ({
  id,
  title,
  description,
  imagePath,
  tags = [],
  link,
  className = "",
}) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      className={`bg-[var(--color-bg-secondary)] overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300 ${className}`}
      whileHover={{ y: -5 }}
      transition={{ duration: 0.3 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Image */}
      <div className="relative aspect-[4/3] w-full">
        {imagePath ? (
          <Image
            src={imagePath}
            alt={title}
            fill
            className="object-cover grayscale hover:grayscale-0 transform transition-all duration-700 ease-in-out"
            style={{
              transform: isHovered ? "scale(1.05)" : "scale(1)",
            }}
          />
        ) : (
          <ImagePlaceholder
            alt={title}
            aspectRatio="4/3"
            placeholderText="Project Image"
          />
        )}

        {/* Tags Overlay */}
        {tags.length > 0 && (
          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-[var(--color-text-primary)]/70 to-transparent p-4">
            <div className="flex flex-wrap gap-2">
              {tags.map((tag) => (
                <span
                  key={tag}
                  className="text-xs px-2 py-1 bg-[var(--color-bg-primary)]/80 text-[var(--color-text-primary)] rounded-none"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        )}

        {/* Editorial number detail */}
        <div className="absolute top-0 left-0 bg-[var(--color-bg-primary)] py-1 px-3">
          <span className="text-sm font-serif text-[var(--color-accent-mauve)]">
            {id.slice(-2)}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="p-6 border-t border-[var(--color-text-primary)]/10">
        <h3 className="text-xl font-bold tracking-tight mb-2 text-[var(--color-text-primary)]">
          {title}
        </h3>

        <p className="text-[var(--color-text-secondary)] text-sm mb-4 font-light">
          {description}
        </p>

        {link ? (
          <Link
            href={link}
            className="inline-flex items-center text-[var(--color-accent-navy)] group"
          >
            <span className="uppercase tracking-widest text-xs font-medium mr-3">View Project</span>
            <span className="h-px w-5 bg-[var(--color-accent-navy)] group-hover:w-8 transition-all duration-300"></span>
          </Link>
        ) : (
          <button
            className="inline-flex items-center text-[var(--color-accent-navy)] group"
            onClick={() => {
              console.log(`View project details for: ${id}`);
            }}
          >
            <span className="uppercase tracking-widest text-xs font-medium mr-3">View Details</span>
            <span className="h-px w-5 bg-[var(--color-accent-navy)] group-hover:w-8 transition-all duration-300"></span>
          </button>
        )}
      </div>
    </motion.div>
  );
};

export default PortfolioCard;