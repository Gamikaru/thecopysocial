// src/components/layout/Footer/DesktopFooter.tsx
"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { socialLinks, brandInfo, footerLinks } from '@/content/config/navigation';
import { newsletterContent } from '@/content/config/newsletter';
import Icon, { IconName } from '@/components/core/Icon';

// Map social platform names to icon names with proper typing
const socialIconMap: Record<string, IconName> = {
  'Email': 'fi:FiMail',
  'Instagram': 'fi:FiInstagram',
  'Twitter': 'fi:FiTwitter',
  'LinkedIn': 'fi:FiLinkedin'
};

const DesktopFooter: React.FC = () => {
  const [email, setEmail] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle newsletter subscription
    console.log('Subscribe email:', email);
    setEmail('');
    // Add subscription logic here
  };

  return (
    <footer className="bg-[var(--color-bg-primary)] pt-24 pb-12 border-t border-[var(--color-text-primary)]/10 hidden md:block relative">
      {/* Editorial grid overlay */}
      <div className="absolute inset-0 grid grid-cols-12 pointer-events-none">
        {[...Array(12)].map((_, i) => (
          <div key={i} className="border-l border-[var(--color-text-primary)]/5 h-full" />
        ))}
      </div>

      {/* Editorial background typography element */}
      <div className="absolute bottom-0 right-0 text-[25vw] leading-none font-bold tracking-tighter text-[var(--color-text-primary)]/[0.02] pointer-events-none z-0">
        TCS
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-12 gap-8 mb-16">
          {/* Logo and brand information */}
          <div className="col-span-3 col-start-1">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <Link href="/" className="inline-block mb-6">
                <div className="relative h-16 w-48">
                  <Image
                    src="/images/copy_social_logo.png"
                    alt={brandInfo.name}
                    fill
                    className="object-contain"
                    sizes="(max-width: 768px) 100vw, 200px"
                  />
                </div>
              </Link>

              <p className="text-[var(--color-text-secondary)] text-sm mb-6 font-light leading-relaxed">
                {brandInfo.tagline}
              </p>

              {/* Editorial design element */}
              <div className="h-px w-16 bg-[var(--color-text-primary)]/20 mb-4"></div>
            </motion.div>
          </div>

          {/* Navigation */}
          <div className="col-span-2 col-start-5">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <div className="uppercase tracking-[0.2em] text-xs text-[var(--color-text-tertiary)] mb-6">Navigation</div>

              <nav className="space-y-4">
                {footerLinks.map(
                  (
                    link: { path: string; label: string },
                    index: number
                  ) => (
                    <motion.div
                      key={link.path}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: 0.2 + (index * 0.05) }}
                    >
                      <Link
                        href={link.path}
                        className="text-[var(--color-text-primary)] hover:text-[var(--color-accent-mauve)] transition-colors duration-300 group flex items-center"
                      >
                        <span className="text-sm">{link.label}</span>
                        <motion.span
                          className="ml-2 h-px bg-[var(--color-accent-mauve)] opacity-0 group-hover:opacity-100 transition-all duration-300"
                          initial={{ width: 0 }}
                          whileInView={{ width: 12 }}
                          viewport={{ once: true }}
                        />
                      </Link>
                    </motion.div>
                  )
                )}
              </nav>
            </motion.div>
          </div>

          {/* Newsletter and Social */}
          <div className="col-span-5 col-start-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="uppercase tracking-[0.2em] text-xs text-[var(--color-text-tertiary)] mb-6">Stay Connected</div>

              <div className="mb-8">
                <h3 className="text-xl font-medium mb-2">{newsletterContent.title}</h3>
                <p className="text-[var(--color-text-secondary)] text-sm mb-4">
                  {newsletterContent.description.slice(0, 120)}...
                </p>

                <form onSubmit={handleSubmit} className="flex">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Your email address"
                    className="flex-grow px-4 py-3 bg-transparent border border-[var(--color-text-primary)]/20 focus:border-[var(--color-accent-mauve)] outline-none transition-colors"
                    required
                  />
                  <button
                    type="submit"
                    className="px-6 py-3 bg-[var(--color-text-primary)] text-[var(--color-bg-primary)] hover:bg-[var(--color-accent-navy)] transition-colors duration-300"
                  >
                    {newsletterContent.buttonText}
                  </button>
                </form>
              </div>

              {/* Social Icons with editorial styling */}
              <div>
                <div className="uppercase tracking-[0.2em] text-xs text-[var(--color-text-tertiary)] mb-4">Follow</div>
                <div className="flex space-x-6 items-center">
                  {socialLinks.map(
                    (
                      link: { platform: string; url: string; ariaLabel: string },
                      index: number
                    ) => {
                      // Add fallback for platforms not in our map
                      const iconName = socialIconMap[link.platform] || 'fi:FiLink';

                      return (
                        <motion.a
                          key={link.platform}
                          href={link.url}
                          aria-label={link.ariaLabel}
                          target="_blank"
                          rel="noopener noreferrer"
                          initial={{ opacity: 0, y: 10 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.4, delay: 0.4 + (index * 0.1) }}
                          className="text-[var(--color-text-primary)] hover:text-[var(--color-accent-mauve)] transition-colors duration-300"
                        >
                          <Icon name={iconName} size={20} />
                        </motion.a>
                      );
                    }
                  )}

                  {/* Editorial design element */}
                  <div className="h-px w-12 bg-[var(--color-text-primary)]/20"></div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Editorial bottom divider */}
        <motion.div
          className="h-px w-full bg-[var(--color-text-primary)]/10 mb-8"
          initial={{ width: 0 }}
          whileInView={{ width: "100%" }}
          viewport={{ once: true }}
          transition={{ duration: 1.2 }}
        />

        {/* Copyright with editorial treatment */}
        <div className="flex justify-between items-center text-[var(--color-text-tertiary)] text-xs">
          <div>{brandInfo.copyright}</div>
          <div className="flex items-center">
            <div className="h-[3px] w-[3px] bg-[var(--color-text-tertiary)] mr-3"></div>
            <span className="uppercase tracking-[0.2em]">The Copy Social</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default DesktopFooter;