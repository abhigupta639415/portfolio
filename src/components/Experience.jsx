import React from 'react';
import {
  Briefcase,
  Calendar,
  Building2,
  CheckCircle2,
  Eye,
  MapPin
} from 'lucide-react';
import { experienceData } from '../data/portfolioData';

export default function Experience({ onOpenCertificate }) {
  const getCompanyLogo = (expId, company) => {
    if (expId === 'mlsa-experience' || company.includes('MLSA')) {
      return (
        <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#C49A2C] to-[#CE8946] dark:from-[#D4AF37] dark:to-[#CE8946] p-[1.5px] shadow-2xs shrink-0">
          <div className="w-full h-full bg-[#FFFFFF] dark:bg-[#1D1D1A] rounded-[9px] flex items-center justify-center p-1">
            <svg viewBox="0 0 32 32" className="w-5 h-5 text-[#CE8946]" fill="currentColor">
              <path d="M16 2L4 6v9c0 8.5 5.5 14 12 15 6.5-1 12-6.5 12-15V6L16 2z" fill="#C49A2C" opacity="0.25" />
              <path d="M16 4.2L6 7.5v7.5c0 7.2 4.5 11.8 10 12.8 5.5-1 10-5.6 10-12.8V7.5L16 4.2z" fill="none" stroke="#CE8946" strokeWidth="1.5" />
              <circle cx="16" cy="11.5" r="2.5" fill="#CE8946" />
              <path d="M12 19.5c0-2.2 1.8-3.5 4-3.5s4 1.3 4 3.5" fill="none" stroke="#CE8946" strokeWidth="1.5" strokeLinecap="round" />
            </svg>
          </div>
        </div>
      );
    }

    return (
      <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#C49A2C] to-[#CE8946] dark:from-[#D4AF37] dark:to-[#CE8946] p-[1.5px] shadow-2xs shrink-0">
        <div className="w-full h-full bg-[#FFFFFF] dark:bg-[#1D1D1A] rounded-[9px] flex items-center justify-center font-mono font-bold text-xs text-[#171717] dark:text-[#F5F3EA]">
          CV
        </div>
      </div>
    );
  };

  return (
    <section id="experience" className="py-20 sm:py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-start mb-10 sm:mb-12">
          <div className="flex items-center gap-2 mb-2">
            <span className="w-6 h-[2px] bg-[#C49A2C] dark:bg-[#D4AF37]" />
            <span className="text-xs font-mono font-semibold uppercase tracking-wider text-[#C49A2C] dark:text-[#D4AF37]">
              03 &middot; Experience
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-[#171717] dark:text-[#F5F3EA]">
            Work Experience
          </h2>
          <p className="text-sm sm:text-base text-[#66645F] dark:text-[#B7B4AA] mt-2 max-w-xl">
            Hands-on professional engineering internships delivering production frontend architectures, full-stack web applications, and collaborative Git workflows.
          </p>
        </div>

        {/* Experience Timeline */}
        <div className="relative border-l-2 border-[#E7E3D8] dark:border-[#34332E] ml-4 sm:ml-6 pl-6 sm:pl-8 space-y-10">
          {experienceData.map((exp, index) => (
            <div key={exp.id || index} className="relative group">
              
              {/* Timeline Marker Node */}
              <div className="absolute -left-[31px] sm:-left-[39px] top-2 w-4 h-4 rounded-full bg-[#FFFFFF] dark:bg-[#1D1D1A] border-2 border-[#C49A2C] dark:border-[#D4AF37] group-hover:bg-[#C49A2C] dark:group-hover:bg-[#D4AF37] transition-colors shadow-2xs" />

              <div className="p-6 sm:p-8 rounded-2xl bg-[#FFFFFF] dark:bg-[#1D1D1A] border border-[#E7E3D8] dark:border-[#34332E] hover:border-[#C49A2C] dark:hover:border-[#D4AF37] transition-all duration-200 shadow-2xs hover:shadow-xs">
                
                {/* Header Info */}
                <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 mb-4">
                  <div className="flex items-start gap-3.5">
                    {getCompanyLogo(exp.id, exp.company)}
                    
                    <div>
                      <div className="flex items-center gap-2 flex-wrap">
                        <h3 className="text-xl sm:text-2xl font-bold text-[#171717] dark:text-[#F5F3EA] tracking-tight">
                          {exp.position}
                        </h3>
                        <span className="px-2.5 py-0.5 rounded text-xs font-mono font-medium bg-[#FAFAF8] dark:bg-[#23231F] text-[#171717] dark:text-[#F5F3EA] border border-[#E7E3D8] dark:border-[#34332E]">
                          {exp.employmentType || 'Internship'}
                        </span>
                      </div>

                      <div className="flex items-center gap-2 text-[#66645F] dark:text-[#B7B4AA] font-medium text-sm mt-1">
                        <Building2 className="w-4 h-4 text-[#CE8946]" />
                        <span className="font-bold text-[#CE8946]">{exp.company}</span>
                        <span className="text-[#E7E3D8] dark:text-[#34332E]">&middot;</span>
                        <span className="text-xs sm:text-sm">
                          {exp.location}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Duration Badge & View Certificate Button */}
                  <div className="flex items-center gap-2.5 shrink-0 flex-wrap">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-mono font-medium bg-[#FAFAF8] dark:bg-[#23231F] border border-[#E7E3D8] dark:border-[#34332E] text-[#171717] dark:text-[#F5F3EA]">
                      <Calendar className="w-3.5 h-3.5 text-[#C49A2C] dark:text-[#D4AF37]" />
                      <span>{exp.duration}</span>
                    </span>

                    {exp.certificate && (
                      <button
                        type="button"
                        onClick={() => onOpenCertificate(exp.certificate)}
                        className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold transition-all duration-150 cursor-pointer shadow-2xs
                          bg-[#F4E8C1] hover:bg-[#C49A2C] text-[#171717] hover:text-white
                          dark:bg-[#29281F] dark:hover:bg-[#D4AF37] dark:text-[#F5F3EA] dark:hover:text-[#171717]
                          border border-[#E7E3D8] dark:border-[#34332E]"
                        title="Preview internship certificate"
                      >
                        <Eye className="w-3.5 h-3.5" />
                        <span>View Certificate</span>
                      </button>
                    )}
                  </div>
                </div>

                {/* Description */}
                <p className="text-sm text-[#66645F] dark:text-[#B7B4AA] leading-relaxed mb-4">
                  {exp.description}
                </p>

                {/* Bullet Points */}
                <ul className="space-y-2 mb-5">
                  {exp.achievements.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-[#171717]/90 dark:text-[#F5F3EA]/90 leading-relaxed">
                      <CheckCircle2 className="w-4 h-4 text-[#C49A2C] dark:text-[#D4AF37] shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>

                {/* Skills Pill Row */}
                <div className="pt-4 border-t border-[#E7E3D8] dark:border-[#34332E] flex flex-wrap gap-1.5">
                  {exp.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-2.5 py-1 rounded-md text-xs font-mono
                        bg-[#FAFAF8] dark:bg-[#23231F]
                        text-[#171717] dark:text-[#F5F3EA]
                        border border-[#E7E3D8] dark:border-[#34332E]"
                    >
                      {skill}
                    </span>
                  ))}
                </div>

              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
