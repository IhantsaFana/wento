
import React, { useState } from 'react';
import { Package, UserCheck, ShieldCheck, Smartphone, MapPin, Star } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface HowItWorksProps {
    onNavigate: (view: 'home' | 'download') => void;
}

type UserType = 'sender' | 'courier';

const HowItWorks: React.FC<HowItWorksProps> = ({ onNavigate }) => {
  const [userType, setUserType] = useState<UserType>('sender');

  return (
    <section className="py-24 bg-white relative overflow-hidden" id="how-it-works">
        {/* Decorative background blobs */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
             <div className="absolute top-1/2 right-0 w-96 h-96 bg-orange-50 rounded-full blur-3xl"></div>
             <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-50 rounded-full blur-3xl"></div>
        </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900 mb-4">Comment ça marche ?</h2>
          <p className="text-slate-500">Une expérience fluide pour tout le monde.</p>
        </div>

        {/* Responsive Switcher */}
        <div className="flex justify-center mb-16">
            <div className="bg-slate-100 p-1.5 rounded-full flex relative w-full max-w-sm">
                {/* Animated background pill */}
                <div 
                    className={`absolute top-1.5 bottom-1.5 w-[calc(50%-6px)] bg-white rounded-full shadow-md transition-all duration-300 ease-out ${userType === 'sender' ? 'left-1.5' : 'left-[50%]'}`}
                ></div>
                
                <button 
                    onClick={() => setUserType('sender')}
                    className={`relative z-10 flex-1 py-3 rounded-full text-sm sm:text-base font-bold transition-colors text-center ${userType === 'sender' ? 'text-slate-900' : 'text-slate-500 hover:text-slate-700'}`}
                >
                    Je veux Expédier
                </button>
                <button 
                    onClick={() => setUserType('courier')}
                    className={`relative z-10 flex-1 py-3 rounded-full text-sm sm:text-base font-bold transition-colors text-center ${userType === 'courier' ? 'text-orange-600' : 'text-slate-500 hover:text-slate-700'}`}
                >
                    Je veux Livrer
                </button>
            </div>
        </div>

        {/* Content Switch */}
        <AnimatePresence mode='wait'>
            {userType === 'sender' ? (
                <motion.div 
                    key="sender"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.3 }}
                    className="grid md:grid-cols-3 gap-8"
                >
                    {[
                        { title: '1. Créez votre demande', desc: 'Renseignez le départ, l\'arrivée et la taille du colis. Obtenez un prix fixe immédiat.', icon: Package },
                        { title: '2. Un Wento accepte', desc: 'Un particulier ou un pro sur le trajet accepte la course. Suivez-le en temps réel.', icon: UserCheck },
                        { title: '3. Livraison Sécurisée', desc: 'Le destinataire donne un code unique au livreur pour valider la réception.', icon: ShieldCheck },
                    ].map((step, idx) => (
                        <div key={idx} className="bg-slate-50 p-8 rounded-3xl border border-slate-100 text-center hover:shadow-lg transition-shadow">
                            <div className="w-16 h-16 bg-white rounded-full shadow-sm mx-auto mb-6 flex items-center justify-center text-slate-900 border border-slate-100">
                                <step.icon size={32} />
                            </div>
                            <h4 className="text-xl font-bold text-slate-900 mb-3">{step.title}</h4>
                            <p className="text-slate-600">{step.desc}</p>
                        </div>
                    ))}
                </motion.div>
            ) : (
                <motion.div 
                    key="courier"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.3 }}
                    className="grid md:grid-cols-3 gap-8"
                >
                    {[
                        { title: '1. Activez l\'appli', desc: 'Rentabilisez vos trajets quotidiens. Vélo, Voiture, ou même en Métro/Bus.', icon: Smartphone },
                        { title: '2. Choisissez une course', desc: 'Visualisez les demandes sur votre route. Acceptez celle qui vous arrange.', icon: MapPin },
                        { title: '3. Gagnez de l\'argent', desc: 'Livrez, validez le code et recevez vos gains instantanément sur votre compte.', icon: Star },
                    ].map((step, idx) => (
                        <div key={idx} className="bg-orange-50/50 p-8 rounded-3xl border border-orange-100 text-center hover:shadow-lg transition-shadow">
                            <div className="w-16 h-16 bg-white rounded-full shadow-sm mx-auto mb-6 flex items-center justify-center text-orange-500 border border-orange-100">
                                <step.icon size={32} />
                            </div>
                            <h4 className="text-xl font-bold text-slate-900 mb-3">{step.title}</h4>
                            <p className="text-slate-600">{step.desc}</p>
                        </div>
                    ))}
                </motion.div>
            )}
        </AnimatePresence>

        <div className="mt-16 text-center">
            <button 
                onClick={() => onNavigate('download')}
                className="bg-slate-900 text-white px-8 py-4 rounded-full font-bold shadow-xl hover:bg-slate-800 transition-colors w-full sm:w-auto"
            >
                Commencer l'expérience Wento
            </button>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
