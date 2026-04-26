import clsx from 'clsx';
import { twMerge } from 'tailwind-merge';

// A utility function to merge class names conditionally and handle Tailwind CSS conflicts
export const cn = (...inputs) => {
    return twMerge(clsx(inputs));
};