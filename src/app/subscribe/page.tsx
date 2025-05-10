// src/app/subscribe/page.tsx

"use client";

import React from "react";
import { motion } from "framer-motion";
import SubscribeHero from "@/components/features/Subscribe/SubscribeHero";
import SubscribeForm from "@/components/features/Subscribe/SubscribeFormComponent";
import SubscribeBenefits from "@/components/features/Subscribe/SubscribeBenefits";
import SubscribeTestimonials from "@/components/features/Subscribe/SubscribeTestimonials";
import SubscribeFAQ from "@/components/features/Subscribe/SubscribeFAQ";
import SubscribeCTA from "@/components/features/Subscribe/SubscribeCTA";
import EditorialSectionBreak from "@/components/common/Dividers/EditorialSectionBreak";
import {
  subscribeHero,
  subscribeForm,
  subscribeFeatures,
  subscribeTestimonials,
  subscribeFaq,
  privacyNote,
  subscribeCta,
} from "@/content/data/subscribe";

export default function SubscribePage() {
  return (
    <motion.div
      className="relative bg-[var(--color-bg-primary)]"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      {/* Editorial page marker */}
      <div className="fixed bottom-6 right-6 text-[var(--color-text-tertiary)] uppercase tracking-widest text-xs hidden md:block pointer-events-none">
        Newsletter
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
        <div className="absolute -top-20 -left-20 text-[40vw] leading-none font-bold tracking-tighter text-[var(--color-accent-mauve)]/[0.03] pointer-events-none z-0">
          JOIN
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <SubscribeHero
            title={subscribeHero.title}
            description={subscribeHero.description}
          />
        </div>
      </section>

      {/* Editorial Divider */}
      <EditorialSectionBreak
        sectionNumber="002"
        sectionTitle="Subscribe"
        alignment="center"
      />

      {/* Form Section */}
      <SubscribeForm formData={subscribeForm} privacyNote={privacyNote.text} />

      {/* Editorial Divider */}
      <EditorialSectionBreak
        sectionNumber="003"
        sectionTitle="Benefits"
        alignment="left"
      />

      {/* Benefits Section */}
      <SubscribeBenefits features={subscribeFeatures} />

      {/* Editorial Divider */}
      <EditorialSectionBreak
        sectionNumber="004"
        sectionTitle="Community"
        alignment="right"
      />

      {/* Testimonials Section */}
      <SubscribeTestimonials testimonials={subscribeTestimonials} />

      {/* Editorial Divider */}
      <EditorialSectionBreak
        sectionNumber="005"
        sectionTitle="FAQ"
        alignment="center"
      />

      {/* FAQ Section */}
      <SubscribeFAQ faqs={subscribeFaq} />

      {/* Final CTA Section */}
      <SubscribeCTA
        text={subscribeCta.text}
        buttonText={subscribeCta.buttonText}
        formId={subscribeCta.formId}
      />

      {/* Editorial end mark */}
      <div className="h-px w-full bg-[var(--color-text-primary)]"></div>
    </motion.div>
  );
}
