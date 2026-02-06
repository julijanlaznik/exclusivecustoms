
import React, { useRef, useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import ComparisonSection from './components/ComparisonSection';
import FeatureGridSection from './components/FeatureGridSection';
import ForWhoSection from './components/ForWhoSection';
import PackagesSection from './components/PackagesSection';
import ProcessSection from './components/ProcessSection';
import FormSection from './components/FormSection';
import ProjectsGrid from './components/ProjectsGrid';
import Footer from './components/Footer';
import ScrollProgress from './components/ScrollProgress';
import TermsPage from './components/TermsPage';

type View = 'home' | 'terms';

const App: React.FC = () => {
  const [view, setView] = useState<View>('home');
  const formRef = useRef<HTMLDivElement>(null);

  const scrollToForm = () => {
    if (view !== 'home') {
      setView('home');
      setTimeout(() => {
        formRef.current?.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    } else {
      formRef.current?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const navigateToTerms = (e?: React.MouseEvent) => {
    e?.preventDefault();
    setView('terms');
    window.scrollTo(0, 0);
  };

  const navigateToHome = () => {
    setView('home');
    window.scrollTo(0, 0);
  };

  return (
    <div className="min-h-screen flex flex-col relative">
      <ScrollProgress />
      <Header onLogoClick={navigateToHome} />
      
      <main className="flex-grow">
        {view === 'home' ? (
          <>
            <Hero onCtaClick={scrollToForm} />
            <ComparisonSection />
            <FeatureGridSection onCtaClick={scrollToForm} />
            <ForWhoSection onCtaClick={scrollToForm} />
            <PackagesSection onCtaClick={scrollToForm} />
            <ProcessSection />
            <FormSection ref={formRef} />
            <ProjectsGrid />
          </>
        ) : (
          <TermsPage onBack={navigateToHome} />
        )}
      </main>

      <Footer onTermsClick={navigateToTerms} />
    </div>
  );
};

export default App;
