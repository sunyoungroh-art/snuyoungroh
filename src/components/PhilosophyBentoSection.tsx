/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { philosophyCards } from '../data/portfolioData';
import { ChevronLeft, ChevronRight, Quote, Sparkles, Compass, Lightbulb, TrendingUp } from 'lucide-react';

export const PhilosophyBentoSection: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? philosophyCards.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === philosophyCards.length - 1 ? 0 : prev + 1));
  };

  const current = philosophyCards[currentIndex];

  const getPhilosophyIcon = (id: string) => {
    switch (id) {
      case '01':
        return <Compass className="w-6 h-6 text-cyan-400" />;
      case '02':
        return <Lightbulb className="w-6 h-6 text-amber-400" />;
      case '03':
        return <TrendingUp className="w-6 h-6 text-emerald-400" />;
      default:
        return <Sparkles className="w-6 h-6 text-cyan-400" />;
    }
  };

  return (
    <section className="py-24 sm:py-32 relative bg-[#06080F] border-t border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Phunk connector mark */}
        <div className="flex justify-center mb-8">
          <div className="flex items-center gap-1.5 opacity-50">
            <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
            <span className="w-2.5 h-2.5 rounded-full border border-cyan-400" />
            <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
          </div>
        </div>

        {/* Section Title matching Phunk's 'Why work with us?' */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight leading-[1.2]">
            Why collaborate with <span className="text-cyan-400">Sunyoung?</span>
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-400">
            실증적 연구와 현장 교육 설계를 융합하는 3대 핵심 철학
          </p>
        </div>

        {/* Large Bento Showcase Box matching Phunk's Bento element */}
        <div className="max-w-5xl mx-auto rounded-3xl bg-gradient-to-b from-[#0C1424] to-[#070B14] border border-cyan-500/20 p-8 sm:p-12 lg:p-16 relative shadow-2xl overflow-hidden">
          {/* Subtle grid pattern in card background */}
          <div className="absolute inset-0 grid-dot-pattern opacity-30 pointer-events-none" />

          {/* Top navigation controls */}
          <div className="flex items-center justify-between pb-6 border-b border-slate-800 relative z-10">
            <div className="flex items-center gap-2">
              <span className="text-xs font-mono tracking-widest text-cyan-400 uppercase">
                {current.kicker}
              </span>
              <span className="text-xs text-slate-500">·</span>
              <span className="text-xs font-mono text-slate-400">
                0{currentIndex + 1} / 0{philosophyCards.length}
              </span>
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={prevSlide}
                className="p-2 rounded-full bg-slate-900 border border-slate-700/80 hover:border-cyan-400 hover:text-cyan-300 transition-colors text-slate-300"
                aria-label="이전 철학 보기"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <button
                onClick={nextSlide}
                className="p-2 rounded-full bg-slate-900 border border-slate-700/80 hover:border-cyan-400 hover:text-cyan-300 transition-colors text-slate-300"
                aria-label="다음 철학 보기"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Bento Body */}
          <div className="mt-8 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
            <div className="lg:col-span-8 space-y-6">
              <h3 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight leading-snug">
                {current.title}
              </h3>
              <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-normal">
                {current.description}
              </p>

              {/* Quote block */}
              <div className="p-4 sm:p-5 rounded-2xl bg-[#080D18] border border-cyan-500/20 flex items-start gap-3.5">
                <Quote className="w-5 h-5 text-cyan-400 shrink-0 mt-0.5" />
                <p className="text-sm sm:text-base font-medium text-cyan-200/90 italic">
                  {current.quote}
                </p>
              </div>

              {/* Quick Tab Indicators */}
              <div className="flex items-center gap-2 pt-2">
                {philosophyCards.map((p, idx) => (
                  <button
                    key={p.id}
                    onClick={() => setCurrentIndex(idx)}
                    className={`h-2 rounded-full transition-all duration-300 ${
                      currentIndex === idx ? 'w-8 bg-cyan-400' : 'w-2 bg-slate-700 hover:bg-slate-500'
                    }`}
                    aria-label={`철학 ${idx + 1}로 이동`}
                  />
                ))}
              </div>
            </div>

            {/* Right Graphic Anchor */}
            <div className="lg:col-span-4 flex items-center justify-center">
              <div className="w-44 h-44 sm:w-52 sm:h-52 rounded-3xl bg-gradient-to-br from-cyan-500/20 via-blue-600/10 to-transparent border border-cyan-400/30 flex flex-col items-center justify-center p-6 text-center shadow-2xl relative group">
                <div className="p-4 rounded-2xl bg-[#0A101D] border border-cyan-400/40 shadow-inner mb-3 group-hover:scale-110 transition-transform">
                  {getPhilosophyIcon(current.id)}
                </div>
                <span className="text-xs font-semibold text-white tracking-wide">
                  {current.kicker}
                </span>
                <span className="text-[11px] text-cyan-300/80 mt-1 font-mono">
                  METHOD 0{currentIndex + 1}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
