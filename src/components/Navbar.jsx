import React from 'react';
import { ShoppingCart, Menu, Home, Shirt } from 'lucide-react';

const Navbar = ({ currentPage, onNavigate }) => {
  const handleKeyDown = (event, page) => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      onNavigate(page);
    }
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b border-zinc-200/60 bg-white/80 backdrop-blur supports-[backdrop-filter]:bg-white/70">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6">
        <div className="flex items-center gap-3">
          <button
            aria-label="Open menu"
            className="inline-flex items-center justify-center rounded-md p-2 text-zinc-600 hover:bg-zinc-100 hover:text-zinc-900 focus:outline-none focus:ring-2 focus:ring-zinc-400"
          >
            <Menu className="h-5 w-5" />
          </button>
          <div
            role="button"
            tabIndex={0}
            aria-label="Go to home"
            onClick={() => onNavigate('home')}
            onKeyDown={(e) => handleKeyDown(e, 'home')}
            className="select-none text-xl font-extrabold tracking-tight text-zinc-900"
          >
            VibeWear
          </div>
        </div>
        <nav className="hidden items-center gap-6 md:flex">
          <div
            role="link"
            tabIndex={0}
            onClick={() => onNavigate('home')}
            onKeyDown={(e) => handleKeyDown(e, 'home')}
            className={`flex cursor-pointer items-center gap-2 text-sm font-medium transition-colors ${
              currentPage === 'home' ? 'text-zinc-900' : 'text-zinc-600 hover:text-zinc-900'
            }`}
            aria-current={currentPage === 'home' ? 'page' : undefined}
          >
            <Home className="h-4 w-4" /> Home
          </div>
          <div
            role="link"
            tabIndex={0}
            onClick={() => onNavigate('products')}
            onKeyDown={(e) => handleKeyDown(e, 'products')}
            className={`flex cursor-pointer items-center gap-2 text-sm font-medium transition-colors ${
              currentPage === 'products' ? 'text-zinc-900' : 'text-zinc-600 hover:text-zinc-900'
            }`}
            aria-current={currentPage === 'products' ? 'page' : undefined}
          >
            <Shirt className="h-4 w-4" /> Products
          </div>
        </nav>
        <button
          aria-label="View cart"
          className="inline-flex items-center gap-2 rounded-full bg-zinc-900 px-4 py-2 text-sm font-medium text-white hover:bg-zinc-800 focus:outline-none focus:ring-2 focus:ring-zinc-400"
        >
          <ShoppingCart className="h-4 w-4" />
          <span className="hidden sm:inline">Cart</span>
        </button>
      </div>
    </header>
  );
};

export default Navbar;
