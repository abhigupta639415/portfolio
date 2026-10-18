import React from 'react';
import { Code2, Briefcase, Cloud, GraduationCap } from 'lucide-react';

export default function RecruiterQuickView() {
  const credentials = [
    {
      value: '250+',
      label: 'DSA Problems Solved',
      detail: 'LeetCode Algorithms',
      icon: Code2,
      color: 'text-[#C49A2C] dark:text-[#D4AF37]',
      bg: 'bg-[#F4E8C1]/60 dark:bg-[#29281F]'
    },
    {
      value: '2+',
      label: 'Internships',
      detail: 'Codveda & MLSA KIET',
      icon: Briefcase,
      color: 'text-[#CE8946]',
      bg: 'bg-[#F4E8C1]/60 dark:bg-[#29281F]'
    },
    {
      value: 'AWS',
      label: 'Certified',
      detail: 'Cloud Practitioner',
      icon: Cloud,
      color: 'text-[#C49A2C] dark:text-[#D4AF37]',
      bg: 'bg-[#F4E8C1]/60 dark:bg-[#29281F]'
    },
    {
      value: 'B.Tech',
      label: 'CSE · 2023–2027',
      detail: 'KIET Group of Institutions',
      icon: GraduationCap,
      color: 'text-[#CE8946]',
      bg: 'bg-[#F4E8C1]/60 dark:bg-[#29281F]'
    }
  ];

  return (
    <section className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-6 sm:-mt-8 mb-16 sm:mb-20">
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
        {credentials.map((item, index) => {
          const Icon = item.icon;
          return (
            <div
              key={index}
              className="p-4 sm:p-5 rounded-2xl transition-all duration-200
                bg-[#FFFFFF] dark:bg-[#1D1D1A]
                border border-[#E7E3D8] dark:border-[#34332E]
                hover:border-[#C49A2C] dark:hover:border-[#D4AF37]
                shadow-2xs hover:shadow-xs flex items-center gap-3.5"
            >
              <div className={`p-2.5 rounded-xl ${item.bg} ${item.color} shrink-0`}>
                <Icon className="w-4 h-4 sm:w-5 sm:h-5" />
              </div>
              <div className="min-w-0">
                <div className="text-base sm:text-lg font-bold font-mono tracking-tight text-[#171717] dark:text-[#F5F3EA] truncate">
                  {item.value}
                </div>
                <div className="text-xs font-semibold text-[#171717]/85 dark:text-[#F5F3EA]/85 truncate">
                  {item.label}
                </div>
                <div className="text-[11px] text-[#66645F] dark:text-[#B7B4AA] font-mono truncate">
                  {item.detail}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
