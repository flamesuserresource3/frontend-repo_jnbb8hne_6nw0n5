import React from 'react';
import { Star } from 'lucide-react';

const Rating = ({ value = 0 }) => {
  const stars = Array.from({ length: 5 }, (_, i) => i < Math.round(value));
  return (
    <div className="flex items-center gap-1" aria-label={`Rated ${value} out of 5`}>
      {stars.map((filled, idx) => (
        <Star
          key={idx}
          className={`h-3.5 w-3.5 ${filled ? 'fill-yellow-400 text-yellow-400' : 'text-zinc-300'}`}
        />
      ))}
    </div>
  );
};

const ProductCard = ({ product, onClick }) => {
  const handleKeyDown = (e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      onClick(product);
    }
  };

  return (
    <div
      role="button"
      tabIndex={0}
      onClick={() => onClick(product)}
      onKeyDown={handleKeyDown}
      className="group flex flex-col overflow-hidden rounded-xl border border-zinc-200 bg-white transition shadow-sm hover:shadow-md focus:outline-none focus:ring-2 focus:ring-zinc-400"
    >
      <div className="relative aspect-square w-full overflow-hidden">
        <img
          src={product.image}
          alt={product.name}
          className="h-full w-full object-cover transition duration-300 group-hover:scale-105"
          loading="lazy"
        />
      </div>
      <div className="flex flex-1 flex-col gap-2 p-4">
        <div className="flex items-start justify-between gap-2">
          <h3 className="text-sm font-semibold text-zinc-900">{product.name}</h3>
          <span className="text-sm font-semibold text-zinc-900">${product.price.toFixed(2)}</span>
        </div>
        <div className="flex items-center justify-between">
          <Rating value={product.rating} />
          <span className="text-xs text-zinc-500">{product.reviews}+ reviews</span>
        </div>
        <div className="mt-auto flex items-center gap-1.5">
          {product.colors.slice(0, 4).map((c) => (
            <span
              key={c}
              className="inline-block h-4 w-4 rounded-full border border-zinc-200"
              style={{ backgroundColor: c }}
              aria-label={`Color option ${c}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

const ProductGrid = ({ products, onSelectProduct }) => {
  return (
    <section className="bg-white py-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="mb-6 flex items-end justify-between">
          <div>
            <h2 className="text-2xl font-bold tracking-tight text-zinc-900">Latest arrivals</h2>
            <p className="mt-1 text-sm text-zinc-600">Curated picks for the season</p>
          </div>
        </div>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} onClick={onSelectProduct} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductGrid;
