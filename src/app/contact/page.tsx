// src/app/contact/page.tsx
"use client";

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import ContactForm from '@/components/core/ContactForm';
import { Heading, Text } from '@/components/core';
import { contactHero, contactInfo, faq } from '@/content/data/contact';
import Icon from '@/components/core/Icon';

export default function ContactPage() {
  const handleSubmit = async (formData: Record<string, string>) => {
    // This is where you would send the form data to your backend/API
    console.log('Form submitted:', formData);

    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));

    // Return successfully
    return;
  };

  return (
    <div className="pt-20 pb-0 bg-[var(--color-bg-primary)]">
      {/* Hero Section with Editorial Design */}
      <section className="py-32 relative">
        {/* Editorial grid overlay */}
        <div className="absolute inset-0 grid grid-cols-12 pointer-events-none">
          {[...Array(12)].map((_, i) => (
            <div key={i} className="border-l border-[var(--color-text-primary)]/5 h-full" />
          ))}
        </div>

        {/* Oversized typography background element */}
        <div className="absolute -top-20 -left-20 text-[30vw] leading-none font-bold tracking-tighter text-[var(--color-text-primary)]/[0.03] pointer-events-none z-0">
          HELLO
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
            {/* Text content with editorial typography */}
            <div className="md:col-span-6 md:col-start-2">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                {/* Editorial page indicator */}
                <div className="flex items-center mb-16">
                  <div className="h-px w-16 bg-[var(--color-text-primary)] mr-4"></div>
                  <span className="uppercase tracking-[0.3em] text-xs text-[var(--color-text-secondary)]">Let&apos;s Connect</span>
                </div>

                {/* Dramatically oversized headline */}
                <div className="overflow-hidden mb-12">
                  <motion.div
                    initial={{ y: 100 }}
                    animate={{ y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                  >
                    <Heading
                      level={1}
                      className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight leading-none mb-6"
                    >
                      {contactHero.title}
                    </Heading>

                    <div className="h-px w-32 bg-[var(--color-accent-mauve)] mb-12"></div>
                  </motion.div>
                </div>

                <Text
                  size="lg"
                  className="font-light leading-relaxed mb-0 max-w-xl"
                >
                  {contactHero.description}
                </Text>
              </motion.div>
            </div>

            {/* Editorial imagery */}
            <motion.div
              className="md:col-span-4 md:col-start-8 relative mt-12 md:mt-0"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <div className="relative">
                {/* Sharp geometric frame */}
                <div className="absolute inset-0 border border-[var(--color-text-primary)] transform translate-x-6 translate-y-6 z-0"></div>

                {/* Main image */}
                <div className="relative aspect-[3/4] overflow-hidden">
                  <Image
                    src="/images/ashley_on_her_laptop.jpeg"
                    alt="Ashley working on a laptop"
                    fill
                    className="object-cover grayscale hover:grayscale-0 transition-all duration-700"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />

                  {/* Editorial caption overlay */}
                  <div className="absolute bottom-0 left-0 right-0 bg-[var(--color-bg-primary)]/90 py-3 px-4 flex justify-between items-center">
                    <span className="uppercase tracking-wider text-xs">Ashley Rudolph</span>
                    <span className="h-px w-12 bg-[var(--color-text-primary)]"></span>
                  </div>
                </div>

                {/* Vertical text */}
                <div className="absolute -right-8 top-0 bottom-0 hidden md:flex items-center">
                  <div className="transform -rotate-90 origin-center whitespace-nowrap uppercase tracking-[0.5em] text-xs text-[var(--color-text-tertiary)]">
                    Founder & Writer
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Main Contact Section with Editorial Design */}
      <section className="py-32 bg-[var(--color-bg-secondary)] relative">
        {/* Editorial background typography element */}
        <div className="absolute bottom-0 right-0 text-[25vw] leading-none font-bold tracking-tighter text-[var(--color-text-primary)]/[0.02] pointer-events-none z-0">
          CONTACT
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
            {/* Contact Form with Editorial Styling */}
            <div className="md:col-span-7 md:col-start-1">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <ContactForm
                  onSubmit={handleSubmit}
                  title="Let's work together"
                  subtitle="Fill out the form below with some details about your project, and I'll get back to you with ideas on how we can collaborate."
                  className="bg-[var(--color-bg-primary)] border border-[var(--color-text-primary)]/10"
                />
              </motion.div>
            </div>

            {/* Contact Info with Editorial Design */}
            <div className="md:col-span-4 md:col-start-9">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="mb-16"
              >
                <div className="bg-[var(--color-bg-primary)] border border-[var(--color-text-primary)]/10 p-8 relative">
                  {/* Editorial geometric accent */}
                  <div className="absolute top-0 right-0 w-12 h-12 bg-[var(--color-accent-mauve)]/10"></div>

                  <div className="flex items-center mb-8">
                    <div className="h-px w-12 bg-[var(--color-text-primary)] mr-4"></div>
                    <span className="uppercase tracking-[0.3em] text-xs text-[var(--color-text-secondary)]">Details</span>
                  </div>

                  <Heading level={3} className="text-2xl md:text-3xl font-bold tracking-tight mb-8">
                    Contact Information
                  </Heading>

                  <div className="space-y-8">
                    <div className="flex items-start">
                      <div className="flex-shrink-0 mt-1 w-8">
                        <div className="w-6 h-6 border border-[var(--color-accent-mauve)] flex items-center justify-center">
                          <Icon name="fi:FiMail" className="text-[var(--color-accent-mauve)]" size={14} />
                        </div>
                      </div>
                      <div className="ml-4">
                        <Text weight="medium" className="uppercase tracking-wider text-xs mb-2">Email</Text>
                        <a
                          href={`mailto:${contactInfo.email}`}
                          className="text-[var(--color-text-primary)] hover:text-[var(--color-accent-mauve)] transition-colors duration-300 mb-0"
                        >
                          {contactInfo.email}
                        </a>
                      </div>
                    </div>

                    <div className="flex items-start">
                      <div className="flex-shrink-0 mt-1 w-8">
                        <div className="w-6 h-6 border border-[var(--color-accent-mauve)] flex items-center justify-center">
                          <Icon name="fi:FiClock" className="text-[var(--color-accent-mauve)]" size={14} />
                        </div>
                      </div>
                      <div className="ml-4">
                        <Text weight="medium" className="uppercase tracking-wider text-xs mb-2">Response Time</Text>
                        <Text color="secondary" className="mb-0 font-light">
                          {contactInfo.response}
                        </Text>
                      </div>
                    </div>

                    <div className="flex items-start">
                      <div className="flex-shrink-0 mt-1 w-8">
                        <div className="w-6 h-6 border border-[var(--color-accent-mauve)] flex items-center justify-center">
                          <Icon name="fi:FiCalendar" className="text-[var(--color-accent-mauve)]" size={14} />
                        </div>
                      </div>
                      <div className="ml-4">
                        <Text weight="medium" className="uppercase tracking-wider text-xs mb-2">Availability</Text>
                        <Text color="secondary" className="mb-0 font-light">
                          {contactInfo.schedule}
                        </Text>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* FAQ Section with Editorial Design */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                <div className="bg-[var(--color-bg-primary)] border border-[var(--color-text-primary)]/10 p-8 relative">
                  {/* Editorial geometric accent */}
                  <div className="absolute bottom-0 left-0 w-16 h-16 bg-[var(--color-accent-clay)]/10"></div>

                  <div className="flex items-center mb-8">
                    <div className="h-px w-12 bg-[var(--color-text-primary)] mr-4"></div>
                    <span className="uppercase tracking-[0.3em] text-xs text-[var(--color-text-secondary)]">Questions</span>
                  </div>

                  <Heading level={3} className="text-2xl md:text-3xl font-bold tracking-tight mb-8">
                    Frequently Asked
                  </Heading>

                  <div className="space-y-8">
                    {faq.map((item: { question: string; answer: string }, index: number) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.4, delay: 0.4 + (index * 0.1) }}
                      >
                        <div className="flex items-start mb-2">
                          <div className="flex-shrink-0 mt-1 opacity-50 mr-2">
                            <div className="w-5 h-5 flex items-center justify-center">
                              <span className="text-sm">{(index + 1).toString().padStart(2, '0')}</span>
                            </div>
                          </div>
                          <Text weight="semibold">{item.question}</Text>
                        </div>
                        <Text color="secondary" className="mb-0 font-light pl-7">
                          {item.answer}
                        </Text>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Editorial page marker */}
      <div className="flex justify-center py-12 bg-[var(--color-bg-primary)]">
        <motion.div
          className="flex items-center text-[var(--color-text-tertiary)]"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <div className="h-px w-12 bg-[var(--color-text-tertiary)] mr-4"></div>
          <span className="uppercase tracking-[0.2em] text-xs">The Copy Social • Contact</span>
        </motion.div>
      </div>
    </div>
  );
}