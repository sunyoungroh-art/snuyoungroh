/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { pillarsData } from '../data/portfolioData';
import { Layers, BarChart3, Laptop, ArrowRight, Check } from 'lucide-react';

export const PillarsSection: React.FC = () => {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  const getPillarIcon = (idx: number) => {
    switch (idx) {
      case 0:
        return <Layers className="w-5 h-5 text-cyan-400" />;
      case 1:
        return <BarChart3 className="w-5 h-5 text-sky-400" />;
      case 2:
        return <Laptop className="w-5 h-5 text-blue-400" />;
      default:
        return <Layers className="w-5 h-5 text-cyan-400" />;
    }
  };

  return (
    <section id="pillars" className="py-24 sm:py-32 relative bg-[#070A12] border-t border-slate-900 overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-96 h-96 bg-cyan-600/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header matching Phunk's title treatment */}
        <div className="max-w-3xl mb-16 sm:mb-20">
          <span className="text-xs font-bold uppercase tracking-widest text-cyan-400">
            Core Competencies
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight mt-2 leading-[1.2]">
            <span className="text-gradient-cyan">Laser-focused</span> on 3 key pillars of educational innovation.
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-300">
            학습자 중심의 커리큘럼 설계부터 정밀한 데이터 성과 분석, 몰입도 높은 디지털 학습 경험까지 체계적인 3단계 혁신 체계를 구축합니다.
          </p>
        </div>

        {/* 3 Pillars Grid matching Phunk's 01, 02, 03 cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {pillarsData.map((pillar, idx) => {
            const isHovered = hoveredCard === idx;
            return (
              <div
                key={pillar.number}
                onMouseEnter={() => setHoveredCard(idx)}
                onMouseLeave={() => setHoveredCard(null)}
                className={`relative rounded-2xl bg-gradient-to-b from-[#0C1220] to-[#070A13] border transition-all duration-300 p-8 flex flex-col justify-between group overflow-hidden ${
                  isHovered
                    ? 'border-cyan-400/50 shadow-2xl shadow-cyan-500/10 -translate-y-1'
                    : 'border-slate-800/80 hover:border-slate-700'
                }`}
              >
                {/* Glowing top line on hover */}
                <div
                  className={`absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-transparent via-cyan-400 to-transparent transition-opacity duration-300 ${
                    isHovered ? 'opacity-100' : 'opacity-0'
                  }`}
                />

                <div>
                  {/* Top header with large Phunk-style outline number */}
                  <div className="flex items-center justify-between pb-6 border-b border-slate-800/70">
                    <span className="text-4xl sm:text-5xl font-extrabold tracking-tighter text-slate-700 group-hover:text-cyan-400/40 transition-colors">
                      {pillar.number}
                    </span>
                    <div className="p-2.5 rounded-xl bg-slate-900 border border-slate-800 group-hover:border-cyan-500/30 transition-colors">
                      {getPillarIcon(idx)}
                    </div>
                  </div>

                  {/* Titles */}
                  <div className="mt-6 space-y-1.5">
                    <div className="text-xs font-semibold tracking-wider uppercase text-cyan-400/80">
                      {pillar.titleEn}
                    </div>
                    <h3 className="text-xl sm:text-2xl font-bold text-white group-hover:text-cyan-300 transition-colors">
                      {pillar.title}
                    </h3>
                  </div>

                  {/* Description */}
                  <p className="mt-4 text-sm text-slate-300 leading-relaxed font-normal">
                    {pillar.description}
                  </p>

                  {/* Interactive Mini-Visualizer inside each card */}
                  <div className="mt-6 p-4 rounded-xl bg-[#05080F] border border-slate-800/80">
                    {idx === 0 && (
                      <div className="space-y-2 text-xs">
                        <div className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider">
                          커리큘럼 설계 프로세스
                        </div>
                        <div className="flex items-center justify-between text-slate-300 gap-1 text-[11px]">
                          <span className="px-2 py-1 rounded bg-slate-900 border border-slate-800 text-cyan-300">
                            진단 검사
                          </span>
                          <span className="text-slate-600">→</span>
                          <span className="px-2 py-1 rounded bg-slate-900 border border-slate-800 text-sky-300">
                            3단계 모듈
                          </span>
                          <span className="text-slate-600">→</span>
                          <span className="px-2 py-1 rounded bg-slate-900 border border-slate-800 text-blue-300">
                            루브릭 평가
                          </span>
                        </div>
                      </div>
                    )}

                    {idx === 1 && (
                      <div className="space-y-2 text-xs">
                        <div className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider">
                          Kirkpatrick 4단계 평가 매트릭스
                        </div>
                        <div className="grid grid-cols-2 gap-1.5 text-[11px]">
                          <div className="p-1.5 rounded bg-slate-900 border border-slate-800 text-slate-300 flex items-center justify-between">
                            <span>1. 반응도</span>
                            <span className="font-bold text-cyan-400">4.7점</span>
                          </div>
                          <div className="p-1.5 rounded bg-slate-900 border border-slate-800 text-slate-300 flex items-center justify-between">
                            <span>2. 학습도</span>
                            <span className="font-bold text-sky-400">+20%p</span>
                          </div>
                          <div className="p-1.5 rounded bg-slate-900 border border-slate-800 text-slate-300 flex items-center justify-between">
                            <span>3. 행동전이</span>
                            <span className="font-bold text-blue-400">89%</span>
                          </div>
                          <div className="p-1.5 rounded bg-slate-900 border border-slate-800 text-slate-300 flex items-center justify-between">
                            <span>4. 성과도출</span>
                            <span className="font-bold text-emerald-400">+40%</span>
                          </div>
                        </div>
                      </div>
                    )}

                    {idx === 2 && (
                      <div className="space-y-2 text-xs">
                        <div className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider">
                          인지 부하 최소화 마이크로러닝
                        </div>
                        <div className="space-y-1.5 text-[11px]">
                          <div className="flex items-center justify-between text-slate-300">
                            <span>모듈 완주율 (Completion)</span>
                            <span className="font-bold text-cyan-400 tabular-nums">94.2%</span>
                          </div>
                          <div className="w-full h-1.5 bg-slate-800 rounded-full overflow-hidden">
                            <div className="h-full bg-gradient-to-r from-blue-500 to-cyan-400 rounded-full w-[94.2%]" />
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                </div>

                {/* Bottom Impact Highlight */}
                <div className="mt-8 pt-5 border-t border-slate-800 flex items-center justify-between">
                  <div className="text-xs font-medium text-cyan-300 flex items-center gap-1.5">
                    <Check className="w-3.5 h-3.5 text-cyan-400" />
                    <span>{pillar.impact}</span>
                  </div>
                  <span className="text-[11px] text-slate-400 font-mono">{pillar.tag}</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
