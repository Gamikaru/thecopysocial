"use client";

import React from "react";
import { useDevice } from '@/context/DeviceContext';
import DesktopTestimonialCarousel from './DesktopTestimonialsCarousel';
import MobileTestimonialCarousel from './MobileTestimonialsCarousel';
import { TestimonialItem } from '@/content/types/types';

interface TestimonialCarouselProps {
  testimonials: TestimonialItem[];
  title?: string;
  subtitle?: string;
  autoPlay?: boolean;
  interval?: number;
}

const TestimonialCarousel: React.FC<TestimonialCarouselProps> = (props) => {
  const { isMobile } = useDevice();

  return isMobile ? <MobileTestimonialCarousel {...props} /> : <DesktopTestimonialCarousel {...props} />;
};

export default TestimonialCarousel;