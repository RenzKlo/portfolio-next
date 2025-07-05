"use client";

import { useState } from 'react';

export const useCopyToClipboard = () => {
  const [copied, setCopied] = useState(false);

  const copyToClipboard = async (text: string) => {
    try {
      // Modern approach: Use Clipboard API (supported in all modern browsers)
      if (navigator.clipboard && window.isSecureContext) {
        await navigator.clipboard.writeText(text);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
        return true;
      } else {
        // Fallback for non-secure contexts or older browsers
        return fallbackCopyToClipboard(text);
      }
    } catch (error) {
      console.warn('Clipboard API failed, trying fallback:', error);
      return fallbackCopyToClipboard(text);
    }
  };

  const fallbackCopyToClipboard = (text: string): boolean => {
    try {
      // Create a temporary textarea element
      const textArea = document.createElement('textarea');
      textArea.value = text;
      
      // Make it invisible but functional
      textArea.style.position = 'fixed';
      textArea.style.left = '-999999px';
      textArea.style.top = '-999999px';
      textArea.style.opacity = '0';
      textArea.setAttribute('readonly', '');
      textArea.setAttribute('aria-hidden', 'true');
      textArea.setAttribute('tabindex', '-1');
      
      document.body.appendChild(textArea);
      
      // Select the text
      textArea.focus();
      textArea.select();
      textArea.setSelectionRange(0, text.length);
      
      // Try the deprecated but still widely supported execCommand
      // This is the last resort fallback
      const successful = document.execCommand('copy');
      
      // Clean up immediately
      document.body.removeChild(textArea);
      
      if (successful) {
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
        return true;
      } else {
        // If even execCommand fails, show user a prompt
        showCopyPrompt(text);
        return false;
      }
    } catch (error) {
      console.error('All copy methods failed:', error);
      showCopyPrompt(text);
      return false;
    }
  };

  const showCopyPrompt = (text: string) => {
    // Last resort: show the text in a prompt for manual copying
    if (window.prompt) {
      window.prompt('Copy this text manually (Ctrl+C/Cmd+C):', text);
    } else {
      // If prompt is blocked, log to console as final fallback
      console.log('Copy this text manually:', text);
      alert('Copy functionality is not available. The text has been logged to the console.');
    }
  };

  return { copied, copyToClipboard };
};
