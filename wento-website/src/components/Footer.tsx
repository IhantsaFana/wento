
import React from 'react';
import { Facebook, Linkedin } from 'lucide-react';
import Testimonials from '../sections/Testimonials';

interface FooterProps {
    showTestimonials?: boolean;
}

const Footer: React.FC<FooterProps> = ({ showTestimonials = false }) => {
  return (
    <footer className="bg-slate-900 text-slate-300 pt-24 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Testimonials (Conditional Rendering) */}
        {showTestimonials && <Testimonials />}

        {/* Footer Links */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
            <div className="col-span-1 md:col-span-2">
                <div className="flex items-center gap-3 mb-6">
                    {/* Logo Image */}
                    <img src="/assets/logo.png" alt="Wento Logo" className="h-8 w-8 rounded-lg object-contain" />
                </div>
                <p className="max-w-sm text-slate-400 mb-6">La puissance du mouvement solidaire. La solution logistique N°1 pour Antananarivo.</p>
                <div className="flex gap-4">
                    <a 
                        href="https://facebook.com/wentomadagascar" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-[#1877F2] hover:text-white transition-colors cursor-pointer text-slate-400"
                        aria-label="Facebook"
                    >
                       <Facebook size={20} />
                    </a>
                    <a 
                        href="https://linkedin.com/in/wentomadagascar" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-[#0A66C2] hover:text-white transition-colors cursor-pointer text-slate-400"
                        aria-label="LinkedIn"
                    >
                       <Linkedin size={20} />
                    </a>
                </div>
            </div>

            <div>
                <h4 className="text-white font-bold mb-6">Entreprise</h4>
                <ul className="space-y-4 text-sm">
                    <li><a href="#values" className="hover:text-orange-500 transition-colors">À propos</a></li>
                    <li><a href="#pme" className="hover:text-orange-500 transition-colors">Devenir Partenaire</a></li>
                    <li><a href="#download" className="hover:text-orange-500 transition-colors">Tarifs</a></li>
                    <li><a href="mailto:contact@wento.mg" className="hover:text-orange-500 transition-colors">Contact</a></li>
                </ul>
            </div>

            <div>
                <h4 className="text-white font-bold mb-6">Légal</h4>
                <ul className="space-y-4 text-sm">
                    <li><a href="#" onClick={(e) => e.preventDefault()} className="hover:text-orange-500 transition-colors">CGU / CGV</a></li>
                    <li><a href="#" onClick={(e) => e.preventDefault()} className="hover:text-orange-500 transition-colors">Politique de Confidentialité</a></li>
                    <li><a href="#" onClick={(e) => e.preventDefault()} className="hover:text-orange-500 transition-colors">Mentions Légales</a></li>
                </ul>
            </div>
        </div>

        <div className="mt-20 pt-8 border-t border-slate-800 text-center text-sm text-slate-500 flex flex-col md:flex-row justify-between items-center">
            <p>&copy; 2024 Wento Madagascar. Tous droits réservés.</p>
            <div className="flex items-center gap-2 mt-4 md:mt-0">
                <span>Fait avec</span>
                <div className="text-red-500 animate-pulse">♥</div>
                <span>par <a href="https://oeka.vercel.app/" target="_blank" rel="noopener noreferrer" className="font-bold text-slate-400 hover:text-orange-500 transition-colors">Ihantsa</a></span>
            </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
