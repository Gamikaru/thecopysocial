"use client";

import React from 'react';
import Header from './Header';
import Footer from './Footer';
import { motion } from 'framer-motion';
import { pageTransitionVariants } from '@/components/common/Animations/variants';

interface MainLayoutProps {
  children: React.ReactNode;
}

const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  return (
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
  );
};

export default MainLayout;
