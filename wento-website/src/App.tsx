import React, { useState } from 'react';
import Layout from './components/Layout';
import Hero from './sections/Hero';
import Values from './sections/Values';
import HowItWorks from './sections/HowItWorks';
import SME from './sections/SME';
import Courier from './sections/Courier';
import Download from './pages/Download';

type ViewState = 'home' | 'download';

const App: React.FC = () => {
  const [currentView, setCurrentView] = useState<ViewState>('home');

  // Fonction pour naviguer et scroller en haut
  const navigateTo = (view: ViewState) => {
    setCurrentView(view);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <Layout onNavigate={navigateTo} currentView={currentView}>
        {currentView === 'home' ? (
          <>
            <Hero onNavigate={navigateTo} />
            <Values />
            <HowItWorks onNavigate={navigateTo} />
            <SME onNavigate={navigateTo} />
            <Courier onNavigate={navigateTo} />
          </>
        ) : (
          <Download onBack={() => navigateTo('home')} />
        )}
    </Layout>
  );
};

export default App;
