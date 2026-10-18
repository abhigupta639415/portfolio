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
    <div className="min-h-screen bg-[#FAFAF8] text-[#171717] dark:bg-[#0F0F0E] dark:text-[#F5F3EA] relative transition-colors duration-250">
      
      {/* Sticky Minimal Navbar */}
      <Navbar onOpenResume={handleOpenResume} />

      {/* Main Content Area - Exact 10-Step Page Order (Requirement #38) */}
      <main id="main-content">
        {/* 1. Hero */}
        <Hero onOpenResume={handleOpenResume} />

        {/* 2. Quick Credentials */}
        <RecruiterQuickView />

        {/* 3. About */}
        <About />

        {/* 4. Projects */}
        <Projects />

        {/* 5. Experience */}
        <Experience onOpenCertificate={handleOpenCertificate} />

        {/* 6. Skills */}
        <Skills />

        {/* 7. Certifications */}
        <Certifications onOpenCertificate={handleOpenCertificate} />

        {/* 8. Achievements */}
        <Achievements onOpenCertificate={handleOpenCertificate} />

        {/* 9. Contact */}
        <Contact />
      </main>

      {/* 10. Footer */}
      <Footer onOpenResume={handleOpenResume} />

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
  );
}

export default function App() {
  return (
    <ThemeProvider>
      <PortfolioApp />
    </ThemeProvider>
  );
}
