"use client";

import React from 'react';
import { useDevice } from '@/context/DeviceContext';
import DesktopServicesPreview from './DesktopServicesPreview';
import MobileServicesPreview from './MobileServicesPreview';

interface ServicesPreviewProps {
  className?: string;
}

const ServicesPreview: React.FC<ServicesPreviewProps> = (props) => {
  const { isMobile } = useDevice();

  return isMobile ? <MobileServicesPreview /> : <DesktopServicesPreview {...props} />;
};

export default ServicesPreview;