// src/components/sections/Portfolio/PortfolioGrid.tsx
"use client";

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import PortfolioCard from '@/components/common/Cards/PortfolioCard';
import { PortfolioProject } from '@/content/types/types';

interface PortfolioGridProps {
  projects: PortfolioProject[];
  title?: string;
  subtitle?: string;
  className?: string;
}

const PortfolioGrid: React.FC<PortfolioGridProps> = ({
  projects,
  title = "Recent Work",
  subtitle = "Explore my portfolio of copywriting projects across different industries and formats.",
  className = "",
}) => {
  // Extract unique tags from all projects
  const allTags = ['All', ...Array.from(new Set(projects.flatMap(project => project.tags || [])))];

  // State for active filter
  const [activeFilter, setActiveFilter] = useState('All');

  // Filtered projects based on active tag
  const filteredProjects = activeFilter === 'All'
    ? projects
    : projects.filter(project => project.tags?.includes(activeFilter));

  // Stagger animation delay for grid items
  const staggerDelay = 0.1;

  return (
    <div className={`${className}`}>
      {/* Editorial section header */}
      <motion.div
        className="mb-16 text-center"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-6 text-[var(--color-text-primary)]">
          {title}
        </h2>

        <p className="text-lg text-[var(--color-text-secondary)] font-light max-w-3xl mx-auto">
          {subtitle}
        </p>
      </motion.div>

      {/* Editorial filter navigation */}
      <motion.div
        className="mb-12"
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <div className="flex flex-wrap justify-center gap-2 md:gap-4">
          {allTags.map((tag, index) => (
            <motion.button
              key={tag}
              onClick={() => setActiveFilter(tag)}
              className={`px-4 py-2 text-sm transition-colors duration-300 border ${
                activeFilter === tag
                  ? 'border-[var(--color-accent-mauve)] text-[var(--color-accent-mauve)]'
                  : 'border-[var(--color-text-primary)]/20 text-[var(--color-text-secondary)] hover:border-[var(--color-text-primary)]/40'
              }`}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
            >
              {tag}
            </motion.button>
          ))}
        </div>
      </motion.div>

      {/* Editorial grid of portfolio items */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredProjects.map((project, index) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * staggerDelay }}
          >
            <PortfolioCard
              id={project.id}
              title={project.title}
              description={project.description}
              imagePath={project.imagePath}
              tags={project.tags}
              link={project.link}
            />
          </motion.div>
        ))}
      </div>

      {/* Empty state message when no projects match the filter */}
      {filteredProjects.length === 0 && (
        <motion.div
          className="text-center py-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.4 }}
        >
          <p className="text-[var(--color-text-secondary)] text-lg">
            No projects found matching this category. Try another filter.
          </p>
        </motion.div>
      )}

      {/* Editorial loading indicator for when projects are being filtered */}
      {filteredProjects.length < projects.length && activeFilter !== 'All' && (
        <motion.div
          className="flex justify-center mt-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.4 }}
        >
          <div className="h-px w-16 bg-[var(--color-accent-mauve-light)]"></div>
        </motion.div>
      )}
    </div>
  );
};

export default PortfolioGrid;