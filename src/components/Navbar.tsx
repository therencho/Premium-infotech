"use client";

import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import ThemeToggle from './ThemeToggle';

const Navbar = () => {
  const [expanded, setExpanded] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeLink, setActiveLink] = useState('/');
  
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true);
        if (expanded) setExpanded(false);
      } else {
        setScrolled(false);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    setActiveLink(window.location.pathname);
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, [expanded]);

  const toggleNavbar = () => {
    setExpanded(!expanded);
  };

  return (
    <header className="fixed top-0 left-0 w-full z-50">
      {/* Minimal header - always visible */}
      <div 
        className={`w-full transition-all duration-300 ${
          scrolled 
            ? 'py-2 bg-custom shadow-md' 
            : 'py-4 bg-custom'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            {/* Logo */}
            <Link href="/" className="flex items-center">
              <div className="h-10 w-10 mr-3">
                <Image 
                  src="/images/logo.svg" 
                  alt="GoFirst Tech Logo" 
                  width={40} 
                  height={40} 
                />
              </div>
              <span className="text-xl font-semibold tracking-tight text-custom">
                GoFirst <span className="text-custom-heading font-bold">Tech</span>
              </span>
            </Link>
            
            {/* Controls on the right */}
            <div className="flex items-center space-x-4">
              <ThemeToggle />
              
              {/* Mobile: Hamburger/Close button */}
              <button 
                onClick={toggleNavbar}
                className="p-2 rounded-full hover:bg-custom-secondary transition-colors"
                aria-label={expanded ? "Close navigation" : "Open navigation"}
              >
                {expanded ? (
                  <svg className="h-6 w-6 text-custom" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                ) : (
                  <svg className="h-6 w-6 text-custom" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>
      </div>
      
      {/* Expandable navigation panel */}
      <div 
        className={`w-full fixed inset-x-0 transition-all duration-500 ease-in-out bg-custom border-b border-primary/20 shadow-lg overflow-hidden ${
          expanded ? 'top-[60px] max-h-[500px] opacity-100' : 'top-[60px] max-h-0 opacity-0 pointer-events-none'
        }`}
      >
        <div className="max-w-7xl mx-auto p-4 pt-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Navigation Links Column 1 */}
            <div>
              <h3 className="text-sm font-semibold text-custom-heading uppercase tracking-wider mb-4">
                Services
              </h3>
              <ul className="space-y-3">
                <li>
                  <Link 
                    href="/services" 
                    className={`text-lg ${activeLink === '/services' ? 'font-bold text-primary' : 'text-custom hover:text-primary'}`}
                    onClick={() => setExpanded(false)}
                  >
                    All Services
                  </Link>
                </li>
                <li>
                  <Link 
                    href="/services#cloud" 
                    className="text-lg text-custom hover:text-primary"
                    onClick={() => setExpanded(false)}
                  >
                    Cloud Computing
                  </Link>
                </li>
                <li>
                  <Link 
                    href="/services#cybersecurity" 
                    className="text-lg text-custom hover:text-primary"
                    onClick={() => setExpanded(false)}
                  >
                    Cybersecurity
                  </Link>
                </li>
                <li>
                  <Link 
                    href="/pricing" 
                    className={`text-lg ${activeLink === '/pricing' ? 'font-bold text-primary' : 'text-custom hover:text-primary'}`}
                    onClick={() => setExpanded(false)}
                  >
                    Pricing
                  </Link>
                </li>
              </ul>
            </div>
            
            {/* Navigation Links Column 2 */}
            <div>
              <h3 className="text-sm font-semibold text-custom-heading uppercase tracking-wider mb-4">
                Company
              </h3>
              <ul className="space-y-3">
                <li>
                  <Link 
                    href="/about" 
                    className={`text-lg ${activeLink === '/about' ? 'font-bold text-primary' : 'text-custom hover:text-primary'}`}
                    onClick={() => setExpanded(false)}
                  >
                    About Us
                  </Link>
                </li>
                <li>
                  <Link 
                    href="/blog" 
                    className={`text-lg ${activeLink === '/blog' ? 'font-bold text-primary' : 'text-custom hover:text-primary'}`}
                    onClick={() => setExpanded(false)}
                  >
                    Blog
                  </Link>
                </li>
                <li>
                  <Link 
                    href="/resources" 
                    className={`text-lg ${activeLink === '/resources' ? 'font-bold text-primary' : 'text-custom hover:text-primary'}`}
                    onClick={() => setExpanded(false)}
                  >
                    Resources
                  </Link>
                </li>
              </ul>
            </div>
            
            {/* Contact Column */}
            <div className="bg-custom-secondary p-6 rounded-xl">
              <h3 className="text-sm font-semibold text-custom-heading uppercase tracking-wider mb-4">
                Get in Touch
              </h3>
              <p className="text-custom mb-6">
                Ready to transform your IT infrastructure? Let's start a conversation today.
              </p>
              <Link 
                href="/contact" 
                className="gradient-button py-2 px-6 rounded-full text-center block"
                onClick={() => setExpanded(false)}
              >
                Contact Us
              </Link>
              
              
             
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar; 