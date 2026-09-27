import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';
import ThreeBottle from '../components/ThreeBottle';
import { useCart } from '../context/CartContext';
import product1 from '../assets/images/product1.jpg';
import product2 from '../assets/images/product2.jpg';
import product3 from '../assets/images/product3.jpg';

export default function Home() {
  const { addToCart } = useCart();
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], [0, 300]);

  // Framer Motion Variants for Staggered Text Reveal
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 50 },
    show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
  };

  return (
    <div className="w-full bg-[#050505] text-[#FAFAFA] overflow-hidden">
      
      {/* 1. Avant-Garde Hero Section */}
      <section className="relative h-screen flex items-center pt-20">
        <div className="max-w-[1600px] mx-auto px-6 lg:px-12 w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center h-full">
          
          <motion.div
            variants={container}
            initial="hidden"
            animate="show"
            className="z-10 order-2 lg:order-1 flex flex-col justify-center h-full pb-20 lg:pb-0"
          >
            <motion.div variants={item} className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-white/10 bg-white/5 backdrop-blur-md mb-8 w-max">
              <Sparkles className="w-3.5 h-3.5 text-white" />
              <span className="text-[10px] uppercase tracking-widest font-semibold text-white/80">Molecular Synthesis</span>
            </motion.div>

            <motion.h1 variants={item} className="text-6xl sm:text-7xl lg:text-[7rem] font-display font-bold leading-[0.9] tracking-tighter text-balance mb-8">
              THE NEXT <br />
              <span className="text-gradient">EVOLUTION</span> <br />
              OF SCENT.
            </motion.h1>
            
            <motion.p variants={item} className="text-sm md:text-base text-white/50 max-w-md leading-relaxed mb-10 font-sans">
              AURA engineers olfactory experiences at the molecular level. Blending hyper-natural extractions with cutting-edge synthetic captives to create fragrances that defy gravity.
            </motion.p>
            
            <motion.div variants={item}>
              <Link
                to="/products"
                className="group relative inline-flex items-center justify-center px-8 py-4 bg-white text-black font-semibold text-xs uppercase tracking-widest overflow-hidden rounded-full"
              >
                <div className="absolute inset-0 w-full h-full bg-[#A1A1AA] translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-[0.16,1,0.3,1]"></div>
                <span className="relative flex items-center gap-2 group-hover:text-black transition-colors duration-500">
                  Enter The Lab <ArrowRight className="w-4 h-4" />
                </span>
              </Link>
            </motion.div>
          </motion.div>

          <div className="order-1 lg:order-2 h-[50vh] lg:h-full relative flex items-center justify-center">
            {/* Soft glowing orb behind the 3D element */}
            <div className="absolute w-[300px] h-[300px] bg-indigo-500/20 blur-[100px] rounded-full"></div>
            <ThreeBottle />
          </div>
        </div>
      </section>

      {/* 2. Manifesto / Scroll Parallax */}
      <section className="py-32 lg:py-48 relative border-t border-white/5 overflow-hidden">
        <motion.div style={{ y }} className="absolute inset-0 opacity-10 pointer-events-none flex items-center justify-center">
          <h2 className="text-[15vw] font-display font-bold tracking-tighter whitespace-nowrap">AURA AURA AURA</h2>
        </motion.div>
        
        <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
          <motion.p 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="font-display font-bold text-3xl sm:text-5xl leading-tight text-balance"
          >
            "We do not capture nature. We <span className="text-gradient">re-engineer</span> it. Elevating organic matter into pure, kinetic energy."
          </motion.p>
        </div>
      </section>

      {/* 3. The Formulations (Modern Dark Grid) */}
      <section className="py-32 bg-[#0A0A0A]">
        <div className="max-w-[1600px] mx-auto px-6 lg:px-12">
          <div className="flex justify-between items-end mb-16">
            <h2 className="text-4xl font-display font-bold tracking-tighter">Selected <br/>Formulations</h2>
            <Link to="/products" className="text-xs uppercase tracking-widest text-white/50 hover:text-white transition-colors border-b border-white/20 pb-1 hover:border-white">
              View Complete Archive
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { id: 1, name: 'ISO-E SUPER', code: 'A-01', price: '₹5,200', img: product1 },
              { id: 2, name: 'AMBROXAN KINETIC', code: 'A-02', price: '₹6,100', img: product2 },
              { id: 3, name: 'VETIVER SYNTHESIS', code: 'A-03', price: '₹5,800', img: product3 },
            ].map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
                className="group cursor-pointer border border-white/5 bg-[#111] rounded-2xl overflow-hidden hover:border-white/20 transition-colors"
              >
                <div className="aspect-[4/5] bg-black overflow-hidden relative">
                  <div className="absolute top-4 left-4 z-10 px-2 py-1 bg-white/10 backdrop-blur-md rounded text-[10px] uppercase font-bold tracking-widest text-white">
                    {item.code}
                  </div>
                  <img
                    src={item.img}
                    alt={item.name}
                    className="w-full h-full object-cover opacity-60 grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700 ease-out"
                  />
                </div>
                <div className="p-6 flex flex-col justify-between h-40">
                  <div>
                    <h3 className="text-xl font-display font-bold tracking-tight mb-1">{item.name}</h3>
                    <p className="text-sm text-white/40">{item.price}</p>
                  </div>
                  <button
                    onClick={(e) => {
                      e.preventDefault();
                      addToCart(item, 1, '50ml');
                    }}
                    className="w-full py-3 bg-white/5 hover:bg-white text-white hover:text-black text-[10px] font-bold uppercase tracking-widest rounded-lg transition-colors"
                  >
                    Add to Cart
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}
