// src/components/features/About/TestimonialsAndCta.tsx
"use client";

import React from 'react';
import { useDevice } from '@/context/DeviceContext';
import DesktopTestimonialsAndCta from './DesktopTestimonialsAndCta';
import MobileTestimonialsAndCta from './MobileTestimonialsAndCta';
import { TestimonialItem } from '@/content/types/types';

interface TestimonialsAndCtaProps {
  testimonials: TestimonialItem[];
}

const TestimonialsAndCta: React.FC<TestimonialsAndCtaProps> = (props) => {
  const { isMobile } = useDevice();

  if (isMobile) {
    return <MobileTestimonialsAndCta {...props} />;
  }

  return <DesktopTestimonialsAndCta {...props} />;
};

export default TestimonialsAndCta;