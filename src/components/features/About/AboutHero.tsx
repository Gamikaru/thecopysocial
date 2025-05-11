// src/components/features/About/AboutHero.tsx
"use client";

import React from "react";
import { useDevice } from '@/context/DeviceContext';
import DesktopAboutHero from './DesktopAboutHero';
import MobileAboutHero from './MobileAboutHero';

interface AboutHeroProps {
  title: string;
  content: string;
  imagePath?: string;
  imageAlt?: string;
}

const AboutHero: React.FC<AboutHeroProps> = (props) => {
  const { isMobile } = useDevice();

  if (isMobile) {
    return <MobileAboutHero {...props} />;
  }

  return <DesktopAboutHero {...props} />;
};

export default AboutHero;