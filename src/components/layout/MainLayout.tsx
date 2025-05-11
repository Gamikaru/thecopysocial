// src/components/layout/MainLayout.tsx
"use client";

import React from 'react';
import Header from './Header';
import Footer from './Footer';
import { motion } from 'framer-motion';
import { pageTransitionVariants } from '@/components/common/Animations/variants';
import { ThemeProvider } from '@/context/ThemeContext';

interface MainLayoutProps {
  children: React.ReactNode;
}

const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  return (
    <ThemeProvider>
      <div className="flex flex-col min-h-screen">
        <Header />
        <motion.main
          className="flex-grow"
          variants={pageTransitionVariants}
          initial="initial"
          animate="animate"
          exit="exit"
        >
          {children}
        </motion.main>
        <Footer />
      </div>
    </ThemeProvider>
  );
};

export default MainLayout;