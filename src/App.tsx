import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { Header } from './components/layout/Header';
import { Footer } from './components/layout/Footer';
import { HomePage } from './pages/HomePage';
import { ReinventionPage } from './pages/ReinventionPage';
import { FrameworkPage } from './pages/FrameworkPage';
import { MembershipPage } from './pages/MembershipPage';
import { JournalPage } from './pages/JournalPage';
import { JournalDetailPage } from './pages/JournalDetailPage';
import { ExperiencesPage } from './pages/ExperiencesPage';
import { CommunityPage } from './pages/CommunityPage';
import { AboutPage } from './pages/AboutPage';
import { PathFinderPage } from './pages/PathFinderPage';
import { ContactPage } from './pages/ContactPage';
import { ScrollProgressBar, BackToTopButton } from './components/common/ScrollUtils';

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
      <div className="site-wrapper" style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
        <ScrollToTop />
        <Header />
        <div style={{ flex: 1 }}>
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
        </div>
        <Footer />
      </div>
      <BackToTopButton />
    </BrowserRouter>
  );
}

export default App;
