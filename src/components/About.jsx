import React from 'react';
import { GraduationCap, MapPin, BookOpen, CheckCircle2 } from 'lucide-react';
import { aboutData, personalInfo } from '../data/portfolioData';

export default function About() {
  const { education } = aboutData;

  return (
    <section id="about" className="py-20 sm:py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-start mb-10 sm:mb-12">
          <div className="flex items-center gap-2 mb-2">
            <span className="w-6 h-[2px] bg-[#C49A2C] dark:bg-[#D4AF37]" />
            <span className="text-xs font-mono font-semibold uppercase tracking-wider text-[#C49A2C] dark:text-[#D4AF37]">
              01 &middot; Profile
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-[#171717] dark:text-[#F5F3EA]">
            {aboutData.heading}
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Left Column: Narrative Card */}
          <div className="lg:col-span-7 flex flex-col">
            <div className="flex-1 p-6 sm:p-8 rounded-2xl bg-[#FFFFFF] dark:bg-[#1D1D1A] border border-[#E7E3D8] dark:border-[#34332E] shadow-2xs flex flex-col justify-between">
              <div>
                <h3 className="text-lg font-bold text-[#171717] dark:text-[#F5F3EA] mb-4">
                  Full-Stack Development & AI Integration
                </h3>
                <p className="text-sm sm:text-base text-[#66645F] dark:text-[#B7B4AA] leading-relaxed">
                  {aboutData.paragraph}
                </p>
              </div>

              <div className="pt-6 mt-6 border-t border-[#E7E3D8] dark:border-[#34332E] flex flex-wrap items-center gap-3 text-xs font-mono">
                <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#FAFAF8] dark:bg-[#23231F] border border-[#E7E3D8] dark:border-[#34332E] text-[#171717] dark:text-[#F5F3EA]">
                  <MapPin className="w-3.5 h-3.5 text-[#C49A2C] dark:text-[#D4AF37]" />
                  <span>{personalInfo.location}</span>
                </div>
                <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#FAFAF8] dark:bg-[#23231F] border border-[#E7E3D8] dark:border-[#34332E] text-[#171717] dark:text-[#F5F3EA]">
                  <GraduationCap className="w-3.5 h-3.5 text-[#CE8946]" />
                  <span>{education.institution}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Education Card */}
          <div className="lg:col-span-5 flex flex-col">
            <div className="flex-1 p-6 sm:p-8 rounded-2xl bg-[#FFFFFF] dark:bg-[#1D1D1A] border border-[#E7E3D8] dark:border-[#34332E] shadow-2xs flex flex-col justify-between">
              
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-2">
                    <div className="p-2 rounded-xl bg-[#F4E8C1] dark:bg-[#29281F] text-[#C49A2C] dark:text-[#D4AF37]">
                      <GraduationCap className="w-5 h-5" />
                    </div>
                    <span className="text-xs font-mono uppercase tracking-wider text-[#C49A2C] dark:text-[#D4AF37] font-semibold">
                      Education
                    </span>
                  </div>
                  <span className="text-xs font-mono font-semibold px-2.5 py-1 rounded-md bg-[#F4E8C1] dark:bg-[#29281F] text-[#171717] dark:text-[#F5F3EA] border border-[#E7E3D8] dark:border-[#34332E]">
                    {education.duration}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-[#171717] dark:text-[#F5F3EA]">
                  {education.institution}
                </h3>
                <div className="text-sm font-semibold text-[#CE8946] mt-1">
                  {education.degree}
                </div>
                <div className="text-xs text-[#66645F] dark:text-[#B7B4AA] mt-0.5 font-mono">
                  {education.location}
                </div>

                {/* Coursework */}
                <div className="mt-5 pt-4 border-t border-[#E7E3D8] dark:border-[#34332E]">
                  <div className="text-xs font-mono uppercase tracking-wider text-[#66645F] dark:text-[#B7B4AA] font-semibold mb-2.5 flex items-center gap-1.5">
                    <BookOpen className="w-3.5 h-3.5 text-[#C49A2C] dark:text-[#D4AF37]" />
                    <span>Relevant Coursework</span>
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {education.coursework.map((course, idx) => (
                      <span
                        key={idx}
                        className="text-[11px] font-mono px-2.5 py-1 rounded-md bg-[#FAFAF8] dark:bg-[#23231F] border border-[#E7E3D8] dark:border-[#34332E] text-[#171717] dark:text-[#F5F3EA]"
                      >
                        {course}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="mt-5 text-[11px] font-mono text-[#66645F] dark:text-[#B7B4AA] flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500" />
                <span>On-track completion · Undergraduate</span>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
