// src/components/layout/Footer/MobileFooter.tsx
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

const MobileFooter: React.FC = () => {
  const [email, setEmail] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle newsletter subscription
    console.log('Subscribe email:', email);
    setEmail('');
    // Add subscription logic here
  };

  return (
    <footer className="bg-[var(--color-bg-primary)] pt-16 pb-12 border-t border-[var(--color-text-primary)]/10 md:hidden relative">
      {/* Editorial background element */}
      <div className="absolute bottom-0 right-0 text-[20vw] leading-none font-bold tracking-tighter text-[var(--color-text-primary)]/[0.02] pointer-events-none z-0">
        TCS
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Logo and brand */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12 text-center"
        >
          <Link href="/" className="inline-block mb-4">
            <div className="relative h-16 w-48 mx-auto">
              <Image
                src="/images/copy_social_logo.png"
                alt={brandInfo.name}
                fill
                className="object-contain"
                sizes="(max-width: 768px) 200px, 100px"
              />
            </div>
          </Link>

          <p className="text-[var(--color-text-secondary)] text-sm mb-4 max-w-xs mx-auto">
            {brandInfo.tagline}
          </p>

          {/* Editorial design element */}
          <div className="h-px w-16 bg-[var(--color-text-primary)]/20 mx-auto"></div>
        </motion.div>

        {/* Newsletter Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mb-12"
        >
          <div className="uppercase tracking-[0.2em] text-xs text-[var(--color-text-tertiary)] mb-4 text-center">Stay Connected</div>

          <div className="mb-6 text-center">
            <h3 className="text-xl font-medium mb-2">{newsletterContent.title}</h3>
            <p className="text-[var(--color-text-secondary)] text-sm mb-4">
              {newsletterContent.description.slice(0, 80)}...
            </p>
          </div>

          <form onSubmit={handleSubmit} className="flex flex-col space-y-3">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Your email address"
              className="px-4 py-3 bg-transparent border border-[var(--color-text-primary)]/20 focus:border-[var(--color-accent-mauve)] outline-none transition-colors"
              required
            />
            <button
              type="submit"
              className="px-6 py-3 bg-[var(--color-text-primary)] text-[var(--color-bg-primary)] hover:bg-[var(--color-accent-navy)] transition-colors duration-300"
            >
              {newsletterContent.buttonText}
            </button>
          </form>
        </motion.div>

        {/* Navigation */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-12"
        >
          <div className="uppercase tracking-[0.2em] text-xs text-[var(--color-text-tertiary)] mb-4 text-center">Navigation</div>

          <nav className="grid grid-cols-2 gap-4">
            {footerLinks.map(
              (
                link: { path: string; label: string },
                index: number
              ) => (
                <motion.div
                  key={link.path}
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.3 + (index * 0.05) }}
                  className="text-center"
                >
                  <Link
                    href={link.path}
                    className="text-[var(--color-text-primary)] hover:text-[var(--color-accent-mauve)] transition-colors duration-300 text-sm"
                  >
                    {link.label}
                  </Link>
                </motion.div>
              )
            )}
          </nav>
        </motion.div>

        {/* Social Icons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mb-12"
        >
          <div className="uppercase tracking-[0.2em] text-xs text-[var(--color-text-tertiary)] mb-4 text-center">Follow</div>

          <div className="flex justify-center space-x-8">
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
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.4 + (index * 0.1) }}
                    className="text-[var(--color-text-primary)] hover:text-[var(--color-accent-mauve)] transition-colors duration-300"
                  >
                    <Icon name={iconName} size={24} />
                  </motion.a>
                );
              }
            )}
          </div>
        </motion.div>

        {/* Editorial divider */}
        <motion.div
          className="h-px w-full bg-[var(--color-text-primary)]/10 mb-6"
          initial={{ width: 0 }}
          whileInView={{ width: "100%" }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        />

        {/* Copyright with editorial treatment */}
        <div className="text-center text-[var(--color-text-tertiary)] text-xs">
          <div className="mb-2">{brandInfo.copyright}</div>
          <div className="flex items-center justify-center">
            <div className="h-[3px] w-[3px] bg-[var(--color-text-tertiary)] mr-3"></div>
            <span className="uppercase tracking-[0.2em]">The Copy Social</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default MobileFooter;