import React from 'react';
import {
  Trophy,
  Award,
  Terminal,
  Lightbulb,
  ExternalLink,
  Eye,
  Calendar,
  Building2,
  CheckCircle2
} from 'lucide-react';
import { achievementsData } from '../data/portfolioData';

export default function Achievements({ onOpenCertificate }) {
  const getIcon = (iconType) => {
    switch (iconType) {
      case 'Trophy':
        return <Trophy className="w-5 h-5 text-[#C49A2C] dark:text-[#D4AF37]" />;
      case 'Lightbulb':
        return <Lightbulb className="w-5 h-5 text-[#CE8946]" />;
      case 'Award':
        return <Award className="w-5 h-5 text-[#C49A2C] dark:text-[#D4AF37]" />;
      case 'Terminal':
        return <Terminal className="w-5 h-5 text-[#CE8946]" />;
      default:
        return <CheckCircle2 className="w-5 h-5 text-[#C49A2C] dark:text-[#D4AF37]" />;
    }
  };

  return (
    <section id="achievements" className="py-20 sm:py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-start mb-10 sm:mb-12">
          <div className="flex items-center gap-2 mb-2">
            <span className="w-6 h-[2px] bg-[#C49A2C] dark:bg-[#D4AF37]" />
            <span className="text-xs font-mono font-semibold uppercase tracking-wider text-[#C49A2C] dark:text-[#D4AF37]">
              06 &middot; Recognition
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-[#171717] dark:text-[#F5F3EA]">
            Achievements & Problem Solving
          </h2>
          <p className="text-sm sm:text-base text-[#66645F] dark:text-[#B7B4AA] mt-2 max-w-xl">
            National hackathon selections, innovation summit participation, and algorithmic milestones.
          </p>
        </div>

        {/* Achievements Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 items-stretch">
          {achievementsData.map((item) => (
            <div
              key={item.id}
              className="p-6 sm:p-7 rounded-2xl bg-[#FFFFFF] dark:bg-[#1D1D1A] border border-[#E7E3D8] dark:border-[#34332E] hover:border-[#C49A2C] dark:hover:border-[#D4AF37] transition-all duration-200 shadow-2xs hover:shadow-xs flex flex-col justify-between"
            >
              <div>
                {/* Header: Icon & Badge */}
                <div className="flex items-start justify-between gap-3 mb-4">
                  <div className="p-2.5 rounded-xl bg-[#FAFAF8] dark:bg-[#23231F] border border-[#E7E3D8] dark:border-[#34332E]">
                    {getIcon(item.iconType)}
                  </div>
                  <span className="px-2.5 py-1 rounded-md text-xs font-mono font-medium bg-[#FAFAF8] dark:bg-[#23231F] text-[#171717] dark:text-[#F5F3EA] border border-[#E7E3D8] dark:border-[#34332E]">
                    {item.badge}
                  </span>
                </div>

                {/* Title & Organization */}
                <h3 className="text-xl font-bold text-[#171717] dark:text-[#F5F3EA] tracking-tight">
                  {item.title}
                </h3>
                <div className="flex items-center gap-2 text-sm text-[#CE8946] font-semibold mt-1">
                  <Building2 className="w-3.5 h-3.5" />
                  <span>{item.organization}</span>
                </div>

                {/* Date */}
                {item.issueDate && (
                  <div className="mt-2 text-xs font-mono text-[#66645F] dark:text-[#B7B4AA] flex items-center gap-1.5">
                    <Calendar className="w-3.5 h-3.5 text-[#C49A2C] dark:text-[#D4AF37]" />
                    <span>{item.issueDate}</span>
                  </div>
                )}

                {/* Description */}
                <p className="mt-3.5 text-xs sm:text-sm text-[#66645F] dark:text-[#B7B4AA] leading-relaxed">
                  {item.description}
                </p>

                {/* Tags if available */}
                {item.tags && (
                  <div className="mt-4 flex flex-wrap gap-1.5">
                    {item.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2.5 py-0.5 rounded-md text-[11px] font-mono bg-[#FAFAF8] dark:bg-[#23231F] border border-[#E7E3D8] dark:border-[#34332E] text-[#171717] dark:text-[#F5F3EA]"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                )}
              </div>

              {/* Action Buttons */}
              <div className="pt-5 mt-6 border-t border-[#E7E3D8] dark:border-[#34332E]">
                {item.hasCertificate ? (
                  <button
                    type="button"
                    onClick={() => onOpenCertificate(item)}
                    className="w-full inline-flex items-center justify-center gap-1.5 px-4 py-2.5 rounded-xl font-semibold text-xs transition-all duration-150 cursor-pointer shadow-xs
                      bg-[#C49A2C] hover:bg-[#CE8946] text-white
                      dark:bg-[#D4AF37] dark:hover:bg-[#CE8946] dark:text-[#171717]"
                  >
                    <Eye className="w-3.5 h-3.5" />
                    <span>View Certificate</span>
                  </button>
                ) : item.externalUrl ? (
                  <a
                    href={item.externalUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full inline-flex items-center justify-center gap-1.5 px-4 py-2.5 rounded-xl font-semibold text-xs transition-colors cursor-pointer
                      bg-[#FAFAF8] dark:bg-[#23231F] hover:bg-[#E7E3D8]/60 dark:hover:bg-[#34332E]
                      text-[#171717] dark:text-[#F5F3EA]
                      border border-[#E7E3D8] dark:border-[#34332E]"
                  >
                    <span>View LeetCode Profile</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                ) : (
                  <div className="text-xs font-mono text-[#66645F] dark:text-[#B7B4AA] flex items-center gap-1.5 py-1">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500" />
                    <span>Institute Level Recognition</span>
                  </div>
                )}
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
