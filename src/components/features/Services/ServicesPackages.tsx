"use client";

import React from "react";
import ServicesSection from "@/components/features/Home/Services/ServicesSection";

const ServicesPackages: React.FC = () => (
  <section className="relative py-20">
    {/* Editorial grid overlay */}
    <div className="absolute inset-0 grid grid-cols-12 pointer-events-none">
      {[...Array(12)].map((_, i) => (
        <div
          key={i}
          className="border-l border-[var(--color-text-primary)]/5 h-full"
        />
      ))}
    </div>
    {/* Background typography element */}
    <div className="absolute bottom-0 right-0 text-[25vw] leading-none font-bold tracking-tighter text-[var(--color-accent-navy)]/[0.03] pointer-events-none z-0">
      SERVICES
    </div>
    <ServicesSection />
  </section>
);

export default ServicesPackages;
