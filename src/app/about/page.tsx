"use client";

import { useEffect, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import AnimatedCard from '@/components/AnimatedCard';
import PageHero from '@/components/PageHero';

export default function AboutPage() {
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

  const team = [
    {
      name: 'Alex Morgan',
      role: 'CEO & Founder',
      bio: 'Over 15 years of experience in IT leadership and strategic planning.',
      image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80'
    },
    {
      name: 'Jamie Chen',
      role: 'CTO',
      bio: 'Expert in cloud architecture and cybersecurity implementation.',
      image: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80'
    },
    {
      name: 'Taylor Williams',
      role: 'Head of Support',
      bio: 'Leads our world-class technical support team with a focus on client satisfaction.',
      image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80'
    },
    {
      name: 'Sam Rivera',
      role: 'Senior Consultant',
      bio: 'Specializes in digital transformation and enterprise IT strategy.',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80'
    }
  ];

  const values = [
    {
      title: 'Client-Focused Solutions',
      description: 'We prioritize understanding your unique business needs to deliver tailored IT solutions that drive real results.',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      )
    },
    {
      title: 'Technical Excellence',
      description: 'Our team maintains the highest standards of technical expertise, continuously learning to stay ahead of industry trends.',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
        </svg>
      )
    },
    {
      title: 'Integrity & Transparency',
      description: 'We believe in honest communication and transparent business practices in all our client relationships.',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      )
    },
    {
      title: 'Proactive Support',
      description: 'We anticipate potential issues and address them before they impact your business operations.',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      )
    }
  ];

  const aboutIcon = (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
    </svg>
  );

  return (
    <main className="flex flex-col items-center">
      {/* Use the PageHero component */}
      <PageHero 
        title="About Us"
        description="Helping businesses leverage technology for growth and innovation since 2010."
        icon={aboutIcon}
      />

      {/* Our Story */}
      <section className="w-full py-20 px-4">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-12 items-center">
          <div className="lg:w-1/2 animate-on-scroll opacity-0">
            <h2 className="text-3xl font-bold mb-6 text-custom-heading">Our Story</h2>
            <div className="space-y-4 text-custom">
              <p>
                GoFirst Tech was founded with a simple mission: to provide businesses with enterprise-level IT solutions that were previously only accessible to large corporations. We believe that every business deserves reliable technology that enables growth.
              </p>
              <p>
                Starting as a small team of IT consultants in 2010, we've grown into a comprehensive technology partner for businesses across multiple industries. Our approach has always been to focus on understanding our clients' unique needs and delivering tailored solutions that directly impact their success.
              </p>
              <p>
                Today, our team of certified experts continues to uphold our founding principles while expanding our service offerings to meet evolving technology needs in an increasingly digital business environment.
              </p>
            </div>
          </div>
          <div className="lg:w-1/2 animate-on-scroll opacity-0">
            <AnimatedCard>
              <div className="relative h-[400px] w-full rounded-xl overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
                  alt="Our team collaboration"
                  fill
                  style={{ objectFit: 'cover' }}
                />
              </div>
            </AnimatedCard>
          </div>
        </div>
      </section>

      {/* Our Values Section - Update to use card-custom for better theme contrast */}
      <section className="w-full py-20 px-4 bg-secondary">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold mb-16 text-center animate-on-scroll opacity-0 text-heading-color">Our Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {values.map((value, index) => (
              <div key={index} className="card-custom p-8 rounded-xl h-full animate-on-scroll opacity-0 transition-all duration-300 hover:shadow-lg">
                <div className="flex flex-col h-full">
                  <div className="mb-4 text-heading-color">{value.icon}</div>
                  <h3 className="text-xl font-semibold mb-2 text-heading-color">{value.title}</h3>
                  <p className="text-foreground">{value.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Team */}
      <section className="w-full py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold mb-16 text-center animate-on-scroll opacity-0 text-custom-heading">Our Leadership Team</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <AnimatedCard key={index} className="card-custom animate-on-scroll opacity-0">
                <div className="relative h-[300px] mb-4 rounded-xl overflow-hidden">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    style={{ objectFit: 'cover' }}
                  />
                </div>
                <div className="p-4">
                  <h3 className="text-xl font-semibold parallax-content text-custom-heading">{member.name}</h3>
                  <p className="text-primary mb-2 parallax-content">{member.role}</p>
                  <p className="text-custom text-sm parallax-content">{member.bio}</p>
                </div>
              </AnimatedCard>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="w-full py-20 px-4 bg-primary">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center animate-on-scroll opacity-0 text-custom">Why Choose GoFirst Tech</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center animate-on-scroll opacity-0">
              <div className="inline-flex items-center justify-center h-16 w-16 rounded-full bg-custom/20 mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-custom" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2 text-custom">Proven Expertise</h3>
              <p className="text-custom/90">Our team of certified professionals brings decades of combined experience across all IT domains.</p>
            </div>
            <div className="text-center animate-on-scroll opacity-0">
              <div className="inline-flex items-center justify-center h-16 w-16 rounded-full bg-custom/20 mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-custom" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2 text-custom">24/7 Support</h3>
              <p className="text-custom/90">We're always available to ensure your critical systems remain operational at all times.</p>
            </div>
            <div className="text-center animate-on-scroll opacity-0">
              <div className="inline-flex items-center justify-center h-16 w-16 rounded-full bg-custom/20 mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-custom" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2 text-custom">Results-Driven</h3>
              <p className="text-custom/90">Our solutions are designed to deliver measurable business improvements and ROI.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full py-24 px-4">
        <div className="max-w-4xl mx-auto text-center animate-on-scroll opacity-0">
          <h2 className="text-3xl font-bold mb-6 text-custom-heading">
            Ready to partner with us?
          </h2>
          <p className="text-lg text-custom mb-8">
            Contact our team today to discuss how we can help your business leverage technology for success.
          </p>
          <Link href="/contact" className="gradient-button py-3 px-6 font-medium inline-block">
            Get in Touch
          </Link>
        </div>
      </section>
    </main>
  );
} 