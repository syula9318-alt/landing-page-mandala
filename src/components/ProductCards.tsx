import React from 'react';
import { ArrowRight, ChevronRight, Check } from 'lucide-react';
import { PRODUCTS_DATA, ProductItem } from '../data/config';

interface ProductCardsProps {
  onSelectProduct: (product: ProductItem) => void;
  onApplyForProduct: (product: ProductItem) => void;
}

export const ProductCards: React.FC<ProductCardsProps> = ({
  onSelectProduct,
  onApplyForProduct,
}) => {
  return (
    <section id="produk" className="py-20 lg:py-28 bg-slate-50 border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="space-y-3 max-w-2xl">
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-amber-600">
              <span>Solusi Pembiayaan</span>
              <span aria-hidden="true">·</span>
              <span>Mandala Finance</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight">
              TAKE YOUR NEXT STEP
            </h2>
            <p className="text-base sm:text-lg text-slate-600 font-normal">
              Pilih solusi pembiayaan sesuai kebutuhan Anda.
            </p>
          </div>

          <div className="text-xs sm:text-sm text-slate-500 font-medium">
            Didampingi langsung oleh tim sales Mandala Finance
          </div>
        </div>

        {/* Product Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {PRODUCTS_DATA.map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-2xl overflow-hidden border border-slate-200/80 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col group hover:-translate-y-1.5"
            >
              {/* Product Image Slot */}
              <div className="relative aspect-[4/3] overflow-hidden bg-slate-100">
                <img
                  src={product.image}
                  alt={product.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent pointer-events-none" />

                {/* Badge */}
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 text-xs font-bold tracking-wide rounded-md bg-white/90 backdrop-blur-md text-slate-900 shadow-sm">
                    {product.badge}
                  </span>
                </div>

                <div className="absolute bottom-3 left-4 right-4 text-white">
                  <span className="text-xs font-medium text-slate-300">Agunan: {product.collateral}</span>
                </div>
              </div>

              {/* Product Details Content */}
              <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between space-y-6">
                <div className="space-y-4">
                  <div>
                    <h3 className="text-xl font-extrabold text-slate-900 tracking-tight mb-2 group-hover:text-blue-700 transition-colors">
                      {product.title}
                    </h3>
                    <p className="text-sm text-slate-600 leading-relaxed">
                      {product.description}
                    </p>
                  </div>

                  {/* Key Highlights */}
                  <div className="pt-2 space-y-2">
                    {product.highlights.map((highlight, hIdx) => (
                      <div key={hIdx} className="flex items-start gap-2 text-xs text-slate-700">
                        <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                        <span>{highlight}</span>
                      </div>
                    ))}
                  </div>

                  {/* Feature specs */}
                  <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-100 space-y-1.5 text-xs">
                    <div className="flex justify-between text-slate-600">
                      <span>Estimasi Pilihan Tenor:</span>
                      <span className="font-semibold text-slate-900">
                        {product.tenors[0]} - {product.tenors[product.tenors.length - 1]} Bulan
                      </span>
                    </div>
                    <div className="flex justify-between text-slate-600">
                      <span>Pendampingan:</span>
                      <span className="font-semibold text-slate-900">Sales Dedikasi</span>
                    </div>
                  </div>
                </div>

                {/* Card Action Buttons */}
                <div className="pt-2 space-y-2.5">
                  <button
                    onClick={() => onSelectProduct(product)}
                    className="w-full py-3 px-4 rounded-xl border-2 border-blue-700 hover:bg-blue-50 text-blue-700 font-bold text-sm transition-all duration-150 flex items-center justify-center gap-1.5"
                  >
                    <span>PELAJARI</span>
                    <ChevronRight className="w-4 h-4" />
                  </button>

                  <button
                    onClick={() => onApplyForProduct(product)}
                    className="w-full py-3 px-4 rounded-xl bg-slate-900 hover:bg-blue-700 text-white font-bold text-sm transition-all duration-150 flex items-center justify-center gap-2 group-hover:bg-blue-700"
                  >
                    <span>AJUKAN PRODUK INI</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
