"use client";

import { motion } from "framer-motion";
import { ChevronRight, Home } from "lucide-react";
import Link from "next/link";
import { RevealText } from "./reveal-text";

interface PageHeaderProps {
  title: string;
  subtitle?: string;
  pageName: string;
}

export const PageHeader = ({ title, subtitle, pageName }: PageHeaderProps) => {
  return (
    <section className="relative pt-28 pb-16 overflow-hidden px-4 sm:px-6">
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
        <RevealText className="text-center mb-4">
          <div className="tag inline-block mb-4 px-4 py-1.5 rounded-full bg-white/10 text-white backdrop-blur-sm">
            {pageName}
          </div>
          <h1 className="heading-1 text-white mb-4">
            {title.split(' ').map((word, i, arr) => 
              i === arr.length - 2 ? (
                <span key={i}>
                  <span className="bg-gradient-to-r from-[rgb(97,224,0)] to-[rgb(0,218,222)] bg-clip-text text-transparent">{word}</span>{' '}
                </span>
              ) : (
                <span key={i}>{word}{' '}</span>
              )
            )}
          </h1>
          {subtitle && (
            <p className="body-large text-white/80 max-w-2xl mx-auto">
              {subtitle}
            </p>
          )}
        </RevealText>
        
        {/* Breadcrumb */}
        <motion.div 
          className="flex items-center justify-center text-sm text-white/70"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <Link href="/" className="flex items-center hover:text-[rgb(97,224,0)] transition-colors">
            <Home size={14} className="mr-1" />
            <span>Home</span>
          </Link>
          <ChevronRight size={14} className="mx-2 text-white/50" />
          <span className="text-[rgb(97,224,0)]">{pageName}</span>
        </motion.div>
      </div>
      
      {/* Bottom Curve */}
      <div className="absolute bottom-0 left-0 right-0 h-12 overflow-hidden">
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
      
      <style jsx global>{`
        .bg-circuit-pattern {
          background-image: url('/images/circuit-pattern.svg');
          background-repeat: repeat;
          background-size: 400px;
        }
      `}</style>
    </section>
  );
}; 