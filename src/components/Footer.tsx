import React from 'react';
import { Phone, Mail, MapPin, Globe, Instagram, MessageCircle, Shield, Download } from 'lucide-react';
import { SALES_CONFIG, buildWhatsAppLink } from '../data/config';

export const Footer: React.FC = () => {
  const quickLinks = [
    { label: 'Beranda', href: '#beranda' },
    { label: 'Produk Pinjaman', href: '#produk' },
    { label: 'Simulasi', href: '#simulasi' },
    { label: 'Persyaratan', href: '#persyaratan' },
    { label: 'FAQ', href: '#faq' },
    { label: 'Kontak', href: '#kontak' },
  ];

  return (
    <footer className="bg-slate-950 text-slate-400 pt-16 pb-12 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-14 border-b border-slate-800/80">
          {/* Brand Info (4 cols) */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-lg bg-blue-700 flex items-center justify-center text-white font-extrabold text-base">
                M
              </div>
              <span className="text-xl font-extrabold text-white tracking-tight">
                MANDALA FINANCE
              </span>
            </div>

            <p className="text-sm text-slate-300 leading-relaxed">
              Solusi pembiayaan untuk kebutuhan Anda.
            </p>

            <p className="text-xs text-slate-400 leading-relaxed">
              Layanan perwakilan sales resmi untuk konsultasi pembiayaan motor, mobil, dan multiguna dengan proses transparan, aman, dan terpercaya.
            </p>

            <div className="pt-2 flex items-center gap-3">
              <a
                href={buildWhatsAppLink('Halo, saya ingin terhubung dengan sales Mandala Finance.')}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-slate-900 hover:bg-emerald-600 hover:text-white text-slate-300 border border-slate-800 flex items-center justify-center transition-colors"
                aria-label="WhatsApp"
              >
                <MessageCircle className="w-4 h-4" />
              </a>

              <a
                href="https://www.instagram.com/mandalafinance/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-slate-900 hover:bg-pink-600 hover:text-white text-slate-300 border border-slate-800 flex items-center justify-center transition-colors"
                aria-label="Instagram Resmi Mandala Finance"
              >
                <Instagram className="w-4 h-4" />
              </a>

              <a
                href="https://www.mandalafinance.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-slate-900 hover:bg-blue-600 hover:text-white text-slate-300 border border-slate-800 flex items-center justify-center transition-colors"
                aria-label="Website Resmi Mandala Finance"
              >
                <Globe className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links (3 cols) */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-200">
              Navigasi Halaman
            </h4>
            <ul className="space-y-2.5 text-sm">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="hover:text-amber-400 transition-colors inline-block"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
            <div className="pt-2">
              <a
                href="/mandala-finance-landing-page.zip"
                download="mandala-finance-landing-page.zip"
                className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-slate-900 hover:bg-slate-800 border border-slate-700 text-xs font-semibold text-slate-300 hover:text-white transition-colors"
                title="Download arsip ZIP seluruh file proyek"
              >
                <Download className="w-3.5 h-3.5 text-amber-400" />
                <span>Unduh File Proyek (.ZIP)</span>
              </a>
            </div>
          </div>

          {/* Sales & Branch Contact Info (5 cols) */}
          <div className="lg:col-span-5 space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-200">
              Informasi Kontak Sales & Kantor
            </h4>
            <ul className="space-y-3 text-xs sm:text-sm">
              <li className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                <span>
                  <strong>Kantor Cabang:</strong> {SALES_CONFIG.branch} (Melayani pengajuan area kota dan sekitarnya)
                </span>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>
                  <strong>WhatsApp Sales:</strong> {SALES_CONFIG.displayPhone} ({SALES_CONFIG.name})
                </span>
              </li>
              <li className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-blue-400 shrink-0" />
                <span>
                  <strong>Email Resmi:</strong> {SALES_CONFIG.email}
                </span>
              </li>
              <li className="flex items-center gap-2.5">
                <Globe className="w-4 h-4 text-indigo-400 shrink-0" />
                <span>
                  <strong>Jam Pelayanan:</strong> {SALES_CONFIG.workingHours}
                </span>
              </li>
            </ul>

            <div className="pt-2 flex items-center gap-2 text-xs text-slate-300">
              <Shield className="w-4 h-4 text-emerald-400" />
              <span>PT Mandala Multifinance Tbk berizin dan diawasi oleh OJK.</span>
            </div>
          </div>
        </div>

        {/* Mandatory Official Disclaimer & Copyright */}
        <div className="pt-8 space-y-4 text-xs text-slate-400 leading-relaxed">
          <div className="p-4 rounded-xl bg-slate-900 border border-slate-800">
            <strong className="text-slate-300">Disclaimer Penting: </strong>
            Website ini merupakan media informasi dan konsultasi sales. Informasi pembiayaan, persetujuan, biaya, bunga, tenor, dan persyaratan mengikuti ketentuan resmi Mandala Finance yang berlaku. Seluruh data yang dikirimkan calon nasabah hanya digunakan untuk keperluan verifikasi dan komunikasi penawaran pembiayaan resmi.
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-2 text-slate-400">
            <p>
              &copy; {new Date().getFullYear()} Mandala Finance Sales Portal. Hak Cipta Dilindungi.
            </p>
            <div className="flex items-center gap-4 text-xs">
              <a href="#persyaratan" className="hover:text-slate-200">
                Ketentuan Layanan
              </a>
              <span>·</span>
              <a href="#kontak" className="hover:text-slate-200">
                Kebijakan Privasi
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
