/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { ExternalLink, Mail, Globe, ArrowUp } from 'lucide-react';
import { profileData } from '../data/portfolioData';

interface FooterProps {
  onOpenDesignSystem: () => void;
  onOpenContact: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenDesignSystem, onOpenContact }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#04060B] border-t border-slate-900 pt-16 pb-12 text-slate-400 text-xs relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-slate-800/80">
          {/* Column 1: Brand & Bio (2 cols) */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-2.5">
              <span className="w-8 h-8 rounded-lg bg-gradient-to-br from-cyan-400 to-blue-600 flex items-center justify-center text-black font-extrabold text-sm shadow-md">
                SE
              </span>
              <span className="text-lg font-bold text-white tracking-tight">
                선에듀 교육연구소
              </span>
            </div>

            <p className="text-slate-400 text-sm leading-relaxed max-w-sm">
              교육의 미래, 데이터와 현장의 본질로 설계하다.
              <br />
              교육연구소장 노선영 | SunEdu Institute of Educational Research
            </p>

            <div className="pt-2 flex items-center gap-3">
              <button
                onClick={onOpenDesignSystem}
                className="px-3 py-1.5 rounded-lg bg-slate-900 border border-cyan-500/30 text-cyan-300 hover:text-white transition-colors"
              >
                📐 설계 시스템 명세표 열기
              </button>
            </div>
          </div>

          {/* Column 2: Navigation */}
          <div className="space-y-3">
            <h4 className="text-white font-bold text-xs uppercase tracking-wider">
              Navigation
            </h4>
            <ul className="space-y-2">
              <li>
                <a href="#about" className="hover:text-cyan-400 transition-colors">
                  소장 소개 (About)
                </a>
              </li>
              <li>
                <a href="#pillars" className="hover:text-cyan-400 transition-colors">
                  3대 핵심 가치 (Pillars)
                </a>
              </li>
              <li>
                <a href="#projects" className="hover:text-cyan-400 transition-colors">
                  연구 프로젝트 (Projects)
                </a>
              </li>
              <li>
                <a href="#metrics" className="hover:text-cyan-400 transition-colors">
                  성과 지표 데이터 (Metrics)
                </a>
              </li>
              <li>
                <a href="#skills" className="hover:text-cyan-400 transition-colors">
                  전문 역량 (Skills)
                </a>
              </li>
              <li>
                <a href="#credentials" className="hover:text-cyan-400 transition-colors">
                  이력 & 저서 (Credentials)
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3: Specialized Domains */}
          <div className="space-y-3">
            <h4 className="text-white font-bold text-xs uppercase tracking-wider">
              Research Domains
            </h4>
            <ul className="space-y-2">
              <li className="text-slate-300">맞춤형 교육과정 개발 (UbD)</li>
              <li className="text-slate-300">성과 분석 체계 구축 (Kirkpatrick)</li>
              <li className="text-slate-300">디지털 교육 콘텐츠 혁신</li>
              <li className="text-slate-300">교육기관 정책 컨설팅</li>
              <li className="text-slate-300">교수학습 전략 및 루브릭 표준화</li>
            </ul>
          </div>

          {/* Column 4: Contact & Sireal Links */}
          <div className="space-y-3">
            <h4 className="text-white font-bold text-xs uppercase tracking-wider">
              Contact & Links
            </h4>
            <ul className="space-y-2">
              <li>
                <a
                  href={`mailto:${profileData.email}`}
                  className="hover:text-cyan-400 transition-colors flex items-center gap-1.5"
                >
                  <Mail className="w-3.5 h-3.5 text-cyan-400" />
                  <span className="truncate">{profileData.email}</span>
                </a>
              </li>
              <li>
                <a
                  href={profileData.website}
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-cyan-400 transition-colors flex items-center gap-1.5"
                >
                  <Globe className="w-3.5 h-3.5 text-cyan-400" />
                  <span>sunedu.kr</span>
                </a>
              </li>
              <li className="pt-2 text-[11px] text-slate-400">
                파트너 컨설팅 네트워크:
                <div className="flex flex-wrap gap-2 mt-1">
                  <a
                    href="https://www.sireal.co/?utm_source=chatgpt.com"
                    target="_blank"
                    rel="noreferrer"
                    className="hover:text-cyan-300 underline"
                  >
                    Sireal
                  </a>
                  <a
                    href="https://www.youtube.com/@sirealco?utm_source=chatgpt.com"
                    target="_blank"
                    rel="noreferrer"
                    className="hover:text-cyan-300 underline"
                  >
                    YouTube
                  </a>
                  <a
                    href="https://www.instagram.com/sireal_co/?utm_source=chatgpt.com"
                    target="_blank"
                    rel="noreferrer"
                    className="hover:text-cyan-300 underline"
                  >
                    Instagram
                  </a>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-slate-400 text-[11px]">
          <div>
            © {new Date().getFullYear()} Roh Sunyoung & SunEdu Institute of Educational Research. All rights reserved.
          </div>

          <div className="flex items-center gap-6">
            <button
              onClick={onOpenContact}
              className="hover:text-cyan-400 transition-colors"
            >
              협업 제안
            </button>
            <button
              onClick={onOpenDesignSystem}
              className="hover:text-cyan-400 transition-colors"
            >
              설계 시스템 명세표
            </button>
            <button
              onClick={scrollToTop}
              className="p-1.5 rounded-md bg-slate-900 border border-slate-800 hover:border-cyan-400 text-slate-300 hover:text-white transition-colors flex items-center gap-1"
              aria-label="맨 위로 스크롤"
            >
              <ArrowUp className="w-3.5 h-3.5" />
              <span>TOP</span>
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
