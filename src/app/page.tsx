// src/app/page.tsx
"use client";

import React from 'react';
import { useDevice } from '@/context/DeviceContext';
import DesktopHomePage from './DesktopHomePage';
import MobileHomePage from './MobileHomePage';

export default function HomePage() {
  const { isMobile } = useDevice();

  return isMobile ? <MobileHomePage /> : <DesktopHomePage />;
}