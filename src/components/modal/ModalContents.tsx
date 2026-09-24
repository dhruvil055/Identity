import React, { useState } from 'react';
import {
  ShieldCheck,
  Key,
  Lock,
  Wallet,
  ArrowRight,
  CheckCircle2,
  Sparkles,
  Fingerprint,
  Layers,
  Compass,
  QrCode,
  ShieldAlert
} from 'lucide-react';
import { soundManager } from '../../utils/sound';

/* =========================================================================
   1. ACCESS PORTAL CONTENT
   ========================================================================= */
export const AccessPortalContent: React.FC<{ onClose: () => void }> = ({ onClose }) => {
  const [email, setEmail] = useState('');
  const [connectingWallet, setConnectingWallet] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    soundManager.playChime();
    setSubmitted(true);
  };

  const handleWalletConnect = () => {
    soundManager.playClick();
    setConnectingWallet(true);
    setTimeout(() => {
      setConnectingWallet(false);
      setSubmitted(true);
    }, 900);
  };

  if (submitted) {
    return (
      <div className="text-center py-8">
        <div className="w-14 h-14 rounded-full bg-[#9a7c38]/15 border border-[#9a7c38] flex items-center justify-center text-[#856926] mx-auto mb-4 animate-bounce">
          <CheckCircle2 className="w-7 h-7" />
        </div>
        <h3 className="font-display text-2xl font-bold text-[#141a29] mb-2">
          Encrypted Authentication Sent
        </h3>
        <p className="text-sm text-[#585e70] max-w-sm mx-auto mb-6">
          A zero-knowledge cryptographic authentication token has been dispatched. Check your hardware key or email enclave.
        </p>
        <button
          type="button"
          onClick={onClose}
          className="px-6 py-2.5 rounded-full bg-[#9a7c38] text-white text-xs font-bold uppercase tracking-widest hover:bg-[#b8964d] transition-all cursor-pointer shadow-md"
        >
          Close Window
        </button>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <p className="text-sm text-[#585e70] leading-relaxed">
        Connect to your sovereign identity vault via biometric passkey, zero-knowledge email verification, or hardware enclave.
      </p>

      {/* Hardware / Wallet Connect Button */}
      <button
        type="button"
        onClick={handleWalletConnect}
        disabled={connectingWallet}
        className="w-full py-3.5 px-4 rounded-2xl bg-white border border-[#9a7c38]/40 hover:border-[#9a7c38] hover:bg-[#9a7c38]/5 text-[#141a29] font-medium text-sm flex items-center justify-between transition-all cursor-pointer shadow-sm group"
      >
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-xl bg-[#9a7c38]/10 text-[#856926] flex items-center justify-center group-hover:scale-105 transition-transform">
            <Wallet className="w-4 h-4" />
          </div>
          <div className="text-left">
            <div className="text-xs font-mono font-bold tracking-wider uppercase text-[#141a29]">
              Hardware Key / Web3 Wallet
            </div>
            <div className="text-[11px] text-[#585e70]">Passkey, Ledger, or MetaMask</div>
          </div>
        </div>
        <span className="text-xs font-mono text-[#856926] font-semibold">
          {connectingWallet ? 'Connecting...' : 'Connect →'}
        </span>
      </button>

      <div className="relative flex items-center justify-center my-2">
        <div className="w-full h-px bg-black/[0.08]" />
        <span className="absolute bg-[#fbf9f5] px-3 text-[10px] font-mono uppercase tracking-widest text-[#8990a2]">
          or sovereign email
        </span>
      </div>

      {/* Email Login Form */}
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="portal-email" className="block text-xs font-mono uppercase tracking-wider text-[#585e70] mb-2 font-semibold">
            Confidential Address
          </label>
          <input
            id="portal-email"
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="member@sovereign.xyz"
            className="w-full px-4 py-3 rounded-xl bg-white border border-black/15 text-sm text-[#141a29] placeholder-[#8990a2] focus:outline-none focus:border-[#9a7c38] focus:ring-1 focus:ring-[#9a7c38] transition-colors shadow-sm"
          />
        </div>

        <button
          type="submit"
          className="w-full py-3.5 rounded-full bg-gradient-to-r from-[#9a7c38] via-[#b8964d] to-[#856926] text-white font-bold text-xs uppercase tracking-widest flex items-center justify-center gap-2 shadow-[0_8px_25px_rgba(154,124,56,0.3)] hover:shadow-[0_12px_35px_rgba(154,124,56,0.5)] transition-all cursor-pointer"
        >
          <Lock className="w-3.5 h-3.5" />
          <span>Authenticate Session</span>
        </button>
      </form>

      <div className="pt-4 border-t border-black/[0.06] flex items-center justify-between text-[11px] font-mono text-[#585e70]">
        <div className="flex items-center gap-1.5 text-[#0284c7]">
          <ShieldCheck className="w-3.5 h-3.5" />
          <span>AES-512 HARDENED</span>
        </div>
        <span>PORTAL v4.8</span>
      </div>
    </div>
  );
};

/* =========================================================================
   2. INITIALIZE IDENTITY CONTENT
   ========================================================================= */
export const InitializeIdentityContent: React.FC<{ onClose: () => void }> = ({ onClose }) => {
  const [name, setName] = useState('');
  const [handle, setHandle] = useState('');
  const [tier, setTier] = useState('SOVEREIGN');
  const [step, setStep] = useState(1);

  const handleNext = (e: React.FormEvent) => {
    e.preventDefault();
    soundManager.playChime();
    setStep(2);
  };

  return (
    <div>
      {step === 1 ? (
        <form onSubmit={handleNext} className="space-y-5">
          <p className="text-sm text-[#585e70] leading-relaxed">
            Begin your sovereign registration. Your biological telemetry and digital credentials will be mapped into a zero-knowledge hardware isolate.
          </p>

          <div>
            <label htmlFor="init-name" className="block text-xs font-mono uppercase tracking-wider text-[#585e70] mb-2 font-semibold">
              Legal Identity or Primary Alias
            </label>
            <input
              id="init-name"
              type="text"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="e.g. Aurelius Vance"
              className="w-full px-4 py-3 rounded-xl bg-white border border-black/15 text-sm text-[#141a29] placeholder-[#8990a2] focus:outline-none focus:border-[#9a7c38] transition-colors shadow-sm"
            />
          </div>

          <div>
            <label htmlFor="init-handle" className="block text-xs font-mono uppercase tracking-wider text-[#585e70] mb-2 font-semibold">
              Desired Sovereign Handle
            </label>
            <div className="relative">
              <span className="absolute left-4 top-3.5 text-sm font-mono text-[#8990a2]">@</span>
              <input
                id="init-handle"
                type="text"
                required
                value={handle}
                onChange={(e) => setHandle(e.target.value)}
                placeholder="vance"
                className="w-full pl-8 pr-28 py-3 rounded-xl bg-white border border-black/15 text-sm text-[#141a29] placeholder-[#8990a2] focus:outline-none focus:border-[#9a7c38] transition-colors shadow-sm"
              />
              <span className="absolute right-4 top-3.5 text-xs font-mono text-[#856926]">.identy</span>
            </div>
          </div>

          <div>
            <label className="block text-xs font-mono uppercase tracking-wider text-[#585e70] mb-2 font-semibold">
              Initial Credential Tier
            </label>
            <div className="grid grid-cols-3 gap-2">
              {['SOVEREIGN', 'ENCLAVE', 'CONSORTIUM'].map((t) => (
                <button
                  key={t}
                  type="button"
                  onClick={() => {
                    soundManager.playHover();
                    setTier(t);
                  }}
                  className={`py-2 rounded-xl text-xs font-mono font-bold tracking-wider transition-all border cursor-pointer ${
                    tier === t
                      ? 'bg-[#9a7c38] text-white border-[#856926] shadow-sm'
                      : 'bg-white text-[#585e70] border-black/10 hover:border-black/20'
                  }`}
                >
                  {t}
                </button>
              ))}
            </div>
          </div>

          <button
            type="submit"
            className="w-full py-4 rounded-full bg-gradient-to-r from-[#9a7c38] via-[#b8964d] to-[#856926] text-white font-bold text-xs uppercase tracking-widest flex items-center justify-center gap-2 shadow-[0_8px_25px_rgba(154,124,56,0.3)] hover:shadow-[0_12px_35px_rgba(154,124,56,0.5)] transition-all cursor-pointer"
          >
            <span>Proceed to Biometric Mapping</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </form>
      ) : (
        <div className="text-center py-6 space-y-6">
          <div className="w-16 h-16 rounded-full bg-[#9a7c38]/10 border border-[#9a7c38] flex items-center justify-center text-[#856926] mx-auto animate-pulse">
            <Fingerprint className="w-8 h-8" />
          </div>

          <div>
            <h3 className="font-display text-2xl font-bold text-[#141a29]">
              Biometric Enclave Initialized
            </h3>
            <p className="font-mono text-xs text-[#856926] font-semibold mt-1">
              IDENTITY: @{handle || 'alias'}.identy // TIER: {tier}
            </p>
          </div>

          <div className="p-4 rounded-xl bg-black/[0.03] border border-black/10 text-left font-mono text-xs text-[#585e70] space-y-1.5">
            <div className="flex justify-between">
              <span>HOLDER:</span>
              <span className="text-[#141a29] font-bold">{name || 'ANONYMOUS'}</span>
            </div>
            <div className="flex justify-between">
              <span>ZKP PUBLIC HASH:</span>
              <span className="text-[#856926]">0x992B...8F12</span>
            </div>
            <div className="flex justify-between">
              <span>CUSTODY:</span>
              <span className="text-[#0284c7]">SELF-SOVEREIGN LOCAL ISOLATE</span>
            </div>
          </div>

          <button
            type="button"
            onClick={onClose}
            className="w-full py-3.5 rounded-full bg-[#9a7c38] text-white font-bold text-xs uppercase tracking-widest shadow-md hover:bg-[#b8964d] transition-all cursor-pointer"
          >
            Complete Initialization
          </button>
        </div>
      )}
    </div>
  );
};

/* =========================================================================
   3. EXPLORE DIMENSIONS CONTENT
   ========================================================================= */
export const ExploreDimensionsContent: React.FC<{
  onSwitchToApplication: () => void;
  onClose: () => void;
}> = ({ onSwitchToApplication, onClose }) => {
  const [activeTab, setActiveTab] = useState<0 | 1 | 2>(0);

  const dimensions = [
    {
      title: 'Neural Identity Matrix',
      subtitle: 'DIMENSION 01 // AUTONOMOUS REINVENTION',
      icon: Layers,
      highlight: 'Continuous Cryptographic Adaptation',
      description:
        'A dynamic mathematical identity architecture that evolves with your accomplishments, certifications, and lifestyle transitions without disclosing raw underlying telemetry to central servers.',
      telemetry: ['Zero-Knowledge Proofs', 'Continuous Evolution Engine', 'Biometric Local Enclave'],
    },
    {
      title: 'Private Enclave Vault',
      subtitle: 'DIMENSION 02 // CONFIDENTIAL STEWARDSHIP',
      icon: ShieldCheck,
      highlight: 'Post-Quantum Secured Custody',
      description:
        'Military-grade zero-knowledge vaults safeguarding high-value deeds, corporate governance voting stakes, private sovereign keys, and unlisted physical luxury contracts.',
      telemetry: ['Multi-Party Computation', 'Hardware Enclaves', 'No Central Backdoor'],
    },
    {
      title: 'Sovereign Consortium',
      subtitle: 'DIMENSION 03 // GLOBAL PHYSICAL SANCTUM',
      icon: Compass,
      highlight: 'Confidential Embassy Access',
      description:
        'A network of physical private embassies, maritime clubs, and alpine sanctums across Geneva, Tokyo, Zurich, London, and New York accessible exclusively through cryptographic member keys.',
      telemetry: ['Bespoke Concierge Atelier', 'Private Aviation Access', 'Global Sovereign Passports'],
    },
  ];

  const current = dimensions[activeTab];
  const Icon = current.icon;

  return (
    <div className="space-y-6">
      {/* 3 Dimension Navigation Tabs */}
      <div className="flex items-center gap-2 p-1 bg-black/[0.04] rounded-2xl border border-black/[0.06]">
        {dimensions.map((dim, idx) => (
          <button
            key={dim.title}
            type="button"
            onClick={() => {
              soundManager.playHover();
              setActiveTab(idx as 0 | 1 | 2);
            }}
            className={`flex-1 py-2 sm:py-2.5 px-2 rounded-xl text-xs font-mono font-bold tracking-wider transition-all text-center cursor-pointer ${
              activeTab === idx
                ? 'bg-white text-[#141a29] shadow-sm border border-black/10'
                : 'text-[#585e70] hover:text-[#141a29]'
            }`}
          >
            0{idx + 1} // {dim.title.split(' ')[0]}
          </button>
        ))}
      </div>

      {/* Selected Dimension Detail Card */}
      <div className="p-6 rounded-2xl bg-white border border-[#9a7c38]/25 shadow-sm space-y-4">
        <div className="flex items-start justify-between">
          <div>
            <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-[#856926] font-bold">
              {current.subtitle}
            </span>
            <h3 className="font-display text-2xl font-bold text-[#141a29] mt-1">
              {current.title}
            </h3>
          </div>
          <div className="w-10 h-10 rounded-xl bg-[#9a7c38]/10 text-[#856926] flex items-center justify-center">
            <Icon className="w-5 h-5" />
          </div>
        </div>

        <p className="text-sm text-[#585e70] leading-relaxed">
          {current.description}
        </p>

        <div className="pt-4 border-t border-black/[0.06]">
          <div className="text-[11px] font-mono text-[#856926] font-semibold uppercase tracking-wider mb-2">
            CORE CAPABILITIES:
          </div>
          <div className="flex flex-wrap gap-2">
            {current.telemetry.map((tel) => (
              <span
                key={tel}
                className="px-2.5 py-1 rounded-md text-[11px] font-mono bg-black/[0.03] text-[#585e70] border border-black/[0.06]"
              >
                {tel}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Action Footer inside dialog */}
      <div className="flex flex-wrap items-center justify-between gap-3 pt-2">
        <button
          type="button"
          onClick={() => {
            soundManager.playClick();
            onSwitchToApplication();
          }}
          className="py-3 px-6 rounded-full bg-gradient-to-r from-[#9a7c38] via-[#b8964d] to-[#856926] text-white font-bold text-xs uppercase tracking-widest flex items-center gap-2 shadow-[0_8px_25px_rgba(154,124,56,0.3)] hover:shadow-[0_12px_35px_rgba(154,124,56,0.5)] transition-all cursor-pointer"
        >
          <span>Apply For Enclave Admission</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </button>

        <button
          type="button"
          onClick={onClose}
          className="text-xs font-mono text-[#585e70] hover:text-[#141a29] transition-colors cursor-pointer"
        >
          Close Overview
        </button>
      </div>
    </div>
  );
};

/* =========================================================================
   4. CLAIM SOVEREIGN KEY CONTENT
   ========================================================================= */
export const ClaimSovereignKeyContent: React.FC<{ onClose: () => void }> = ({ onClose }) => {
  const [confirmed, setConfirmed] = useState(false);
  const [agreed, setAgreed] = useState(false);

  const handleClaim = () => {
    soundManager.playChime();
    setConfirmed(true);
  };

  if (confirmed) {
    return (
      <div className="text-center py-6 space-y-5">
        <div className="w-16 h-16 rounded-full bg-[#9a7c38]/15 border border-[#9a7c38] flex items-center justify-center text-[#856926] mx-auto animate-bounce">
          <Key className="w-8 h-8" />
        </div>
        <h3 className="font-display text-2xl font-bold text-[#141a29]">
          Sovereign Key Mint Dispatched
        </h3>
        <p className="font-mono text-xs uppercase tracking-widest text-[#856926] font-semibold">
          TOKEN ID // 8820-ZK-CONSORTIUM-KEY
        </p>
        <p className="text-sm text-[#585e70] max-w-sm mx-auto leading-relaxed">
          Your key has been minted to your private hardware enclave. The physical titanium pass will be presented upon your next arrival at the Geneva Sanctum.
        </p>
        <button
          type="button"
          onClick={onClose}
          className="px-8 py-3 rounded-full bg-[#9a7c38] text-white text-xs font-bold uppercase tracking-widest shadow-md hover:bg-[#b8964d] transition-all cursor-pointer"
        >
          Return to Matrix
        </button>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <p className="text-sm text-[#585e70] leading-relaxed">
        Confirm synthesis and minting of your physical-digital Sovereign Consortium Key.
      </p>

      {/* Artifact Summary Card */}
      <div className="p-5 rounded-2xl bg-white border border-[#9a7c38]/30 shadow-sm flex items-center gap-5">
        <div className="w-14 h-14 rounded-2xl bg-[#9a7c38]/10 border border-[#9a7c38]/30 flex items-center justify-center text-[#856926] shrink-0">
          <QrCode className="w-7 h-7" />
        </div>
        <div className="space-y-1">
          <div className="text-xs font-mono font-bold uppercase text-[#856926]">
            SYNTHESIS ARTIFACT // 2026 EDITION
          </div>
          <div className="font-display text-lg font-bold text-[#141a29]">
            Sovereign Key & Physical Token
          </div>
          <div className="text-[11px] font-mono text-[#585e70]">
            ZK-SNARK Protocol 802.1 &bull; 24K Titanium Trim
          </div>
        </div>
      </div>

      {/* Verification Checkpoint List */}
      <div className="space-y-2.5 text-xs text-[#585e70] font-mono">
        <div className="flex items-center gap-2">
          <CheckCircle2 className="w-4 h-4 text-[#9a7c38]" />
          <span>Biometric enclave compatibility verified</span>
        </div>
        <div className="flex items-center gap-2">
          <CheckCircle2 className="w-4 h-4 text-[#9a7c38]" />
          <span>Multi-party cryptographic consensus confirmed</span>
        </div>
        <div className="flex items-center gap-2">
          <CheckCircle2 className="w-4 h-4 text-[#9a7c38]" />
          <span>Global Embassy credentials active</span>
        </div>
      </div>

      {/* Agreement checkbox */}
      <label className="flex items-start gap-3 p-3.5 rounded-xl bg-black/[0.03] border border-black/10 cursor-pointer select-none">
        <input
          type="checkbox"
          checked={agreed}
          onChange={(e) => setAgreed(e.target.checked)}
          className="mt-0.5 rounded text-[#9a7c38] focus:ring-[#9a7c38] accent-[#9a7c38]"
        />
        <span className="text-xs text-[#585e70] leading-relaxed">
          I affirm sovereign custody of this cryptographic pass and agree to the Consortium Charter of mutual discretion.
        </span>
      </label>

      {/* Action Button */}
      <button
        type="button"
        disabled={!agreed}
        onClick={handleClaim}
        className={`w-full py-4 rounded-full font-bold text-xs uppercase tracking-widest flex items-center justify-center gap-2 transition-all ${
          agreed
            ? 'bg-gradient-to-r from-[#9a7c38] via-[#b8964d] to-[#856926] text-white shadow-[0_8px_25px_rgba(154,124,56,0.35)] hover:shadow-[0_12px_35px_rgba(154,124,56,0.5)] cursor-pointer'
            : 'bg-black/10 text-[#8990a2] cursor-not-allowed'
        }`}
      >
        <Key className="w-4 h-4" />
        <span>Confirm & Mint Sovereign Key</span>
      </button>
    </div>
  );
};

/* =========================================================================
   5. INITIALIZE APPLICATION CONTENT
   ========================================================================= */
export const InitializeApplicationContent: React.FC<{ onClose: () => void }> = ({ onClose }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [sanctum, setSanctum] = useState('Geneva Private Sanctum');
  const [statement, setStatement] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    soundManager.playChime();
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="text-center py-8 space-y-5">
        <div className="w-16 h-16 rounded-full bg-[#9a7c38]/15 border border-[#9a7c38] flex items-center justify-center text-[#856926] mx-auto animate-bounce">
          <Sparkles className="w-8 h-8" />
        </div>
        <h3 className="font-display text-2xl font-bold text-[#141a29]">
          Cohort Application Received
        </h3>
        <p className="font-mono text-xs uppercase tracking-widest text-[#856926] font-semibold">
          DISPATCH // GENEVA ADMISSIONS COUNCIL
        </p>
        <p className="text-sm text-[#585e70] max-w-sm mx-auto leading-relaxed">
          Thank you, <strong className="text-[#141a29]">{name}</strong>. Your confidential credentials and intent statement have been submitted for bilateral review in {sanctum}. You will be contacted via secure cryptographic dispatch.
        </p>
        <button
          type="button"
          onClick={onClose}
          className="px-8 py-3 rounded-full bg-[#9a7c38] text-white text-xs font-bold uppercase tracking-widest shadow-md hover:bg-[#b8964d] transition-all cursor-pointer"
        >
          Return to Ecosystem
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <p className="text-sm text-[#585e70] leading-relaxed">
        Admissions to the 2026 Sovereign Cohort are vetted by council peers to guarantee aligned values, mutual security, and discretion.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label htmlFor="app-name" className="block text-xs font-mono uppercase tracking-wider text-[#585e70] mb-1.5 font-semibold">
            Full Name or Alias
          </label>
          <input
            id="app-name"
            type="text"
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Aurelius Vance"
            className="w-full px-4 py-2.5 rounded-xl bg-white border border-black/15 text-sm text-[#141a29] focus:outline-none focus:border-[#9a7c38] transition-colors shadow-sm"
          />
        </div>

        <div>
          <label htmlFor="app-email" className="block text-xs font-mono uppercase tracking-wider text-[#585e70] mb-1.5 font-semibold">
            Confidential Email
          </label>
          <input
            id="app-email"
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="member@proton.me"
            className="w-full px-4 py-2.5 rounded-xl bg-white border border-black/15 text-sm text-[#141a29] focus:outline-none focus:border-[#9a7c38] transition-colors shadow-sm"
          />
        </div>
      </div>

      <div>
        <label htmlFor="app-sanctum" className="block text-xs font-mono uppercase tracking-wider text-[#585e70] mb-1.5 font-semibold">
          Primary Enclave Sanctum
        </label>
        <select
          id="app-sanctum"
          value={sanctum}
          onChange={(e) => setSanctum(e.target.value)}
          className="w-full px-4 py-2.5 rounded-xl bg-white border border-black/15 text-sm text-[#141a29] focus:outline-none focus:border-[#9a7c38] transition-colors shadow-sm cursor-pointer"
        >
          <option value="Geneva Private Sanctum">Geneva Private Sanctum (Switzerland)</option>
          <option value="Tokyo Cyber Enclave">Tokyo Cyber Enclave (Japan)</option>
          <option value="London Consortium Atelier">London Consortium Atelier (United Kingdom)</option>
          <option value="Zurich Alpine Vault">Zurich Alpine Vault (Switzerland)</option>
          <option value="New York Embassy">New York Embassy (United States)</option>
        </select>
      </div>

      <div>
        <label htmlFor="app-statement" className="block text-xs font-mono uppercase tracking-wider text-[#585e70] mb-1.5 font-semibold">
          Statement of Sovereign Trajectory
        </label>
        <textarea
          id="app-statement"
          rows={3}
          value={statement}
          onChange={(e) => setStatement(e.target.value)}
          placeholder="Briefly state your intention for seeking self-sovereign identity and consortium access..."
          className="w-full px-4 py-2.5 rounded-xl bg-white border border-black/15 text-sm text-[#141a29] placeholder-[#8990a2] focus:outline-none focus:border-[#9a7c38] transition-colors shadow-sm resize-none"
        />
      </div>

      <div className="flex items-center gap-2 text-[11px] font-mono text-[#585e70]">
        <ShieldAlert className="w-3.5 h-3.5 text-[#9a7c38]" />
        <span>ZERO DISCLOSURE: Application data is processed exclusively on-enclave.</span>
      </div>

      <button
        type="submit"
        className="w-full py-4 rounded-full bg-gradient-to-r from-[#9a7c38] via-[#b8964d] to-[#856926] text-white font-bold text-xs uppercase tracking-widest flex items-center justify-center gap-2 shadow-[0_8px_25px_rgba(154,124,56,0.3)] hover:shadow-[0_12px_35px_rgba(154,124,56,0.5)] transition-all cursor-pointer"
      >
        <Key className="w-3.5 h-3.5" />
        <span>Submit Application for Council Review</span>
      </button>
    </form>
  );
};
