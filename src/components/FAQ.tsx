import React, { useState } from 'react';
import { ChevronDown, HelpCircle, MessageSquare } from 'lucide-react';
import { FAQ_DATA, buildWhatsAppLink } from '../data/config';

export const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-20 lg:py-28 bg-slate-50 border-b border-slate-200/80">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-blue-700">
            <HelpCircle className="w-4 h-4 text-blue-600" />
            <span>Pertanyaan Umum</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight">
            FREQUENTLY ASKED QUESTIONS
          </h2>
          <p className="text-base sm:text-lg text-slate-600 font-normal">
            Jawaban lengkap seputar proses pengajuan, persyaratan, dan simulasi pembiayaan.
          </p>
        </div>

        {/* Accordion List */}
        <div className="space-y-3">
          {FAQ_DATA.map((item, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className="bg-white rounded-2xl border border-slate-200/90 overflow-hidden transition-all duration-200 shadow-xs"
              >
                <button
                  type="button"
                  onClick={() => toggleAccordion(index)}
                  className="w-full py-5 px-6 sm:px-7 text-left flex items-center justify-between gap-4 transition-colors hover:bg-slate-50/80"
                  aria-expanded={isOpen}
                >
                  <span className="text-base sm:text-lg font-bold text-slate-900">
                    {item.question}
                  </span>
                  <div
                    className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-transform duration-300 ${
                      isOpen ? 'rotate-180 bg-blue-100 text-blue-700' : 'bg-slate-100 text-slate-500'
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-6 sm:px-7 pb-6 pt-1 text-slate-600 text-sm sm:text-base leading-relaxed border-t border-slate-100/80 animate-in fade-in duration-200">
                    <p>{item.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* More Questions Box */}
        <div className="mt-12 p-6 rounded-2xl bg-white border border-slate-200 text-center space-y-3">
          <p className="text-sm font-semibold text-slate-800">
            Punya pertanyaan lain yang belum terjawab di sini?
          </p>
          <div>
            <a
              href={buildWhatsAppLink('Halo, saya ingin menanyakan informasi pembiayaan Mandala Finance yang belum tercantum di FAQ.')}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-blue-50 text-blue-700 hover:bg-blue-100 text-xs sm:text-sm font-bold transition-colors"
            >
              <MessageSquare className="w-4 h-4 text-blue-700" />
              <span>Tanyakan Langsung ke Sales Kami</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
