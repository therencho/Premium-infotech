"use client";

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import AnimatedCard from '@/components/AnimatedCard';

export default function Home() {
  const observerRef = useRef<IntersectionObserver | null>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

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

    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      observerRef.current?.disconnect();
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <main className="flex flex-col items-center">
      {/* Hero Section */}
      <section className="w-full bg-background py-20 md:py-32 px-4 flex flex-col items-center justify-center min-h-[90vh] relative overflow-hidden">
        {/* Animated shapes */}
        <div 
          className="absolute w-64 h-64 rounded-full bg-primary/10 blur-3xl" 
          style={{ 
            left: `${mousePosition.x / 20}px`, 
            top: `${mousePosition.y / 20}px`,
            transition: 'all 0.6s var(--transition-ease)'
          }}
        ></div>
        <div 
          className="absolute w-96 h-96 rounded-full bg-secondary/20 blur-3xl -right-48 top-20"
          style={{ 
            transform: `translateY(${mousePosition.y / 80}px)`,
            transition: 'all 0.8s var(--transition-ease)'
          }}
        ></div>
        <div 
          className="absolute w-80 h-80 rounded-full bg-primary/10 blur-3xl -left-40 bottom-20"
          style={{ 
            transform: `translateX(${mousePosition.x / 80}px)`,
            transition: 'all 0.8s var(--transition-ease)'
          }}
        ></div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 text-left space-y-6 mb-12 md:mb-0">
              <div className="flex items-center mb-4 hero-breadcrumb">
                <span className="inline-block px-3 py-1 rounded-full bg-primary/10 text-heading-color text-sm font-medium">
                  Innovative IT Solutions
                </span>
              </div>
              
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight hero-title text-foreground">
                Tech <span className="text-heading-color">Excellence</span> For Your Business
              </h1>
              
              <div className="hero-decorative-line"></div>
              
              <p className="text-xl md:text-2xl hero-description text-text-secondary">
                Strategic IT consultancy and cutting-edge technology services tailored to help modern businesses thrive in the digital age.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 mt-6 hero-description">
                <Link href="/contact" className="gradient-button py-4 px-8 font-medium text-lg">
                  Get Started
                </Link>
                <Link href="/services" className="py-4 px-8 border border-text-secondary/20 rounded-full font-medium text-lg hover:bg-secondary hover:text-foreground hover:border-transparent transition-colors text-text-secondary">
                  Explore Services
                </Link>
              </div>
              
              <div className="flex items-center gap-4 mt-8 hero-badge">
                <div className="bg-background p-2 rounded-full border border-text-secondary/10">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-heading-color" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <p className="text-sm text-text-secondary opacity-80">Trusted by</p>
                  <p className="font-semibold text-foreground">500+ Businesses</p>
                </div>
              </div>
            </div>
            
            <div className="md:w-1/2 relative">
              <div className="relative w-full h-[400px] md:h-[500px]">
                {/* Abstract SVG shapes */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <svg viewBox="0 0 500 500" width="100%" height="100%" className="hero-shape hero-shape-1">
                    <path d="M388.5,146.2c25.1,39.3,26.4,93.9,7.7,139.4c-18.6,45.5-57.2,81.9-105.7,96.9c-48.4,15-106.7,8.5-151.3-19.4c-44.6-27.9-75.5-77.3-71.9-126.8c3.6-49.5,41.7-99.2,91.4-121.8c49.6-22.6,110.8-18.2,156.7,7.7C361.3,141.9,392,121.3,388.5,146.2z" fill="rgba(105, 117, 101, 0.1)" />
                  </svg>
                  <svg viewBox="0 0 500 500" width="90%" height="90%" className="hero-shape hero-shape-2">
                    <path d="M389.7,268.2c-20.1,42.5-40.2,85-82.1,105.9c-41.9,21-105.5,20.5-147.1-6.9c-41.6-27.3-61.1-81.6-48.7-128.6c12.5-47,56.8-86.7,104.6-100.5c47.9-13.8,99.2-1.5,134,30.5C385.2,198.5,403.6,240.3,389.7,268.2z" fill="rgba(60, 61, 55, 0.15)" />
                  </svg>
                  <svg viewBox="0 0 500 500" width="80%" height="80%" className="hero-shape hero-shape-3">
                    <path d="M343.7,96.3c35.7,30.3,55.6,79.6,44.9,121.4c-10.7,41.8-52.1,76.2-97.6,89.5c-45.5,13.4-95,5.6-132.4-21.9c-37.3-27.5-62.5-74.7-57.5-118.9c5-44.2,40.1-85.4,84.9-99.4c44.8-14.1,99.3-1,139.2,22.1C325.1,89.1,322,78.3,343.7,96.3z" fill="rgba(236, 223, 204, 0.1)" />
                  </svg>
                </div>
                
                {/* Tech elements */}
                <div className="absolute top-1/4 left-1/4 w-16 h-16 bg-primary rounded-xl flex items-center justify-center transform rotate-12 shadow-lg hero-float-element" style={{animationDelay: '0.2s'}}>
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-foreground" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                
                <div className="absolute bottom-1/3 right-1/3 w-20 h-20 bg-secondary rounded-full flex items-center justify-center shadow-lg hero-float-element" style={{animationDelay: '0.5s'}}>
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-foreground" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                </div>
                
                <div className="absolute top-20 right-16 w-16 h-16 bg-secondary/30 backdrop-blur-sm rounded-lg flex items-center justify-center transform rotate-45 shadow-lg hero-float-element" style={{animationDelay: '0.3s'}}>
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-foreground" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="w-full py-24 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 animate-on-scroll opacity-0 text-custom-heading">
            Our Core Services
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <AnimatedCard className="card-custom p-8 h-full">
              <div className="flex flex-col h-full">
                <div className="rounded-full bg-primary/10 w-14 h-14 flex items-center justify-center mb-6">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-3 parallax-content text-custom-heading">Strategic IT Planning</h3>
                <p className="text-foreground flex-grow parallax-content">
                  Align your technology with business goals through comprehensive IT strategy and roadmapping.
                </p>
                <Link href="/services#strategic-it" className="mt-6 text-primary hover:text-primary-hover flex items-center parallax-content">
                  Learn more
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </Link>
              </div>
            </AnimatedCard>

            <AnimatedCard className="card-custom p-8 h-full">
              <div className="flex flex-col h-full">
                <div className="rounded-full bg-primary/10 w-14 h-14 flex items-center justify-center mb-6">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-3 parallax-content text-custom-heading">Cloud Computing Solutions</h3>
                <p className="text-foreground flex-grow parallax-content">
                  Seamlessly migrate to the cloud with our expert guidance on implementation and management.
                </p>
                <Link href="/services#cloud" className="mt-6 text-primary hover:text-primary-hover flex items-center parallax-content">
                  Learn more
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </Link>
              </div>
            </AnimatedCard>

            <AnimatedCard className="card-custom p-8 h-full">
              <div className="flex flex-col h-full">
                <div className="rounded-full bg-primary/10 w-14 h-14 flex items-center justify-center mb-6">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-3 parallax-content text-custom-heading">Cybersecurity Consulting</h3>
                <p className="text-foreground flex-grow parallax-content">
                  Protect your digital assets with comprehensive security assessments and solutions.
                </p>
                <Link href="/services#cybersecurity" className="mt-6 text-primary hover:text-primary-hover flex items-center parallax-content">
                  Learn more
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </Link>
              </div>
            </AnimatedCard>

            <AnimatedCard className="card-custom p-8 h-full">
              <div className="flex flex-col h-full">
                <div className="rounded-full bg-primary/10 w-14 h-14 flex items-center justify-center mb-6">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-3 parallax-content text-custom-heading">IT Support Services</h3>
                <p className="text-foreground flex-grow parallax-content">
                  24/7 technical assistance for all your IT needs with rapid response times and expert problem resolution.
                </p>
                <Link href="/services#support" className="mt-6 text-primary hover:text-primary-hover flex items-center parallax-content">
                  Learn more
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </Link>
              </div>
            </AnimatedCard>
          </div>
          
          <div className="text-center mt-16">
            <Link href="/services" className="py-3 px-8 border border-foreground/20 rounded-full font-medium hover:bg-background hover:border-foreground/40 transition-colors animate-on-scroll opacity-0 text-foreground">
              View All Services
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="w-full py-24 px-4 bg-background">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-heading-color animate-on-scroll opacity-0">
              Why Choose GoFirst Tech
            </h2>
            <p className="mt-4 text-lg text-text-secondary max-w-3xl mx-auto animate-on-scroll opacity-0">
              We combine technical expertise with business acumen to deliver solutions that drive measurable results
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: (
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                ),
                title: 'Fast Response',
                description: 'Our team responds to support requests within 1 hour, ensuring minimal downtime for your business.'
              },
              {
                icon: (
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                ),
                title: 'Security First',
                description: 'We implement industry-leading security practices to protect your valuable business data.'
              },
              {
                icon: (
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                ),
                title: 'Expert Team',
                description: 'Our certified professionals bring decades of combined experience across all major technology platforms.'
              },
              {
                icon: (
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                ),
                title: 'Scalable Solutions',
                description: 'Our infrastructure solutions grow with your business, eliminating costly overhauls down the line.'
              }
            ].map((item, index) => (
              <div key={index} className="animate-on-scroll opacity-0">
                <div className="bg-secondary p-8 rounded-2xl h-full flex flex-col items-center text-center">
                  <div className="rounded-full bg-background p-4 mb-6 text-heading-color">
                    {item.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-foreground">{item.title}</h3>
                  <p className="text-text-secondary">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tech Support Section */}
      <section className="w-full py-24 px-4 bg-secondary">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-12">
          <div className="lg:w-1/2 animate-on-scroll opacity-0">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-custom-heading">
              24/7 IT Support <br/>when you need it
            </h2>
            <p className="text-custom text-lg mb-8">
              Our team of certified technicians is available around the clock to resolve your IT issues quickly and efficiently.
            </p>
            <ul className="space-y-4 text-custom">
              {[
                'Remote troubleshooting for PCs and servers',
                'Software installation & updates',
                'Network setup & maintenance',
                'Virus & malware removal'
              ].map((item, i) => (
                <li key={i} className="flex items-start">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-primary mr-3 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <Link href="/contact" className="gradient-button py-3 px-6 font-medium inline-block mt-8">
              Contact Support
            </Link>
          </div>
          <div className="lg:w-1/2 animate-on-scroll opacity-0">
            <div className="relative h-[400px] w-full lg:h-[500px] rounded-xl overflow-hidden shadow-xl">
              <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-accent/20 z-10"></div>
              <Image
                src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
                alt="IT Support Team"
                fill
                style={{ objectFit: 'cover' }}
                className="z-0"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="w-full py-24 px-4 bg-background">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-heading-color animate-on-scroll opacity-0">
              What Our Clients Say
            </h2>
            <p className="mt-4 text-lg text-text-secondary max-w-3xl mx-auto animate-on-scroll opacity-0">
              Success stories from businesses that transformed their operations with our IT solutions
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                quote: "GoFirst Tech revolutionized our IT infrastructure. Their cloud migration strategy cut our operational costs by 30% while improving system reliability.",
                author: "Sarah Johnson",
                position: "CTO, ReliableCorp Inc",
                avatar: (
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-14 w-14 text-heading-color" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z" clipRule="evenodd" />
                  </svg>
                )
              },
              {
                quote: "Their cybersecurity audit identified critical vulnerabilities we had no idea existed. Their team implemented robust solutions that have kept us secure for years.",
                author: "Mark Reynolds",
                position: "CEO, Financial Partners LLC",
                avatar: (
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-14 w-14 text-heading-color" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z" clipRule="evenodd" />
                  </svg>
                )
              },
              {
                quote: "Their 24/7 support team has been a lifesaver on multiple occasions. Response times are incredibly fast, and their staff is both knowledgeable and friendly.",
                author: "Jessica Chen",
                position: "Operations Director, TechStart",
                avatar: (
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-14 w-14 text-heading-color" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z" clipRule="evenodd" />
                  </svg>
                )
              }
            ].map((testimonial, index) => (
              <div key={index} className="animate-on-scroll opacity-0">
                <div className="bg-secondary p-8 rounded-2xl h-full">
                  <div className="flex mb-6">
                    {Array(5).fill(0).map((_, i) => (
                      <svg key={i} xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-heading-color" viewBox="0 0 20 20" fill="currentColor">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  <blockquote className="text-foreground text-lg italic mb-6">"{testimonial.quote}"</blockquote>
                  <div className="flex items-center">
                    <div className="mr-4">
                      {testimonial.avatar}
                    </div>
                    <div>
                      <p className="font-semibold text-foreground">{testimonial.author}</p>
                      <p className="text-text-secondary text-sm">{testimonial.position}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="w-full py-20 px-4 bg-secondary">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                number: "500+",
                label: "Clients Served",
                icon: (
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                )
              },
              {
                number: "99.9%",
                label: "Uptime Guarantee",
                icon: (
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                )
              },
              {
                number: "24/7",
                label: "Technical Support",
                icon: (
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
                  </svg>
                )
              },
              {
                number: "10+",
                label: "Years of Experience",
                icon: (
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                )
              }
            ].map((stat, index) => (
              <div key={index} className="animate-on-scroll opacity-0">
                <div className="flex flex-col items-center text-center p-8">
                  <div className="rounded-full bg-background p-4 mb-4 text-heading-color">
                    {stat.icon}
                  </div>
                  <div className="text-4xl md:text-5xl font-bold text-foreground mb-2">{stat.number}</div>
                  <div className="text-text-secondary">{stat.label}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies Section */}
      <section className="w-full py-24 px-4 bg-background">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-heading-color animate-on-scroll opacity-0">
              Client Success Stories
            </h2>
            <p className="mt-4 text-lg text-text-secondary max-w-3xl mx-auto animate-on-scroll opacity-0">
              See how our IT solutions have transformed businesses across industries
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {[
              {
                title: "Healthcare Provider Increases Security & Compliance",
                description: "A regional healthcare provider struggled with outdated security protocols and compliance concerns. Our team implemented a comprehensive security overhaul, resulting in HIPAA compliance and a 99.9% reduction in security incidents.",
                results: ["HIPAA compliance achieved", "99.9% reduction in security incidents", "47% faster system performance", "Seamless patient data access"],
                icon: (
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-14 w-14" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                )
              },
              {
                title: "Manufacturing Firm Reduces Downtime with Cloud Migration",
                description: "A manufacturing company with multiple locations was experiencing significant downtime and data synchronization issues. We engineered a cloud migration strategy that improved system reliability and enabled real-time data across all facilities.",
                results: ["98% reduction in system downtime", "Real-time data synchronization", "35% reduction in IT operational costs", "Improved production efficiency"],
                icon: (
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-14 w-14" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                )
              }
            ].map((study, index) => (
              <div key={index} className="animate-on-scroll opacity-0">
                <div className="bg-secondary p-8 rounded-2xl h-full">
                  <div className="flex flex-col md:flex-row gap-6">
                    <div className="md:w-1/4 flex justify-center md:justify-start">
                      <div className="rounded-full bg-background p-5 text-heading-color w-fit">
                        {study.icon}
                      </div>
                    </div>
                    <div className="md:w-3/4">
                      <h3 className="text-xl font-semibold mb-4 text-foreground">{study.title}</h3>
                      <p className="text-text-secondary mb-6">{study.description}</p>
                      
                      <h4 className="text-lg font-medium mb-3 text-heading-color">Key Results:</h4>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                        {study.results.map((result, i) => (
                          <div key={i} className="flex items-center">
                            <div className="w-2 h-2 rounded-full bg-primary mr-2"></div>
                            <span className="text-foreground">{result}</span>
                          </div>
                        ))}
                      </div>
                      
                      <Link href="/contact" className="inline-flex items-center text-heading-color hover:text-primary mt-6">
                        Discuss your project
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                        </svg>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Link href="/contact" className="inline-block py-3 px-8 bg-primary text-foreground rounded-lg font-medium hover:bg-primary-hover transition-colors animate-on-scroll opacity-0">
              Discuss Your Project
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full py-24 px-4 bg-secondary relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 rounded-full bg-primary/10 blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-80 h-80 rounded-full bg-primary/10 blur-3xl"></div>
        
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="bg-background rounded-3xl p-12 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 animate-on-scroll opacity-0 text-heading-color">
              Ready to transform your IT infrastructure?
            </h2>
            <p className="text-xl max-w-3xl mx-auto mb-10 text-text-secondary animate-on-scroll opacity-0">
              Partner with GoFirst Tech for innovative solutions that drive business growth and efficiency.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4 animate-on-scroll opacity-0">
              <Link href="/contact" className="gradient-button py-4 px-8 font-medium text-lg">
                Schedule a Consultation
              </Link>
              <Link href="/services" className="py-4 px-8 border border-text-secondary/20 rounded-full font-medium text-lg hover:bg-secondary hover:text-foreground hover:border-transparent transition-colors text-text-secondary">
                Explore Services
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
