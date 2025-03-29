"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

interface RevealTextProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  duration?: number;
  once?: boolean;
  direction?: "up" | "down" | "left" | "right";
}

export const RevealText = ({
  children,
  className = "",
  delay = 0,
  duration = 0.5,
  once = true,
  direction = "up"
}: RevealTextProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once });

  // Direction-based initial values
  const getInitialValues = () => {
    switch (direction) {
      case "up":
        return { y: 40, opacity: 0 };
      case "down":
        return { y: -40, opacity: 0 };
      case "left":
        return { x: 40, opacity: 0 };
      case "right":
        return { x: -40, opacity: 0 };
      default:
        return { y: 40, opacity: 0 };
    }
  };

  const getAnimateValues = () => {
    switch (direction) {
      case "up":
      case "down":
        return { y: 0, opacity: 1 };
      case "left":
      case "right":
        return { x: 0, opacity: 1 };
      default:
        return { y: 0, opacity: 1 };
    }
  };

  const variants = {
    hidden: getInitialValues(),
    visible: getAnimateValues()
  };

  return (
    <div ref={ref} className={`overflow-hidden ${className}`}>
      <motion.div
        variants={variants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        transition={{
          duration,
          delay,
          ease: [0.25, 0.1, 0.25, 1] // Cubic bezier easing (ease-out-cubic)
        }}
      >
        {children}
      </motion.div>
    </div>
  );
}; 