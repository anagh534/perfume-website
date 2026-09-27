import React, { Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import SmoothScroll from './components/SmoothScroll';
import { CartProvider } from './context/CartContext';

const Home = React.lazy(() => import('./pages/Home'));
const About = React.lazy(() => import('./pages/About'));
const Products = React.lazy(() => import('./pages/Products'));
const Contact = React.lazy(() => import('./pages/Contact'));

function App() {
  return (
    <CartProvider>
      <SmoothScroll>
        <Router>
          <Layout>
            <Suspense fallback={
              <div className="flex h-screen items-center justify-center bg-[#050505]">
                <div className="text-[10px] font-display uppercase tracking-[0.2em] text-[#FAFAFA] animate-pulse">
                  LOADING AURA
                </div>
              </div>
            }>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/products" element={<Products />} />
                <Route path="/contact" element={<Contact />} />
              </Routes>
            </Suspense>
          </Layout>
        </Router>
      </SmoothScroll>
    </CartProvider>
  );
}

export default App;
