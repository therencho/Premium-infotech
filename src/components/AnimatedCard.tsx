"use client";

import { ReactNode, useRef, useState, useEffect } from 'react';

interface AnimatedCardProps {
  children: ReactNode;
  className?: string;
}

const AnimatedCard: React.FC<AnimatedCardProps> = ({ children, className = '' }) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const [rotation, setRotation] = useState({ x: 0, y: 0 });
  const [hovering, setHovering] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    
    const rotateX = (y - centerY) / 20;
    const rotateY = (centerX - x) / 20;
    
    setRotation({ x: rotateX, y: rotateY });
  };

  const handleMouseEnter = () => setHovering(true);
  const handleMouseLeave = () => {
    setHovering(false);
    setRotation({ x: 0, y: 0 });
  };

  // Add parallax effect to content inside card
  useEffect(() => {
    if (!cardRef.current) return;
    
    const handleMouseMove = (e: MouseEvent) => {
      if (!cardRef.current || !hovering) return;
      
      const children = cardRef.current.querySelectorAll('.parallax-content');
      const rect = cardRef.current.getBoundingClientRect();
      
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;
      
      const mouseX = e.clientX - rect.left;
      const mouseY = e.clientY - rect.top;
      
      const moveX = (mouseX - centerX) / 50;
      const moveY = (mouseY - centerY) / 50;
      
      children.forEach((child, i) => {
        const depth = (i + 1) * 0.2;
        (child as HTMLElement).style.transform = `translate(${moveX * depth}px, ${moveY * depth}px)`;
      });
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [hovering]);

  return (
    <div
      ref={cardRef}
      className={`relative overflow-hidden transition-all duration-300 ease-out ${
        hovering ? 'shadow-xl scale-[1.02]' : 'shadow-md'
      } rounded-xl ${className}`}
      style={{
        transform: `perspective(1000px) rotateX(${rotation.x}deg) rotateY(${rotation.y}deg)`,
        transformStyle: 'preserve-3d',
      }}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className="relative h-full w-full">
        {children}
      </div>
    </div>
  );
};

export default AnimatedCard; 