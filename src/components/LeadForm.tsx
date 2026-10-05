import React, { useState, useEffect } from 'react';
import { Send, CheckCircle2, MessageSquare, AlertCircle, Phone, ArrowUpRight, RotateCcw } from 'lucide-react';
import { SALES_CONFIG, PRODUCTS_DATA, buildWhatsAppLink } from '../data/config';

export interface PrefillData {
  productTitle?: string;
  amount?: number;
  tenor?: number;
  monthlyInstallment?: number;
}

interface LeadFormProps {
  prefill?: PrefillData | null;
}

export const LeadForm: React.FC<LeadFormProps> = ({ prefill }) => {
  const [fullName, setFullName] = useState('');
  const [whatsapp, setWhatsapp] = useState('');
  const [city, setCity] = useState('');
  const [productType, setProductType] = useState('PEMBIAYAAN MOTOR');
  const [loanAmount, setLoanAmount] = useState('');
  const [message, setMessage] = useState('');

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submittedData, setSubmittedData] = useState<any>(null);

  // Apply prefill if provided
  useEffect(() => {
    if (prefill) {
      if (prefill.productTitle) {
        setProductType(prefill.productTitle);
      }
      if (prefill.amount) {
        setLoanAmount(prefill.amount.toLocaleString('id-ID'));
      }
      if (prefill.tenor && prefill.monthlyInstallment) {
        setMessage(
          `Simulasi: ${prefill.productTitle} Rp ${prefill.amount?.toLocaleString(
            'id-ID'
          )} tenor ${prefill.tenor} bulan, estimasi cicilan Rp ${prefill.monthlyInstallment?.toLocaleString(
            'id-ID'
          )}/bln.`
        );
      }
    }
  }, [prefill]);

  // Validasi nomor WhatsApp Indonesia
  const validatePhone = (phone: string): boolean => {
    const cleaned = phone.replace(/[\s-]/g, '');
    // Nomor HP Indonesia: mulai dari 08... atau 628... minimal 9 digit, maks 15 digit
    const regex = /^(08|628|\+628)[0-9]{7,12}$/;
    return regex.test(cleaned);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newErrors: Record<string, string> = {};

    if (!fullName.trim()) {
      newErrors.fullName = 'Nama lengkap wajib diisi.';
    }

    if (!whatsapp.trim()) {
      newErrors.whatsapp = 'Nomor WhatsApp wajib diisi.';
    } else if (!validatePhone(whatsapp)) {
      newErrors.whatsapp = 'Format nomor WhatsApp tidak valid (contoh: 081234567890).';
    }

    if (!city.trim()) {
      newErrors.city = 'Kota atau domisili wajib diisi.';
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setErrors({});
    setIsSubmitting(true);

    const record = {
      fullName,
      whatsapp,
      city,
      productType,
      loanAmount: loanAmount || 'Belum ditentukan',
      message: message || 'Ingin konsultasi informasi pembiayaan',
      timestamp: new Date().toISOString(),
    };

    // Simulate submission delay
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setSubmittedData(record);
    }, 600);
  };

  // Buat pesan WhatsApp yang rapi dan terstruktur untuk sales
  const generateWhatsAppMessage = () => {
    if (!submittedData) return '';
    return `Halo Sales Mandala Finance,\n\nSaya ingin konsultasi pengajuan pembiayaan dengan rincian berikut:\n- Nama: ${submittedData.fullName}\n- WhatsApp: ${submittedData.whatsapp}\n- Domisili: ${submittedData.city}\n- Jenis Pembiayaan: ${submittedData.productType}\n- Nilai Pembiayaan: Rp ${submittedData.loanAmount}\n- Pesan/Kebutuhan: ${submittedData.message}\n\nMohon informasi persyaratan dan prosedur selanjutnya. Terima kasih.`;
  };

  const handleResetForm = () => {
    setIsSubmitted(false);
    setSubmittedData(null);
    setFullName('');
    setWhatsapp('');
    setCity('');
    setLoanAmount('');
    setMessage('');
  };

  return (
    <section id="kontak" className="py-20 lg:py-28 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-12 sm:mb-16 space-y-3">
            <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-amber-600">
              <Phone className="w-4 h-4 text-amber-600" />
              <span>Formulir Pengajuan & Konsultasi</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight">
              SIAP KONSULTASI?
            </h2>
            <p className="text-base sm:text-lg text-slate-600 font-normal max-w-2xl mx-auto">
              Isi data Anda. Sales kami akan membantu memberikan informasi mengenai pilihan pembiayaan yang sesuai.
            </p>
          </div>

          {/* Form Container Card */}
          <div className="bg-slate-50 border border-slate-200/90 rounded-3xl p-6 sm:p-10 shadow-xl relative overflow-hidden">
            {isSubmitted ? (
              /* Success State View */
              <div className="text-center py-6 sm:py-8 space-y-6 animate-in zoom-in-95 duration-300">
                <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto shadow-sm">
                  <CheckCircle2 className="w-10 h-10" />
                </div>

                <div className="space-y-2 max-w-lg mx-auto">
                  <h3 className="text-2xl font-black text-slate-900">
                    Data Berhasil Terkirim!
                  </h3>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    Terima kasih, <strong className="text-slate-900">{submittedData.fullName}</strong>. Sales resmi Mandala Finance (<strong className="text-blue-700">{SALES_CONFIG.name}</strong>) siap membantu Anda.
                  </p>
                </div>

                {/* Lead Summary Box */}
                <div className="p-4 sm:p-5 rounded-2xl bg-white border border-slate-200 text-left text-xs sm:text-sm space-y-2 max-w-md mx-auto shadow-sm">
                  <div className="flex justify-between py-1 border-b border-slate-100">
                    <span className="text-slate-500">Nomor WhatsApp:</span>
                    <span className="font-bold text-slate-900">{submittedData.whatsapp}</span>
                  </div>
                  <div className="flex justify-between py-1 border-b border-slate-100">
                    <span className="text-slate-500">Kota / Domisili:</span>
                    <span className="font-bold text-slate-900">{submittedData.city}</span>
                  </div>
                  <div className="flex justify-between py-1 border-b border-slate-100">
                    <span className="text-slate-500">Jenis Produk:</span>
                    <span className="font-bold text-blue-700">{submittedData.productType}</span>
                  </div>
                  <div className="flex justify-between py-1">
                    <span className="text-slate-500">Status Pengiriman:</span>
                    <span className="font-bold text-emerald-600 flex items-center gap-1">
                      <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                      Tersimpan & Siap Dihubungi
                    </span>
                  </div>
                </div>

                {/* Instant WhatsApp Action Button */}
                <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3 max-w-md mx-auto">
                  <a
                    href={buildWhatsAppLink(generateWhatsAppMessage())}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full py-4 px-6 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-extrabold text-sm flex items-center justify-center gap-2 shadow-lg shadow-emerald-600/20 transition-all transform hover:-translate-y-0.5"
                  >
                    <MessageSquare className="w-5 h-5" />
                    <span>BUKA WHATSAPP SEKARANG</span>
                    <ArrowUpRight className="w-4 h-4" />
                  </a>

                  <button
                    onClick={handleResetForm}
                    className="w-full sm:w-auto py-3 px-5 rounded-xl border border-slate-300 hover:bg-slate-100 text-slate-700 text-xs font-bold flex items-center justify-center gap-1.5 transition-colors"
                  >
                    <RotateCcw className="w-3.5 h-3.5" />
                    <span>Kirim Ulang Data Lain</span>
                  </button>
                </div>

                <p className="text-[11px] text-slate-400">
                  Data Anda dijaga kerahasiaannya sesuai ketentuan perlindungan privasi Mandala Finance.
                </p>
              </div>
            ) : (
              /* Active Form View */
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {/* Nama Lengkap */}
                  <div className="space-y-2">
                    <label htmlFor="fullname" className="block text-xs font-bold uppercase tracking-wider text-slate-700">
                      Nama Lengkap <span className="text-rose-500">*</span>
                    </label>
                    <input
                      id="fullname"
                      type="text"
                      value={fullName}
                      onChange={(e) => setFullName(e.target.value)}
                      placeholder="Contoh: Andi Pratama"
                      className={`w-full px-4 py-3.5 rounded-xl bg-white border ${
                        errors.fullName ? 'border-rose-500 focus:ring-rose-500' : 'border-slate-300 focus:border-blue-600'
                      } text-slate-900 text-sm font-medium focus:outline-none focus:ring-1 transition-colors`}
                    />
                    {errors.fullName && (
                      <p className="text-xs text-rose-500 flex items-center gap-1">
                        <AlertCircle className="w-3.5 h-3.5" />
                        {errors.fullName}
                      </p>
                    )}
                  </div>

                  {/* Nomor WhatsApp */}
                  <div className="space-y-2">
                    <label htmlFor="whatsapp" className="block text-xs font-bold uppercase tracking-wider text-slate-700">
                      Nomor WhatsApp <span className="text-rose-500">*</span>
                    </label>
                    <input
                      id="whatsapp"
                      type="tel"
                      value={whatsapp}
                      onChange={(e) => setWhatsapp(e.target.value)}
                      placeholder="Contoh: 081234567890"
                      className={`w-full px-4 py-3.5 rounded-xl bg-white border ${
                        errors.whatsapp ? 'border-rose-500 focus:ring-rose-500' : 'border-slate-300 focus:border-blue-600'
                      } text-slate-900 text-sm font-medium focus:outline-none focus:ring-1 transition-colors`}
                    />
                    {errors.whatsapp ? (
                      <p className="text-xs text-rose-500 flex items-center gap-1">
                        <AlertCircle className="w-3.5 h-3.5" />
                        {errors.whatsapp}
                      </p>
                    ) : (
                      <p className="text-[11px] text-slate-500">
                        Sales akan menghubungi Anda melalui chat WhatsApp.
                      </p>
                    )}
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {/* Kota */}
                  <div className="space-y-2">
                    <label htmlFor="city" className="block text-xs font-bold uppercase tracking-wider text-slate-700">
                      Kota / Domisili <span className="text-rose-500">*</span>
                    </label>
                    <input
                      id="city"
                      type="text"
                      value={city}
                      onChange={(e) => setCity(e.target.value)}
                      placeholder="Contoh: Bandung, Surabaya, Medan, dll."
                      className={`w-full px-4 py-3.5 rounded-xl bg-white border ${
                        errors.city ? 'border-rose-500 focus:ring-rose-500' : 'border-slate-300 focus:border-blue-600'
                      } text-slate-900 text-sm font-medium focus:outline-none focus:ring-1 transition-colors`}
                    />
                    {errors.city && (
                      <p className="text-xs text-rose-500 flex items-center gap-1">
                        <AlertCircle className="w-3.5 h-3.5" />
                        {errors.city}
                      </p>
                    )}
                  </div>

                  {/* Jenis Pembiayaan */}
                  <div className="space-y-2">
                    <label htmlFor="productType" className="block text-xs font-bold uppercase tracking-wider text-slate-700">
                      Jenis Pembiayaan <span className="text-rose-500">*</span>
                    </label>
                    <select
                      id="productType"
                      value={productType}
                      onChange={(e) => setProductType(e.target.value)}
                      className="w-full px-4 py-3.5 rounded-xl bg-white border border-slate-300 focus:border-blue-600 text-slate-900 text-sm font-medium focus:outline-none focus:ring-1 transition-colors cursor-pointer"
                    >
                      {PRODUCTS_DATA.map((p) => (
                        <option key={p.id} value={p.title}>
                          {p.title}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* Jumlah Dana / Nilai Kendaraan */}
                <div className="space-y-2">
                  <label htmlFor="amount" className="block text-xs font-bold uppercase tracking-wider text-slate-700">
                    Jumlah Dana / Nilai Kendaraan
                  </label>
                  <div className="relative">
                    <span className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 font-bold text-sm">
                      Rp
                    </span>
                    <input
                      id="amount"
                      type="text"
                      value={loanAmount}
                      onChange={(e) => setLoanAmount(e.target.value)}
                      placeholder="Contoh: 15.000.000"
                      className="w-full pl-12 pr-4 py-3.5 rounded-xl bg-white border border-slate-300 focus:border-blue-600 text-slate-900 text-sm font-medium focus:outline-none focus:ring-1 transition-colors"
                    />
                  </div>
                </div>

                {/* Pesan */}
                <div className="space-y-2">
                  <label htmlFor="message" className="block text-xs font-bold uppercase tracking-wider text-slate-700">
                    Pesan / Keterangan Tambahan
                  </label>
                  <textarea
                    id="message"
                    rows={3}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Contoh: Butuh dana cepat untuk modal usaha warung / jaminan BPKB motor Honda Vario 2021..."
                    className="w-full px-4 py-3 rounded-xl bg-white border border-slate-300 focus:border-blue-600 text-slate-900 text-sm font-medium focus:outline-none focus:ring-1 transition-colors resize-none"
                  />
                </div>

                {/* Big Action Button */}
                <div className="pt-2">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-4 px-6 rounded-2xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-black text-base tracking-wide shadow-lg shadow-amber-500/25 transition-all duration-200 transform hover:-translate-y-0.5 active:translate-y-0 flex items-center justify-center gap-2 cursor-pointer disabled:opacity-75"
                  >
                    {isSubmitting ? (
                      <span>Memproses Data...</span>
                    ) : (
                      <>
                        <Send className="w-5 h-5" />
                        <span>HUBUNGI SALES</span>
                      </>
                    )}
                  </button>
                </div>

                <div className="text-center">
                  <p className="text-[11px] text-slate-500">
                    Dengan menekan tombol di atas, Anda setuju untuk dihubungi oleh perwakilan sales resmi Mandala Finance.
                  </p>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
