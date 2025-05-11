"use client";

import React from "react";
import { useDevice } from '@/context/DeviceContext';
import DesktopCta from './DesktopCta';
import MobileCta from './MobileCta';

interface CtaSectionProps {
  title: string;
  subtitle?: string;
  buttonText: string;
  buttonLink: string;
  showSignature?: boolean;
  showLogo?: boolean;
  variant?: "navy" | "sage" | "cream" | "minimal" | "mauve" | "dark" | "editorial";
  className?: string;
  logoPath?: string;
  logoAlt?: string;
  logoWidth?: number;
  logoHeight?: number;
  alignment?: "center" | "left" | "right";
  showDecorations?: boolean;
}

const CtaSection: React.FC<CtaSectionProps> = (props) => {
  const { isMobile } = useDevice();

  return isMobile ? <MobileCta {...props} /> : <DesktopCta {...props} />;
};

export default CtaSection;