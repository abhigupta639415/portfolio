import React, { useState } from 'react';
import { ThemeProvider } from './context/ThemeContext';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import RecruiterQuickView from './components/RecruiterQuickView';
import About from './components/About';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Certifications from './components/Certifications';
import Achievements from './components/Achievements';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ResumeModal from './components/ResumeModal';
import CertificateModal from './components/CertificateModal';

// Zero-Gravity & Creative Technologist Components
import SmoothScroll from './components/SmoothScroll';
import CustomCursor from './components/CustomCursor';
import CursorGlow from './components/CursorGlow';
import Preloader from './components/Preloader';
import ScrollReveal from './components/ScrollReveal';
import ZeroGravityCanvas from './components/zerogravity/ZeroGravityCanvas';

function PortfolioApp() {
  const [isResumeOpen, setIsResumeOpen] = useState(false);
  const [selectedCertificate, setSelectedCertificate] = useState(null);

  const handleOpenResume = () => {
    setIsResumeOpen(true);
  };

  const handleCloseResume = () => {
    setIsResumeOpen(false);
  };

  const handleOpenCertificate = (certificate) => {
    setSelectedCertificate(certificate);
  };

  const handleCloseCertificate = () => {
    setSelectedCertificate(null);
  };

  return (
    <SmoothScroll>
      <div className="min-h-screen bg-[#FAFAF8] text-[#171717] dark:bg-[#0F0F0E] dark:text-[#F5F3EA] relative transition-colors duration-250 selection:bg-[#D4AF37]/30 selection:text-[#171717] dark:selection:text-[#F5F3EA]">
        
        {/* Intro Preloader (Session Cached) */}
        <Preloader />

        {/* Ambient Zero-Gravity WebGL 3D Canvas */}
        <ZeroGravityCanvas />

        {/* Cursor Glow Spotlight (Desktop) */}
        <CursorGlow />

        {/* Pinpoint Dot & Lerp Trailing Cursor (Desktop) */}
        <CustomCursor />

        {/* Sticky Minimal Navbar */}
        <Navbar onOpenResume={handleOpenResume} />

        {/* Main Content Area - Exact 10-Step Page Order */}
        <main id="main-content" className="relative z-10">
          {/* 1. Hero */}
          <Hero onOpenResume={handleOpenResume} />

          {/* 2. Quick Credentials */}
          <ScrollReveal delay={0.05}>
            <RecruiterQuickView />
          </ScrollReveal>

          {/* 3. About */}
          <ScrollReveal delay={0.05}>
            <About />
          </ScrollReveal>

          {/* 4. Projects */}
          <ScrollReveal delay={0.05}>
            <Projects />
          </ScrollReveal>

          {/* 5. Experience */}
          <ScrollReveal delay={0.05}>
            <Experience onOpenCertificate={handleOpenCertificate} />
          </ScrollReveal>

          {/* 6. Skills */}
          <ScrollReveal delay={0.05}>
            <Skills />
          </ScrollReveal>

          {/* 7. Certifications */}
          <ScrollReveal delay={0.05}>
            <Certifications onOpenCertificate={handleOpenCertificate} />
          </ScrollReveal>

          {/* 8. Achievements */}
          <ScrollReveal delay={0.05}>
            <Achievements onOpenCertificate={handleOpenCertificate} />
          </ScrollReveal>

          {/* 9. Contact */}
          <ScrollReveal delay={0.05}>
            <Contact />
          </ScrollReveal>
        </main>

        {/* 10. Footer */}
        <ScrollReveal delay={0.05}>
          <Footer onOpenResume={handleOpenResume} />
        </ScrollReveal>

        {/* Interactive Resume Modal */}
        <ResumeModal
          isOpen={isResumeOpen}
          onClose={handleCloseResume}
        />

        {/* Reusable Certificate Preview Modal */}
        <CertificateModal
          certificate={selectedCertificate}
          isOpen={Boolean(selectedCertificate)}
          onClose={handleCloseCertificate}
        />

      </div>
    </SmoothScroll>
  );
}

export default function App() {
  return (
    <ThemeProvider>
      <PortfolioApp />
    </ThemeProvider>
  );
}
