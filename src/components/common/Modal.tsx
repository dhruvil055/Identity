import React, { useEffect, useRef, useState, useCallback } from 'react';
import { createPortal } from 'react-dom';
import gsap from 'gsap';
import { X } from 'lucide-react';
import { soundManager } from '../../utils/sound';

export interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  subtitle?: string;
  children: React.ReactNode;
  footer?: React.ReactNode;
  maxWidth?: 'sm' | 'md' | 'lg' | 'xl';
  triggerElement?: HTMLElement | null;
  lenis?: { stop?: () => void; start?: () => void } | null;
}

export const Modal: React.FC<ModalProps> = ({
  isOpen,
  onClose,
  title,
  subtitle,
  children,
  footer,
  maxWidth = 'md',
  triggerElement,
  lenis,
}) => {
  const [isClosing, setIsClosing] = useState(false);
  const backdropRef = useRef<HTMLDivElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);
  const closeBtnRef = useRef<HTMLButtonElement>(null);
  const previouslyFocusedElement = useRef<HTMLElement | null>(null);

  // Maximum width styling classes
  const widthClasses = {
    sm: 'max-w-md',
    md: 'max-w-xl',
    lg: 'max-w-2xl',
    xl: 'max-w-4xl',
  }[maxWidth];

  const handleClose = useCallback(() => {
    soundManager.playClick();

    const isReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const isMobile = window.innerWidth < 640;

    if (isReduced) {
      setIsClosing(false);
      onClose();
      return;
    }

    setIsClosing(true);

    // Play snappy exit animation (< 200ms)
    const tl = gsap.timeline({
      onComplete: () => {
        setIsClosing(false);
        onClose();
      },
    });

    if (backdropRef.current) {
      tl.to(backdropRef.current, { opacity: 0, duration: 0.18, ease: 'power2.in' }, 0);
    }
    if (panelRef.current) {
      tl.to(
        panelRef.current,
        {
          opacity: 0,
          scale: isMobile ? 1 : 0.96,
          y: isMobile ? 40 : 12,
          duration: 0.18,
          ease: 'power2.in',
        },
        0
      );
    }
  }, [onClose]);

  // Handle scroll lock and Lenis stop/start
  useEffect(() => {
    if (isOpen) {
      previouslyFocusedElement.current = triggerElement || (document.activeElement as HTMLElement) || null;
      document.body.style.overflow = 'hidden';

      if (lenis && typeof lenis.stop === 'function') {
        lenis.stop();
      }
    } else if (!isClosing) {
      document.body.style.overflow = '';

      if (lenis && typeof lenis.start === 'function') {
        lenis.start();
      }

      if (previouslyFocusedElement.current && typeof previouslyFocusedElement.current.focus === 'function') {
        previouslyFocusedElement.current.focus();
      }
    }

    return () => {
      document.body.style.overflow = '';
      if (lenis && typeof lenis.start === 'function') {
        lenis.start();
      }
    };
  }, [isOpen, isClosing, lenis, triggerElement]);

  // Entrance animation & focus management
  useEffect(() => {
    if (!isOpen || isClosing) return;

    const isReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const isMobile = window.innerWidth < 640;

    if (!isReduced) {
      if (backdropRef.current) {
        gsap.fromTo(
          backdropRef.current,
          { opacity: 0 },
          { opacity: 1, duration: 0.22, ease: 'power2.out' }
        );
      }
      if (panelRef.current) {
        gsap.fromTo(
          panelRef.current,
          {
            opacity: 0,
            scale: isMobile ? 1 : 0.95,
            y: isMobile ? 40 : 16,
          },
          {
            opacity: 1,
            scale: 1,
            y: 0,
            duration: 0.28,
            ease: 'power3.out',
          }
        );
      }
    }

    const focusTimer = setTimeout(() => {
      if (!panelRef.current) return;
      const focusable = panelRef.current.querySelectorAll<HTMLElement>(
        'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
      );
      if (focusable.length > 0) {
        focusable[0].focus();
      } else {
        panelRef.current.focus();
      }
    }, 50);

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        e.preventDefault();
        handleClose();
        return;
      }

      if (e.key === 'Tab' && panelRef.current) {
        const focusableElements = panelRef.current.querySelectorAll<HTMLElement>(
          'button:not([disabled]), [href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"])'
        );
        if (focusableElements.length === 0) {
          e.preventDefault();
          return;
        }

        const firstElement = focusableElements[0];
        const lastElement = focusableElements[focusableElements.length - 1];

        if (e.shiftKey) {
          if (document.activeElement === firstElement) {
            e.preventDefault();
            lastElement.focus();
          }
        } else {
          if (document.activeElement === lastElement) {
            e.preventDefault();
            firstElement.focus();
          }
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      clearTimeout(focusTimer);
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, isClosing, handleClose]);

  if (!isOpen && !isClosing) return null;

  const modalContent = (
    <div
      ref={backdropRef}
      className="fixed inset-0 z-[9999] flex items-end sm:items-center justify-center p-0 sm:p-6 bg-[#141a29]/45 backdrop-blur-md overflow-hidden"
      onClick={(e) => {
        if (e.target === backdropRef.current) {
          handleClose();
        }
      }}
      role="presentation"
    >
      {/* Dialog Panel - Mobile Bottom Sheet on < sm, Centered card on sm+ */}
      <div
        ref={panelRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby="modal-dialog-title"
        aria-describedby={subtitle ? 'modal-dialog-subtitle' : undefined}
        tabIndex={-1}
        className={`relative w-full ${widthClasses} bg-[#fbf9f5] border border-[#9a7c38]/30 shadow-[0_25px_70px_rgba(20,26,41,0.22)] rounded-t-[28px] sm:rounded-3xl max-h-[92vh] sm:max-h-[88vh] flex flex-col overflow-hidden outline-none will-change-transform`}
      >
        {/* Mobile Drag Indicator */}
        <div className="sm:hidden w-full flex justify-center pt-3 pb-1" aria-hidden="true">
          <div className="w-10 h-1.2 rounded-full bg-black/15" />
        </div>

        {/* Modal Header */}
        <div className="relative px-6 sm:px-8 pt-5 sm:pt-7 pb-4 border-b border-black/[0.06] flex items-start justify-between gap-4 bg-[#fbf9f5]">
          <div className="pr-8">
            {subtitle && (
              <span
                id="modal-dialog-subtitle"
                className="block font-mono text-[11px] font-bold tracking-[0.2em] uppercase text-[#856926] mb-1.5"
              >
                {subtitle}
              </span>
            )}
            <h2
              id="modal-dialog-title"
              className="font-display text-2xl sm:text-3xl font-bold tracking-tight text-[#141a29]"
            >
              {title}
            </h2>
          </div>

          {/* Accessible Close Button (×) */}
          <button
            ref={closeBtnRef}
            onClick={handleClose}
            type="button"
            aria-label="Close dialog"
            className="p-2 sm:p-2.5 rounded-full border border-black/10 bg-white/70 text-[#585e70] hover:text-[#141a29] hover:border-[#9a7c38] hover:bg-[#9a7c38]/10 transition-all cursor-pointer shadow-sm focus:outline-none focus:ring-2 focus:ring-[#9a7c38]"
          >
            <X className="w-4 h-4 sm:w-5 sm:h-5" />
          </button>
        </div>

        {/* Modal Scrollable Body */}
        <div className="px-6 sm:px-8 py-6 overflow-y-auto overscroll-contain flex-1">
          {children}
        </div>

        {/* Optional Modal Footer Actions */}
        {footer && (
          <div className="px-6 sm:px-8 py-4 sm:py-5 border-t border-black/[0.06] bg-[#f7f2e8]/80 flex flex-wrap items-center justify-end gap-3">
            {footer}
          </div>
        )}
      </div>
    </div>
  );

  return createPortal(modalContent, document.body);
};
