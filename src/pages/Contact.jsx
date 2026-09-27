import { motion } from 'framer-motion';
import { Mail, Phone, MapPin } from 'lucide-react';

export default function Contact() {
  return (
    <div className="w-full min-h-screen bg-brand-light py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-serif text-brand-navy mb-6">Contact Us</h1>
          <p className="text-lg text-brand-navy/70">
            We are here to assist you with any inquiries about our fragrances or your order.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
          >
            <form className="space-y-6">
              <div>
                <label className="block text-sm uppercase tracking-widest text-brand-navy mb-2">Name</label>
                <input type="text" className="w-full border-b border-brand-navy/30 bg-transparent py-2 focus:outline-none focus:border-brand-rosegold transition-colors" placeholder="Your Name" />
              </div>
              <div>
                <label className="block text-sm uppercase tracking-widest text-brand-navy mb-2">Email</label>
                <input type="email" className="w-full border-b border-brand-navy/30 bg-transparent py-2 focus:outline-none focus:border-brand-rosegold transition-colors" placeholder="your@email.com" />
              </div>
              <div>
                <label className="block text-sm uppercase tracking-widest text-brand-navy mb-2">Message</label>
                <textarea rows="4" className="w-full border-b border-brand-navy/30 bg-transparent py-2 focus:outline-none focus:border-brand-rosegold transition-colors" placeholder="How can we help you?"></textarea>
              </div>
              <button type="button" className="bg-brand-navy text-brand-light px-8 py-4 uppercase tracking-widest text-sm hover:bg-brand-rosegold transition-colors duration-300">
                Send Message
              </button>
            </form>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
            className="space-y-12 md:pl-12"
          >
            <div>
              <h3 className="text-xl font-serif text-brand-navy mb-4 flex items-center">
                <MapPin className="w-6 h-6 mr-3 text-brand-rosegold" /> Visit Us
              </h3>
              <p className="text-brand-navy/70">
                123 Rue de la Paix<br />
                75002 Paris, France
              </p>
            </div>
            <div>
              <h3 className="text-xl font-serif text-brand-navy mb-4 flex items-center">
                <Phone className="w-6 h-6 mr-3 text-brand-rosegold" /> Call Us
              </h3>
              <p className="text-brand-navy/70">
                +33 1 23 45 67 89<br />
                Mon-Fri: 9am - 6pm
              </p>
            </div>
            <div>
              <h3 className="text-xl font-serif text-brand-navy mb-4 flex items-center">
                <Mail className="w-6 h-6 mr-3 text-brand-rosegold" /> Email Us
              </h3>
              <p className="text-brand-navy/70">
                contact@aureliaparis.com
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
