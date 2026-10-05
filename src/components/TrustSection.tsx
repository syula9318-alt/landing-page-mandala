import React from 'react';
import { Sparkles, UserCheck, ShieldCheck, Briefcase, Building2, CheckCircle } from 'lucide-react';

export const TrustSection: React.FC = () => {
  const cards = [
    {
      icon: Sparkles,
      iconBg: 'bg-blue-50 text-blue-700 border-blue-200',
      title: 'Proses Mudah',
      description: 'Dapatkan informasi pengajuan dengan proses yang mudah.',
      detail: 'Panduan langkah demi langkah tanpa proses administrasi yang membingungkan.',
    },
    {
      icon: UserCheck,
      iconBg: 'bg-amber-50 text-amber-700 border-amber-200',
      title: 'Dibantu Sales',
      description: 'Konsultasikan kebutuhan Anda langsung dengan sales.',
      detail: 'Mendampingi Anda mulai dari penentuan opsi produk hingga persiapan berkas.',
    },
    {
      icon: ShieldCheck,
      iconBg: 'bg-emerald-50 text-emerald-700 border-emerald-200',
      title: 'Informasi Transparan',
      description: 'Tampilkan informasi biaya, tenor, dan ketentuan secara jelas.',
      detail: 'Simulasi dan kalkulasi indikatif disajikan terbuka sebelum Anda memutuskan.',
    },
    {
      icon: Briefcase,
      iconBg: 'bg-indigo-50 text-indigo-700 border-indigo-200',
      title: 'Layanan Profesional',
      description: 'Dapatkan pendampingan selama proses pengajuan.',
      detail: 'Standar etika pembiayaan resmi yang menghormati privasi dan kenyamanan nasabah.',
    },
  ];

  return (
    <section className="py-20 lg:py-24 bg-white border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="flex items-center justify-center gap-2 text-xs font-bold uppercase tracking-wider text-blue-700">
            <span>Keunggulan Layanan</span>
            <span aria-hidden="true">·</span>
            <span>Mandala Finance</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight">
            KENAPA MEMILIH MANDALA FINANCE?
          </h2>
          <p className="text-base sm:text-lg text-slate-600 font-normal leading-relaxed">
            Komitmen kami adalah memberikan kemudahan akses pembiayaan yang aman, terpercaya, dan didampingi langsung oleh tenaga pemasar profesional.
          </p>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {cards.map((card, idx) => {
            const Icon = card.icon;
            return (
              <div
                key={card.title}
                className="group relative p-8 rounded-2xl bg-slate-50 hover:bg-white border border-slate-200/80 hover:border-blue-300 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className={`w-12 h-12 rounded-xl flex items-center justify-center border ${card.iconBg} shadow-sm group-hover:scale-110 transition-transform`}>
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-xs font-mono font-bold text-slate-400">
                      0{idx + 1}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-slate-900 mb-2.5">
                    {card.title}
                  </h3>

                  <p className="text-sm font-medium text-slate-700 leading-snug mb-3">
                    "{card.description}"
                  </p>

                  <p className="text-xs text-slate-500 leading-relaxed">
                    {card.detail}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-200/60 flex items-center gap-1.5 text-xs font-semibold text-blue-700">
                  <CheckCircle className="w-3.5 h-3.5" />
                  <span>Standar Resmi Mandala</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Corporate Trust Banner */}
        <div className="mt-14 p-6 sm:p-8 rounded-2xl bg-blue-900 text-white flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4 text-left">
            <div className="w-12 h-12 rounded-xl bg-blue-800/80 border border-blue-700 flex items-center justify-center shrink-0">
              <Building2 className="w-6 h-6 text-amber-400" />
            </div>
            <div>
              <h4 className="text-base sm:text-lg font-bold text-white">
                PT Mandala Multifinance Tbk
              </h4>
              <p className="text-xs sm:text-sm text-blue-200">
                Lembaga pembiayaan terdaftar dan diawasi oleh Otoritas Jasa Keuangan (OJK).
              </p>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-4 sm:gap-6 text-xs text-blue-200 font-medium">
            <div className="px-3.5 py-1.5 rounded-lg bg-blue-800/60 border border-blue-700/60 text-white font-semibold">
              Terdaftar & Diawasi OJK
            </div>
            <div className="px-3.5 py-1.5 rounded-lg bg-blue-800/60 border border-blue-700/60 text-white font-semibold">
              Anggota APPI
            </div>
            <div className="px-3.5 py-1.5 rounded-lg bg-blue-800/60 border border-blue-700/60 text-white font-semibold">
              27+ Tahun Melayani
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
