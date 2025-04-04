"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

interface ParallaxSectionProps {
  children: React.ReactNode;
  className?: string;
  direction?: "up" | "down" | "left" | "right";
  speed?: number;
}

export const ParallaxSection = ({
  children,
  className = "",
  direction = "up",
  speed = 0.2,
}: ParallaxSectionProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  // Calculate transform values based on direction
  const getTransformValue = () => {
    switch (direction) {
      case "up":
        return useTransform(scrollYProgress, [0, 1], ["0%", `${-speed * 100}%`]);
      case "down":
        return useTransform(scrollYProgress, [0, 1], ["0%", `${speed * 100}%`]);
      case "left":
        return useTransform(scrollYProgress, [0, 1], ["0%", `${-speed * 100}%`]);
      case "right":
        return useTransform(scrollYProgress, [0, 1], ["0%", `${speed * 100}%`]);
      default:
        return useTransform(scrollYProgress, [0, 1], ["0%", "0%"]);
    }
  };

  const isVertical = direction === "up" || direction === "down";
  const transformProp = isVertical ? "y" : "x";
  const transformValue = getTransformValue();

  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.95, 1, 0.95]);
  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0.6, 1, 1, 0.6]);

  return (
    <div ref={ref} className={`overflow-hidden ${className}`}>
      <motion.div
        style={{
          [transformProp]: transformValue,
          scale,
          opacity,
        }}
        className="h-full w-full"
      >
        {children}
      </motion.div>
    </div>
  );
}; 