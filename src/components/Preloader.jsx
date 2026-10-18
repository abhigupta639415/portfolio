import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Preloader({ onComplete }) {
  const [progress, setProgress] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    // Check if user already saw the preloader in this session
    const hasSeen = sessionStorage.getItem('portfolio_preloader_seen');
    if (hasSeen) {
      setIsVisible(false);
      if (onComplete) onComplete();
      return;
    }

    // Smooth fast progress counter ~1000ms
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => {
            setIsVisible(false);
            sessionStorage.setItem('portfolio_preloader_seen', 'true');
            if (onComplete) onComplete();
          }, 250);
          return 100;
        }
        return prev + Math.floor(Math.random() * 14) + 6;
      });
    }, 45);

    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{
            y: '-100%',
            transition: { duration: 0.7, ease: [0.76, 0, 0.24, 1] }
          }}
          className="fixed inset-0 z-[99999] bg-[#0F0F0E] text-[#F5F3EA] flex flex-col items-center justify-center select-none"
        >
          {/* Ambient center pulse */}
          <div className="absolute w-72 h-72 rounded-full bg-[#D4AF37]/10 blur-3xl pointer-events-none animate-pulse" />

          {/* Monogram Box */}
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
            className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#D4AF37] to-[#CE8946] p-[2px] shadow-lg mb-6"
          >
            <div className="w-full h-full bg-[#0F0F0E] rounded-[14px] flex items-center justify-center font-mono font-bold text-xl text-[#D4AF37] tracking-wider">
              AG
            </div>
          </motion.div>

          {/* Name & Title */}
          <motion.h1
            initial={{ y: 10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.15, duration: 0.4 }}
            className="text-base font-bold tracking-tight text-[#F5F3EA] mb-1"
          >
            Abhishek Gupta
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.25, duration: 0.4 }}
            className="text-xs font-mono text-[#B7B4AA] tracking-wider mb-8 uppercase"
          >
            Full-Stack Developer &bull; AI Integration
          </motion.p>

          {/* Progress Bar Container */}
          <div className="w-48 h-1 bg-[#1D1D1A] rounded-full overflow-hidden border border-[#34332E] relative">
            <motion.div
              className="h-full bg-gradient-to-r from-[#C49A2C] via-[#D4AF37] to-[#CE8946] rounded-full"
              style={{ width: `${Math.min(progress, 100)}%` }}
              transition={{ ease: 'easeOut' }}
            />
          </div>

          {/* Percentage */}
          <div className="text-[11px] font-mono text-[#D4AF37] mt-3 font-semibold">
            {Math.min(progress, 100)}%
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
