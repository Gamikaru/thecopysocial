"use client";

import React from "react";
import { useDevice } from '@/context/DeviceContext';
import DesktopProcessSection from './DesktopProcessSection';
import MobileProcessSection from './MobileProcessSection';

const ProcessSection: React.FC = () => {
  const { isMobile } = useDevice();

  return isMobile ? <MobileProcessSection /> : <DesktopProcessSection />;
};

export default ProcessSection;