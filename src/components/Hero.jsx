import React, { Suspense, lazy } from 'react';
import {
  ArrowDown,
  Download,
  Mail,
  Github,
  Linkedin,
  Code2
} from 'lucide-react';
import { motion } from 'framer-motion';
import { personalInfo, heroData } from '../data/portfolioData';
import FloatingElement from './zerogravity/FloatingElement';
import MagneticButton from './zerogravity/MagneticButton';

const Hero3DScene = lazy(() => import('./3d/Hero3DScene'));

function Hero3DPlaceholder() {
  return (
    <div className="relative w-full h-[360px] sm:h-[420px] lg:h-[480px] rounded-3xl overflow-hidden flex items-center justify-center bg-[#FFFFFF]/40 dark:bg-[#1D1D1A]/40 border border-[#E7E3D8] dark:border-[#34332E]">
      <div className="flex flex-col items-center gap-3">
        <div className="w-10 h-10 rounded-2xl bg-[#F4E8C1] dark:bg-[#29281F] flex items-center justify-center">
          <span className="w-2.5 h-2.5 rounded-full bg-[#C49A2C] dark:bg-[#D4AF37] animate-pulse" />
        </div>
        <span className="text-xs font-mono text-[#66645F] dark:text-[#B7B4AA]">
          Loading 3D Workspace...
        </span>
      </div>
    </div>
  );
}

export default function Hero({ onOpenResume }) {
  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) {
      if (window.lenis) {
        window.lenis.scrollTo(el, { offset: -75, duration: 1.2 });
      } else {
        const yOffset = -75;
        const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;
        window.scrollTo({ top: y, behavior: 'smooth' });
      }
    }
  };

  const handleDownloadResume = () => {
    const link = document.createElement('a');
    link.href = personalInfo.resumePdfUrl;
    link.download = 'Abhishek_Gupta_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 22 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] }
    }
  };

  return (
    <section
      id="hero"
      className="relative pt-32 pb-16 md:pt-40 md:pb-24 flex items-center justify-center overflow-hidden"
    >
      {/* Subtle, minimal ambient glow */}
      <div className="absolute top-16 left-1/4 w-96 h-96 rounded-full bg-[#C49A2C]/5 dark:bg-[#D4AF37]/5 blur-3xl pointer-events-none" />
      <div className="absolute top-1/3 right-1/4 w-80 h-80 rounded-full bg-[#CE8946]/5 blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Authentic Typography & Calls to Action */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="lg:col-span-7 flex flex-col items-start text-left"
          >
            
            {/* Eyebrow badge with desynchronized zero-g floating */}
            <motion.div variants={itemVariants}>
              <FloatingElement yOffset={4} rotOffset={1} duration={4.8}>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-[#F4E8C1] dark:bg-[#29281F] border border-[#E7E3D8] dark:border-[#34332E] text-xs font-mono font-semibold text-[#171717] dark:text-[#F5F3EA] mb-5 tracking-wider uppercase shadow-xs">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#C49A2C] dark:bg-[#D4AF37] animate-pulse" />
                  <span>{heroData.eyebrow}</span>
                </div>
              </FloatingElement>
            </motion.div>

            {/* Main Heading with Gradient Shimmer Effect */}
            <motion.h1
              variants={itemVariants}
              className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-[#171717] dark:text-[#F5F3EA] mb-4 leading-[1.1]"
            >
              <span className="bg-gradient-to-r from-[#171717] via-[#C49A2C] to-[#171717] dark:from-[#F5F3EA] dark:via-[#D4AF37] dark:to-[#F5F3EA] bg-clip-text text-transparent text-shimmer">
                {heroData.name}
              </span>
            </motion.h1>

            {/* Subheading */}
            <motion.h2
              variants={itemVariants}
              className="text-lg sm:text-xl md:text-2xl font-medium text-[#171717]/90 dark:text-[#F5F3EA]/90 mb-5 leading-snug max-w-2xl"
            >
              {heroData.subheading}
            </motion.h2>

            {/* Supporting Paragraph */}
            <motion.p
              variants={itemVariants}
              className="text-sm sm:text-base text-[#66645F] dark:text-[#B7B4AA] leading-relaxed mb-8 max-w-xl font-normal"
            >
              {heroData.supportingParagraph}
            </motion.p>

            {/* Action Buttons with Magnetic cursor attraction */}
            <motion.div
              variants={itemVariants}
              className="flex flex-wrap items-center gap-3 w-full sm:w-auto mb-9"
            >
              {/* Primary CTA: View Projects */}
              <MagneticButton radius={50} magnetStrength={0.25}>
                <button
                  type="button"
                  onClick={() => scrollToSection('projects')}
                  className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl font-semibold text-xs sm:text-sm transition-all duration-150 cursor-pointer shadow-xs hover:shadow-md hover:scale-102
                    bg-[#C49A2C] hover:bg-[#CE8946] text-white
                    dark:bg-[#D4AF37] dark:hover:bg-[#CE8946] dark:text-[#171717]"
                >
                  <span>View Projects</span>
                  <ArrowDown className="w-4 h-4" />
                </button>
              </MagneticButton>

              {/* Secondary CTA: Download Resume */}
              <MagneticButton radius={50} magnetStrength={0.22}>
                <button
                  type="button"
                  onClick={handleDownloadResume}
                  className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl font-semibold text-xs sm:text-sm transition-all duration-150 cursor-pointer hover:scale-102
                    bg-[#FFFFFF] dark:bg-[#1D1D1A] hover:bg-[#FAFAF8] dark:hover:bg-[#23231F]
                    text-[#171717] dark:text-[#F5F3EA]
                    border border-[#E7E3D8] dark:border-[#34332E] hover:border-[#C49A2C] dark:hover:border-[#D4AF37]
                    shadow-2xs"
                >
                  <Download className="w-4 h-4 text-[#C49A2C] dark:text-[#D4AF37]" />
                  <span>Download Resume</span>
                </button>
              </MagneticButton>

              {/* Third CTA: Contact Me */}
              <MagneticButton radius={45} magnetStrength={0.18}>
                <button
                  type="button"
                  onClick={() => scrollToSection('contact')}
                  className="inline-flex items-center justify-center gap-2 px-4 py-3 rounded-xl font-medium text-xs sm:text-sm transition-colors cursor-pointer
                    text-[#66645F] dark:text-[#B7B4AA] hover:text-[#171717] dark:hover:text-[#F5F3EA]"
                >
                  <Mail className="w-4 h-4" />
                  <span>Contact Me</span>
                </button>
              </MagneticButton>
            </motion.div>

            {/* Social Links with hover scale */}
            <motion.div
              variants={itemVariants}
              className="flex items-center gap-3 pt-4 border-t border-[#E7E3D8] dark:border-[#34332E] w-full max-w-md"
            >
              <span className="text-xs font-mono text-[#66645F] dark:text-[#B7B4AA] mr-1">
                Connect:
              </span>

              <MagneticButton radius={30} magnetStrength={0.3}>
                <a
                  href={personalInfo.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-lg text-[#66645F] dark:text-[#B7B4AA] hover:text-[#171717] dark:hover:text-[#F5F3EA] border border-[#E7E3D8] dark:border-[#34332E] hover:border-[#C49A2C] dark:hover:border-[#D4AF37] bg-[#FFFFFF] dark:bg-[#1D1D1A] transition-all hover:scale-110 flex items-center justify-center"
                  title="GitHub Profile"
                  aria-label="GitHub Profile"
                >
                  <Github className="w-4 h-4" />
                </a>
              </MagneticButton>

              <MagneticButton radius={30} magnetStrength={0.3}>
                <a
                  href={personalInfo.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-lg text-[#66645F] dark:text-[#B7B4AA] hover:text-[#C49A2C] dark:hover:text-[#D4AF37] border border-[#E7E3D8] dark:border-[#34332E] hover:border-[#C49A2C] dark:hover:border-[#D4AF37] bg-[#FFFFFF] dark:bg-[#1D1D1A] transition-all hover:scale-110 flex items-center justify-center"
                  title="LinkedIn Profile"
                  aria-label="LinkedIn Profile"
                >
                  <Linkedin className="w-4 h-4" />
                </a>
              </MagneticButton>

              <MagneticButton radius={30} magnetStrength={0.3}>
                <a
                  href={personalInfo.leetcode}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-lg text-[#66645F] dark:text-[#B7B4AA] hover:text-[#CE8946] border border-[#E7E3D8] dark:border-[#34332E] hover:border-[#CE8946] bg-[#FFFFFF] dark:bg-[#1D1D1A] transition-all hover:scale-110 flex items-center justify-center"
                  title="LeetCode Profile (250+ Solved)"
                  aria-label="LeetCode Profile"
                >
                  <Code2 className="w-4 h-4" />
                </a>
              </MagneticButton>

              <MagneticButton radius={30} magnetStrength={0.3}>
                <a
                  href={`mailto:${personalInfo.email}`}
                  className="p-2 rounded-lg text-[#66645F] dark:text-[#B7B4AA] hover:text-[#C49A2C] dark:hover:text-[#D4AF37] border border-[#E7E3D8] dark:border-[#34332E] hover:border-[#C49A2C] dark:hover:border-[#D4AF37] bg-[#FFFFFF] dark:bg-[#1D1D1A] transition-all hover:scale-110 flex items-center justify-center"
                  title="Send Email"
                  aria-label="Send Email"
                >
                  <Mail className="w-4 h-4" />
                </a>
              </MagneticButton>
            </motion.div>

          </motion.div>

          {/* Right Column: Premium Interactive 3D Engineering Workspace */}
          <div className="lg:col-span-5 w-full flex items-center justify-center">
            <Suspense fallback={<Hero3DPlaceholder />}>
              <Hero3DScene />
            </Suspense>
          </div>

        </div>
      </div>
    </section>
  );
}
