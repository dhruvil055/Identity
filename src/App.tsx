import React, { Suspense, useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { Header } from './components/layout/Header';
import { Footer } from './components/layout/Footer';
import { HomePage } from './pages/HomePage';
import { ScrollProgressBar, BackToTopButton } from './components/common/ScrollUtils';

// Lazy-load non-homepage routes for performance (code splitting)
const ReinventionPage = React.lazy(() =>
  import('./pages/ReinventionPage').then(m => ({ default: m.ReinventionPage }))
);
const FrameworkPage = React.lazy(() =>
  import('./pages/FrameworkPage').then(m => ({ default: m.FrameworkPage }))
);
const MembershipPage = React.lazy(() =>
  import('./pages/MembershipPage').then(m => ({ default: m.MembershipPage }))
);
const JournalPage = React.lazy(() =>
  import('./pages/JournalPage').then(m => ({ default: m.JournalPage }))
);
const JournalDetailPage = React.lazy(() =>
  import('./pages/JournalDetailPage').then(m => ({ default: m.JournalDetailPage }))
);
const ExperiencesPage = React.lazy(() =>
  import('./pages/ExperiencesPage').then(m => ({ default: m.ExperiencesPage }))
);
const CommunityPage = React.lazy(() =>
  import('./pages/CommunityPage').then(m => ({ default: m.CommunityPage }))
);
const AboutPage = React.lazy(() =>
  import('./pages/AboutPage').then(m => ({ default: m.AboutPage }))
);
const PathFinderPage = React.lazy(() =>
  import('./pages/PathFinderPage').then(m => ({ default: m.PathFinderPage }))
);
const ContactPage = React.lazy(() =>
  import('./pages/ContactPage').then(m => ({ default: m.ContactPage }))
);

/** Minimal branded loading fallback */
const PageLoadingFallback: React.FC = () => (
  <div
    style={{
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      minHeight: '60vh',
      color: 'var(--color-text-muted)',
      fontFamily: 'var(--font-brand)',
      fontSize: '0.85rem',
      letterSpacing: '0.12em',
      textTransform: 'uppercase' as const,
      opacity: 0.6,
    }}
    role="status"
    aria-label="Loading page"
  >
    <span>Loading…</span>
  </div>
);

// Scroll to top helper on route transition
const ScrollToTop: React.FC = () => {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (!hash) {
      window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
    } else {
      const id = hash.replace('#', '');
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [pathname, hash]);

  return null;
};

function App() {
  return (
    <BrowserRouter>
      <ScrollProgressBar />
      <a href="#primary" className="skip-link">
        Skip to main content
      </a>
      <div className="site-wrapper" style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
        <ScrollToTop />
        <Header />
        <div style={{ flex: 1 }}>
          <Suspense fallback={<PageLoadingFallback />}>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/reinvention" element={<ReinventionPage />} />
              <Route path="/framework" element={<FrameworkPage />} />
              <Route path="/memberships" element={<MembershipPage />} />
              <Route path="/journal" element={<JournalPage />} />
              <Route path="/journal/:slug" element={<JournalDetailPage />} />
              <Route path="/experiences" element={<ExperiencesPage />} />
              <Route path="/community" element={<CommunityPage />} />
              <Route path="/finder" element={<PathFinderPage />} />
              <Route path="/contact" element={<ContactPage />} />
              {/* Fallback route */}
              <Route path="*" element={<HomePage />} />
            </Routes>
          </Suspense>
        </div>
        <Footer />
      </div>
      <BackToTopButton />
    </BrowserRouter>
  );
}

export default App;
