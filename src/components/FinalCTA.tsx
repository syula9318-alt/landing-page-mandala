import React from 'react';
import { ArrowRight, MessageSquare, ShieldCheck, Clock, Award } from 'lucide-react';
import { buildWhatsAppLink } from '../data/config';

interface FinalCTAProps {
  onOpenConsultation: () => void;
}

export const FinalCTA: React.FC<FinalCTAProps> = ({ onOpenConsultation }) => {
  return (
    <section className="py-20 lg:py-28 bg-gradient-to-br from-blue-950 via-blue-900 to-slate-950 text-white relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl" />
        <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/10 backdrop-blur-md border border-white/15 text-amber-300 text-xs font-bold uppercase tracking-wider">
          <Award className="w-3.5 h-3.5" />
          <span>Layanan Sales Terpercaya</span>
        </div>

        <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-white max-w-3xl mx-auto leading-tight text-balance">
          JANGAN BIARKAN KEBUTUHAN MENUNGGU.
        </h2>

        <p className="text-base sm:text-xl text-blue-100 max-w-2xl mx-auto font-normal leading-relaxed">
          Konsultasikan kebutuhan pembiayaan Anda bersama sales Mandala Finance.
        </p>

        {/* Action Buttons */}
        <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-4 max-w-md mx-auto">
          <button
            onClick={onOpenConsultation}
            className="w-full sm:w-auto px-8 py-4 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-black text-base tracking-wide shadow-xl shadow-amber-500/20 transition-all transform hover:-translate-y-0.5 active:translate-y-0 flex items-center justify-center gap-2"
          >
            <span>AJUKAN SEKARANG</span>
            <ArrowRight className="w-5 h-5" />
          </button>

          <a
            href={buildWhatsAppLink('Halo, saya ingin konsultasi pinjaman Mandala Finance sekarang.')}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto px-7 py-4 rounded-xl bg-white/10 hover:bg-white/20 border border-white/20 text-white font-bold text-base transition-colors flex items-center justify-center gap-2"
          >
            <MessageSquare className="w-5 h-5 text-emerald-400" />
            <span>Chat WhatsApp</span>
          </a>
        </div>

        {/* Bottom Trust Indicators */}
        <div className="pt-8 border-t border-white/10 flex flex-wrap items-center justify-center gap-y-3 gap-x-8 text-xs text-blue-200">
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-emerald-400" />
            <span>Berizin & Diawasi OJK</span>
          </div>
          <div className="flex items-center gap-2">
            <Clock className="w-4 h-4 text-amber-400" />
            <span>Respons Cepat oleh Sales</span>
          </div>
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-blue-300" />
            <span>Keamanan Data Terjamin</span>
          </div>
        </div>
      </div>
    </section>
  );
};
