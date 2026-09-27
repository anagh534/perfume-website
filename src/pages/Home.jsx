import { motion } from 'framer-motion';
import { ArrowRight, Star } from 'lucide-react';
import { Link } from 'react-router-dom';
import ThreeBottle from '../components/ThreeBottle';
import product1 from '../assets/images/product1.jpg';

export default function Home() {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="relative h-[90vh] flex items-center overflow-hidden bg-brand-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="z-10"
          >
            <h1 className="text-5xl md:text-7xl font-serif text-brand-navy mb-6 leading-tight">
              The Essence of <br />
              <span className="text-brand-rosegold italic">Elegance</span>
            </h1>
            <p className="text-lg text-brand-navy/70 mb-8 max-w-md">
              Discover our new signature collection. A symphony of delicate notes crafted for the modern individual.
            </p>
            <Link to="/products" className="inline-flex items-center space-x-2 bg-brand-navy text-brand-light px-8 py-4 uppercase tracking-widest text-sm hover:bg-brand-rosegold transition-colors duration-300">
              <span>Shop Collection</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>
          
          <div className="h-[60vh] md:h-[80vh] relative z-0">
             <ThreeBottle />
          </div>
        </div>
      </section>

      {/* Featured Section */}
      <section className="py-24 bg-brand-navy text-brand-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl font-serif mb-16 text-brand-rosegold"
          >
            Bestsellers
          </motion.h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[1, 2, 3].map((item) => (
              <motion.div 
                key={item}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: item * 0.2 }}
                className="group cursor-pointer"
              >
                <div className="aspect-[3/4] bg-brand-light/5 mb-6 overflow-hidden flex items-center justify-center relative">
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-navy/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-6 z-10">
                    <span className="text-brand-rosegold uppercase tracking-widest text-sm border-b border-brand-rosegold pb-1">Quick View</span>
                  </div>
                  <img src={product1} alt="Perfume" className="object-cover w-full h-full opacity-80 group-hover:opacity-100 transition-opacity duration-500 group-hover:scale-105" />
                </div>
                <h3 className="text-xl font-serif mb-2">Midnight Rose {item}</h3>
                <p className="text-brand-rosegold mb-4">$120.00</p>
                <div className="flex justify-center space-x-1 text-brand-gold">
                  {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 fill-current" />)}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
