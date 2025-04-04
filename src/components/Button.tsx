"use client";

import React from 'react';
import Link from 'next/link';

interface ButtonProps {
  children: React.ReactNode;
  href?: string;
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  onClick?: () => void;
}

const Button = ({ 
  children, 
  href, 
  variant = 'primary', 
  size = 'md', 
  className = '',
  onClick
}: ButtonProps) => {
  // Set base classes
  const baseClasses = 'font-medium transition-all duration-300 inline-flex items-center justify-center';
  
  // Set size classes
  const sizeClasses = {
    sm: 'px-4 py-2 text-sm rounded-lg',
    md: 'px-6 py-3 rounded-lg',
    lg: 'px-8 py-4 text-lg rounded-lg'
  }[size];
  
  // Set variant classes
  const variantClasses = {
    primary: 'bg-primary text-foreground hover:bg-primary-hover',
    secondary: 'bg-secondary text-foreground hover:bg-primary/80',
    outline: 'border border-text-secondary/20 bg-transparent text-foreground hover:bg-secondary hover:border-transparent'
  }[variant];
  
  // Combine all classes
  const allClasses = `${baseClasses} ${sizeClasses} ${variantClasses} ${className}`;
  
  // If href is provided, render a Link component
  if (href) {
    return (
      <Link href={href} className={allClasses}>
        {children}
      </Link>
    );
  }
  
  // Otherwise, render a button
  return (
    <button 
      className={allClasses}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button; 