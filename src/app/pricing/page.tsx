"use client";

import { PageHeader } from "@/components/ui/page-header";
import { AnimatedTestimonials } from "@/components/ui/animated-testimonials";
import { Check, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import Link from "next/link";

export default function PricingPage() {
  const testimonials = [
    {
      quote: "Premium Infotech revolutionized our IT infrastructure with their cloud migration services. The efficiency gains and cost savings have been remarkable, allowing us to focus on our core business operations.",
      name: "Sarah Johnson",
      designation: "CTO, Global Innovations"
    },
    {
      quote: "Their cybersecurity solution detected and prevented what could have been a devastating breach. The team's expertise and quick response made all the difference. I highly recommend their managed security services.",
      name: "Michael Chen",
      designation: "IT Director, FinTech Solutions"
    },
    {
      quote: "We've been using Premium Infotech's managed IT services for over two years, and the level of support has been exceptional. Their team is responsive, knowledgeable, and always goes above and beyond.",
      name: "Amanda Rodriguez",
      designation: "Operations Manager, Healthcare Systems"
    }
  ];

  const pricingPlans = [
    {
      name: "Starter",
      price: "$499",
      period: "per month",
      description: "Essential IT support for small businesses just getting started.",
      isPopular: false,
      features: [
        "8/5 Help Desk Support",
        "Basic Network Monitoring",
        "Email Security",
        "Quarterly IT Health Reports",
        "5 User Accounts"
      ]
    },
    {
      name: "Professional",
      price: "$999",
      period: "per month",
      description: "Comprehensive managed IT services for growing businesses.",
      isPopular: true,
      features: [
        "24/7 Priority Support",
        "Advanced Network Monitoring",
        "Cloud Backup Solutions",
        "Cyber Security Protection",
        "Monthly IT Health Reports",
        "Employee Security Training",
        "15 User Accounts"
      ]
    },
    {
      name: "Business",
      price: "$1,999",
      period: "per month",
      description: "Enhanced protection and support for established organizations.",
      isPopular: false,
      features: [
        "24/7 Premium Support",
        "Complete Infrastructure Monitoring",
        "Enhanced Security Suite",
        "Disaster Recovery Planning",
        "Dedicated Technical Account Manager",
        "Quarterly Strategy Reviews",
        "50 User Accounts"
      ]
    },
    {
      name: "Enterprise",
      price: "Custom",
      period: "tailored solution",
      description: "Tailored IT solutions for large-scale enterprise requirements.",
      isPopular: false,
      features: [
        "White Glove 24/7 Support",
        "Full-Spectrum IT Management",
        "Advanced Threat Protection",
        "Custom Security Protocols",
        "Multi-Site Support",
        "IT Roadmap Development",
        "Unlimited User Accounts"
      ]
    }
  ];

  return (
    <>
      <PageHeader 
        title="Our Pricing" 
        subtitle="Transparent and flexible pricing plans for all your IT needs"
        pageName="Pricing"
      />
      
      <main className="container mx-auto py-10 px-4">
        <section className="mb-20">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl font-bold mb-4 text-[#1B3C68]">Choose Your IT Support Plan</h2>
            <p className="text-[#1B3C68]/70">
              Select from our range of comprehensive IT service packages designed to meet your business needs
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
            {pricingPlans.map((plan, index) => (
              <motion.div 
                key={plan.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className={`
                  relative rounded-2xl p-6 shadow-lg border-2 overflow-hidden
                  ${plan.isPopular 
                    ? 'border-[rgb(97,224,0)] ring-4 ring-[rgb(97,224,0)]/20' 
                    : 'border-gray-200 hover:border-[rgb(97,224,0)]/50 transition-colors'}
                `}
              >
                {plan.isPopular && (
                  <div className="absolute top-0 right-0">
                    <div className="bg-gradient-to-r from-[rgb(97,224,0)] to-[rgb(0,218,222)] text-white text-xs font-bold px-4 py-1 rounded-bl-lg shadow-md">
                      MOST POPULAR
                    </div>
                  </div>
                )}
                
                <div className="mb-6">
                  <h3 className="text-xl font-bold text-[#1B3C68] mb-2">{plan.name}</h3>
                  <div className="flex items-end">
                    <span className={`text-3xl font-bold ${plan.isPopular ? 'text-[rgb(97,224,0)]' : 'text-[#1B3C68]'}`}>
                      {plan.price}
                    </span>
                    <span className="text-gray-500 ml-1">{plan.period}</span>
                  </div>
                  <p className="mt-2 text-[#1B3C68]/70 text-sm">{plan.description}</p>
                </div>
                
                <ul className="mb-8 space-y-3">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-start">
                      <div className={`mt-1 mr-2 flex-shrink-0 ${plan.isPopular ? 'text-[rgb(97,224,0)]' : 'text-gray-400'}`}>
                        <Check size={16} />
                      </div>
                      <span className="text-[#1B3C68]/80 text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <div className="mt-auto">
                  <motion.button
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.98 }}
                    className={`
                      w-full py-3 px-4 rounded-lg font-medium flex items-center justify-center
                      ${plan.isPopular
                        ? 'bg-gradient-to-r from-[rgb(97,224,0)] to-[rgb(0,218,222)] text-white' 
                        : 'bg-white border-2 border-[rgb(97,224,0)]/20 text-[#1B3C68] hover:bg-[rgb(97,224,0)]/5 transition-colors'}
                    `}
                  >
                    <span>Schedule a Consultation</span>
                    <ArrowRight size={16} className="ml-2" />
                  </motion.button>
                </div>
                
                {plan.isPopular && (
                  <div className="absolute -bottom-10 -left-10 h-40 w-40 rounded-full bg-gradient-to-br from-[rgb(97,224,0)]/10 to-[rgb(0,218,222)]/5 z-0"></div>
                )}
              </motion.div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <p className="text-[#1B3C68]/70 text-sm max-w-2xl mx-auto">
              All plans include 24/7 infrastructure monitoring, regular security patches, and our satisfaction guarantee. 
              Contact us for custom requirements or to discuss enterprise-level solutions.
            </p>
          </div>
        </section>
        
        {/* Dark background section between pricing and testimonials */}
        <section className="py-16 relative overflow-hidden mb-20">
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
            <div className="text-center mb-8">
              <h2 className="heading-2 text-white mb-4">Ready for Reliable IT Support?</h2>
              <p className="body-large text-white/80 max-w-2xl mx-auto mb-8">
                Get the expert IT services your business needs to stay competitive and secure in today's digital landscape
              </p>
              
              <Link href="/contact">
                <motion.button 
                  whileHover={{ scale: 1.03, boxShadow: "0 0 15px rgba(97, 224, 0, 0.5)" }}
                  whileTap={{ scale: 0.98 }}
                  className="relative inline-flex items-center justify-center px-6 py-3 overflow-hidden font-medium transition-all bg-gradient-to-r from-[rgb(97,224,0)] to-[rgb(0,218,222)] rounded-lg text-white shadow-lg"
                >
                  <span className="relative flex items-center">
                    Contact Our Team Today
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </span>
                </motion.button>
              </Link>
            </div>
          </div>
        </section>
        
        <section className="bg-gray-50 rounded-2xl mb-20">
          <div className="py-8 md:py-12">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-8 gradient-text">What Our Clients Say</h2>
            <AnimatedTestimonials testimonials={testimonials} autoplay={true} />
          </div>
        </section>
      </main>
      
      <style jsx global>{`
        .bg-circuit-pattern {
          background-image: url('/images/circuit-pattern.svg');
          background-repeat: repeat;
          background-size: 400px;
        }
        
        .gradient-text {
          background-image: linear-gradient(90deg, rgb(97, 224, 0) -8%, rgb(0, 218, 222) 107%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }
      `}</style>
    </>
  );
} 