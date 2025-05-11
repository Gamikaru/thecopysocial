// src/components/features/Home/Hero/Hero.tsx
"use client";

import React from 'react';
import { useDevice } from '@/context/DeviceContext';
import DesktopHero from './DesktopHero';
import MobileHero from './MobileHero';

const Hero: React.FC = () => {
  const { isMobile } = useDevice();

  return isMobile ? <MobileHero /> : <DesktopHero />;
};

export default Hero;