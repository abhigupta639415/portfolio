import React from 'react';
import { motion } from 'framer-motion';

export default function ScrollReveal({
  children,
  className = '',
  delay = 0,
  duration = 0.6,
  y = 28,
  scale = 0.98,
  threshold = 0.15,
  once = true
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y, scale }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once, amount: threshold }}
      transition={{
        duration,
        delay,
        ease: [0.21, 0.47, 0.32, 0.98] // Smooth fluid cubic-bezier
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
