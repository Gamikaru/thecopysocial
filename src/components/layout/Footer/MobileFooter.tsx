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
    <footer className="bg-[var(--color-bg-primary)] pt-20 pb-16 border-t border-[var(--color-text-primary)]/10 md:hidden relative">
      {/* Editorial background element */}
      <div className="absolute bottom-0 right-0 text-[25vw] leading-none font-bold tracking-tighter text-[var(--color-text-primary)]/[0.03] pointer-events-none z-0">
        TCS
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Logo and brand - 2.5x larger logo */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <Link href="/" className="inline-block mb-6">
            <div className="relative h-32 w-[280px] mx-auto">
              <Image
                src="/images/copy_social_logo.png"
                alt={brandInfo.name}
                fill
                className="object-contain"
                sizes="(max-width: 768px) 280px, 200px"
              />
            </div>
          </Link>

          <p className="text-[var(--color-text-secondary)] text-base mb-6 max-w-xs mx-auto leading-relaxed">
            {brandInfo.tagline}
          </p>

          {/* Editorial design element */}
          <div className="h-px w-20 bg-[var(--color-text-primary)]/20 mx-auto"></div>
        </motion.div>

        {/* Newsletter Section - Styled as a card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mb-16 bg-[var(--color-bg-secondary)] p-6 border-t-2 border-[var(--color-accent-mauve)]"
        >
          <div className="uppercase tracking-[0.2em] text-sm text-[var(--color-text-tertiary)] mb-4 text-center border-b border-[var(--color-text-primary)]/10 pb-2">Stay Connected</div>

          <div className="mb-6 text-center">
            <h3 className="text-xl font-medium mb-3">{newsletterContent.title}</h3>
            <p className="text-[var(--color-text-secondary)] text-sm mb-6">
              {newsletterContent.description.slice(0, 100)}...
            </p>
          </div>

          <form onSubmit={handleSubmit} className="flex flex-col space-y-4">
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
              className="px-6 py-3 bg-[var(--color-button-filled-primary)] text-[var(--color-button-filled-text)] hover:bg-[var(--color-button-filled-primary-hover)] transition-colors duration-300 flex items-center justify-center"
            >
              <span>{newsletterContent.buttonText}</span>
              <Icon name="fi:FiArrowRight" size={16} className="ml-2" />
            </button>
          </form>
        </motion.div>

        {/* Navigation */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-16"
        >
          <div className="uppercase tracking-[0.2em] text-sm text-[var(--color-text-tertiary)] mb-6 text-center border-b border-[var(--color-text-primary)]/10 pb-2">Navigation</div>

          <nav className="grid grid-cols-2 gap-6">
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
                    className="text-[var(--color-text-primary)] hover:text-[var(--color-accent-mauve)] transition-colors duration-300 text-base inline-flex flex-col items-center"
                  >
                    <span>{link.label}</span>
                    <span className="h-px w-8 bg-transparent group-hover:bg-[var(--color-accent-mauve-20)] mt-1"></span>
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
          className="mb-16"
        >
          <div className="uppercase tracking-[0.2em] text-sm text-[var(--color-text-tertiary)] mb-6 text-center border-b border-[var(--color-text-primary)]/10 pb-2">Follow</div>

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
                    className="text-[var(--color-text-primary)] hover:text-[var(--color-accent-mauve)] transition-colors duration-300 p-3 border border-transparent hover:border-[var(--color-accent-mauve-20)]"
                  >
                    <Icon name={iconName} size={28} />
                  </motion.a>
                );
              }
            )}
          </div>
        </motion.div>

        {/* Editorial divider */}
        <motion.div
          className="h-px w-full bg-[var(--color-text-primary)]/10 mb-8"
          initial={{ width: 0 }}
          whileInView={{ width: "100%" }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        />

        {/* Copyright with editorial treatment */}
        <div className="text-center text-[var(--color-text-tertiary)] text-sm">
          <div className="mb-3">{brandInfo.copyright}</div>
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