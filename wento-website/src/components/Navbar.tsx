
import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const currentView = location.pathname === '/' ? 'home' : 'download';
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    if (currentView === 'download') {
        // Si on est sur la page download, on retourne à l'accueil d'abord
        navigate('/');
        // Petit délai pour laisser le temps au rendu de se faire avant de scroll
        setTimeout(() => {
             const element = document.querySelector(href);
             element?.scrollIntoView({ behavior: 'smooth' });
        }, 100);
    } else {
        // Comportement normal d'ancre
        const element = document.querySelector(href);
        element?.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false);
  };

  const navLinks = [
    { name: 'Qui sommes nous', href: '#values' },
    { name: 'Comment ça marche', href: '#how-it-works' },
    { name: 'Pour les PME', href: '#pme' },
    { name: 'Devenir Livreur', href: '#courier' },
  ];

  // La navbar est transparente si on n'a pas scrollé (que ce soit Home ou Download, car les deux ont un header sombre)
  const isTransparent = !isScrolled && !isMobileMenuOpen;
  
  // Le texte est blanc si le fond est transparent
  const textColorClass = isTransparent ? 'text-white' : 'text-slate-900';
  const subTextColorClass = isTransparent ? 'text-slate-200' : 'text-slate-600';

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        !isTransparent
          ? 'bg-white/90 backdrop-blur-md shadow-sm py-4'
          : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo Image */}
          <div 
            className="flex items-center gap-2 cursor-pointer" 
            onClick={() => navigate('/')}
          >
            <img src="/assets/logo.png" alt="Wento Logo" className="h-10 w-10 rounded-lg object-contain" />
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {currentView === 'home' && navLinks.map((link) => (
              <button
                key={link.name}
                onClick={() => handleNavClick(link.href)}
                className={`text-sm font-medium hover:text-orange-500 transition-colors ${subTextColorClass}`}
              >
                {link.name}
              </button>
            ))}
            
            {currentView === 'download' ? (
                <button 
                    onClick={() => navigate('/')}
                    className={`text-sm font-medium hover:text-orange-500 transition-colors ${subTextColorClass}`}
                >
                    Retour au site
                </button>
            ) : (
                <button 
                    onClick={() => navigate('/download')}
                    className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-2.5 rounded-full font-bold transition-all shadow-lg shadow-orange-500/30 text-sm"
                >
                Télécharger l'App
                </button>
            )}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={`p-2 rounded-lg transition-colors ${textColorClass}`}
            >
              {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-t border-slate-100 overflow-hidden"
          >
            <div className="px-4 pt-4 pb-8 space-y-4">
              {currentView === 'home' && navLinks.map((link) => (
                <button
                  key={link.name}
                  onClick={() => handleNavClick(link.href)}
                  className="block w-full text-left text-lg font-medium text-slate-900 py-2 border-b border-slate-50"
                >
                  {link.name}
                </button>
              ))}
              
              <div className="pt-4">
                <button 
                    onClick={() => {
                        navigate(currentView === 'download' ? '/' : '/download');
                        setIsMobileMenuOpen(false);
                    }}
                    className="w-full bg-orange-500 text-white py-4 rounded-xl font-bold shadow-lg shadow-orange-500/30"
                >
                  {currentView === 'download' ? 'Retour Accueil' : 'Télécharger l\'App'}
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
