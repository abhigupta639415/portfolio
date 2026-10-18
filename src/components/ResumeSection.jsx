import React from 'react';
import { FileText, Download, Eye, Sparkles, CheckCircle2 } from 'lucide-react';
import { resumeData, personalInfo } from '../data/portfolioData';

export default function ResumeSection({ onOpenResume }) {
  const handleDirectDownload = () => {
    const link = document.createElement('a');
    link.href = personalInfo.resumePdfUrl;
    link.download = 'Abhishek_Gupta_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section id="resume" className="py-20 relative bg-cream">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="relative rounded-3xl bg-white border border-taupe p-8 sm:p-12 shadow-card-soft overflow-hidden text-center">
          
          {/* Subtle warm ambient accents */}
          <div className="absolute top-0 right-1/4 w-72 h-72 bg-gold/10 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-1/4 w-72 h-72 bg-bronze/10 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 max-w-2xl mx-auto">
            {/* Pill */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-cream border border-taupe text-xs font-mono text-neutralDark-secondary mb-6">
              <FileText className="w-3.5 h-3.5 text-gold" />
              <span className="font-medium">Recruiter-Ready Document</span>
            </div>

            {/* Heading */}
            <h2 className="text-3xl sm:text-4xl font-extrabold text-neutralDark-primary tracking-tight mb-4">
              {resumeData.heading}
            </h2>

            {/* Subtext */}
            <p className="text-base sm:text-lg text-neutralDark-secondary leading-relaxed mb-8">
              {resumeData.text}
            </p>

            {/* Key items included in resume */}
            <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-xs font-mono text-neutralDark-secondary mb-9">
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-gold" />
                2 Internships (Codveda & MLSA)
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-gold" />
                2 Deployed Projects
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-gold" />
                250+ DSA Problems
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-gold" />
                AWS & Cisco Certified
              </span>
            </div>

            {/* Buttons */}
            <div className="flex flex-wrap items-center justify-center gap-4">
              <button
                onClick={handleDirectDownload}
                className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-xl bg-gold hover:bg-bronze text-neutralDark-primary hover:text-white font-semibold text-sm shadow-md transition-all duration-200 transform hover:-translate-y-0.5 cursor-pointer"
              >
                <Download className="w-4 h-4" />
                <span>{resumeData.ctaText}</span>
              </button>

              <button
                onClick={onOpenResume}
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-cream hover:bg-white text-neutralDark-primary font-medium text-sm border border-taupe transition-colors shadow-sm cursor-pointer"
              >
                <Eye className="w-4 h-4 text-bronze" />
                <span>Preview Resume in Browser</span>
              </button>
            </div>

            <p className="text-xs text-neutralDark-secondary/70 mt-5 font-mono">
              Formatted according to standard Software Engineer recruiter guidelines
            </p>
          </div>

        </div>

      </div>
    </section>
  );
}
