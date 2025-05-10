// src/components/features/Subscribe/SubscribeForm.tsx

"use client";

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Icon from '@/components/core/Icon';

interface SubscribeFormProps {
  formData: {
    buttonText: string;
    placeholder: string;
    successMessage: string;
    errorMessage: string;
  };
  privacyNote: string;
}

const SubscribeForm: React.FC<SubscribeFormProps> = ({ formData, privacyNote }) => {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || status === 'submitting') return;

    setStatus('submitting');

    // Simulated API call - replace with your actual newsletter signup logic
    try {
      // Simulate API delay
      await new Promise(resolve => setTimeout(resolve, 1000));
      setStatus('success');
      setEmail('');
    } catch (error) {
      setStatus('error');
      console.error('Newsletter signup error:', error);
    }
  };

  return (
    <section className="py-24 bg-[var(--color-bg-primary)] relative">
      {/* Editorial grid overlay */}
      <div className="absolute inset-0 grid grid-cols-12 pointer-events-none">
        {[...Array(12)].map((_, i) => (
          <div key={i} className="border-l border-[var(--color-text-primary)]/5 h-full" />
        ))}
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-12 gap-8">
          <div className="col-span-12 md:col-span-8 md:col-start-3">
            <motion.div
              className="bg-[var(--color-bg-secondary)] p-12 relative"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              {/* Editorial design elements */}
              <div className="absolute top-0 right-0 w-1/4 h-6 bg-[var(--color-accent-mauve)]/10"></div>
              <div className="absolute bottom-0 left-0 w-1/5 h-8 bg-[var(--color-accent-mauve)]/10"></div>

              <div className="text-center mb-8">
                <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
                  Sign up for my newsletter
                </h2>
                <p className="text-[var(--color-text-secondary)] text-lg max-w-2xl mx-auto">
                  Get weekly copywriting tips, insights, and strategies delivered straight to your inbox.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="max-w-md mx-auto">
                <div className="flex flex-col sm:flex-row gap-4">
                  <div className="flex-grow">
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder={formData.placeholder}
                      className="w-full px-4 py-3 bg-transparent border border-[var(--color-text-primary)]/20 focus:border-[var(--color-accent-mauve)] outline-none transition-colors"
                      disabled={status === 'submitting' || status === 'success'}
                      required
                    />
                  </div>
                  <button
                    type="submit"
                    className="px-6 py-3 bg-[var(--color-accent-navy)] text-white hover:bg-[var(--color-accent-navy-dark)] transition-colors flex items-center justify-center"
                    disabled={status === 'submitting' || status === 'success'}
                  >
                    {status === 'submitting' ? (
                      <>
                        <Icon name="fi:FiLoader" className="animate-spin mr-2" size={16} />
                        Subscribing...
                      </>
                    ) : (
                      formData.buttonText
                    )}
                  </button>
                </div>

                {status === 'success' && (
                  <motion.p
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    className="mt-4 text-[var(--color-ui-success)] flex items-center"
                  >
                    <Icon name="fi:FiCheck" className="mr-2" size={16} />
                    {formData.successMessage}
                  </motion.p>
                )}

                {status === 'error' && (
                  <motion.p
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    className="mt-4 text-[var(--color-ui-error)] flex items-center"
                  >
                    <Icon name="fi:FiAlertCircle" className="mr-2" size={16} />
                    {formData.errorMessage}
                  </motion.p>
                )}

                <p className="mt-4 text-xs text-[var(--color-text-tertiary)] text-center">
                  {privacyNote}
                </p>
              </form>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SubscribeForm;