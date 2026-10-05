import React from 'react';
import { PhoneCall, FileEdit, CheckCircle2, Award } from 'lucide-react';
import { APPLICATION_STEPS } from '../data/config';

interface ApplicationStepsProps {
  onStartApplication: () => void;
}

export const ApplicationSteps: React.FC<ApplicationStepsProps> = ({ onStartApplication }) => {
  const stepIcons = [PhoneCall, FileEdit, CheckCircle2, Award];

  return (
    <section className="py-20 lg:py-28 bg-slate-900 text-white relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 opacity-90 pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[45rem] h-[20rem] bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20 space-y-3">
          <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-amber-400">
            <span>Alur Praktis</span>
            <span aria-hidden="true">·</span>
            <span>Mandala Finance</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight">
            AJUKAN DALAM 4 LANGKAH
          </h2>
          <p className="text-base sm:text-lg text-slate-300 font-normal">
            Alur pembiayaan terstruktur didampingi sales profesional dari awal hingga selesai.
          </p>
        </div>

        {/* Steps Grid (Horizontal Desktop, Vertical Mobile) */}
        <div className="relative">
          {/* Desktop connecting line */}
          <div className="hidden lg:block absolute top-1/2 left-12 right-12 h-0.5 bg-gradient-to-r from-blue-700 via-amber-500 to-emerald-500 -translate-y-8 z-0 opacity-40" />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10">
            {APPLICATION_STEPS.map((step, idx) => {
              const Icon = stepIcons[idx] || PhoneCall;
              return (
                <div
                  key={step.step}
                  className="bg-slate-800/80 backdrop-blur-md rounded-2xl p-6 sm:p-7 border border-slate-700/80 hover:border-amber-500/60 transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1 shadow-lg"
                >
                  <div>
                    {/* Top row: Number and Icon */}
                    <div className="flex items-center justify-between mb-5">
                      <span className="text-3xl sm:text-4xl font-black text-amber-400 font-mono tracking-tighter">
                        {step.step}
                      </span>
                      <div className="w-12 h-12 rounded-xl bg-slate-900/90 border border-slate-700 flex items-center justify-center text-blue-400 group-hover:text-amber-400 group-hover:border-amber-400/40 transition-colors">
                        <Icon className="w-6 h-6" />
                      </div>
                    </div>

                    {/* Step Title & Description */}
                    <h3 className="text-lg sm:text-xl font-black tracking-tight text-white mb-2">
                      {step.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-4">
                      {step.description}
                    </p>
                  </div>

                  {/* Step Highlight Footer */}
                  <div className="pt-3 border-t border-slate-700/60 text-[11px] font-semibold text-amber-300/90 flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-amber-400" />
                    <span>{step.highlight}</span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* CTA underneath steps */}
        <div className="mt-14 text-center">
          <button
            onClick={onStartApplication}
            className="px-8 py-3.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-extrabold text-sm tracking-wide shadow-lg shadow-amber-500/10 transition-all transform hover:-translate-y-0.5 active:translate-y-0"
          >
            MULAI LANGKAH 01 SEKARANG
          </button>
        </div>
      </div>
    </section>
  );
};
