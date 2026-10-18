import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import RecruiterQuickView from './components/RecruiterQuickView';
import About from './components/About';
import Experience from './components/Experience';
import Education from './components/Education';
import Specializations from './components/Specializations';
import Projects from './components/Projects';
import Skills from './components/Skills';
import ProblemSolving from './components/ProblemSolving';
import Achievements from './components/Achievements';
import ResumeSection from './components/ResumeSection';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ResumeModal from './components/ResumeModal';
import CertificateModal from './components/CertificateModal';

export default function App() {
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
    <div className="min-h-screen bg-[#080b11] text-slate-100 relative selection:bg-sky-500/30 selection:text-sky-200">
      
      {/* Navigation Header */}
      <Navbar onOpenResume={handleOpenResume} />

      {/* Main Content Area */}
      <main id="main-content">
        {/* 1. Hero Section */}
        <Hero onOpenResume={handleOpenResume} />

        {/* Recruiter Fast-Track Bar */}
        <RecruiterQuickView onOpenResume={handleOpenResume} />

        {/* 2. About Me */}
        <About />

        {/* 3. Work Experience */}
        <Experience onOpenCertificate={handleOpenCertificate} />

        {/* 4. Education */}
        <Education />

        {/* 5. What I Build / Specializations */}
        <Specializations />

        {/* 6. Featured Projects */}
        <Projects />

        {/* 7. Technical Skills */}
        <Skills />

        {/* 8. Problem Solving */}
        <ProblemSolving />

        {/* 9. Certifications & Achievements (Credentials) */}
        <Achievements onOpenCertificate={handleOpenCertificate} />

        {/* 10. Resume Call-to-Action */}
        <ResumeSection onOpenResume={handleOpenResume} />

        {/* 11. Contact */}
        <Contact />
      </main>

      {/* Footer */}
      <Footer />

      {/* Interactive Resume Modal / Viewer */}
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
