/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight, Sparkles, Sliders } from 'lucide-react';
import { profileData } from '../data/portfolioData';

interface NavbarProps {
  onOpenContact: () => void;
  onOpenDesignSystem: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenContact, onOpenDesignSystem }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: '소개', href: '#about' },
    { label: '핵심 가치', href: '#pillars' },
    { label: '프로젝트', href: '#projects' },
    { label: '성과 데이터', href: '#metrics' },
    { label: '전문 역량', href: '#skills' },
    { label: '이력 & 저서', href: '#credentials' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#06080F]/90 backdrop-blur-md border-b border-sky-400/15 py-3 shadow-2xl'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-8">
          {/* Zone 1: Single text element wordmark */}
          <a
            href="#"
            className="flex items-center gap-2.5 text-lg font-bold tracking-tight text-white hover:text-cyan-400 transition-colors whitespace-nowrap shrink-0 group"
          >
            <span className="w-8 h-8 rounded-lg bg-gradient-to-br from-cyan-400 to-blue-600 flex items-center justify-center text-black font-extrabold text-sm shadow-md shadow-cyan-500/20 group-hover:scale-105 transition-transform">
              SE
            </span>
            <span className="font-bold text-slate-100">
              {profileData.name}
              <span className="text-cyan-400 ml-1.5 text-xs font-medium px-2 py-0.5 rounded border border-cyan-500/30 bg-cyan-950/40">
                선에듀
              </span>
            </span>
          </a>

          {/* Zone 2: Concise navigation links */}
          <nav className="hidden lg:flex items-center gap-7 text-sm font-medium text-slate-300">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="hover:text-cyan-400 transition-colors whitespace-nowrap shrink-0 relative py-1 group"
              >
                {link.label}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-cyan-400 group-hover:w-full transition-all duration-200" />
              </a>
            ))}
          </nav>

          {/* Zone 3: Primary action & Design specs trigger */}
          <div className="hidden sm:flex items-center gap-3 shrink-0">
            <button
              onClick={onOpenDesignSystem}
              className="flex items-center gap-1.5 px-3 py-2 text-xs font-medium text-cyan-300 hover:text-white bg-slate-900/80 hover:bg-slate-800 border border-cyan-500/30 rounded-full transition-colors whitespace-nowrap shrink-0"
              title="설계 시스템 명세 (요약표 및 원본 대비 매핑)"
            >
              <Sliders className="w-3.5 h-3.5" />
              <span>디자인 시스템 명세</span>
            </button>

            <button
              onClick={onOpenContact}
              className="flex items-center gap-1.5 px-5 py-2 text-xs font-semibold text-white bg-gradient-to-r from-blue-600 via-cyan-500 to-cyan-400 hover:from-blue-500 hover:to-cyan-300 rounded-full shadow-lg shadow-cyan-500/25 hover:shadow-cyan-400/40 hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200 whitespace-nowrap shrink-0"
            >
              <span>협업 문의하기</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Mobile hamburger menu button */}
          <div className="flex sm:hidden items-center gap-2">
            <button
              onClick={onOpenDesignSystem}
              className="p-2 text-cyan-300 bg-slate-900 border border-cyan-500/30 rounded-lg text-xs"
              aria-label="디자인 시스템 명세"
            >
              <Sliders className="w-4 h-4" />
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-slate-300 hover:text-white bg-slate-900/60 border border-slate-800 rounded-lg"
              aria-label="메뉴 열기"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile dropdown menu */}
        {mobileMenuOpen && (
          <div className="sm:hidden mt-3 p-4 bg-[#0B0F19] border border-cyan-500/20 rounded-2xl shadow-2xl flex flex-col gap-3 animate-in fade-in slide-in-from-top-2">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="py-2 px-3 text-sm font-medium text-slate-200 hover:bg-slate-800/60 hover:text-cyan-400 rounded-lg transition-colors"
              >
                {link.label}
              </a>
            ))}
            <div className="pt-2 border-t border-slate-800 flex flex-col gap-2">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenContact();
                }}
                className="w-full py-2.5 text-center text-xs font-semibold text-white bg-gradient-to-r from-blue-600 to-cyan-400 rounded-xl shadow-md"
              >
                협업 문의하기
              </button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};
