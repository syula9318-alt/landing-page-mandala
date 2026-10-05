import React from 'react';
import { CreditCard, FileText, PhoneCall, Shield, AlertCircle, Check } from 'lucide-react';
import { REQUIREMENTS_DATA } from '../data/config';

export const Requirements: React.FC = () => {
  const iconMap: Record<string, React.ElementType> = {
    CreditCard,
    FileText,
    PhoneCall,
    Shield,
  };

  return (
    <section id="persyaratan" className="py-20 lg:py-28 bg-slate-50 border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-blue-700">
            <FileText className="w-4 h-4 text-blue-600" />
            <span>Kelengkapan Berkas</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight">
            SIAPKAN DOKUMEN ANDA
          </h2>
          <p className="text-base sm:text-lg text-slate-600 font-normal">
            Kemudahan pengajuan diawali dengan kelengkapan berkas yang rapi dan jelas.
          </p>
        </div>

        {/* Requirements Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {REQUIREMENTS_DATA.map((item, idx) => {
            const Icon = iconMap[item.icon] || FileText;
            return (
              <div
                key={idx}
                className="bg-white rounded-2xl p-7 border border-slate-200/80 shadow-sm hover:shadow-md transition-all duration-200 flex flex-col justify-between"
              >
                <div>
                  <div className="w-12 h-12 rounded-xl bg-blue-50 text-blue-700 border border-blue-100 flex items-center justify-center mb-5">
                    <Icon className="w-6 h-6" />
                  </div>

                  <h3 className="text-lg font-extrabold text-slate-900 mb-2">
                    {item.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {item.desc}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between text-xs">
                  <span className="font-semibold text-slate-400">
                    {item.essential ? 'Dokumen Utama' : 'Kondisional'}
                  </span>
                  <span className="flex items-center gap-1 text-emerald-600 font-bold">
                    <Check className="w-3.5 h-3.5" />
                    Siap Dibantu
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Mandatory Note Box */}
        <div className="mt-10 p-5 rounded-2xl bg-amber-50/70 border border-amber-200/80 max-w-4xl mx-auto flex items-start gap-3 text-xs sm:text-sm text-amber-900">
          <AlertCircle className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
          <div className="space-y-1">
            <p className="font-bold">Ketentuan Persyaratan:</p>
            <p className="text-amber-800 leading-relaxed">
              Persyaratan dapat berbeda sesuai jenis pembiayaan dan ketentuan yang berlaku. Daftar di atas merupakan panduan awal dan bukan merupakan persyaratan final sebelum diverifikasi dengan informasi resmi Mandala Finance saat proses survei.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
