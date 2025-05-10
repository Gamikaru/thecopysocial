// src/components/ui/NewsletterSignup.tsx
"use client";

import React, { useState } from 'react';
// Correct import for newsletterContent
import { newsletterContent } from '@/content/config/newsletter';
// Correct import for Icon
import Icon from '@/components/core/Icon';
import { Button } from '@/components/common/Buttons';

interface NewsletterSignupProps {
  className?: string;
  variant?: 'default' | 'compact';
}

const NewsletterSignup: React.FC<NewsletterSignupProps> = ({
  className = '',
  variant = 'default'
}) => {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || status === 'submitting') return;

    setStatus('submitting');

    // Simulated API call - replace with your actual newsletter signup logic
    try {
      // await newsletterSignup(email); // Remove this line if you don't have a real API
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
    <div className={`${className} bg-bg-secondary p-6 rounded-lg`}>
      <div className="flex items-center gap-2 mb-2">
        <Icon name="fi:FiMail" className="text-brand-primary" />
        <h3 className="text-xl font-medium">
          {newsletterContent.title}
        </h3>
      </div>

      <p className="text-text-secondary mb-4">
        {newsletterContent.description}
      </p>

      <form onSubmit={handleSubmit} className={`flex ${variant === 'compact' ? 'flex-row' : 'flex-col'} ${variant === 'compact' ? '' : 'space-y-3'}`}>
        <div className={`${variant === 'compact' ? 'flex-1 mr-3' : 'w-full'}`}>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder={newsletterContent.placeholder}
            className="w-full px-4 py-3 border border-bg-tertiary rounded focus:outline-none focus:ring-1 focus:ring-brand-primary"
            disabled={status === 'submitting' || status === 'success'}
            required
          />
        </div>

        <Button
          type="submit"
          variant="primary"
          size="md"
          className={`${variant === 'compact' ? 'w-auto' : 'w-full'} px-4 py-3 bg-brand-primary text-text-on-accent rounded hover:opacity-90 transition-opacity duration-300 flex items-center justify-center`}
          disabled={status === 'submitting' || status === 'success'}
        >
          {status === 'submitting' ? (
            <>
              <Icon name="fi:FiLoader" className="animate-spin mr-2" size={16} />
              Subscribing...
            </>
          ) : (
            <>
              {newsletterContent.buttonText}
              <Icon name="fi:FiArrowRight" className="ml-2" size={16} />
            </>
          )}
        </Button>
      </form>

      {status === 'success' && (
        <p className="mt-3 text-ui-success text-sm flex items-center">
          <Icon name="fi:FiCheck" className="mr-2" size={16} />
          Thanks for subscribing! Check your inbox for a confirmation email.
        </p>
      )}

      {status === 'error' && (
        <p className="mt-3 text-ui-error text-sm flex items-center">
          <Icon name="fi:FiAlertCircle" className="mr-2" size={16} />
          Oops! Something went wrong. Please try again.
        </p>
      )}
    </div>
  );
};

export default NewsletterSignup;