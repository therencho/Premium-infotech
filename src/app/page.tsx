"use client";

import { useState, useEffect, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { 
  ArrowRight, 
  HardDrive, 
  Cloud, 
  Shield, 
  Code, 
  LineChart, 
  Headphones, 
  Check, 
  Users, 
  Clock, 
  Award, 
  ChevronRight, 
  Star,
  Plus,
  Smartphone,
  BarChart3,
  Network,
  User
} from "lucide-react";
import { RevealText } from "@/components/ui/reveal-text";
import { ParallaxSection } from "@/components/ui/parallax-section";
import { Animated3DCard } from "@/components/ui/animated-3d-card";
import { ClientOnlyTestimonials } from "@/components/ui/client-only-testimonials";
import { ReactNode } from "react";

// Creating a reusable animated border component for white boxes (copied from about page)
const AnimatedBorder = ({ children, className = "" }: { children: ReactNode; className?: string }) => {
  return (
    <div className={`relative rounded-2xl ${className}`}>
      {/* The animated border */}
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

export default function Home() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll();
  const rotation = useTransform(scrollYProgress, [0, 1], [0, 360]);
  const y = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    
    const handleMouseMove = (e: MouseEvent) => {
      if (containerRef.current) {
        const { left, top, width, height } = containerRef.current.getBoundingClientRect();
        const x = (e.clientX - left) / width - 0.5;
        const y = (e.clientY - top) / height - 0.5;
        setMousePosition({ x, y });
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const testimonials = [
    {
      quote: "Premium Infotech transformed our IT infrastructure, resulting in a 40% increase in operational efficiency and significant cost savings. Their team's expertise and dedication have made them an invaluable partner for our business.",
      name: "Sarah Johnson",
      designation: "CTO, Global Innovations"
    },
    {
      quote: "Working with Premium Infotech has been a game-changer for our company. Their cloud migration services were seamless, and their ongoing support has been exceptional. I highly recommend their services to any business looking to modernize their IT systems.",
      name: "Michael Chen",
      designation: "Operations Director, TechStart Inc."
    },
    {
      quote: "The cybersecurity solutions provided by Premium Infotech have given us peace of mind. Their proactive approach to threat detection and their quick response times have protected our business from several potential incidents.",
      name: "Amanda Wilson",
      designation: "Security Manager, DataSecure Ltd."
    }
  ];

  return (
    <div ref={containerRef} className="overflow-x-hidden min-h-screen relative">
      {/* Background decorative elements - Now handled in layout */}
      
      {/* Hero Section - Reimagined with 3D grid and tech elements */}
      <section className="relative min-h-[100vh] flex items-center overflow-hidden px-4 sm:px-6 pt-6 sm:pt-10 md:pt-0">
        {/* Tech Grid Background */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-[#0d1117] via-[#161c26] to-[#1B3C68]/80"></div>
          
          {/* Animated 3D Grid */}
          <div className="absolute inset-0 perspective-1000">
            <motion.div 
              className="absolute inset-0 bg-grid-3d opacity-20"
              animate={{
                backgroundPosition: ["0% 0%", "100% 100%"],
              }}
              transition={{
                duration: 20,
                repeat: Infinity,
                ease: "linear",
              }}
            />
          </div>
          
          {/* Floating Elements */}
          {isMounted && (
            <>
              {/* Server Stack */}
              <motion.div
                className="absolute bottom-[10%] left-[15%] w-20 h-32 bg-gradient-to-b from-[#1B3C68] to-[#0d1117] rounded-md flex flex-col overflow-hidden"
                initial={{ y: 100, opacity: 0 }}
                animate={{ y: 0, opacity: 0.7 }}
                transition={{ duration: 0.8, delay: 0.3 }}
              >
                {[...Array(5)].map((_, i) => (
                  <motion.div
                    key={`server-${i}`}
                    className="w-full h-5 mt-1 border-t border-[rgb(97,224,0)]/20 flex items-center px-2"
                    animate={{
                      borderColor: ["rgba(97,224,0,0.2)", "rgba(0,218,222,0.6)", "rgba(97,224,0,0.2)"],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      delay: i * 0.7,
                      ease: "easeInOut"
                    }}
                  >
                    <motion.div 
                      className="w-2 h-2 rounded-full bg-[rgb(97,224,0)]"
                      animate={{
                        opacity: [0.3, 1, 0.3],
                      }}
                      transition={{
                        duration: 1.5,
                        repeat: Infinity,
                        delay: i * 0.3,
                        repeatType: "reverse"
                      }}
                    />
                    <motion.div 
                      className="w-4 h-1 ml-1 bg-[rgb(0,218,222)]/60 rounded-full"
                      animate={{
                        width: ["16px", "8px", "16px"],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        delay: i * 0.2,
                      }}
                    />
                  </motion.div>
                ))}
              </motion.div>
              
              {/* Floating Orbs */}
              {[...Array(8)].map((_, i) => {
                const size = 8 + (i % 3) * 8;
                return (
                  <motion.div
                    key={`orb-${i}`}
                    className={`absolute rounded-full bg-gradient-to-br ${i % 2 === 0 ? 'from-[rgb(97,224,0)]/40 to-transparent' : 'from-[rgb(0,218,222)]/40 to-transparent'}`}
                    style={{
                      width: size,
                      height: size,
                      top: `${20 + (i * 8) % 60}%`,
                      left: `${5 + (i * 12) % 90}%`,
                    }}
                    animate={{
                      y: [0, -20, 0],
                      x: [0, i % 2 === 0 ? 15 : -15, 0],
                      opacity: [0.4, 0.8, 0.4],
                    }}
                    transition={{
                      duration: 5 + i,
                      repeat: Infinity,
                      repeatType: "reverse",
                      ease: "easeInOut",
                    }}
                  />
                );
              })}
            </>
          )}
        </div>
        
        <div className="container mx-auto px-4 z-10">
          <div className="grid md:grid-cols-6 gap-8 lg:gap-4 items-center">
            <div className="md:col-span-4 lg:col-span-3 order-1 lg:order-1">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1 }}
                className="max-w-2xl"
              >
                <motion.div 
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.5 }}
                  className="inline-flex items-center px-4 py-1.5 rounded-full bg-gradient-to-r from-[rgb(97,224,0)]/10 to-[rgb(0,218,222)]/10 backdrop-blur-sm border border-[rgb(97,224,0)]/20 mb-6"
                >
                  <motion.div 
                    animate={{ scale: [1, 1.3, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className="w-2 h-2 rounded-full bg-[rgb(97,224,0)] mr-2"
                  />
                  <span className="text-[rgb(97,224,0)] caption">Premium IT Services</span>
                </motion.div>
                
                <div className="relative mb-8">
                  {["Transforming", "Business", "Through", "Digital", "Innovation"].map((word, i) => (
                    <motion.div
                      key={word}
                      initial={{ y: 40, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ duration: 0.8, delay: 0.1 * i }}
                      className={`${i === 1 || i === 4 ? 'text-transparent bg-clip-text bg-gradient-to-r from-[rgb(97,224,0)] to-[rgb(0,218,222)]' : 'text-white'} heading-1 inline-block mr-4 mb-2`}
                    >
                      {word}
                    </motion.div>
                  ))}
                </div>
                
                <motion.p
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.6 }}
                  className="body-large text-gray-300 mb-8 max-w-xl"
                >
                  Comprehensive enterprise IT solutions designed to optimize your operations, 
                  enhance security, and accelerate growth in today's digital landscape.
                </motion.p>
                
                <motion.div
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.8 }}
                  className="flex flex-col sm:flex-row gap-4 mt-8"
                >
                  <Link href="/contact">
                    <motion.button 
                      whileHover={{ scale: 1.03, boxShadow: "0 0 15px rgba(97, 224, 0, 0.5)" }}
                      whileTap={{ scale: 0.98 }}
                      className="relative inline-flex items-center justify-center px-6 py-3 overflow-hidden font-medium transition-all bg-gradient-to-r from-[rgb(97,224,0)] to-[rgb(0,218,222)] rounded-lg text-white shadow-lg group"
                    >
                      <span className="relative flex items-center">
                        Schedule a Consultation
                        <motion.div
                          animate={{ x: [0, 5, 0] }}
                          transition={{ duration: 1.5, repeat: Infinity }}
                        >
                          <ArrowRight className="ml-2 h-4 w-4" />
                        </motion.div>
                      </span>
                    </motion.button>
                  </Link>
                  
                  <Link href="/services">
                    <motion.button 
                      whileHover={{ scale: 1.03 }}
                      whileTap={{ scale: 0.98 }}
                      className="relative inline-flex items-center justify-center px-6 py-3 overflow-hidden font-medium transition-all border border-[rgb(97,224,0)]/30 rounded-lg text-[rgb(97,224,0)] hover:bg-[rgb(97,224,0)]/5"
                    >
                      <span className="relative flex items-center">
                        Explore Services
                      </span>
                    </motion.button>
                  </Link>
                </motion.div>
              </motion.div>
            </div>
            
            <div className="md:col-span-2 lg:col-span-3 order-2 lg:order-2 relative mt-10 md:mt-10 lg:mt-0">
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="relative"
              >
                {/* Redesigned Support Dashboard */}
                <div className="relative w-full md:w-[110%] lg:w-full h-[300px] md:h-[450px]">
                  <motion.div 
                    animate={{ 
                      y: [0, -5, 0],
                    }}
                    transition={{ 
                      duration: 4, 
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                    className="w-full h-full relative"
                  >
                    {/* Main Dashboard Panel */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-[280px] md:h-[350px] bg-gradient-to-r from-[#1B3C68]/95 to-[#2a4a75]/95 rounded-xl overflow-hidden shadow-2xl border border-[rgb(97,224,0)]/20">
                      {/* Dashboard Header */}
                      <div className="bg-[#111827]/90 py-3 px-4 flex justify-between items-center border-b border-[rgb(97,224,0)]/20">
                        <div className="flex items-center">
                          <div className="h-3 w-3 rounded-full bg-[rgb(97,224,0)] mr-2"></div>
                          <span className="text-white text-xs font-medium tracking-wider">PREMIUM INFOTECH LLC GLOBAL SUPPORT</span>
                        </div>
                        <div className="flex items-center">
                          <motion.div 
                            animate={{ opacity: [0.5, 1, 0.5] }}
                            transition={{ duration: 2, repeat: Infinity }}
                            className="h-2 w-2 rounded-full bg-[rgb(97,224,0)] mr-1"
                          />
                          <span className="text-[rgb(97,224,0)] text-xs">LIVE</span>
                        </div>
                      </div>
                      
                      {/* Dashboard Content - Redesigned with stats left, messages right */}
                      <div className="p-4 h-[calc(100%-48px)]">
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 h-full">
                          {/* Stats Column - Left side on desktop, top on mobile */}
                          <div className="md:col-span-1 h-full">
                            <div className="h-full bg-black/20 backdrop-blur-sm rounded-lg p-3 border border-[rgb(97,224,0)]/10 flex flex-col">
                              <div className="text-white text-xs mb-3 flex justify-between">
                                <span>SUPPORT STATUS</span>
                                <motion.span 
                                  animate={{ color: ['#61E000', '#00DADE', '#61E000'] }}
                                  transition={{ duration: 3, repeat: Infinity }}
                                >
                                  ACTIVE
                                </motion.span>
                              </div>
                              
                              {/* Support Metrics - Stacked vertically */}
                              <div className="grid grid-cols-2 gap-3 mb-auto">
                                {[
                                  { label: "Response Time", value: "2m", color: "rgb(97,224,0)" },
                                  { label: "Agents Online", value: "24", color: "rgb(0,218,222)" },
                                  { label: "Open Tickets", value: "12", color: "rgb(97,224,0)" },
                                  { label: "Uptime", value: "99.9%", color: "rgb(0,218,222)" }
                                ].map((metric, i) => (
                                  <div key={i} className="mb-2">
                                    <div className="flex flex-col">
                                      <span className="text-gray-300 text-xs">{metric.label}</span>
                                      <span style={{ color: metric.color }} className="text-lg font-bold">{metric.value}</span>
                                    </div>
                                  </div>
                                ))}
                              </div>
                              
                              {/* Status Bar */}
                              <div className="flex items-center mt-auto pt-2 border-t border-white/10">
                                <motion.div 
                                  animate={{ scale: [1, 1.3, 1] }}
                                  transition={{ duration: 2, repeat: Infinity }}
                                  className="w-1.5 h-1.5 rounded-full bg-[rgb(97,224,0)] mr-1.5"
                                />
                                <span className="text-white text-xs">24/7 SUPPORT</span>
                              </div>
                            </div>
                          </div>
                          
                          {/* Chat Column - Right side on desktop, bottom on mobile */}
                          <div className="md:col-span-2 h-full">
                            <div className="h-full bg-black/20 backdrop-blur-sm rounded-lg p-3 border border-[rgb(97,224,0)]/10 flex flex-col">
                              <div className="text-white text-xs mb-3 flex justify-between items-center">
                                <span className="px-2 py-1 bg-[#1B3C68]/60 rounded-full">LIVE SUPPORT CHAT</span>
                                <span className="text-[rgb(0,218,222)]">3 MINUTES AGO</span>
                              </div>
                              
                              {/* Support Chat Interface */}
                              <div className="flex-grow overflow-auto">
                                <div className="flex flex-col gap-2">
                                  <div className="flex items-start gap-2">
                                    <div className="w-6 h-6 rounded-full bg-[#1B3C68] flex items-center justify-center">
                                      <Users className="h-3 w-3 text-white" />
                                    </div>
                                    <div className="bg-[#1B3C68]/60 rounded-lg rounded-tl-none p-2 max-w-[80%]">
                                      <p className="text-white text-xs">How can I help you with your IT support needs today?</p>
                                    </div>
                                  </div>
                                  
                                  <div className="flex items-start gap-2 justify-end">
                                    <div className="bg-gradient-to-r from-[rgb(97,224,0)]/70 to-[rgb(0,218,222)]/70 rounded-lg rounded-tr-none p-2 max-w-[80%]">
                                      <p className="text-white text-xs">We need help with cybersecurity planning.</p>
                                    </div>
                                    <div className="w-6 h-6 rounded-full bg-white/10 flex items-center justify-center">
                                      <User className="h-3 w-3 text-white" />
                                    </div>
                                  </div>
                                  
                                  <div className="flex items-start gap-2">
                                    <div className="w-6 h-6 rounded-full bg-[#1B3C68] flex items-center justify-center">
                                      <Users className="h-3 w-3 text-white" />
                                    </div>
                                    <div className="bg-[#1B3C68]/60 rounded-lg rounded-tl-none p-2 max-w-[80%]">
                                      <p className="text-white text-xs">I'd be happy to discuss our cybersecurity solutions and create a custom plan for your organization.</p>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              
                              {/* Input Field */}
                              <div className="flex mt-3 gap-2 items-center">
                                <div className="flex-grow bg-black/30 rounded-full px-3 py-1.5 text-white/50 text-xs">
                                  Type your message...
                                </div>
                                <div className="w-7 h-7 rounded-full bg-gradient-to-r from-[rgb(97,224,0)] to-[rgb(0,218,222)] flex items-center justify-center">
                                  <ArrowRight className="h-3.5 w-3.5 text-white" />
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
        
        {/* Bottom Curve */}
        <div className="absolute bottom-0 left-0 right-0 h-20 overflow-hidden">
          <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="absolute bottom-0 w-full h-full">
            <motion.path 
              d="M0,0 C150,90 350,0 500,100 C650,190 750,100 900,50 C1050,10 1150,40 1200,80 L1200,120 L0,120 Z" 
              className="fill-[#f9fafb] opacity-5"
              animate={{
                d: [
                  "M0,0 C150,90 350,0 500,100 C650,190 750,100 900,50 C1050,10 1150,40 1200,80 L1200,120 L0,120 Z",
                  "M0,0 C150,40 350,90 500,60 C650,30 750,70 900,110 C1050,140 1150,90 1200,70 L1200,120 L0,120 Z",
                  "M0,0 C150,90 350,0 500,100 C650,190 750,100 900,50 C1050,10 1150,40 1200,80 L1200,120 L0,120 Z",
                ],
              }}
              transition={{
                duration: 20,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          </svg>
        </div>
      </section>
      
      {/* Services Section - Copied from About Page */}
      <section className="py-20 relative light-bg px-4 sm:px-6">
        <div id="services" className="container mx-auto px-4 py-16 max-w-[1280px]">
          <RevealText className="text-center mb-12">
            <h2 className="heading-2 text-[#1B3C68] mb-4">
              Powering Business <span className="bg-gradient-to-r from-[rgb(97,224,0)] to-[rgb(0,218,222)] bg-clip-text text-transparent">Excellence</span>
            </h2>
            <p className="body-large max-w-2xl mx-auto">
              Comprehensive IT solutions designed to optimize operations, enhance security, and accelerate your growth
            </p>
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
                      <h3 className="subheading mb-3">{service.title}</h3>
                      <p className="body">{service.description}</p>
                    </RevealText>
                  </div>
                </AnimatedBorder>
              </Animated3DCard>
            ))}
          </div>
        </div>
      </section>
      
      {/* Call To Action - Moved to appear after services */}
      <section className="py-20 relative overflow-hidden px-4 sm:px-6">
        <div className="absolute inset-0 bg-gradient-to-br from-[#1B3C68] to-[#2a4a75]"></div>
        <motion.div 
          className="absolute inset-0"
          style={{
            backgroundImage: "radial-gradient(circle at 30% 20%, rgba(97, 224, 0, 0.2), transparent 40%), radial-gradient(circle at 70% 60%, rgba(0, 218, 222, 0.2), transparent 40%)",
          }}
        />
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-5xl mx-auto bg-white/10 backdrop-blur-md rounded-2xl p-8 md:p-12 border border-white/20 shadow-xl">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <RevealText>
                  <h2 className="heading-2 text-white mb-4">
                    Ready to Transform Your IT Infrastructure?
                  </h2>
                </RevealText>
                <RevealText delay={0.2}>
                  <p className="body-large text-white mb-8">
                    Contact us today for a free consultation and discover how our IT solutions can drive your business forward.
                  </p>
                </RevealText>
              </div>
              
              <div className="relative">
                <div className="bg-[#1B3C68]/90 rounded-xl p-6 border border-white/30 backdrop-blur-sm">
                  <div className="flex items-center space-x-2 mb-6">
                    {[1, 2, 3].map((i) => (
                      <motion.div 
                        key={i}
                        animate={{ 
                          y: [0, -8, 0] 
                        }}
                        transition={{ 
                          duration: 1.5, 
                          repeat: Infinity, 
                          repeatType: "reverse",
                          delay: i * 0.2,
                          ease: "easeInOut"
                        }}
                        className="w-3 h-3 rounded-full bg-[rgb(97,224,0)]"
                      />
                    ))}
                    <span className="text-white ml-2 body-small font-medium">Premium Infotech is responding...</span>
                  </div>
                  
                  <div className="space-y-4">
                    <div className="bg-[#2a4a75]/90 rounded-lg p-3 max-w-xs border border-white/30">
                      <a href="https://Therencho.com" target="_blank" rel="noopener noreferrer" className="inline-block mb-1">
                        <span className="text-xs text-white font-medium hover:text-[rgb(97,224,0)] transition-colors">The Rencho</span>
                      </a>
                      <p className="body-small text-white font-medium">I'm interested in improving our company's IT security. What services do you offer?</p>
                    </div>
                    
                    <div className="bg-[rgb(97,224,0)]/70 rounded-lg p-3 ml-auto max-w-xs">
                      <p className="body-small text-white font-medium">We offer comprehensive cybersecurity solutions including threat monitoring, penetration testing, and employee training.</p>
                    </div>
                    
                    <div className="bg-[rgb(97,224,0)]/70 rounded-lg p-3 ml-auto max-w-xs">
                      <p className="body-small text-white font-medium">Our team can perform a security assessment to identify vulnerabilities and create a protection plan tailored to your needs.</p>
                    </div>
                    
                    <div className="flex justify-end">
                      <Link href="/contact">
                        <div className="caption inline-flex items-center text-white bg-[#2a4a75]/90 px-3 py-1.5 rounded-lg font-medium">
                          Contact Us <ChevronRight className="ml-1 h-3 w-3" />
                        </div>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Industry Solutions Section */}
      <section className="py-16 relative overflow-hidden light-bg px-4 sm:px-6">
        <div className="container mx-auto px-4 relative z-10 max-w-[1280px]">
          <RevealText className="text-center mb-10">
            <h2 className="heading-2 text-[#1B3C68] mb-4">
              Tailored IT Solutions for <span className="bg-gradient-to-r from-[rgb(97,224,0)] to-[rgb(0,218,222)] bg-clip-text text-transparent">Every Industry</span>
            </h2>
          </RevealText>
          
          <div className="grid md:grid-cols-4 gap-4 max-w-5xl mx-auto">
            {[
              {
                industry: "Small & Medium Businesses",
                focus: "SMBs",
                description: "Cost-effective scalable IT solutions for growing businesses with limited budgets.",
                icon: <Users className="h-5 w-5 text-white" />
              },
              {
                industry: "Healthcare",
                focus: "HIPAA Compliance",
                description: "Secure systems with privacy controls to protect sensitive medical information.",
                icon: <Shield className="h-5 w-5 text-white" />
              },
              {
                industry: "Legal Firms",
                focus: "Data Security", 
                description: "Advanced encryption and secure document management for client confidentiality.",
                icon: <LineChart className="h-5 w-5 text-white" />
              },
              {
                industry: "Financial Services",
                focus: "Risk Management",
                description: "Real-time threat monitoring and compliance management for financial data.",
                icon: <HardDrive className="h-5 w-5 text-white" />
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
                className="flex flex-col"
              >
                <div className={`h-full bg-white/60 backdrop-blur-sm rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-all duration-300 border border-[rgb(97,224,0)]/20 p-0.5`}>
                  <div className={`h-2 w-full ${index % 2 === 0 ? 'bg-[rgb(97,224,0)]' : 'bg-[rgb(0,218,222)]'}`}></div>
                  <div className="p-6">
                    <div className="flex items-center mb-4">
                      <div className={`w-10 h-10 rounded-lg ${index % 2 === 0 ? 'bg-[rgb(97,224,0)]' : 'bg-[rgb(0,218,222)]'} flex items-center justify-center mr-3`}>
                        {item.icon}
                      </div>
                      <div>
                        <h3 className="subheading text-[#1B3C68]">{item.industry}</h3>
                        <p className={`caption ${index % 2 === 0 ? 'text-[rgb(97,224,0)]' : 'text-[rgb(0,218,222)]'}`}>
                          {item.focus}
                        </p>
                      </div>
                    </div>
                    <p className="body-small mt-3">
                      {item.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
          
          <div className="flex justify-center mt-8">
            <Link href="/services">
              <motion.button 
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
                className="relative inline-flex items-center justify-center px-5 py-2 overflow-hidden font-medium transition-all bg-gradient-to-r from-[rgb(97,224,0)] to-[rgb(0,218,222)] rounded-lg text-white shadow-md group"
              >
                <span className="relative flex items-center body-small text-white">
                  View All Industry Solutions
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
                </span>
              </motion.button>
            </Link>
          </div>
        </div>
      </section>
      
      {/* About Us Highlight */}
      <section className="py-20 relative overflow-hidden bg-[rgb(97,224,0)]/65 px-4 sm:px-6">
        <div className="container mx-auto px-4 relative z-10 max-w-[1280px]">
          <div className="grid md:grid-cols-5 gap-8 items-center">
            <div className="md:col-span-2">
              <ParallaxSection direction="right" speed={0.05}>
                <div className="relative p-4">
                  <motion.div
                    className="absolute -inset-4 rounded-2xl bg-white/20 opacity-50 blur-xl"
                    animate={{
                      backgroundPosition: ['0% 0%', '100% 100%'],
                    }}
                    transition={{
                      duration: 8,
                      repeat: Infinity,
                      repeatType: 'reverse',
                      ease: 'linear',
                    }}
                  />
                  <div className="relative bg-white rounded-2xl shadow-xl p-8">
                    {/* Stats */}
                    <div className="grid grid-cols-2 gap-6 mb-8">
                      {[
                        { value: "10+", label: "Years Experience" },
                        { value: "200+", label: "Happy Clients" },
                        { value: "24/7", label: "Support" },
                        { value: "99.9%", label: "Uptime" }
                      ].map((stat, i) => (
                        <div key={i} className="text-center">
                          <motion.div
                            initial={{ scale: 0.8, opacity: 0 }}
                            whileInView={{ scale: 1, opacity: 1 }}
                            transition={{ duration: 0.5, delay: i * 0.1 }}
                            viewport={{ once: true }}
                            className="heading-3 text-[rgb(97,224,0)] mb-1"
                          >
                            {stat.value}
                          </motion.div>
                          <div className="caption text-gray-600">{stat.label}</div>
                        </div>
                      ))}
                    </div>
                    
                    {/* Mission snippet */}
                    <div className="p-4 bg-[#1B3C68]/5 rounded-xl">
                      <div className="flex items-center mb-2">
                        <div className="w-2 h-2 rounded-full bg-[rgb(97,224,0)] mr-2"></div>
                        <h4 className="caption font-semibold text-[#1B3C68]">Our Mission</h4>
                      </div>
                      <p className="body-small">
                        To provide exceptional IT support and services that enable businesses to thrive in the digital landscape.
                      </p>
                    </div>
                  </div>
                </div>
              </ParallaxSection>
            </div>
            
            <div className="md:col-span-3">
              <RevealText>
                <div className="tag inline-block mb-6 px-4 py-1.5 rounded-full bg-white/30 text-[#1B3C68]">
                  About Premium Infotech
                </div>
              </RevealText>
              
              <RevealText>
                <h2 className="heading-2 text-[#1B3C68] mb-6">
                  Your Trusted Partner for <span className="text-white">Innovative IT Solutions</span>
                </h2>
              </RevealText>
              
              <RevealText>
                <p className="body-large mb-6 text-[#1B3C68]">
                  Premium Infotech is a leading provider of comprehensive IT support services designed to help businesses leverage technology for growth and efficiency. With a team of experienced professionals, we deliver tailored solutions that address the unique challenges faced by organizations of all sizes.
                </p>
              </RevealText>
              
              <RevealText>
                <p className="body-large mb-8 text-[#1B3C68]">
                  Founded on the principles of reliability, innovation, and customer-centricity, we've established ourselves as a trusted partner for businesses looking to optimize their IT infrastructure and operations.
                </p>
              </RevealText>
              
              <RevealText>
                <Link href="/about">
                  <motion.button 
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.98 }}
                    className="relative inline-flex items-center justify-center px-6 py-3 overflow-hidden font-medium transition-all bg-white border border-[#1B3C68] rounded-lg text-[#1B3C68] shadow-md hover:bg-[#1B3C68] hover:text-white group"
                  >
                    <span className="relative flex items-center">
                      Learn More About Us
                      <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
                    </span>
                  </motion.button>
                </Link>
              </RevealText>
            </div>
          </div>
        </div>
      </section>
      
      {/* Testimonials */}
      <section className="py-20 relative light-bg px-4 sm:px-6">
        <div className="container mx-auto px-4 relative z-10 max-w-[1280px]">
          <RevealText className="text-center mb-8">
            <div className="flex items-center justify-center mb-2">
              <Star className="h-5 w-5 text-[rgb(97,224,0)] mr-1" fill="rgb(97,224,0)" />
              <Star className="h-5 w-5 text-[rgb(97,224,0)] mr-1" fill="rgb(97,224,0)" />
              <Star className="h-5 w-5 text-[rgb(97,224,0)] mr-1" fill="rgb(97,224,0)" />
              <Star className="h-5 w-5 text-[rgb(97,224,0)] mr-1" fill="rgb(97,224,0)" />
              <Star className="h-5 w-5 text-[rgb(97,224,0)]" fill="rgb(97,224,0)" />
            </div>
            <h2 className="heading-2 text-[#1B3C68] mb-4">
              What Our Clients Say
            </h2>
            <p className="body-large max-w-2xl mx-auto">
              Hear from businesses that have transformed their IT operations with our support
            </p>
          </RevealText>
          
          <ClientOnlyTestimonials testimonials={testimonials} autoplay={true} />
        </div>
      </section>
      
      {/* FAQ Section */}
      <section className="py-20 relative overflow-hidden px-4 sm:px-6">
        <div className="absolute inset-0 bg-gradient-to-br from-[#1B3C68] to-[#2a4a75]"></div>
        <motion.div 
          className="absolute inset-0"
          style={{
            backgroundImage: "radial-gradient(circle at 30% 20%, rgba(97, 224, 0, 0.1), transparent 40%), radial-gradient(circle at 70% 60%, rgba(0, 218, 222, 0.1), transparent 40%)",
          }}
        />
        
        <div className="container mx-auto px-4 relative z-10">
          <RevealText className="text-center mb-16">
            <h2 className="heading-2 text-white mb-4">
              Frequently Asked <span className="bg-gradient-to-r from-[rgb(97,224,0)] to-[rgb(0,218,222)] bg-clip-text text-transparent">Questions</span>
            </h2>
            <p className="body-large text-white/80 max-w-2xl mx-auto">
              Get answers to common questions about our IT services and solutions
            </p>
          </RevealText>
          
          <div className="max-w-4xl mx-auto">
            {[
              {
                question: "What IT services do you offer?",
                answer: "We provide a comprehensive range of IT services including cloud computing, cybersecurity, IT infrastructure management, help desk support, software development, and strategic IT consulting. Our solutions are tailored to meet the specific needs of your business."
              },
              {
                question: "How quickly can you respond to IT emergencies?",
                answer: "We offer 24/7 emergency support with guaranteed response times based on your service level agreement. Critical issues typically receive a response within 15-30 minutes, with technicians ready to resolve your issue promptly."
              },
              {
                question: "Do you work with businesses of all sizes?",
                answer: "Yes, we work with organizations of all sizes, from small businesses to large enterprises. We tailor our services and solutions to match your specific requirements and budget constraints, ensuring you get the IT support that's right for your business."
              },
              {
                question: "How do you ensure the security of our data?",
                answer: "We implement multi-layered security approaches including advanced firewalls, intrusion detection systems, regular security audits, employee training, and data encryption. Our security protocols are regularly updated to address emerging threats and comply with industry standards."
              },
              {
                question: "What is your approach to cloud migration?",
                answer: "Our cloud migration process involves thorough assessment of your current infrastructure, designing a migration strategy that minimizes disruption, implementing the migration in planned phases, and providing ongoing support post-migration. We ensure your business operations continue smoothly throughout the transition."
              }
            ].map((faq, i) => (
              <ParallaxSection direction="up" speed={0.1} key={i}>
                <motion.div 
                  className="mb-6 bg-white/10 backdrop-blur-sm rounded-xl overflow-hidden border border-white/10"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  viewport={{ once: true }}
                >
                  <motion.div
                    className="p-6"
                    initial={{ height: "auto" }}
                    whileHover={{ backgroundColor: "rgba(255, 255, 255, 0.05)" }}
                  >
                    <div className="flex justify-between items-center">
                      <h3 className="subheading text-white">{faq.question}</h3>
                      <div className="w-8 h-8 rounded-full bg-gradient-to-r from-[rgb(97,224,0)] to-[rgb(0,218,222)] flex items-center justify-center">
                        <Plus className="h-4 w-4 text-white" />
                      </div>
                    </div>
                    
                    <div className="mt-4 body text-white">
                      {faq.answer}
                    </div>
                  </motion.div>
                </motion.div>
              </ParallaxSection>
            ))}
            
            <RevealText delay={0.6} className="text-center mt-12">
              <Link href="/contact">
                <motion.button 
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.98 }}
                  className="relative inline-flex items-center justify-center px-6 py-3 overflow-hidden font-medium bg-gradient-to-r from-[rgb(97,224,0)] to-[rgb(0,218,222)] rounded-lg text-white shadow-lg group"
                >
                  <span className="relative flex items-center">
                    Have More Questions? Contact Us
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
                  </span>
                </motion.button>
              </Link>
            </RevealText>
          </div>
        </div>
      </section>
      
      {/* Client Success Stats */}
      <section className="py-20 relative overflow-hidden light-bg px-4 sm:px-6">
        <div className="container mx-auto px-4 relative z-10 max-w-[1280px]">
          <RevealText className="text-center mb-16">
            <h2 className="heading-2 text-[#1B3C68] mb-4">
              Client Success <span className="bg-gradient-to-r from-[rgb(97,224,0)] to-[rgb(0,218,222)] bg-clip-text text-transparent">Metrics</span>
            </h2>
            <p className="body-large max-w-2xl mx-auto">
              Measurable results that showcase our impact across industries
            </p>
          </RevealText>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                client: "Global Financial Services",
                title: "Cloud Migration & Security",
                metric: "40%",
                result: "reduction in operational costs",
                bgColor: "from-blue-500/20 to-purple-500/20",
                icon: <Cloud className="h-6 w-6 text-white" />
              },
              {
                client: "Healthcare Provider Network",
                title: "IT Infrastructure Upgrade",
                metric: "99.99%",
                result: "system uptime achieved",
                bgColor: "from-[rgb(97,224,0)]/20 to-emerald-500/20",
                icon: <HardDrive className="h-6 w-6 text-white" />
              },
              {
                client: "E-commerce Platform",
                title: "Cybersecurity Implementation",
                metric: "Zero",
                result: "security breaches in 3+ years",
                bgColor: "from-amber-500/20 to-red-500/20",
                icon: <Shield className="h-6 w-6 text-white" />
              }
            ].map((study, i) => (
              <ParallaxSection direction="up" speed={0.1} key={i}>
                <Animated3DCard
                  className="h-full overflow-hidden"
                  rotationIntensity={10}
                  glareIntensity={0.15}
                >
                  <div className="p-1">
                    <div className={`h-full bg-gradient-to-br ${study.bgColor} p-6 rounded-xl hover:shadow-lg transition-shadow duration-300`}>
                      <div className="flex justify-between items-start mb-6">
                        <div>
                          <span className="caption inline-block px-3 py-1 bg-white/20 rounded-full backdrop-blur-sm mb-2">
                            {study.client}
                          </span>
                          <h3 className="subheading text-[#1B3C68] mb-1">{study.title}</h3>
                        </div>
                        <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-[rgb(97,224,0)] to-[rgb(0,218,222)] flex items-center justify-center">
                          {study.icon}
                        </div>
                      </div>
                      
                      <div>
                        <div className="heading-3 text-[#1B3C68]">{study.metric}</div>
                        <div className="body">{study.result}</div>
                      </div>
                    </div>
                  </div>
                </Animated3DCard>
              </ParallaxSection>
            ))}
          </div>
        </div>
      </section>
      
      <style jsx global>{`
        .bg-circuit-pattern {
          background-image: url('/images/circuit-pattern.svg');
          background-repeat: repeat;
          background-size: 400px;
        }
        
        .bg-world-map {
          background-image: url('/images/world-map.svg');
          background-repeat: no-repeat;
          background-size: contain;
          opacity: 0.3;
        }
        
        .gradient-text {
          background: linear-gradient(to right, rgb(97, 224, 0), rgb(0, 218, 222));
          -webkit-background-clip: text;
          background-clip: text;
          color: transparent;
        }
        
        .gradient-bg {
          background: linear-gradient(to right, rgb(97, 224, 0), rgb(0, 218, 222));
        }
      `}</style>
    </div>
  );
}
