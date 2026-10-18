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
  Building2,
  QrCode,
  Lightbulb
} from 'lucide-react';
import { credentialsData } from '../data/portfolioData';

export default function Achievements({ onOpenCertificate }) {
  const [activeTab, setActiveTab] = useState('all');

  const getIcon = (iconType) => {
    switch (iconType) {
      case 'Cloud':
        return <Cloud className="w-5 h-5 text-[#CE8946]" />;
      case 'Network':
        return <Network className="w-5 h-5 text-[#D4AF37]" />;
      case 'Briefcase':
        return <Briefcase className="w-5 h-5 text-[#CE8946]" />;
      case 'Trophy':
        return <Trophy className="w-5 h-5 text-[#D4AF37]" />;
      case 'Award':
        return <Award className="w-5 h-5 text-[#CE8946]" />;
      case 'Lightbulb':
        return <Lightbulb className="w-5 h-5 text-[#D4AF37]" />;
      case 'Terminal':
        return <Terminal className="w-5 h-5 text-[#BDB76B]" />;
      default:
        return <CheckCircle2 className="w-5 h-5 text-[#D4AF37]" />;
    }
  };

  const displayedCategories = activeTab === 'all'
    ? credentialsData.categories
    : credentialsData.categories.filter((cat) => cat.id === activeTab);

  return (
    <section id="achievements" className="py-24 relative bg-[#FDFBD4] scroll-mt-20">
      <div id="credentials" className="scroll-mt-20" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-start mb-10">
          <div className="flex items-center gap-2 mb-2">
            <span className="w-8 h-[2px] bg-[#D4AF37]" />
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#CE8946]">
              08 &middot; Credentials & Recognition
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-[#171717]">
            {credentialsData.heading}
          </h2>
          <p className="text-sm sm:text-base text-[#5F5B50] mt-2 max-w-2xl leading-relaxed">
            {credentialsData.subtitle}
          </p>
        </div>

        {/* Category Filter Tabs */}
        <div className="flex items-center gap-2 pb-2 mb-10 overflow-x-auto no-scrollbar">
          <button
            type="button"
            onClick={() => setActiveTab('all')}
            className={`px-4 py-2 rounded-xl text-xs font-bold whitespace-nowrap transition-all ${
              activeTab === 'all'
                ? 'bg-[#D4AF37] text-[#171717] shadow-sm'
                : 'bg-[#FFFFFF] text-[#5F5B50] hover:text-[#171717] hover:bg-[#FDFBD4] border border-[#BDB76B]/40'
            }`}
          >
            All Credentials (8)
          </button>
          
          {credentialsData.categories.map((category) => (
            <button
              key={category.id}
              type="button"
              onClick={() => setActiveTab(category.id)}
              className={`px-4 py-2 rounded-xl text-xs font-bold whitespace-nowrap transition-all flex items-center gap-1.5 ${
                activeTab === category.id
                  ? 'bg-[#D4AF37] text-[#171717] shadow-sm'
                  : 'bg-[#FFFFFF] text-[#5F5B50] hover:text-[#171717] hover:bg-[#FDFBD4] border border-[#BDB76B]/40'
              }`}
            >
              <span>{category.name}</span>
              <span className="text-[10px] font-mono px-1.5 py-0.2 rounded-full bg-[#FDFBD4] text-[#171717] border border-[#BDB76B]">
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
              <div className="flex items-center justify-between border-b border-[#BDB76B]/30 pb-3">
                <div className="flex items-center gap-3">
                  <span className="px-3 py-1 rounded-lg text-xs font-mono font-bold uppercase tracking-wider bg-[#FDFBD4] text-[#171717] border border-[#BDB76B]">
                    {category.name}
                  </span>
                  <span className="text-xs text-[#5F5B50] hidden sm:inline">
                    {category.description}
                  </span>
                </div>
                <span className="text-xs font-mono text-[#5F5B50] font-semibold">
                  {category.items.length} {category.items.length === 1 ? 'Record' : 'Records'}
                </span>
              </div>

              {/* Cards Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {category.items.map((item) => (
                  <div
                    key={item.id}
                    className="p-6 rounded-2xl bg-[#FFFFFF] border border-[#BDB76B]/35 hover:border-[#D4AF37] transition-all duration-300 shadow-card-soft hover:shadow-card-hover flex flex-col justify-between group relative overflow-hidden"
                  >
                    {/* Gold accent line at top */}
                    <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-[#D4AF37] via-[#CE8946] to-[#BDB76B]" />

                    <div>
                      {/* Top Bar: Icon + Badge */}
                      <div className="flex items-center justify-between mb-4 mt-1">
                        <div className="w-10 h-10 rounded-xl bg-[#FDFBD4] border border-[#BDB76B]/35 flex items-center justify-center group-hover:scale-105 transition-transform">
                          {getIcon(item.iconType)}
                        </div>
                        <span className="px-2.5 py-0.5 rounded text-[11px] font-mono font-bold bg-[#FDFBD4] text-[#171717] border border-[#BDB76B]">
                          {item.badge}
                        </span>
                      </div>

                      {/* Organization & Date */}
                      <div className="flex items-center justify-between text-xs text-[#5F5B50] font-mono mb-1.5">
                        <span className="flex items-center gap-1.5 text-[#CE8946] font-bold truncate max-w-[65%]">
                          <Building2 className="w-3.5 h-3.5 text-[#D4AF37] shrink-0" />
                          <span className="truncate">{item.organization}</span>
                        </span>
                        {item.issueDate && (
                          <span className="text-[#5F5B50] shrink-0 font-semibold">
                            {item.duration || item.issueDate}
                          </span>
                        )}
                      </div>

                      {/* Title */}
                      <h3 className="text-lg font-extrabold text-[#171717] tracking-tight mb-2">
                        {item.title}
                      </h3>

                      {/* Expiration date if applicable */}
                      {item.expirationDate && (
                        <div className="text-[11px] font-mono text-[#CE8946] font-semibold mb-2">
                          Valid Until: {item.expirationDate}
                        </div>
                      )}

                      {/* Description */}
                      <p className="text-xs sm:text-sm text-[#5F5B50] leading-relaxed mb-4">
                        {item.description}
                      </p>

                      {/* Skills or recognitions preview */}
                      {item.skillsCovered && (
                        <div className="mb-4 pt-2 border-t border-[#BDB76B]/20">
                          <div className="text-[11px] font-mono uppercase text-[#5F5B50] font-bold mb-1.5">
                            Focus Areas / Skills:
                          </div>
                          <div className="flex flex-wrap gap-1">
                            {item.skillsCovered.slice(0, 4).map((skill, idx) => (
                              <span
                                key={idx}
                                className="text-[10px] font-mono px-2 py-0.5 rounded bg-[#FDFBD4] text-[#24221D] border border-[#BDB76B]"
                              >
                                {skill}
                              </span>
                            ))}
                            {item.skillsCovered.length > 4 && (
                              <span className="text-[10px] font-mono px-1.5 py-0.5 text-[#CE8946] font-bold">
                                +{item.skillsCovered.length - 4} more
                              </span>
                            )}
                          </div>
                        </div>
                      )}

                      {item.recognizes && (
                        <div className="mb-4 pt-2 border-t border-[#BDB76B]/20">
                          <div className="text-[11px] font-mono uppercase text-[#5F5B50] font-bold mb-1.5">
                            Certificate Recognizes:
                          </div>
                          <div className="flex flex-wrap gap-1">
                            {item.recognizes.slice(0, 3).map((rec, idx) => (
                              <span
                                key={idx}
                                className="text-[10px] font-mono px-2 py-0.5 rounded bg-[#FDFBD4] text-[#24221D] border border-[#BDB76B]"
                              >
                                {rec}
                              </span>
                            ))}
                          </div>
                        </div>
                      )}

                      {item.additionalAchievement && (
                        <div className="mb-4 p-2.5 rounded-lg bg-[#FDFBD4] border border-[#BDB76B] text-xs text-[#24221D]">
                          <span className="font-bold text-[#CE8946]">Program Contribution: </span>
                          {item.additionalAchievement}
                        </div>
                      )}

                      {/* Validation / QR Notice */}
                      {item.validationNumber && (
                        <div className="text-[11px] font-mono text-[#5F5B50] mb-2 truncate">
                          <span className="font-semibold text-[#171717]">Validation: </span>
                          <span className="text-[#CE8946] font-mono">{item.validationNumber}</span>
                        </div>
                      )}

                      {item.qrNotice && (
                        <div className="flex items-center gap-1.5 text-[11px] font-mono text-[#CE8946] font-bold mb-2">
                          <QrCode className="w-3.5 h-3.5 text-[#D4AF37]" />
                          <span>{item.qrNotice}</span>
                        </div>
                      )}
                    </div>

                    {/* Action Buttons */}
                    <div className="pt-4 border-t border-[#BDB76B]/25 flex items-center gap-2.5 flex-wrap">
                      {item.hasCertificate && (
                        <button
                          type="button"
                          onClick={() => onOpenCertificate && onOpenCertificate(item)}
                          className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-[#D4AF37] hover:bg-[#CE8946] text-[#171717] hover:text-white font-bold text-xs shadow-sm transition-all cursor-pointer"
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
                          className="inline-flex items-center gap-1.5 px-3 py-2 rounded-xl bg-[#FFFFFF] hover:bg-[#FDFBD4] text-[#24221D] hover:text-[#171717] text-xs font-semibold border border-[#BDB76B] transition-colors"
                        >
                          <span>Verify Credential</span>
                          <ExternalLink className="w-3 h-3 text-[#CE8946]" />
                        </a>
                      )}

                      {/* External profile link (e.g. LeetCode) */}
                      {item.externalUrl && (
                        <a
                          href={item.externalUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-[#FDFBD4] hover:bg-[#D4AF37]/20 text-[#171717] border border-[#BDB76B] text-xs font-bold transition-colors"
                        >
                          <span>View LeetCode Profile</span>
                          <ExternalLink className="w-3.5 h-3.5 text-[#CE8946]" />
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
