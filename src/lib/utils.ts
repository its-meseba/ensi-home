// src/lib/utils.ts

import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

/**
 * Combines class names intelligently by merging Tailwind classes
 * and handling conditional class names.
 *
 * @param inputs - Array of class names or conditions.
 * @returns A single string of combined class names.
 */
export const cn = (...inputs: ClassValue[]): string => twMerge(clsx(inputs));
