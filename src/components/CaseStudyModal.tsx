/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useEffect } from 'react';
import { ProjectItem } from '../types/portfolio';
import { X, CheckCircle2, AlertCircle, Sparkles, TrendingUp, Calendar, UserCheck, Tag, ArrowUpRight } from 'lucide-react';

interface CaseStudyModalProps {
  project: ProjectItem | null;
  onClose: () => void;
  onOpenContact: () => void;
}

export const CaseStudyModal: React.FC<CaseStudyModalProps> = ({ project, onClose, onOpenContact }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (project) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 lg:p-10 overflow-y-auto">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/85 backdrop-blur-md transition-opacity"
        onClick={onClose}
      />

      {/* Modal Dialog */}
      <div className="relative w-full max-w-4xl rounded-3xl bg-[#0A0F1D] border border-cyan-500/30 shadow-2xl shadow-cyan-950/50 overflow-hidden my-auto z-10 max-h-[90vh] flex flex-col animate-in fade-in zoom-in-95 duration-200">
        {/* Sticky Header */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-slate-800 bg-[#0A0F1D]/90 backdrop-blur-md sticky top-0 z-20">
          <div className="flex items-center gap-3">
            <span className="w-8 h-8 rounded-lg bg-cyan-950 border border-cyan-500/40 flex items-center justify-center text-cyan-400 font-mono font-bold text-xs">
              {project.number}
            </span>
            <div>
              <span className="text-[11px] font-semibold tracking-wider text-cyan-400 uppercase">
                {project.categoryLabel}
              </span>
              <h3 className="text-base sm:text-lg font-bold text-white line-clamp-1">
                {project.title}
              </h3>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-full bg-slate-900 border border-slate-700/80 hover:border-cyan-400 hover:text-white text-slate-400 transition-colors"
            aria-label="닫기"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Scrollable Content Body */}
        <div className="p-6 sm:p-8 space-y-8 overflow-y-auto">
          {/* Main Title & Metadata Header */}
          <div className="space-y-4">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white leading-tight">
              {project.fullTitle}
            </h2>
            <div className="flex flex-wrap items-center gap-y-2 gap-x-5 text-xs text-slate-300">
              <span className="flex items-center gap-1.5">
                <Calendar className="w-3.5 h-3.5 text-cyan-400" />
                <span className="text-slate-400">수행 기간:</span> {project.period}
              </span>
              <span className="flex items-center gap-1.5">
                <UserCheck className="w-3.5 h-3.5 text-cyan-400" />
                <span className="text-slate-400">수행 역할:</span> {project.role}
              </span>
            </div>

            {/* Tags */}
            <div className="flex flex-wrap items-center gap-1.5 pt-1">
              {project.tags.map((tag, idx) => (
                <span
                  key={idx}
                  className="px-2.5 py-1 rounded-md bg-slate-900 border border-slate-800 text-[11px] font-medium text-cyan-300"
                >
                  #{tag}
                </span>
              ))}
            </div>
          </div>

          {/* Quantified Metrics Highlight Bar */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5 p-4 rounded-2xl bg-[#060A14] border border-cyan-500/20">
            {project.metrics.map((m, idx) => (
              <div key={idx} className="p-3 rounded-xl bg-slate-900/60 border border-slate-800/80">
                <div className="text-xs text-slate-400">{m.label}</div>
                <div className="text-2xl font-black text-cyan-400 tabular-nums mt-0.5">
                  {m.value}
                </div>
                <div className="text-[11px] text-slate-400 mt-1">{m.improvement}</div>
              </div>
            ))}
          </div>

          {/* Section: Background & Purpose */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-5 rounded-2xl bg-[#070D1A] border border-slate-800/80 space-y-2.5">
              <h4 className="text-sm font-bold text-white flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-cyan-400" />
                추진 배경 (Background)
              </h4>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-normal">
                {project.background}
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-[#070D1A] border border-slate-800/80 space-y-2.5">
              <h4 className="text-sm font-bold text-white flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-sky-400" />
                연구 및 사업 목적 (Purpose)
              </h4>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-normal">
                {project.purpose}
              </p>
            </div>
          </div>

          {/* Section: Key Target Goals */}
          <div className="space-y-3">
            <h4 className="text-sm font-bold text-white flex items-center gap-2">
              <TrendingUp className="w-4 h-4 text-cyan-400" />
              핵심 달성 목표 (Target Goals)
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              {project.targetGoals.map((goal, idx) => (
                <div
                  key={idx}
                  className="p-3.5 rounded-xl bg-[#080E1C] border border-slate-800 text-xs text-slate-300 flex items-start gap-2.5"
                >
                  <span className="w-5 h-5 rounded-full bg-cyan-950 border border-cyan-500/40 text-cyan-400 flex items-center justify-center font-bold text-[10px] shrink-0 mt-0.5">
                    0{idx + 1}
                  </span>
                  <span className="leading-relaxed">{goal}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Section: Problems & Solutions Comparison */}
          <div className="space-y-4">
            <h4 className="text-sm font-bold text-white">
              현장 병목 진단 및 솔루션 (Problem & Solution)
            </h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {/* Problems Column */}
              <div className="p-5 rounded-2xl bg-red-950/15 border border-red-500/20 space-y-3">
                <div className="text-xs font-bold text-red-400 flex items-center gap-1.5 uppercase tracking-wider">
                  <AlertCircle className="w-3.5 h-3.5" />
                  기존 교육 현장의 문제점
                </div>
                <ul className="space-y-2.5 text-xs text-slate-300">
                  {project.problems.map((prob, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <span className="text-red-400 mt-1">•</span>
                      <span className="leading-relaxed">{prob}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Solutions Column */}
              <div className="p-5 rounded-2xl bg-cyan-950/20 border border-cyan-500/30 space-y-3">
                <div className="text-xs font-bold text-cyan-300 flex items-center gap-1.5 uppercase tracking-wider">
                  <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400" />
                  선에듀 노선영 소장의 혁신 해결책
                </div>
                <ul className="space-y-2.5 text-xs text-slate-300">
                  {project.solutions.map((sol, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <span className="text-cyan-400 mt-1">•</span>
                      <span className="leading-relaxed">{sol}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Section: Detailed Role */}
          <div className="p-5 rounded-2xl bg-[#080E1C] border border-slate-800 space-y-3">
            <h4 className="text-sm font-bold text-white">
              연구책임자 상세 수행 내역 (Key Responsibilities)
            </h4>
            <ul className="space-y-2 text-xs text-slate-300">
              {project.detailedRole.map((roleItem, idx) => (
                <li key={idx} className="flex items-start gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 shrink-0 mt-0.5" />
                  <span className="leading-relaxed">{roleItem}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Section: Learnings & Retrospectives */}
          <div className="p-5 rounded-2xl bg-gradient-to-r from-blue-950/30 to-cyan-950/30 border border-cyan-500/30 space-y-3">
            <h4 className="text-sm font-bold text-white flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-cyan-400" />
              배운 점과 통찰 (Key Insights & Learnings)
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm text-cyan-100/90 leading-relaxed">
              {project.learnings.map((item, idx) => (
                <li key={idx} className="flex items-start gap-2">
                  <span className="text-cyan-400 font-bold">›</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Modal Footer */}
        <div className="p-5 border-t border-slate-800 bg-[#080C17] flex items-center justify-between">
          <span className="text-xs text-slate-400">
            선에듀 교육연구소 연구 실적 포트폴리오
          </span>

          <div className="flex items-center gap-3">
            <button
              onClick={onClose}
              className="px-4 py-2 text-xs font-medium text-slate-300 hover:text-white bg-slate-900 border border-slate-700 rounded-lg transition-colors"
            >
              닫기
            </button>
            <button
              onClick={() => {
                onClose();
                onOpenContact();
              }}
              className="px-4 py-2 text-xs font-semibold text-white bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-500 hover:to-cyan-400 rounded-lg shadow-md transition-all flex items-center gap-1.5"
            >
              <span>이 프로젝트 관련 협업 문의</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
