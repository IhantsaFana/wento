
import React from 'react';
import { Smartphone, Zap, Lock, ArrowRight, CheckCircle2, MapPin, ShieldCheck, FileCheck } from 'lucide-react';
import { motion } from 'framer-motion';

const Values: React.FC = () => {
  return (
    <section className="py-24 bg-slate-50 overflow-hidden" id="values">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-orange-500 font-bold tracking-wider uppercase text-sm mb-2">Pourquoi Wento ?</h2>
          <h3 className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900">
            La livraison <br className="hidden md:block" /> réinventée pour Madagascar.
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[minmax(200px,auto)]">
            {/* Card 1: Facile */}
            <motion.div 
                whileHover={{ y: -5 }}
                className="md:col-span-2 bg-white rounded-3xl p-8 shadow-xl shadow-slate-200/50 border border-slate-100 flex flex-col md:flex-row items-center gap-8 relative overflow-hidden group"
            >
                <div className="absolute top-0 right-0 w-64 h-64 bg-blue-50 rounded-full -translate-y-1/2 translate-x-1/2 group-hover:scale-110 transition-transform duration-500"></div>
                <div className="flex-1 relative z-10">
                    <div className="w-14 h-14 bg-blue-100 rounded-2xl flex items-center justify-center text-blue-600 mb-6">
                        <Smartphone size={28} strokeWidth={2.5} />
                    </div>
                    <h4 className="text-2xl font-bold text-slate-900 mb-3">Simple comme "Allô"</h4>
                    <p className="text-slate-600 leading-relaxed">
                        Plus besoin d'expliquer votre adresse pendant 10 minutes au téléphone. Géolocalisez le départ et l'arrivée sur la carte. L'application trouve le coursier le plus proche.
                    </p>
                </div>
                <div className="w-full md:w-1/3 aspect-square bg-slate-100 rounded-2xl flex items-center justify-center relative overflow-hidden border-4 border-white shadow-sm">
                   {/* Abstract Map UI */}
                   <MapPin size={48} className="text-blue-500 z-10 drop-shadow-lg" />
                   <div className="absolute inset-0 opacity-20 bg-[radial-gradient(#3b82f6_1px,transparent_1px)] [background-size:16px_16px]"></div>
                </div>
            </motion.div>

            {/* Card 2: Rapide */}
            <motion.div 
                 whileHover={{ y: -5 }}
                 className="bg-slate-900 rounded-3xl p-8 shadow-xl flex flex-col justify-between relative overflow-hidden"
            >
                <div className="absolute inset-0 bg-gradient-to-br from-slate-800 to-slate-900"></div>
                <div className="relative z-10">
                     <div className="w-14 h-14 bg-orange-500 rounded-2xl flex items-center justify-center text-white mb-6">
                        <Zap size={28} strokeWidth={2.5} />
                    </div>
                    <h4 className="text-2xl font-bold text-white mb-3">Plus rapide que les embouteillages</h4>
                    <p className="text-slate-300 leading-relaxed text-sm">
                        Nos livreurs en moto et scooter se faufilent partout. Vos colis traversent la ville pendant que les autres sont bloqués.
                    </p>
                </div>
                <div className="mt-6 flex items-center gap-2 text-orange-400 font-semibold">
                    <span>Intra-Tana: ~45 min</span>
                    <ArrowRight size={16} />
                </div>
            </motion.div>

            {/* Card 3: Sécurisé (Highlight) */}
            <motion.div 
                 whileHover={{ y: -5 }}
                 className="md:col-span-3 bg-gradient-to-r from-orange-50 to-white rounded-3xl p-8 md:p-12 shadow-xl shadow-orange-500/10 border border-orange-100 flex flex-col md:flex-row items-center gap-12"
            >
                <div className="flex-1 order-2 md:order-1">
                    <div className="w-14 h-14 bg-orange-100 rounded-2xl flex items-center justify-center text-orange-600 mb-6">
                        <Lock size={28} strokeWidth={2.5} />
                    </div>
                    <h4 className="text-3xl font-bold text-slate-900 mb-4">Confiance Garantie</h4>
                    <ul className="space-y-4">
                        <li className="flex items-start gap-3">
                            <div className="mt-1 bg-green-100 p-1 rounded-full text-green-600 flex-shrink-0"><FileCheck size={16} /></div>
                            <span className="text-slate-700 font-medium">Livreurs vérifiés : Copie de CIN certifiée et Justificatif de domicile obligatoires.</span>
                        </li>
                        <li className="flex items-start gap-3">
                            <div className="mt-1 bg-green-100 p-1 rounded-full text-green-600 flex-shrink-0"><CheckCircle2 size={16} /></div>
                            <span className="text-slate-700 font-medium">Code de sécurité unique à remettre à la livraison pour valider.</span>
                        </li>
                        <li className="flex items-start gap-3">
                            <div className="mt-1 bg-orange-100 p-1 rounded-full text-orange-600 flex-shrink-0"><CheckCircle2 size={16} /></div>
                            <span className="text-slate-900 font-bold">Photo du colis scellé au départ et à l'arrivée.</span>
                        </li>
                    </ul>
                </div>
                <div className="flex-1 order-1 md:order-2 w-full flex justify-center">
                     <div className="relative w-64 h-80 bg-white rounded-[2rem] shadow-2xl border-4 border-slate-100 overflow-hidden rotate-3 hover:rotate-0 transition-transform duration-500">
                         <img src="assets/colis.png" className="w-full h-full object-cover" alt="Package" />
                         <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                            <div className="bg-white/90 backdrop-blur px-4 py-2 rounded-lg flex items-center gap-2 shadow-lg">
                                <ShieldCheck size={20} className="text-green-500" />
                                <span className="font-bold text-slate-900 text-xs">Scellé Wento #882</span>
                            </div>
                         </div>
                     </div>
                </div>
            </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Values;
