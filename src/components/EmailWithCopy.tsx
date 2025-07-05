"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { useCopyToClipboard } from '@/hooks/useCopyToClipboard';

interface EmailWithCopyProps {
  email: string;
  className?: string;
  showLabel?: boolean;
  variant?: 'default' | 'footer' | 'contact';
}

const EmailWithCopy: React.FC<EmailWithCopyProps> = ({ 
  email, 
  className = '', 
  showLabel = false,
  variant = 'default'
}) => {
  const { copied, copyToClipboard } = useCopyToClipboard();

  const handleCopy = async (e: React.MouseEvent) => {
    e.preventDefault();
    await copyToClipboard(email);
  };

  const getVariantStyles = () => {
    switch (variant) {
      case 'footer':
        return {
          container: 'inline-flex items-center gap-2',
          email: 'hover:text-white transition-colors',
          button: 'text-gray-400 hover:text-white transition-colors p-1 rounded-md hover:bg-gray-700',
          icon: 'w-4 h-4'
        };
      case 'contact':
        return {
          container: 'inline-flex items-center gap-2',
          email: 'text-blue-600 dark:text-blue-400 hover:underline',
          button: 'text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 p-1 rounded-md hover:bg-blue-50 dark:hover:bg-blue-900/20 transition-colors',
          icon: 'w-4 h-4'
        };
      default:
        return {
          container: 'inline-flex items-center gap-2',
          email: 'text-blue-600 dark:text-blue-400 hover:underline',
          button: 'text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 p-1 rounded-md hover:bg-blue-50 dark:hover:bg-blue-900/20 transition-colors',
          icon: 'w-4 h-4'
        };
    }
  };

  const styles = getVariantStyles();

  return (
    <span className={`${styles.container} ${className}`}>
      {showLabel && (
        <span className="font-medium text-gray-900 dark:text-white w-20">Email:</span>
      )}
      <motion.a 
        href={`mailto:${email}`}
        className={styles.email}
        whileHover={{ scale: 1.05 }}
        transition={{ duration: 0.2 }}
      >
        {email}
      </motion.a>
      <motion.button
        onClick={handleCopy}
        className={styles.button}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        title={copied ? 'Copied!' : 'Copy to clipboard'}
        aria-label={copied ? 'Email copied to clipboard' : 'Copy email to clipboard'}
      >
        {copied ? (
          <motion.svg
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            className={`${styles.icon} text-green-500`}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </motion.svg>
        ) : (
          <svg
            className={styles.icon}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
          </svg>
        )}
      </motion.button>
    </span>
  );
};

export default EmailWithCopy;
