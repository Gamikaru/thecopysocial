// src/components/features/About/JourneyTimeline.tsx
"use client";

import React from "react";
import { useDevice } from '@/context/DeviceContext';
import DesktopJourneyTimeline from './DesktopJourneyTimeline';
import MobileJourneyTimeline from './MobileJourneyTimeline';
import { AboutSection } from '@/content/types/types';

interface JourneyTimelineProps {
  title?: string;
  subtitle?: string;
  sections: AboutSection[];
  className?: string;
}

const JourneyTimeline: React.FC<JourneyTimelineProps> = (props) => {
  const { isMobile } = useDevice();

  if (isMobile) {
    return <MobileJourneyTimeline {...props} />;
  }

  return <DesktopJourneyTimeline {...props} />;
};

export default JourneyTimeline;