import React, { useEffect } from 'react';
import {
  X,
  Download,
  Printer,
  FileText
} from 'lucide-react';
import {
  personalInfo,
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
    const link = document.createElement('a');
    link.href = personalInfo.resumePdfUrl;
    link.download = 'Abhishek_Gupta_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/75 dark:bg-black/85 backdrop-blur-md overflow-y-auto"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
    >
      <div
        className="relative w-full max-w-4xl rounded-2xl shadow-2xl overflow-hidden my-auto max-h-[92vh] flex flex-col
          bg-[#FFFFFF] dark:bg-[#1D1D1A]
          text-[#171717] dark:text-[#F5F3EA]
          border border-[#E7E3D8] dark:border-[#34332E]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Top Control Bar */}
        <div className="px-6 py-4 flex items-center justify-between border-b border-[#E7E3D8] dark:border-[#34332E] bg-[#FAFAF8] dark:bg-[#171716]">
          <div className="flex items-center gap-2">
            <FileText className="w-5 h-5 text-[#C49A2C] dark:text-[#D4AF37]" />
            <span className="font-bold text-sm tracking-wide text-[#171717] dark:text-[#F5F3EA]">
              Resume Preview &middot; Abhishek Gupta
            </span>
          </div>

          <div className="flex items-center gap-2 sm:gap-3">
            <button
              onClick={handleDownload}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold shadow-xs transition-all cursor-pointer
                bg-[#C49A2C] hover:bg-[#CE8946] text-white
                dark:bg-[#D4AF37] dark:hover:bg-[#CE8946] dark:text-[#171717]"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Download PDF</span>
            </button>

            <button
              onClick={handlePrint}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium border border-[#E7E3D8] dark:border-[#34332E] transition-colors cursor-pointer
                bg-[#FFFFFF] dark:bg-[#23231F] hover:bg-[#E7E3D8]/60 dark:hover:bg-[#34332E]
                text-[#171717] dark:text-[#F5F3EA]"
            >
              <Printer className="w-3.5 h-3.5 text-[#C49A2C] dark:text-[#D4AF37]" />
              <span>Print</span>
            </button>

            <button
              onClick={onClose}
              className="p-1.5 rounded-lg text-[#66645F] dark:text-[#B7B4AA] hover:text-[#171717] dark:hover:text-[#F5F3EA] bg-[#FFFFFF] dark:bg-[#23231F] border border-[#E7E3D8] dark:border-[#34332E] transition-colors cursor-pointer"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Printable/Viewable Clean Resume Content */}
        <div className="p-6 sm:p-10 overflow-y-auto font-sans text-xs sm:text-sm leading-relaxed text-[#171717] bg-[#FFFFFF]">
          
          {/* Header */}
          <div className="border-b border-[#E7E3D8] pb-5 mb-5 text-center">
            <h1 className="text-2xl sm:text-3xl font-extrabold text-[#171717] tracking-tight">
              {personalInfo.name}
            </h1>
            <div className="text-[#C49A2C] font-semibold text-sm sm:text-base mt-0.5">
              {personalInfo.primaryTitle}
            </div>

            <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-1 text-[#66645F] text-xs mt-2.5">
              <span>{personalInfo.location}</span>
              <span>&bull;</span>
              <a href={`mailto:${personalInfo.email}`} className="text-[#C49A2C] hover:underline font-mono">
                {personalInfo.email}
              </a>
              <span>&bull;</span>
              <span className="font-mono">{personalInfo.phone}</span>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-1 text-[#66645F] text-xs mt-1.5 font-mono">
              <a href={personalInfo.github} target="_blank" rel="noopener noreferrer" className="hover:text-[#C49A2C] hover:underline">
                GitHub: abhigupta639415
              </a>
              <span>&bull;</span>
              <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-[#C49A2C] hover:underline">
                LinkedIn: abhishek-gupta
              </a>
              <span>&bull;</span>
              <a href={personalInfo.leetcode} target="_blank" rel="noopener noreferrer" className="hover:text-[#C49A2C] hover:underline">
                LeetCode: abhishek639415
              </a>
            </div>
          </div>

          {/* Education */}
          <div className="mb-5">
            <h2 className="text-xs font-bold text-[#171717] uppercase tracking-wider border-b border-[#E7E3D8] pb-1 mb-2">
              Education
            </h2>
            <div className="flex flex-col sm:flex-row sm:items-baseline justify-between">
              <div>
                <span className="font-bold text-[#171717]">{educationData.institution}</span>
                <span className="text-[#66645F]"> &mdash; {educationData.degree}</span>
              </div>
              <span className="text-xs font-medium text-[#66645F] font-mono">{educationData.duration}</span>
            </div>
            <div className="text-xs text-[#66645F] mt-1">
              <span className="font-semibold text-[#171717]">Relevant Coursework: </span>
              {educationData.coursework.join(', ')}
            </div>
          </div>

          {/* Experience */}
          <div className="mb-5">
            <h2 className="text-xs font-bold text-[#171717] uppercase tracking-wider border-b border-[#E7E3D8] pb-1 mb-2">
              Work Experience
            </h2>
            {experienceData.map((exp, idx) => (
              <div key={idx} className="mb-3.5">
                <div className="flex flex-col sm:flex-row sm:items-baseline justify-between">
                  <div>
                    <span className="font-bold text-[#171717]">{exp.position}</span>
                    <span className="text-[#CE8946] font-medium"> &mdash; {exp.company}</span>
                  </div>
                  <span className="text-xs font-medium text-[#66645F] font-mono">{exp.duration}</span>
                </div>
                <ul className="list-disc list-outside pl-4 text-xs text-[#66645F] space-y-1 mt-1.5">
                  {exp.achievements.map((ach, aIdx) => (
                    <li key={aIdx}>{ach}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Projects */}
          <div className="mb-5">
            <h2 className="text-xs font-bold text-[#171717] uppercase tracking-wider border-b border-[#E7E3D8] pb-1 mb-2">
              Key Projects
            </h2>
            {projectsData.map((proj) => (
              <div key={proj.id} className="mb-3.5">
                <div className="flex flex-col sm:flex-row sm:items-baseline justify-between">
                  <div>
                    <span className="font-bold text-[#171717]">{proj.name}</span>
                    <span className="text-[#66645F]"> &mdash; {proj.subtitle}</span>
                  </div>
                  <span className="text-xs font-medium text-[#66645F] font-mono">{proj.duration}</span>
                </div>
                <div className="text-xs text-[#66645F] mb-1">
                  <span className="font-semibold text-[#171717]">Technologies: </span>
                  {proj.technologies.join(', ')}
                </div>
                <ul className="list-disc list-outside pl-4 text-xs text-[#66645F] space-y-0.5">
                  {proj.keyFeatures.slice(0, 3).map((feat, fIdx) => (
                    <li key={fIdx}>{feat}</li>
                  ))}
                  {proj.performanceAchievement && (
                    <li className="font-medium text-[#CE8946]">
                      Engineering Impact: {proj.performanceAchievement}
                    </li>
                  )}
                </ul>
              </div>
            ))}
          </div>

          {/* Technical Skills */}
          <div className="mb-5">
            <h2 className="text-xs font-bold text-[#171717] uppercase tracking-wider border-b border-[#E7E3D8] pb-1 mb-2">
              Technical Skills
            </h2>
            <div className="space-y-1 text-xs text-[#66645F]">
              <div><span className="font-semibold text-[#171717]">Languages: </span>{skillsData.languages.skills.join(', ')}</div>
              <div><span className="font-semibold text-[#171717]">Frontend: </span>{skillsData.frontend.skills.join(', ')}</div>
              <div><span className="font-semibold text-[#171717]">Backend: </span>{skillsData.backend.skills.join(', ')}</div>
              <div><span className="font-semibold text-[#171717]">Database: </span>{skillsData.database.skills.join(', ')}</div>
              <div><span className="font-semibold text-[#171717]">Core CS: </span>{skillsData.core.skills.join(', ')}</div>
              <div><span className="font-semibold text-[#171717]">Tools & Platforms: </span>{skillsData.tools.skills.join(', ')}</div>
              <div><span className="font-semibold text-[#171717]">AI / APIs: </span>{skillsData.ai.skills.join(', ')}</div>
            </div>
          </div>

          {/* Achievements */}
          <div>
            <h2 className="text-xs font-bold text-[#171717] uppercase tracking-wider border-b border-[#E7E3D8] pb-1 mb-2">
              Achievements & Certifications
            </h2>
            <ul className="list-disc list-outside pl-4 text-xs text-[#66645F] space-y-1">
              <li>
                <span className="font-semibold text-[#171717]">AWS Certified Cloud Practitioner: </span>
                Validated knowledge of cloud fundamentals and core AWS services including EC2, S3, and IAM.
              </li>
              <li>
                <span className="font-semibold text-[#171717]">Smart India Hackathon 2025: </span>
                Selected at institute level among 100+ teams for developing an innovative technology-driven solution.
              </li>
              <li>
                <span className="font-semibold text-[#171717]">B-PLAN — ENDEAVOUR'25: </span>
                Certificate of Participation awarded by E-CELL KIET, KIET Group of Institutions (2nd – 3rd May 2025).
              </li>
              <li>
                <span className="font-semibold text-[#171717]">250+ LeetCode Problems: </span>
                Solved 250+ DSA problems covering arrays, strings, linked lists, recursion, searching, sorting, greedy algorithms, and dynamic programming.
              </li>
            </ul>
          </div>

        </div>
      </div>
    </div>
  );
}
