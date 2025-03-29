"use client";

import { IconArrowLeft, IconArrowRight } from "@tabler/icons-react";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

type Testimonial = {
  quote: string;
  name: string;
  designation: string;
  src?: string; // Make src optional
};

// Helper function to get initials from name
const getInitials = (name: string) => {
  return name
    .split(' ')
    .map(part => part[0])
    .join('')
    .toUpperCase()
    .substring(0, 2);
};

export const AnimatedTestimonials = ({
  testimonials,
  autoplay = false,
}: {
  testimonials: Testimonial[];
  autoplay?: boolean;
}) => {
  const [active, setActive] = useState(0);

  const handleNext = () => {
    setActive((prev) => (prev + 1) % testimonials.length);
  };

  const handlePrev = () => {
    setActive((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const isActive = (index: number) => {
    return index === active;
  };

  useEffect(() => {
    if (autoplay) {
      const interval = setInterval(handleNext, 5000);
      return () => clearInterval(interval);
    }
  }, [autoplay]);

  const randomRotateY = () => {
    return Math.floor(Math.random() * 21) - 10;
  };
  
  return (
    <div className="mx-auto max-w-sm px-4 py-16 font-sans antialiased md:max-w-4xl md:px-8 lg:px-12">
      <div className="relative grid grid-cols-1 gap-16 md:grid-cols-2">
        <div>
          <div className="relative h-80 w-full">
            <AnimatePresence>
              {testimonials.map((testimonial, index) => {
                const initials = getInitials(testimonial.name);
                // Generate a consistent "random" color based on the initials
                const hue1 = (initials.charCodeAt(0) * 10) % 360;
                const hue2 = ((initials.charCodeAt(0) * 20) + 180) % 360;
                
                return (
                  <motion.div
                    key={testimonial.name + index}
                    initial={{
                      opacity: 0,
                      scale: 0.9,
                      z: -100,
                      rotate: randomRotateY(),
                    }}
                    animate={{
                      opacity: isActive(index) ? 1 : 0.7,
                      scale: isActive(index) ? 1 : 0.95,
                      z: isActive(index) ? 0 : -100,
                      rotate: isActive(index) ? 0 : randomRotateY(),
                      zIndex: isActive(index)
                        ? 40
                        : testimonials.length + 2 - index,
                      y: isActive(index) ? [0, -80, 0] : 0,
                    }}
                    exit={{
                      opacity: 0,
                      scale: 0.9,
                      z: 100,
                      rotate: randomRotateY(),
                    }}
                    transition={{
                      duration: 0.4,
                      ease: "easeInOut",
                    }}
                    className="absolute inset-0 origin-bottom"
                  >
                    <div className="relative flex h-full w-full items-center justify-center overflow-hidden rounded-3xl border-2 border-[rgb(97,224,0)]/20 shadow-lg">
                      <div className="absolute inset-0 bg-gradient-to-br from-[rgba(97,224,0,0.1)] to-[rgba(0,218,222,0.1)]"></div>
                      
                      {/* Abstract background patterns */}
                      <div className="absolute inset-0 opacity-10">
                        <div className="absolute top-[15%] left-[10%] h-40 w-40 rounded-full bg-[rgb(97,224,0)]"></div>
                        <div className="absolute bottom-[20%] right-[15%] h-32 w-32 rounded-full bg-[rgb(0,218,222)]"></div>
                        <div className="absolute top-[60%] left-[40%] h-24 w-24 rounded-full bg-[rgb(97,224,0)]"></div>
                      </div>
                      
                      {/* Wave pattern */}
                      <svg className="absolute bottom-0 w-full opacity-20" viewBox="0 0 1440 320">
                        <path fill="rgb(97, 224, 0)" fillOpacity="0.5" d="M0,96L48,122.7C96,149,192,203,288,202.7C384,203,480,149,576,122.7C672,96,768,96,864,112C960,128,1056,160,1152,170.7C1248,181,1344,171,1392,165.3L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
                      </svg>
                      
                      {/* Initials Circle */}
                      <div className="relative flex h-40 w-40 items-center justify-center rounded-full bg-gradient-to-br from-[rgb(97,224,0)] to-[rgb(0,218,222)] shadow-xl">
                        <div className="absolute inset-0.5 rounded-full bg-white/90"></div>
                        <span className="relative z-10 text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-br from-[rgb(97,224,0)] to-[rgb(0,218,222)]">
                          {initials}
                        </span>
                      </div>
                      
                      {/* Client name and role */}
                      <div className="absolute bottom-8 left-0 right-0 text-center">
                        <div className="mx-auto max-w-xs rounded-full bg-white/80 px-6 py-3 backdrop-blur">
                          <h4 className="font-bold text-[#1B3C68]">{testimonial.name}</h4>
                          <p className="text-sm text-[rgb(97,224,0)]">{testimonial.designation}</p>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </AnimatePresence>
          </div>
        </div>
        
        {/* Rest of the component remains mostly unchanged */}
        <div className="flex flex-col justify-between py-4">
          <motion.div
            key={active}
            initial={{
              y: 20,
              opacity: 0,
            }}
            animate={{
              y: 0,
              opacity: 1,
            }}
            exit={{
              y: -20,
              opacity: 0,
            }}
            transition={{
              duration: 0.2,
              ease: "easeInOut",
            }}
            className="relative"
          >
            <div className="mb-2 h-10 w-10 text-[rgb(97,224,0)]">
              <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M10 9.5C10 10.3284 9.32843 11 8.5 11C7.67157 11 7 10.3284 7 9.5C7 8.67157 7.67157 8 8.5 8C9.32843 8 10 8.67157 10 9.5Z" fill="currentColor" />
                <path d="M10 14.5C10 15.3284 9.32843 16 8.5 16C7.67157 16 7 15.3284 7 14.5C7 13.6716 7.67157 13 8.5 13C9.32843 13 10 13.6716 10 14.5Z" fill="currentColor" />
                <path d="M15.5 11C16.3284 11 17 10.3284 17 9.5C17 8.67157 16.3284 8 15.5 8C14.6716 8 14 8.67157 14 9.5C14 10.3284 14.6716 11 15.5 11Z" fill="currentColor" />
                <path d="M17 14.5C17 15.3284 16.3284 16 15.5 16C14.6716 16 14 15.3284 14 14.5C14 13.6716 14.6716 13 15.5 13C16.3284 13 17 13.6716 17 14.5Z" fill="currentColor" />
                <path fillRule="evenodd" clipRule="evenodd" d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22ZM12 20C16.4183 20 20 16.4183 20 12C20 7.58172 16.4183 4 12 4C7.58172 4 4 7.58172 4 12C4 16.4183 7.58172 20 12 20Z" fill="currentColor" />
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-[#1B3C68]">
              {testimonials[active].name}
            </h3>
            <p className="text-sm font-medium text-[rgb(97,224,0)]">
              {testimonials[active].designation}
            </p>
            <motion.p className="mt-6 text-lg text-[#1B3C68]/80">
              {testimonials[active].quote.split(" ").map((word, index) => (
                <motion.span
                  key={index}
                  initial={{
                    filter: "blur(10px)",
                    opacity: 0,
                    y: 5,
                  }}
                  animate={{
                    filter: "blur(0px)",
                    opacity: 1,
                    y: 0,
                  }}
                  transition={{
                    duration: 0.2,
                    ease: "easeInOut",
                    delay: 0.02 * index,
                  }}
                  className="inline-block"
                >
                  {word}&nbsp;
                </motion.span>
              ))}
            </motion.p>
          </motion.div>
          <div className="flex gap-4 pt-12 md:pt-0">
            <button
              onClick={handlePrev}
              className="group/button flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-r from-[rgba(97,224,0,0.1)] to-[rgba(0,218,222,0.1)] transition-all hover:shadow-md"
            >
              <IconArrowLeft className="h-5 w-5 text-[#1B3C68] transition-transform duration-300 group-hover/button:-translate-x-1" />
            </button>
            <button
              onClick={handleNext}
              className="group/button flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-r from-[rgba(97,224,0,0.1)] to-[rgba(0,218,222,0.1)] transition-all hover:shadow-md"
            >
              <IconArrowRight className="h-5 w-5 text-[#1B3C68] transition-transform duration-300 group-hover/button:translate-x-1" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
