/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { testimonialsData } from '../data/portfolioData';
import { Quote } from 'lucide-react';

export const TestimonialsSection: React.FC = () => {
  return (
    <section className="py-24 sm:py-32 relative bg-[#070A13] border-t border-slate-900 overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-cyan-600/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Phunk-style centered header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs font-mono tracking-widest text-cyan-400 uppercase">
            COMMUNITY & COLLABORATOR FEEDBACK
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight mt-2 leading-[1.2]">
            What our partners think of <span className="text-cyan-400">Sunyoung.</span>
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-300">
            교육 현장과 학계, 공공기관의 협력 파트너들이 직접 전하는 실질적인 협업 평가입니다.
          </p>
        </div>

        {/* 3 Testimonials Grid matching Phunk's card row */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonialsData.map((t) => (
            <div
              key={t.id}
              className="p-8 rounded-3xl bg-gradient-to-b from-[#0C1220] to-[#070A14] border border-cyan-500/15 hover:border-cyan-400/40 transition-all duration-300 flex flex-col justify-between group shadow-xl"
            >
              <div className="space-y-4">
                <Quote className="w-8 h-8 text-cyan-400/40 group-hover:text-cyan-400 transition-colors" />
                <p className="text-sm sm:text-base text-slate-300 leading-relaxed font-normal">
                  "{t.quote}"
                </p>
              </div>

              <div className="mt-8 pt-6 border-t border-slate-800/80 flex items-center justify-between">
                <div>
                  <h4 className="text-sm font-bold text-white group-hover:text-cyan-300 transition-colors">
                    {t.name}
                  </h4>
                  <p className="text-xs text-slate-400">
                    {t.role} · {t.organization}
                  </p>
                </div>

                <span className="text-[11px] font-mono font-bold text-cyan-400 px-2 py-1 rounded bg-cyan-950/80 border border-cyan-500/30">
                  {t.highlightMetric}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
