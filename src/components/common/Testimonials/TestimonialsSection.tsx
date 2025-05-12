// src/components/features/Testimonials/TestimonialsSection.tsx
"use client";

import React from 'react';
import { useDevice } from '@/context/DeviceContext';
import DesktopTestimonialsSection from './DesktopTestimonialsSection';
import MobileTestimonialsSection from './MobileTestimonialsSection';

interface TestimonialsSectionProps {
  className?: string;
  title?: string;
  subtitle?: string;
}

const TestimonialsSection: React.FC<TestimonialsSectionProps> = (props) => {
  const { isMobile } = useDevice();

  return isMobile ? (
    <MobileTestimonialsSection {...props} />
  ) : (
    <DesktopTestimonialsSection {...props} />
  );
};

export default TestimonialsSection;