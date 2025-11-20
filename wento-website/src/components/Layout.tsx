
import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import { ChevronRight } from 'lucide-react';

interface LayoutProps {
  children: React.ReactNode;
  onNavigate: (view: 'home' | 'download') => void;
  currentView: 'home' | 'download';
}

const Layout: React.FC<LayoutProps> = ({ children, onNavigate, currentView }) => {
  return (
    <div className="bg-white min-h-screen font-sans text-slate-900 selection:bg-orange-500 selection:text-white overflow-x-hidden flex flex-col">
      <Navbar 
        onNavigate={onNavigate} 
        currentView={currentView} 
      />
      
      <main className="flex-grow flex flex-col">
        {children}
      </main>
      
      <Footer showTestimonials={currentView === 'home'} />
      
      {/* Sticky Mobile CTA (Uniquement sur l'accueil) */}
      {currentView === 'home' && (
        <div className="fixed bottom-6 left-4 right-4 md:hidden z-40">
          <button 
            onClick={() => onNavigate('download')}
            className="w-full bg-orange-500 text-white font-bold py-4 rounded-2xl shadow-2xl shadow-orange-500/40 border border-orange-400 flex items-center justify-center gap-2 transform active:scale-95 transition-transform"
          >
              <span>Télécharger Wento</span>
              <ChevronRight size={20} />
          </button>
        </div>
      )}
    </div>
  );
};

export default Layout;
