import React, { useState, useEffect } from 'react';
import { Menu, X, FileText } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { personalInfo } from '../data/portfolioData';
import ThemeToggle from './ThemeToggle';
import MagneticButton from './zerogravity/MagneticButton';

const navLinks = [
  { name: 'Home', href: '#hero' },
  { name: 'About', href: '#about' },
  { name: 'Experience', href: '#experience' },
  { name: 'Projects', href: '#projects' },
  { name: 'Skills', href: '#skills' },
  { name: 'Certifications', href: '#certifications' },
  { name: 'Achievements', href: '#achievements' },
  { name: 'Contact', href: '#contact' },
];

export default function Navbar({ onOpenResume }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // Scrolled past top
      setIsScrolled(currentScrollY > 20);

      // Hide on scroll down, show on scroll up
      if (currentScrollY > lastScrollY && currentScrollY > 120 && !mobileMenuOpen) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
      setLastScrollY(currentScrollY);

      // Active section detection
      const sections = ['hero', 'about', 'experience', 'projects', 'skills', 'certifications', 'achievements', 'contact'];
      const scrollPosition = currentScrollY + 140;

      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el && el.offsetTop <= scrollPosition) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY, mobileMenuOpen]);

  const handleLinkClick = (e, href) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const targetId = href.replace('#', '');
    const element = document.getElementById(targetId);
    if (element) {
      if (window.lenis) {
        window.lenis.scrollTo(element, { offset: -75, duration: 1.2 });
      } else {
        const yOffset = -75;
        const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
        window.scrollTo({ top: y, behavior: 'smooth' });
      }
    }
  };

  return (
    <motion.header
      initial={{ y: 0 }}
      animate={{ y: isVisible ? 0 : -100 }}
      transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'py-3 bg-[#FAFAF8]/90 dark:bg-[#0F0F0E]/90 backdrop-blur-xl border-b border-[#E7E3D8] dark:border-[#34332E] shadow-sm'
          : 'py-4.5 bg-[#FAFAF8]/75 dark:bg-[#0F0F0E]/75 backdrop-blur-md border-b border-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Left: Branding & Subtitle */}
          <a
            href="#hero"
            onClick={(e) => handleLinkClick(e, '#hero')}
            className="flex items-center gap-3 group focus-visible:outline-none"
            aria-label="Abhishek Gupta - Home"
          >
            <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-[#C49A2C] to-[#CE8946] dark:from-[#D4AF37] dark:to-[#CE8946] p-[1.5px] shadow-xs transition-transform duration-200 group-hover:scale-105">
              <div className="w-full h-full bg-[#FAFAF8] dark:bg-[#0F0F0E] rounded-[10px] flex items-center justify-center">
                <span className="font-mono font-bold text-[#C49A2C] dark:text-[#D4AF37] text-xs tracking-wider">
                  AG
                </span>
              </div>
            </div>
            <div className="flex flex-col">
              <span className="font-bold text-sm tracking-tight text-[#171717] dark:text-[#F5F3EA] group-hover:text-[#C49A2C] dark:group-hover:text-[#D4AF37] transition-colors">
                {personalInfo.name}
              </span>
              <span className="text-[11px] font-mono text-[#66645F] dark:text-[#B7B4AA] leading-none">
                Full-Stack Developer
              </span>
            </div>
          </a>

          {/* Center: Desktop Navigation Links with Animated Pill Indicator */}
          <nav className="hidden lg:flex items-center gap-1 bg-[#FFFFFF]/85 dark:bg-[#1D1D1A]/85 border border-[#E7E3D8] dark:border-[#34332E] rounded-full px-3 py-1.5 shadow-2xs backdrop-blur-md relative">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.replace('#', '');
              return (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleLinkClick(e, link.href)}
                  className={`relative text-xs font-medium px-3 py-1.5 rounded-full transition-colors duration-150 z-10 ${
                    isActive
                      ? 'text-[#171717] dark:text-[#171717] font-semibold'
                      : 'text-[#66645F] dark:text-[#B7B4AA] hover:text-[#171717] dark:hover:text-[#F5F3EA]'
                  }`}
                >
                  {/* Fluid Framer Motion Layout Pill */}
                  {isActive && (
                    <motion.div
                      layoutId="activeNavPill"
                      className="absolute inset-0 bg-[#F4E8C1] dark:bg-[#D4AF37] rounded-full -z-10 shadow-xs"
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                  <span>{link.name}</span>
                </a>
              );
            })}
          </nav>

          {/* Right: Theme Toggle & Magnetic Resume Button */}
          <div className="hidden sm:flex items-center gap-2.5">
            <ThemeToggle />

            <MagneticButton radius={40} magnetStrength={0.25}>
              <button
                type="button"
                onClick={onOpenResume}
                className="inline-flex items-center gap-1.5 text-xs font-semibold px-3.5 py-2 rounded-xl transition-all duration-150 cursor-pointer
                  bg-[#C49A2C] hover:bg-[#CE8946] text-[#FFFFFF]
                  dark:bg-[#D4AF37] dark:hover:bg-[#CE8946] dark:text-[#171717]
                  shadow-xs hover:shadow-md hover:scale-102"
                title="View Resume in Browser"
              >
                <FileText className="w-3.5 h-3.5" />
                <span>Resume</span>
              </button>
            </MagneticButton>
          </div>

          {/* Mobile Right: Theme Toggle & Hamburger */}
          <div className="flex sm:hidden items-center gap-2">
            <ThemeToggle />
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-xl text-[#66645F] dark:text-[#B7B4AA] hover:text-[#171717] dark:hover:text-[#F5F3EA] border border-[#E7E3D8] dark:border-[#34332E] hover:bg-[#E7E3D8]/50 dark:hover:bg-[#34332E]/50 transition-colors"
              aria-label={mobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer Navigation with Staggered Entrance */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="sm:hidden border-b border-[#E7E3D8] dark:border-[#34332E] bg-[#FAFAF8]/98 dark:bg-[#0F0F0E]/98 backdrop-blur-2xl px-4 pt-3 pb-6 shadow-2xl overflow-hidden"
          >
            <div className="flex flex-col space-y-1">
              {navLinks.map((link, idx) => {
                const isActive = activeSection === link.href.replace('#', '');
                return (
                  <motion.a
                    key={link.name}
                    initial={{ x: -16, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: idx * 0.03, duration: 0.25 }}
                    href={link.href}
                    onClick={(e) => handleLinkClick(e, link.href)}
                    className={`text-sm font-medium px-4 py-2.5 rounded-xl transition-colors ${
                      isActive
                        ? 'text-[#171717] dark:text-[#171717] bg-[#F4E8C1] dark:bg-[#D4AF37] font-semibold shadow-xs'
                        : 'text-[#66645F] dark:text-[#B7B4AA] hover:bg-[#E7E3D8]/50 dark:hover:bg-[#1D1D1A] hover:text-[#171717] dark:hover:text-[#F5F3EA]'
                    }`}
                  >
                    {link.name}
                  </motion.a>
                );
              })}
            </div>

            {/* Mobile Actions */}
            <div className="pt-4 mt-3 border-t border-[#E7E3D8] dark:border-[#34332E] flex flex-col gap-2.5">
              <button
                type="button"
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenResume();
                }}
                className="w-full inline-flex items-center justify-center gap-2 text-xs font-semibold px-4 py-2.5 rounded-xl bg-[#C49A2C] dark:bg-[#D4AF37] text-white dark:text-[#171717] shadow-sm cursor-pointer"
              >
                <FileText className="w-4 h-4" />
                <span>Preview Resume</span>
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
