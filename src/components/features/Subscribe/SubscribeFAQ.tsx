// src/components/features/Subscribe/SubscribeFAQ.tsx

"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Icon from "@/components/core/Icon";

interface FAQ {
  question: string;
  answer: string;
}

interface SubscribeFAQProps {
  faqs: FAQ[];
}

const SubscribeFAQ: React.FC<SubscribeFAQProps> = ({ faqs }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-24 bg-[var(--color-bg-secondary)] relative">
      {/* Editorial grid overlay */}
      <div className="absolute inset-0 grid grid-cols-12 pointer-events-none">
        {[...Array(12)].map((_, i) => (
          <div
            key={i}
            className="border-l border-[var(--color-text-primary)]/5 h-full"
          />
        ))}
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-12 gap-8">
          <div className="col-span-12 md:col-span-8 md:col-start-3">
            <motion.div
              className="mb-16 text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
                Frequently Asked Questions
              </h2>
            </motion.div>

            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <motion.div
                  key={index}
                  className="border border-[var(--color-text-primary)]/10 bg-[var(--color-bg-primary)]"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <button
                    className="w-full px-6 py-4 flex items-center justify-between text-left"
                    onClick={() => toggleFAQ(index)}
                    aria-expanded={openIndex === index}
                  >
                    <span className="text-lg font-medium">{faq.question}</span>
                    <span className="flex-shrink-0 ml-4">
                      <Icon
                        name={openIndex === index ? "fi:FiMinus" : "fi:FiPlus"}
                        size={20}
                      />
                    </span>
                  </button>

                  <AnimatePresence>
                    {openIndex === index && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden"
                      >
                        <div className="px-6 pb-4 text-[var(--color-text-secondary)] font-light">
                          <div className="h-px w-full bg-[var(--color-text-primary)]/10 mb-4"></div>
                          <p>{faq.answer}</p>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SubscribeFAQ;
