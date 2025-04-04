"use client";

import { useEffect, useRef, useState } from 'react';
import PageHero from '@/components/PageHero';

export default function ContactPage() {
  const observerRef = useRef<IntersectionObserver | null>(null);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    message: '',
    service: 'General Inquiry'
  });

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

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real implementation, you would send the data to your server
    console.log('Form submitted:', formData);
    setFormSubmitted(true);
    // Reset form
    setFormData({
      name: '',
      email: '',
      phone: '',
      company: '',
      message: '',
      service: 'General Inquiry'
    });
  };

  const contactInfo = [
    {
      title: 'Email',
      info: 'info@gofirsttech.com',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      )
    },
    {
      title: 'Phone',
      info: '+1 (555) 123-4567',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
        </svg>
      )
    },
    {
      title: 'Support Hours',
      info: '24/7 for clients',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      )
    },
    {
      title: 'Office Location',
      info: '123 Tech Drive, San Francisco, CA',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      )
    }
  ];

  const contactIcon = (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
    </svg>
  );

  return (
    <main className="flex flex-col items-center">
      <PageHero
        title="Contact Us"
        description="Have questions or ready to get started? Reach out to our team today."
        icon={contactIcon}
      />

      {/* Contact Form and Info */}
      <section className="w-full py-20 px-4 relative">
        {/* Background shape */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl -z-10"></div>
        <div className="absolute bottom-20 left-10 w-64 h-64 bg-primary/5 rounded-full blur-3xl -z-10"></div>
        
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Contact Info */}
            <div className="animate-on-scroll opacity-0 lg:col-span-1">
              <div className="bg-secondary p-8 rounded-2xl h-full">
                <h2 className="text-2xl font-bold mb-6 text-foreground">Get in Touch</h2>
                <div className="space-y-8 mb-8">
                  {contactInfo.map((item, index) => (
                    <div key={index} className="flex items-start">
                      <div className="mr-4 p-3 bg-background rounded-xl">
                        <div className="text-primary">{item.icon}</div>
                      </div>
                      <div>
                        <h3 className="font-semibold text-foreground mb-1">{item.title}</h3>
                        <p className="text-text-secondary">{item.info}</p>
                      </div>
                    </div>
                  ))}
                </div>
                
                <div className="pt-6 border-t border-foreground/10">
                  <h3 className="font-semibold text-foreground mb-4">Connect With Us</h3>
                  <div className="flex space-x-4">
                    {[
                      { 
                        icon: (
                          <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M22.675 0h-21.35c-.732 0-1.325.593-1.325 1.325v21.351c0 .731.593 1.324 1.325 1.324h11.495v-9.294h-3.128v-3.622h3.128v-2.671c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12v9.293h6.116c.73 0 1.323-.593 1.323-1.325v-21.35c0-.732-.593-1.325-1.325-1.325z" />
                          </svg>
                        ), 
                        name: 'Facebook' 
                      },
                      { 
                        icon: (
                          <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M7.548 22.501c9.056 0 14.01-7.503 14.01-14.01 0-.213 0-.425-.015-.636A10.02 10.02 0 0024 5.305a9.828 9.828 0 01-2.828.776 4.94 4.94 0 002.165-2.724 9.867 9.867 0 01-3.127 1.195 4.929 4.929 0 00-8.391 4.491A13.98 13.98 0 011.67 3.9a4.928 4.928 0 001.525 6.573A4.887 4.887 0 01.96 9.855v.063a4.926 4.926 0 003.95 4.827 4.917 4.917 0 01-2.223.084 4.93 4.93 0 004.6 3.42A9.88 9.88 0 010 20.289a13.941 13.941 0 007.548 2.209" />
                          </svg>
                        ), 
                        name: 'Twitter' 
                      },
                      { 
                        icon: (
                          <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                          </svg>
                        ), 
                        name: 'LinkedIn' 
                      }
                    ].map((social, index) => (
                      <a 
                        key={index} 
                        href="#" 
                        className="h-10 w-10 rounded-full bg-background flex items-center justify-center text-primary hover:bg-primary hover:text-foreground transition-colors"
                        aria-label={social.name}
                      >
                        {social.icon}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            
            {/* Contact Form */}
            <div className="animate-on-scroll opacity-0 lg:col-span-2">
              <div className="bg-background p-8 rounded-2xl border border-primary/10 shadow-lg shadow-primary/5">
                {formSubmitted ? (
                  <div className="text-center py-16">
                    <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <h2 className="text-2xl font-bold mb-2 text-heading-color">Thank You!</h2>
                    <p className="text-text-secondary mb-8 max-w-md mx-auto">
                      Your message has been sent successfully. Our team will get back to you shortly.
                    </p>
                    <button 
                      onClick={() => setFormSubmitted(false)} 
                      className="py-3 px-6 bg-primary text-foreground rounded-full font-medium hover:shadow-lg hover:shadow-primary/20 transition-all"
                    >
                      Send Another Message
                    </button>
                  </div>
                ) : (
                  <>
                    <div className="flex items-center mb-8">
                      <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mr-4">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                        </svg>
                      </div>
                      <h2 className="text-2xl font-bold text-heading-color">Send Us a Message</h2>
                    </div>
                    
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                          <label htmlFor="name" className="block mb-2 font-medium text-heading-color">
                            Name
                          </label>
                          <input
                            type="text"
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            className="w-full px-4 py-3 rounded-lg border border-primary/20 bg-transparent focus:outline-none focus:ring-2 focus:ring-primary/30 text-foreground"
                            required
                            placeholder="Your name"
                          />
                        </div>
                        <div>
                          <label htmlFor="email" className="block mb-2 font-medium text-heading-color">
                            Email
                          </label>
                          <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            className="w-full px-4 py-3 rounded-lg border border-primary/20 bg-transparent focus:outline-none focus:ring-2 focus:ring-primary/30 text-foreground"
                            required
                            placeholder="your.email@example.com"
                          />
                        </div>
                      </div>
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                          <label htmlFor="phone" className="block mb-2 font-medium text-heading-color">
                            Phone Number
                          </label>
                          <input
                            type="tel"
                            id="phone"
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                            className="w-full px-4 py-3 rounded-lg border border-primary/20 bg-transparent focus:outline-none focus:ring-2 focus:ring-primary/30 text-foreground"
                            placeholder="+1 (123) 456-7890"
                          />
                        </div>
                        <div>
                          <label htmlFor="company" className="block mb-2 font-medium text-heading-color">
                            Company Name
                          </label>
                          <input
                            type="text"
                            id="company"
                            name="company"
                            value={formData.company}
                            onChange={handleChange}
                            className="w-full px-4 py-3 rounded-lg border border-primary/20 bg-transparent focus:outline-none focus:ring-2 focus:ring-primary/30 text-foreground"
                            placeholder="Your company"
                          />
                        </div>
                      </div>
                      
                      <div>
                        <label htmlFor="service" className="block mb-2 font-medium text-heading-color">
                          Service of Interest
                        </label>
                        <select
                          id="service"
                          name="service"
                          value={formData.service}
                          onChange={handleChange}
                          className="w-full px-4 py-3 rounded-lg border border-primary/20 bg-transparent focus:outline-none focus:ring-2 focus:ring-primary/30 text-foreground"
                        >
                          <option value="General Inquiry">General Inquiry</option>
                          <option value="Strategic IT Planning">Strategic IT Planning</option>
                          <option value="Cloud Computing Solutions">Cloud Computing Solutions</option>
                          <option value="Cybersecurity Consulting">Cybersecurity Consulting</option>
                          <option value="IT Support Services">IT Support Services</option>
                        </select>
                      </div>
                      
                      <div>
                        <label htmlFor="message" className="block mb-2 font-medium text-heading-color">
                          Your Message
                        </label>
                        <textarea
                          id="message"
                          name="message"
                          value={formData.message}
                          onChange={handleChange}
                          rows={5}
                          className="w-full px-4 py-3 rounded-lg border border-primary/20 bg-transparent focus:outline-none focus:ring-2 focus:ring-primary/30 text-foreground"
                          required
                          placeholder="Tell us about your project or inquiry..."
                        ></textarea>
                      </div>
                      
                      <div className="flex items-center">
                        <button
                          type="submit"
                          className="py-3 px-8 bg-primary text-foreground rounded-full font-medium hover:shadow-lg hover:shadow-primary/20 transition-all"
                        >
                          Send Message
                        </button>
                        <p className="ml-4 text-sm text-text-secondary">
                          We'll get back to you within 24 hours
                        </p>
                      </div>
                    </form>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="w-full py-16 px-4 bg-secondary">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 animate-on-scroll opacity-0">
            <h2 className="text-3xl font-bold mb-3 text-heading-color">Our Location</h2>
            <p className="text-text-secondary max-w-2xl mx-auto">
              Visit our office for in-person consultations. We're conveniently located in the heart of San Francisco's tech district.
            </p>
          </div>
          <div className="relative h-[400px] rounded-2xl overflow-hidden animate-on-scroll opacity-0 shadow-lg shadow-primary/5">
            <div className="absolute inset-0 bg-primary/10 flex items-center justify-center">
              <div className="p-4 bg-primary rounded-full">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-foreground" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <div className="absolute text-center bottom-8 left-1/2 transform -translate-x-1/2 bg-background p-4 rounded-lg shadow-lg w-80">
                <h3 className="font-semibold text-heading-color">GoFirst Tech Headquarters</h3>
                <p className="text-text-secondary">123 Tech Drive, San Francisco, CA 94103</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
} 