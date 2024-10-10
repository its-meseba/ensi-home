'use client';

import { PropsWithChildren, useEffect } from 'react';

export const LightModeProvider = ({ children }: PropsWithChildren) => {
  useEffect(() => {
    // Remove 'dark' class from the root HTML element
    document.documentElement.classList.remove('dark');
    // Override any potential dark mode preferences
    const media = window.matchMedia('(prefers-color-scheme: dark)');
    const listener = () => {
      document.documentElement.classList.remove('dark');
    };
    media.addListener(listener);

    return () => media.removeListener(listener);
  }, []);

  return <>{children}</>;
};
