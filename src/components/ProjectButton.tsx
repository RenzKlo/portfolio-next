import React from 'react';
import { ProjectButton as ProjectButtonType } from '@/types';

interface ProjectButtonProps {
  button: ProjectButtonType;
  size?: 'sm' | 'md' | 'lg';
  variant?: 'card' | 'modal';
  onClick?: (e: React.MouseEvent) => void;
}

const ProjectButton: React.FC<ProjectButtonProps> = ({ 
  button, 
  size = 'md', 
  variant = 'card',
  onClick 
}) => {
  const getButtonStyles = (type: string) => {
    const baseStyles = 'inline-flex items-center font-medium transition-colors';
    
    switch (type) {
      case 'primary':
        return `${baseStyles} bg-blue-600 hover:bg-blue-700 text-white`;
      case 'secondary':
        return `${baseStyles} bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 text-gray-900 dark:text-gray-100`;
      case 'outline':
        return `${baseStyles} border border-gray-300 dark:border-gray-600 hover:bg-gray-50 dark:hover:bg-gray-800 text-gray-700 dark:text-gray-300`;
      default:
        return `${baseStyles} bg-blue-600 hover:bg-blue-700 text-white`;
    }
  };

  const getSizeStyles = () => {
    if (variant === 'modal') {
      return 'px-6 py-3 rounded-lg';
    }
    
    switch (size) {
      case 'sm':
        return 'px-2 py-1 rounded text-xs';
      case 'md':
        return 'px-3 py-1.5 rounded-md text-xs';
      case 'lg':
        return 'px-4 py-2 rounded-lg text-sm';
      default:
        return 'px-3 py-1.5 rounded-md text-xs';
    }
  };

  const getIconSize = () => {
    if (variant === 'modal') return 'w-5 h-5';
    
    switch (size) {
      case 'sm':
        return 'w-3 h-3';
      case 'md':
        return 'w-4 h-4';
      case 'lg':
        return 'w-5 h-5';
      default:
        return 'w-4 h-4';
    }
  };

  const getIconSvg = (icon?: string) => {
    const iconClass = getIconSize();
    
    switch (icon) {
      case 'github':
        return (
          <svg className={iconClass} fill="currentColor" viewBox="0 0 24 24">
            <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
          </svg>
        );
      case 'external':
      case 'demo':
        return (
          <svg className={iconClass} fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
          </svg>
        );
      case 'play':
        return (
          <svg className={iconClass} fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h1.586a1 1 0 01.707.293l2.414 2.414a1 1 0 00.707.293H15" />
          </svg>
        );
      case 'download':
        return (
          <svg className={iconClass} fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
          </svg>
        );
      default:
        return null;
    }
  };

  const handleClick = (e: React.MouseEvent) => {
    if (onClick) {
      onClick(e);
    }
  };

  const content = (
    <>
      {button.icon && getIconSvg(button.icon)}
      <span className={button.icon ? (variant === 'modal' ? 'ml-2' : 'ml-1.5') : ''}>
        {button.label}
      </span>
    </>
  );

  return (
    <a
      href={button.url}
      target="_blank"
      rel="noopener noreferrer"
      onClick={handleClick}
      className={`${getButtonStyles(button.type)} ${getSizeStyles()}`}
    >
      {content}
    </a>
  );
};

export default ProjectButton;
