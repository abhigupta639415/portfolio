import React from 'react';
import {
  Code2,
  Layers,
  Briefcase,
  Cloud,
  MapPin,
  GraduationCap
} from 'lucide-react';
import { aboutData, personalInfo } from '../data/portfolioData';

export default function About() {
  const statIcons = [
    <Code2 className="w-5 h-5 text-[#D4AF37]" />,
    <Layers className="w-5 h-5 text-[#CE8946]" />,
    <Briefcase className="w-5 h-5 text-[#BDB76B]" />,
    <Cloud className="w-5 h-5 text-[#D4AF37]" />,
  ];

  return (
    <section id="about" className="py-24 relative bg-[#FDFBD4]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-start mb-12">
          <div className="flex items-center gap-2 mb-2">
            <span className="w-8 h-[2px] bg-[#D4AF37]" />
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#CE8946]">
              01 &middot; Overview
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-[#171717]">
            About Me
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Narrative Card */}
          <div className="lg:col-span-7 space-y-4">
            <div className="p-6 sm:p-8 rounded-2xl bg-[#FFFFFF] border border-[#BDB76B]/35 shadow-card-soft leading-relaxed text-[#5F5B50] space-y-4">
              {aboutData.paragraphs.map((paragraph, index) => (
                <p key={index} className="text-sm sm:text-base text-[#24221D] leading-relaxed">
                  {paragraph}
                </p>
              ))}

              <div className="pt-4 mt-4 border-t border-[#BDB76B]/25 flex flex-wrap items-center gap-4 text-xs font-mono text-[#5F5B50]">
                <div className="flex items-center gap-1.5 bg-[#FDFBD4] px-3 py-1.5 rounded-lg border border-[#BDB76B]/40 font-semibold text-[#171717]">
                  <MapPin className="w-3.5 h-3.5 text-[#CE8946]" />
                  <span>{personalInfo.location}</span>
                </div>
                <div className="flex items-center gap-1.5 bg-[#FDFBD4] px-3 py-1.5 rounded-lg border border-[#BDB76B]/40 font-semibold text-[#171717]">
                  <GraduationCap className="w-3.5 h-3.5 text-[#D4AF37]" />
                  <span>KIET Group of Institutions</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Key Statistics Cards */}
          <div className="lg:col-span-5 grid grid-cols-2 gap-4">
            {aboutData.stats.map((stat, index) => (
              <div
                key={index}
                className="p-5 rounded-2xl bg-[#FFFFFF] border border-[#BDB76B]/35 hover:border-[#D4AF37] transition-all duration-300 shadow-card-soft hover:shadow-card-hover flex flex-col justify-between"
              >
                <div className="flex items-center justify-between mb-3">
                  <div className="w-10 h-10 rounded-xl bg-[#FDFBD4] border border-[#BDB76B]/35 flex items-center justify-center">
                    {statIcons[index]}
                  </div>
                  <span className="text-[11px] font-mono text-[#BDB76B] font-bold">#{index + 1}</span>
                </div>

                <div>
                  <div className="text-2xl sm:text-3xl font-extrabold text-[#D4AF37] font-mono tracking-tight">
                    {stat.value}
                  </div>
                  <div className="text-xs sm:text-sm font-bold text-[#171717] mt-1">
                    {stat.label}
                  </div>
                  <div className="text-[11px] text-[#5F5B50] mt-0.5">
                    {stat.subtext}
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}
