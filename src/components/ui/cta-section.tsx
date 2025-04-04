"use client";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import Link from "next/link";

export const CTASection = () => {
  const [isMounted, setIsMounted] = useState(false);
  
  // Generate deterministic "random" values for particles
  const getParticleProps = (index: number) => {
    // Use fixed values based on index instead of Math.random()
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

  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <div className="relative py-24 overflow-hidden bg-teal-200">
      {/* Animated background elements */}
      {isMounted && (
        <div className="absolute inset-0 overflow-hidden">
          {/* Floating particles */}
          {[...Array(20)].map((_, i) => {
            const props = getParticleProps(i);
            return (
              <motion.div 
                key={i}
                className="absolute rounded-full bg-gradient-to-r from-[rgb(97,224,0)]/20 to-[rgb(0,218,222)]/20"
                style={{
                  width: props.width,
                  height: props.height,
                  left: props.left,
                  top: props.top,
                }}
                animate={{
                  y: [0, -30, 0],
                  x: [0, props.xOffset, 0],
                  opacity: [0.2, 0.7, 0.2],
                }}
                transition={{
                  duration: props.duration,
                  repeat: Infinity,
                  delay: props.delay,
                  ease: "easeInOut",
                }}
              />
            );
          })}
          
          {/* Central glow */}
          <motion.div
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] rounded-full"
            style={{
              background: 'radial-gradient(circle, rgba(97, 224, 0, 0.15) 0%, transparent 70%)',
            }}
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.5, 0.3],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
          
          {/* Moving gradient lines */}
          <motion.div 
            className="absolute inset-0 opacity-10"
            style={{
              background: 'repeating-linear-gradient(45deg, rgb(97, 224, 0), rgb(0, 218, 222) 200px)',
              backgroundSize: '400% 400%',
            }}
            animate={{
              backgroundPosition: ['0% 0%', '100% 100%'],
            }}
            transition={{
              duration: 15,
              repeat: Infinity,
              ease: 'linear',
            }}
          />
          
          {/* Wave effect */}
          <svg 
            className="absolute bottom-0 left-0 w-full opacity-30"
            viewBox="0 0 1440 320" 
            preserveAspectRatio="none"
            style={{ height: '30%' }}
          >
            <motion.path 
              fill="rgb(97, 224, 0, 0.2)"
              fillOpacity="1" 
              animate={{
                d: [
                  "M0,288L48,272C96,256,192,224,288,208C384,192,480,192,576,192C672,192,768,192,864,208C960,224,1056,256,1152,250.7C1248,245,1344,203,1392,181.3L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z",
                  "M0,288L48,266.7C96,245,192,203,288,197.3C384,192,480,224,576,240C672,256,768,256,864,234.7C960,213,1056,171,1152,165.3C1248,160,1344,192,1392,208L1440,224L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z",
                ]
              }}
              transition={{
                duration: 10,
                repeat: Infinity,
                repeatType: 'reverse',
                ease: 'easeInOut',
              }}
            />
          </svg>
        </div>
      )}
      
      {/* Content */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-5xl font-bold text-[#1B3C68] mb-6">Ready to transform your IT infrastructure?</h2>
            
            <div className="relative inline-block">
              <motion.div 
                className="absolute -inset-1 rounded-full blur-md"
                animate={{
                  background: [
                    'linear-gradient(90deg, rgb(97, 224, 0) -8%, rgb(0, 218, 222) 107%)',
                    'linear-gradient(180deg, rgb(97, 224, 0) -8%, rgb(0, 218, 222) 107%)',
                    'linear-gradient(270deg, rgb(97, 224, 0) -8%, rgb(0, 218, 222) 107%)',
                    'linear-gradient(360deg, rgb(97, 224, 0) -8%, rgb(0, 218, 222) 107%)',
                  ]
                }}
                transition={{
                  duration: 8,
                  repeat: Infinity,
                  ease: 'linear',
                }}
              />
              <motion.div
                whileHover={{ scale: 1.05, y: -5 }}
                whileTap={{ scale: 0.98 }}
                className="relative block gradient-bg text-white px-10 py-5 rounded-full font-medium text-lg shadow-lg"
              >
                <Link href="/contact" className="flex items-center justify-center">
                  <span>Get in Touch</span>
                  <motion.div
                    animate={{ x: [0, 5, 0] }}
                    transition={{ 
                      duration: 1.5, 
                      repeat: Infinity,
                      ease: "easeInOut" 
                    }}
                    className="ml-2"
                  >
                    →
                  </motion.div>
                </Link>
              </motion.div>
            </div>
            
            <p className="mt-8 text-[#1B3C68]/80 max-w-2xl mx-auto text-lg">
              Contact us today to discuss how Premium Infotech LLC can support your business with tailored IT solutions.
            </p>
          </motion.div>
        </div>
      </div>
    </div>
  );
}; 