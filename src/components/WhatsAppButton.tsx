import React, { useState } from 'react';
import { MessageCircle, X } from 'lucide-react';
import { SALES_CONFIG, buildWhatsAppLink } from '../data/config';

export const WhatsAppButton: React.FC = () => {
  const [showTooltip, setShowTooltip] = useState(false);

  const defaultMessage = 'Halo, saya ingin mendapatkan informasi mengenai pembiayaan Mandala Finance.';
  const waUrl = buildWhatsAppLink(defaultMessage);

  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end">
      {/* Mini preview bubble */}
      {showTooltip && (
        <div className="mb-3 bg-white text-slate-800 p-3.5 rounded-2xl shadow-2xl border border-slate-200 max-w-xs animate-in fade-in slide-in-from-bottom-2 duration-200">
          <div className="flex items-start justify-between gap-2 mb-1">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
              <span className="text-xs font-bold text-slate-900">{SALES_CONFIG.name}</span>
            </div>
            <button
              onClick={() => setShowTooltip(false)}
              className="text-slate-400 hover:text-slate-600 p-0.5"
            >
              <X className="w-3.5 h-3.5" />
            </button>
          </div>
          <p className="text-[12px] text-slate-600 leading-snug">
            Ada pertanyaan seputar pembiayaan motor, mobil, atau multiguna? Chat langsung dengan saya!
          </p>
        </div>
      )}

      {/* Floating CTA Button */}
      <a
        href={waUrl}
        target="_blank"
        rel="noopener noreferrer"
        onMouseEnter={() => setShowTooltip(true)}
        className="group relative flex items-center gap-2.5 bg-emerald-600 hover:bg-emerald-500 text-white pl-4 pr-5 py-3.5 rounded-full shadow-xl shadow-emerald-700/30 transition-all duration-300 transform hover:scale-105 active:scale-95"
        aria-label="Chat WhatsApp Sales Mandala Finance"
      >
        <span className="relative flex h-3 w-3">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
          <span className="relative inline-flex rounded-full h-3 w-3 bg-white"></span>
        </span>

        <MessageCircle className="w-5 h-5 fill-current" />
        <span className="text-sm font-black tracking-wide">Chat Sales</span>
      </a>
    </div>
  );
};
