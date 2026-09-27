import React from 'react';
import { Link } from 'react-router-dom';
import logoImg from '../assets/images/logo.jpg';
import { ArrowUpRight } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-[#050505] text-[#FAFAFA] pt-32 pb-16 font-sans border-t border-white/10 relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-[1px] bg-gradient-to-r from-transparent via-white/50 to-transparent"></div>
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-xl h-[100px] bg-indigo-500/10 blur-[100px]"></div>

      <div className="max-w-[1600px] mx-auto px-6 lg:px-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-16 mb-32">
          
          <div className="md:col-span-5 space-y-8">
            <img src={logoImg} alt="AURA" className="h-10 w-auto mix-blend-screen opacity-90" />
            <p className="text-base font-medium text-white/50 max-w-sm leading-relaxed">
              Engineered Olfactory Experiences. <br/>
              Developed in Tokyo, Formulated in Paris.
            </p>
          </div>

          <div className="md:col-span-2 md:col-start-8 space-y-6">
            <h4 className="text-[10px] uppercase font-bold tracking-widest text-white/40 mb-6">System</h4>
            <ul className="space-y-4 text-sm font-bold text-white/70">
              <li><Link to="/products" className="hover:text-white transition-colors flex items-center gap-1">Archive <ArrowUpRight className="w-3 h-3"/></Link></li>
              <li><Link to="/about" className="hover:text-white transition-colors flex items-center gap-1">The Lab <ArrowUpRight className="w-3 h-3"/></Link></li>
              <li><Link to="/contact" className="hover:text-white transition-colors flex items-center gap-1">Terminals <ArrowUpRight className="w-3 h-3"/></Link></li>
            </ul>
          </div>

          <div className="md:col-span-2 space-y-6">
            <h4 className="text-[10px] uppercase font-bold tracking-widest text-white/40 mb-6">Legal</h4>
            <ul className="space-y-4 text-sm font-bold text-white/70">
              <li><a href="#" className="hover:text-white transition-colors">Privacy</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Terms</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Shipping</a></li>
            </ul>
          </div>

        </div>

        <div className="flex flex-col md:flex-row justify-between items-center text-[10px] font-bold uppercase tracking-widest text-white/30 border-t border-white/10 pt-8">
          <p>&copy; {new Date().getFullYear()} AURA LABS INC.</p>
          <p className="mt-4 md:mt-0">VERSION 2.0 // ALL SYSTEMS NORMAL</p>
        </div>
      </div>
    </footer>
  );
}
