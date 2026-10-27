/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { projectsData } from '../data/portfolioData';
import { ProjectItem } from '../types/portfolio';
import { ArrowUpRight, TrendingUp, Calendar, CheckCircle2, Layers, BarChart2, Smartphone } from 'lucide-react';

interface ProjectsSectionProps {
  onSelectProject: (project: ProjectItem) => void;
}

export const ProjectsSection: React.FC<ProjectsSectionProps> = ({ onSelectProject }) => {
  const [filter, setFilter] = useState<'all' | 'curriculum' | 'analytics' | 'digital'>('all');

  const filteredProjects =
    filter === 'all'
      ? projectsData
      : projectsData.filter((p) => p.category === filter);

  return (
    <section id="projects" className="py-24 sm:py-32 relative bg-[#06080F] border-t border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Phunk-style subtle kicker and header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div>
            <span className="text-xs font-mono tracking-widest text-slate-400 uppercase">
              recent projects, across education & research sectors.
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight mt-2 leading-[1.2]">
              실증적 변화를 입증한 <span className="text-cyan-400">연구 프로젝트</span>
            </h2>
          </div>

          {/* Interactive filter segmented control */}
          <div className="flex items-center gap-1.5 p-1 rounded-xl bg-slate-900/90 border border-slate-800 self-start md:self-auto">
            <button
              onClick={() => setFilter('all')}
              className={`px-3.5 py-1.5 rounded-lg text-xs font-semibold transition-colors ${
                filter === 'all'
                  ? 'bg-gradient-to-r from-blue-600 to-cyan-500 text-white shadow-sm'
                  : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              전체 보기
            </button>
            <button
              onClick={() => setFilter('curriculum')}
              className={`px-3.5 py-1.5 rounded-lg text-xs font-semibold transition-colors ${
                filter === 'curriculum'
                  ? 'bg-gradient-to-r from-blue-600 to-cyan-500 text-white shadow-sm'
                  : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              교육과정 설계
            </button>
            <button
              onClick={() => setFilter('analytics')}
              className={`px-3.5 py-1.5 rounded-lg text-xs font-semibold transition-colors ${
                filter === 'analytics'
                  ? 'bg-gradient-to-r from-blue-600 to-cyan-500 text-white shadow-sm'
                  : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              데이터 분석
            </button>
            <button
              onClick={() => setFilter('digital')}
              className={`px-3.5 py-1.5 rounded-lg text-xs font-semibold transition-colors ${
                filter === 'digital'
                  ? 'bg-gradient-to-r from-blue-600 to-cyan-500 text-white shadow-sm'
                  : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              디지털 혁신
            </button>
          </div>
        </div>

        {/* Project Case Studies List in Phunk's signature alternating / 2-column layout */}
        <div className="space-y-16 sm:space-y-24">
          {filteredProjects.map((project, idx) => (
            <div
              key={project.id}
              className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center p-6 sm:p-8 lg:p-10 rounded-3xl bg-gradient-to-b from-[#0A101E] to-[#070B14] border border-cyan-500/20 hover:border-cyan-400/40 transition-all duration-300 shadow-2xl group"
            >
              {/* Left Column: Visual Mockup / Framework Blueprint */}
              <div
                className={`lg:col-span-6 relative rounded-2xl bg-[#050810] border border-slate-800/80 p-6 sm:p-8 overflow-hidden group-hover:border-cyan-500/30 transition-all ${
                  idx % 2 === 1 ? 'lg:order-last' : ''
                }`}
              >
                {/* Visual Blueprint Background Grid */}
                <div className="absolute inset-0 grid-dot-pattern opacity-40 pointer-events-none" />

                {/* Inner Mockup UI Card */}
                <div className="relative z-10 space-y-4">
                  {/* Mockup Header Bar */}
                  <div className="flex items-center justify-between pb-3 border-b border-slate-800 text-[11px] font-mono text-slate-400">
                    <span className="text-cyan-400 font-bold">PROJECT CASE 0{project.number}</span>
                    <span>{project.period}</span>
                  </div>

                  {/* Dynamic Graphic Mockup according to project type */}
                  {project.category === 'curriculum' && (
                    <div className="space-y-3 pt-2">
                      <div className="text-xs font-semibold text-white flex items-center gap-2">
                        <Layers className="w-4 h-4 text-cyan-400" />
                        <span>학습자 맞춤형 3단계 모듈 아키텍처</span>
                      </div>
                      <div className="grid grid-cols-3 gap-2 text-center text-xs">
                        <div className="p-3 rounded-xl bg-slate-900 border border-slate-800">
                          <div className="text-[10px] text-slate-400">기초 단계</div>
                          <div className="font-bold text-cyan-300 mt-1">사전 진단</div>
                          <div className="text-[10px] text-emerald-400 mt-1">통과율 98%</div>
                        </div>
                        <div className="p-3 rounded-xl bg-slate-900 border border-cyan-500/30">
                          <div className="text-[10px] text-slate-400">심화 단계</div>
                          <div className="font-bold text-cyan-400 mt-1">모듈 분기</div>
                          <div className="text-[10px] text-cyan-300 mt-1">개인화 트랙</div>
                        </div>
                        <div className="p-3 rounded-xl bg-slate-900 border border-slate-800">
                          <div className="text-[10px] text-slate-400">응용 단계</div>
                          <div className="font-bold text-blue-300 mt-1">수행 루브릭</div>
                          <div className="text-[10px] text-blue-400 mt-1">도달도 88%</div>
                        </div>
                      </div>
                    </div>
                  )}

                  {project.category === 'analytics' && (
                    <div className="space-y-3 pt-2">
                      <div className="text-xs font-semibold text-white flex items-center gap-2">
                        <BarChart2 className="w-4 h-4 text-sky-400" />
                        <span>다차원 효과성 분석 대시보드</span>
                      </div>
                      <div className="p-3.5 rounded-xl bg-slate-900 border border-slate-800 space-y-2">
                        <div className="flex items-center justify-between text-xs text-slate-300">
                          <span>평가 소요 시간 단축</span>
                          <span className="font-bold text-cyan-400 tabular-nums">-30% (자동화)</span>
                        </div>
                        <div className="w-full h-2 bg-slate-800 rounded-full overflow-hidden">
                          <div className="h-full bg-cyan-400 rounded-full w-[70%]" />
                        </div>
                        <div className="flex items-center justify-between text-xs text-slate-300 pt-1">
                          <span>개선 과제 도출률</span>
                          <span className="font-bold text-sky-400 tabular-nums">+40% (환류체계)</span>
                        </div>
                        <div className="w-full h-2 bg-slate-800 rounded-full overflow-hidden">
                          <div className="h-full bg-sky-400 rounded-full w-[85%]" />
                        </div>
                      </div>
                    </div>
                  )}

                  {project.category === 'digital' && (
                    <div className="space-y-3 pt-2">
                      <div className="text-xs font-semibold text-white flex items-center gap-2">
                        <Smartphone className="w-4 h-4 text-blue-400" />
                        <span>마이크로러닝 & 반응형 학습자 환경</span>
                      </div>
                      <div className="p-3.5 rounded-xl bg-slate-900 border border-slate-800 space-y-2">
                        <div className="grid grid-cols-2 gap-2 text-center text-xs">
                          <div className="p-2 rounded-lg bg-slate-800/80">
                            <span className="text-[10px] text-slate-400">모듈당 분량</span>
                            <div className="font-bold text-white mt-0.5">5~7분 마이크로</div>
                          </div>
                          <div className="p-2 rounded-lg bg-slate-800/80">
                            <span className="text-[10px] text-slate-400">최종 완주율</span>
                            <div className="font-bold text-cyan-400 mt-0.5">94.2% (업계 최고)</div>
                          </div>
                        </div>
                        <div className="text-[11px] text-slate-400 text-center pt-1">
                          상호작용 퀴즈 · 가상 시뮬레이션 · 모바일 최적화
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Quantified Metrics Quick Badges */}
                  <div className="pt-2 grid grid-cols-2 gap-2 text-xs">
                    {project.metrics.slice(0, 2).map((m, mIdx) => (
                      <div
                        key={mIdx}
                        className="p-2 rounded-lg bg-cyan-950/40 border border-cyan-500/20 text-center"
                      >
                        <div className="text-[10px] text-cyan-200/70">{m.label}</div>
                        <div className="text-base font-extrabold text-cyan-300 tabular-nums">
                          {m.value}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Right Column: Narrative, Tags, and 'See full case study ↗' button */}
              <div className="lg:col-span-6 space-y-5">
                {/* Pill Tags matching Phunk's project tags */}
                <div className="flex flex-wrap items-center gap-2">
                  {project.tags.map((tag, tIdx) => (
                    <span
                      key={tIdx}
                      className="px-3 py-1 rounded-full text-xs font-medium text-cyan-300 bg-cyan-950/50 border border-cyan-500/30"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Main Project Title matching Phunk's large heading */}
                <h3 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight leading-tight group-hover:text-cyan-300 transition-colors">
                  {project.title}
                </h3>

                {/* Summary narrative */}
                <p className="text-sm sm:text-base text-slate-300 leading-relaxed font-normal">
                  {project.summary}
                </p>

                {/* Key outcomes bullet points */}
                <div className="space-y-1.5 pt-1 text-xs sm:text-sm text-slate-400">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0" />
                    <span>
                      <strong className="text-slate-200">주요 성과:</strong> {project.metrics[0].label}{' '}
                      <span className="text-cyan-400 font-bold">{project.metrics[0].value}</span> ({project.metrics[0].improvement})
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-sky-400 shrink-0" />
                    <span>
                      <strong className="text-slate-200">운영 기간:</strong> {project.period} · {project.role}
                    </span>
                  </div>
                </div>

                {/* Phunk Signature Action: 'See full case study ↗' */}
                <div className="pt-3">
                  <button
                    onClick={() => onSelectProject(project)}
                    className="inline-flex items-center gap-2 text-sm sm:text-base font-bold text-white hover:text-cyan-400 transition-colors border-b-2 border-white hover:border-cyan-400 pb-1 group/btn"
                  >
                    <span>See full case study</span>
                    <ArrowUpRight className="w-4 h-4 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
