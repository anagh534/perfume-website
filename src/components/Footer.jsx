import { Camera, Share2, Play } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-brand-navy text-brand-light py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-4 gap-8">
        <div className="col-span-1 md:col-span-2">
          <h2 className="text-2xl font-serif mb-4">AURÉLIA</h2>
          <p className="text-brand-light/70 max-w-sm">
            Elegance captured in a bottle. Discover our luxurious collection of fine fragrances designed to inspire and enchant.
          </p>
        </div>
        
        <div>
          <h3 className="text-lg font-serif mb-4 text-brand-rosegold">Explore</h3>
          <ul className="space-y-2">
            <li><a href="/products" className="text-brand-light/70 hover:text-brand-rosegold transition-colors">Shop All</a></li>
            <li><a href="/about" className="text-brand-light/70 hover:text-brand-rosegold transition-colors">Our Story</a></li>
            <li><a href="/contact" className="text-brand-light/70 hover:text-brand-rosegold transition-colors">Contact Us</a></li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-serif mb-4 text-brand-rosegold">Follow Us</h3>
          <div className="flex space-x-4">
            <a href="#" className="text-brand-light/70 hover:text-brand-rosegold transition-colors">
              <Camera className="w-5 h-5" />
            </a>
            <a href="#" className="text-brand-light/70 hover:text-brand-rosegold transition-colors">
              <Share2 className="w-5 h-5" />
            </a>
            <a href="#" className="text-brand-light/70 hover:text-brand-rosegold transition-colors">
              <Play className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
      <div className="mt-12 pt-8 border-t border-brand-light/10 text-center text-sm text-brand-light/50">
        &copy; {new Date().getFullYear()} Aurélia Paris. All rights reserved.
      </div>
    </footer>
  );
}
