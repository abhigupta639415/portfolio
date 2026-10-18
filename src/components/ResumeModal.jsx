import React, { useEffect } from 'react';
import {
  X,
  Download,
  Printer,
  FileText,
  Mail,
  Phone,
  MapPin,
  ExternalLink,
  Github,
  Linkedin,
  Code2,
  CheckCircle2,
  Award,
  GraduationCap,
  Briefcase
} from 'lucide-react';
import {
  personalInfo,
  aboutData,
  educationData,
  experienceData,
  projectsData,
  skillsData,
  achievementsData
} from '../data/portfolioData';

export default function ResumeModal({ isOpen, onClose }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      window.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'auto';
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  const handleDownload = () => {
    // Downloads the resume asset or triggers print to PDF
    const link = document.createElement('a');
    link.href = personalInfo.resumePdfUrl;
    link.download = 'Abhishek_Gupta_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/85 backdrop-blur-md overflow-y-auto"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
    >
      <div
        className="relative w-full max-w-4xl bg-white text-neutralDark-primary rounded-2xl shadow-2xl overflow-hidden my-auto max-h-[92vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Top Control Bar */}
        <div className="bg-[#24221D] text-cream px-6 py-4 flex items-center justify-between border-b border-taupe/40">
          <div className="flex items-center gap-2">
            <FileText className="w-5 h-5 text-gold" />
            <span className="font-bold text-sm tracking-wide text-cream">
              Resume Preview &middot; Abhishek Gupta
            </span>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={handleDownload}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-gold hover:bg-bronze text-neutralDark-primary hover:text-white text-xs font-semibold shadow-sm transition-all cursor-pointer"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Download PDF</span>
            </button>

            <button
              onClick={handlePrint}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#1F1D18] hover:bg-white/10 text-cream text-xs font-medium border border-taupe/30 transition-colors cursor-pointer"
            >
              <Printer className="w-3.5 h-3.5 text-gold" />
              <span>Print</span>
            </button>

            <button
              onClick={onClose}
              className="p-1.5 rounded-lg bg-[#1F1D18] text-cream/70 hover:text-cream transition-colors cursor-pointer"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Printable/Viewable Clean Resume Content */}
        <div className="p-6 sm:p-10 overflow-y-auto font-sans text-xs sm:text-sm leading-relaxed text-neutralDark-primary bg-white">
          
          {/* Header */}
          <div className="border-b border-taupe/40 pb-5 mb-5 text-center">
            <h1 className="text-2xl sm:text-3xl font-extrabold text-neutralDark-primary tracking-tight">
              {personalInfo.name}
            </h1>
            <div className="text-bronze font-semibold text-sm sm:text-base mt-0.5">
              {personalInfo.primaryTitle}
            </div>

            <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-1 text-neutralDark-secondary text-xs mt-2.5">
              <span>{personalInfo.location}</span>
              <span>&bull;</span>
              <a href={`mailto:${personalInfo.email}`} className="text-bronze hover:underline font-mono">
                {personalInfo.email}
              </a>
              <span>&bull;</span>
              <span className="font-mono">{personalInfo.phone}</span>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-1 text-neutralDark-secondary text-xs mt-1.5 font-mono">
              <a href={personalInfo.github} target="_blank" rel="noopener noreferrer" className="text-neutralDark-primary hover:text-bronze hover:underline">
                GitHub: abhigupta639415
              </a>
              <span>&bull;</span>
              <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer" className="text-neutralDark-primary hover:text-bronze hover:underline">
                LinkedIn: abhishek-gupta
              </a>
              <span>&bull;</span>
              <a href={personalInfo.leetcode} target="_blank" rel="noopener noreferrer" className="text-neutralDark-primary hover:text-bronze hover:underline">
                LeetCode: abhishek639415
              </a>
            </div>
          </div>

          {/* Education */}
          <div className="mb-5">
            <h2 className="text-xs font-bold text-neutralDark-primary uppercase tracking-wider border-b border-taupe/40 pb-1 mb-2">
              Education
            </h2>
            <div className="flex flex-col sm:flex-row sm:items-baseline justify-between">
              <div>
                <span className="font-bold text-neutralDark-primary">{educationData.institution}</span>
                <span className="text-neutralDark-secondary"> &mdash; {educationData.degree}</span>
              </div>
              <span className="text-xs font-medium text-neutralDark-secondary font-mono">{educationData.duration}</span>
            </div>
            <div className="text-xs text-neutralDark-secondary mt-1">
              <span className="font-semibold text-neutralDark-primary">Relevant Coursework: </span>
              {educationData.coursework.join(', ')}
            </div>
          </div>

          {/* Experience */}
          <div className="mb-5">
            <h2 className="text-xs font-bold text-neutralDark-primary uppercase tracking-wider border-b border-taupe/40 pb-1 mb-2">
              Work Experience
            </h2>
            {experienceData.map((exp, idx) => (
              <div key={idx} className="mb-3.5">
                <div className="flex flex-col sm:flex-row sm:items-baseline justify-between">
                  <div>
                    <span className="font-bold text-neutralDark-primary">{exp.position}</span>
                    <span className="text-bronze font-medium"> &mdash; {exp.company}</span>
                  </div>
                  <span className="text-xs font-medium text-neutralDark-secondary font-mono">{exp.duration}</span>
                </div>
                <ul className="list-disc list-outside pl-4 text-xs text-neutralDark-secondary space-y-1 mt-1.5">
                  {exp.achievements.map((ach, aIdx) => (
                    <li key={aIdx}>{ach}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Projects */}
          <div className="mb-5">
            <h2 className="text-xs font-bold text-neutralDark-primary uppercase tracking-wider border-b border-taupe/40 pb-1 mb-2">
              Key Projects
            </h2>
            {projectsData.map((proj) => (
              <div key={proj.id} className="mb-3.5">
                <div className="flex flex-col sm:flex-row sm:items-baseline justify-between">
                  <div>
                    <span className="font-bold text-neutralDark-primary">{proj.name}</span>
                    <span className="text-neutralDark-secondary"> &mdash; {proj.subtitle}</span>
                  </div>
                  <span className="text-xs font-medium text-neutralDark-secondary font-mono">{proj.duration}</span>
                </div>
                <div className="text-xs text-neutralDark-secondary mb-1">
                  <span className="font-semibold text-neutralDark-primary">Technologies: </span>
                  {proj.technologies.join(', ')}
                </div>
                <ul className="list-disc list-outside pl-4 text-xs text-neutralDark-secondary space-y-0.5">
                  {proj.keyFeatures.slice(0, 4).map((feat, fIdx) => (
                    <li key={fIdx}>{feat}</li>
                  ))}
                  <li className="font-medium text-bronze">
                    Engineering Impact: {proj.performanceAchievement}
                  </li>
                </ul>
              </div>
            ))}
          </div>

          {/* Technical Skills */}
          <div className="mb-5">
            <h2 className="text-xs font-bold text-neutralDark-primary uppercase tracking-wider border-b border-taupe/40 pb-1 mb-2">
              Technical Skills
            </h2>
            <div className="space-y-1 text-xs text-neutralDark-secondary">
              <div><span className="font-semibold text-neutralDark-primary">Languages: </span>{skillsData.languages.skills.join(', ')}</div>
              <div><span className="font-semibold text-neutralDark-primary">Frontend: </span>{skillsData.frontend.skills.join(', ')}</div>
              <div><span className="font-semibold text-neutralDark-primary">Backend: </span>{skillsData.backend.skills.join(', ')}</div>
              <div><span className="font-semibold text-neutralDark-primary">Database: </span>{skillsData.database.skills.join(', ')}</div>
              <div><span className="font-semibold text-neutralDark-primary">Tools & Platforms: </span>{skillsData.tools.skills.join(', ')}</div>
              <div><span className="font-semibold text-neutralDark-primary">Core CS: </span>{skillsData.core.skills.join(', ')}</div>
            </div>
          </div>

          {/* Achievements & Problem Solving */}
          <div>
            <h2 className="text-xs font-bold text-neutralDark-primary uppercase tracking-wider border-b border-taupe/40 pb-1 mb-2">
              Achievements & Certifications
            </h2>
            <ul className="list-disc list-outside pl-4 text-xs text-neutralDark-secondary space-y-1">
              <li>
                <span className="font-semibold text-neutralDark-primary">AWS Certified Cloud Practitioner: </span>
                Validated knowledge of cloud fundamentals and core AWS services including EC2, S3, and IAM.
              </li>
              <li>
                <span className="font-semibold text-neutralDark-primary">Smart India Hackathon 2025: </span>
                Selected at institute level among 100+ teams for developing an innovative technology-driven solution.
              </li>
              <li>
                <span className="font-semibold text-neutralDark-primary">B-PLAN — ENDEAVOUR'25: </span>
                Certificate of Participation awarded by E-CELL KIET, KIET Group of Institutions (2nd – 3rd May 2025).
              </li>
              <li>
                <span className="font-semibold text-neutralDark-primary">250+ LeetCode Problems: </span>
                Solved 250+ DSA problems covering arrays, strings, linked lists, recursion, searching, sorting, greedy algorithms, and dynamic programming.
              </li>
            </ul>
          </div>

        </div>
      </div>
    </div>
  );
}
