
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Package, ChevronRight, Truck, CheckCircle2, ShieldCheck } from 'lucide-react';
import { motion } from 'framer-motion';

const Hero: React.FC = () => {
  const navigate = useNavigate();
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-slate-900">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
        <div className="absolute -top-[20%] -right-[10%] w-[800px] h-[800px] rounded-full bg-blue-900/20 blur-[120px]"></div>
        <div className="absolute bottom-[10%] -left-[10%] w-[600px] h-[600px] rounded-full bg-orange-500/10 blur-[100px]"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full grid lg:grid-cols-2 gap-12 items-center">
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center lg:text-left space-y-8"
        >
          
          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold font-['Space_Grotesk'] text-white leading-tight tracking-tight">
            Vos livraisons locales <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-amber-300">
              et solidaires.
            </span>
          </h1>
          
          <p className="text-lg text-slate-300 leading-relaxed max-w-2xl mx-auto lg:mx-0">
            Wento connecte les PME aux particuliers pour des livraisons instantanées, sécurisées et écologiques. Rejoignez le mouvement qui change la logistique urbaine à Madagascar.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-4 w-full sm:w-auto">
            <button 
                onClick={() => navigate('/download')}
                className="group relative overflow-hidden px-8 py-4 bg-white text-slate-900 rounded-2xl font-bold text-lg shadow-xl transition-all hover:scale-105 active:scale-95 w-full sm:w-auto"
            >
              <div className="flex items-center justify-center sm:justify-start gap-3">
                <Package className="text-orange-500" />
                <span>Je veux expédier</span>
                <ChevronRight size={18} className="text-slate-400 group-hover:translate-x-1 transition-transform" />
              </div>
            </button>
            
            <button 
                onClick={() => navigate('/download')}
                className="group px-8 py-4 bg-transparent border border-slate-700 hover:border-orange-500 hover:bg-slate-800 text-white rounded-2xl font-bold text-lg transition-all hover:scale-105 active:scale-95 w-full sm:w-auto"
            >
              <div className="flex items-center justify-center sm:justify-start gap-3">
                <Truck className="text-slate-400 group-hover:text-orange-500 transition-colors" />
                <span>Je veux livrer</span>
              </div>
            </button>
          </div>
          
          <div className="pt-8 flex flex-wrap items-center justify-center lg:justify-start gap-4 sm:gap-6 text-slate-400 text-sm">
            <div className="flex items-center gap-2">
              <CheckCircle2 size={16} className="text-green-500 shrink-0" />
              <span>Identité Vérifiée (CIN)</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 size={16} className="text-green-500 shrink-0" />
              <span>Suivi Live</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 size={16} className="text-green-500 shrink-0" />
              <span>Sans Engagement</span>
            </div>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="hidden lg:block relative h-[700px]"
        >
           {/* Mockup Composition */}
           <div className="absolute top-10 right-10 w-80 h-[550px] bg-slate-800 rounded-[3rem] border-8 border-slate-900 shadow-2xl overflow-hidden z-20 rotate-[-6deg] hover:rotate-0 transition-all duration-500">
              <img src="assets/mockup_wento.png" alt="App Interface" className="w-full h-full object-cover opacity-80" />
              <div className="absolute bottom-0 w-full h-1/2 bg-gradient-to-t from-slate-900 via-slate-900/80 to-transparent p-6 flex flex-col justify-end">
                <div className="bg-white/10 backdrop-blur-md p-4 rounded-2xl border border-white/10">
                    <div className="flex items-center gap-3 mb-2">
                        <div className="w-10 h-10 rounded-full bg-green-500 flex items-center justify-center text-slate-900 font-bold">TA</div>
                        <div>
                            <p className="text-white font-bold text-sm">Tahina est en route</p>
                            <p className="text-green-400 text-xs">Arrive dans 4 min</p>
                        </div>
                    </div>
                    <div className="w-full bg-slate-700 h-1.5 rounded-full overflow-hidden">
                        <div className="w-3/4 bg-orange-500 h-full"></div>
                    </div>
                </div>
              </div>
           </div>

           <div className="absolute top-20 left-10 w-72 h-72 bg-orange-500 rounded-3xl z-10 opacity-90 flex flex-col items-center justify-center p-6 shadow-orange-500/20 shadow-2xl rotate-[6deg]">
              <ShieldCheck size={64} className="text-white mb-4" />
              <h3 className="text-white text-2xl font-bold text-center">Colis Scellé & Sécurisé</h3>
              <p className="text-orange-100 text-center mt-2 text-sm">Preuve photo à chaque étape.</p>
           </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
