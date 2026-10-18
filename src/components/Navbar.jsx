import React, { useState, useEffect } from 'react';
import { Menu, X, FileText } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';
import ThemeToggle from './ThemeToggle';

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
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      const sections = ['hero', 'about', 'projects', 'experience', 'skills', 'certifications', 'achievements', 'contact'];
      const scrollPosition = window.scrollY + 140;

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
  }, []);

  const handleLinkClick = (e, href) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const targetId = href.replace('#', '');
    const element = document.getElementById(targetId);
    if (element) {
      const yOffset = -75;
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-250 ${
        isScrolled
          ? 'py-3.5 bg-[#FAFAF8]/90 dark:bg-[#0F0F0E]/90 backdrop-blur-md border-b border-[#E7E3D8] dark:border-[#34332E] shadow-xs'
          : 'py-4.5 bg-[#FAFAF8]/80 dark:bg-[#0F0F0E]/80 backdrop-blur-sm border-b border-transparent'
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

          {/* Center: Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-1 bg-[#FFFFFF]/90 dark:bg-[#1D1D1A]/90 border border-[#E7E3D8] dark:border-[#34332E] rounded-full px-3.5 py-1.5 shadow-2xs backdrop-blur-sm">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.replace('#', '');
              return (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleLinkClick(e, link.href)}
                  className={`text-xs font-medium px-3 py-1.5 rounded-full transition-all duration-150 ${
                    isActive
                      ? 'text-[#171717] dark:text-[#171717] bg-[#F4E8C1] dark:bg-[#D4AF37] font-semibold shadow-2xs'
                      : 'text-[#66645F] dark:text-[#B7B4AA] hover:text-[#171717] dark:hover:text-[#F5F3EA] hover:bg-[#FAFAF8] dark:hover:bg-[#23231F]'
                  }`}
                >
                  {link.name}
                </a>
              );
            })}
          </nav>

          {/* Right: Theme Toggle & Resume Button */}
          <div className="hidden sm:flex items-center gap-2.5">
            <ThemeToggle />

            <button
              type="button"
              onClick={onOpenResume}
              className="inline-flex items-center gap-1.5 text-xs font-semibold px-3.5 py-2 rounded-xl transition-all duration-150 cursor-pointer
                bg-[#C49A2C] hover:bg-[#CE8946] text-[#FFFFFF]
                dark:bg-[#D4AF37] dark:hover:bg-[#CE8946] dark:text-[#171717]
                shadow-xs hover:shadow-sm"
              title="View Resume in Browser"
            >
              <FileText className="w-3.5 h-3.5" />
              <span>Resume</span>
            </button>
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

      {/* Mobile Drawer Navigation */}
      {mobileMenuOpen && (
        <div className="sm:hidden border-b border-[#E7E3D8] dark:border-[#34332E] bg-[#FAFAF8]/98 dark:bg-[#0F0F0E]/98 backdrop-blur-xl px-4 pt-3 pb-6 shadow-xl animate-in fade-in duration-200">
          <div className="flex flex-col space-y-1">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.replace('#', '');
              return (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleLinkClick(e, link.href)}
                  className={`text-sm font-medium px-4 py-2.5 rounded-xl transition-colors ${
                    isActive
                      ? 'text-[#171717] dark:text-[#171717] bg-[#F4E8C1] dark:bg-[#D4AF37] font-semibold'
                      : 'text-[#66645F] dark:text-[#B7B4AA] hover:bg-[#E7E3D8]/50 dark:hover:bg-[#1D1D1A] hover:text-[#171717] dark:hover:text-[#F5F3EA]'
                  }`}
                >
                  {link.name}
                </a>
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
        </div>
      )}
    </header>
  );
}
