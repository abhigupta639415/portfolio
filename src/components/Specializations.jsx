import React from 'react';
import { Layers, Brain, Server, Layout, Sparkles } from 'lucide-react';
import { specializationsData } from '../data/portfolioData';

export default function Specializations() {
  const getIcon = (iconName) => {
    switch (iconName) {
      case 'Layers':
        return <Layers className="w-6 h-6 text-[#D4AF37]" />;
      case 'Brain':
        return <Brain className="w-6 h-6 text-[#CE8946]" />;
      case 'Server':
        return <Server className="w-6 h-6 text-[#BDB76B]" />;
      case 'Layout':
        return <Layout className="w-6 h-6 text-[#D4AF37]" />;
      default:
        return <Sparkles className="w-6 h-6 text-[#D4AF37]" />;
    }
  };

  return (
    <section className="py-20 relative bg-[#FDFBD4]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-start mb-12">
          <div className="flex items-center gap-2 mb-2">
            <span className="w-8 h-[2px] bg-[#D4AF37]" />
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#CE8946]">
              04 &middot; Core Competencies
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-[#171717]">
            What I Build
          </h2>
          <p className="text-sm sm:text-base text-[#5F5B50] mt-2 max-w-xl">
            Architecting end-to-end applications from responsive user interfaces to resilient backend APIs and AI model integrations.
          </p>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {specializationsData.map((spec, index) => (
            <div
              key={index}
              className="group p-6 rounded-2xl bg-[#FFFFFF] border border-[#BDB76B]/35 hover:border-[#D4AF37] transition-all duration-300 shadow-card-soft hover:shadow-card-hover hover:-translate-y-1 flex flex-col justify-between"
            >
              <div>
                <div className="w-12 h-12 rounded-xl bg-[#FDFBD4] border border-[#BDB76B]/40 flex items-center justify-center mb-5 group-hover:scale-105 transition-transform">
                  {getIcon(spec.icon)}
                </div>

                <h3 className="text-lg font-bold text-[#171717] tracking-tight mb-2.5">
                  {spec.title}
                </h3>

                <p className="text-xs sm:text-sm text-[#5F5B50] leading-relaxed">
                  {spec.description}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-[#BDB76B]/25 flex items-center justify-between text-xs font-mono text-[#5F5B50] transition-colors">
                <span>Production Focus</span>
                <span className="text-[#D4AF37] font-bold">0{index + 1}</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
