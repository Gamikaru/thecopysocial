// src/components/layout/Header/MobileHeader.tsx
"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { mainNavItems, ctaButton, brandInfo } from "@/content/config/navigation";
import Icon from "@/components/core/Icon";

const MobileHeader: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  // Custom animation variants that match our editorial aesthetic
  const menuVariants = {
    closed: {
      opacity: 0,
      x: "100%",
      transition: {
        duration: 0.5,
        ease: [0.4, 0.0, 0.2, 1],
        when: "afterChildren",
        staggerChildren: 0.05,
        staggerDirection: -1
      }
    },
    open: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.5,
        ease: [0.4, 0.0, 0.2, 1],
        when: "beforeChildren",
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    closed: {
      opacity: 0,
      x: -20,
      transition: { duration: 0.3, ease: "easeInOut" }
    },
    open: (i: number) => ({
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.4,
        ease: "easeOut",
        delay: 0.1 + (i * 0.05)
      }
    })
  };

  return (
    <header className="md:hidden flex flex-col">
      {/* Top bar - refined with editorial styling */}
      <div className="flex justify-between items-center py-4 px-6 border-b border-black/10">
        <Link href="/" aria-label={`${brandInfo.name} - Home`}>
          <div className="relative h-16 w-[240px]">
            <Image
              src="/images/copy_social_logo.png"
              alt={brandInfo.name}
              fill
              priority
              className="object-contain"
              sizes="240px"
            />
          </div>
        </Link>

        {/* Minimal geometric menu button */}
        <button
          onClick={toggleMenu}
          className="flex items-center justify-center w-12 h-12 border border-black relative z-20 transition-colors duration-300"
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={isMenuOpen ? 'close' : 'menu'}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              {isMenuOpen ? (
                <Icon name="fi:FiX" size={24} />
              ) : (
                <Icon name="fi:FiMenu" size={24} />
              )}
            </motion.div>
          </AnimatePresence>
        </button>
      </div>

      {/* Editorial mobile menu overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            className="fixed inset-0 bg-white z-10 flex flex-col"
            variants={menuVariants}
            initial="closed"
            animate="open"
            exit="closed"
          >
            {/* Editorial grid overlay */}
            <div className="absolute inset-0 grid grid-cols-6 pointer-events-none">
              {[...Array(6)].map((_, i: number) => (
                <div key={i} className="border-l border-black/5 h-full" />
              ))}
            </div>

            {/* Background typography element */}
            <div className="absolute top-0 right-0 text-[25vw] leading-none font-bold tracking-tighter text-black/[0.03] pointer-events-none z-0">
              MENU
            </div>

            {/* Editorial section header */}
            <div className="px-6 pt-24 pb-8">
              <div className="flex items-center mb-6">
                <div className="h-px w-12 bg-[var(--color-accent-mauve)] mr-4"></div>
                <span className="uppercase tracking-[0.3em] text-xs text-black/70">Navigation</span>
              </div>
            </div>

            <nav className="flex flex-col items-start px-6 relative z-10">
              {mainNavItems.map((item: { label: string; path: string; isButton?: boolean }, i: number) => (
                <motion.div
                  key={item.path}
                  custom={i}
                  variants={itemVariants}
                  className="w-full py-5 border-t border-black/10 last:border-b"
                >
                  <div className="flex items-center justify-between">
                    {/* Page number - editorial detail */}
                    <span className="text-[var(--color-accent-mauve)] text-sm font-light">
                      {(i + 1).toString().padStart(2, '0')}
                    </span>

                    <Link
                      href={item.path}
                      className="text-2xl font-bold tracking-tight group flex items-center"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {item.label}
                      <motion.span
                        className="ml-3 h-px bg-black group-hover:w-6 transition-all duration-300"
                        initial={{ width: 0 }}
                        animate={{ width: 12 }}
                      />
                    </Link>
                  </div>
                </motion.div>
              ))}

              {/* CTA Button with editorial styling */}
              <motion.div
                custom={mainNavItems.length}
                variants={itemVariants}
                className="mt-12 w-full"
              >
                <Link
                  href={ctaButton.path}
                  className="block w-full py-4 px-6 bg-black text-white uppercase tracking-widest text-sm font-light hover:bg-[var(--color-accent-navy)] transition-colors duration-300"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {ctaButton.label}
                </Link>
              </motion.div>
            </nav>

            {/* Editorial footer marker */}
            <motion.div
              variants={itemVariants}
              custom={mainNavItems.length + 1}
              className="mt-auto mb-8 px-6 py-4"
            >
              <div className="flex items-center text-black/40">
                <div className="h-px w-12 bg-black/20 mr-4"></div>
                <span className="uppercase tracking-[0.2em] text-xs">
                  The Copy Social
                </span>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default MobileHeader;