import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Menu, X, ShoppingBag } from 'lucide-react';
import { useState } from 'react';
import logoImg from '../assets/images/logo.jpg';

const navLinks = [
  { title: 'Home', path: '/' },
  { title: 'About', path: '/about' },
  { title: 'Products', path: '/products' },
  { title: 'Contact', path: '/contact' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  return (
    <nav className="fixed w-full z-50 bg-brand-light/90 backdrop-blur-md border-b border-brand-rosegold-light/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex-shrink-0 flex items-center">
            <Link to="/">
              <img src={logoImg} alt="Aurélia Logo" className="h-14 w-auto mix-blend-multiply" />
            </Link>
          </div>

          <div className="hidden md:flex space-x-8 items-center">
            {navLinks.map((link) => (
              <Link
                key={link.title}
                to={link.path}
                className="relative text-sm uppercase tracking-widest text-brand-navy hover:text-brand-rosegold transition-colors duration-300"
              >
                {link.title}
                {location.pathname === link.path && (
                  <motion.div
                    layoutId="underline"
                    className="absolute -bottom-1 left-0 w-full h-[1px] bg-brand-rosegold"
                  />
                )}
              </Link>
            ))}
            <button className="text-brand-navy hover:text-brand-rosegold transition-colors">
              <ShoppingBag className="w-5 h-5" />
            </button>
          </div>

          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-brand-navy hover:text-brand-rosegold transition-colors"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden bg-brand-light border-b border-brand-rosegold-light/30"
        >
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navLinks.map((link) => (
              <Link
                key={link.title}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className="block px-3 py-2 text-base uppercase tracking-widest text-brand-navy hover:text-brand-rosegold"
              >
                {link.title}
              </Link>
            ))}
          </div>
        </motion.div>
      )}
    </nav>
  );
}
