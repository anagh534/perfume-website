import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ShoppingBag } from 'lucide-react';
import { useCart } from '../context/CartContext';
import logoImg from '../assets/images/logo.jpg';
import clsx from 'clsx';

const navLinks = [
  { title: 'Formulations', path: '/products' },
  { title: 'The Lab', path: '/about' },
  { title: 'Terminals', path: '/contact' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const { totalCount, setIsCartOpen } = useCart();

  useEffect(() => {
    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          setScrolled(window.scrollY > 20);
          ticking = false;
        });
        ticking = true;
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={clsx(
        'fixed w-full top-0 z-40 transition-colors duration-300 font-sans',
        scrolled ? 'bg-[#050505]/95 border-b border-white/5 py-4' : 'bg-transparent py-6'
      )}
      style={{ transform: 'translateZ(0)' }} // Force GPU layer
    >
      <div className="max-w-[1600px] mx-auto px-6 lg:px-12">
        <div className="flex justify-between items-center">
          
          {/* Left - Mobile Menu Toggle */}
          <div className="lg:hidden flex-1">
            <button onClick={() => setIsOpen(!isOpen)} className="text-white hover:text-[#A1A1AA] transition-colors">
              {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>

          {/* Left - Desktop Links */}
          <div className="hidden lg:flex flex-1 gap-10">
            {navLinks.map((link) => (
              <Link
                key={link.title}
                to={link.path}
                className={clsx(
                  'text-[11px] uppercase tracking-widest font-semibold transition-colors duration-300',
                  location.pathname === link.path ? 'text-white' : 'text-white/40 hover:text-white'
                )}
              >
                {link.title}
              </Link>
            ))}
          </div>

          {/* Center - Logo */}
          <Link to="/" className="flex-1 flex justify-center items-center">
            <img
              src={logoImg}
              alt="AURA"
              className="h-10 w-auto mix-blend-screen opacity-90 hover:opacity-100 transition-opacity"
            />
          </Link>

          {/* Right - Cart */}
          <div className="flex-1 flex justify-end">
            <button
              onClick={() => setIsCartOpen(true)}
              className="relative flex items-center gap-2 group"
            >
              <span className="text-[11px] uppercase tracking-widest font-semibold hidden sm:block text-white/40 group-hover:text-white transition-colors">
                Cart
              </span>
              <div className="relative">
                <ShoppingBag className="w-5 h-5 text-white/80 group-hover:text-white transition-colors" />
                {totalCount > 0 && (
                  <span className="absolute -top-1.5 -right-1.5 bg-white text-black text-[9px] font-bold w-4 h-4 rounded-full flex items-center justify-center">
                    {totalCount}
                  </span>
                )}
              </div>
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="absolute top-full left-0 w-full bg-[#050505] border-t border-white/5 lg:hidden overflow-hidden"
          >
            <div className="px-6 py-8 flex flex-col gap-6">
              {navLinks.map((link) => (
                <Link
                  key={link.title}
                  to={link.path}
                  onClick={() => setIsOpen(false)}
                  className="text-sm font-display uppercase tracking-widest text-white/60 hover:text-white"
                >
                  {link.title}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
