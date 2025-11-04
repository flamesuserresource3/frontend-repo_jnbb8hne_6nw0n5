import React, { useMemo, useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ProductGrid from './components/ProductGrid';
import ProductDetails from './components/ProductDetails';

const App = () => {
  const [page, setPage] = useState('home'); // 'home' | 'products' | 'product'
  const [selectedProduct, setSelectedProduct] = useState(null);

  const products = useMemo(
    () => [
      {
        id: 'tee-01',
        name: 'Essential Cotton Tee',
        price: 29,
        comparePrice: 39,
        rating: 4.7,
        reviews: 842,
        image:
          'https://images.unsplash.com/photo-1520975961576-bfe26d0ed16a?q=80&w=1640&auto=format&fit=crop',
        gallery: [
          'https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=1640&auto=format&fit=crop',
          'https://images.unsplash.com/photo-1503342217505-b0a15cf70489?q=80&w=1640&auto=format&fit=crop',
          'https://images.unsplash.com/photo-1521579893432-236a66d549d8?q=80&w=1640&auto=format&fit=crop',
          'https://images.unsplash.com/photo-1541099649105-f69ad21f3246?q=80&w=1640&auto=format&fit=crop',
        ],
        colors: ['#111827', '#e5e7eb', '#f59e0b', '#60a5fa'],
        sizes: ['XS', 'S', 'M', 'L', 'XL'],
        description:
          'A wardrobe staple crafted from premium mid-weight cotton with a soft hand-feel and a perfect drape.',
        features: ['100% cotton', 'Pre-shrunk fabric', 'Standard fit', 'Machine washable'],
        tags: ['tee', 'cotton', 'essential'],
      },
      {
        id: 'hoodie-01',
        name: 'Fleece Zip Hoodie',
        price: 69,
        rating: 4.8,
        reviews: 1264,
        image:
          'https://images.unsplash.com/photo-1542326237-94b1c5a538d9?q=80&w=1640&auto=format&fit=crop',
        gallery: [
          'https://images.unsplash.com/photo-1542326237-94b1c5a538d9?q=80&w=1640&auto=format&fit=crop',
          'https://images.unsplash.com/photo-1542435503-956c469947f6?q=80&w=1640&auto=format&fit=crop',
          'https://images.unsplash.com/photo-1520974779573-3a4de9f2d50d?q=80&w=1640&auto=format&fit=crop',
          'https://images.unsplash.com/photo-1512436991641-6745cdb1723f?q=80&w=1640&auto=format&fit=crop',
        ],
        colors: ['#111827', '#374151', '#f3f4f6'],
        sizes: ['S', 'M', 'L', 'XL'],
        description:
          'Cozy up in our ultra-soft fleece hoodie, designed for layered warmth without the bulk.',
        features: ['Soft-brushed interior', 'Durable zipper', 'Ribbed cuffs & hem', 'Kangaroo pockets'],
        tags: ['hoodie', 'fleece', 'zip'],
      },
      {
        id: 'cap-01',
        name: 'Minimalist Dad Cap',
        price: 24,
        rating: 4.6,
        reviews: 438,
        image:
          'https://images.unsplash.com/photo-1549030143-a8658f237f59?q=80&w=1640&auto=format&fit=crop',
        gallery: [
          'https://images.unsplash.com/photo-1549030143-a8658f237f59?q=80&w=1640&auto=format&fit=crop',
          'https://images.unsplash.com/photo-1543082094-1cfb0c9b5d2b?q=80&w=1640&auto=format&fit=crop',
          'https://images.unsplash.com/photo-1542060748-10c28b62716f?q=80&w=1640&auto=format&fit=crop',
          'https://images.unsplash.com/photo-1503341455253-b2e723bb3dbb?q=80&w=1640&auto=format&fit=crop',
        ],
        colors: ['#111827', '#9ca3af', '#f59e0b'],
        sizes: ['One Size'],
        description: 'A clean, low-profile cap with adjustable strap for the perfect fit.',
        features: ['Adjustable strap', 'Curved brim', 'Breathable eyelets'],
        tags: ['cap', 'accessories'],
      },
      {
        id: 'sweat-01',
        name: 'Classic Crewneck Sweatshirt',
        price: 59,
        rating: 4.5,
        reviews: 672,
        image:
          'https://images.unsplash.com/photo-1544022613-8b28b0a419fb?q=80&w=1640&auto=format&fit=crop',
        gallery: [
          'https://images.unsplash.com/photo-1544022613-8b28b0a419fb?q=80&w=1640&auto=format&fit=crop',
          'https://images.unsplash.com/photo-1543084239-2826367cecdc?q=80&w=1640&auto=format&fit=crop',
          'https://images.unsplash.com/photo-1520975234505-2e1dd5a22f1b?q=80&w=1640&auto=format&fit=crop',
          'https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=1640&auto=format&fit=crop',
        ],
        colors: ['#0ea5e9', '#111827', '#e5e7eb'],
        sizes: ['XS', 'S', 'M', 'L', 'XL', 'XXL'],
        description:
          'A timeless mid-weight sweatshirt that pairs with everything and keeps its shape.',
        features: ['Raglan sleeves', 'Rib-knit trim', 'Premium fleece'],
        tags: ['sweatshirt', 'crewneck'],
      },
    ],
    []
  );

  const handleNavigate = (next) => {
    setPage(next);
    if (next !== 'product') setSelectedProduct(null);
  };

  const handleSelectProduct = (product) => {
    setSelectedProduct(product);
    setPage('product');
  };

  return (
    <div className="min-h-screen bg-white text-zinc-900">
      <Navbar currentPage={page} onNavigate={handleNavigate} />

      {page === 'home' && (
        <>
          <Hero onShopNow={() => handleNavigate('products')} />
          <ProductGrid products={products.slice(0, 4)} onSelectProduct={handleSelectProduct} />
        </>
      )}

      {page === 'products' && (
        <ProductGrid products={products} onSelectProduct={handleSelectProduct} />
      )}

      {page === 'product' && selectedProduct && (
        <ProductDetails product={selectedProduct} onBack={() => handleNavigate('products')} />
      )}

      <footer className="border-t border-zinc-200 bg-zinc-50 py-8">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-4 text-sm text-zinc-600 sm:flex-row sm:px-6">
          <p>© {new Date().getFullYear()} VibeWear. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <a href="#" className="hover:text-zinc-900">Privacy</a>
            <a href="#" className="hover:text-zinc-900">Terms</a>
            <a href="#" className="hover:text-zinc-900">Contact</a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
