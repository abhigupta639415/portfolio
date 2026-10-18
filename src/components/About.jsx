import React from 'react';
import {
  Code2,
  Layers,
  Briefcase,
  Cloud,
  MapPin,
  GraduationCap,
  Sparkles,
  ArrowUpRight
} from 'lucide-react';
import { aboutData, personalInfo } from '../data/portfolioData';

export default function About() {
  const statIcons = [
    <Code2 className="w-5 h-5 text-indigo-400" />,
    <Layers className="w-5 h-5 text-sky-400" />,
    <Briefcase className="w-5 h-5 text-emerald-400" />,
    <Cloud className="w-5 h-5 text-amber-400" />,
  ];

  return (
    <section id="about" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-start mb-12">
          <div className="flex items-center gap-2 mb-2">
            <span className="w-8 h-[2px] bg-sky-400" />
            <span className="text-xs font-mono font-semibold uppercase tracking-wider text-sky-400">
              01 &middot; Overview
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
            About Me
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Polished Narrative */}
          <div className="lg:col-span-7 space-y-4">
            <div className="p-6 sm:p-8 rounded-2xl bg-[#0c121e]/80 border border-white/[0.08] shadow-lg leading-relaxed text-slate-300 space-y-4">
              {aboutData.paragraphs.map((paragraph, index) => (
                <p key={index} className="text-sm sm:text-base text-slate-300 leading-relaxed">
                  {paragraph}
                </p>
              ))}

              <div className="pt-4 mt-4 border-t border-white/[0.08] flex flex-wrap items-center gap-4 text-xs font-mono text-slate-400">
                <div className="flex items-center gap-1.5 bg-slate-800/80 px-3 py-1.5 rounded-lg border border-white/5">
                  <MapPin className="w-3.5 h-3.5 text-sky-400" />
                  <span>{personalInfo.location}</span>
                </div>
                <div className="flex items-center gap-1.5 bg-slate-800/80 px-3 py-1.5 rounded-lg border border-white/5">
                  <GraduationCap className="w-3.5 h-3.5 text-indigo-400" />
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
                className="p-5 rounded-2xl bg-[#0c121e] border border-white/[0.08] hover:border-sky-500/30 transition-all duration-300 hover:shadow-glow-sm flex flex-col justify-between"
              >
                <div className="flex items-center justify-between mb-3">
                  <div className="w-10 h-10 rounded-xl bg-slate-800/80 border border-white/5 flex items-center justify-center">
                    {statIcons[index]}
                  </div>
                  <span className="text-[11px] font-mono text-slate-500">#{index + 1}</span>
                </div>

                <div>
                  <div className="text-2xl sm:text-3xl font-extrabold text-white font-mono tracking-tight">
                    {stat.value}
                  </div>
                  <div className="text-xs sm:text-sm font-semibold text-slate-200 mt-1">
                    {stat.label}
                  </div>
                  <div className="text-[11px] text-slate-400 mt-0.5">
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
