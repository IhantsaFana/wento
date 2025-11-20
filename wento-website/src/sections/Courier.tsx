
import React from 'react';
import { Bike, Wallet, MapPin, PersonStanding, Car } from 'lucide-react';

interface CourierProps {
    onNavigate: (view: 'home' | 'download') => void;
}

const Courier: React.FC<CourierProps> = ({ onNavigate }) => {
  return (
    <section id="courier" className="py-24 bg-orange-50 relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5 pointer-events-none" style={{ backgroundImage: 'radial-gradient(#f97316 1px, transparent 1px)', backgroundSize: '20px 20px' }}></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
            <span className="text-orange-600 font-bold uppercase tracking-wider text-sm">Devenir Wento-Livreur</span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900 mt-2">Transformez vos trajets en Ariary.</h2>
            <p className="text-slate-600 mt-4 max-w-2xl mx-auto">Vous faites déjà le trajet Travail-Maison ou Fac-Maison ? Rentabilisez-le. Idéal pour les étudiants et les propriétaires de deux-roues.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
            {/* Card 1 */}
            <div className="bg-white p-8 rounded-3xl shadow-xl shadow-orange-500/5 border border-orange-100 hover:-translate-y-2 transition-transform duration-300">
                <div className="w-14 h-14 bg-orange-100 rounded-2xl flex items-center justify-center text-orange-600 mb-6">
                    <Bike size={32} />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-2">Évitez les bouchons</h3>
                <p className="text-slate-600">À moto, à vélo ou même en bus, vous choisissez les courses qui arrangent VOTRE trajet. Ne faites pas de détour inutile.</p>
            </div>

             {/* Card 2 */}
             <div className="bg-white p-8 rounded-3xl shadow-xl shadow-orange-500/5 border border-orange-100 hover:-translate-y-2 transition-transform duration-300">
                <div className="w-14 h-14 bg-orange-100 rounded-2xl flex items-center justify-center text-orange-600 mb-6">
                    <MapPin size={32} />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-2">Liberté Totale</h3>
                <p className="text-slate-600">Pas de patron. Activez l'appli quand vous voulez : le matin avant le boulot, ou le week-end pour un extra.</p>
            </div>

             {/* Card 3 */}
             <div className="bg-white p-8 rounded-3xl shadow-xl shadow-orange-500/5 border border-orange-100 hover:-translate-y-2 transition-transform duration-300">
                <div className="w-14 h-14 bg-orange-100 rounded-2xl flex items-center justify-center text-orange-600 mb-6">
                    <Wallet size={32} />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-2">Paiement Rapide</h3>
                <p className="text-slate-600">Recevez vos gains directement via Mobile Money ou virement bancaire chaque semaine. Transparence totale.</p>
            </div>
        </div>

        {/* Vehicle Types */}
        <div className="bg-slate-900 rounded-[2.5rem] p-8 md:p-12 flex flex-col lg:flex-row items-center justify-between gap-8 text-white shadow-2xl">
            <div>
                <h3 className="text-2xl font-bold mb-2">Tout le monde peut livrer</h3>
                <p className="text-slate-400">Il suffit d'une Carte d'Identité Nationale (CIN) valide et d'un smartphone.</p>
            </div>
            <div className="flex flex-wrap justify-center gap-6 md:gap-10">
                 <div className="flex flex-col items-center gap-2 text-slate-400 hover:text-orange-500 transition-colors">
                    <Bike size={32} />
                    <span className="text-xs font-medium">Moto / Scooter</span>
                </div>
                <div className="flex flex-col items-center gap-2 text-slate-400 hover:text-orange-500 transition-colors">
                    <Car size={32} />
                    <span className="text-xs font-medium">Voiture</span>
                </div>
                 <div className="flex flex-col items-center gap-2 text-slate-400 hover:text-orange-500 transition-colors">
                    <PersonStanding size={32} />
                    <span className="text-xs font-medium">Piéton / Bus</span>
                </div>
            </div>
            <button 
                onClick={() => onNavigate('download')}
                className="w-full lg:w-auto bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-xl font-bold shadow-lg shadow-orange-500/30 transition-all active:scale-95"
            >
                S'inscrire comme Livreur
            </button>
        </div>
      </div>
    </section>
  );
};

export default Courier;
