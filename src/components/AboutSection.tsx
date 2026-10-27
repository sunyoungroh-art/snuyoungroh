/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Award, BookOpen, ExternalLink, GraduationCap, CheckCircle2, ShieldCheck, Mail, Sparkles } from 'lucide-react';
import { profileData, credentialsData, educationData } from '../data/portfolioData';

export const AboutSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'philosophy' | 'methodology' | 'values'>('philosophy');

  return (
    <section id="about" className="py-24 sm:py-32 relative bg-[#06080F] border-t border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Phunk-style large typography lead & narrative */}
          <div className="lg:col-span-7 space-y-6">
            <div className="space-y-2">
              <span className="text-xs font-bold uppercase tracking-widest text-cyan-400">
                About The Director
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-[1.2]">
                We're <span className="text-cyan-400">SunEdu</span>.<br />
                교육연구소장 노선영입니다.
              </h2>
            </div>

            <div className="space-y-4 text-base sm:text-lg text-slate-300 leading-relaxed font-normal">
              <p>
                교육 현장의 문제를 깊이 있게 분석하고, 연구 결과를 실질적인 교육 혁신으로 연결하는 교육연구 전문가입니다.
              </p>
              <p className="text-slate-400 text-sm sm:text-base">
                학습자의 성장과 교육의 질 향상을 핵심 가치로 삼아 교육과정 연구, 교수학습 방법 개발, 교육 프로그램 기획 및 성과 분석을 체계적으로 추진합니다. 데이터와 현장 경험을 바탕으로 교육의 효과를 검증하고 지속 가능한 개선 방안을 모색합니다.
              </p>
              <p className="text-slate-400 text-sm sm:text-base">
                교육자, 연구자, 학부모 및 다양한 교육 관계자와 긴밀하게 협력하며 모든 학습자가 자신의 잠재력을 실현할 수 있는 교육 환경을 만드는 것을 목표로 합니다.
              </p>
            </div>

            {/* 4 Core Quantified Metrics Strip */}
            <div className="pt-6 border-t border-slate-800 grid grid-cols-2 sm:grid-cols-4 gap-4">
              {profileData.coreMetrics.map((metric, idx) => (
                <div key={idx} className="p-3.5 rounded-xl bg-[#0B111F] border border-cyan-500/10 hover:border-cyan-500/30 transition-colors">
                  <div className="text-2xl sm:text-3xl font-extrabold text-cyan-400 tabular-nums">
                    {metric.value}
                  </div>
                  <div className="text-xs font-semibold text-slate-200 mt-1">
                    {metric.label}
                  </div>
                  <div className="text-[11px] text-slate-400 mt-0.5 leading-snug">
                    {metric.description}
                  </div>
                </div>
              ))}
            </div>

            {/* Quick Contact & Link actions */}
            <div className="pt-2 flex flex-wrap items-center gap-4 text-xs font-medium text-slate-300">
              <a
                href="https://sunedu.kr/"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-900 border border-slate-700/80 hover:border-cyan-400 hover:text-cyan-300 transition-colors"
              >
                <span>선에듀 공식 홈페이지 (sunedu.kr)</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>

              <a
                href={`mailto:${profileData.email}`}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-900 border border-slate-700/80 hover:border-cyan-400 hover:text-cyan-300 transition-colors"
              >
                <Mail className="w-3.5 h-3.5 text-cyan-400" />
                <span>{profileData.email}</span>
              </a>
            </div>
          </div>

          {/* Right Column: Phunk-style interactive high-tech research profile console */}
          <div className="lg:col-span-5">
            <div className="rounded-2xl bg-gradient-to-b from-[#0D1526] to-[#070B14] border border-cyan-500/30 p-6 sm:p-7 shadow-2xl relative overflow-hidden group">
              {/* Subtle top glow line */}
              <div className="absolute top-0 inset-x-0 h-0.5 bg-gradient-to-r from-transparent via-cyan-400 to-transparent" />

              {/* Console header */}
              <div className="flex items-center justify-between pb-4 border-b border-slate-800">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-tr from-cyan-500 to-blue-600 p-0.5 shadow-md">
                    <div className="w-full h-full bg-[#090F1C] rounded-[10px] flex items-center justify-center font-extrabold text-cyan-300 text-lg">
                      노
                    </div>
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-white flex items-center gap-1.5">
                      {profileData.name}
                      <span className="text-xs font-normal text-cyan-400">소장</span>
                    </h3>
                    <p className="text-xs text-slate-400">{profileData.organization}</p>
                  </div>
                </div>

                <div className="px-2.5 py-1 rounded-full bg-cyan-950/60 border border-cyan-500/40 text-[11px] font-mono text-cyan-300 flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
                  <span>DIRECTOR</span>
                </div>
              </div>

              {/* Key Credentials Badges */}
              <div className="mt-5 space-y-2.5">
                <div className="flex items-center gap-2.5 p-2.5 rounded-xl bg-[#090E1A] border border-slate-800 text-xs">
                  <Award className="w-4 h-4 text-amber-400 shrink-0" />
                  <span className="text-slate-300">
                    <strong className="text-white">대한민국 인재상 & 교육기부 대상</strong> 수상 (교육부)
                  </span>
                </div>

                <div className="flex items-center gap-2.5 p-2.5 rounded-xl bg-[#090E1A] border border-slate-800 text-xs">
                  <GraduationCap className="w-4 h-4 text-cyan-400 shrink-0" />
                  <span className="text-slate-300">
                    교육학 학사 · 교육공학 석사 · 교육학·교육정책 박사과정
                  </span>
                </div>

                <div className="flex items-center gap-2.5 p-2.5 rounded-xl bg-[#090E1A] border border-slate-800 text-xs">
                  <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span className="text-slate-300">
                    평생교육사 2급 & 직업상담사 2급 국가공인 자격 보유
                  </span>
                </div>
              </div>

              {/* Interactive Tabs */}
              <div className="mt-6 pt-4 border-t border-slate-800">
                <div className="flex items-center gap-1 p-1 bg-slate-900 rounded-lg text-xs font-medium">
                  <button
                    onClick={() => setActiveTab('philosophy')}
                    className={`flex-1 py-1.5 rounded-md transition-colors ${
                      activeTab === 'philosophy'
                        ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/40'
                        : 'text-slate-400 hover:text-slate-200'
                    }`}
                  >
                    연구 비전
                  </button>
                  <button
                    onClick={() => setActiveTab('methodology')}
                    className={`flex-1 py-1.5 rounded-md transition-colors ${
                      activeTab === 'methodology'
                        ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/40'
                        : 'text-slate-400 hover:text-slate-200'
                    }`}
                  >
                    연구 방법론
                  </button>
                  <button
                    onClick={() => setActiveTab('values')}
                    className={`flex-1 py-1.5 rounded-md transition-colors ${
                      activeTab === 'values'
                        ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/40'
                        : 'text-slate-400 hover:text-slate-200'
                    }`}
                  >
                    핵심 가치
                  </button>
                </div>

                {/* Tab Content Display */}
                <div className="mt-4 p-3.5 rounded-xl bg-[#080D17] border border-slate-800 text-xs text-slate-300 leading-relaxed">
                  {activeTab === 'philosophy' && (
                    <div className="space-y-2">
                      <div className="font-semibold text-cyan-300 flex items-center gap-1.5">
                        <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400" />
                        <span>학습자 잠재력 실현과 실증적 교육 혁신</span>
                      </div>
                      <p className="text-slate-400">
                        단순 지식 전수를 넘어, 학습자가 자신의 속도와 적성에 맞춰 스스로 지식을 구성하고 역량을 확장하는 교육 생태계를 조성합니다.
                      </p>
                    </div>
                  )}

                  {activeTab === 'methodology' && (
                    <div className="space-y-2">
                      <div className="font-semibold text-cyan-300 flex items-center gap-1.5">
                        <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400" />
                        <span>백워드 설계(UbD) & 커크패트릭 4단계 평가</span>
                      </div>
                      <p className="text-slate-400">
                        목표 성취 기준과 평가 증거를 먼저 설계하는 역설계와, 반응-학습-행동-결과로 이어지는 다차원 측정 파이프라인을 결합합니다.
                      </p>
                    </div>
                  )}

                  {activeTab === 'values' && (
                    <div className="space-y-2">
                      <div className="font-semibold text-cyan-300 flex items-center gap-1.5">
                        <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400" />
                        <span>데이터 기반 객관성 & 현장 밀착형 소통</span>
                      </div>
                      <p className="text-slate-400">
                        숫자가 말해주는 객관적 사실과 교육 현장 구성원들의 살아있는 목소리를 조화롭게 융합하여 실효성 높은 해결책을 도출합니다.
                      </p>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
