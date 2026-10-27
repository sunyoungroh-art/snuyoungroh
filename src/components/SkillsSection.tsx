/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { skillsData } from '../data/portfolioData';
import { Star, CheckCircle, Shield } from 'lucide-react';

export const SkillsSection: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const filteredSkills =
    selectedCategory === 'all'
      ? skillsData
      : skillsData.filter((s) => s.category === selectedCategory);

  return (
    <section id="skills" className="py-24 sm:py-32 relative bg-[#06080F] border-t border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div className="max-w-2xl">
            <span className="text-xs font-mono tracking-widest text-cyan-400 uppercase">
              PROFESSIONAL COMPETENCIES
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight mt-2 leading-[1.2]">
              체계화된 <span className="text-cyan-400">연구 역량 & 전문성</span>
            </h2>
            <p className="mt-3 text-sm sm:text-base text-slate-300">
              학습자 분석, 백워드 설계, 통계 기반 성과 분석, 대규모 이해관계자 협업에 이르는 핵심 역량 스펙트럼입니다.
            </p>
          </div>

          {/* Category Tabs */}
          <div className="flex flex-wrap items-center gap-1.5 p-1 rounded-xl bg-slate-900 border border-slate-800 self-start md:self-auto">
            <button
              onClick={() => setSelectedCategory('all')}
              className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-colors ${
                selectedCategory === 'all'
                  ? 'bg-gradient-to-r from-blue-600 to-cyan-500 text-white'
                  : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              전체 역량
            </button>
            <button
              onClick={() => setSelectedCategory('core')}
              className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-colors ${
                selectedCategory === 'core'
                  ? 'bg-gradient-to-r from-blue-600 to-cyan-500 text-white'
                  : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              교육과정 & 연구기획
            </button>
            <button
              onClick={() => setSelectedCategory('analytics')}
              className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-colors ${
                selectedCategory === 'analytics'
                  ? 'bg-gradient-to-r from-blue-600 to-cyan-500 text-white'
                  : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              성과분석 & 데이터
            </button>
            <button
              onClick={() => setSelectedCategory('leadership')}
              className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-colors ${
                selectedCategory === 'leadership'
                  ? 'bg-gradient-to-r from-blue-600 to-cyan-500 text-white'
                  : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              프로젝트 & 협업
            </button>
          </div>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filteredSkills.map((skill, idx) => (
            <div
              key={idx}
              className="p-6 sm:p-7 rounded-2xl bg-gradient-to-b from-[#0A101F] to-[#070A14] border border-cyan-500/15 hover:border-cyan-400/40 transition-all duration-300 shadow-xl group space-y-4"
            >
              <div className="flex items-start justify-between gap-4">
                <div>
                  <h3 className="text-base sm:text-lg font-bold text-white group-hover:text-cyan-300 transition-colors">
                    {skill.name}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-400 mt-1 leading-relaxed">
                    {skill.description}
                  </p>
                </div>

                {/* Stars Display */}
                <div className="flex items-center gap-1 shrink-0 bg-slate-900/90 px-2.5 py-1.5 rounded-lg border border-slate-800">
                  {Array.from({ length: 5 }).map((_, sIdx) => (
                    <Star
                      key={sIdx}
                      className={`w-3.5 h-3.5 ${
                        sIdx < skill.stars
                          ? 'text-cyan-400 fill-cyan-400'
                          : 'text-slate-700'
                      }`}
                    />
                  ))}
                </div>
              </div>

              {/* Proficiency Bar */}
              <div className="space-y-1.5 pt-2 border-t border-slate-800/80">
                <div className="flex items-center justify-between text-xs">
                  <span className="text-slate-400 font-mono">PROFICIENCY LEVEL</span>
                  <span className="font-bold text-cyan-400 tabular-nums">
                    {skill.percentage}%
                  </span>
                </div>
                <div className="w-full h-2 bg-slate-900 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-r from-blue-600 via-sky-400 to-cyan-400 rounded-full transition-all duration-700"
                    style={{ width: `${skill.percentage}%` }}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
