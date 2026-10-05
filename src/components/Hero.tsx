import React from 'react';
import { ArrowRight, CheckCircle2, Shield, UserCheck, Clock } from 'lucide-react';
import { SALES_CONFIG } from '../data/config';

interface HeroProps {
  onOpenConsultation: () => void;
  onExploreProducts: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenConsultation, onExploreProducts }) => {
  return (
    <section
      id="beranda"
      className="relative min-h-[92vh] lg:min-h-screen flex items-center pt-24 pb-16 lg:pt-28 lg:pb-20 overflow-hidden bg-slate-950 text-white"
    >
      {/* Background Ambience & Grid Pattern */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-950 via-slate-950 to-slate-950" />
        <div className="absolute top-0 right-0 w-[55rem] h-[55rem] bg-blue-600/15 rounded-full blur-3xl transform translate-x-1/4 -translate-y-1/4" />
        <div className="absolute bottom-0 left-0 w-[40rem] h-[40rem] bg-amber-500/10 rounded-full blur-3xl transform -translate-x-1/4 translate-y-1/4" />
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, white 1px, transparent 0)`,
            backgroundSize: '32px 32px',
          }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Headlines & CTA (7 cols on desktop) */}
          <div className="lg:col-span-7 flex flex-col items-start space-y-6 sm:space-y-8">
            {/* Quiet Regulatory & Domain Credibility Header */}
            <div className="flex items-center gap-2.5 text-xs sm:text-sm text-slate-300 font-medium">
              <span className="flex items-center gap-1.5 text-amber-400 font-semibold">
                <Shield className="w-4 h-4 text-amber-400" />
                Resmi Terdaftar & Diawasi OJK
              </span>
              <span className="text-slate-500" aria-hidden="true">·</span>
              <span className="text-slate-300">PT Mandala Multifinance Tbk</span>
            </div>

            {/* Oversized Responsive Headline */}
            <div className="space-y-2">
              <h1 className="text-4xl sm:text-6xl xl:text-7xl font-black tracking-tight text-white leading-[1.08] text-balance">
                BUTUH DANA? <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-amber-300 to-yellow-200">
                  SOLUSINYA DI SINI.
                </span>
              </h1>
            </div>

            {/* Subheadline */}
            <p className="text-base sm:text-xl text-slate-300 max-w-2xl leading-relaxed font-normal">
              Ajukan pembiayaan dengan proses yang mudah dan dapatkan informasi pinjaman langsung dari sales Mandala Finance.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto pt-2">
              <button
                onClick={onOpenConsultation}
                className="group px-8 py-4 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-extrabold text-base tracking-wide shadow-lg shadow-amber-500/20 transition-all duration-200 transform hover:-translate-y-0.5 active:translate-y-0 flex items-center justify-center gap-2.5"
              >
                <span>AJUKAN SEKARANG</span>
                <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
              </button>

              <button
                onClick={onExploreProducts}
                className="px-8 py-4 rounded-xl border border-slate-700 hover:border-slate-500 bg-slate-900/60 hover:bg-slate-800/80 text-white font-bold text-base tracking-wide transition-all duration-200 flex items-center justify-center gap-2"
              >
                LIHAT PRODUK
              </button>
            </div>

            {/* Direct Sales Badge & Trust Points */}
            <div className="pt-4 border-t border-slate-800/80 w-full flex flex-wrap items-center gap-y-3 gap-x-6 text-xs sm:text-sm text-slate-400">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Tanpa Biaya Konsultasi Awal</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Didampingi Sales Resmi</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Pencairan Dana Aman & Resmi</span>
              </div>
            </div>
          </div>

          {/* Right Column: Hero Visual Carrier with Floating Cards (5 cols) */}
          <div className="lg:col-span-5 relative mt-4 lg:mt-0">
            <div className="relative mx-auto max-w-lg lg:max-w-none">
              {/* Back Glow Effect */}
              <div className="absolute -inset-1.5 bg-gradient-to-r from-blue-600 to-amber-500 rounded-3xl blur-lg opacity-30 -z-10" />

              {/* Main Image Container */}
              <div className="relative rounded-2xl overflow-hidden border border-slate-700/80 shadow-2xl bg-slate-900 aspect-[4/3] sm:aspect-[16/11]">
                <img
                  src="/src/assets/images/hero_mandala_finance_1791195580252.jpg"
                  alt="Keluarga dan pengusaha tersenyum bersama pembiayaan Mandala Finance"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover object-center transform hover:scale-102 transition-transform duration-700"
                  onError={(e) => {
                    // Fallback to graceful styled container
                    e.currentTarget.style.display = 'none';
                  }}
                />
                {/* Contrast gradient overlay to blend nicely */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent pointer-events-none" />

                {/* Subtitle in visual bottom */}
                <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-xs text-slate-300 pointer-events-none">
                  <span className="font-semibold text-white drop-shadow">Pembiayaan Motor, Mobil & Multiguna</span>
                  <span className="bg-slate-900/80 backdrop-blur px-2.5 py-1 rounded text-amber-300 font-mono text-[11px] border border-slate-700/60">
                    27+ Tahun di Indonesia
                  </span>
                </div>
              </div>

              {/* Floating Information Card 1: PROSES MUDAH */}
              <div className="absolute -top-5 -left-4 sm:-left-8 z-20 bg-white/95 backdrop-blur-md text-slate-900 p-4 rounded-xl shadow-xl border border-slate-200/80 max-w-[210px] transform hover:-translate-y-1 transition-transform">
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-lg bg-blue-100 text-blue-700 flex items-center justify-center shrink-0">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <h2 className="text-xs font-black tracking-wider text-blue-800 uppercase">
                      PROSES MUDAH
                    </h2>
                    <p className="text-[12px] text-slate-600 font-medium leading-tight mt-0.5">
                      Informasi & bantuan dari sales
                    </p>
                  </div>
                </div>
              </div>

              {/* Floating Information Card 2: LAYANAN PERSONAL */}
              <div className="absolute -bottom-6 -right-4 sm:-right-6 z-20 bg-white/95 backdrop-blur-md text-slate-900 p-4 rounded-xl shadow-xl border border-slate-200/80 max-w-[220px] transform hover:-translate-y-1 transition-transform">
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-lg bg-amber-100 text-amber-700 flex items-center justify-center shrink-0">
                    <UserCheck className="w-5 h-5" />
                  </div>
                  <div>
                    <h2 className="text-xs font-black tracking-wider text-amber-800 uppercase">
                      LAYANAN PERSONAL
                    </h2>
                    <p className="text-[12px] text-slate-600 font-medium leading-tight mt-0.5">
                      Konsultasi langsung dengan sales
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
