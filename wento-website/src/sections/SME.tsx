
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Building2, TrendingUp, Clock, Wallet, Laptop } from 'lucide-react';

const SME: React.FC = () => {
  const navigate = useNavigate();
  return (
    <section id="pme" className="py-24 bg-slate-900 text-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          <div className="space-y-8 relative z-10">
            <div className="inline-flex items-center gap-2 text-orange-400 font-bold tracking-wider uppercase text-sm">
              <Building2 size={18} />
              <span>Pour les E-commerçants & Boutiques</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight">
              Livrez vos clients partout à Tana, <span className="text-orange-500">sans gérer de flotte</span>.
            </h2>
            <p className="text-lg text-slate-400">
              Fleuristes à Isoraka, Restaurants à Ankorondrano ou Vendeurs Facebook : offrez la livraison express sans acheter de scooter. Wento s'occupe de la logistique.
            </p>

            <div className="space-y-6 pt-4">
              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-xl bg-slate-800 flex items-center justify-center text-orange-500 shrink-0">
                  <Wallet size={24} />
                </div>
                <div>
                  <h4 className="text-xl font-bold mb-1">Économisez sur la livraison</h4>
                  <p className="text-slate-400 text-sm">Pas de salaire fixe de livreur à payer. Payez à la course. Tarifs dégressifs pour les pros.</p>
                </div>
              </div>
              
              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-xl bg-slate-800 flex items-center justify-center text-orange-500 shrink-0">
                  <Clock size={24} />
                </div>
                <div>
                  <h4 className="text-xl font-bold mb-1">Vos clients n'attendent plus</h4>
                  <p className="text-slate-400 text-sm">Livraison H+1 ou Express. Contournez les bouchons grâce à notre réseau de scooters.</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-xl bg-slate-800 flex items-center justify-center text-orange-500 shrink-0">
                  <Laptop size={24} />
                </div>
                <div>
                  <h4 className="text-xl font-bold mb-1">Gestion Centralisée</h4>
                  <p className="text-slate-400 text-sm">Suivez tous vos colis en temps réel sur votre tableau de bord. Preuve de livraison par photo.</p>
                </div>
              </div>
            </div>

            <div className="pt-6">
                <button 
                    onClick={() => navigate('/download')}
                    className="bg-white text-slate-900 px-8 py-4 rounded-full font-bold hover:bg-slate-200 transition-colors shadow-lg shadow-white/10 w-full sm:w-auto"
                >
                    Créer un compte Pro
                </button>
            </div>
          </div>

          {/* Visual Dashboard Mockup */}
          <div className="relative hidden sm:block">
            <div className="absolute -inset-4 bg-gradient-to-r from-orange-500 to-pink-500 rounded-[2.5rem] blur-3xl opacity-20 animate-pulse"></div>
            <div className="relative bg-slate-800 border border-slate-700 rounded-3xl p-6 shadow-2xl">
                {/* Header Fake */}
                <div className="flex justify-between items-center mb-8 border-b border-slate-700 pb-4">
                    <div className="flex gap-2">
                        <div className="w-3 h-3 rounded-full bg-red-500"></div>
                        <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                        <div className="w-3 h-3 rounded-full bg-green-500"></div>
                    </div>
                    <div className="text-slate-400 text-xs font-mono">Wento Business Dashboard</div>
                </div>
                
                {/* Stats */}
                <div className="grid grid-cols-2 gap-4 mb-6">
                    <div className="bg-slate-900 p-4 rounded-xl border border-slate-700">
                        <div className="text-slate-400 text-xs mb-1">Livraisons (Octobre)</div>
                        <div className="text-2xl font-bold text-white">142</div>
                        <div className="text-green-400 text-xs flex items-center gap-1 mt-1">
                            <TrendingUp size={12} /> +12%
                        </div>
                    </div>
                    <div className="bg-slate-900 p-4 rounded-xl border border-slate-700">
                        <div className="text-slate-400 text-xs mb-1">Économies (Ar)</div>
                        <div className="text-2xl font-bold text-white">450 000</div>
                        <div className="text-green-400 text-xs flex items-center gap-1 mt-1">
                            <TrendingUp size={12} /> +8%
                        </div>
                    </div>
                </div>

                {/* List */}
                <div className="space-y-3">
                    <div className="flex items-center justify-between bg-slate-900 p-3 rounded-lg border border-slate-700 hover:bg-slate-700/50 transition-colors cursor-pointer">
                        <div className="flex items-center gap-3">
                            <div className="w-8 h-8 rounded-full bg-orange-500/20 text-orange-500 flex items-center justify-center text-xs font-bold">TS</div>
                            <div>
                                <div className="text-white text-sm font-medium">Colis #4923 - Tiana S.</div>
                                <div className="text-slate-500 text-xs">Vers Ivandry (En scooter)</div>
                            </div>
                        </div>
                        <span className="text-xs bg-blue-500/20 text-blue-400 px-2 py-1 rounded-full animate-pulse">En route</span>
                    </div>
                     <div className="flex items-center justify-between bg-slate-900 p-3 rounded-lg border border-slate-700 hover:bg-slate-700/50 transition-colors cursor-pointer">
                        <div className="flex items-center gap-3">
                            <div className="w-8 h-8 rounded-full bg-green-500/20 text-green-500 flex items-center justify-center text-xs font-bold">HR</div>
                            <div>
                                <div className="text-white text-sm font-medium">Colis #4922 - Hery R.</div>
                                <div className="text-slate-500 text-xs">Livré à 67ha Sud</div>
                            </div>
                        </div>
                        <span className="text-xs bg-green-500/20 text-green-400 px-2 py-1 rounded-full">Terminé</span>
                    </div>
                </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default SME;
