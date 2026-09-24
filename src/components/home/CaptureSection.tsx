import React, { useState, useEffect, useRef } from 'react';
import { Button } from '../common/Button';

interface CaptureSectionProps {
  isReducedMotion: boolean;
}

export const CaptureSection: React.FC<CaptureSectionProps> = ({ isReducedMotion }) => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState<{ type: 'error' | 'success'; text: string } | null>(null);
  const captureRef = useRef<HTMLDivElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);

  // Scroll animation
  useEffect(() => {
    if (isReducedMotion || !captureRef.current) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            (entry.target as HTMLElement).style.opacity = '1';
            (entry.target as HTMLElement).style.transform = 'translateY(0)';
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    const children = captureRef.current.querySelectorAll(':scope > div');
    children.forEach((el, i) => {
      (el as HTMLElement).style.opacity = '0';
      (el as HTMLElement).style.transform = 'translateY(30px)';
      (el as HTMLElement).style.transition = `opacity 0.9s cubic-bezier(0.2,0.8,0.2,1) ${i * 0.15}s, transform 0.9s cubic-bezier(0.2,0.8,0.2,1) ${i * 0.15}s`;
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, [isReducedMotion]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email)) {
      setMessage({ type: 'error', text: 'Enter a valid email address, like name@example.com.' });
      emailRef.current?.focus();
      return;
    }
    setMessage({ type: 'success', text: `Done. The primer is on its way to ${email}.` });
    setEmail('');
  };

  return (
    <div className="capture" id="capture" ref={captureRef} style={{
      marginTop: '104px',
      background: 'var(--ink)',
      color: '#f5f1e4',
      padding: '76px 0',
    }}>
      <div className="wrap" style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 24px', display: 'grid', gridTemplateColumns: '1.1fr 1fr', gap: '40px', alignItems: 'center' }}>
        <div>
          <h2 style={{
            fontSize: 'clamp(38px, 4.8vw, 62px)',
            fontFamily: 'var(--font-serif)',
            fontWeight: 500,
            lineHeight: 1.02,
            margin: 0,
            letterSpacing: '-0.015em',
            color: '#f5f1e4',
          }}>
            Not sure yet? Start with the free primer.
          </h2>
          <p style={{
            opacity: 0.8,
            marginTop: '12px',
            maxWidth: '44ch',
            fontWeight: 300,
            fontSize: '17px',
            fontFamily: 'var(--font-serif)',
            lineHeight: 1.35,
          }}>
            Get an introduction to the Reinvention Framework and a note on which level suits you. No membership needed.
          </p>
        </div>

        <div>
          <form onSubmit={handleSubmit} className="cap-form" style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
            <input
              ref={emailRef}
              id="email"
              type="email"
              placeholder="Your email address"
              aria-label="Email address"
              autoComplete="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              style={{
                flex: 1,
                minWidth: '210px',
                border: '1px solid rgba(255,255,255,.3)',
                background: 'rgba(255,255,255,.08)',
                color: '#fff',
                borderRadius: '999px',
                padding: '16px 22px',
                font: 'inherit',
                fontSize: '15px',
                fontFamily: 'var(--font-sans)',
                outline: 'none',
              }}
            />
            <Button
              type="submit"
              variant="primary"
              className="mag"
              style={{
                background: '#f5f1e4',
                color: 'var(--ink)',
                borderRadius: '999px',
                padding: '16px 30px',
                fontWeight: 500,
                fontSize: '15px',
                letterSpacing: '0.04em',
                textDecoration: 'none',
                border: 'none',
                transition: 'filter 0.2s, background 0.4s',
                willChange: 'transform',
                whiteSpace: 'nowrap',
              }}
            >
              Send me the primer
            </Button>
          </form>
          <div
            className="cap-msg"
            id="capMsg"
            role="status"
            style={{
              marginTop: '12px',
              fontSize: '14px',
              minHeight: '22px',
              color: message?.type === 'error' ? '#ffb4a8' : message?.type === 'success' ? '#bfe3c9' : 'transparent',
              fontFamily: 'var(--font-sans)',
            }}
          >
            {message?.text}
          </div>
        </div>
      </div>
    </div>
  );
};