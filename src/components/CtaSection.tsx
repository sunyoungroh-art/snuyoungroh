/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { ArrowUpRight } from 'lucide-react';

interface CtaSectionProps {
  onOpenContact: () => void;
}

export const CtaSection: React.FC<CtaSectionProps> = ({ onOpenContact }) => {
  return (
    <section className="relative pt-24 pb-16 sm:pt-32 sm:pb-24 bg-[#06080F] border-t border-slate-900 overflow-hidden text-center">
      {/* Background glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-cyan-600/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Phunk-style Mammoth Call to Action */}
        <h2 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white tracking-tight max-w-4xl mx-auto leading-tight">
          Let's create <span className="text-gradient-cyan text-glow">transformative education.</span>
        </h2>

        <p className="mt-6 text-base sm:text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed">
          맞춤형 교육과정 설계, 데이터 기반 성과평가 체계 구축, 공공 및 민간 연구 프로젝트 자문 등 노선영 소장과의 협업을 지금 제안해 보세요.
        </p>

        {/* Action Button matching Phunk's 'Talk to us' */}
        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <button
            onClick={onOpenContact}
            className="px-8 py-4 text-base font-bold text-white bg-gradient-to-r from-blue-600 via-cyan-500 to-cyan-400 hover:from-blue-500 hover:to-cyan-300 rounded-full shadow-2xl shadow-cyan-500/40 hover:shadow-cyan-400/60 hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200 flex items-center gap-2 group"
          >
            <span>협업 및 연구 프로젝트 문의하기</span>
            <ArrowUpRight className="w-5 h-5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </button>
        </div>

        {/* Phunk Signature Curved 3D Perspective Grid Floor Container */}
        <div className="mt-16 sm:mt-24 relative max-w-5xl mx-auto">
          <div className="relative h-48 sm:h-64 w-full rounded-3xl border border-cyan-500/20 bg-gradient-to-b from-[#090F1C] via-[#050811] to-[#03050A] overflow-hidden shadow-2xl">
            {/* Perspective grid floor */}
            <div className="absolute inset-x-0 bottom-0 h-full perspective-grid-container flex items-end justify-center">
              <div className="w-[180%] h-[120%] perspective-grid-floor -mb-8 opacity-65" />
            </div>

            {/* Glowing horizon line */}
            <div className="absolute inset-x-12 bottom-1/2 h-px bg-gradient-to-r from-transparent via-cyan-400 to-transparent opacity-80" />
            <div className="absolute inset-x-20 bottom-1/2 -translate-y-1/2 h-14 bg-cyan-400/20 blur-xl pointer-events-none" />

            {/* Bottom emblem connector matching Phunk's mark */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-20">
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
