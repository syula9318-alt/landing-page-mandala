/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { TrustSection } from './components/TrustSection';
import { ProductCards } from './components/ProductCards';
import { ProductModal } from './components/ProductModal';
import { LoanSimulator } from './components/LoanSimulator';
import { ApplicationSteps } from './components/ApplicationSteps';
import { Requirements } from './components/Requirements';
import { LeadForm, PrefillData } from './components/LeadForm';
import { FAQ } from './components/FAQ';
import { FinalCTA } from './components/FinalCTA';
import { Footer } from './components/Footer';
import { WhatsAppButton } from './components/WhatsAppButton';
import { ProductItem } from './data/config';

export default function App() {
  const [selectedProductForModal, setSelectedProductForModal] = useState<ProductItem | null>(null);
  const [leadFormPrefill, setLeadFormPrefill] = useState<PrefillData | null>(null);

  const scrollToLeadForm = () => {
    const el = document.getElementById('kontak');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToProducts = () => {
    const el = document.getElementById('produk');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleApplyForProduct = (product: ProductItem) => {
    setLeadFormPrefill({
      productTitle: product.title,
      amount: product.defaultPlafon,
      tenor: product.defaultTenor,
    });
    scrollToLeadForm();
  };

  const handleApplyWithSimulation = (details: {
    productTitle: string;
    amount: number;
    tenor: number;
    monthlyInstallment: number;
  }) => {
    setLeadFormPrefill({
      productTitle: details.productTitle,
      amount: details.amount,
      tenor: details.tenor,
      monthlyInstallment: details.monthlyInstallment,
    });
    scrollToLeadForm();
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans selection:bg-amber-400 selection:text-slate-950 flex flex-col">
      {/* 1. Sticky Navigation Bar */}
      <Navbar onOpenConsultation={scrollToLeadForm} />

      <main className="flex-grow">
        {/* 2. Hero Section */}
        <Hero
          onOpenConsultation={scrollToLeadForm}
          onExploreProducts={scrollToProducts}
        />

        {/* 3. Trust Section: Kenapa Memilih Mandala Finance? */}
        <TrustSection />

        {/* 4. Produk Pinjaman: Take Your Next Step */}
        <ProductCards
          onSelectProduct={(product) => setSelectedProductForModal(product)}
          onApplyForProduct={handleApplyForProduct}
        />

        {/* 5. Simulator Pinjaman Interaktif */}
        <LoanSimulator onApplyWithSimulation={handleApplyWithSimulation} />

        {/* 6. Cara Pengajuan: Ajukan Dalam 4 Langkah */}
        <ApplicationSteps onStartApplication={scrollToLeadForm} />

        {/* 7. Persyaratan: Siapkan Dokumen Anda */}
        <Requirements />

        {/* 8. Lead Form Konversi: Siap Konsultasi? */}
        <LeadForm prefill={leadFormPrefill} />

        {/* 10. Frequently Asked Questions (FAQ) Accordion */}
        <FAQ />

        {/* 11. Final CTA: Jangan Biarkan Kebutuhan Menunggu */}
        <FinalCTA onOpenConsultation={scrollToLeadForm} />
      </main>

      {/* 12. Footer Informasi Resmi & Disclaimer */}
      <Footer />

      {/* 9. Floating WhatsApp CTA Button */}
      <WhatsAppButton />

      {/* Modal Detail Produk */}
      <ProductModal
        product={selectedProductForModal}
        onClose={() => setSelectedProductForModal(null)}
        onApply={(product) => handleApplyForProduct(product)}
      />
    </div>
  );
}
