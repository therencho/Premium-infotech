'use client';

import dynamic from 'next/dynamic';
import { AnimatedTestimonials as OriginalAnimatedTestimonials } from './animated-testimonials';

// Create a client-only version with no SSR
const ClientOnlyTestimonials = dynamic(
  () => Promise.resolve(OriginalAnimatedTestimonials),
  { ssr: false }
);

export { ClientOnlyTestimonials }; 