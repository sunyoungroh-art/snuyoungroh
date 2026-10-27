/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { partnerOrganizations } from '../data/portfolioData';
import { ShieldCheck } from 'lucide-react';

export const TrustedPartnersSection: React.FC = () => {
  return (
    <section className="py-20 relative bg-[#06080F] border-t border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        {/* Phunk-style lead title */}
        <p className="text-xs font-mono uppercase tracking-widest text-slate-400">
          Trusted by leading educational institutions & government agencies.
        </p>

        <h3 className="text-xl sm:text-2xl font-bold text-white mt-2 mb-10">
          신뢰받는 공공기관 및 <span className="text-cyan-400">교육 연구 네트워크</span>
        </h3>

        {/* Partners Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 sm:gap-6">
          {partnerOrganizations.map((p, idx) => (
            <div
              key={idx}
              className="p-5 rounded-2xl bg-[#090F1C]/80 border border-slate-800/80 hover:border-cyan-500/40 transition-all duration-300 flex flex-col items-center justify-center text-center group"
            >
              <div className="w-10 h-10 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center mb-3 group-hover:border-cyan-400/50 group-hover:scale-105 transition-all">
                <ShieldCheck className="w-5 h-5 text-cyan-400" />
              </div>

              <span className="text-sm font-bold text-white group-hover:text-cyan-300 transition-colors">
                {p.name}
              </span>
              <span className="text-[11px] text-slate-400 mt-1 font-mono">
                {p.role}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
