import { motion } from 'framer-motion';
import { Star, Filter } from 'lucide-react';
import product1 from '../assets/images/product1.jpg';
import product2 from '../assets/images/product2.jpg';
import product3 from '../assets/images/product3.jpg';
import product4 from '../assets/images/product4.jpg';
import product5 from '../assets/images/product5.jpg';
import product6 from '../assets/images/product6.jpg';

const products = [
  { id: 1, name: 'Midnight Rose', price: 120, image: product1 },
  { id: 2, name: 'Golden Amber', price: 145, image: product2 },
  { id: 3, name: 'Ocean Breeze', price: 95, image: product3 },
  { id: 4, name: 'Velvet Woods', price: 160, image: product4 },
  { id: 5, name: 'Citrus Bloom', price: 110, image: product5 },
  { id: 6, name: 'Vanilla Musk', price: 130, image: product6 },
];

export default function Products() {
  return (
    <div className="w-full min-h-screen bg-brand-light py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-end mb-12 border-b border-brand-navy/10 pb-6">
          <div>
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-4xl md:text-5xl font-serif text-brand-navy"
            >
              The Collection
            </motion.h1>
          </div>
          <button className="flex items-center space-x-2 text-brand-navy hover:text-brand-rosegold transition-colors">
            <Filter className="w-5 h-5" />
            <span className="uppercase tracking-widest text-sm">Filter</span>
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-12">
          {products.map((product, index) => (
            <motion.div 
              key={product.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: (index % 3) * 0.1 }}
              className="group cursor-pointer"
            >
              <div className="aspect-[3/4] bg-brand-light/5 mb-6 overflow-hidden flex items-center justify-center relative">
                <div className="absolute inset-0 bg-gradient-to-t from-brand-navy/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-6 z-10">
                  <span className="text-brand-rosegold uppercase tracking-widest text-sm border-b border-brand-rosegold pb-1">Add to Cart</span>
                </div>
                <img src={product.image} alt={product.name} className="object-cover w-full h-full opacity-90 group-hover:opacity-100 transition-opacity duration-500 group-hover:scale-105" />
              </div>
              <h3 className="text-xl font-serif mb-2 text-brand-navy">{product.name}</h3>
              <p className="text-brand-rosegold mb-4">${product.price}.00</p>
              <div className="flex space-x-1 text-brand-gold">
                {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 fill-current" />)}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
