"use client";

import React from "react";
import { motion } from "framer-motion";
import ServiceCard from "@/common/Cards/ServiceCard";
import { Heading, Text } from "@/core/Typography";
import {
  websiteCopywritingPackage,
  launchCopywritingPackage,
  addOns,
} from "../../../../content/data/services";
import {
  staggerContainerVariants,
  staggerItemVariants,
} from "@/common/Animations/variants";
import type { ServiceFeature, ServiceAddOn } from "../../../../content/types/types";

interface ServicesSectionProps {
  className?: string;
  title?: string;
  subtitle?: string;
}

const ServicesSection: React.FC<ServicesSectionProps> = ({
  className = "",
  title = "Services I Offer",
  subtitle = "Professional copywriting services tailored to elevate your brand voice and connect with your audience.",
}) => {
  // Transform the website package features from content into the format needed for ServiceCard
  const websiteFeatures = websiteCopywritingPackage.features.map((feature: ServiceFeature) => ({
    text: feature.text,
    included: true,
  }));

  // Transform the launch package features from content into the format needed for ServiceCard
  const launchFeatures = launchCopywritingPackage.features.map((feature: ServiceFeature) => ({
    text: feature.text,
    included: true,
  }));

  return (
    <section className={`py-20 ${className}`}>
      <div className="container mx-auto px-5 md:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <Heading level={2} align="center" className="mb-4">
            {title}
          </Heading>

          <Text
            size="lg"
            color="secondary"
            align="center"
            className="max-w-3xl mx-auto"
          >
            {subtitle}
          </Text>
        </div>

        {/* Main Services */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16"
          variants={staggerContainerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {/* Website Copywriting Package */}
          <motion.div variants={staggerItemVariants} custom={0}>
            <ServiceCard
              title="Website Copywriting"
              description={websiteCopywritingPackage.description}
              features={websiteFeatures}
              price={websiteCopywritingPackage.startingPrice}
              ctaText="Learn More"
              ctaLink="/services#website"
              iconName="fi:FiGlobe"
              isFeatured={true}
            />
          </motion.div>

          {/* Launch Copywriting Package */}
          <motion.div variants={staggerItemVariants} custom={1}>
            <ServiceCard
              title="Launch Copywriting"
              description={launchCopywritingPackage.description}
              features={launchFeatures}
              price={launchCopywritingPackage.startingPrice}
              ctaText="Learn More"
              ctaLink="/services#launch"
              iconName="fi:FiSend"
            />
          </motion.div>
        </motion.div>

        {/* Add-on Services */}
        <div className="mb-16">
          <Heading level={3} align="center" className="mb-8">
            Additional Services
          </Heading>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-6"
            variants={staggerContainerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            {addOns.map((addon: ServiceAddOn, index: number) => (
              <motion.div
                key={addon.title}
                variants={staggerItemVariants}
                custom={index}
                className="bg-bg-secondary p-6 rounded-lg border border-bg-tertiary"
              >
                <Heading level={4} className="mb-2">
                  {addon.title}
                </Heading>

                <Text color="secondary" className="mb-4">
                  {addon.description}
                </Text>

                <Text weight="semibold" className="mb-0">
                  {addon.price}
                </Text>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <Text size="lg" className="mb-6 max-w-2xl mx-auto">
            Not sure which package is right for you? Let&apos;s discuss your specific
            needs and create a custom solution tailored to your business.
          </Text>

          <a
            href="/contact"
            className="inline-flex items-center px-8 py-3 bg-brand-primary text-text-on-accent rounded-md transition-colors duration-300 hover:bg-brand-primary/90"
          >
            Schedule a Consultation
            <svg
              className="ml-2 w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
