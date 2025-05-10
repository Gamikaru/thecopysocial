// src/components/ui/ContactForm.tsx
"use client";

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Icon from './Icon';
import { Heading, Text } from './Typography';

// Form field types
type FieldType = 'text' | 'email' | 'select' | 'textarea';

interface FormField {
  id: string;
  label: string;
  type: FieldType;
  placeholder?: string;
  required?: boolean;
  options?: Array<{ value: string; label: string }>;
}

interface ContactFormProps {
  className?: string;
  onSubmit?: (formData: Record<string, string>) => Promise<void>;
  title?: string;
  subtitle?: string;
  submitButtonText?: string;
  fields?: FormField[];
  successMessage?: string;
  errorMessage?: string;
}

const ContactForm: React.FC<ContactFormProps> = ({
  className = '',
  onSubmit,
  title = 'Get in touch',
  subtitle = "Fill out the form below and I'll get back to you within 48 hours.",
  submitButtonText = 'Send Message',
  fields = defaultFields,
  successMessage = "Thank you for your message! I'll be in touch soon.",
  errorMessage = 'Something went wrong. Please try again or email me directly.'
}) => {
  // Form state
  const [formData, setFormData] = useState<Record<string, string>>({});
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [touched, setTouched] = useState<Record<string, boolean>>({});

  // Handle input changes
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));

    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  // Handle field blur
  const handleBlur = (e: React.FocusEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name } = e.target;
    setTouched(prev => ({ ...prev, [name]: true }));
    validateField(name, formData[name]);
  };

  // Validate a single field
  const validateField = (name: string, value: string) => {
    const field = fields.find(f => f.id === name);

    if (!field?.required) return true;

    if (!value || value.trim() === '') {
      setErrors(prev => ({ ...prev, [name]: `${field.label} is required` }));
      return false;
    }

    if (field.type === 'email' && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
      setErrors(prev => ({ ...prev, [name]: 'Please enter a valid email address' }));
      return false;
    }

    setErrors(prev => ({ ...prev, [name]: '' }));
    return true;
  };

  // Validate all fields
  const validateForm = () => {
    let isValid = true;
    const newErrors: Record<string, string> = {};
    const newTouched: Record<string, boolean> = {};

    fields.forEach(field => {
      newTouched[field.id] = true;

      if (field.required && (!formData[field.id] || formData[field.id].trim() === '')) {
        newErrors[field.id] = `${field.label} is required`;
        isValid = false;
      } else if (field.type === 'email' && formData[field.id] && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData[field.id])) {
        newErrors[field.id] = 'Please enter a valid email address';
        isValid = false;
      }
    });

    setErrors(newErrors);
    setTouched(newTouched);
    return isValid;
  };

  // Handle form submission
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) return;

    setStatus('submitting');

    try {
      // Use provided onSubmit handler or fallback to mock submission
      if (onSubmit) {
        await onSubmit(formData);
      } else {
        // Mock form submission delay
        await new Promise(resolve => setTimeout(resolve, 1500));
      }

      setStatus('success');
      // Reset form after successful submission
      setFormData({});
      setTouched({});
    } catch (error) {
      console.error('Form submission error:', error);
      setStatus('error');
    }
  };

  // Render different form states
  if (status === 'success') {
    return (
      <div className={`p-12 ${className}`}>
        <div className="text-center">
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5, type: "spring" }}
            className="inline-flex items-center justify-center w-20 h-20 border border-[var(--color-accent-mauve)] mb-8 relative"
          >
            <Icon name="fi:FiCheck" size={32} className="text-[var(--color-accent-mauve)]" />
            <div className="absolute top-0 right-0 bottom-0 left-0 border border-[var(--color-accent-mauve)] transform translate-x-2 translate-y-2 -z-10"></div>
          </motion.div>

          <Heading level={3} className="text-3xl font-bold tracking-tight mb-6 serif" serif>
            {successMessage}
          </Heading>

          <motion.button
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            type="button"
            onClick={() => setStatus('idle')}
            className="inline-flex items-center border border-[var(--color-text-primary)] px-8 py-4 uppercase tracking-widest text-xs font-light hover:bg-[var(--color-text-primary)] hover:text-[var(--color-bg-primary)] transition-colors duration-300 mt-4 group"
          >
            <span>Send another message</span>
            <motion.span
              className="ml-4 h-px bg-current group-hover:w-10 transition-all duration-300"
              initial={{ width: 24 }}
              animate={{ width: 36 }}
            />
          </motion.button>
        </div>
      </div>
    );
  }

  return (
    <div className={`p-12 ${className}`}>
      {title && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center mb-6">
            <div className="h-px w-12 bg-[var(--color-text-primary)] mr-4"></div>
            <span className="uppercase tracking-[0.3em] text-xs text-[var(--color-text-secondary)]">Contact Form</span>
          </div>

          <Heading level={2} className="text-3xl md:text-4xl font-bold tracking-tight mb-6">
            {title}
          </Heading>
        </motion.div>
      )}

      {subtitle && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mb-12"
        >
          <Text className="text-[var(--color-text-secondary)] font-light max-w-xl">
            {subtitle}
          </Text>
        </motion.div>
      )}

      {status === 'error' && (
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="mb-12 p-6 border-l-2 border-[var(--color-ui-error)]"
        >
          <div className="flex items-start">
            <Icon name="fi:FiAlertCircle" className="text-[var(--color-ui-error)] mr-3 mt-0.5 flex-shrink-0" size={20} />
            <Text className="mb-0">{errorMessage}</Text>
          </div>
        </motion.div>
      )}

      <form onSubmit={handleSubmit} className="space-y-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {fields.slice(0, 2).map((field, index) => {
            const hasError = !!errors[field.id] && touched[field.id];
            return (
              <motion.div
                key={field.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 + (index * 0.1) }}
                className="space-y-2"
              >
                <label
                  htmlFor={field.id}
                  className="block text-xs uppercase tracking-widest font-medium text-[var(--color-text-tertiary)]"
                >
                  {field.label}
                  {field.required && <span className="text-[var(--color-ui-error)] ml-1">*</span>}
                </label>

                <div className="relative">
                  <input
                    id={field.id}
                    name={field.id}
                    type={field.type}
                    value={formData[field.id] || ''}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    placeholder={field.placeholder}
                    required={field.required}
                    className={`
                      w-full px-4 py-3 bg-transparent border
                      ${hasError
                        ? 'border-[var(--color-ui-error)]'
                        : 'border-[var(--color-text-primary)]/20 focus:border-[var(--color-accent-mauve)]'
                      }
                      focus:outline-none transition-colors duration-200
                    `}
                  />

                  {hasError && (
                    <p className="mt-1 text-xs text-[var(--color-ui-error)] flex items-center">
                      <Icon name="fi:FiAlertCircle" size={12} className="mr-1" />
                      {errors[field.id]}
                    </p>
                  )}
                </div>
              </motion.div>
            );
          })}
        </div>

        {fields.slice(2).map((field, index) => {
          const hasError = !!errors[field.id] && touched[field.id];

          return (
            <motion.div
              key={field.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 + (index * 0.1) }}
              className="space-y-2"
            >
              <label
                htmlFor={field.id}
                className="block text-xs uppercase tracking-widest font-medium text-[var(--color-text-tertiary)]"
              >
                {field.label}
                {field.required && <span className="text-[var(--color-ui-error)] ml-1">*</span>}
              </label>

              <div className="relative">
                {field.type === 'textarea' ? (
                  <textarea
                    id={field.id}
                    name={field.id}
                    value={formData[field.id] || ''}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    placeholder={field.placeholder}
                    required={field.required}
                    className={`
                      w-full px-4 py-3 bg-transparent border
                      ${hasError
                        ? 'border-[var(--color-ui-error)]'
                        : 'border-[var(--color-text-primary)]/20 focus:border-[var(--color-accent-mauve)]'
                      }
                      focus:outline-none transition-colors duration-200
                      min-h-[180px]
                    `}
                  />
                ) : field.type === 'select' ? (
                  <div className="relative">
                    <select
                      id={field.id}
                      name={field.id}
                      value={formData[field.id] || ''}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      required={field.required}
                      className={`
                        w-full px-4 py-3 bg-transparent border appearance-none
                        ${hasError
                          ? 'border-[var(--color-ui-error)]'
                          : 'border-[var(--color-text-primary)]/20 focus:border-[var(--color-accent-mauve)]'
                        }
                        focus:outline-none transition-colors duration-200
                      `}
                    >
                      <option value="">Select {field.label.toLowerCase()}</option>
                      {field.options?.map(option => (
                        <option key={option.value} value={option.value}>
                          {option.label}
                        </option>
                      ))}
                    </select>
                    <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                      <Icon name="fi:FiChevronDown" className="text-[var(--color-text-tertiary)]" size={16} />
                    </div>
                  </div>
                ) : (
                  <input
                    id={field.id}
                    name={field.id}
                    type={field.type}
                    value={formData[field.id] || ''}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    placeholder={field.placeholder}
                    required={field.required}
                    className={`
                      w-full px-4 py-3 bg-transparent border
                      ${hasError
                        ? 'border-[var(--color-ui-error)]'
                        : 'border-[var(--color-text-primary)]/20 focus:border-[var(--color-accent-mauve)]'
                      }
                      focus:outline-none transition-colors duration-200
                    `}
                  />
                )}

                {hasError && (
                  <p className="mt-1 text-xs text-[var(--color-ui-error)] flex items-center">
                    <Icon name="fi:FiAlertCircle" size={12} className="mr-1" />
                    {errors[field.id]}
                  </p>
                )}
              </div>
            </motion.div>
          );
        })}

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="pt-4"
        >
          <button
            type="submit"
            disabled={status === 'submitting'}
            className="
              inline-flex items-center border border-[var(--color-text-primary)] px-8 py-4
              uppercase tracking-widest text-xs font-light
              hover:bg-[var(--color-text-primary)] hover:text-[var(--color-bg-primary)]
              transition-colors duration-300 group
              disabled:opacity-70 disabled:cursor-not-allowed
            "
          >
            {status === 'submitting' ? (
              <div className="flex items-center">
                <Icon name="fi:FiLoader" className="animate-spin mr-3" size={16} />
                <span>Sending...</span>
              </div>
            ) : (
              <>
                <span>{submitButtonText}</span>
                <motion.span
                  className="ml-4 h-px bg-current group-hover:w-10 transition-all duration-300"
                  initial={{ width: 24 }}
                  animate={{ width: 36 }}
                />
              </>
            )}
          </button>
        </motion.div>
      </form>
    </div>
  );
};

// Default form fields
const defaultFields: FormField[] = [
  {
    id: 'name',
    label: 'Name',
    type: 'text',
    placeholder: 'Your name',
    required: true
  },
  {
    id: 'email',
    label: 'Email',
    type: 'email',
    placeholder: 'Your email address',
    required: true
  },
  {
    id: 'projectType',
    label: 'Project Type',
    type: 'select',
    required: true,
    options: [
      { value: 'website', label: 'Website Copywriting' },
      { value: 'email', label: 'Email Sequence' },
      { value: 'brand', label: 'Brand Messaging' },
      { value: 'content', label: 'Content Strategy' },
      { value: 'other', label: 'Other (please specify)' }
    ]
  },
  {
    id: 'message',
    label: 'Message',
    type: 'textarea',
    placeholder: 'Tell me about your project and how I can help...',
    required: true
  }
];

export default ContactForm;