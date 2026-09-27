import { motion } from 'framer-motion';
import aboutImg from '../assets/images/about.jpg';

export default function About() {
  return (
    <div className="w-full min-h-screen bg-brand-light py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-serif text-brand-navy mb-6">Our Story</h1>
          <p className="text-lg text-brand-navy/70 leading-relaxed">
            Founded in Paris, Aurélia represents the pinnacle of modern perfumery. We believe that a fragrance is more than a scent—it is an invisible garment, a memory, and an expression of one's truest self.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <img 
              src={aboutImg} 
              alt="Perfume making process" 
              className="w-full h-auto object-cover rounded-sm shadow-xl"
            />
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h2 className="text-3xl font-serif text-brand-navy">The Art of Distillation</h2>
            <p className="text-brand-navy/70">
              Each bottle of Aurélia is crafted using traditional methods fused with innovative techniques. We source only the rarest and most exquisite raw materials from around the world.
            </p>
            <p className="text-brand-navy/70">
              Our master perfumers spend months, sometimes years, perfecting a single formula. The result is a collection of fragrances that are complex, long-lasting, and undeniably unique.
            </p>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
