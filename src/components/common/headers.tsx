'use client';

import React from 'react';

type HeaderLevel = 'h1' | 'h2' | 'h3' | 'h4' | 'h5';

interface GradientHeaderProps {
  level: HeaderLevel;
  children: React.ReactNode;
  className?: string;
  isDarkMode?: boolean;
  isBold?: boolean;
}

export default function GradientHeader({
  level,
  children,
  className = '',
  isDarkMode = false,
  isBold = true,
}: GradientHeaderProps) {
  const baseStyles = `leading-tight ${isBold ? 'font-bold' : 'font-normal'}`;

  const gradientStyles = isDarkMode
    ? 'bg-gradient-to-r from-purple-600 via-violet-500 to-indigo-600 text-transparent bg-clip-text'
    : 'bg-gradient-to-r from-blue-400 via-teal-300 to-green-400 text-transparent bg-clip-text';

  const sizeStyles = {
    h1: 'text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl',
    h2: 'text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl',
    h3: 'text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl',
    h4: 'text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl',
    h5: 'text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl',
  };

  const HeaderTag = level;

  return (
    <HeaderTag
      className={`py-4 ${baseStyles} ${gradientStyles} ${sizeStyles[level]} ${className}`}
    >
      {children}
    </HeaderTag>
  );
}
