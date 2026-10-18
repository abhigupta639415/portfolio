import React from 'react';
import {
  Code2,
  ExternalLink,
  Terminal,
  Binary
} from 'lucide-react';
import { problemSolvingData } from '../data/portfolioData';

export default function ProblemSolving() {
  return (
    <section id="problem-solving" className="py-20 relative bg-[#FDFBD4]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-start mb-12">
          <div className="flex items-center gap-2 mb-2">
            <span className="w-8 h-[2px] bg-[#D4AF37]" />
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#CE8946]">
              07 &middot; Algorithms & DSA
            </span>
          </div>
          
          <div className="flex flex-col sm:flex-row sm:items-end justify-between w-full gap-4">
            <div>
              <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-[#171717]">
                {problemSolvingData.heading}
              </h2>
              <p className="text-base text-[#CE8946] font-mono mt-1 font-bold">
                {problemSolvingData.summary}
              </p>
            </div>

            <a
              href={problemSolvingData.leetcodeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#D4AF37] hover:bg-[#CE8946] text-[#171717] hover:text-white font-bold text-xs sm:text-sm shadow-sm transition-all shrink-0"
            >
              <Code2 className="w-4 h-4" />
              <span>View My LeetCode</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>

        {/* Highlight Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center mb-10">
          
          {/* Left summary card */}
          <div className="lg:col-span-5 p-6 sm:p-8 rounded-2xl bg-[#FFFFFF] border border-[#BDB76B]/35 shadow-card-soft">
            <div className="flex items-center justify-between mb-4">
              <span className="text-xs font-mono uppercase tracking-wider text-[#5F5B50] font-bold">
                Core Competence
              </span>
              <span className="px-2.5 py-0.5 rounded text-[10px] font-mono font-bold bg-[#FDFBD4] text-[#171717] border border-[#BDB76B]">
                Data Structures & Algorithms
              </span>
            </div>

            <div className="text-4xl sm:text-5xl font-extrabold text-[#D4AF37] font-mono tracking-tight mb-2">
              250+
            </div>
            <div className="text-sm font-bold text-[#171717] mb-4">
              Algorithmic Problems Solved
            </div>
            
            <p className="text-xs sm:text-sm text-[#5F5B50] leading-relaxed mb-6">
              Continuous focus on optimal time and space complexity, scalable data structures, recursion trees, and dynamic programming state transitions.
            </p>

            <div className="pt-4 border-t border-[#BDB76B]/25 flex items-center justify-between text-xs font-mono text-[#5F5B50]">
              <span>Platform: LeetCode</span>
              <span className="text-[#CE8946] font-bold">Verified Problem Practice</span>
            </div>
          </div>

          {/* Right algorithmic snippet in editorial dark frame */}
          <div className="lg:col-span-7 rounded-2xl bg-[#24221D] border border-[#BDB76B]/40 p-5 shadow-2xl font-mono text-xs">
            <div className="flex items-center justify-between border-b border-[#BDB76B]/25 pb-3 mb-3 text-[#FDFBD4]/70">
              <div className="flex items-center gap-2">
                <Terminal className="w-4 h-4 text-[#D4AF37]" />
                <span>dsa_approach.cpp</span>
              </div>
              <span className="text-[11px] text-[#BDB76B]">C++ / Optimal Complexity</span>
            </div>

            <div className="space-y-1 text-[#FDFBD4] leading-relaxed overflow-x-auto">
              <div className="text-[#BDB76B]">// Problem Solving Strategy & Invariant Formulation</div>
              <div>
                <span className="text-[#D4AF37]">class</span> <span className="text-[#CE8946]">Solution</span> {'{'}
              </div>
              <div className="pl-4">
                <span className="text-[#D4AF37]">public</span>:
              </div>
              <div className="pl-6">
                <span className="text-[#BDB76B]">// Binary search invariant convergence</span>
              </div>
              <div className="pl-6">
                <span className="text-[#CE8946]">bool</span> <span className="text-[#D4AF37]">solveProblem</span>(vector&lt;<span className="text-[#CE8946]">int</span>&gt;& nums) {'{'}
              </div>
              <div className="pl-10">
                <span className="text-[#CE8946]">int</span> left = 0, right = nums.size() - 1;
              </div>
              <div className="pl-10">
                <span className="text-[#CE8946]">while</span> (left &lt;= right) {'{'}
              </div>
              <div className="pl-14 text-[#D4AF37]">
                <span className="text-[#CE8946]">int</span> mid = left + (right - left) / 2;
              </div>
              <div className="pl-14 text-[#BDB76B]">
                // O(log N) optimal logarithmic convergence
              </div>
              <div className="pl-10">{'}'}</div>
              <div className="pl-10">
                <span className="text-[#CE8946]">return</span> <span className="text-[#D4AF37]">true</span>;
              </div>
              <div className="pl-6">{'}'}</div>
              <div>{'};'}</div>
            </div>
          </div>

        </div>

        {/* 8 Topics Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          {problemSolvingData.topics.map((topic, idx) => (
            <div
              key={idx}
              className="p-4 rounded-xl bg-[#FFFFFF] border border-[#BDB76B]/35 hover:border-[#D4AF37] transition-all duration-200 shadow-sm"
            >
              <div className="flex items-center gap-2 mb-1.5">
                <Binary className="w-4 h-4 text-[#D4AF37]" />
                <h4 className="text-sm font-bold text-[#171717] font-mono">
                  {topic.name}
                </h4>
              </div>
              <p className="text-[11px] text-[#5F5B50] leading-snug">
                {topic.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
