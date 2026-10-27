/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import {
  experienceData,
  educationData,
  credentialsData,
  lectureBooksData,
} from '../data/portfolioData';
import {
  Briefcase,
  GraduationCap,
  Award,
  BookOpen,
  Calendar,
  CheckCircle2,
  Building,
} from 'lucide-react';

export const CredentialsSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'experience' | 'education' | 'awards' | 'books'>('experience');

  return (
    <section id="credentials" className="py-24 sm:py-32 relative bg-[#070A12] border-t border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
          <div>
            <span className="text-xs font-mono tracking-widest text-cyan-400 uppercase">
              CAREER & ACADEMIC BACKGROUND
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight mt-2 leading-[1.2]">
              연구 경력 및 <span className="text-cyan-400">학술·수상 이력</span>
            </h2>
            <p className="mt-3 text-sm sm:text-base text-slate-300 max-w-2xl">
              교육학적 기초부터 교육공학 석사, 교육정책 박사과정으로 이어지는 학문적 깊이와 국가 공인 수상 및 실무 경력입니다.
            </p>
          </div>

          {/* Interactive Navigation Tabs */}
          <div className="flex flex-wrap items-center gap-1.5 p-1 rounded-2xl bg-slate-900 border border-slate-800 self-start md:self-auto">
            <button
              onClick={() => setActiveTab('experience')}
              className={`flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
                activeTab === 'experience'
                  ? 'bg-gradient-to-r from-blue-600 to-cyan-500 text-white shadow-md'
                  : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              <Briefcase className="w-3.5 h-3.5" />
              <span>연구 경력</span>
            </button>
            <button
              onClick={() => setActiveTab('education')}
              className={`flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
                activeTab === 'education'
                  ? 'bg-gradient-to-r from-blue-600 to-cyan-500 text-white shadow-md'
                  : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              <GraduationCap className="w-3.5 h-3.5" />
              <span>학력 사항</span>
            </button>
            <button
              onClick={() => setActiveTab('awards')}
              className={`flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
                activeTab === 'awards'
                  ? 'bg-gradient-to-r from-blue-600 to-cyan-500 text-white shadow-md'
                  : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              <Award className="w-3.5 h-3.5" />
              <span>수상 및 자격</span>
            </button>
            <button
              onClick={() => setActiveTab('books')}
              className={`flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
                activeTab === 'books'
                  ? 'bg-gradient-to-r from-blue-600 to-cyan-500 text-white shadow-md'
                  : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              <BookOpen className="w-3.5 h-3.5" />
              <span>추천 저서 & 강의</span>
            </button>
          </div>
        </div>

        {/* Tab Content Display */}
        <div className="rounded-3xl bg-gradient-to-b from-[#0A101E] to-[#070A13] border border-cyan-500/20 p-6 sm:p-10 shadow-2xl">
          {/* TAB 1: EXPERIENCE */}
          {activeTab === 'experience' && (
            <div className="space-y-10 animate-fade-in">
              {experienceData.map((exp) => (
                <div
                  key={exp.id}
                  className="p-6 sm:p-8 rounded-2xl bg-[#080D18] border border-slate-800/80 hover:border-cyan-500/30 transition-all space-y-5"
                >
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 border-b border-slate-800">
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="text-xs font-semibold px-2.5 py-0.5 rounded-full bg-cyan-950 border border-cyan-500/40 text-cyan-400">
                          {exp.isCurrent ? '현재 재직' : '완료 경력'}
                        </span>
                        <h3 className="text-xl font-bold text-white">{exp.company}</h3>
                      </div>
                      <p className="text-sm font-semibold text-cyan-300 mt-1">{exp.role}</p>
                    </div>

                    <div className="flex items-center gap-1.5 text-xs text-slate-400 font-mono bg-slate-900 px-3 py-1.5 rounded-lg border border-slate-800 w-fit">
                      <Calendar className="w-3.5 h-3.5 text-cyan-400" />
                      <span>{exp.period}</span>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-xs sm:text-sm">
                    {/* Responsibilities */}
                    <div className="space-y-2.5">
                      <h4 className="font-bold text-white flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full bg-cyan-400" />
                        주요 직무 및 연구 역할
                      </h4>
                      <ul className="space-y-2 text-slate-300">
                        {exp.responsibilities.map((r, rIdx) => (
                          <li key={rIdx} className="flex items-start gap-2">
                            <span className="text-cyan-400 mt-0.5">•</span>
                            <span className="leading-relaxed">{r}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Achievements */}
                    <div className="space-y-2.5">
                      <h4 className="font-bold text-white flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full bg-emerald-400" />
                        주요 핵심 연구 성과
                      </h4>
                      <ul className="space-y-2 text-slate-300">
                        {exp.achievements.map((a, aIdx) => (
                          <li key={aIdx} className="flex items-start gap-2">
                            <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                            <span className="leading-relaxed font-medium text-slate-200">
                              {a}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="pt-2 flex flex-wrap gap-2">
                    {exp.tags.map((tag, tIdx) => (
                      <span
                        key={tIdx}
                        className="px-2.5 py-1 rounded bg-slate-900 border border-slate-800 text-[11px] font-mono text-cyan-400/80"
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* TAB 2: EDUCATION */}
          {activeTab === 'education' && (
            <div className="space-y-6 animate-fade-in">
              <div className="relative pl-6 sm:pl-8 border-l-2 border-cyan-500/30 space-y-10">
                {educationData.map((edu, idx) => (
                  <div key={idx} className="relative group">
                    {/* Dot on timeline */}
                    <div className="absolute -left-[31px] sm:-left-[39px] top-1.5 w-4 h-4 rounded-full bg-[#06080F] border-2 border-cyan-400 group-hover:scale-125 transition-transform" />

                    <div className="p-6 rounded-2xl bg-[#080D18] border border-slate-800 hover:border-cyan-500/40 transition-all space-y-2">
                      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                        <div className="flex items-center gap-2">
                          <span className="px-2.5 py-0.5 rounded-full bg-blue-950 border border-blue-500/40 text-blue-300 text-xs font-bold">
                            {edu.degree}
                          </span>
                          <h3 className="text-lg font-bold text-white">{edu.school}</h3>
                        </div>
                        <span className="text-xs font-mono text-slate-400">{edu.period}</span>
                      </div>

                      <div className="text-sm font-semibold text-cyan-300 pt-1">
                        전공: {edu.major} ({edu.degreeName})
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* TAB 3: CERTIFICATIONS & AWARDS */}
          {activeTab === 'awards' && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 animate-fade-in">
              {credentialsData.map((item, idx) => (
                <div
                  key={idx}
                  className="p-6 rounded-2xl bg-[#080D18] border border-slate-800 hover:border-cyan-500/40 transition-all flex items-start gap-4"
                >
                  <div
                    className={`p-3 rounded-xl shrink-0 ${
                      item.type === 'award'
                        ? 'bg-amber-950/40 border border-amber-500/30 text-amber-400'
                        : 'bg-cyan-950/40 border border-cyan-500/30 text-cyan-400'
                    }`}
                  >
                    {item.type === 'award' ? (
                      <Award className="w-6 h-6" />
                    ) : (
                      <CheckCircle2 className="w-6 h-6" />
                    )}
                  </div>

                  <div className="space-y-1">
                    <span className="text-[11px] font-mono tracking-wider text-slate-400 uppercase">
                      {item.type === 'award' ? '정부 포상 (AWARDS)' : '국가공인 자격 (CERTIFICATION)'}
                    </span>
                    <h4 className="text-lg font-bold text-white">{item.name}</h4>
                    <div className="flex items-center gap-3 text-xs text-slate-400 pt-1">
                      <span>발급기관: <strong className="text-slate-200">{item.issuer}</strong></span>
                      <span>·</span>
                      <span className="font-mono">{item.date}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* TAB 4: RECOMMENDED BOOKS & LECTURES */}
          {activeTab === 'books' && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 animate-fade-in">
              {lectureBooksData.map((b, idx) => (
                <div
                  key={idx}
                  className="p-6 rounded-2xl bg-[#080D18] border border-slate-800 hover:border-cyan-500/40 transition-all space-y-3"
                >
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-semibold px-2.5 py-0.5 rounded-full bg-cyan-950 border border-cyan-500/40 text-cyan-300">
                      {b.badge}
                    </span>
                    <BookOpen className="w-4 h-4 text-cyan-400" />
                  </div>

                  <div>
                    <h4 className="text-lg font-bold text-white">{b.title}</h4>
                    <p className="text-xs text-slate-400 mt-0.5 font-medium">저자/강사: {b.author}</p>
                  </div>

                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed pt-2 border-t border-slate-800/80">
                    {b.description}
                  </p>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
