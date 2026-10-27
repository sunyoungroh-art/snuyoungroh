/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { ArrowRight, Sparkles, Database, Award, BookOpen, Layers } from 'lucide-react';
import { profileData } from '../data/portfolioData';

interface HeroSectionProps {
  onOpenContact: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onOpenContact }) => {
  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
      {/* Background radial atmosphere */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-cyan-600/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-1/3 left-1/3 -translate-x-1/2 w-[400px] h-[300px] bg-blue-600/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        {/* Phunk-style Micro-tag badge */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-cyan-400/30 bg-[#0A1120]/80 backdrop-blur-md mb-8 shadow-sm shadow-cyan-500/10 animate-fade-in">
          <span className="w-2 h-2 rounded-full bg-cyan-400" />
          <span className="text-xs font-semibold tracking-wide text-cyan-300">
            선에듀 교육연구소 · 교육연구소장 노선영
          </span>
        </div>

        {/* Mammoth Headline matching Phunk's scale and typography */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-white max-w-5xl mx-auto leading-[1.15] text-balance">
          교육 현장의 본질을 꿰뚫는 연구,
          <br />
          <span className="text-gradient-cyan text-glow">실질적인 교육 혁신</span>과
          <br className="hidden sm:inline" /> 데이터 기반 성과로.
        </h1>

        {/* Subtitle / Value Proposition */}
        <p className="mt-8 text-base sm:text-lg md:text-xl text-slate-300 max-w-3xl mx-auto font-normal leading-relaxed text-balance">
          학습자의 성장과 교육의 질 향상을 핵심 가치로 삼아, 교육과정 연구·교수학습 전략 개발·교육 성과 분석을 체계적으로 추진하는 교육연구 전문가 노선영의 포트폴리오입니다.
        </p>

        {/* Action Buttons matching Phunk's signature CTA */}
        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <a
            href="#projects"
            className="px-7 py-3.5 text-sm sm:text-base font-semibold text-white bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-500 hover:to-cyan-400 rounded-full shadow-xl shadow-cyan-500/30 hover:shadow-cyan-400/50 hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200 flex items-center gap-2 group"
          >
            <span>연구 프로젝트 살펴보기</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>

          <button
            onClick={onOpenContact}
            className="px-7 py-3.5 text-sm sm:text-base font-medium text-slate-200 hover:text-white bg-slate-900/80 hover:bg-slate-800 border border-slate-700/80 hover:border-cyan-500/50 rounded-full transition-all duration-200"
          >
            협업 제안하기
          </button>
        </div>

        {/* Signature Phunk 3D Perspective Grid Floor with Floating Education Research Hub */}
        <div className="mt-16 md:mt-24 relative max-w-5xl mx-auto">
          {/* Perspective grid floor container */}
          <div className="relative h-64 sm:h-80 md:h-96 w-full rounded-3xl border border-cyan-500/20 bg-gradient-to-b from-[#090E1A] via-[#050811] to-[#03050A] overflow-hidden shadow-2xl">
            {/* Perspective grid surface */}
            <div className="absolute inset-x-0 bottom-0 h-full perspective-grid-container flex items-end justify-center">
              <div className="w-[180%] h-[120%] perspective-grid-floor -mb-10 opacity-70" />
            </div>

            {/* Glowing horizon line */}
            <div className="absolute inset-x-12 bottom-1/2 h-px bg-gradient-to-r from-transparent via-cyan-400 to-transparent opacity-80" />
            <div className="absolute inset-x-20 bottom-1/2 -translate-y-1/2 h-16 bg-cyan-400/20 blur-xl pointer-events-none" />

            {/* Floating Central Node / Research Hologram Card */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <div className="relative group pointer-events-auto">
                <div className="p-6 sm:p-8 rounded-2xl bg-[#0B1324]/90 backdrop-blur-xl border border-cyan-400/30 shadow-2xl shadow-cyan-500/20 max-w-md w-full text-left transition-transform duration-300 hover:scale-[1.02]">
                  <div className="flex items-center justify-between pb-3 border-b border-slate-800">
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 rounded-full bg-cyan-400 animate-pulse" />
                      <span className="text-xs font-semibold tracking-wider text-cyan-300 uppercase">
                        SunEdu Research Hub
                      </span>
                    </div>
                    <span className="text-[11px] font-mono text-slate-400">STATUS: ACTIVE</span>
                  </div>

                  <div className="mt-4 grid grid-cols-3 gap-3 text-center">
                    <div className="p-2.5 rounded-xl bg-slate-900/80 border border-slate-800">
                      <div className="text-xs text-slate-400 mb-1">학습 달성률</div>
                      <div className="text-base sm:text-lg font-bold text-cyan-400 tabular-nums">+20%p</div>
                    </div>
                    <div className="p-2.5 rounded-xl bg-slate-900/80 border border-slate-800">
                      <div className="text-xs text-slate-400 mb-1">평가 단축</div>
                      <div className="text-base sm:text-lg font-bold text-sky-400 tabular-nums">-30%</div>
                    </div>
                    <div className="p-2.5 rounded-xl bg-slate-900/80 border border-slate-800">
                      <div className="text-xs text-slate-400 mb-1">콘텐츠 활용</div>
                      <div className="text-base sm:text-lg font-bold text-blue-400 tabular-nums">+35%</div>
                    </div>
                  </div>

                  <div className="mt-4 text-xs text-slate-400 leading-relaxed">
                    선에듀 교육연구소 · 실증적 데이터와 현장 중심 설계를 바탕으로 지속 가능한 교육 성과를 창출합니다.
                  </div>
                </div>

                {/* Floating metric satellite tags */}
                <div className="hidden sm:flex absolute -top-4 -right-12 px-3 py-1.5 rounded-full bg-[#0E1A30] border border-cyan-400/40 text-[11px] font-medium text-cyan-300 shadow-lg items-center gap-1.5 animate-bounce">
                  <Database className="w-3 h-3 text-cyan-400" />
                  <span>데이터 기반 의사결정</span>
                </div>

                <div className="hidden sm:flex absolute -bottom-3 -left-10 px-3 py-1.5 rounded-full bg-[#0E1A30] border border-sky-400/40 text-[11px] font-medium text-sky-300 shadow-lg items-center gap-1.5">
                  <Layers className="w-3 h-3 text-sky-400" />
                  <span>백워드(UbD) 맞춤 설계</span>
                </div>
              </div>
            </div>

            {/* Phunk signature bottom connector emblem */}
            <div className="absolute bottom-3 left-1/2 -translate-x-1/2 z-20">
              <div className="w-10 h-10 rounded-full bg-[#060B14] border border-cyan-400/50 flex items-center justify-center shadow-lg shadow-cyan-500/30">
                <div className="w-4 h-4 rounded-full border-2 border-cyan-400 flex items-center justify-center">
                  <div className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
