// src/components/layout/Header/DesktopHeader.tsx
"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { mainNavItems, ctaButton, brandInfo } from '@/content/config/navigation';
import { usePathname } from 'next/navigation';

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
        scrolled ? 'py-3 bg-white shadow-sm' : 'py-6 bg-transparent'
      }`}
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
    >
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-12 items-center">
          {/* Logo Area - Editorial placement */}
          <div className="col-span-3 col-start-1">
            <Link href="/" aria-label={`${brandInfo.name} - Home`}>
              <div className={`relative ${scrolled ? 'h-16 w-48' : 'h-20 w-56'} transition-all duration-500`}>
                <Image
                  src="/images/copy_social_logo.png"
                  alt={brandInfo.name}
                  fill
                  priority
                  className="object-contain"
                  sizes="(max-width: 768px) 100vw, 200px"
                />
              </div>
            </Link>
          </div>

          {/* Main Navigation - Editorial styling */}
          <nav className="col-span-9 col-start-4 flex justify-end items-center">
            <ul className="flex items-center">
              {mainNavItems.map((item: { label: string; path: string; isButton?: boolean }) => {
                const isActive = pathname === item.path;

                return (
                  <li key={item.path} className="relative mx-6 first:ml-0 last:mr-0">
                    <Link
                      href={item.path}
                      className={`text-xs uppercase tracking-[0.2em] font-light py-3 transition-colors duration-300 ${
                        isActive
                          ? 'text-[var(--color-accent-mauve)]'
                          : 'text-black hover:text-[var(--color-accent-mauve)]'
                      }`}
                    >
                      {item.label}
                    </Link>

                    {/* Active indicator - editorial line accent */}
                    {isActive && (
                      <motion.div
                        className="absolute -bottom-2 left-0 h-px w-full bg-[var(--color-accent-mauve)]"
                        layoutId="navIndicator"
                        transition={{ duration: 0.3, ease: "easeOut" }}
                      />
                    )}
                  </li>
                );
              })}

              {/* Editorial separator before CTA */}
              <div className="h-6 w-px bg-black/10 mx-8"></div>

              {/* CTA Button with editorial styling */}
              <li>
                <Link
                  href={ctaButton.path}
                  className="inline-flex group items-center"
                >
                  <span className="text-xs uppercase tracking-[0.2em] text-[var(--color-accent-navy)] mr-3 font-medium">
                    {ctaButton.label}
                  </span>
                  <span className="h-px w-6 bg-[var(--color-accent-navy)] transition-all duration-300 group-hover:w-10"></span>
                </Link>
              </li>
            </ul>
          </nav>
        </div>

        {/* Editorial bottom line */}
        <motion.div
          className="absolute bottom-0 left-0 right-0 h-px bg-black/5"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        />
      </div>
    </motion.header>
  );
};

export default DesktopHeader;