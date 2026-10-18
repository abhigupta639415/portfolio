import React, { useState } from 'react';
import {
  Cloud,
  Network,
  Briefcase,
  Trophy,
  Award,
  Terminal,
  ExternalLink,
  Eye,
  CheckCircle2,
  Calendar,
  Building2,
  ShieldCheck,
  QrCode,
  FileText
} from 'lucide-react';
import { credentialsData } from '../data/portfolioData';

export default function Achievements({ onOpenCertificate }) {
  const [activeTab, setActiveTab] = useState('all');

  const getIcon = (iconType) => {
    switch (iconType) {
      case 'Cloud':
        return <Cloud className="w-5 h-5 text-amber-400" />;
      case 'Network':
        return <Network className="w-5 h-5 text-sky-400" />;
      case 'Briefcase':
        return <Briefcase className="w-5 h-5 text-indigo-400" />;
      case 'Trophy':
        return <Trophy className="w-5 h-5 text-amber-400" />;
      case 'Award':
        return <Award className="w-5 h-5 text-purple-400" />;
      case 'Terminal':
        return <Terminal className="w-5 h-5 text-emerald-400" />;
      default:
        return <CheckCircle2 className="w-5 h-5 text-sky-400" />;
    }
  };

  const getCategoryBadgeStyle = (categoryId) => {
    switch (categoryId) {
      case 'certifications':
        return 'bg-amber-500/10 text-amber-300 border-amber-500/20';
      case 'internships':
        return 'bg-sky-500/10 text-sky-300 border-sky-500/20';
      case 'achievements':
        return 'bg-purple-500/10 text-purple-300 border-purple-500/20';
      default:
        return 'bg-slate-800 text-slate-300 border-white/10';
    }
  };

  // Filter categories based on active tab
  const displayedCategories = activeTab === 'all'
    ? credentialsData.categories
    : credentialsData.categories.filter((cat) => cat.id === activeTab);

  return (
    <section id="achievements" className="py-24 relative scroll-mt-20">
      {/* Target anchor for credentials as well */}
      <div id="credentials" className="scroll-mt-20" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-start mb-10">
          <div className="flex items-center gap-2 mb-2">
            <span className="w-8 h-[2px] bg-sky-400" />
            <span className="text-xs font-mono font-semibold uppercase tracking-wider text-sky-400">
              08 &middot; Credentials & Recognition
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
            {credentialsData.heading}
          </h2>
          <p className="text-sm sm:text-base text-slate-400 mt-2 max-w-2xl leading-relaxed">
            {credentialsData.subtitle}
          </p>
        </div>

        {/* Category Filter Tabs */}
        <div className="flex items-center gap-2 pb-2 mb-10 overflow-x-auto no-scrollbar">
          <button
            type="button"
            onClick={() => setActiveTab('all')}
            className={`px-4 py-2 rounded-xl text-xs font-semibold whitespace-nowrap transition-all ${
              activeTab === 'all'
                ? 'bg-sky-500 text-white shadow-md shadow-sky-500/20'
                : 'bg-slate-900/80 text-slate-400 hover:text-slate-200 hover:bg-slate-800 border border-white/5'
            }`}
          >
            All Credentials (7)
          </button>
          
          {credentialsData.categories.map((category) => (
            <button
              key={category.id}
              type="button"
              onClick={() => setActiveTab(category.id)}
              className={`px-4 py-2 rounded-xl text-xs font-semibold whitespace-nowrap transition-all flex items-center gap-1.5 ${
                activeTab === category.id
                  ? 'bg-sky-500 text-white shadow-md shadow-sky-500/20'
                  : 'bg-slate-900/80 text-slate-400 hover:text-slate-200 hover:bg-slate-800 border border-white/5'
              }`}
            >
              <span>{category.name}</span>
              <span className="text-[10px] font-mono px-1.5 py-0.2 rounded-full bg-black/30">
                {category.items.length}
              </span>
            </button>
          ))}
        </div>

        {/* Categories Sections */}
        <div className="space-y-14">
          {displayedCategories.map((category) => (
            <div key={category.id} className="space-y-5">
              
              {/* Category Sub-heading */}
              <div className="flex items-center justify-between border-b border-white/[0.08] pb-3">
                <div className="flex items-center gap-3">
                  <span className={`px-2.5 py-1 rounded-lg text-xs font-mono font-bold uppercase tracking-wider border ${getCategoryBadgeStyle(category.id)}`}>
                    {category.name}
                  </span>
                  <span className="text-xs text-slate-400 hidden sm:inline">
                    {category.description}
                  </span>
                </div>
                <span className="text-xs font-mono text-slate-500">
                  {category.items.length} {category.items.length === 1 ? 'Record' : 'Records'}
                </span>
              </div>

              {/* Cards Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {category.items.map((item) => (
                  <div
                    key={item.id}
                    className="p-6 rounded-2xl bg-[#0c121e] border border-white/[0.08] hover:border-sky-500/30 transition-all duration-300 shadow-xl flex flex-col justify-between group"
                  >
                    <div>
                      {/* Top Bar: Icon + Badge */}
                      <div className="flex items-center justify-between mb-4">
                        <div className="w-10 h-10 rounded-xl bg-slate-800/90 border border-white/5 flex items-center justify-center group-hover:scale-105 transition-transform">
                          {getIcon(item.iconType)}
                        </div>
                        <span className="px-2.5 py-0.5 rounded text-[11px] font-mono font-semibold bg-slate-900 text-slate-300 border border-white/10">
                          {item.badge}
                        </span>
                      </div>

                      {/* Organization & Date */}
                      <div className="flex items-center justify-between text-xs text-slate-400 font-mono mb-1.5">
                        <span className="flex items-center gap-1.5 text-slate-300 font-semibold truncate max-w-[65%]">
                          <Building2 className="w-3.5 h-3.5 text-sky-400 shrink-0" />
                          <span className="truncate">{item.organization}</span>
                        </span>
                        {item.issueDate && (
                          <span className="text-slate-400 shrink-0">
                            {item.duration || item.issueDate}
                          </span>
                        )}
                      </div>

                      {/* Title */}
                      <h3 className="text-lg font-bold text-white tracking-tight mb-2">
                        {item.title}
                      </h3>

                      {/* Expiration date if applicable */}
                      {item.expirationDate && (
                        <div className="text-[11px] font-mono text-amber-300/90 mb-2">
                          Valid Until: {item.expirationDate}
                        </div>
                      )}

                      {/* Description */}
                      <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-4">
                        {item.description}
                      </p>

                      {/* Skills or recognitions preview */}
                      {item.skillsCovered && (
                        <div className="mb-4 pt-2 border-t border-white/[0.04]">
                          <div className="text-[11px] font-mono uppercase text-slate-400 mb-1.5">
                            Practical Areas Covered:
                          </div>
                          <div className="flex flex-wrap gap-1">
                            {item.skillsCovered.slice(0, 4).map((skill, idx) => (
                              <span
                                key={idx}
                                className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-900 text-slate-300 border border-white/5"
                              >
                                {skill}
                              </span>
                            ))}
                            {item.skillsCovered.length > 4 && (
                              <span className="text-[10px] font-mono px-1.5 py-0.5 text-sky-400">
                                +{item.skillsCovered.length - 4} more
                              </span>
                            )}
                          </div>
                        </div>
                      )}

                      {item.recognizes && (
                        <div className="mb-4 pt-2 border-t border-white/[0.04]">
                          <div className="text-[11px] font-mono uppercase text-slate-400 mb-1.5">
                            Certificate Recognizes:
                          </div>
                          <div className="flex flex-wrap gap-1">
                            {item.recognizes.slice(0, 3).map((rec, idx) => (
                              <span
                                key={idx}
                                className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-900 text-slate-300 border border-white/5"
                              >
                                {rec}
                              </span>
                            ))}
                          </div>
                        </div>
                      )}

                      {item.additionalAchievement && (
                        <div className="mb-4 p-2.5 rounded-lg bg-sky-500/10 border border-sky-500/20 text-xs text-sky-200">
                          <span className="font-semibold text-white">Program Contribution: </span>
                          {item.additionalAchievement}
                        </div>
                      )}

                      {/* Validation / QR Notice */}
                      {item.validationNumber && (
                        <div className="text-[11px] font-mono text-slate-400 mb-2 truncate">
                          <span className="text-slate-500">Validation: </span>
                          <span className="text-sky-300">{item.validationNumber}</span>
                        </div>
                      )}

                      {item.qrNotice && (
                        <div className="flex items-center gap-1.5 text-[11px] font-mono text-emerald-400 mb-2">
                          <QrCode className="w-3.5 h-3.5" />
                          <span>{item.qrNotice}</span>
                        </div>
                      )}
                    </div>

                    {/* Action Buttons */}
                    <div className="pt-4 border-t border-white/[0.08] flex items-center gap-2.5 flex-wrap">
                      {item.hasCertificate && (
                        <button
                          type="button"
                          onClick={() => onOpenCertificate && onOpenCertificate(item)}
                          className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-sky-500 hover:bg-sky-400 text-white font-semibold text-xs shadow-md shadow-sky-500/20 transition-all cursor-pointer"
                        >
                          <Eye className="w-3.5 h-3.5" />
                          <span>View Certificate</span>
                        </button>
                      )}

                      {/* AWS Verify Credential Link */}
                      {item.verificationUrl && (
                        <a
                          href={item.verificationUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 px-3 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 hover:text-white text-xs font-medium border border-slate-700 transition-colors"
                        >
                          <span>Verify Credential</span>
                          <ExternalLink className="w-3 h-3 text-sky-400" />
                        </a>
                      )}

                      {/* External profile link (e.g. LeetCode) */}
                      {item.externalUrl && (
                        <a
                          href={item.externalUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-amber-500/10 hover:bg-amber-500/20 text-amber-300 hover:text-white border border-amber-500/30 text-xs font-semibold transition-colors"
                        >
                          <span>View LeetCode Profile</span>
                          <ExternalLink className="w-3.5 h-3.5" />
                        </a>
                      )}
                    </div>

                  </div>
                ))}
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
