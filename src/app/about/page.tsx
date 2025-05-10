// src/app/about/page.tsx
"use client";

import React from 'react';
import {
  AboutHero,
  JourneyTimeline,
  ApproachSteps,
  TestimonialsAndCta
} from '@/components/features/About';
import { aboutHero, aboutSections, approachSteps, aboutCta } from '@/content/data/about';
import { testimonials as homeTestimonials } from '@/content/data/home';
import { EditorialDivider, AngularDivider, GeometricDivider, LinearDivider } from '@/components/common/Dividers';
import { motion } from 'framer-motion';

export default function AboutPage() {
  return (
    <motion.div
      className="relative bg-white"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      {/* Editorial typographic background element */}
      <div className="absolute top-0 left-0 w-full h-screen pointer-events-none overflow-hidden">
        <div className="absolute top-[10%] right-[-10%] text-[40vw] leading-none font-bold tracking-tighter text-black opacity-[0.02]">
          ABOUT
        </div>
      </div>

      {/* Hero Section - Clean white background */}
      <div className="bg-white">
        <AboutHero
          title={aboutHero.title}
          content={aboutHero.content}
          imagePath="/images/ashley_laughing_candid.jpeg"
        />
      </div>

      {/* Editorial Divider - Black to White transition */}
      <EditorialDivider
        fillTop="white"
        fillBottom="white"
        height={120}
        contrast={true}
      />

      {/* Journey Timeline Section - White Background */}
      <div className="bg-white relative">
        {/* Subtle grid pattern */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="h-full w-full opacity-[0.03]"
            style={{
              backgroundImage: "linear-gradient(to right, black 1px, transparent 1px), linear-gradient(to bottom, black 1px, transparent 1px)",
              backgroundSize: "60px 60px"
            }}>
          </div>
        </div>

        <JourneyTimeline
          title="My Journey"
          subtitle="Every path has twists and turns. Here's how my story unfolded."
          sections={aboutSections}
        />
      </div>

      {/* Angular Divider - White to Light Gray transition */}
      <AngularDivider
        fillTop="white"
        fillBottom="#f8f8f8"
        height={100}
        angle={2}
        direction="right"
      />

      {/* Approach Steps Section - Light Gray Background */}
      <div className="bg-[#f8f8f8]">
        <ApproachSteps
          title="My Approach"
          subtitle="It all begins with an idea. Maybe you want to launch a business. Maybe you want to turn a hobby into something more. Or maybe you have a creative project to share with the world."
          steps={approachSteps}
        />
      </div>

      {/* Geometric Divider - Light Gray to White transition */}
      <GeometricDivider
        fillTop="#f8f8f8"
        fillBottom="white"
        height={120}
        pattern="stepped"
      />

      {/* Testimonials Section - White Background */}
      <div className="bg-white">
        <TestimonialsAndCta
          testimonials={homeTestimonials}
          ctaText={aboutCta.text}
          ctaButtonText={aboutCta.buttonText}
          ctaButtonLink={aboutCta.buttonLink}
        />
      </div>

      {/* Linear Divider at the bottom - Optional editorial touch */}
      <LinearDivider
        fillTop="black"
        fillBottom="black"
        height={1}
      />
    </motion.div>
  );
}