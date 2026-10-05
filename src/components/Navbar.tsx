import React, { useState, useEffect } from 'react';
import { Menu, X, Phone, MessageSquare } from 'lucide-react';
import { SALES_CONFIG, buildWhatsAppLink } from '../data/config';

interface NavbarProps {
  onOpenConsultation: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenConsultation }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 24) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Beranda', href: '#beranda' },
    { label: 'Produk Pinjaman', href: '#produk' },
    { label: 'Simulasi', href: '#simulasi' },
    { label: 'Persyaratan', href: '#persyaratan' },
    { label: 'FAQ', href: '#faq' },
    { label: 'Kontak', href: '#kontak' },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const targetElement = document.querySelector(href);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleApplyClick = () => {
    setMobileMenuOpen(false);
    onOpenConsultation();
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-md shadow-sm border-b border-slate-200/80 py-3.5'
          : 'bg-gradient-to-b from-slate-900/60 via-slate-900/20 to-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo / Brand Zone (Zone 1 of Top Bar Contract) */}
          <a
            href="#beranda"
            onClick={(e) => handleNavClick(e, '#beranda')}
            className="flex items-center gap-2.5 group"
          >
            <div className="w-9 h-9 rounded-lg bg-blue-700 flex items-center justify-center text-white font-extrabold text-xl shadow-sm tracking-tighter">
              M
            </div>
            <div className="flex flex-col">
              <span
                className={`text-lg sm:text-xl font-extrabold tracking-tight transition-colors ${
                  isScrolled ? 'text-slate-900' : 'text-white'
                }`}
              >
                MANDALA FINANCE
              </span>
            </div>
          </a>

          {/* Navigation Links (Zone 2 of Top Bar Contract) */}
          <nav className="hidden lg:flex items-center gap-7">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className={`text-sm font-semibold transition-colors duration-200 hover:text-amber-500 whitespace-nowrap ${
                  isScrolled ? 'text-slate-700' : 'text-white/90'
                }`}
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Action Zone (Zone 3 of Top Bar Contract) */}
          <div className="hidden sm:flex items-center gap-3">
            <a
              href={buildWhatsAppLink('Halo, saya ingin konsultasi pinjaman Mandala Finance.')}
              target="_blank"
              rel="noopener noreferrer"
              className={`p-2 rounded-lg text-sm font-medium transition-colors flex items-center gap-1.5 ${
                isScrolled
                  ? 'text-slate-700 hover:bg-slate-100'
                  : 'text-white/90 hover:bg-white/10'
              }`}
              title="Chat WhatsApp Sales"
            >
              <MessageSquare className="w-4 h-4 text-emerald-500" />
              <span className="hidden xl:inline text-xs font-semibold">Tanya Sales</span>
            </a>

            <button
              onClick={handleApplyClick}
              className="px-5 py-2.5 text-xs sm:text-sm font-bold tracking-wide rounded-lg bg-amber-500 hover:bg-amber-400 text-slate-950 shadow-sm transition-all duration-200 transform hover:-translate-y-0.5 active:translate-y-0 whitespace-nowrap"
            >
              AJUKAN SEKARANG
            </button>
          </div>

          {/* Mobile Hamburger Button */}
          <div className="flex items-center gap-2 sm:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className={`p-2 rounded-lg transition-colors ${
                isScrolled
                  ? 'text-slate-800 hover:bg-slate-100'
                  : 'text-white hover:bg-white/15'
              }`}
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="sm:hidden bg-white border-b border-slate-200 shadow-xl px-4 pt-3 pb-6 space-y-3 animate-in fade-in slide-in-from-top-4 duration-200">
          <div className="flex flex-col space-y-2 pt-1">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="px-3 py-2 rounded-md text-base font-semibold text-slate-800 hover:bg-slate-50 hover:text-blue-700 transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="pt-3 border-t border-slate-100 flex flex-col gap-2">
            <button
              onClick={handleApplyClick}
              className="w-full py-3 text-center text-sm font-bold tracking-wide rounded-lg bg-amber-500 hover:bg-amber-400 text-slate-950 shadow-sm"
            >
              AJUKAN SEKARANG
            </button>

            <a
              href={buildWhatsAppLink('Halo, saya ingin konsultasi pinjaman Mandala Finance.')}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-2.5 text-center text-xs font-semibold rounded-lg border border-slate-200 text-slate-700 hover:bg-slate-50 flex items-center justify-center gap-2"
            >
              <Phone className="w-4 h-4 text-emerald-600" />
              <span>WhatsApp Sales: {SALES_CONFIG.displayPhone}</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
