"use client";

import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";

interface Animated3DCardProps {
  children: React.ReactNode;
  className?: string;
  glareIntensity?: number;
  rotationIntensity?: number;
  borderRadius?: number;
  backgroundGradient?: boolean;
}

export const Animated3DCard = ({
  children,
  className = "",
  glareIntensity = 0.2,
  rotationIntensity = 12,
  borderRadius = 16,
  backgroundGradient = false
}: Animated3DCardProps) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });

  useEffect(() => {
    if (cardRef.current) {
      const { width, height } = cardRef.current.getBoundingClientRect();
      setDimensions({ width, height });
    }
  }, []);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    // Calculate positions from -0.5 to 0.5
    const normalizedX = (x / rect.width) - 0.5;
    const normalizedY = (y / rect.height) - 0.5;
    
    setPosition({ x: normalizedX, y: normalizedY });
  };

  const rotateX = isHovered ? position.y * rotationIntensity : 0;
  const rotateY = isHovered ? -position.x * rotationIntensity : 0;
  
  // Glare effect
  const glareX = position.x * 100 + 50;
  const glareY = position.y * 100 + 50;
  
  return (
    <motion.div
      ref={cardRef}
      className={`relative ${className}`}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => {
        setIsHovered(false);
        setPosition({ x: 0, y: 0 });
      }}
      initial="initial"
      whileHover="hover"
      style={{
        perspective: 1000,
        borderRadius: borderRadius,
        transformStyle: "preserve-3d",
        transform: `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`,
        transition: isHovered ? "none" : "transform 0.5s ease-out",
      }}
    >
      <div
        className="absolute inset-0 rounded-[inherit] z-10 pointer-events-none"
        style={{
          background: isHovered ? `radial-gradient(circle at ${glareX}% ${glareY}%, rgba(255, 255, 255, ${glareIntensity}), transparent)` : "none",
        }}
      />
      
      {backgroundGradient && (
        <div 
          className="absolute inset-0 rounded-[inherit] bg-gradient-to-br from-blue-500/20 via-purple-500/20 to-pink-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        />
      )}
      
      <div 
        className="relative z-20 rounded-[inherit] h-full w-full"
        style={{
          transform: "translateZ(0)",
        }}
      >
        {children}
      </div>
    </motion.div>
  );
}; 