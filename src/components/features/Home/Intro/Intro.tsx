"use client";

import React from "react";
import { useDevice } from '@/context/DeviceContext';
import DesktopIntro from './DesktopIntro';
import MobileIntro from './MobileIntro';

interface IntroProps {
  className?: string;
}

const Intro: React.FC<IntroProps> = (props) => {
  const { isMobile } = useDevice();

  return isMobile ? <MobileIntro /> : <DesktopIntro {...props} />;
};

export default Intro;