
import React, { useRef } from 'react';
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

const App: React.FC = () => {
  const formRef = useRef<HTMLDivElement>(null);

  const scrollToForm = () => {
    formRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen flex flex-col relative">
      <Header />
      <main className="flex-grow">
        <Hero onCtaClick={scrollToForm} />
        <ComparisonSection />
        <FeatureGridSection onCtaClick={scrollToForm} />
        <ForWhoSection onCtaClick={scrollToForm} />
        <PackagesSection onCtaClick={scrollToForm} />
        <ProcessSection />
        <FormSection ref={formRef} />
        <ProjectsGrid />
      </main>
      <Footer />
    </div>
  );
};

export default App;
