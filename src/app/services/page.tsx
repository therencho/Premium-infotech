"use client";

import { useEffect, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import PageHero from '@/components/PageHero';
import AnimatedCard from '@/components/AnimatedCard';

export default function ServicesPage() {
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

  const services = [
    {
      id: 'strategic-it',
      title: 'Strategic IT Planning',
      description: 'Comprehensive technology strategy aligned with your business goals and future growth plans.',
      features: [
        'IT strategy development and roadmap planning',
        'Technology asset inventory and lifecycle management',
        'Vendor management and procurement assistance',
        'IT budget planning and cost optimization'
      ],
      image: 'https://images.unsplash.com/photo-1556155092-490a1ba16284?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80'
    },
    {
      id: 'infrastructure',
      title: 'Infrastructure Assessment & Optimization',
      description: 'Evaluate and enhance your current IT infrastructure for optimal performance and scalability.',
      features: [
        'Network architecture review and optimization',
        'Server infrastructure assessment',
        'Storage solution evaluation and recommendations',
        'Performance monitoring and optimization'
      ],
      image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80'
    },
    {
      id: 'cloud',
      title: 'Cloud Computing Solutions',
      description: 'Expert guidance on cloud adoption, migration, and management strategies for your business.',
      features: [
        'Cloud readiness assessment',
        'Migration planning and execution',
        'Multi-cloud and hybrid cloud architecture',
        'Cloud cost management and optimization'
      ],
      image: 'https://images.unsplash.com/photo-1544890225-2f3faec4cd60?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80'
    },
    {
      id: 'cybersecurity',
      title: 'Cybersecurity Consulting',
      description: 'Protect your business from evolving threats with comprehensive security solutions.',
      features: [
        'Security assessment and vulnerability testing',
        'Compliance guidance (GDPR, HIPAA, PCI DSS)',
        'Security policy development',
        'Employee security awareness training'
      ],
      image: 'https://images.unsplash.com/photo-1563206767-5b18f218e8de?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80'
    },
    {
      id: 'digital-transformation',
      title: 'Digital Transformation Services',
      description: 'Modernize your business operations through strategic technological innovation.',
      features: [
        'Business process automation',
        'Legacy system modernization',
        'Digital workplace solutions',
        'Technology adoption and change management'
      ],
      image: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80'
    }
  ];

  const supportServices = [
    {
      id: 'remote-support',
      title: 'Remote Troubleshooting for PCs',
      description: 'Quick resolution of computer issues without the need for on-site visits.',
      features: [
        'Remote desktop support',
        'Hardware diagnostics and troubleshooting',
        'Performance optimization',
        'User access and permission management'
      ],
      image: 'https://images.unsplash.com/photo-1531297484001-80022131f5a1?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80'
    },
    {
      id: 'software',
      title: 'Software Installation & Updates',
      description: 'Professional deployment and maintenance of software across your organization.',
      features: [
        'Software installation and configuration',
        'Patch management and updates',
        'License management',
        'Software compatibility assessment'
      ],
      image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80'
    },
    {
      id: 'network',
      title: 'Network Setup & Maintenance',
      description: 'Reliable network infrastructure design and ongoing support services.',
      features: [
        'Network design and implementation',
        'WiFi optimization and troubleshooting',
        'Router and switch configuration',
        'VPN setup and management'
      ],
      image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80'
    },
    {
      id: 'security',
      title: 'Virus & Malware Removal',
      description: 'Effective remediation of security threats and preventative measures.',
      features: [
        'Malware detection and removal',
        'System cleaning and recovery',
        'Security software installation',
        'Prevention strategy implementation'
      ],
      image: 'https://images.unsplash.com/photo-1542820286-3a0cfa91e70a?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80'
    }
  ];

  return (
    <main className="flex flex-col items-center">
      {/* Hero Section */}
      <PageHero
        title="Our Services"
        description="Comprehensive IT solutions designed to optimize your technology infrastructure and drive business growth."
        icon={
          <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
          </svg>
        }
      />

      {/* IT Consultancy Services */}
      <section className="w-full py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold mb-16 text-center animate-on-scroll opacity-0">
            IT Consultancy Services
          </h2>

          <div className="space-y-24">
            {services.map((service, index) => (
              <div 
                key={service.id} 
                id={service.id} 
                className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-12 animate-on-scroll opacity-0`}
              >
                <div className="lg:w-1/2">
                  <AnimatedCard className="h-full">
                    <div className="relative h-[300px] sm:h-[400px] w-full rounded-xl overflow-hidden">
                      <Image
                        src={service.image}
                        alt={service.title}
                        fill
                        style={{ objectFit: 'cover' }}
                      />
                    </div>
                  </AnimatedCard>
                </div>
                <div className="lg:w-1/2 flex flex-col justify-center">
                  <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
                  <p className="text-gray-600 dark:text-gray-400 mb-6">{service.description}</p>
                  <ul className="space-y-3">
                    {service.features.map((feature, i) => (
                      <li key={i} className="flex items-start">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-primary mr-3 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* IT Support Services */}
      <section className="w-full py-20 px-4 bg-secondary dark:bg-secondary">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold mb-16 text-center animate-on-scroll opacity-0">
            IT Support & Online Tech Services
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {supportServices.map((service) => (
              <div key={service.id} id={service.id} className="animate-on-scroll opacity-0">
                <AnimatedCard className="bg-white dark:bg-black h-full">
                  <div className="p-8">
                    <div className="relative h-[200px] w-full mb-6 rounded-lg overflow-hidden">
                      <Image
                        src={service.image}
                        alt={service.title}
                        fill
                        style={{ objectFit: 'cover' }}
                      />
                    </div>
                    <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                    <p className="text-gray-600 dark:text-gray-400 mb-6">{service.description}</p>
                    <ul className="space-y-2">
                      {service.features.map((feature, i) => (
                        <li key={i} className="flex items-start text-sm">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-primary mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </AnimatedCard>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full py-24 px-4">
        <div className="max-w-4xl mx-auto text-center animate-on-scroll opacity-0">
          <h2 className="text-3xl font-bold mb-6">
            Ready to elevate your IT infrastructure?
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 mb-8">
            Contact us today to discuss how our services can help your business achieve its technology goals.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href="/contact" className="gradient-button py-3 px-6 font-medium">
              Contact Us
            </Link>
            <Link href="/pricing" className="py-3 px-6 border border-gray-300 dark:border-gray-700 rounded-full font-medium hover:bg-gray-50 dark:hover:bg-gray-900 transition-colors">
              View Pricing
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
} 