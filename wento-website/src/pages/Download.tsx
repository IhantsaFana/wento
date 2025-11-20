
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Star, CheckCircle2, ArrowLeft } from 'lucide-react';
import QRCode from 'react-qr-code';

const Download: React.FC = () => {
  const navigate = useNavigate();
  const apkUrl = "https://www.wento.mg/media/app/wento.apk";

  return (
    <div className="pt-32 pb-12 bg-slate-900 text-white relative overflow-hidden flex-grow">
      {/* Background Gradients */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-orange-500/10 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-blue-500/10 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Back Button (Secondary navigation inside page) */}
        <button 
          onClick={() => navigate('/')}
          className="inline-flex items-center gap-2 text-slate-400 hover:text-white transition-colors mb-8 group md:hidden"
        >
          <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
          Retour
        </button>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Text Content */}
          <motion.div 
             initial={{ opacity: 0, x: -50 }}
             animate={{ opacity: 1, x: 0 }}
             transition={{ duration: 0.6 }}
             className="space-y-8"
          >
            
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight font-['Space_Grotesk'] tracking-tight">
              Emportez Wento <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-amber-300">
                dans votre poche.
              </span>
            </h1>
            
            <p className="text-lg text-slate-300 leading-relaxed">
              Gérez vos livraisons, suivez vos colis en temps réel et gagnez de l'argent lors de vos trajets. Tout se passe sur l'application.
            </p>

            <div className="space-y-4">
               <div className="flex items-center gap-3 text-slate-300">
                  <CheckCircle2 className="text-green-500 flex-shrink-0" size={20} />
                  <span>Notifications en temps réel</span>
               </div>
               <div className="flex items-center gap-3 text-slate-300">
                  <CheckCircle2 className="text-green-500 flex-shrink-0" size={20} />
                  <span>Chat sécurisé intégré</span>
               </div>
               <div className="flex items-center gap-3 text-slate-300">
                  <CheckCircle2 className="text-green-500 flex-shrink-0" size={20} />
                  <span>Paiement Mobile Money (MVola, Orange Money)</span>
               </div>
            </div>

            {/* Store Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-6">
              {/* Apple Store Button Mock */}
              <button className="flex items-center gap-3 bg-white text-slate-900 px-6 py-3 rounded-xl hover:scale-105 transition-transform shadow-lg shadow-white/10 w-full sm:w-auto justify-center">
                 <img src="/assets/plateforms-logo/Apple-Logo.png" alt="Apple Logo" className="w-8 h-8 flex-shrink-0 object-contain" />
                 <div className="text-left">
                    <div className="text-[10px] font-bold uppercase tracking-wider">Télécharger sur</div>
                    <div className="text-lg font-bold leading-none font-sans">App Store</div>
                 </div>
              </button>

              {/* Google Play Button Mock */}
              <button className="flex items-center gap-3 bg-slate-800 border border-slate-700 text-white px-6 py-3 rounded-xl hover:scale-105 transition-transform hover:border-orange-500 w-full sm:w-auto justify-center">
                 <img src="/assets/plateforms-logo/android-logo.png" alt="Android Logo" className="w-7 h-7 flex-shrink-0 object-contain" />
                 <div className="text-left">
                    <div className="text-[10px] font-bold uppercase tracking-wider">DISPONIBLE SUR</div>
                    <div className="text-lg font-bold leading-none font-sans">Google Play</div>
                 </div>
              </button>
            </div>

            <div className="pt-8 flex items-center gap-4">
               <div className="flex -space-x-3">
                  {[1,2,3,4].map((i) => (
                     <img key={i} src={`/assets/user-avatar/user-avatar-${i}.jpg`} className="w-10 h-10 rounded-full border-2 border-slate-900 object-cover" alt="User" />
                  ))}
               </div>
               <div>
                  <div className="flex text-orange-500">
                     <Star size={14} fill="currentColor" />
                     <Star size={14} fill="currentColor" />
                     <Star size={14} fill="currentColor" />
                     <Star size={14} fill="currentColor" />
                     <Star size={14} fill="currentColor" />
                  </div>
                  <p className="text-xs text-slate-400">+20 Téléchargements à Tana</p>
               </div>
            </div>
          </motion.div>

          {/* Visual / QR Code */}
          <motion.div 
             initial={{ opacity: 0, scale: 0.9 }}
             animate={{ opacity: 1, scale: 1 }}
             transition={{ duration: 0.6, delay: 0.2 }}
             className="relative flex flex-col items-center mt-8 lg:mt-0"
          >
              {/* Phone Mockup */}
              <div className="relative w-[300px] h-[600px] bg-slate-950 rounded-[3rem] border-[8px] border-slate-800 shadow-2xl overflow-hidden z-10">
                   <img src="/assets/mockup_wento.png" className="w-full h-full object-cover" alt="App Screen" />
              </div>

              {/* QR Code Card */}
              <div className="absolute bottom-10 -right-4 md:right-10 bg-white p-4 rounded-2xl shadow-xl transform rotate-[-6deg] hover:rotate-0 transition-transform z-20 max-w-[160px]">
                  <div className="w-32 h-32 flex items-center justify-center">
                      <QRCode 
                        value={apkUrl}
                        size={256}
                        style={{ height: "auto", maxWidth: "100%", width: "100%" }}
                        viewBox={`0 0 256 256`}
                      />
                  </div>
                  <div className="text-center mt-2">
                      <p className="text-slate-900 font-bold text-sm">Scanner pour</p>
                      <p className="text-orange-500 font-bold text-sm">Télécharger</p>
                  </div>
              </div>
          </motion.div>

        </div>
      </div>
    </div>
  );
};

export default Download;
