/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import {
  projectKpiChartData,
  durationImpactCorrelationData,
  competencyMatrixData,
} from '../data/portfolioData';
import { BarChart3, TrendingUp, PieChart, Activity, Info } from 'lucide-react';

export const MetricsChartsSection: React.FC = () => {
  const [activeChartTab, setActiveChartTab] = useState<'kpi' | 'correlation' | 'competency'>('kpi');

  return (
    <section id="metrics" className="py-24 sm:py-32 relative bg-[#070A12] border-t border-slate-900">
      {/* Background glow */}
      <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-80 h-80 bg-blue-600/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="max-w-3xl mb-12">
          <span className="text-xs font-mono tracking-widest text-cyan-400 uppercase">
            EMPIRICAL EVIDENCE & ANALYTICS
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight mt-2 leading-[1.2]">
            데이터로 증명하는 <span className="text-gradient-cyan">교육 성과 지표</span>
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-300">
            정량적 수치와 정성적 개선 과제를 결합하여, 교육 연구 및 프로그램 도입에 따른 실질적인 변화를 다각도에서 분석합니다.
          </p>
        </div>

        {/* Tab Controls for the 3 Charts */}
        <div className="flex flex-wrap items-center gap-2 mb-8 p-1.5 rounded-2xl bg-slate-900/80 border border-slate-800 w-fit">
          <button
            onClick={() => setActiveChartTab('kpi')}
            className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
              activeChartTab === 'kpi'
                ? 'bg-gradient-to-r from-blue-600 to-cyan-500 text-white shadow-md shadow-cyan-500/20'
                : 'text-slate-400 hover:text-slate-200'
            }`}
          >
            <BarChart3 className="w-4 h-4" />
            <span>차트 1. 프로젝트별 성과 지표 비교 막대 그래프</span>
          </button>

          <button
            onClick={() => setActiveChartTab('correlation')}
            className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
              activeChartTab === 'correlation'
                ? 'bg-gradient-to-r from-blue-600 to-cyan-500 text-white shadow-md shadow-cyan-500/20'
                : 'text-slate-400 hover:text-slate-200'
            }`}
          >
            <TrendingUp className="w-4 h-4" />
            <span>차트 2. 기간과 성과 상관관계</span>
          </button>

          <button
            onClick={() => setActiveChartTab('competency')}
            className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
              activeChartTab === 'competency'
                ? 'bg-gradient-to-r from-blue-600 to-cyan-500 text-white shadow-md shadow-cyan-500/20'
                : 'text-slate-400 hover:text-slate-200'
            }`}
          >
            <PieChart className="w-4 h-4" />
            <span>차트 3. 주요 기술별 성과 매트릭스</span>
          </button>
        </div>

        {/* Chart View Container */}
        <div className="rounded-3xl bg-gradient-to-b from-[#0C1222] to-[#070A13] border border-cyan-500/25 p-6 sm:p-10 shadow-2xl relative overflow-hidden">
          {/* CHART 1: KPI COMPARISON BAR CHART */}
          {activeChartTab === 'kpi' && (
            <div className="space-y-8 animate-fade-in">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-slate-800">
                <div>
                  <h3 className="text-xl font-bold text-white flex items-center gap-2">
                    <span>프로젝트별 주요 성과 지표 개선율 비교</span>
                    <span className="text-xs font-normal text-cyan-400 px-2 py-0.5 rounded bg-cyan-950 border border-cyan-500/30">
                      정량 검증 지표
                    </span>
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-400 mt-1">
                    기존 전통적 교육 모델(사전 기준선) 대비 선에듀 연구 모델 적용 후 달성 성과
                  </p>
                </div>

                <div className="flex items-center gap-4 text-xs">
                  <div className="flex items-center gap-1.5">
                    <span className="w-3 h-3 rounded bg-slate-700" />
                    <span className="text-slate-400">도입 전 (기준선)</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <span className="w-3 h-3 rounded bg-gradient-to-r from-cyan-400 to-blue-500" />
                    <span className="text-cyan-300 font-medium">선에듀 모델 적용 후</span>
                  </div>
                </div>
              </div>

              {/* Bar visualization rows */}
              <div className="space-y-6">
                {projectKpiChartData.map((item, idx) => (
                  <div key={idx} className="space-y-2 p-4 rounded-2xl bg-[#080D18] border border-slate-800/80">
                    <div className="flex items-center justify-between text-xs sm:text-sm font-semibold text-white">
                      <div className="flex items-center gap-2">
                        <span className="text-xs text-slate-400 px-2 py-0.5 rounded bg-slate-900 border border-slate-800">
                          {item.project}
                        </span>
                        <span>{item.metricName}</span>
                      </div>
                      <div className="text-cyan-400 font-extrabold tabular-nums flex items-center gap-1.5">
                        <Activity className="w-3.5 h-3.5" />
                        <span>{item.gain}</span>
                      </div>
                    </div>

                    {/* Comparative Dual Progress Bars */}
                    <div className="space-y-1.5 pt-1">
                      {/* Before Bar */}
                      <div className="flex items-center gap-3">
                        <span className="text-[11px] font-mono text-slate-400 w-16 text-right">
                          사전 {item.before}{item.unit}
                        </span>
                        <div className="flex-1 h-3 bg-slate-900 rounded-full overflow-hidden">
                          <div
                            className="h-full bg-slate-600 rounded-full transition-all duration-700"
                            style={{ width: `${item.before}%` }}
                          />
                        </div>
                      </div>

                      {/* After Bar */}
                      <div className="flex items-center gap-3">
                        <span className="text-[11px] font-mono text-cyan-400 font-bold w-16 text-right">
                          사후 {item.after}{item.unit}
                        </span>
                        <div className="flex-1 h-4 bg-slate-900 rounded-full overflow-hidden shadow-inner">
                          <div
                            className="h-full bg-gradient-to-r from-blue-500 via-sky-400 to-cyan-400 rounded-full transition-all duration-700 relative"
                            style={{ width: `${item.after}%` }}
                          >
                            <span className="absolute right-2 top-1/2 -translate-y-1/2 text-[9px] font-bold text-black">
                              {item.after}%
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* CHART 2: DURATION VS IMPACT CORRELATION */}
          {activeChartTab === 'correlation' && (
            <div className="space-y-6 animate-fade-in">
              <div className="pb-6 border-b border-slate-800">
                <h3 className="text-xl font-bold text-white">
                  프로젝트 수행 기간과 성과 및 도달 범위 상관관계
                </h3>
                <p className="text-xs sm:text-sm text-slate-400 mt-1">
                  체계적 환류와 연구 기간 확보에 따른 교육 성과 지수(Impact Score)와 수혜 학습자 규모 추이
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {durationImpactCorrelationData.map((d, idx) => (
                  <div
                    key={idx}
                    className="p-5 rounded-2xl bg-[#080D18] border border-cyan-500/20 space-y-4 hover:border-cyan-400/50 transition-all"
                  >
                    <div className="flex items-center justify-between text-xs text-slate-400">
                      <span className="font-mono text-cyan-400">{d.phase}</span>
                      <span className="px-2 py-0.5 rounded bg-slate-900 border border-slate-800">
                        {d.durationMonths}개월 수행
                      </span>
                    </div>

                    <h4 className="text-base font-bold text-white line-clamp-1">{d.project}</h4>

                    <div className="space-y-2 pt-2 border-t border-slate-800 text-xs">
                      <div className="flex items-center justify-between">
                        <span className="text-slate-400">성과 종합 지수:</span>
                        <span className="font-bold text-cyan-400 tabular-nums">{d.impactScore}점 / 100</span>
                      </div>
                      <div className="w-full h-2 bg-slate-900 rounded-full overflow-hidden">
                        <div
                          className="h-full bg-gradient-to-r from-blue-600 to-cyan-400 rounded-full"
                          style={{ width: `${d.impactScore}%` }}
                        />
                      </div>
                      <div className="flex items-center justify-between pt-1">
                        <span className="text-slate-400">수혜 학습자:</span>
                        <span className="font-semibold text-slate-200 tabular-nums">
                          {d.learners.toLocaleString()}명
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Correlation Summary Note */}
              <div className="p-4 rounded-xl bg-slate-900/70 border border-slate-800 text-xs text-slate-300 leading-relaxed flex items-start gap-3">
                <Info className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                <span>
                  <strong>상관관계 해석:</strong> 프로젝트 기간이 6개월 이상으로 충분한 진단-설계-환류 사이클을 거쳤을 때, 학습자 현업 전이율과 만족도 지수가 평균 15%p 이상 유의미하게 상승함을 실증적으로 보여줍니다.
                </span>
              </div>
            </div>
          )}

          {/* CHART 3: COMPETENCY BUBBLE / MATRIX */}
          {activeChartTab === 'competency' && (
            <div className="space-y-6 animate-fade-in">
              <div className="pb-6 border-b border-slate-800">
                <h3 className="text-xl font-bold text-white">
                  주요 핵심 기술별 프로젝트 수와 평균 성과 개선율
                </h3>
                <p className="text-xs sm:text-sm text-slate-400 mt-1">
                  선에듀 교육연구소의 전문 역량별 적용 빈도 및 평균 성과 기여도 매트릭스
                </p>
              </div>

              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse text-xs sm:text-sm">
                  <thead>
                    <tr className="border-b border-slate-800 text-slate-400 font-mono text-[11px] uppercase tracking-wider">
                      <th className="py-3 px-4">주요 기술 및 전문 영역</th>
                      <th className="py-3 px-4">영역 분류</th>
                      <th className="py-3 px-4 text-center">적용 프로젝트 수</th>
                      <th className="py-3 px-4">평균 성과 개선율</th>
                      <th className="py-3 px-4 text-right">종합 기여 지수</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-800/60 text-slate-300">
                    {competencyMatrixData.map((c, idx) => (
                      <tr key={idx} className="hover:bg-slate-900/50 transition-colors">
                        <td className="py-3.5 px-4 font-bold text-white flex items-center gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
                          <span>{c.skill}</span>
                        </td>
                        <td className="py-3.5 px-4 text-slate-400 font-mono text-xs">
                          {c.category}
                        </td>
                        <td className="py-3.5 px-4 text-center font-bold text-cyan-400 tabular-nums">
                          {c.projectCount}건
                        </td>
                        <td className="py-3.5 px-4">
                          <div className="flex items-center gap-2">
                            <div className="w-24 sm:w-32 h-2 bg-slate-900 rounded-full overflow-hidden">
                              <div
                                className="h-full bg-gradient-to-r from-blue-500 to-cyan-400 rounded-full"
                                style={{ width: `${c.avgImpact}%` }}
                              />
                            </div>
                            <span className="font-bold text-white tabular-nums text-xs">
                              {c.avgImpact}%
                            </span>
                          </div>
                        </td>
                        <td className="py-3.5 px-4 text-right font-extrabold text-cyan-300 tabular-nums">
                          ★★★★★
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {/* Footnote matching Section 9 note in markdown */}
          <div className="mt-8 pt-4 border-t border-slate-800/80 flex items-center justify-between text-[11px] text-slate-400">
            <span>※ 본 성과 분석 지표는 선에듀 교육연구소 프로젝트 실적 및 연구 검증 데이터를 바탕으로 시각화되었습니다.</span>
            <span className="font-mono text-cyan-400/80">SUNEDU RESEARCH METRICS 2026</span>
          </div>
        </div>
      </div>
    </section>
  );
};
