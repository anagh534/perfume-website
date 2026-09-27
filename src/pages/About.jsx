import React from 'react';
import { motion } from 'framer-motion';
import aboutImg from '../assets/images/about.jpg';

export default function About() {
  const fadeUp = {
    initial: { opacity: 0, y: 50 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: "-100px" },
    transition: { duration: 1, ease: [0.16, 1, 0.3, 1] }
  };

  return (
    <div className="w-full min-h-screen bg-[#050505] text-[#FAFAFA] pt-32 pb-24 overflow-hidden">
      <div className="max-w-[1600px] mx-auto px-6 lg:px-12">
        
        <section className="mb-32">
          <motion.div {...fadeUp} className="max-w-4xl mb-16">
            <h1 className="text-6xl lg:text-[8rem] font-display font-bold leading-[0.9] tracking-tighter mb-8 text-balance">
              THE <br/> LABORATORY.
            </h1>
            <p className="text-xl text-white/50 font-sans leading-relaxed max-w-2xl">
              AURA operates at the intersection of nature and synthetic engineering. We do not make perfumes; we construct olfactory environments.
            </p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
            className="aspect-[21/9] w-full bg-[#111] rounded-3xl overflow-hidden relative border border-white/10"
          >
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent z-10"></div>
            <img 
              src={aboutImg} 
              alt="AURA Laboratory" 
              className="w-full h-full object-cover grayscale opacity-80"
            />
          </motion.div>
        </section>

        <section className="grid grid-cols-1 md:grid-cols-2 gap-16 lg:gap-32">
          <motion.div {...fadeUp}>
            <h2 className="text-4xl font-display font-bold tracking-tighter mb-6">01. SYNTHESIS</h2>
            <div className="space-y-4 text-white/50 font-sans leading-relaxed text-base">
              <p>
                We embrace the power of synthetic molecules. Iso E Super, Ambroxan, and Aldehydes are not cheap substitutes; they are the structural steel of modern fragrance architecture.
              </p>
              <p>
                By isolating specific scent molecules, we create hyper-realistic interpretations of nature that cannot exist in the wild.
              </p>
            </div>
          </motion.div>

          <motion.div {...fadeUp} transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}>
            <h2 className="text-4xl font-display font-bold tracking-tighter mb-6">02. EXTRACTION</h2>
            <div className="space-y-4 text-white/50 font-sans leading-relaxed text-base">
              <p>
                When we use natural materials, we use the most advanced supercritical CO2 extraction methods. This captures the true, unbruised essence of the botanical.
              </p>
              <p>
                The result is a hybrid formulation: the unyielding power of synthetics combined with the chaotic beauty of natural absolutes.
              </p>
            </div>
          </motion.div>
        </section>

      </div>
    </div>
  );
}
