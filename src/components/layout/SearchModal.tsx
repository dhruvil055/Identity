import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { Search, X, BookOpen, Calendar, Compass, Layers, ShieldCheck, ArrowRight } from 'lucide-react';
import { JOURNAL_ARTICLES } from '../../data/journalData';
import { EXPERIENCES_DATA } from '../../data/experiencesData';
import { REINVENTION_STAGES } from '../../data/frameworkData';
import { MEMBERSHIP_TIERS } from '../../data/membershipsData';

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const SearchModal: React.FC<SearchModalProps> = ({ isOpen, onClose }) => {
  const [query, setQuery] = useState('');
  const inputRef = useRef<HTMLInputElement>(null);
  const navigate = useNavigate();

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 50);
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
      setQuery('');
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    if (isOpen) {
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const trimmed = query.trim().toLowerCase();

  // Categorized Search Results
  const matchingArticles = JOURNAL_ARTICLES.filter(
    (a) =>
      a.title.toLowerCase().includes(trimmed) ||
      a.excerpt.toLowerCase().includes(trimmed) ||
      a.category.toLowerCase().includes(trimmed) ||
      a.tags.some((t) => t.toLowerCase().includes(trimmed))
  );

  const matchingExperiences = EXPERIENCES_DATA.filter(
    (e) =>
      e.title.toLowerCase().includes(trimmed) ||
      e.shortDescription.toLowerCase().includes(trimmed) ||
      e.type.toLowerCase().includes(trimmed) ||
      e.host.toLowerCase().includes(trimmed)
  );

  const matchingStages = REINVENTION_STAGES.filter(
    (s) =>
      s.title.toLowerCase().includes(trimmed) ||
      s.shortDescription.toLowerCase().includes(trimmed) ||
      s.meaning.toLowerCase().includes(trimmed)
  );

  const matchingTiers = MEMBERSHIP_TIERS.filter(
    (m) =>
      m.name.toLowerCase().includes(trimmed) ||
      m.tagline.toLowerCase().includes(trimmed) ||
      m.idealFor.toLowerCase().includes(trimmed)
  );

  const totalResults =
    matchingArticles.length +
    matchingExperiences.length +
    matchingStages.length +
    matchingTiers.length;

  const handleSelect = (url: string) => {
    onClose();
    navigate(url);
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Global Search"
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 9999,
        display: 'flex',
        alignItems: 'flex-start',
        justifyContent: 'center',
        paddingTop: 'clamp(3rem, 10vh, 6rem)',
        paddingLeft: '1.25rem',
        paddingRight: '1.25rem',
        backgroundColor: 'rgba(18, 20, 23, 0.75)',
        backdropFilter: 'blur(8px)',
      }}
      onClick={onClose}
    >
      <div
        style={{
          width: '100%',
          maxWidth: '720px',
          backgroundColor: '#ffffff',
          borderRadius: 'var(--radius-md)',
          boxShadow: 'var(--shadow-modal)',
          border: '1px solid var(--color-border)',
          overflow: 'hidden',
          display: 'flex',
          flexDirection: 'column',
          maxHeight: '80vh',
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Search Input Bar */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            padding: '1.2rem 1.5rem',
            borderBottom: '1px solid var(--color-border-light)',
            gap: '0.85rem',
          }}
        >
          <Search size={20} color="var(--color-brand-gold)" />
          <input
            ref={inputRef}
            type="search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search Journal, Experiences, Framework, Memberships..."
            style={{
              flex: 1,
              border: 'none',
              outline: 'none',
              fontSize: '1.1rem',
              fontFamily: 'var(--font-brand)',
              color: 'var(--color-text-main)',
            }}
          />
          {query && (
            <button
              onClick={() => setQuery('')}
              style={{ padding: '0.2rem', color: 'var(--color-text-muted)' }}
            >
              <X size={16} />
            </button>
          )}
          <kbd
            style={{
              fontSize: '0.72rem',
              padding: '0.2rem 0.45rem',
              borderRadius: '3px',
              backgroundColor: 'var(--color-bg-sand)',
              color: 'var(--color-text-muted)',
              border: '1px solid var(--color-border)',
            }}
          >
            ESC
          </kbd>
        </div>

        {/* Results Container */}
        <div
          style={{
            overflowY: 'auto',
            padding: '1.5rem',
            display: 'flex',
            flexDirection: 'column',
            gap: '1.5rem',
          }}
        >
          {trimmed === '' ? (
            <div>
              <p
                style={{
                  fontSize: '0.78rem',
                  textTransform: 'uppercase',
                  letterSpacing: '0.14em',
                  color: 'var(--color-text-muted)',
                  fontWeight: 600,
                  marginBottom: '1rem',
                }}
              >
                Suggested Explorations
              </p>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '0.75rem' }}>
                <button
                  onClick={() => handleSelect('/reinvention')}
                  className="search-preset-btn"
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.75rem',
                    padding: '0.85rem 1rem',
                    borderRadius: 'var(--radius-sm)',
                    border: '1px solid var(--color-border-light)',
                    backgroundColor: 'var(--color-bg-sand-light)',
                    textAlign: 'left',
                  }}
                >
                  <Compass size={17} color="var(--color-brand-gold)" />
                  <div>
                    <div style={{ fontWeight: 500, fontSize: '0.9rem', color: 'var(--color-text-main)' }}>Reinvention Framework</div>
                    <div style={{ fontSize: '0.75rem', color: 'var(--color-text-muted)' }}>4-stage operating system</div>
                  </div>
                </button>

                <button
                  onClick={() => handleSelect('/memberships')}
                  className="search-preset-btn"
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.75rem',
                    padding: '0.85rem 1rem',
                    borderRadius: 'var(--radius-sm)',
                    border: '1px solid var(--color-border-light)',
                    backgroundColor: 'var(--color-bg-sand-light)',
                    textAlign: 'left',
                  }}
                >
                  <ShieldCheck size={17} color="var(--color-brand-gold)" />
                  <div>
                    <div style={{ fontWeight: 500, fontSize: '0.9rem', color: 'var(--color-text-main)' }}>Membership Tiers</div>
                    <div style={{ fontSize: '0.75rem', color: 'var(--color-text-muted)' }}>Compare access levels</div>
                  </div>
                </button>

                <button
                  onClick={() => handleSelect('/experiences')}
                  className="search-preset-btn"
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.75rem',
                    padding: '0.85rem 1rem',
                    borderRadius: 'var(--radius-sm)',
                    border: '1px solid var(--color-border-light)',
                    backgroundColor: 'var(--color-bg-sand-light)',
                    textAlign: 'left',
                  }}
                >
                  <Calendar size={17} color="var(--color-brand-gold)" />
                  <div>
                    <div style={{ fontWeight: 500, fontSize: '0.9rem', color: 'var(--color-text-main)' }}>Monthly Sessions</div>
                    <div style={{ fontSize: '0.75rem', color: 'var(--color-text-muted)' }}>Founder-led workshops</div>
                  </div>
                </button>

                <button
                  onClick={() => handleSelect('/finder')}
                  className="search-preset-btn"
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.75rem',
                    padding: '0.85rem 1rem',
                    borderRadius: 'var(--radius-sm)',
                    border: '1px solid var(--color-brand-gold)',
                    backgroundColor: 'var(--color-brand-gold-light)',
                    textAlign: 'left',
                  }}
                >
                  <Layers size={17} color="var(--color-brand-gold)" />
                  <div>
                    <div style={{ fontWeight: 600, fontSize: '0.9rem', color: 'var(--color-text-main)' }}>Path Finder Wizard</div>
                    <div style={{ fontSize: '0.75rem', color: 'var(--color-brand-gold-dark)' }}>Find starting point</div>
                  </div>
                </button>
              </div>
            </div>
          ) : totalResults === 0 ? (
            <div style={{ padding: '3rem 1rem', textAlign: 'center', color: 'var(--color-text-muted)' }}>
              <p style={{ fontSize: '1.1rem', marginBottom: '0.5rem', color: 'var(--color-text-main)' }}>
                No direct matches found for "{query}"
              </p>
              <p style={{ fontSize: '0.9rem' }}>
                Try searching for <em>Recalibrate, Inner Circle, Wardrobe, Monthly Session,</em> or take our{' '}
                <button
                  onClick={() => handleSelect('/finder')}
                  style={{ color: 'var(--color-brand-gold)', textDecoration: 'underline' }}
                >
                  Path Finder
                </button>
                .
              </p>
            </div>
          ) : (
            <>
              {/* Framework Matches */}
              {matchingStages.length > 0 && (
                <div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.75rem' }}>
                    <Compass size={15} color="var(--color-brand-gold)" />
                    <span style={{ fontSize: '0.76rem', textTransform: 'uppercase', letterSpacing: '0.12em', fontWeight: 600, color: 'var(--color-text-muted)' }}>
                      Framework Stages ({matchingStages.length})
                    </span>
                  </div>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                    {matchingStages.map((s) => (
                      <button
                        key={s.id}
                        onClick={() => handleSelect(`/reinvention#${s.id}`)}
                        style={{
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'space-between',
                          padding: '0.85rem 1rem',
                          borderRadius: 'var(--radius-sm)',
                          backgroundColor: 'var(--color-bg-sand)',
                          textAlign: 'left',
                          transition: 'background 0.2s',
                        }}
                      >
                        <div>
                          <div style={{ fontWeight: 600, color: 'var(--color-text-main)' }}>
                            Stage {s.stepNumber}: {s.title}
                          </div>
                          <div style={{ fontSize: '0.85rem', color: 'var(--color-text-muted)' }}>
                            {s.shortDescription}
                          </div>
                        </div>
                        <ArrowRight size={15} color="var(--color-brand-gold)" />
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Memberships Matches */}
              {matchingTiers.length > 0 && (
                <div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.75rem' }}>
                    <ShieldCheck size={15} color="var(--color-brand-gold)" />
                    <span style={{ fontSize: '0.76rem', textTransform: 'uppercase', letterSpacing: '0.12em', fontWeight: 600, color: 'var(--color-text-muted)' }}>
                      Membership Tiers ({matchingTiers.length})
                    </span>
                  </div>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                    {matchingTiers.map((t) => (
                      <button
                        key={t.id}
                        onClick={() => handleSelect(`/memberships#${t.id}`)}
                        style={{
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'space-between',
                          padding: '0.85rem 1rem',
                          borderRadius: 'var(--radius-sm)',
                          backgroundColor: 'var(--color-bg-sand)',
                          textAlign: 'left',
                        }}
                      >
                        <div>
                          <div style={{ fontWeight: 600, color: 'var(--color-text-main)' }}>
                            {t.name} — ${t.priceAnnualPerMonth}/mo
                          </div>
                          <div style={{ fontSize: '0.85rem', color: 'var(--color-text-muted)' }}>
                            {t.idealFor}
                          </div>
                        </div>
                        <ArrowRight size={15} color="var(--color-brand-gold)" />
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Journal Articles Matches */}
              {matchingArticles.length > 0 && (
                <div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.75rem' }}>
                    <BookOpen size={15} color="var(--color-brand-gold)" />
                    <span style={{ fontSize: '0.76rem', textTransform: 'uppercase', letterSpacing: '0.12em', fontWeight: 600, color: 'var(--color-text-muted)' }}>
                      Journal Insights ({matchingArticles.length})
                    </span>
                  </div>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                    {matchingArticles.map((a) => (
                      <button
                        key={a.slug}
                        onClick={() => handleSelect(`/journal/${a.slug}`)}
                        style={{
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'space-between',
                          padding: '0.85rem 1rem',
                          borderRadius: 'var(--radius-sm)',
                          backgroundColor: 'var(--color-bg-sand)',
                          textAlign: 'left',
                        }}
                      >
                        <div>
                          <div style={{ fontWeight: 600, color: 'var(--color-text-main)' }}>
                            {a.title}
                          </div>
                          <div style={{ fontSize: '0.85rem', color: 'var(--color-text-muted)' }}>
                            {a.category} • {a.readTime}
                          </div>
                        </div>
                        <ArrowRight size={15} color="var(--color-brand-gold)" />
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Experiences Matches */}
              {matchingExperiences.length > 0 && (
                <div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.75rem' }}>
                    <Calendar size={15} color="var(--color-brand-gold)" />
                    <span style={{ fontSize: '0.76rem', textTransform: 'uppercase', letterSpacing: '0.12em', fontWeight: 600, color: 'var(--color-text-muted)' }}>
                      Experiences &amp; Sessions ({matchingExperiences.length})
                    </span>
                  </div>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                    {matchingExperiences.map((e) => (
                      <button
                        key={e.id}
                        onClick={() => handleSelect(`/experiences#${e.id}`)}
                        style={{
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'space-between',
                          padding: '0.85rem 1rem',
                          borderRadius: 'var(--radius-sm)',
                          backgroundColor: 'var(--color-bg-sand)',
                          textAlign: 'left',
                        }}
                      >
                        <div>
                          <div style={{ fontWeight: 600, color: 'var(--color-text-main)' }}>
                            {e.title}
                          </div>
                          <div style={{ fontSize: '0.85rem', color: 'var(--color-text-muted)' }}>
                            {e.format} • {e.dateFormatted}
                          </div>
                        </div>
                        <ArrowRight size={15} color="var(--color-brand-gold)" />
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </>
          )}
        </div>
      </div>
    </div>
  );
};
