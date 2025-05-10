// src/components/ui/ServiceCard.tsx
"use client";

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import Icon, { IconName } from '../../core/Icon';
import { Heading, Text } from '../../core/Typography';

interface ServiceFeature {
  text: string;
  included?: boolean;
}

interface ServiceCardProps {
  title: string;
  description: string;
  features: ServiceFeature[];
  price?: string;
  pricePeriod?: string;
  ctaText?: string;
  ctaLink?: string;
  iconName?: IconName;
  isFeatured?: boolean;
  className?: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({
  title,
  description,
  features,
  price,
  pricePeriod,
  ctaText = "Learn More",
  ctaLink = "/contact",
  iconName,
  isFeatured = false,
  className = ''
}) => {
  return (
    <motion.div
      whileHover={{
        y: -5,
        boxShadow: '0 10px 30px -5px rgba(0, 0, 0, 0.1)'
      }}
      transition={{ duration: 0.3 }}
      className={`
        relative bg-bg-secondary rounded-lg overflow-hidden
        ${isFeatured ? 'border-2 border-brand-accent' : 'border border-bg-tertiary'}
        ${className}
      `}
    >
      {/* Featured Label */}
      {isFeatured && (
        <div className="absolute top-0 right-0">
          <div className="bg-brand-accent text-text-on-accent text-xs font-medium px-3 py-1 transform translate-x-8 rotate-45">
            Popular
          </div>
        </div>
      )}

      <div className="p-8">
        {/* Header */}
        <div className="mb-6">
          <div className="flex items-start justify-between">
            <div>
              {iconName && (
                <div className="mb-4 text-brand-accent">
                  <Icon name={iconName} size={32} />
                </div>
              )}

              <Heading level={3} className="mb-2">
                {title}
              </Heading>

              <Text color="secondary" className="mb-0">
                {description}
              </Text>
            </div>

            {price && (
              <div className="text-right">
                <Text weight="bold" size="xl" className="mb-0">
                  {price}
                </Text>
                {pricePeriod && (
                  <Text size="sm" color="tertiary" className="mb-0">
                    {pricePeriod}
                  </Text>
                )}
              </div>
            )}
          </div>
        </div>

        {/* Features */}
        <div className="mb-8">
          <ul className="space-y-3">
            {features.map((feature, index) => (
              <li
                key={index}
                className={`flex items-start ${
                  feature.included === false ? 'text-text-tertiary' : ''
                }`}
              >
                <span className="flex-shrink-0 mr-2 mt-1">
                  {feature.included === false ? (
                    <Icon name="fi:FiMinus" size={16} className="text-text-tertiary" />
                  ) : (
                    <Icon name="fi:FiCheck" size={16} className="text-ui-success" />
                  )}
                </span>
                <Text
                  as="span"
                  color={feature.included === false ? 'tertiary' : 'secondary'}
                  className="mb-0"
                >
                  {feature.text}
                </Text>
              </li>
            ))}
          </ul>
        </div>

        {/* Call to Action */}
        <Link
          href={ctaLink}
          className={`
            inline-flex items-center justify-center w-full px-6 py-3 rounded-md transition-colors duration-300
            ${isFeatured
              ? 'bg-brand-primary text-text-on-accent hover:bg-brand-primary/90'
              : 'border-2 border-brand-primary text-brand-primary hover:bg-brand-primary hover:text-text-on-accent'
            }
          `}
        >
          {ctaText}
          <Icon name="fi:FiArrowRight" size={16} className="ml-2" />
        </Link>
      </div>
    </motion.div>
  );
};

export default ServiceCard;