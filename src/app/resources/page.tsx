"use client";

import { useEffect, useRef } from 'react';
import Link from 'next/link';
import PageHero from '@/components/PageHero';

export default function ResourcesPage() {
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

  const resourceCategories = [
    {
      id: 'it-guides',
      title: 'IT Guides',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
        </svg>
      ),
      description: 'Practical tips and advice to help you get the most from your technology.',
      resources: [
        {
          title: 'The Business Owner\'s Guide to Cybersecurity',
          description: 'Essential security measures every business should implement to protect their digital assets.',
          content: 'In today\'s digital landscape, cybersecurity isn\'t just for large corporations. Small and medium businesses are increasingly targeted by cyber attacks due to typically having fewer security resources. This guide covers the essential security measures every business should implement, including strong password policies, multi-factor authentication, employee training, regular software updates, data backups, and incident response planning.'
        },
        {
          title: 'Cloud Migration: A Step-by-Step Approach',
          description: 'Planning your move to the cloud? Follow our proven methodology for a smooth transition.',
          content: 'Moving your business to the cloud offers numerous benefits including cost savings, scalability, and improved collaboration. However, without proper planning, cloud migrations can become problematic. This guide outlines our step-by-step approach covering assessment, planning, migration strategy development, testing, execution, and post-migration optimization to ensure your cloud transition is successful and minimizes business disruption.'
        },
        {
          title: 'Optimizing Your Remote Work Setup',
          description: 'Create a productive and secure remote work environment with these best practices.',
          content: 'Remote work has become a permanent fixture in the modern business landscape. This guide provides comprehensive recommendations for optimizing your remote work setup, covering everything from ergonomic workstation design to secure network configuration. Learn how to implement VPNs, secure home networks, establish communication protocols, and maintain team collaboration while working remotely.'
        }
      ]
    },
    {
      id: 'tech-insights',
      title: 'Technology Insights',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
        </svg>
      ),
      description: 'The latest trends and innovations in IT with practical applications for your business.',
      resources: [
        {
          title: 'The Rise of AI in Business Operations',
          description: 'How artificial intelligence is transforming business processes and decision-making.',
          content: 'Artificial intelligence is no longer just a futuristic concept. Businesses across industries are leveraging AI to streamline operations, improve decision-making, and deliver enhanced customer experiences. This article explores practical applications of AI in business operations, from customer service chatbots and predictive analytics to supply chain optimization and personalized marketing. Learn how AI technologies can be implemented in your business to drive efficiency and competitive advantage.'
        },
        {
          title: 'Zero Trust Security: Beyond the Perimeter',
          description: 'Understanding the zero trust security model and its importance in today\'s threat landscape.',
          content: 'The traditional security perimeter has dissolved as remote work, cloud services, and mobile devices have become ubiquitous. This has made the zero trust security model essential for modern businesses. This article explains the core principles of zero trust—"never trust, always verify"—and provides a roadmap for implementing this security approach in your organization through continuous verification, least privilege access, and microsegmentation.'
        },
        {
          title: 'Edge Computing and Its Business Impact',
          description: 'How processing data closer to the source is creating new opportunities for businesses.',
          content: 'Edge computing is revolutionizing how data is processed by moving computation closer to data sources rather than relying solely on centralized cloud systems. This creates opportunities for reduced latency, improved reliability, and enhanced data security. This article explores how businesses can leverage edge computing for IoT applications, real-time analytics, and improved customer experiences, with practical examples from manufacturing, healthcare, and retail sectors.'
        }
      ]
    }
  ];

  const resourcesIcon = (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
    </svg>
  );

  return (
    <main className="flex flex-col items-center">
      <PageHero
        title="Resources"
        description="Expert insights and practical guides to help your business leverage technology effectively."
        icon={resourcesIcon}
      />

      {/* Resources Categories */}
      {resourceCategories.map((category, categoryIndex) => (
        <section key={category.id} id={category.id} className={`w-full py-20 px-4 ${categoryIndex % 2 === 1 ? 'bg-secondary' : ''}`}>
          <div className="max-w-7xl mx-auto">
            <div className="flex items-center mb-12 animate-on-scroll opacity-0">
              <div className="mr-4">
                {category.icon}
              </div>
              <div>
                <h2 className="text-3xl font-bold text-heading-color">{category.title}</h2>
                <p className="text-text-secondary">{category.description}</p>
              </div>
            </div>

            <div className="space-y-12">
              {category.resources.map((resource, index) => (
                <div key={index} className="animate-on-scroll opacity-0">
                  <div className="bg-background rounded-xl p-8 shadow-sm hover:shadow-md transition-shadow duration-300">
                    <h3 className="text-xl font-bold mb-3 text-heading-color">{resource.title}</h3>
                    <p className="text-text-secondary font-medium mb-4">{resource.description}</p>
                    <div className="text-foreground mb-6">
                      <p>{resource.content}</p>
                    </div>
                    <div className="flex justify-end">
                      <button className="inline-flex items-center text-heading-color hover:text-primary">
                        Read more
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      ))}

      {/* Newsletter */}
      <section className="w-full py-16 px-4 bg-secondary">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6 animate-on-scroll opacity-0 text-foreground">
            Stay Updated with Latest Resources
          </h2>
          <p className="text-lg mb-8 text-text-secondary animate-on-scroll opacity-0">
            Subscribe to our newsletter to get notified when we publish new resources and insights.
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
              className="px-6 py-3 bg-primary text-foreground rounded-full font-medium hover:bg-primary-hover transition-colors"
            >
              Subscribe
            </button>
          </form>
        </div>
      </section>

      {/* Contact For Resources */}
      <section className="w-full py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="bg-secondary rounded-2xl p-8 md:p-12 flex flex-col md:flex-row items-center gap-8 md:gap-16 animate-on-scroll opacity-0">
            <div className="md:w-2/3">
              <h2 className="text-3xl font-bold mb-4 text-heading-color">Need Customized IT Guidance?</h2>
              <p className="text-text-secondary mb-4">
                Our team can provide personalized IT consultations and custom resources tailored to your specific business challenges and technology needs.
              </p>
              <Link 
                href="/contact" 
                className="inline-block px-6 py-3 bg-primary text-foreground rounded-lg font-medium hover:bg-primary-hover transition-colors"
              >
                Schedule a Consultation
              </Link>
            </div>
            <div className="md:w-1/3 flex justify-center">
              <div className="w-full max-w-[240px] aspect-square bg-primary/20 rounded-full flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-24 w-24 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
} 