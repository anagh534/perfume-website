import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

export default function Contact() {
  const [formStatus, setFormStatus] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormStatus('Transmission received. We will respond shortly.');
    setTimeout(() => setFormStatus(''), 5000);
    e.target.reset();
  };

  const fadeUp = {
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 1, ease: [0.16, 1, 0.3, 1] }
  };

  return (
    <div className="w-full min-h-screen bg-[#050505] text-[#FAFAFA] pt-32 pb-24 overflow-hidden">
      <div className="max-w-[1600px] mx-auto px-6 lg:px-12">
        
        <motion.div {...fadeUp} className="mb-24">
          <h1 className="text-6xl lg:text-[8rem] font-display font-bold tracking-tighter mb-6 leading-[0.9]">
            TERMINALS.
          </h1>
          <p className="text-white/50 font-sans text-xl max-w-md">
            Establish a connection with our laboratory.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-32">
          
          {/* Form */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          >
            <form onSubmit={handleSubmit} className="space-y-8 bg-[#0A0A0A] p-8 md:p-12 rounded-3xl border border-white/5">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <label className="block text-[10px] uppercase font-bold tracking-widest text-white/40 mb-3">Identifier</label>
                  <input 
                    type="text" 
                    required
                    className="w-full bg-black border border-white/10 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-white/50 transition-colors"
                    placeholder="John Doe"
                  />
                </div>
                <div>
                  <label className="block text-[10px] uppercase font-bold tracking-widest text-white/40 mb-3">Signal (Email)</label>
                  <input 
                    type="email" 
                    required
                    className="w-full bg-black border border-white/10 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-white/50 transition-colors"
                    placeholder="john@example.com"
                  />
                </div>
              </div>
              <div>
                <label className="block text-[10px] uppercase font-bold tracking-widest text-white/40 mb-3">Transmission Data</label>
                <textarea 
                  rows="4" 
                  required
                  className="w-full bg-black border border-white/10 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-white/50 transition-colors resize-none"
                  placeholder="Enter your message..."
                ></textarea>
              </div>
              <button 
                type="submit"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-black font-bold text-xs uppercase tracking-widest rounded-xl hover:bg-[#A1A1AA] transition-colors"
              >
                Transmit <ArrowRight className="w-4 h-4" />
              </button>
              {formStatus && (
                <p className="text-[10px] uppercase font-bold tracking-widest text-green-400 mt-4">{formStatus}</p>
              )}
            </form>
          </motion.div>

          {/* Info */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="space-y-12 lg:pl-12 flex flex-col justify-center"
          >
            <div>
              <h3 className="text-[10px] uppercase font-bold tracking-widest text-white/40 mb-4">Primary Node</h3>
              <p className="font-display font-bold text-3xl leading-tight">
                AURA LAB 01<br />
                Tokyo, JP
              </p>
            </div>
            <div>
              <h3 className="text-[10px] uppercase font-bold tracking-widest text-white/40 mb-4">Secondary Node</h3>
              <p className="font-display font-bold text-3xl leading-tight">
                AURA LAB 02<br />
                Paris, FR
              </p>
            </div>
            <div className="pt-8 border-t border-white/10">
              <h3 className="text-[10px] uppercase font-bold tracking-widest text-white/40 mb-4">Direct COMMS</h3>
              <p className="text-lg font-bold font-sans">
                <a href="mailto:comms@auralabs.com" className="hover:text-white/50 transition-colors">comms@auralabs.com</a>
              </p>
            </div>
          </motion.div>

        </div>
      </div>
    </div>
  );
}
