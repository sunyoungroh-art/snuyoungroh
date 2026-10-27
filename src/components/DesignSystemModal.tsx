/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { designSystemSpec } from '../data/portfolioData';
import { X, Sliders, Type, Palette, Move, Maximize2, Layers, Check } from 'lucide-react';

interface DesignSystemModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const DesignSystemModal: React.FC<DesignSystemModalProps> = ({ isOpen, onClose }) => {
  const [activeTab, setActiveTab] = useState<'summary' | 'spacing' | 'typography' | 'color' | 'interaction' | 'breakpoints'>('summary');
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 lg:p-10 overflow-y-auto">
      {/* Backdrop */}
      <div className="fixed inset-0 bg-black/85 backdrop-blur-md" onClick={onClose} />

      {/* Modal Dialog */}
      <div className="relative w-full max-w-4xl rounded-3xl bg-[#090E1B] border border-cyan-500/40 shadow-2xl z-10 max-h-[90vh] flex flex-col overflow-hidden animate-in fade-in zoom-in-95 duration-200">
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-slate-800 bg-[#090E1B]/95 sticky top-0 z-20">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-cyan-950 border border-cyan-500/40 flex items-center justify-center text-cyan-400">
              <Sliders className="w-4 h-4" />
            </div>
            <div>
              <span className="text-[11px] font-mono tracking-widest text-cyan-400 uppercase">
                DELIVERABLE SPECIFICATIONS
              </span>
              <h3 className="text-base sm:text-lg font-bold text-white">
                설계 시스템 요약표 & 원본 대비 변경점
              </h3>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-full bg-slate-900 border border-slate-700 hover:border-cyan-400 text-slate-400 hover:text-white transition-colors"
            aria-label="닫기"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Tab Controls */}
        <div className="flex items-center gap-1 px-6 pt-4 border-b border-slate-800/80 bg-[#070B16] overflow-x-auto text-xs font-medium">
          <button
            onClick={() => setActiveTab('summary')}
            className={`px-3 py-2 border-b-2 whitespace-nowrap transition-colors ${
              activeTab === 'summary'
                ? 'border-cyan-400 text-cyan-300 font-bold'
                : 'border-transparent text-slate-400 hover:text-slate-200'
            }`}
          >
            원본 대비 변경점 요약
          </button>
          <button
            onClick={() => setActiveTab('spacing')}
            className={`px-3 py-2 border-b-2 whitespace-nowrap transition-colors ${
              activeTab === 'spacing'
                ? 'border-cyan-400 text-cyan-300 font-bold'
                : 'border-transparent text-slate-400 hover:text-slate-200'
            }`}
          >
            간격 스케일 (Spacing)
          </button>
          <button
            onClick={() => setActiveTab('typography')}
            className={`px-3 py-2 border-b-2 whitespace-nowrap transition-colors ${
              activeTab === 'typography'
                ? 'border-cyan-400 text-cyan-300 font-bold'
                : 'border-transparent text-slate-400 hover:text-slate-200'
            }`}
          >
            타이포그래피 (Typography)
          </button>
          <button
            onClick={() => setActiveTab('color')}
            className={`px-3 py-2 border-b-2 whitespace-nowrap transition-colors ${
              activeTab === 'color'
                ? 'border-cyan-400 text-cyan-300 font-bold'
                : 'border-transparent text-slate-400 hover:text-slate-200'
            }`}
          >
            색상 팔레트 (Colors)
          </button>
          <button
            onClick={() => setActiveTab('interaction')}
            className={`px-3 py-2 border-b-2 whitespace-nowrap transition-colors ${
              activeTab === 'interaction'
                ? 'border-cyan-400 text-cyan-300 font-bold'
                : 'border-transparent text-slate-400 hover:text-slate-200'
            }`}
          >
            인터랙션 스펙 (Interactions)
          </button>
          <button
            onClick={() => setActiveTab('breakpoints')}
            className={`px-3 py-2 border-b-2 whitespace-nowrap transition-colors ${
              activeTab === 'breakpoints'
                ? 'border-cyan-400 text-cyan-300 font-bold'
                : 'border-transparent text-slate-400 hover:text-slate-200'
            }`}
          >
            반응형 (Breakpoints)
          </button>
        </div>

        {/* Content Body */}
        <div className="p-6 sm:p-8 overflow-y-auto space-y-6 text-xs sm:text-sm">
          {/* TAB 1: ONE-LINE DIFF SUMMARY */}
          {activeTab === 'summary' && (
            <div className="space-y-6 animate-fade-in">
              <div className="p-5 rounded-2xl bg-cyan-950/30 border border-cyan-500/40 space-y-3">
                <span className="text-xs font-bold text-cyan-400 uppercase tracking-wider">
                  [산출물 3] 원본(Phunk.com) 대비 변경점 한 줄 요약
                </span>
                <p className="text-sm sm:text-base font-semibold text-white leading-relaxed">
                  "{designSystemSpec.diffSummary}"
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="p-5 rounded-2xl bg-[#080D1A] border border-slate-800 space-y-3">
                  <h4 className="font-bold text-white flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-cyan-400" />
                    계승 및 재현한 설계 언어 (Inherited Design DNA)
                  </h4>
                  <ul className="space-y-2 text-slate-300 text-xs">
                    <li>• <strong>3D 퍼스펙티브 와이어프레임 그리드 바닥:</strong> 상단 히어로 및 하단 CTA에 곡면형 네온 호라이즌 그리드 완벽 재현</li>
                    <li>• <strong>딥 옵시디언 다크 테마:</strong> 배경(#06080F) 대비 카드(#0C1220)의 단일 표면 심도 체계</li>
                    <li>• <strong>01, 02, 03 넘버링 카드 구조:</strong> 'Laser-focused' 3대 기둥 카드 및 내부 미니 비주얼라이저 구현</li>
                    <li>• <strong>프로젝트 2컬럼 레이아웃:</strong> 좌측 프레임워크 목업 + 우측 메타데이터 및 'See full case study ↗' 버튼</li>
                    <li>• <strong>클라이언트 증언 및 로고 그리드:</strong> 사회적 신뢰 증거 배치 구조</li>
                  </ul>
                </div>

                <div className="p-5 rounded-2xl bg-[#080D1A] border border-slate-800 space-y-3">
                  <h4 className="font-bold text-white flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-blue-400" />
                    독자적 재설계 및 콘텐츠 매핑 (Original Adaptation)
                  </h4>
                  <ul className="space-y-2 text-slate-300 text-xs">
                    <li>• <strong>포트폴리오 주체:</strong> 웹플로우 에이전시 → 선에듀 교육연구소장 노선영 포트폴리오로 100% 교체</li>
                    <li>• <strong>데이터 기반 성과 시각화:</strong> 3종 인터랙티브 차트(KPI 비교 막대, 상관관계, 역량 매트릭스) 신규 개발</li>
                    <li>• <strong>풀 케이스 스터디 모달:</strong> 3대 프로젝트의 배경, 목적, 문제, 해결책, 배운 점 모달 상세화</li>
                    <li>• <strong>학술 및 정부 포상 체계:</strong> 교육부 대한민국 인재상, 교육기부 대상, 평생교육사 2급 자격 검증</li>
                    <li>• <strong>타이포그래피:</strong> 영문 Plus Jakarta Sans + 국문 Noto Sans KR의 현대적 지적 조화</li>
                  </ul>
                </div>
              </div>
            </div>
          )}

          {/* TAB 2: SPACING SCALE */}
          {activeTab === 'spacing' && (
            <div className="space-y-4 animate-fade-in">
              <h4 className="text-sm font-bold text-white">
                간격 스케일 명세표 (Spacing & Grid Scale)
              </h4>
              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse text-xs">
                  <thead>
                    <tr className="border-b border-slate-800 text-slate-400 font-mono uppercase">
                      <th className="py-2.5 px-3">토큰 (Token)</th>
                      <th className="py-2.5 px-3">값 (Value)</th>
                      <th className="py-2.5 px-3">주요 적용 용도 (Usage)</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-800/60 text-slate-300">
                    {designSystemSpec.spacingScale.map((s, idx) => (
                      <tr key={idx} className="hover:bg-slate-900/40">
                        <td className="py-2.5 px-3 font-mono text-cyan-400 font-semibold">{s.token}</td>
                        <td className="py-2.5 px-3 font-mono">{s.value}</td>
                        <td className="py-2.5 px-3">{s.usage}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {/* TAB 3: TYPOGRAPHY SCALE */}
          {activeTab === 'typography' && (
            <div className="space-y-4 animate-fade-in">
              <h4 className="text-sm font-bold text-white">
                타이포그래피 스케일 명세표 (Typography System)
              </h4>
              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse text-xs">
                  <thead>
                    <tr className="border-b border-slate-800 text-slate-400 font-mono uppercase">
                      <th className="py-2.5 px-3">계층 (Level)</th>
                      <th className="py-2.5 px-3">서체 (Font Family)</th>
                      <th className="py-2.5 px-3">크기 (Size)</th>
                      <th className="py-2.5 px-3">굵기 (Weight)</th>
                      <th className="py-2.5 px-3">용도 (Usage)</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-800/60 text-slate-300">
                    {designSystemSpec.typographyScale.map((t, idx) => (
                      <tr key={idx} className="hover:bg-slate-900/40">
                        <td className="py-2.5 px-3 font-bold text-white">{t.level}</td>
                        <td className="py-2.5 px-3 font-mono text-cyan-300">{t.font}</td>
                        <td className="py-2.5 px-3 font-mono">{t.size}</td>
                        <td className="py-2.5 px-3">{t.weight}</td>
                        <td className="py-2.5 px-3 text-slate-400">{t.usage}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {/* TAB 4: COLOR PALETTE */}
          {activeTab === 'color' && (
            <div className="space-y-4 animate-fade-in">
              <h4 className="text-sm font-bold text-white">
                60-30-10 색상 팔레트 명세표 (Color Palette)
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {designSystemSpec.colorPalette.map((c, idx) => (
                  <div
                    key={idx}
                    className="p-3.5 rounded-xl bg-[#080D1A] border border-slate-800 flex items-center justify-between text-xs"
                  >
                    <div>
                      <div className="font-bold text-white">{c.name}</div>
                      <div className="text-[11px] text-slate-400">{c.role}</div>
                      <div className="font-mono text-cyan-400 text-[11px] mt-0.5">{c.hex}</div>
                    </div>
                    <div
                      className="w-10 h-10 rounded-lg border border-slate-700 shadow-inner shrink-0"
                      style={{ backgroundColor: c.hex.startsWith('rgba') ? '#0284c7' : c.hex }}
                    />
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* TAB 5: INTERACTION SPECS */}
          {activeTab === 'interaction' && (
            <div className="space-y-4 animate-fade-in">
              <h4 className="text-sm font-bold text-white">
                인터랙션 및 모션 스펙 (Interactions & Motion)
              </h4>
              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse text-xs">
                  <thead>
                    <tr className="border-b border-slate-800 text-slate-400 font-mono uppercase">
                      <th className="py-2.5 px-3">인터랙션 요소</th>
                      <th className="py-2.5 px-3">트리거</th>
                      <th className="py-2.5 px-3">동작 효과 (Effect)</th>
                      <th className="py-2.5 px-3">타이밍 & 이징</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-800/60 text-slate-300">
                    {designSystemSpec.interactionSpecs.map((i, idx) => (
                      <tr key={idx} className="hover:bg-slate-900/40">
                        <td className="py-2.5 px-3 font-bold text-cyan-300">{i.element}</td>
                        <td className="py-2.5 px-3 font-mono">{i.trigger}</td>
                        <td className="py-2.5 px-3">{i.effect}</td>
                        <td className="py-2.5 px-3 font-mono text-slate-400">{i.timing}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {/* TAB 6: BREAKPOINTS */}
          {activeTab === 'breakpoints' && (
            <div className="space-y-4 animate-fade-in">
              <h4 className="text-sm font-bold text-white">
                반응형 브레이크포인트 규격 (Responsive Breakpoints)
              </h4>
              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse text-xs">
                  <thead>
                    <tr className="border-b border-slate-800 text-slate-400 font-mono uppercase">
                      <th className="py-2.5 px-3">키 (Key)</th>
                      <th className="py-2.5 px-3">해상도 폭</th>
                      <th className="py-2.5 px-3">레이아웃 동작 (Behavior)</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-800/60 text-slate-300">
                    {designSystemSpec.breakpoints.map((b, idx) => (
                      <tr key={idx} className="hover:bg-slate-900/40">
                        <td className="py-2.5 px-3 font-mono font-bold text-cyan-400">{b.key}</td>
                        <td className="py-2.5 px-3 font-mono">{b.width}</td>
                        <td className="py-2.5 px-3">{b.behavior}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="p-4 border-t border-slate-800 bg-[#070B16] flex items-center justify-between text-xs">
          <span className="text-slate-400">
            Phunk.com 디자인 랭귀지 기반 포트폴리오 설계 명세
          </span>
          <button
            onClick={onClose}
            className="px-4 py-2 rounded-lg bg-slate-900 border border-slate-700 hover:border-cyan-400 text-slate-200"
          >
            닫기
          </button>
        </div>
      </div>
    </div>
  );
};
