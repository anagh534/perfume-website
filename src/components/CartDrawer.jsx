import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Trash2 } from 'lucide-react';
import { useCart } from '../context/CartContext';

export default function CartDrawer() {
  const { cartItems, isCartOpen, setIsCartOpen, removeFromCart, updateQuantity, subtotal } = useCart();

  return (
    <AnimatePresence>
      {isCartOpen && (
        <div className="fixed inset-0 z-50 overflow-hidden">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsCartOpen(false)}
            className="absolute inset-0 bg-black/60 backdrop-blur-sm transition-opacity"
          />

          <div className="fixed inset-y-0 right-0 max-w-full flex">
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 30, stiffness: 300 }}
              className="w-screen max-w-md bg-[#0A0A0A] border-l border-white/10 text-white flex flex-col shadow-2xl"
            >
              {/* Header */}
              <div className="px-8 py-6 border-b border-white/10 flex items-center justify-between bg-black/50 backdrop-blur-md">
                <h2 className="text-[10px] uppercase font-bold tracking-widest text-white/70">Terminal Bag</h2>
                <button
                  onClick={() => setIsCartOpen(false)}
                  className="p-2 bg-white/5 rounded-full hover:bg-white/10 text-white/50 hover:text-white transition-colors"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>

              {/* Items List */}
              <div className="flex-1 overflow-y-auto p-8 space-y-6">
                {cartItems.length === 0 ? (
                  <div className="h-full flex flex-col items-center justify-center space-y-4 opacity-50">
                    <p className="text-[10px] font-bold uppercase tracking-widest">No formulas selected.</p>
                  </div>
                ) : (
                  cartItems.map((item) => (
                    <div key={`${item.id}-${item.size}`} className="flex gap-6 bg-[#111] p-4 rounded-2xl border border-white/5">
                      <div className="w-20 h-24 bg-black rounded-xl overflow-hidden shrink-0 border border-white/10">
                        <img src={item.image} alt={item.name} className="w-full h-full object-cover grayscale opacity-80" />
                      </div>
                      <div className="flex-1 flex flex-col justify-center">
                        <div className="flex justify-between items-start mb-1">
                          <h4 className="font-display font-bold text-lg leading-tight tracking-tight">{item.name}</h4>
                          <button
                            onClick={() => removeFromCart(item.id, item.size)}
                            className="text-white/30 hover:text-red-400 transition-colors"
                          >
                            <Trash2 className="w-4 h-4" />
                          </button>
                        </div>
                        <span className="text-[10px] uppercase font-bold tracking-widest text-white/40 mb-4">
                          {item.size || '50ml'}
                        </span>
                        
                        <div className="flex justify-between items-center mt-auto">
                          <div className="flex items-center gap-3 text-sm font-bold bg-black px-3 py-1 rounded-lg border border-white/10">
                            <button onClick={() => updateQuantity(item.id, item.size, -1)} className="text-white/50 hover:text-white">-</button>
                            <span>{item.quantity}</span>
                            <button onClick={() => updateQuantity(item.id, item.size, 1)} className="text-white/50 hover:text-white">+</button>
                          </div>
                          <span className="text-sm font-bold">
                            ₹{(typeof item.price === 'string' ? parseInt(item.price.replace(/[^0-9]/g, ''), 10) : item.price).toLocaleString('en-IN')}
                          </span>
                        </div>
                      </div>
                    </div>
                  ))
                )}
              </div>

              {/* Footer */}
              {cartItems.length > 0 && (
                <div className="p-8 bg-[#111] border-t border-white/10">
                  <div className="flex justify-between text-sm mb-6 font-bold">
                    <span className="text-white/50">Subtotal</span>
                    <span>₹{subtotal.toLocaleString('en-IN')}</span>
                  </div>
                  <button
                    className="w-full py-4 bg-white text-black text-xs font-bold uppercase tracking-widest rounded-xl hover:bg-[#A1A1AA] transition-colors"
                  >
                    Initiate Checkout
                  </button>
                </div>
              )}
            </motion.div>
          </div>
        </div>
      )}
    </AnimatePresence>
  );
}
