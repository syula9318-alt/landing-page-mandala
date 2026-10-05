import React from 'react';
import { X, CheckCircle, Shield, FileText, ArrowRight, MessageSquare } from 'lucide-react';
import { ProductItem, buildWhatsAppLink } from '../data/config';

interface ProductModalProps {
  product: ProductItem | null;
  onClose: () => void;
  onApply: (product: ProductItem) => void;
}

export const ProductModal: React.FC<ProductModalProps> = ({ product, onClose, onApply }) => {
  if (!product) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-950/70 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6 animate-in fade-in duration-200">
      <div className="relative bg-white rounded-3xl max-w-2xl w-full shadow-2xl border border-slate-200 overflow-hidden transform transition-all">
        {/* Modal Header with Image Banner */}
        <div className="relative h-48 sm:h-56 bg-slate-900 overflow-hidden">
          <img
            src={product.image}
            alt={product.title}
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent" />

          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 w-9 h-9 rounded-full bg-slate-900/80 hover:bg-slate-900 text-white flex items-center justify-center transition-colors border border-slate-700"
            aria-label="Tutup modal"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="absolute bottom-4 left-6 right-6 text-white">
            <span className="px-2.5 py-0.5 rounded text-[11px] font-bold tracking-wider uppercase bg-amber-400 text-slate-950 inline-block mb-1.5">
              {product.badge}
            </span>
            <h3 className="text-2xl font-black tracking-tight">{product.title}</h3>
          </div>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-8 space-y-6 max-h-[65vh] overflow-y-auto">
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-blue-700 mb-1">
              Tentang Layanan
            </h4>
            <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
              {product.description}
            </p>
          </div>

          {/* Peruntukan */}
          <div className="p-4 rounded-xl bg-blue-50/70 border border-blue-100 space-y-1">
            <div className="text-xs font-bold text-blue-900 uppercase">Peruntukan Ideal:</div>
            <div className="text-xs sm:text-sm text-blue-800">{product.suitableFor}</div>
          </div>

          {/* Features Grid */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-3">
              Karakteristik & Ketentuan Umum
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {product.features.map((feat, idx) => (
                <div key={idx} className="p-3 rounded-xl bg-slate-50 border border-slate-100">
                  <div className="text-[11px] text-slate-500">{feat.label}</div>
                  <div className="text-xs sm:text-sm font-bold text-slate-900 mt-0.5">{feat.value}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Keunggulan dibantu sales */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-2">
              Keuntungan Pengajuan Lewat Sales
            </h4>
            <div className="space-y-2">
              {product.highlights.map((item, idx) => (
                <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700">
                  <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span>{item}</span>
                </div>
              ))}
              <div className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700">
                <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <span>Konsultasi gratis tanpa biaya survei atau pendaftaran tersembunyi</span>
              </div>
            </div>
          </div>

          {/* Regulatory Disclaimer */}
          <div className="p-3.5 rounded-xl bg-slate-100 border border-slate-200 text-[11px] text-slate-500 leading-relaxed flex items-start gap-2">
            <Shield className="w-4 h-4 text-slate-600 shrink-0 mt-0.5" />
            <span>
              Mandala Finance merupakan lembaga pembiayaan yang berizin dan diawasi oleh OJK. Seluruh proses persetujuan dan rincian pembiayaan mengacu pada hasil analisis resmi.
            </span>
          </div>
        </div>

        {/* Modal Footer CTAs */}
        <div className="p-4 sm:p-6 bg-slate-50 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-end gap-3">
          <a
            href={buildWhatsAppLink(`Halo Sales Mandala, saya tertarik mempelajari lebih lanjut mengenai ${product.title}.`)}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto px-5 py-2.5 rounded-xl border border-slate-300 hover:bg-white text-slate-700 font-bold text-xs sm:text-sm flex items-center justify-center gap-2 transition-colors"
          >
            <MessageSquare className="w-4 h-4 text-emerald-600" />
            <span>Chat WhatsApp</span>
          </a>

          <button
            onClick={() => {
              onClose();
              onApply(product);
            }}
            className="w-full sm:w-auto px-6 py-2.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-extrabold text-xs sm:text-sm flex items-center justify-center gap-2 shadow-sm transition-colors"
          >
            <span>AJUKAN PRODUK INI</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};
