/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { AboutSection } from './components/AboutSection';
import { PillarsSection } from './components/PillarsSection';
import { PhilosophyBentoSection } from './components/PhilosophyBentoSection';
import { ProjectsSection } from './components/ProjectsSection';
import { MetricsChartsSection } from './components/MetricsChartsSection';
import { SkillsSection } from './components/SkillsSection';
import { CredentialsSection } from './components/CredentialsSection';
import { TrustedPartnersSection } from './components/TrustedPartnersSection';
import { TestimonialsSection } from './components/TestimonialsSection';
import { CtaSection } from './components/CtaSection';
import { Footer } from './components/Footer';
import { CaseStudyModal } from './components/CaseStudyModal';
import { ContactModal } from './components/ContactModal';
import { DesignSystemModal } from './components/DesignSystemModal';
import { ProjectItem } from './types/portfolio';
import { Sliders, MessageSquare, ArrowUp } from 'lucide-react';

export default function App() {
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);
  const [contactModalOpen, setContactModalOpen] = useState(false);
  const [designSystemModalOpen, setDesignSystemModalOpen] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      if (totalScroll > 0) {
        setScrollProgress((window.scrollY / totalScroll) * 100);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-[#06080F] text-slate-100 selection:bg-cyan-500 selection:text-black font-sans relative antialiased">
      {/* Scroll Progress Bar */}
      <div className="fixed top-0 left-0 right-0 h-1 bg-slate-900 z-50">
        <div
          className="h-full bg-gradient-to-r from-blue-600 via-sky-400 to-cyan-400 transition-all duration-150"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>

      {/* Top Bar Contract Navigation */}
      <Navbar
        onOpenContact={() => setContactModalOpen(true)}
        onOpenDesignSystem={() => setDesignSystemModalOpen(true)}
      />

      {/* Main Single-Page Portfolio Flow */}
      <main>
        {/* 1. Hero with Signature Phunk 3D Perspective Grid Floor */}
        <HeroSection onOpenContact={() => setContactModalOpen(true)} />

        {/* 2. About SunEdu & Roh Sunyoung ("We're Phunk. Pleased to meet you" adaptation) */}
        <AboutSection />

        {/* 3. 3 Core Pillars ("Laser-focused on 3 key aspects" with 01, 02, 03 cards) */}
        <PillarsSection />

        {/* 4. Research Philosophy Bento ("Why work with us?" adaptation) */}
        <PhilosophyBentoSection />

        {/* 5. Recent Projects Showcase ("recent projects, across a range of sectors") */}
        <ProjectsSection onSelectProject={(p) => setSelectedProject(p)} />

        {/* 6. Empirical Evidence & KPI Comparison Charts (Section 9 of user input) */}
        <MetricsChartsSection />

        {/* 7. Skills & Competencies (8 rated core skills) */}
        <SkillsSection />

        {/* 8. Career Experience, Education, Government Awards & Books */}
        <CredentialsSection />

        {/* 9. Trusted Institutional Partners */}
        <TrustedPartnersSection />

        {/* 10. Partner & Client Endorsements ("What our clients think of Phunk") */}
        <TestimonialsSection />

        {/* 11. Final Call To Action ("Let's get to work" with curved perspective grid floor) */}
        <CtaSection onOpenContact={() => setContactModalOpen(true)} />
      </main>

      {/* Footer */}
      <Footer
        onOpenDesignSystem={() => setDesignSystemModalOpen(true)}
        onOpenContact={() => setContactModalOpen(true)}
      />

      {/* Modals */}
      <CaseStudyModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
        onOpenContact={() => setContactModalOpen(true)}
      />

      <ContactModal
        isOpen={contactModalOpen}
        onClose={() => setContactModalOpen(false)}
      />

      <DesignSystemModal
        isOpen={designSystemModalOpen}
        onClose={() => setDesignSystemModalOpen(false)}
      />

      {/* Floating Action Button (Design System & Contact trigger) */}
      <aside aria-label="Floating Shortcuts" className="fixed bottom-6 right-6 z-30 flex flex-col gap-2.5">
        <button
          onClick={() => setDesignSystemModalOpen(true)}
          className="p-3 rounded-full bg-[#0B1224] border border-cyan-400/40 text-cyan-300 hover:text-white hover:bg-cyan-950/80 shadow-xl shadow-cyan-950/50 hover:scale-105 active:scale-95 transition-all group flex items-center justify-center"
          title="설계 시스템 요약표 (Design System Specs)"
        >
          <Sliders className="w-5 h-5 text-cyan-400" />
          <span className="sr-only">설계 시스템 요약표</span>
        </button>

        <button
          onClick={() => setContactModalOpen(true)}
          className="p-3 rounded-full bg-gradient-to-r from-blue-600 to-cyan-400 text-white shadow-xl shadow-cyan-500/30 hover:shadow-cyan-400/50 hover:scale-105 active:scale-95 transition-all group flex items-center justify-center"
          title="협업 문의하기"
        >
          <MessageSquare className="w-5 h-5" />
          <span className="sr-only">협업 문의하기</span>
        </button>
      </aside>
    </div>
  );
}
