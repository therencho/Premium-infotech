"use client";

import { motion } from "framer-motion";
import { 
  Headphones, 
  Cloud, 
  Shield, 
  HardDrive, 
  Smartphone,
  BarChart3,
  Network,
  Code,
  Users,
  Clock,
  CheckCircle,
  Server,
  ArrowRight
} from "lucide-react";
import Link from "next/link";
import { RevealText } from "@/components/ui/reveal-text";
import { ParallaxSection } from "@/components/ui/parallax-section";
import { Animated3DCard } from "@/components/ui/animated-3d-card";
import { ReactNode } from "react";
import { PageHeader } from "@/components/ui/page-header";

// Creating a reusable animated border component for white boxes
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

// Feature list component for service details
const FeatureList = ({ features }: { features: string[] }) => (
  <div className="space-y-2 mt-4">
    {features.map((feature, index) => (
      <div key={index} className="flex items-start">
        <CheckCircle className="h-5 w-5 text-[rgb(97,224,0)] mr-2 shrink-0 mt-0.5" />
        <p className="body-small">{feature}</p>
      </div>
    ))}
  </div>
);

export default function Services() {
  // Main services data
  const services = [
    {
      icon: <Headphones className="h-10 w-10" />,
      title: "Help Desk Support",
      description: "On-demand IT assistance whenever your team needs it. Our help desk provides immediate support via chat, email, or phone calls.",
      features: [
        "24/7 technical support for critical issues",
        "Multi-channel support including phone, email, and live chat",
        "Tiered support system for efficient problem resolution",
        "Detailed documentation and knowledge base access",
        "Monthly support analytics and reporting"
      ]
    },
    {
      icon: <Cloud className="h-10 w-10" />,
      title: "Cloud Services Support",
      description: "Comprehensive management of your cloud platforms including Microsoft 365, Google Workspace, AWS, and Azure environments.",
      features: [
        "Cloud migration planning and implementation",
        "SaaS, PaaS, and IaaS solutions configuration",
        "Robust backup and disaster recovery for cloud services",
        "Cloud security management and monitoring",
        "Cost optimization and resource management"
      ]
    },
    {
      icon: <Shield className="h-10 w-10" />,
      title: "Cybersecurity Monitoring",
      description: "Proactive threat detection and response to protect your data and systems from evolving cyber threats and vulnerabilities.",
      features: [
        "24/7 security monitoring and threat detection",
        "Vulnerability assessments and penetration testing",
        "Security policy development and implementation",
        "End-user security awareness training",
        "Incident response planning and execution"
      ]
    },
    {
      icon: <HardDrive className="h-10 w-10" />,
      title: "Data Backup & Recovery",
      description: "Reliable data protection solutions ensuring your critical business information is secured and recoverable when needed.",
      features: [
        "Automated backup scheduling and management",
        "Secure on-site and cloud-based backup solutions",
        "Point-in-time recovery capabilities",
        "Regular backup verification and testing",
        "Data retention policy management"
      ]
    },
    {
      icon: <Smartphone className="h-10 w-10" />,
      title: "Device Management",
      description: "Centralized management of all business devices with security policies, software deployment, and remote support.",
      features: [
        "Remote device monitoring and management",
        "Software deployment and update management",
        "Device security policy enforcement",
        "Mobile device management (MDM) solutions",
        "Asset tracking and lifecycle management"
      ]
    },
    {
      icon: <BarChart3 className="h-10 w-10" />,
      title: "IT Consulting & Planning",
      description: "Strategic advice on technology investments, infrastructure planning, and digital transformation initiatives.",
      features: [
        "Technology roadmap development",
        "IT budget planning and optimization",
        "Digital transformation strategy",
        "Vendor management and procurement assistance",
        "Regulatory compliance guidance"
      ]
    },
    {
      icon: <Network className="h-10 w-10" />,
      title: "Network Infrastructure",
      description: "Design, implementation, and management of secure, reliable network infrastructure for your business operations.",
      features: [
        "Network design and architecture planning",
        "Wired and wireless network implementation",
        "Network security and firewall management",
        "Performance monitoring and optimization",
        "VPN and remote access solutions"
      ]
    },
    {
      icon: <Server className="h-10 w-10" />,
      title: "Server Management",
      description: "Comprehensive server administration, monitoring, and maintenance to ensure optimal performance and reliability.",
      features: [
        "Server setup and configuration",
        "Performance monitoring and optimization",
        "Security patching and updates",
        "Virtualization solutions",
        "Capacity planning and scaling"
      ]
    }
  ];

  // Industry-specific solutions
  const industrySolutions = [
    {
      industry: "Small & Medium Businesses",
      focus: "Scalable IT Solutions",
      description: "Cost-effective IT services that grow with your business, providing enterprise-grade technology on a budget that works for SMBs.",
      icon: <Users className="h-6 w-6 text-white" />
    },
    {
      industry: "Healthcare",
      focus: "HIPAA Compliance",
      description: "Specialized IT solutions for healthcare providers with robust security measures to protect patient data and ensure HIPAA compliance.",
      icon: <Shield className="h-6 w-6 text-white" />
    },
    {
      industry: "Legal Firms",
      focus: "Data Security",
      description: "Advanced data protection and secure document management systems for law firms that prioritize client confidentiality.",
      icon: <HardDrive className="h-6 w-6 text-white" />
    },
    {
      industry: "Financial Services",
      focus: "Regulatory Compliance",
      description: "IT infrastructure and security solutions designed to meet stringent financial industry regulations and protect sensitive data.",
      icon: <BarChart3 className="h-6 w-6 text-white" />
    },
    {
      industry: "Manufacturing",
      focus: "Operational Technology",
      description: "Integrated IT/OT solutions that enhance production efficiency while maintaining network security in industrial environments.",
      icon: <Server className="h-6 w-6 text-white" />
    },
    {
      industry: "Education",
      focus: "Learning Technology",
      description: "Technology solutions for schools and universities that enhance the learning experience while protecting student information.",
      icon: <Users className="h-6 w-6 text-white" />
    }
  ];

  return (
    <div className="overflow-x-hidden min-h-screen relative">
      {/* Replace the hero section with PageHeader */}
      <PageHeader 
        title="Comprehensive IT Solutions for Modern Businesses"
        subtitle="From daily IT support to strategic technology planning, we provide the services you need to optimize operations and drive growth"
        pageName="Services"
      />
      
      {/* Main Services Section */}
      <section className="py-20 relative light-bg px-4 sm:px-6">
        <div className="container mx-auto px-4 relative z-10 max-w-[1280px]">
          <RevealText className="text-center mb-12">
            <h2 className="heading-2 text-[#1B3C68] mb-4">
              Our Core IT <span className="bg-gradient-to-r from-[rgb(97,224,0)] to-[rgb(0,218,222)] bg-clip-text text-transparent">Services</span>
            </h2>
            <p className="body-large max-w-2xl mx-auto">
              Comprehensive technology solutions designed to optimize operations, enhance security, and accelerate your business growth
            </p>
          </RevealText>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {services.slice(0, 6).map((service, index) => (
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
                      <p className="body-small mb-4">{service.description}</p>
                      <FeatureList features={service.features.slice(0, 3)} />
                    </RevealText>
                  </div>
                </AnimatedBorder>
              </Animated3DCard>
            ))}
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {services.slice(6).map((service, index) => (
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
                      <p className="body-small mb-4">{service.description}</p>
                      <FeatureList features={service.features.slice(0, 3)} />
                    </RevealText>
                  </div>
                </AnimatedBorder>
              </Animated3DCard>
            ))}
          </div>
        </div>
      </section>
      
      {/* How We Work Section */}
      <section className="py-20 relative overflow-hidden px-4 sm:px-6">
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
        
        <div className="container mx-auto px-4 relative z-10 max-w-[1280px]">
          <RevealText className="text-center mb-16">
            <h2 className="heading-2 text-white mb-4">
              Our Service <span className="bg-gradient-to-r from-[rgb(97,224,0)] to-[rgb(0,218,222)] bg-clip-text text-transparent">Approach</span>
            </h2>
            <p className="body-large text-white/80 max-w-2xl mx-auto">
              Our proven methodology ensures consistent, high-quality IT service delivery
            </p>
          </RevealText>
          
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-[rgb(97,224,0)] to-[rgb(0,218,222)] transform -translate-x-1/2 hidden md:block"></div>
            
            {/* Process steps */}
            {[
              {
                title: "Assessment",
                description: "We begin by understanding your current IT environment, business goals, and challenges through a comprehensive assessment.",
                icon: <CheckCircle className="h-6 w-6" />,
              },
              {
                title: "Strategy Development",
                description: "Based on the assessment, we develop a tailored IT strategy aligned with your business objectives and technology needs.",
                icon: <BarChart3 className="h-6 w-6" />,
              },
              {
                title: "Implementation",
                description: "Our team of experts efficiently implements solutions with minimal disruption to your business operations.",
                icon: <Server className="h-6 w-6" />,
              },
              {
                title: "Monitoring & Management",
                description: "We provide continuous monitoring and proactive management to ensure optimal performance of your IT systems.",
                icon: <Headphones className="h-6 w-6" />,
              },
              {
                title: "Regular Reviews",
                description: "Scheduled reviews keep your IT aligned with evolving business needs and technological advancements.",
                icon: <Clock className="h-6 w-6" />,
              }
            ].map((step, index) => (
              <div key={index} className="relative mb-16 last:mb-0">
                <div className={`flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} items-center`}>
                  {/* Timeline node */}
                  <div className="w-12 h-12 rounded-full bg-gradient-to-r from-[rgb(97,224,0)] to-[rgb(0,218,222)] flex items-center justify-center z-10 mb-4 md:mb-0">
                    {step.icon}
                  </div>
                  
                  {/* Content */}
                  <div className={`md:w-[calc(50%-3rem)] ${index % 2 === 0 ? 'md:ml-8' : 'md:mr-8'} bg-white/10 backdrop-blur-sm p-6 rounded-xl`}>
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5 }}
                      viewport={{ once: true }}
                    >
                      <h3 className="subheading text-white mb-2">{step.title}</h3>
                      <p className="body text-white/80">{step.description}</p>
                    </motion.div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Industry Solutions */}
      <section className="py-20 relative light-bg px-4 sm:px-6">
        <div className="container mx-auto px-4 relative z-10 max-w-[1280px]">
          <RevealText className="text-center mb-16">
            <h2 className="heading-2 text-[#1B3C68] mb-4">
              Industry-Specific <span className="bg-gradient-to-r from-[rgb(97,224,0)] to-[rgb(0,218,222)] bg-clip-text text-transparent">Solutions</span>
            </h2>
            <p className="body-large max-w-2xl mx-auto">
              Tailored IT services designed to address the unique challenges of your industry
            </p>
          </RevealText>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {industrySolutions.map((solution, index) => (
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
                      <div className={`w-12 h-12 rounded-lg ${index % 2 === 0 ? 'bg-[rgb(97,224,0)]' : 'bg-[rgb(0,218,222)]'} flex items-center justify-center mr-3`}>
                        {solution.icon}
                      </div>
                      <div>
                        <h3 className="subheading text-[#1B3C68]">{solution.industry}</h3>
                        <p className={`caption ${index % 2 === 0 ? 'text-[rgb(97,224,0)]' : 'text-[rgb(0,218,222)]'}`}>
                          {solution.focus}
                        </p>
                      </div>
                    </div>
                    <p className="body-small mt-3">
                      {solution.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Call to Action */}
      <section className="py-16 relative overflow-hidden px-4 sm:px-6">
        <div className="absolute inset-0 bg-gradient-to-br from-[#1B3C68] to-[#2a4a75]"></div>
        <motion.div 
          className="absolute inset-0"
          style={{
            backgroundImage: "radial-gradient(circle at 30% 20%, rgba(97, 224, 0, 0.2), transparent 40%), radial-gradient(circle at 70% 60%, rgba(0, 218, 222, 0.2), transparent 40%)",
          }}
        />
        
        <div className="container mx-auto px-4 relative z-10 max-w-[1280px]">
          <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 md:p-12 border border-white/20 shadow-xl">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <RevealText>
                  <h2 className="heading-2 text-white mb-4">
                    Ready to Elevate Your IT Experience?
                  </h2>
                </RevealText>
                <RevealText delay={0.2}>
                  <p className="body-large text-white mb-8">
                    Contact us today for a free consultation and discover how our IT solutions can drive your business forward.
                  </p>
                </RevealText>
                
                <Link href="/contact">
                  <motion.button 
                    whileHover={{ scale: 1.03, boxShadow: "0 0 15px rgba(97, 224, 0, 0.5)" }}
                    whileTap={{ scale: 0.98 }}
                    className="relative inline-flex items-center justify-center px-6 py-3 overflow-hidden font-medium transition-all bg-gradient-to-r from-[rgb(97,224,0)] to-[rgb(0,218,222)] rounded-lg text-white shadow-lg group"
                  >
                    <span className="relative flex items-center">
                      Schedule a Consultation
                      <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
                    </span>
                  </motion.button>
                </Link>
              </div>
              
              <div>
                <div className="grid grid-cols-2 gap-4">
                  {[
                    { label: "Professional IT Staff", value: "100%" },
                    { label: "Client Satisfaction", value: "97%" },
                    { label: "Support Response Time", value: "<15min" },
                    { label: "Service Uptime", value: "99.9%" }
                  ].map((stat, index) => (
                    <motion.div 
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      className="bg-white/5 backdrop-blur-sm rounded-lg p-4 border border-white/10"
                    >
                      <div className="heading-3 text-[rgb(97,224,0)] mb-1">{stat.value}</div>
                      <div className="caption text-white/70">{stat.label}</div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <style jsx global>{`
        .bg-circuit-pattern {
          background-image: url('/images/circuit-pattern.svg');
          background-repeat: repeat;
          background-size: 400px;
        }
      `}</style>
    </div>
  );
} 