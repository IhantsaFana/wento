
import React from 'react';
import { Star } from 'lucide-react';

const Testimonials: React.FC = () => {
  return (
    <div className="grid md:grid-cols-2 gap-8 mb-20 border-b border-slate-800 pb-20">
        <div className="bg-slate-800/50 p-8 rounded-2xl backdrop-blur-sm hover:bg-slate-800 transition-colors border border-slate-700/50">
            <div className="flex gap-1 text-orange-500 mb-4">
                {[1,2,3,4,5].map(i => <Star key={i} size={16} fill="currentColor" />)}
            </div>
            <p className="text-lg text-white italic mb-6">"Je vends des vêtements sur Facebook. Avant, je perdais mon temps à gérer les livreurs. Avec Wento, j'envoie 10 colis par jour depuis chez moi à Ambodivona, sans stress."</p>
            <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-pink-600 flex items-center justify-center font-bold text-white border-2 border-slate-600">SR</div>
                <div>
                    <p className="font-bold text-white">Sarah R.</p>
                    <p className="text-sm text-slate-400">Boutique en ligne (Mode)</p>
                </div>
            </div>
        </div>
        <div className="bg-slate-800/50 p-8 rounded-2xl backdrop-blur-sm hover:bg-slate-800 transition-colors border border-slate-700/50">
                <div className="flex gap-1 text-orange-500 mb-4">
                {[1,2,3,4,5].map(i => <Star key={i} size={16} fill="currentColor" />)}
            </div>
            <p className="text-lg text-white italic mb-6">"J'ai un scooter et je suis étudiant à Ankatso. Je fais quelques livraisons le soir en rentrant. Ça paie mon essence et mes sorties. C'est top !"</p>
            <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-orange-500 flex items-center justify-center font-bold text-white border-2 border-orange-400">TR</div>
                <div>
                    <p className="font-bold text-white">Tahina R.</p>
                    <p className="text-sm text-slate-400">Étudiant & Livreur Wento</p>
                </div>
            </div>
        </div>
    </div>
  );
};

export default Testimonials;
