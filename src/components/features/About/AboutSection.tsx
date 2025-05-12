// src/components/features/About/AboutSection.tsx
"use client";

import React from 'react';
import { useDevice } from '@/context/DeviceContext';
import DesktopAboutSection from './DesktopAboutSection';
import MobileAboutSection from './MobileAboutSection';

interface AboutSectionProps {
  title: string;
  content: string[] | string;
  imagePath?: string;
  imagePosition?: 'left' | 'right' | 'none';
  className?: string;
  index?: number; // Used for staggered animations
}

const AboutSection: React.FC<AboutSectionProps> = (props) => {
  const { isMobile } = useDevice();

  if (isMobile) {
    return <MobileAboutSection {...props} />;
  }

  return <DesktopAboutSection {...props} />;
};

export default AboutSection;