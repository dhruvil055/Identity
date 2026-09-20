import React, { useState, useMemo } from 'react';
import { Breadcrumb } from '../components/common/Breadcrumb';
import { Button } from '../components/common/Button';
import { RelatedBridge } from '../components/common/RelatedBridge';
import { JOURNAL_ARTICLES } from '../data/journalData';
import { Search, Clock, ArrowRight, BookOpen } from 'lucide-react';

export const JournalPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [visibleCount, setVisibleCount] = useState<number>(6);

  const categories = ['All', 'Identity', 'Structure', 'Style', 'Expansion', 'Lifestyle'];

  const filteredArticles = useMemo(() => {
    return JOURNAL_ARTICLES.filter((article) => {
      const matchesCategory =
        selectedCategory === 'All' || article.category.toLowerCase() === selectedCategory.toLowerCase();
      const matchesSearch =
        article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        article.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
        article.tags.some((t) => t.toLowerCase().includes(searchQuery.toLowerCase()));
      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  const featuredArticle = JOURNAL_ARTICLES[0];
  const displayedArticles = filteredArticles.slice(0, visibleCount);

  return (
    <main className="site-main page-journal">
      {/* 1. Header & Lead Story */}
      <section
        style={{
          paddingTop: 'clamp(5rem, 8vw, 7rem)',
          paddingBottom: 'clamp(3rem, 5vw, 4.5rem)',
          backgroundColor: '#16191e',
          color: '#ffffff',
          position: 'relative',
        }}
      >
        <div className="identy-container">
          <Breadcrumb items={[{ label: 'The Journal' }]} />

          <div style={{ maxWidth: '780px', marginBottom: '3.5rem' }}>
            <span
              style={{
                display: 'inline-block',
                fontSize: '0.78rem',
                textTransform: 'uppercase',
                letterSpacing: '0.18em',
                fontWeight: 600,
                color: 'var(--color-brand-gold)',
                marginBottom: '1rem',
              }}
            >
              The Editorial Archive
            </span>

            <h1
              style={{
                color: '#ffffff',
                fontSize: 'clamp(2.4rem, 4.5vw, 3.8rem)',
                fontFamily: 'var(--font-heading)',
                lineHeight: 1.15,
                fontWeight: 400,
                marginBottom: '1.25rem',
              }}
            >
              Thoughts on Identity, Structure & Quiet Power
            </h1>

            <p
              style={{
                fontSize: 'clamp(1.05rem, 1.8vw, 1.25rem)',
                lineHeight: 1.65,
                color: 'rgba(255, 255, 255, 0.8)',
                fontWeight: 300,
                margin: 0,
              }}
            >
              Curated essays, strategic operating principles, and philosophical reflections for women authoring their next chapter.
            </p>
          </div>

          {/* Featured Cover Story */}
          {featuredArticle && (
            <div
              style={{
                backgroundColor: 'rgba(255, 255, 255, 0.03)',
                border: '1px solid rgba(255, 255, 255, 0.1)',
                borderRadius: '2px',
                overflow: 'hidden',
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
                alignItems: 'stretch',
              }}
            >
              <div
                style={{
                  position: 'relative',
                  minHeight: '380px',
                }}
              >
                <img
                  src={featuredArticle.heroImage}
                  alt={featuredArticle.title}
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                  onError={(e) => {
                    (e.currentTarget as HTMLImageElement).src =
                      'https://images.unsplash.com/photo-1507679799987-c73779587ccf?q=80&w=1200&auto=format&fit=crop';
                  }}
                />
                <div
                  style={{
                    position: 'absolute',
                    top: '1.5rem',
                    left: '1.5rem',
                    backgroundColor: 'var(--color-brand-gold)',
                    color: '#16191e',
                    fontSize: '0.74rem',
                    fontWeight: 700,
                    textTransform: 'uppercase',
                    letterSpacing: '0.12em',
                    padding: '0.3rem 0.85rem',
                    borderRadius: '2px',
                  }}
                >
                  Featured Story
                </div>
              </div>

              <div
                style={{
                  padding: 'clamp(2rem, 4vw, 3.5rem)',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'center',
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1rem' }}>
                  <span
                    style={{
                      fontSize: '0.76rem',
                      textTransform: 'uppercase',
                      letterSpacing: '0.14em',
                      color: 'var(--color-brand-gold)',
                      fontWeight: 600,
                    }}
                  >
                    {featuredArticle.category}
                  </span>
                  <span style={{ color: 'rgba(255,255,255,0.3)' }}>•</span>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.35rem', color: 'rgba(255,255,255,0.6)', fontSize: '0.82rem' }}>
                    <Clock size={14} />
                    <span>{featuredArticle.readTime}</span>
                  </div>
                </div>

                <h2
                  style={{
                    fontFamily: 'var(--font-heading)',
                    fontSize: 'clamp(1.8rem, 2.6vw, 2.4rem)',
                    fontWeight: 400,
                    color: '#ffffff',
                    lineHeight: 1.25,
                    marginBottom: '1.25rem',
                  }}
                >
                  {featuredArticle.title}
                </h2>

                <p
                  style={{
                    fontSize: '1rem',
                    lineHeight: 1.65,
                    color: 'rgba(255, 255, 255, 0.82)',
                    marginBottom: '2rem',
                  }}
                >
                  {featuredArticle.excerpt}
                </p>

                <div>
                  <Button href={`/journal/${featuredArticle.slug}`} variant="gold">
                    Read Essay &rarr;
                  </Button>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* 2. Filter & Search Controls */}
      <section
        style={{
          paddingTop: '2.5rem',
          paddingBottom: '2.5rem',
          backgroundColor: '#faf8f5',
          borderBottom: '1px solid rgba(0,0,0,0.06)',
        }}
      >
        <div className="identy-container">
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              gap: '1.5rem',
              flexWrap: 'wrap',
            }}
          >
            {/* Category Pills */}
            <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
              {categories.map((cat) => {
                const isSelected = selectedCategory === cat;
                return (
                  <button
                    key={cat}
                    onClick={() => setSelectedCategory(cat)}
                    style={{
                      padding: '0.5rem 1.2rem',
                      fontSize: '0.84rem',
                      fontWeight: 600,
                      letterSpacing: '0.04em',
                      border: isSelected ? '1px solid #16191e' : '1px solid rgba(0,0,0,0.1)',
                      backgroundColor: isSelected ? '#16191e' : '#ffffff',
                      color: isSelected ? '#ffffff' : '#40454d',
                      borderRadius: '20px',
                      cursor: 'pointer',
                      transition: 'all 0.2s ease',
                    }}
                  >
                    {cat}
                  </button>
                );
              })}
            </div>

            {/* In-page live search */}
            <div
              style={{
                position: 'relative',
                minWidth: '260px',
              }}
            >
              <Search
                size={16}
                color="#767d86"
                style={{ position: 'absolute', left: '1rem', top: '50%', transform: 'translateY(-50%)' }}
              />
              <input
                type="text"
                placeholder="Search essays, tags..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                style={{
                  width: '100%',
                  padding: '0.55rem 1rem 0.55rem 2.5rem',
                  fontSize: '0.88rem',
                  border: '1px solid rgba(0,0,0,0.12)',
                  borderRadius: '20px',
                  backgroundColor: '#ffffff',
                  outline: 'none',
                }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* 3. Article Grid */}
      <section
        style={{
          paddingTop: 'clamp(4rem, 6vw, 5.5rem)',
          paddingBottom: 'clamp(4.5rem, 7vw, 6rem)',
          backgroundColor: '#ffffff',
        }}
      >
        <div className="identy-container">
          {displayedArticles.length === 0 ? (
            <div style={{ textAlign: 'center', padding: '5rem 1rem' }}>
              <BookOpen size={36} color="var(--color-brand-gold)" style={{ margin: '0 auto 1rem auto' }} />
              <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.6rem', color: '#16191e' }}>
                No essays found matching your criteria
              </h3>
              <p style={{ color: '#767d86', marginBottom: '1.5rem' }}>
                Try clearing your search query or choosing another category filter.
              </p>
              <button
                type="button"
                onClick={() => {
                  setSelectedCategory('All');
                  setSearchQuery('');
                }}
                className="btn btn-secondary"
              >
                Reset Filters
              </button>
            </div>
          ) : (
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fill, minmax(340px, 1fr))',
                gap: '2.5rem',
              }}
            >
              {displayedArticles.map((article) => (
                <article
                  key={article.slug}
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    backgroundColor: '#ffffff',
                    border: '1px solid rgba(0,0,0,0.06)',
                    borderRadius: '2px',
                    overflow: 'hidden',
                    transition: 'transform 0.25s ease, box-shadow 0.25s ease',
                  }}
                >
                  <a
                    href={`/journal/${article.slug}`}
                    style={{
                      display: 'block',
                      aspectRatio: '16/10',
                      overflow: 'hidden',
                      position: 'relative',
                    }}
                  >
                    <img
                      src={article.heroImage}
                      alt={article.title}
                      style={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover',
                        transition: 'transform 0.5s ease',
                      }}
                      onError={(e) => {
                        (e.currentTarget as HTMLImageElement).src =
                          'https://images.unsplash.com/photo-1507679799987-c73779587ccf?q=80&w=800&auto=format&fit=crop';
                      }}
                    />
                  </a>

                  <div style={{ padding: '1.8rem 1.8rem 1.5rem 1.8rem', display: 'flex', flexDirection: 'column', flex: 1 }}>
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '0.75rem' }}>
                      <span
                        style={{
                          fontSize: '0.72rem',
                          textTransform: 'uppercase',
                          letterSpacing: '0.14em',
                          fontWeight: 600,
                          color: 'var(--color-brand-gold)',
                        }}
                      >
                        {article.category}
                      </span>
                      <span style={{ fontSize: '0.8rem', color: '#888f98' }}>{article.readTime}</span>
                    </div>

                    <h3
                      style={{
                        fontFamily: 'var(--font-heading)',
                        fontSize: '1.35rem',
                        fontWeight: 400,
                        color: '#16191e',
                        lineHeight: 1.3,
                        marginBottom: '0.85rem',
                      }}
                    >
                      <a
                        href={`/journal/${article.slug}`}
                        style={{ color: '#16191e', textDecoration: 'none' }}
                      >
                        {article.title}
                      </a>
                    </h3>

                    <p
                      style={{
                        fontSize: '0.92rem',
                        lineHeight: 1.6,
                        color: '#555b64',
                        marginBottom: '1.5rem',
                        flex: 1,
                      }}
                    >
                      {article.excerpt}
                    </p>

                    <div
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        paddingTop: '1rem',
                        borderTop: '1px solid rgba(0,0,0,0.06)',
                      }}
                    >
                      <span style={{ fontSize: '0.78rem', color: '#888f98' }}>{article.publishDate}</span>
                      <a
                        href={`/journal/${article.slug}`}
                        style={{
                          fontSize: '0.84rem',
                          fontWeight: 600,
                          color: '#16191e',
                          textDecoration: 'none',
                          display: 'inline-flex',
                          alignItems: 'center',
                          gap: '0.35rem',
                        }}
                      >
                        Read Essay <ArrowRight size={14} color="var(--color-brand-gold)" />
                      </a>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          )}

          {/* Load More / End of Archive */}
          {displayedArticles.length < filteredArticles.length && (
            <div style={{ textAlign: 'center', marginTop: '3.5rem' }}>
              <button
                type="button"
                onClick={() => setVisibleCount((prev) => prev + 4)}
                className="btn btn-secondary"
              >
                Load More Essays
              </button>
            </div>
          )}
        </div>
      </section>

      {/* 4. No Dead Ends Bridge */}
      <RelatedBridge
        currentContext="The Journal"
        eyebrow="From Insight To Action"
        title="Transform These Concepts Into Structured Reality"
        description="Reading provides clarity; our Reinvention Framework provides the step-by-step operating architecture to apply these standards to your life."
        primaryAction={{
          label: 'Explore Reinvention Framework',
          href: '/framework',
        }}
        secondaryAction={{
          label: 'Take Path Finder Diagnostic',
          href: '/finder',
        }}
      />
    </main>
  );
};
