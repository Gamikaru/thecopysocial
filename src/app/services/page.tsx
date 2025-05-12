// src/app/services/page.tsx
"use client";

import React from "react";
import { motion } from "framer-motion";
// Fix path - should be common/Dividers not sections/Dividers
import EditorialSectionBreak from "@/components/common/Dividers/EditorialSectionBreak";
// Fix paths for service components - they should be imported from features/Services not sections/ServicesPage
import ServicesHero from "@/components/features/Services/ServicesHero";
import ServicesPackages from "@/components/features/Services/ServicesPackages";
import ServicesProcess from "@/components/features/Services/ServicesProcess";
import ServicesFAQ from "@/components/features/Services/ServicesFAQ";
import ServicesCTA from "@/components/features/Services/ServicesCTA";
import TestimonialCarousel from "@/components/common/Testimonials/TestimonialsCarousel";
// Import from the correct path
import { testimonials as portfolioTestimonials } from "@/content/data/portfolio";

// Rest of your component remains the same

export default function ServicesPage() {
  return (
    <motion.div
      className="relative bg-[var(--color-bg-primary)]"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      {/* Editorial page marker */}
      <div className="fixed bottom-6 right-6 text-[var(--color-text-tertiary)] uppercase tracking-widest text-xs hidden md:block pointer-events-none">
        Services
      </div>

      {/* Hero Section with Editorial Design */}
      <section className="py-32 relative">
        {/* Editorial grid overlay */}
        <div className="absolute inset-0 grid grid-cols-12 pointer-events-none">
          {[...Array(12)].map((_, i) => (
            <div key={i} className="border-l border-[var(--color-text-primary)]/5 h-full" />
          ))}
        </div>

        {/* Oversized typography background element */}
        <div className="absolute -top-20 -left-20 text-[40vw] leading-none font-bold tracking-tighter text-[var(--color-accent-clay)]/[0.03] pointer-events-none z-0">
          COPY
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <ServicesHero />
        </div>
      </section>

      {/* Editorial Divider */}
      <EditorialSectionBreak
        sectionNumber="002"
        sectionTitle="Service Packages"
        alignment="center"
      />

      {/* Packages Section */}
      <ServicesPackages />

      {/* Editorial Divider */}
      <EditorialSectionBreak
        sectionNumber="003"
        sectionTitle="Process"
        alignment="left"
      />

      {/* Process Section */}
      <ServicesProcess />

      {/* Editorial Divider */}
      <EditorialSectionBreak
        sectionNumber="004"
        sectionTitle="Testimonials"
        alignment="center"
      />

      {/* Testimonials Section */}
      <TestimonialCarousel
        testimonials={portfolioTestimonials}
        title="What Clients Say About My Services"
        subtitle="Don't just take my word for it. Here's what clients have experienced working with me."
      />

      {/* Editorial Divider */}
      <EditorialSectionBreak
        sectionNumber="005"
        sectionTitle="FAQ"
        alignment="right"
      />

      {/* FAQ Section */}
      <ServicesFAQ />

      {/* CTA Section */}
      <ServicesCTA />

      {/* Editorial end mark */}
      <div className="h-px w-full bg-[var(--color-text-primary)]"></div>
    </motion.div>
  );
}
