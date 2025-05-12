// src/components/pages/About/MobileAboutPage.tsx
"use client";

import React from 'react';
import {
  AboutHero,
  JourneyTimeline,
  ApproachSteps,
  TestimonialsAndCta
} from '@/components/features/About';
import CtaSection from '@/components/features/CtaSection/CtaSection';
import { aboutHero, aboutSections, approachSteps, aboutCta } from '@/content/data/about';
import { testimonials as homeTestimonials } from '@/content/data/home';
import { LinearDivider } from '@/components/common/Dividers';
import { motion } from 'framer-motion';

const MobileAboutPage: React.FC = () => {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="pt-16 pb-12 relative">
        {/* Simplified background element for mobile */}
        <div className="absolute top-0 right-0 text-[20vw] leading-none font-bold tracking-tighter text-[var(--color-text-primary)]/[0.02] pointer-events-none z-0 opacity-60">
          ABOUT
        </div>

        <div className="px-5">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
          >
            <AboutHero
              title={aboutHero.title}
              content={aboutHero.content}
              imagePath="/images/ashley_laughing_candid.jpeg"
            />
          </motion.div>
        </div>
      </section>

      {/* Simple divider */}
      <div className="mx-5">
        <LinearDivider
          fillTop="var(--color-text-primary)"
          fillBottom="var(--color-text-primary)"
          height={1}
          showTypography={true}
          text="MY STORY"
        />
      </div>

      {/* Journey Timeline Section */}
      <div className="pt-6 pb-8">
        {/* Subtle mobile section indicator */}
        <div className="absolute right-0 h-full w-4 bg-[var(--color-accent-sage-10)]"></div>

        <JourneyTimeline
          title="My Journey"
          subtitle="Every path has twists and turns. Here's how my story unfolded."
          sections={aboutSections}
        />
      </div>

      {/* Simple divider with accent color */}
      <div className="h-4 w-full bg-[var(--color-accent-sage-10)]"></div>

      {/* Approach Steps Section */}
      <ApproachSteps
        title="My Approach"
        subtitle="It all begins with an idea. Maybe you want to launch a business. Maybe you want to turn a hobby into something more."
        steps={approachSteps}
      />

      {/* Simple divider */}
      <div className="mx-5">
        <LinearDivider
          fillTop="var(--color-text-primary)"
          fillBottom="var(--color-text-primary)"
          height={1}
          showTypography={true}
          text="TESTIMONIALS"
        />
      </div>

      {/* Testimonials Section */}
      <div className="pt-6 pb-10">
        <TestimonialsAndCta
          testimonials={homeTestimonials}
        />
      </div>

      {/* Mobile-friendly CTA */}
      <div className="bg-black text-white py-16 px-5">
        <CtaSection
          title={aboutCta.text}
          buttonText={aboutCta.buttonText}
          buttonLink={aboutCta.buttonLink}
          variant="minimal"
          alignment="center"
          showSignature={true}
          showLogo={false}
          showDecorations={false}
        />
      </div>

      {/* Footer marker for mobile */}
      <div className="bg-white py-6 text-center">
        <div className="uppercase tracking-[0.15em] text-xs text-[var(--color-text-tertiary)]">
          The Copy Social
        </div>
      </div>
    </div>
  );
};

export default MobileAboutPage;