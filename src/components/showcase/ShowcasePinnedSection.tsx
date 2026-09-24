import React, { useState } from 'react';
import { Showcase3DCanvas } from './Showcase3DCanvas';
import { Shield, Sparkles, Layers, Key, ArrowRight } from 'lucide-react';
import { soundManager } from '../../utils/sound';

interface ShowcasePinnedSectionProps {
  onOpenModal: (type: 'claim-key', triggerEl?: HTMLElement) => void;
}


export const ShowcasePinnedSection: React.FC<ShowcasePinnedSectionProps> = ({ onOpenModal }) => {
  const [progress, setProgress] = useState(0);

  const currentPhase = progress < 0.35 ? 1 : progress < 0.7 ? 2 : 3;

  const phases = [
    {
      num: 1,
      tag: 'PHASE 01 // GENESIS',
      title: 'Biometric Monolith Enclave',
      desc: 'Hardware-isolated zero-knowledge capture. Your biological signatures are converted into decentralized cryptographic hashes without ever leaving your physical control.',
      icon: Shield,
      metrics: 'SCAN RATE: 0.12ms // POST-QUANTUM HARDENED',
    },
    {
      num: 2,
      tag: 'PHASE 02 // DECONSTRUCTION',
      title: 'Dynamic Identity Architecture',
      desc: 'The monolithic identity dissolves into sovereign, modular credentials. Granular access tokens allow proving eligibility without disclosing confidential telemetry.',
      icon: Layers,
      metrics: 'ZKP VERIFIABILITY: 100% // ENTROPY LEVEL: MAXIMUM',
    },
    {
      num: 3,
      tag: 'PHASE 03 // SYNTHESIS',
      title: 'The Sovereign Consortium Pass',
      desc: 'The ultimate synthesis. A physical-digital cryptographic key granting unencumbered admission to high-tier global networks, private hubs, and wealth sanctums.',
      icon: Key,
      metrics: 'CONSORTIUM LEVEL: ELITE OMNI-ACCESS',
    },
  ];

  const activePhase = phases[currentPhase - 1];
  const Icon = activePhase.icon;

  return (
    <section
      id="showcase"
      className="relative w-full h-screen bg-[#fbf9f5] flex items-center justify-between overflow-hidden"
      aria-label="3D Interactive Artifact Showcase"
    >
      {/* 3D WebGL Pinned Canvas */}
      <Showcase3DCanvas onProgressUpdate={(p) => setProgress(p)} />

      {/* Atmospheric lighting gradients for light theme */}
      <div className="pointer-events-none absolute inset-0 bg-radial from-transparent via-[#fbf9f5]/30 to-[#fbf9f5]/80 z-10" />

      {/* Top HUD Bar */}
      <div className="absolute top-10 left-6 right-6 max-w-6xl mx-auto flex items-center justify-between z-20 pointer-events-none">
        <div className="flex items-center gap-3">
          <span className="w-2 h-2 rounded-full bg-[#9a7c38] animate-ping" />
          <span className="font-mono text-xs uppercase tracking-[0.25em] text-[#856926] font-semibold">
            EXHIBITION 03 // THE SOVEREIGN ARTIFACT
          </span>
        </div>

        {/* Phase selector tabs */}
        <div className="hidden sm:flex items-center gap-2 pointer-events-auto">
          {phases.map((p) => (
            <div
              key={p.num}
              className={`px-3 py-1 rounded-full text-xs font-mono transition-all duration-300 ${
                currentPhase === p.num
                  ? 'bg-[#9a7c38] text-white font-bold shadow-[0_4px_15px_rgba(154,124,56,0.3)]'
                  : 'bg-black/[0.04] text-[#585e70] border border-black/[0.06]'
              }`}
            >
              STAGE 0{p.num}
            </div>
          ))}
        </div>
      </div>

      {/* Main Interactive Floating HUD Card */}
      <div className="relative z-20 max-w-6xl mx-auto w-full px-6 flex flex-col md:flex-row items-center justify-between pointer-events-none">
        {/* Left Side: Animated Stage Information Panel */}
        <div className="w-full max-w-md pointer-events-auto">
          <div className="rounded-2xl glass-panel-glow p-8 transition-all duration-500 transform translate-y-0 shadow-[0_20px_50px_rgba(20,26,41,0.08)]">
            <div className="flex items-center justify-between mb-4">
              <span className="font-mono text-xs font-bold tracking-[0.2em] text-[#856926] uppercase">
                {activePhase.tag}
              </span>
              <div className="w-8 h-8 rounded-lg bg-[#9a7c38]/10 border border-[#9a7c38]/30 flex items-center justify-center text-[#856926]">
                <Icon className="w-4 h-4" />
              </div>
            </div>

            <h3 className="font-display text-2xl sm:text-3xl font-bold text-[#141a29] mb-3">
              {activePhase.title}
            </h3>

            <p className="text-sm text-[#585e70] font-light leading-relaxed mb-6">
              {activePhase.desc}
            </p>

            <div className="py-3 px-4 rounded-xl bg-black/[0.03] border border-black/[0.06] font-mono text-[11px] text-[#856926] tracking-wider mb-6 flex items-center gap-2">
              <Sparkles className="w-3.5 h-3.5 text-[#9a7c38]" />
              <span>{activePhase.metrics}</span>
            </div>

            {currentPhase === 3 ? (
              <button
                type="button"
                onClick={(e) => {
                  soundManager.playClick();
                  onOpenModal('claim-key', e.currentTarget);
                }}
                className="w-full py-3.5 rounded-full bg-gradient-to-r from-[#9a7c38] via-[#b8964d] to-[#856926] text-white font-bold text-xs uppercase tracking-widest flex items-center justify-center gap-2 shadow-[0_10px_30px_rgba(154,124,56,0.35)] hover:shadow-[0_12px_40px_rgba(154,124,56,0.5)] transition-all cursor-pointer"
              >
                <span>Claim Sovereign Key</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            ) : (
              <div className="text-xs font-mono text-[#585e70] tracking-wider flex items-center gap-2">
                <span className="animate-pulse">SCROLL TO ADVANCE SEQUENCE</span>
                <span>({Math.round(progress * 100)}%)</span>
              </div>
            )}
          </div>
        </div>

        {/* Right Side: Scrub Progress Gauge */}
        <div className="hidden lg:flex flex-col items-center gap-4 pointer-events-auto">
          <div className="font-mono text-xs uppercase tracking-widest text-[#856926] font-semibold rotate-90 origin-right translate-x-8 mb-6">
            PROGRESS // {Math.round(progress * 100)}%
          </div>

          <div className="w-1.5 h-48 bg-black/10 rounded-full overflow-hidden p-0.5 relative">
            <div
              className="w-full bg-gradient-to-b from-[#0284c7] via-[#9a7c38] to-[#c8a96e] rounded-full transition-all duration-75"
              style={{ height: `${progress * 100}%` }}
            />
          </div>
        </div>
      </div>

      {/* Bottom Telemetry Footer */}
      <div className="absolute bottom-8 left-6 right-6 max-w-6xl mx-auto flex items-center justify-between z-20 pointer-events-none text-[11px] font-mono text-[#585e70]">
        <div>3D CORE: REAL-TIME SHADER DISPLACEMENT [60 FPS]</div>
        <div className="hidden sm:block">PINNED TIMELINE // SCRUB RATIO 1.0</div>
      </div>
    </section>
  );
};
