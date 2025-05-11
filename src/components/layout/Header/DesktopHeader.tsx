// src/components/layout/Header/DesktopHeader.tsx
"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { mainNavItems, ctaButton, brandInfo } from '@/content/config/navigation';
import { usePathname } from 'next/navigation';
import ThemeToggle from '@/components/common/ThemeToggle';

const DesktopHeader: React.FC = () => {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);

  // Track scroll position for header styling
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.header
      className={`fixed top-0 left-0 right-0 z-[var(--z-header)] hidden md:block transition-all duration-500 ${
        scrolled ? 'py-4 bg-[var(--color-bg-primary)] shadow-sm backdrop-blur-md' : 'py-8 bg-transparent'
      }`}
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
    >
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-12 items-center">
          {/* Logo Area - Editorial placement with 2.5x larger size */}
          <div className="col-span-4 col-start-1">
            <Link href="/" aria-label={`${brandInfo.name} - Home`}>
              <div className={`relative ${scrolled ? 'h-28 w-120' : 'h-40 w-140'} transition-all duration-500`}>
                <Image
                  src="/images/copy_social_logo.png"
                  alt={brandInfo.name}
                  fill
                  priority
                  className="object-contain"
                  sizes="(max-width: 768px) 100vw, 350px"
                />
              </div>
            </Link>
          </div>

          {/* Main Navigation - Editorial styling */}
          <nav className="col-span-8 col-start-5 flex justify-end items-center">
            <ul className="flex items-center">
              {mainNavItems.map((item: { label: string; path: string; isButton?: boolean }) => {
                const isActive = pathname === item.path;

                return (
                  <li key={item.path} className="relative mx-6 first:ml-0 last:mr-0">
                    <Link
                      href={item.path}
                      className={`text-sm uppercase tracking-[0.2em] font-light py-3 transition-colors duration-300 ${
                        isActive
                          ? 'text-[var(--color-accent-mauve)]'
                          : 'text-[var(--color-text-primary)] hover:text-[var(--color-accent-mauve)]'
                      }`}
                    >
                      {item.label}
                    </Link>

                    {/* Active indicator - editorial line accent */}
                    {isActive && (
                      <motion.div
                        className="absolute -bottom-2 left-0 h-[2px] w-full bg-[var(--color-accent-mauve)]"
                        layoutId="navIndicator"
                        transition={{ duration: 0.3, ease: "easeOut" }}
                      />
                    )}
                  </li>
                );
              })}

              {/* Theme Toggle - Editorial styling */}
              <li className="ml-6">
                <div className="relative flex items-center justify-center">
                  <ThemeToggle
                    size="md"
                    className="border border-[var(--color-text-primary)]/20 hover:border-[var(--color-accent-mauve)]"
                  />
                </div>
              </li>

              {/* Editorial separator before CTA */}
              <div className="h-8 w-px bg-[var(--color-text-primary)]/10 mx-8"></div>

              {/* CTA Button with editorial styling */}
              <li>
                <Link
                  href={ctaButton.path}
                  className="inline-flex group items-center px-6 py-3 border border-[var(--color-button-outline-primary-border)] text-[var(--color-button-outline-primary-text)] hover:bg-[var(--color-button-filled-primary)] hover:text-[var(--color-button-filled-text)] hover:border-[var(--color-button-filled-primary)] transition-all duration-300"
                >
                  <span className="text-sm uppercase tracking-[0.2em] font-medium">
                    {ctaButton.label}
                  </span>
                  <span className="ml-4 h-px w-5 bg-current transition-all duration-300 group-hover:w-8"></span>
                </Link>
              </li>
            </ul>
          </nav>
        </div>

        {/* Editorial bottom line */}
        <motion.div
          className="absolute bottom-0 left-0 right-0 h-px bg-[var(--color-text-primary)]/5"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        />
      </div>
    </motion.header>
  );
};

export default DesktopHeader;