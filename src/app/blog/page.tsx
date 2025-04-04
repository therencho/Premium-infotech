"use client";

import { useEffect, useRef, useState } from 'react';
import { blogPosts } from './data';
import BlogCard from '@/components/BlogCard';
import PageHero from '@/components/PageHero';

export default function BlogPage() {
  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    observerRef.current = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('fade-in');
          observerRef.current?.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1 });

    const animatedElements = document.querySelectorAll('.animate-on-scroll');
    animatedElements.forEach(el => {
      observerRef.current?.observe(el);
    });

    return () => observerRef.current?.disconnect();
  }, []);

  const blogIcon = (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
    </svg>
  );

  return (
    <main className="flex flex-col items-center">
      <PageHero 
        title="Our Blog"
        description="Insights, guides, and expert advice on IT, tech trends, and business strategy."
        icon={blogIcon}
      />

      {/* Blog Posts Grid */}
      <section className="w-full py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
              <div key={post.id} className="animate-on-scroll opacity-0">
                <BlogCard post={post} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="w-full py-16 px-4 bg-secondary">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6 text-custom-heading animate-on-scroll opacity-0">
            Stay Updated with Our Newsletter
          </h2>
          <p className="text-lg mb-8 text-custom animate-on-scroll opacity-0">
            Subscribe to receive the latest insights and tech updates directly to your inbox.
          </p>
          <form className="flex flex-col sm:flex-row max-w-md mx-auto gap-4 animate-on-scroll opacity-0">
            <input 
              type="email" 
              placeholder="Your email address" 
              className="flex-grow px-4 py-3 rounded-full focus:outline-none focus:ring-2 focus:ring-primary bg-background text-foreground"
              required
            />
            <button 
              type="submit" 
              className="gradient-button px-6 py-3 font-medium"
            >
              Subscribe
            </button>
          </form>
        </div>
      </section>
    </main>
  );
} 