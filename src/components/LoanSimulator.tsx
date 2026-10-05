import React, { useState, useId } from 'react';
import { Calculator, ArrowRight, Info, Check, MessageSquare } from 'lucide-react';
import { PRODUCTS_DATA, SIMULATOR_CONFIG, buildWhatsAppLink } from '../data/config';

interface LoanSimulatorProps {
  onApplyWithSimulation: (details: {
    productTitle: string;
    amount: number;
    tenor: number;
    monthlyInstallment: number;
  }) => void;
}

export const LoanSimulator: React.FC<LoanSimulatorProps> = ({ onApplyWithSimulation }) => {
  const [selectedProductId, setSelectedProductId] = useState<string>('motor');
  const [amount, setAmount] = useState<number>(10000000);
  const [tenor, setTenor] = useState<number>(12);
  const [calculated, setCalculated] = useState<boolean>(true);
  const amountSliderId = useId();

  const currentProduct =
    PRODUCTS_DATA.find((p) => p.id === selectedProductId) || PRODUCTS_DATA[0];

  // Helper untuk format rupiah
  const formatRupiah = (val: number): string => {
    return new Intl.NumberFormat('id-ID', {
      style: 'currency',
      currency: 'IDR',
      maximumFractionDigits: 0,
    }).format(val);
  };

  // Kalkulasi estimasi cicilan indikatif (Pokok + Margin Flat Indikatif per bulan)
  const calculateInstallment = (principal: number, months: number, prodId: string): number => {
    const rate =
      SIMULATOR_CONFIG.monthlyEstimates[
        prodId as keyof typeof SIMULATOR_CONFIG.monthlyEstimates
      ] || 0.015;
    // Cicilan = (Pokok / Bulan) + (Pokok * Rate per bulan)
    const principalPerMonth = principal / months;
    const monthlyMargin = principal * rate;
    return Math.round(principalPerMonth + monthlyMargin);
  };

  const monthlyInstallment = calculateInstallment(amount, tenor, selectedProductId);

  // Switch product and reset bounds
  const handleProductChange = (prodId: string) => {
    setSelectedProductId(prodId);
    const prod = PRODUCTS_DATA.find((p) => p.id === prodId);
    if (prod) {
      setAmount(prod.defaultPlafon);
      setTenor(prod.defaultTenor);
    }
    setCalculated(true);
  };

  const handleManualAmountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const rawVal = e.target.value.replace(/\D/g, '');
    const num = Number(rawVal) || 0;
    setAmount(num);
  };

  const handleApplyClick = () => {
    onApplyWithSimulation({
      productTitle: currentProduct.title,
      amount,
      tenor,
      monthlyInstallment,
    });
  };

  const quickPresets =
    selectedProductId === 'motor'
      ? [5000000, 10000000, 15000000, 25000000]
      : selectedProductId === 'mobil'
      ? [30000000, 50000000, 100000000, 200000000]
      : [5000000, 15000000, 30000000, 75000000];

  const waMessage = `Halo Sales Mandala Finance, saya ingin konsultasi simulasi pembiayaan:\n- Produk: ${currentProduct.title}\n- Nilai: ${formatRupiah(amount)}\n- Tenor: ${tenor} Bulan\n- Estimasi: ${formatRupiah(monthlyInstallment)}/bulan\n\nMohon informasi persyaratan dan ketentuan selanjutnya.`;

  return (
    <section id="simulasi" className="py-20 lg:py-28 bg-white border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-blue-700">
            <Calculator className="w-4 h-4 text-blue-600" />
            <span>Kalkulator Pembiayaan</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight">
            SIMULASIKAN CICILAN ANDA
          </h2>
          <p className="text-base sm:text-lg text-slate-600 font-normal">
            Hitung perkiraan estimasi cicilan per bulan sesuai kebutuhan rencana keuangan Anda.
          </p>
        </div>

        {/* Simulator Card Box */}
        <div className="max-w-4xl mx-auto bg-slate-50 rounded-3xl border border-slate-200 shadow-xl overflow-hidden">
          {/* Product Category Selector Tabs */}
          <div className="p-2 sm:p-3 bg-slate-100/90 border-b border-slate-200 grid grid-cols-3 gap-1 sm:gap-2">
            {PRODUCTS_DATA.map((prod) => {
              const active = prod.id === selectedProductId;
              return (
                <button
                  key={prod.id}
                  onClick={() => handleProductChange(prod.id)}
                  className={`py-3 px-2 sm:px-4 rounded-xl text-xs sm:text-sm font-bold transition-all text-center ${
                    active
                      ? 'bg-blue-700 text-white shadow-md'
                      : 'text-slate-600 hover:text-slate-900 hover:bg-slate-200/60'
                  }`}
                >
                  <span className="block truncate">{prod.title.replace('PEMBIAYAAN ', '')}</span>
                </button>
              );
            })}
          </div>

          <div className="p-6 sm:p-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Input Controls (7 cols) */}
            <div className="lg:col-span-7 space-y-6">
              {/* Jumlah Pembiayaan */}
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <label htmlFor="jumlah-pembiayaan" className="text-sm font-bold text-slate-900">
                    Jumlah Pembiayaan
                  </label>
                  <span className="text-xs text-slate-500 font-medium">
                    Min: {formatRupiah(currentProduct.minPlafon)}
                  </span>
                </div>

                <div className="relative">
                  <span className="absolute left-4 top-1/2 -translate-y-1/2 font-bold text-slate-500 text-sm">
                    Rp
                  </span>
                  <input
                    id="jumlah-pembiayaan"
                    type="text"
                    value={amount ? amount.toLocaleString('id-ID') : ''}
                    onChange={handleManualAmountChange}
                    className="w-full pl-12 pr-4 py-3.5 rounded-xl border-2 border-slate-200 focus:border-blue-600 focus:ring-0 font-bold text-lg text-slate-900 bg-white transition-colors"
                    placeholder="Masukkan jumlah dana"
                  />
                </div>

                {/* Slider */}
                <div className="pt-2">
                  <label htmlFor={amountSliderId} className="sr-only">
                    Geser untuk mengatur jumlah pembiayaan
                  </label>
                  <input
                    id={amountSliderId}
                    type="range"
                    min={currentProduct.minPlafon}
                    max={currentProduct.maxPlafon}
                    step={1000000}
                    value={amount}
                    onChange={(e) => setAmount(Number(e.target.value))}
                    className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-blue-600"
                  />
                </div>

                {/* Preset Chips */}
                <div className="flex flex-wrap gap-2 pt-1">
                  {quickPresets.map((preset) => (
                    <button
                      key={preset}
                      type="button"
                      onClick={() => setAmount(preset)}
                      className={`text-xs font-semibold px-3 py-1.5 rounded-lg border transition-colors ${
                        amount === preset
                          ? 'bg-blue-50 border-blue-600 text-blue-700'
                          : 'bg-white border-slate-200 text-slate-600 hover:bg-slate-50'
                      }`}
                    >
                      {formatRupiah(preset)}
                    </button>
                  ))}
                </div>
              </div>

              {/* Tenor Selection */}
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <label htmlFor="tenor-select" className="text-sm font-bold text-slate-900">
                    Pilihan Tenor
                  </label>
                  <span className="text-xs text-slate-500 font-medium">Bulan Cicilan</span>
                </div>

                <div className="grid grid-cols-4 sm:grid-cols-5 gap-2">
                  {currentProduct.tenors.map((t) => (
                    <button
                      key={t}
                      type="button"
                      onClick={() => setTenor(t)}
                      className={`py-2.5 px-3 rounded-xl text-xs sm:text-sm font-bold border transition-all ${
                        tenor === t
                          ? 'bg-amber-500 border-amber-500 text-slate-950 shadow-sm'
                          : 'bg-white border-slate-200 text-slate-700 hover:border-slate-300'
                      }`}
                    >
                      {t} Bln
                    </button>
                  ))}
                </div>

                <div className="text-xs text-slate-500 flex items-center gap-1.5">
                  <Check className="w-3.5 h-3.5 text-emerald-600" />
                  <span>Jangka waktu fleksibel dapat disesuaikan kebutuhan arus kas</span>
                </div>
              </div>

              {/* Trigger Button */}
              <button
                type="button"
                onClick={() => setCalculated(true)}
                className="w-full py-3.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-bold text-sm transition-all flex items-center justify-center gap-2"
              >
                <Calculator className="w-4 h-4 text-amber-400" />
                <span>HITUNG SIMULASI</span>
              </button>
            </div>

            {/* Output Calculation Result (5 cols) */}
            <div className="lg:col-span-5 bg-white p-6 sm:p-7 rounded-2xl border border-slate-200 shadow-sm flex flex-col justify-between space-y-6">
              <div className="space-y-4">
                <div className="pb-3 border-b border-slate-100 flex items-center justify-between">
                  <span className="text-xs font-bold uppercase tracking-wider text-slate-500">
                    Hasil Simulasi
                  </span>
                  <span className="text-xs font-semibold px-2 py-0.5 rounded bg-blue-50 text-blue-700">
                    {currentProduct.title}
                  </span>
                </div>

                {/* Main Estimated Installment Display */}
                <div className="space-y-1">
                  <div className="text-xs text-slate-500 font-medium">Estimasi Cicilan per Bulan:</div>
                  <div className="text-3xl sm:text-4xl font-black text-blue-900 tracking-tight font-mono tabular-nums">
                    {formatRupiah(monthlyInstallment)}
                    <span className="text-sm font-bold text-slate-500"> / bulan</span>
                  </div>
                </div>

                {/* Calculation Summary Table */}
                <div className="space-y-2 pt-2 text-xs">
                  <div className="flex justify-between py-1.5 border-b border-slate-100 text-slate-600">
                    <span>Plafon Diajukan:</span>
                    <span className="font-bold text-slate-900 tabular-nums">{formatRupiah(amount)}</span>
                  </div>
                  <div className="flex justify-between py-1.5 border-b border-slate-100 text-slate-600">
                    <span>Jangka Waktu:</span>
                    <span className="font-bold text-slate-900">{tenor} Bulan</span>
                  </div>
                  <div className="flex justify-between py-1.5 border-b border-slate-100 text-slate-600">
                    <span>Pendampingan Sales:</span>
                    <span className="font-bold text-emerald-600">Gratis Konsultasi</span>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="space-y-3 pt-2">
                <button
                  type="button"
                  onClick={handleApplyClick}
                  className="w-full py-3.5 px-4 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-extrabold text-sm shadow-md transition-all flex items-center justify-center gap-2 transform hover:-translate-y-0.5"
                >
                  <span>AJUKAN DENGAN ESTIMASI INI</span>
                  <ArrowRight className="w-4 h-4" />
                </button>

                <a
                  href={buildWhatsAppLink(waMessage)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-2.5 px-4 rounded-xl border border-slate-300 hover:bg-slate-50 text-slate-700 font-bold text-xs flex items-center justify-center gap-2 transition-colors"
                >
                  <MessageSquare className="w-4 h-4 text-emerald-600" />
                  <span>Kirim Rincian ke WhatsApp Sales</span>
                </a>
              </div>
            </div>
          </div>

          {/* Mandatory Formal Disclaimer */}
          <div className="p-4 sm:p-5 bg-slate-100/80 border-t border-slate-200 text-[11px] sm:text-xs text-slate-500 leading-relaxed flex items-start gap-2.5">
            <Info className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
            <p>
              <strong className="text-slate-700">Disclaimer: </strong>
              {SIMULATOR_CONFIG.disclaimer}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
