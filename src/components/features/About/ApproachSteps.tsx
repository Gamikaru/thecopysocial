// src/components/features/About/ApproachSteps.tsx
"use client";

import React from "react";
import { useDevice } from '@/context/DeviceContext';
import DesktopApproachSteps from './DesktopApproachSteps';
import MobileApproachSteps from './MobileApproachSteps';

interface ApproachStep {
  title: string;
  content: string;
}

interface ApproachStepsProps {
  title?: string;
  subtitle?: string;
  steps: ApproachStep[];
  className?: string;
}

const ApproachSteps: React.FC<ApproachStepsProps> = (props) => {
  const { isMobile } = useDevice();

  if (isMobile) {
    return <MobileApproachSteps {...props} />;
  }

  return <DesktopApproachSteps {...props} />;
};

export default ApproachSteps;