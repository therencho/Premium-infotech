"use client";

import { UserRound, Target, Eye, Headphones, Cloud, Shield, HardDrive, Smartphone, BarChart3, MessageSquareQuote } from "lucide-react";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import { ParallaxSection } from "@/components/ui/parallax-section";
import { Animated3DCard } from "@/components/ui/animated-3d-card";
import { RevealText } from "@/components/ui/reveal-text";
import { PageHeader } from "@/components/ui/page-header";
import { ReactNode } from "react";

// Animated border component with gradient effect for section containers
const AnimatedBorder = ({ children, className = "" }: { children: ReactNode; className?: string }) => {
  return (
    <div className={`relative rounded-2xl ${className}`}>
      {/* Gradient border with blur effect */}
      <div className="absolute -inset-[1px] rounded-2xl bg-gradient-to-r from-[rgb(97,224,0)]/40 to-[rgb(0,218,222)]/40 opacity-70 blur-[2px] group-hover:opacity-100 transition-opacity"></div>
      <motion.div 
        className="absolute -inset-[1px] rounded-2xl bg-gradient-to-r from-[rgb(97,224,0)]/30 to-[rgb(0,218,222)]/30"
        animate={{
          backgroundPosition: ['0% 0%', '100% 100%'],
          rotate: [0, 0.5, 0],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          repeatType: 'reverse',
          ease: 'linear',
        }}
      />
      <div className="relative bg-white rounded-2xl h-full z-10">
        {children}
      </div>
    </div>
  );
};

// Thinner border variant for stats and smaller components
const ThinBorder = ({ children, className = "" }: { children: ReactNode; className?: string }) => {
  return (
    <div className={`relative rounded-xl ${className}`}>
      <div className="absolute -inset-[0.5px] rounded-xl bg-gradient-to-r from-[rgb(97,224,0)]/30 to-[rgb(0,218,222)]/30 opacity-60 blur-[1px] group-hover:opacity-100 transition-opacity"></div>
      <motion.div 
        className="absolute -inset-[0.5px] rounded-xl bg-gradient-to-r from-[rgb(97,224,0)]/20 to-[rgb(0,218,222)]/20"
        animate={{
          backgroundPosition: ['0% 0%', '100% 100%'],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          repeatType: 'reverse',
          ease: 'linear',
        }}
      />
      <div className="relative bg-white rounded-xl h-full z-10">
        {children}
      </div>
    </div>
  );
};

// Helper function for deterministic animation values based on index
const getParticleProps = (index: number) => {
  const sizes = [15, 25, 35, 20, 30, 40, 18, 28, 22, 32];
  const positions = [10, 20, 30, 40, 50, 60, 70, 80, 90, 95];
  const durations = [12, 15, 18, 20, 14, 16, 13, 17, 19, 21];
  const delays = [0, 1, 2, 3, 4, 2.5, 3.5, 1.5, 2.2, 3.2];
  const xOffsets = [5, -5, 8, -8, 10, -10, 7, -7, 3, -3];
  
  const sizeIndex = index % sizes.length;
  const posIndex = index % positions.length;
  const durIndex = index % durations.length;
  const delayIndex = index % delays.length;
  const xOffsetIndex = index % xOffsets.length;
  
  return {
    width: sizes[sizeIndex],
    height: sizes[sizeIndex],
    left: `${positions[posIndex]}%`,
    top: `${positions[(posIndex + 3) % positions.length]}%`,
    duration: durations[durIndex],
    delay: delays[delayIndex],
    xOffset: xOffsets[xOffsetIndex]
  };
};

const AboutPage = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll();
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isMounted, setIsMounted] = useState(false);

  // Track mouse position for hover effects - only on client side
  useEffect(() => {
    setIsMounted(true);
    
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  // Apple-like scroll-driven animations
  const headerOpacity = useTransform(scrollYProgress, [0, 0.1], [1, 0.2]);
  const headerScale = useTransform(scrollYProgress, [0, 0.1], [1, 0.95]);

  return (
    <div ref={containerRef} className="relative overflow-x-hidden">
      {/* Page Header with Breadcrumb */}
      <PageHeader 
        title="About Premium Infotech" 
        subtitle="Your trusted partner for innovative IT solutions that power business growth and transformation."
        pageName="About"
      />

      {/* Who We Are Section */}
      <section className="relative flex items-center overflow-hidden px-4 sm:px-6 pt-8 pb-4">
        <div className="container mx-auto px-4 py-12 mb-6 rounded-[2rem] relative overflow-hidden max-w-[1280px]">
          <div className="absolute inset-0 bg-gradient-to-r from-[rgb(97,224,0)]/10 to-[rgb(0,218,222)]/10"></div>
          {isMounted && (
            <motion.div 
              className="absolute inset-0"
              style={{
                background: `radial-gradient(circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(97, 224, 0, 0.15), transparent 60%)`,
              }}
            />
          )}
          
          <div className="flex flex-col md:flex-row gap-12 items-center relative z-10">
            <div className="md:w-1/2 overflow-hidden">
              <ParallaxSection direction="left" speed={0.05}>
                <div className="pl-4">
                  <RevealText direction="left">
                    <h2 className="text-3xl md:text-4xl font-bold mb-6 flex items-center">
                      <span className="mr-3 text-[#65D80D]">
                        <motion.div
                          animate={{ rotate: [0, 10, 0] }}
                          transition={{ 
                            duration: 5, 
                            repeat: Infinity, 
                            ease: "easeInOut" 
                          }}
                        >
                          <UserRound size={32} />
                        </motion.div>
                      </span>
                      Who We Are
                    </h2>
                    <p className="text-gray-600 mb-4 text-lg leading-relaxed">
                      Premium Infotech is a leading provider of comprehensive IT support services designed to help businesses leverage technology for growth and efficiency. With a team of experienced professionals, we deliver tailored solutions that address the unique challenges faced by organizations of all sizes.
                    </p>
                    <p className="text-gray-600 text-lg leading-relaxed">
                      Founded on the principles of reliability, innovation, and customer-centricity, we've established ourselves as a trusted partner for businesses looking to optimize their IT infrastructure and operations.
                    </p>
                  </RevealText>
                </div>
              </ParallaxSection>
            </div>
            
            <div className="w-full md:w-1/2 mt-8 md:mt-0">
              <ParallaxSection direction="right" speed={0.1}>
                {/* Simplified IT Help Desk & Support System Illustration */}
                <motion.div 
                  className="relative h-80 md:h-[400px] w-full rounded-2xl overflow-hidden shadow-xl bg-gradient-to-br from-[#111827]/90 to-[#2D3748]/90"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5 }}
                >
                  {/* Static Background Grid Pattern */}
                  <div className="absolute inset-0 opacity-10">
                    <div className="absolute inset-0 bg-grid-pattern"></div>
                  </div>
                  
                  {/* Central Help Desk Station - Simplified */}
                  <div 
                    className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-28 h-28 rounded-full bg-black/40 backdrop-blur-md border-2 border-[rgb(0,218,222)] flex items-center justify-center z-10"
                  >
                    <motion.div
                      animate={{ rotate: [0, 360] }}
                      transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                      className="absolute inset-3 rounded-full border border-dashed border-[rgb(97,224,0)]/30"
                    />
                    <Headphones size={36} className="text-[rgb(97,224,0)]" />
                  </div>
                  
                  {/* Static Computer Workstations */}
                  {Array.from({ length: 4 }).map((_, index) => {
                    const angle = (index / 4) * Math.PI * 2;
                    const distance = 110;
                    const x = Math.cos(angle) * distance;
                    const y = Math.sin(angle) * distance;
                    
                    return (
                      <div
                        key={`workstation-${index}`}
                        className="absolute w-20 h-16 flex flex-col items-center"
                        style={{
                          top: "50%",
                          left: "50%",
                          transform: `translate(-50%, -50%) translate(${x}px, ${y}px)`,
                        }}
                      >
                        {/* Monitor */}
                        <div 
                          className="w-14 h-10 bg-black/60 border border-[rgb(97,224,0)]/70 rounded-md flex items-center justify-center mb-1"
                        >
                          <div className="w-12 h-8 rounded bg-[rgb(97,224,0)]/10" />
                        </div>
                        
                        {/* Stand */}
                        <div className="w-1 h-2 bg-gray-500"></div>
                        
                        {/* Base */}
                        <div className="w-8 h-1 bg-gray-600 rounded-full"></div>
                      </div>
                    );
                  })}
                  
                  {/* Static Connection Lines */}
                  {Array.from({ length: 4 }).map((_, index) => {
                    const angle = (index / 4) * Math.PI * 2;
                    const length = 110;
                    
                    return (
                      <div
                        key={`connection-${index}`}
                        className="absolute top-1/2 left-1/2 h-[1px] origin-left z-0"
                        style={{
                          width: length,
                          backgroundColor: "rgba(0, 218, 222, 0.4)",
                          transform: `translate(-50%, -50%) rotate(${angle}rad)`,
                        }}
                      />
                    );
                  })}
                  
                  {/* Simplified Data Pulses - reduced to just 2 */}
                  {Array.from({ length: 2 }).map((_, index) => {
                    const angle = (index / 2) * Math.PI;
                    
                    return (
                      <motion.div
                        key={`pulse-${index}`}
                        className="absolute top-1/2 left-1/2 h-1 w-1 rounded-full bg-[rgb(97,224,0)] z-10"
                        animate={{
                          x: [0, Math.cos(angle) * 110],
                          y: [0, Math.sin(angle) * 110],
                          opacity: [1, 0],
                        }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          delay: index * 2,
                          ease: "linear",
                        }}
                      />
                    );
                  })}
                  
                  {/* Company Name Overlay - Simplified */}
                  <div
                    className="absolute bottom-6 left-1/2 transform -translate-x-1/2 text-center bg-black/50 backdrop-blur-md px-4 py-2 rounded-lg border border-[rgb(0,218,222)]"
                  >
                    <h3 className="text-lg font-bold text-[rgb(97,224,0)]">
                      Premium Infotech
                    </h3>
                    <p className="text-xs text-white">IT Help Desk & Support</p>
                  </div>
                </motion.div>
              </ParallaxSection>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision Section - made equal height */}
      <section className="py-8 relative overflow-hidden px-4 sm:px-6">
        <div className="container mx-auto px-4 py-6 mb-6 max-w-[1280px]">
          <div className="grid md:grid-cols-2 gap-10">
            <ParallaxSection direction="up" speed={0.15} className="pt-4 pb-4">
              <AnimatedBorder className="h-full shadow-sm border-2 border-[rgb(97,224,0)]/20">
                <div className="p-8 h-full flex flex-col">
                  <div className="flex items-center mb-4">
                    <motion.div
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.7 }}
                      className="p-3 gradient-bg rounded-full mr-4 flex-shrink-0"
                    >
                      <Target className="h-6 w-6 text-white" />
                    </motion.div>
                    <RevealText>
                      <h2 className="text-2xl md:text-3xl font-bold">Our Mission</h2>
                    </RevealText>
                  </div>
                  <RevealText delay={0.2} className="flex-grow">
                    <p className="text-gray-700 leading-relaxed">
                      To provide exceptional IT support and services that enable businesses to thrive in the digital landscape. We aim to simplify technology for our clients, allowing them to focus on their core operations while we handle their IT needs with expertise and dedication.
                    </p>
                  </RevealText>
                </div>
              </AnimatedBorder>
            </ParallaxSection>
            
            <ParallaxSection direction="up" speed={0.15} className="pt-4 pb-4">
              <AnimatedBorder className="h-full shadow-sm border-2 border-[rgb(97,224,0)]/20">
                <div className="p-8 h-full flex flex-col">
                  <div className="flex items-center mb-4">
                    <motion.div
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.7 }}
                      className="p-3 gradient-bg rounded-full mr-4 flex-shrink-0"
                    >
                      <Eye className="h-6 w-6 text-white" />
                    </motion.div>
                    <RevealText>
                      <h2 className="text-2xl md:text-3xl font-bold">Our Vision</h2>
                    </RevealText>
                  </div>
                  <RevealText delay={0.2} className="flex-grow">
                    <p className="text-gray-700 leading-relaxed">
                      To be the leading provider of innovative IT support services globally, recognized for our excellence, reliability, and commitment to driving business success through technology. We envision a world where businesses can harness the full potential of IT without the complexity and challenges.
                    </p>
                  </RevealText>
                </div>
              </AnimatedBorder>
            </ParallaxSection>
          </div>
        </div>
      </section>

      {/* Founder's Message - with dark background */}
      <section className="py-12 relative overflow-hidden px-4 sm:px-6">
        <div className="absolute inset-0 bg-gradient-to-br from-[#1B3C68] to-[#2a4a75]"></div>
        <motion.div 
          className="absolute inset-0"
          style={{
            backgroundImage: "radial-gradient(circle at 30% 20%, rgba(97, 224, 0, 0.2), transparent 40%), radial-gradient(circle at 70% 60%, rgba(0, 218, 222, 0.2), transparent 40%)",
          }}
        />
        {/* Circuit lines */}
        <div className="absolute inset-0 opacity-10 overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full bg-circuit-pattern"></div>
        </div>
        
        <div className="container mx-auto px-4 py-8 mb-6 max-w-[1280px] relative z-10">
          <RevealText className="text-center mb-12">
            <h2 className="text-3xl md:text-5xl font-bold text-white inline-block">
              Founder's <span className="bg-gradient-to-r from-[rgb(97,224,0)] to-[rgb(0,218,222)] bg-clip-text text-transparent">Message</span>
            </h2>
          </RevealText>
          
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20">
            <div className="relative">
              <MessageSquareQuote className="absolute -top-2 -left-2 h-10 w-10 text-[rgb(97,224,0)]/40" />
              <p className="text-white/90 text-lg leading-relaxed pl-6 md:pl-0">
                "Our journey began with a simple vision: to make technology work for businesses, not the other way around. At Premium Infotech, we believe that IT should be an enabler, not a barrier. For over a decade, we've been committed to delivering exceptional support and innovative solutions that help our clients navigate the digital landscape with confidence. As we continue to grow, our focus remains unwavering: to simplify technology and empower businesses to achieve their full potential."
              </p>
              <p className="text-white/90 text-lg leading-relaxed mt-4 pl-6 md:pl-0">
                "I'm incredibly proud of our team of dedicated professionals who share this passion for excellence and customer satisfaction. Together, we're building a future where technology serves as a catalyst for business success, and we're excited to partner with you on this journey."
              </p>
              <div className="flex justify-end mt-4">
                <div className="inline-flex items-center">
                  <div className="h-1 w-8 bg-gradient-to-r from-[rgb(97,224,0)] to-[rgb(0,218,222)] mr-2"></div>
                  <p className="text-[rgb(97,224,0)] font-medium">CEO & Founder</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-8 relative overflow-hidden px-4 sm:px-6">
        <div id="services" className="container mx-auto px-4 py-8 mb-6 max-w-[1280px]">
          <RevealText className="text-center mb-12">
            <h2 className="text-3xl md:text-5xl font-bold gradient-text inline-block">
              Our Services
            </h2>
          </RevealText>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <Headphones className="h-10 w-10" />,
                title: "Help Desk Support",
                description: "On-demand IT help for employees via chat, email, or call with tiered support for different complexity levels."
              },
              {
                icon: <Cloud className="h-10 w-10" />,
                title: "Cloud Services Support",
                description: "Managing cloud platforms including Microsoft 365, Google Workspace, AWS, and Azure with backup and migration assistance."
              },
              {
                icon: <Shield className="h-10 w-10" />,
                title: "Cybersecurity Monitoring",
                description: "Comprehensive threat detection, firewall setup, security audits, and employee training for security awareness."
              },
              {
                icon: <HardDrive className="h-10 w-10" />,
                title: "Data Backup & Recovery",
                description: "Setting up automated backup systems and efficient restoration of lost or corrupted data when needed."
              },
              {
                icon: <Smartphone className="h-10 w-10" />,
                title: "Device Management",
                description: "Remote management of all business devices with enforced security policies and timely updates."
              },
              {
                icon: <BarChart3 className="h-10 w-10" />,
                title: "IT Consulting & Planning",
                description: "Strategic advice on tech upgrades, migrations, infrastructure setup, and regulatory compliance."
              }
            ].map((service, index) => (
              <Animated3DCard 
                key={index} 
                className="backdrop-blur-md bg-white/60 h-full" 
                borderRadius={20}
                rotationIntensity={10}
              >
                <AnimatedBorder className="h-full">
                  <div className="p-6 h-full flex flex-col">
                    <motion.div
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      transition={{ duration: 0.2 }}
                      className="text-[#65D80D] mb-4"
                    >
                      {service.icon}
                    </motion.div>
                    <RevealText delay={index * 0.05} className="flex-grow">
                      <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                      <p className="text-gray-600">{service.description}</p>
                    </RevealText>
                  </div>
                </AnimatedBorder>
              </Animated3DCard>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section - MOVED to after services with thinner borders */}
      <ParallaxSection className="container mx-auto px-4 py-4 mb-6 max-w-[1280px]">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { number: "10+", label: "Years Experience" },
            { number: "200+", label: "Happy Clients" },
            { number: "24/7", label: "Support" },
            { number: "99.9%", label: "Uptime" },
          ].map((stat, index) => (
            <Animated3DCard 
              key={index} 
              className="backdrop-blur-sm bg-[rgb(97,224,0)]/10 rounded-xl" 
              borderRadius={16}
              rotationIntensity={5}
            >
              <div className="py-3 px-2 text-center">
                <RevealText delay={index * 0.1} direction="up">
                  <motion.p
                    initial={{ scale: 0.8 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ 
                      type: "spring", 
                      stiffness: 300, 
                      damping: 20, 
                      delay: index * 0.1 
                    }}
                    className="text-3xl md:text-4xl font-bold text-[#65D80D] mb-1"
                  >
                    {stat.number}
                  </motion.p>
                  <p className="text-sm text-gray-600">{stat.label}</p>
                </RevealText>
              </div>
            </Animated3DCard>
          ))}
        </div>
      </ParallaxSection>
    </div>
  );
};

export default AboutPage;
