// src/components/pages/About/AboutPage.tsx
"use client";

import React from 'react';
import { useDevice } from '@/context/DeviceContext';
import DesktopAboutPage from './DesktopAboutPage';
import MobileAboutPage from './MobileAboutPage';

const AboutPage: React.FC = () => {
  const { isMobile } = useDevice();

  if (isMobile) {
    return <MobileAboutPage />;
  }

  return <DesktopAboutPage />;
};

export default AboutPage;