import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Breadcrumb } from '../components/common/Breadcrumb';
import { Button } from '../components/common/Button';
import { RelatedBridge } from '../components/common/RelatedBridge';
import { JOURNAL_ARTICLES } from '../data/journalData';
import { REINVENTION_STAGES } from '../data/frameworkData';
import { Clock, Calendar, Share2, ArrowRight, ArrowLeft, Check } from 'lucide-react';

export const JournalDetailPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const [copied, setCopied] = useState<boolean>(false);
  const [scrollProgress, setScrollProgress] = useState<number>(0);

  const article = JOURNAL_ARTICLES.find((a) => a.slug === slug) || JOURNAL_ARTICLES[0];

  // Reading progress tracker
  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (totalHeight > 0) {
        const currentProgress = (window.scrollY / totalHeight) * 100;
        setScrollProgress(Math.min(100, Math.max(0, currentProgress)));
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleCopyLink = () => {
    navigator.clipboard.writeText(window.location.href);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  // Find related Framework Stage
  const relatedStage = REINVENTION_STAGES.find((s) => s.id === article.relatedFrameworkStage);

  // Next article in the collection
  const currentIndex = JOURNAL_ARTICLES.findIndex((a) => a.slug === article.slug);
  const nextArticle = JOURNAL_ARTICLES[(currentIndex + 1) % JOURNAL_ARTICLES.length];

  return (
    <main className="site-main page-journal-detail">
      {/* Reading Progress Indicator */}
      <div
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: `${scrollProgress}%`,
          height: '3px',
          backgroundColor: 'var(--color-brand-gold)',
          zIndex: 9999,
          transition: 'width 0.1s ease-out',
        }}
      />

      {/* Article Header Header */}
      <section
        style={{
          paddingTop: 'clamp(5rem, 8vw, 7.5rem)',
          paddingBottom: 'clamp(3rem, 5vw, 4rem)',
          backgroundColor: '#faf8f5',
          borderBottom: '1px solid rgba(0,0,0,0.06)',
        }}
      >
        <div className="identy-container" style={{ maxWidth: '860px' }}>
          <Breadcrumb
            items={[
              { label: 'Journal', href: '/journal' },
              { label: article.category, href: '/journal' },
              { label: article.title },
            ]}
          />

          <div style={{ marginBottom: '1.5rem' }}>
            <span
              style={{
                display: 'inline-block',
                fontSize: '0.76rem',
                textTransform: 'uppercase',
                letterSpacing: '0.16em',
                fontWeight: 600,
                color: 'var(--color-brand-gold)',
                marginBottom: '0.85rem',
              }}
            >
              {article.category} • Editorial Essay
            </span>

            <h1
              style={{
                fontFamily: 'var(--font-heading)',
                fontSize: 'clamp(2.2rem, 3.8vw, 3.2rem)',
                fontWeight: 400,
                color: '#16191e',
                lineHeight: 1.2,
                marginBottom: '1.5rem',
              }}
            >
              {article.title}
            </h1>

            <p
              style={{
                fontSize: 'clamp(1.1rem, 1.8vw, 1.3rem)',
                lineHeight: 1.6,
                color: '#555b64',
                fontStyle: 'italic',
                fontWeight: 300,
                marginBottom: '2rem',
              }}
            >
              {article.excerpt}
            </p>

            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                flexWrap: 'wrap',
                gap: '1rem',
                paddingTop: '1.5rem',
                borderTop: '1px solid rgba(0,0,0,0.08)',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem' }}>
                <span style={{ fontSize: '0.88rem', fontWeight: 600, color: '#16191e' }}>
                  By {article.author}
                </span>
                <span style={{ color: '#c0c5cc' }}>•</span>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', color: '#767d86', fontSize: '0.84rem' }}>
                  <Calendar size={14} />
                  <span>{article.publishDate}</span>
                </div>
                <span style={{ color: '#c0c5cc' }}>•</span>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', color: '#767d86', fontSize: '0.84rem' }}>
                  <Clock size={14} />
                  <span>{article.readTime}</span>
                </div>
              </div>

              <button
                type="button"
                onClick={handleCopyLink}
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.45rem',
                  fontSize: '0.82rem',
                  fontWeight: 600,
                  backgroundColor: '#ffffff',
                  border: '1px solid rgba(0,0,0,0.12)',
                  borderRadius: '20px',
                  padding: '0.4rem 0.9rem',
                  cursor: 'pointer',
                  color: '#16191e',
                  transition: 'all 0.2s ease',
                }}
              >
                {copied ? (
                  <>
                    <Check size={14} color="var(--color-brand-gold)" />
                    <span>Link Copied</span>
                  </>
                ) : (
                  <>
                    <Share2 size={14} />
                    <span>Share Essay</span>
                  </>
                )}
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Hero Image */}
      <div className="identy-container" style={{ maxWidth: '980px', marginTop: '3rem', marginBottom: '3.5rem' }}>
        <div
          style={{
            aspectRatio: '16/9',
            borderRadius: '2px',
            overflow: 'hidden',
            boxShadow: '0 16px 40px rgba(0,0,0,0.06)',
          }}
        >
          <img
            src={article.heroImage}
            alt={article.title}
            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
          />
        </div>
      </div>

      {/* Article Content Body */}
      <section style={{ paddingBottom: 'clamp(4rem, 6vw, 6rem)', backgroundColor: '#ffffff' }}>
        <div className="identy-container" style={{ maxWidth: '780px' }}>
          <div
            className="article-body"
            style={{
              fontSize: '1.12rem',
              lineHeight: 1.8,
              color: '#2b3038',
              fontWeight: 400,
            }}
          >
            {article.content.map((para, idx) => (
              <React.Fragment key={idx}>
                <p style={{ marginBottom: '1.85rem' }}>{para}</p>

                {/* Pull Quote placement after paragraph 2 */}
                {idx === 1 && article.keyQuote && (
                  <blockquote
                    style={{
                      margin: '3rem 0',
                      padding: '2rem 2.5rem',
                      backgroundColor: '#faf8f5',
                      borderLeft: '3px solid var(--color-brand-gold)',
                      fontFamily: 'var(--font-heading)',
                      fontSize: '1.45rem',
                      fontStyle: 'italic',
                      color: '#16191e',
                      lineHeight: 1.45,
                    }}
                  >
                    {article.keyQuote}
                  </blockquote>
                )}
              </React.Fragment>
            ))}
          </div>

          {/* Tags */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.65rem',
              flexWrap: 'wrap',
              marginTop: '3.5rem',
              paddingTop: '2rem',
              borderTop: '1px solid rgba(0,0,0,0.08)',
            }}
          >
            <span style={{ fontSize: '0.8rem', color: '#767d86', textTransform: 'uppercase', letterSpacing: '0.1em', fontWeight: 600 }}>
              Topics:
            </span>
            {article.tags.map((tag, idx) => (
              <span
                key={idx}
                style={{
                  fontSize: '0.82rem',
                  backgroundColor: '#f5f3ee',
                  padding: '0.3rem 0.8rem',
                  borderRadius: '16px',
                  color: '#40454d',
                }}
              >
                #{tag}
              </span>
            ))}
          </div>

          {/* CRITICAL CONVERSION BRIDGE: "Want to explore this further?" */}
          <div
            style={{
              marginTop: '4.5rem',
              backgroundColor: '#16191e',
              color: '#ffffff',
              padding: 'clamp(2.5rem, 5vw, 3.5rem)',
              borderRadius: '2px',
              border: '1px solid var(--color-brand-gold)',
            }}
          >
            <span
              style={{
                display: 'inline-block',
                fontSize: '0.76rem',
                textTransform: 'uppercase',
                letterSpacing: '0.16em',
                fontWeight: 600,
                color: 'var(--color-brand-gold)',
                marginBottom: '0.75rem',
              }}
            >
              Content &rarr; Experience Conversion Path
            </span>

            <h3
              style={{
                fontFamily: 'var(--font-heading)',
                fontSize: 'clamp(1.6rem, 2.5vw, 2.1rem)',
                fontWeight: 400,
                color: '#ffffff',
                marginBottom: '1rem',
                lineHeight: 1.25,
              }}
            >
              Want to explore this concept in your own life?
            </h3>

            <p style={{ fontSize: '0.98rem', lineHeight: 1.65, color: 'rgba(255,255,255,0.8)', marginBottom: '2rem' }}>
              This essay represents the philosophical foundation of <strong>Stage 0{relatedStage ? relatedStage.stepNumber : '1'}: {relatedStage?.title}</strong> inside the I-denty Reinvention Framework™. Move from passive reading to active life architecture.
            </p>

            <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
              <Button href="/framework" variant="gold">
                Explore The Reinvention Framework &rarr;
              </Button>
              <Button href="/finder" variant="ghost-light">
                Find Your Starting Point
              </Button>
            </div>
          </div>

          {/* Next Article Navigation */}
          {nextArticle && (
            <div
              style={{
                marginTop: '4rem',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                paddingTop: '2rem',
                borderTop: '1px solid rgba(0,0,0,0.08)',
              }}
            >
              <Link
                to="/journal"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.4rem',
                  fontSize: '0.86rem',
                  fontWeight: 600,
                  color: '#767d86',
                  textDecoration: 'none',
                }}
              >
                <ArrowLeft size={16} />
                <span>All Journal Essays</span>
              </Link>

              <Link
                to={`/journal/${nextArticle.slug}`}
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  fontSize: '0.86rem',
                  fontWeight: 600,
                  color: '#16191e',
                  textDecoration: 'none',
                }}
              >
                <span>Next: {nextArticle.title.slice(0, 35)}...</span>
                <ArrowRight size={16} color="var(--color-brand-gold)" />
              </Link>
            </div>
          )}
        </div>
      </section>

      {/* No Dead Ends Bridge */}
      <RelatedBridge
        currentContext="Journal Essay"
        eyebrow="Deepen The Journey"
        title="Ready To Take The First Structured Step?"
        description="Whether through the standalone framework or our monthly live founder sessions, choose the level of involvement that supports your evolution."
        primaryAction={{
          label: 'Explore Membership Options',
          href: '/memberships',
        }}
        secondaryAction={{
          label: 'View Upcoming Live Sessions',
          href: '/experiences',
        }}
      />
    </main>
  );
};
