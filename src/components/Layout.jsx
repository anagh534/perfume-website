import Navbar from './Navbar';
import Footer from './Footer';
import CartDrawer from './CartDrawer';
import { useCart } from '../context/CartContext';
import { motion, AnimatePresence } from 'framer-motion';

export default function Layout({ children }) {
  const { notification } = useCart();

  return (
    <div className="min-h-screen flex flex-col bg-[#050505] text-[#FAFAFA] selection:bg-white selection:text-black relative">
      <Navbar />
      <main className="flex-grow">
        {children}
      </main>
      <Footer />
      <CartDrawer />

      {/* Global Modern Toast */}
      <AnimatePresence>
        {notification && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.95 }}
            className="fixed bottom-8 left-1/2 -translate-x-1/2 z-50 bg-white/10 backdrop-blur-xl border border-white/20 text-white px-6 py-3 rounded-full shadow-2xl"
          >
            <span className="text-[10px] uppercase font-bold tracking-widest">{notification}</span>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
