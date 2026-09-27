import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useCart } from '../context/CartContext';
import { X, Beaker } from 'lucide-react';
import product1 from '../assets/images/product1.jpg';
import product2 from '../assets/images/product2.jpg';
import product3 from '../assets/images/product3.jpg';

const products = [
  { id: 1, name: 'ISO-E SUPER', code: 'A-01', type: 'Synthetic', notes: 'Pure Iso E Super, Cedarwood, Musk', price: '₹5,200', image: product1 },
  { id: 2, name: 'AMBROXAN KINETIC', code: 'A-02', type: 'Molecular', notes: 'Ambroxan, Bergamot, Pink Pepper', price: '₹6,100', image: product2 },
  { id: 3, name: 'VETIVER SYNTHESIS', code: 'A-03', type: 'Hybrid', notes: 'Haitian Vetiver, Aldehydes, Smoke', price: '₹5,800', image: product3 },
  { id: 4, name: 'NEON TUBEROSE', code: 'A-04', type: 'Floral Hybrid', notes: 'Tuberose Absolute, Latex, Ozone', price: '₹6,500', image: product1 },
  { id: 5, name: 'OZONE 05', code: 'A-05', type: 'Atmospheric', notes: 'Petrichor, Geosmin, White Amber', price: '₹4,900', image: product2 },
  { id: 6, name: 'DARK MATTER', code: 'A-06', type: 'Resin', notes: 'Black Agarwood, Tar, Vanilla', price: '₹7,200', image: product3 }
];

export default function Products() {
  const { addToCart } = useCart();
  const [activeProduct, setActiveProduct] = useState(null);

  const container = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { staggerChildren: 0.1 } }
  };

  const itemAnim = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
  };

  return (
    <div className="w-full min-h-screen bg-[#050505] text-[#FAFAFA] pt-32 pb-24">
      <div className="max-w-[1600px] mx-auto px-6 lg:px-12">
        
        {/* Header */}
        <motion.div initial="hidden" animate="show" variants={container} className="mb-24 md:w-2/3">
          <motion.div variants={itemAnim} className="inline-flex items-center gap-2 mb-6 text-white/50">
            <Beaker className="w-4 h-4" />
            <span className="text-[10px] uppercase tracking-widest font-bold">The Archive</span>
          </motion.div>
          <motion.h1 variants={itemAnim} className="text-5xl lg:text-8xl font-display font-bold tracking-tighter mb-6">
            FORMULATIONS.
          </motion.h1>
          <motion.p variants={itemAnim} className="text-white/60 font-sans text-lg max-w-xl leading-relaxed">
            Our complete archive of molecular and botanical experiments. Engineered for maximum impact and unique skin chemistry interaction.
          </motion.p>
        </motion.div>

        {/* Grid */}
        <motion.div 
          initial="hidden"
          animate="show"
          variants={container}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {products.map((product) => (
            <motion.div
              key={product.id}
              variants={itemAnim}
              className="group cursor-pointer border border-white/5 bg-[#0A0A0A] rounded-2xl overflow-hidden hover:border-white/20 transition-all duration-500 flex flex-col"
              onClick={() => setActiveProduct(product)}
            >
              <div className="aspect-[4/5] bg-black overflow-hidden relative">
                <div className="absolute top-4 left-4 z-10 px-2 py-1 bg-black/50 backdrop-blur-md rounded border border-white/10 text-[10px] uppercase font-bold tracking-widest text-white">
                  {product.code}
                </div>
                <div className="absolute top-4 right-4 z-10 px-2 py-1 bg-white/10 backdrop-blur-md rounded text-[10px] uppercase font-bold tracking-widest text-white">
                  {product.type}
                </div>
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover opacity-60 grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700 ease-out"
                />
              </div>
              <div className="p-6 flex flex-col flex-1">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-xl font-display font-bold tracking-tight mb-1">{product.name}</h3>
                    <p className="text-[10px] uppercase tracking-widest text-white/40">{product.notes}</p>
                  </div>
                </div>
                <div className="mt-auto flex justify-between items-center">
                  <span className="text-lg font-bold">{product.price}</span>
                  <span className="text-[10px] uppercase font-bold tracking-widest text-white/50 group-hover:text-white transition-colors">
                    View Data &rarr;
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Detail Modal (Glassmorphism) */}
      <AnimatePresence>
        {activeProduct && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.4 }}
              onClick={() => setActiveProduct(null)}
              className="absolute inset-0 bg-black/80 backdrop-blur-xl"
            />
            
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className="relative w-full max-w-5xl bg-[#111] border border-white/10 rounded-3xl shadow-2xl flex flex-col md:flex-row h-[85vh] md:h-[600px] overflow-hidden"
            >
              <button
                onClick={() => setActiveProduct(null)}
                className="absolute top-6 right-6 z-10 p-2 bg-black/50 backdrop-blur-md rounded-full text-white/50 hover:text-white border border-white/10 transition-colors"
              >
                <X className="w-4 h-4" />
              </button>

              <div className="w-full md:w-1/2 h-1/2 md:h-full bg-black relative">
                <img
                  src={activeProduct.image}
                  alt={activeProduct.name}
                  className="w-full h-full object-cover opacity-80"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#111] via-transparent to-transparent md:bg-gradient-to-l md:from-[#111] md:via-transparent"></div>
              </div>

              <div className="w-full md:w-1/2 p-8 md:p-12 flex flex-col justify-center relative z-10">
                <div className="inline-flex items-center gap-2 mb-6 text-white/50">
                  <span className="px-2 py-1 bg-white/10 rounded text-[10px] uppercase font-bold tracking-widest">{activeProduct.code}</span>
                  <span className="text-[10px] uppercase font-bold tracking-widest">{activeProduct.type} Series</span>
                </div>
                
                <h2 className="text-4xl md:text-5xl font-display font-bold tracking-tighter mb-6">{activeProduct.name}</h2>
                
                <div className="space-y-6 text-sm text-white/60 font-sans leading-relaxed mb-12 flex-1">
                  <p>A highly concentrated molecular construct designed to amplify the wearer's natural skin scent. Features extreme longevity and sillage.</p>
                  
                  <div className="p-4 bg-white/5 rounded-xl border border-white/5">
                    <p className="text-[10px] uppercase font-bold tracking-widest text-white/40 mb-2">Olfactory Profile</p>
                    <p className="text-white">{activeProduct.notes}</p>
                  </div>
                </div>
                
                <div className="flex flex-col sm:flex-row items-center gap-4 mt-auto">
                  <div className="text-2xl font-bold font-display w-full sm:w-auto">{activeProduct.price}</div>
                  <button
                    onClick={() => {
                      addToCart(activeProduct, 1, '50ml');
                      setActiveProduct(null);
                    }}
                    className="w-full sm:w-auto flex-1 py-4 bg-white text-black text-xs font-bold uppercase tracking-widest rounded-xl hover:bg-[#A1A1AA] transition-colors"
                  >
                    Add to Cart
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}
