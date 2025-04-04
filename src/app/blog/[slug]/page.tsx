"use client";

import { useEffect, useRef } from 'react';
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { blogPosts, getBlogPostContent } from '../data';
import Breadcrumb from '@/components/Breadcrumb';
import ReactMarkdown from 'react-markdown';

interface Params {
  slug: string;
}

interface BlogPostPageProps {
  params: Promise<Params>;
}

export default function BlogPostPage({ params }: BlogPostPageProps) {
  // Use React.use to unwrap the Promise
  const { slug } = React.use(params);
  
  const post = blogPosts.find(p => p.slug === slug);
  const postContent = post ? getBlogPostContent(slug) : null;
  
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

  useEffect(() => {
    // Scroll to top when the page loads
    window.scrollTo(0, 0);
  }, [slug]);

  if (!post || !postContent) {
    notFound();
  }

  return (
    <main className="flex flex-col items-center">
      {/* Hero Section */}
      <section className="w-full bg-secondary px-4 pt-24 pb-16 relative overflow-hidden">
        <div className="max-w-4xl mx-auto">
          <div className="hero-breadcrumb mb-4">
            <Breadcrumb />
          </div>
          
          <div className="text-center mb-8">
            <span className="bg-primary text-custom text-sm py-1 px-3 rounded-full inline-block mb-4">
              {post.category}
            </span>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-custom hero-title">
              {post.title}
            </h1>
          </div>
          
          <div className="flex items-center justify-center mb-8 hero-description">
            <div className="relative h-12 w-12 rounded-full overflow-hidden mr-4">
              <Image 
                src={post.author.avatar} 
                alt={post.author.name}
                fill
                style={{ objectFit: 'cover' }}
              />
            </div>
            <div className="text-left">
              <p className="text-custom-heading font-medium">{post.author.name}</p>
              <p className="text-custom/70 text-sm">
                {new Date(post.date).toLocaleDateString('en-US', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric'
                })}
              </p>
            </div>
          </div>
          
          <div className="relative w-full h-[400px] rounded-xl overflow-hidden mb-12 hero-badge">
            <Image
              src={post.coverImage}
              alt={post.title}
              fill
              style={{ objectFit: 'cover' }}
              priority
            />
          </div>
        </div>
      </section>

      {/* Blog Content */}
      <section className="w-full py-16 px-4">
        <div className="max-w-3xl mx-auto">
          <article className="prose prose-lg max-w-none">
            <div className="markdown-content text-custom">
              {postContent.content && (
                <ReactMarkdown>
                  {postContent.content}
                </ReactMarkdown>
              )}
            </div>
          </article>
          
          {/* Tags and Share */}
          <div className="mt-12 pt-8 border-t border-foreground/10 flex flex-wrap items-center justify-between">
            <div className="flex flex-wrap gap-2 mb-4 md:mb-0">
              <span className="text-custom-heading font-medium">Tags:</span>
              <Link href={`/blog?category=${post.category.toLowerCase()}`} className="bg-secondary text-custom px-3 py-1 rounded-full text-sm hover:bg-primary hover:text-custom transition-colors">
                {post.category}
              </Link>
              <Link href="/blog?tag=it-solutions" className="bg-secondary text-custom px-3 py-1 rounded-full text-sm hover:bg-primary hover:text-custom transition-colors">
                IT Solutions
              </Link>
              <Link href="/blog?tag=technology" className="bg-secondary text-custom px-3 py-1 rounded-full text-sm hover:bg-primary hover:text-custom transition-colors">
                Technology
              </Link>
            </div>
            
            <div className="flex items-center gap-2">
              <span className="text-custom-heading font-medium">Share:</span>
              <button className="p-2 rounded-full bg-secondary text-custom hover:bg-primary transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                </svg>
              </button>
              <button className="p-2 rounded-full bg-secondary text-custom hover:bg-primary transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
                </svg>
              </button>
              <button className="p-2 rounded-full bg-secondary text-custom hover:bg-primary transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Related Posts */}
      <section className="w-full py-16 px-4 bg-secondary">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center text-custom-heading">
            Related Articles
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {blogPosts
              .filter(p => p.slug !== slug && p.category === post.category)
              .slice(0, 3)
              .map(relatedPost => (
                <div key={relatedPost.id} className="animate-on-scroll opacity-0">
                  <Link href={`/blog/${relatedPost.slug}`} className="block group">
                    <div className="card-custom rounded-xl overflow-hidden h-full">
                      <div className="relative h-48 w-full overflow-hidden">
                        <Image
                          src={relatedPost.coverImage}
                          alt={relatedPost.title}
                          fill
                          style={{ objectFit: 'cover' }}
                          className="transition-transform duration-500 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-background/70 to-transparent"></div>
                      </div>
                      <div className="p-6">
                        <h3 className="text-xl font-bold mb-2 text-custom-heading group-hover:text-primary transition-colors">
                          {relatedPost.title}
                        </h3>
                        <p className="text-custom/80 text-sm">
                          {new Date(relatedPost.date).toLocaleDateString('en-US', {
                            year: 'numeric',
                            month: 'long',
                            day: 'numeric'
                          })}
                        </p>
                      </div>
                    </div>
                  </Link>
                </div>
              ))}
          </div>
        </div>
      </section>
    </main>
  );
} 