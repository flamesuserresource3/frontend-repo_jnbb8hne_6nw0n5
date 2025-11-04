import React, { useState } from 'react';
import { ArrowLeft, Heart, Star } from 'lucide-react';

const ProductDetails = ({ product, onBack }) => {
  const [selectedColor, setSelectedColor] = useState(product.colors[0]);
  const [selectedSize, setSelectedSize] = useState(product.sizes[0]);

  return (
    <section className="bg-white">
      <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6">
        <button
          onClick={onBack}
          className="mb-6 inline-flex items-center gap-2 text-sm font-medium text-zinc-700 hover:text-zinc-900 focus:outline-none focus:ring-2 focus:ring-zinc-400"
        >
          <ArrowLeft className="h-4 w-4" /> Back to products
        </button>
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-2">
          <div className="grid gap-4">
            <div className="overflow-hidden rounded-2xl border border-zinc-200">
              <img src={product.image} alt={product.name} className="h-full w-full object-cover" />
            </div>
            <div className="grid grid-cols-4 gap-3">
              {product.gallery.map((src, idx) => (
                <div key={idx} className="overflow-hidden rounded-lg border border-zinc-200">
                  <img src={src} alt={`${product.name} ${idx + 1}`} className="h-full w-full object-cover" />
                </div>
              ))}
            </div>
          </div>

          <div className="flex flex-col gap-6">
            <div>
              <h1 className="text-2xl font-bold text-zinc-900 sm:text-3xl">{product.name}</h1>
              <div className="mt-2 flex items-center gap-3">
                <div className="flex items-center gap-1">
                  {Array.from({ length: 5 }, (_, i) => (
                    <Star
                      key={i}
                      className={`h-4 w-4 ${i < Math.round(product.rating) ? 'fill-yellow-400 text-yellow-400' : 'text-zinc-300'}`}
                    />
                  ))}
                </div>
                <span className="text-sm text-zinc-600">{product.reviews}+ reviews</span>
              </div>
              <p className="mt-4 text-sm text-zinc-700">{product.description}</p>
            </div>

            <div className="flex items-center gap-3">
              <span className="text-2xl font-semibold text-zinc-900">${product.price.toFixed(2)}</span>
              {product.comparePrice && (
                <span className="text-lg text-zinc-400 line-through">${product.comparePrice.toFixed(2)}</span>
              )}
            </div>

            <div>
              <h3 className="mb-2 text-sm font-medium text-zinc-900">Color</h3>
              <div className="flex flex-wrap items-center gap-2">
                {product.colors.map((c) => (
                  <button
                    key={c}
                    aria-label={`Select color ${c}`}
                    onClick={() => setSelectedColor(c)}
                    className={`h-9 w-9 rounded-full border transition ${
                      selectedColor === c ? 'ring-2 ring-zinc-900' : 'border-zinc-200'
                    }`}
                    style={{ backgroundColor: c }}
                  />
                ))}
              </div>
            </div>

            <div>
              <h3 className="mb-2 text-sm font-medium text-zinc-900">Size</h3>
              <div className="flex flex-wrap items-center gap-2">
                {product.sizes.map((s) => (
                  <button
                    key={s}
                    onClick={() => setSelectedSize(s)}
                    className={`rounded-full border px-4 py-2 text-sm font-medium transition ${
                      selectedSize === s ? 'border-zinc-900 bg-zinc-900 text-white' : 'border-zinc-200 text-zinc-900'
                    }`}
                    aria-pressed={selectedSize === s}
                  >
                    {s}
                  </button>
                ))}
              </div>
            </div>

            <div className="flex items-center gap-3">
              <button className="inline-flex items-center justify-center rounded-full bg-zinc-900 px-6 py-3 text-sm font-semibold text-white hover:bg-zinc-800 focus:outline-none focus:ring-2 focus:ring-zinc-400">
                Add to cart
              </button>
              <button
                aria-label="Add to wishlist"
                className="inline-flex items-center justify-center rounded-full border border-zinc-200 bg-white px-4 py-3 text-sm font-semibold text-zinc-900 hover:bg-zinc-50 focus:outline-none focus:ring-2 focus:ring-zinc-400"
              >
                <Heart className="h-5 w-5" />
              </button>
            </div>

            <ul className="mt-4 list-disc pl-5 text-sm text-zinc-700">
              {product.features.map((f, idx) => (
                <li key={idx}>{f}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductDetails;
