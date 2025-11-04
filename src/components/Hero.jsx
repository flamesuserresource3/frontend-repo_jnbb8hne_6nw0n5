import React from 'react';
import { ChevronRight, Star } from 'lucide-react';

const Hero = ({ onShopNow }) => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-zinc-50 to-white">
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-8 px-4 py-16 sm:px-6 md:grid-cols-2 md:py-24 lg:gap-12">
        <div className="order-2 md:order-1">
          <h1 className="text-4xl font-extrabold tracking-tight text-zinc-900 sm:text-5xl">
            Elevate your everyday style
          </h1>
          <p className="mt-4 max-w-prose text-base text-zinc-600 sm:text-lg">
            Discover premium essentials designed for comfort and crafted to last. Explore our
            latest collection of tees, hoodies, and accessories.
          </p>
          <div className="mt-8 flex items-center gap-4">
            <button
              onClick={onShopNow}
              className="inline-flex items-center gap-2 rounded-full bg-zinc-900 px-6 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-zinc-800 focus:outline-none focus:ring-2 focus:ring-zinc-400"
            >
              Shop now <ChevronRight className="h-4 w-4" />
            </button>
            <div className="flex items-center gap-2 text-sm text-zinc-700">
              <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
              Rated 4.9 by 2,000+ customers
            </div>
          </div>
        </div>
        <div className="order-1 md:order-2">
          <div className="relative aspect-[4/5] w-full overflow-hidden rounded-2xl shadow-lg ring-1 ring-zinc-200">
            <img
              src="https://images.unsplash.com/photo-1543087903-1ac2ec7aa8c5?q=80&w=1640&auto=format&fit=crop"
              alt="Model wearing minimalist hoodie"
              className="h-full w-full object-cover"
              loading="eager"
            />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
