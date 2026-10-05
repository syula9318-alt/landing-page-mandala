/**
 * Konfigurasi Sales & Data Landing Page Mandala Finance
 * Mudah disesuaikan oleh Sales / Administrator
 */

export interface SalesProfile {
  name: string;
  role: string;
  branch: string;
  whatsappNumber: string; // Format internasional tanpa simbol: '6281234567890'
  displayPhone: string;
  email: string;
  workingHours: string;
}

export const SALES_CONFIG: SalesProfile = {
  name: 'Budi Santoso',
  role: 'Senior Sales Executive Pembiayaan',
  branch: 'Mandala Finance Cabang Utama',
  whatsappNumber: '6281234567890', // Ubah nomor WhatsApp sales di sini
  displayPhone: '0812-3456-7890',
  email: 'sales.mandala@mandalafinance.co.id',
  workingHours: 'Senin - Sabtu: 08.00 - 17.00 WIB',
};

export interface ProductItem {
  id: string;
  title: string;
  badge: string;
  description: string;
  image: string;
  highlights: string[];
  features: {
    label: string;
    value: string;
  }[];
  collateral: string;
  suitableFor: string;
  defaultPlafon: number;
  minPlafon: number;
  maxPlafon: number;
  defaultTenor: number;
  tenors: number[];
}

export const PRODUCTS_DATA: ProductItem[] = [
  {
    id: 'motor',
    title: 'PEMBIAYAAN MOTOR',
    badge: 'Paling Populer',
    description: 'Solusi pembiayaan kendaraan roda dua untuk kebutuhan mobilitas harian Anda dengan proses cepat dan cicilan terencana.',
    image: '/src/assets/images/product_motorcycle_1791195596622.jpg',
    highlights: [
      'Pilihan motor baru maupun motor seken berkualitas',
      'Proses pendampingan langsung oleh tim sales',
      'Pilihan tenor fleksibel sesuai kemampuan'
    ],
    features: [
      { label: 'Jaminan / Agunan', value: 'BPKB Sepeda Motor' },
      { label: 'Pilihan Tenor', value: '6 s/d 36 Bulan' },
      { label: 'Peruntukan', value: 'Motor Baru & Bekas / Dana Tunai' },
      { label: 'Pendampingan', value: 'Sales Agent Resmi' },
    ],
    collateral: 'BPKB Motor',
    suitableFor: 'Kebutuhan transportasi kerja, ojek online, atau kendaraan keluarga.',
    defaultPlafon: 8000000,
    minPlafon: 3000000,
    maxPlafon: 35000000,
    defaultTenor: 12,
    tenors: [6, 12, 18, 24, 36],
  },
  {
    id: 'mobil',
    title: 'PEMBIAYAAN MOBIL',
    badge: 'Plafon Lebih Besar',
    description: 'Informasi pembiayaan kendaraan roda empat dengan pilihan tenor dan plafon sesuai ketentuan resmi yang berlaku.',
    image: '/src/assets/images/product_car_1791195613026.jpg',
    highlights: [
      'Plafon pembiayaan lebih besar untuk kebutuhan keluarga & armada usaha',
      'Proses verifikasi dokumen dibantu sales hingga tuntas',
      'Pilihan tenor hingga 48 bulan sesuai ketentuan'
    ],
    features: [
      { label: 'Jaminan / Agunan', value: 'BPKB Mobil Pribadi / Komersial' },
      { label: 'Pilihan Tenor', value: '12 s/d 48 Bulan' },
      { label: 'Peruntukan', value: 'Mobil Penumpang / Kendaraan Niaga' },
      { label: 'Pendampingan', value: 'Dedicated Sales Specialist' },
    ],
    collateral: 'BPKB Mobil',
    suitableFor: 'Mobil keluarga, operasional usaha, atau peningkatan kapasitas bisnis.',
    defaultPlafon: 50000000,
    minPlafon: 20000000,
    maxPlafon: 300000000,
    defaultTenor: 24,
    tenors: [12, 24, 36, 48],
  },
  {
    id: 'multiguna',
    title: 'PEMBIAYAAN MULTIGUNA',
    badge: 'Kebutuhan Fleksibel',
    description: 'Solusi pembiayaan untuk berbagai kebutuhan dana Anda seperti modal usaha, renovasi rumah, atau biaya pendidikan dengan jaminan BPKB.',
    image: '/src/assets/images/product_multiguna_1791195625030.jpg',
    highlights: [
      'Dana langsung dicairkan setelah persetujuan dan verifikasi',
      'Kendaraan tetap bisa digunakan untuk aktivitas harian Anda',
      'Konsultasi kebutuhan dana fleksibel bersama sales'
    ],
    features: [
      { label: 'Jaminan / Agunan', value: 'BPKB Motor atau Mobil' },
      { label: 'Pilihan Tenor', value: '6 s/d 36 Bulan' },
      { label: 'Peruntukan', value: 'Modal Usaha, Renovasi, Pendidikan' },
      { label: 'Fasilitas', value: 'Cek Taksasi Kendaraan Gratis' },
    ],
    collateral: 'BPKB Motor / Mobil',
    suitableFor: 'Pengembangan modal kerja UMKM, biaya pendidikan, renovasi, atau kebutuhan darurat.',
    defaultPlafon: 15000000,
    minPlafon: 3000000,
    maxPlafon: 150000000,
    defaultTenor: 12,
    tenors: [6, 12, 18, 24, 36],
  },
] as unknown as ProductItem[];

// Parameter simulator yang transparan dan dapat dikonfigurasi sales
// Catatan: Rumus ini adalah estimasi indikatif flat per bulan untuk simulasi awal
export const SIMULATOR_CONFIG = {
  // Estimasi rate flat bulanan indikatif untuk keperluan simulasi interaktif
  // (Dapat disesuaikan sesuai promo atau grade risiko resmi)
  monthlyEstimates: {
    motor: 0.0165, // ~1.65% flat indikatif per bulan
    mobil: 0.0125, // ~1.25% flat indikatif per bulan
    multiguna: 0.015, // ~1.5% flat indikatif per bulan
  },
  disclaimer:
    'Simulasi hanya merupakan estimasi dan bukan merupakan persetujuan pembiayaan. Hasil akhir, suku bunga, biaya administrasi, asuransi, dan keputusan pembiayaan mengikuti ketentuan resmi PT Mandala Multifinance Tbk yang berlaku setelah proses analisis dan verifikasi.',
};

export const TRUST_POINTS = [
  {
    title: 'Proses Mudah',
    description: 'Dapatkan informasi pengajuan dengan proses yang mudah tanpa prosedur yang berbelit.',
    icon: 'Sparkles',
  },
  {
    title: 'Dibantu Sales',
    description: 'Konsultasikan kebutuhan Anda langsung dengan sales yang siap mendampingi dari awal.',
    icon: 'UserCheck',
  },
  {
    title: 'Informasi Transparan',
    description: 'Tampilkan informasi biaya, tenor, dan ketentuan secara jelas tanpa rincian tersembunyi.',
    icon: 'ShieldCheck',
  },
  {
    title: 'Layanan Profesional',
    description: 'Dapatkan pendampingan selama proses pengajuan dengan standar etika dan layanan terbaik.',
    icon: 'Briefcase',
  },
];

export const APPLICATION_STEPS = [
  {
    step: '01',
    title: 'KONSULTASI',
    description: 'Hubungi sales dan sampaikan kebutuhan pembiayaan serta kondisi kendaraan Anda.',
    highlight: 'Gratis konsultasi via WhatsApp / Telepon',
  },
  {
    step: '02',
    title: 'ISI DATA',
    description: 'Lengkapi data diri dan siapkan dokumen yang diperlukan sesuai panduan sales.',
    highlight: 'Bisa dibantu pengisian form secara online',
  },
  {
    step: '03',
    title: 'VERIFIKASI',
    description: 'Data dan dokumen akan melalui proses verifikasi dan survei sesuai ketentuan resmi.',
    highlight: 'Jadwal survei fleksibel & transparan',
  },
  {
    step: '04',
    title: 'PROSES SELANJUTNYA',
    description: 'Ikuti proses pembiayaan sesuai hasil verifikasi dan persetujuan perusahaan.',
    highlight: 'Pencairan dana atau penyerahan unit',
  },
];

export const REQUIREMENTS_DATA = [
  {
    title: 'KTP & Identitas',
    desc: 'KTP pemohon dan pasangan (jika sudah menikah) yang masih berlaku.',
    icon: 'CreditCard',
    essential: true,
  },
  {
    title: 'Dokumen Pendukung',
    desc: 'Kartu Keluarga (KK) dan bukti tempat tinggal (PBB / Rek Listrik).',
    icon: 'FileText',
    essential: true,
  },
  {
    title: 'Data Kontak & Penghasilan',
    desc: 'Nomor WhatsApp aktif dan bukti kemampuan bayar (Slip gaji / mutasi rekening / nota usaha).',
    icon: 'PhoneCall',
    essential: true,
  },
  {
    title: 'Dokumen Tambahan (BPKB)',
    desc: 'STNK & BPKB asli atas nama sendiri atau keluarga untuk jaminan multiguna.',
    icon: 'Shield',
    essential: false,
  },
];

export const FAQ_DATA = [
  {
    question: 'Bagaimana cara mengajukan pembiayaan?',
    answer:
      'Anda dapat mengajukan pembiayaan dengan mengisi form online di website ini atau langsung menghubungi sales kami melalui tombol WhatsApp. Sales kami akan menghubungi Anda untuk menjelaskan langkah-langkah, membantu melengkapi formulir, dan memandu persiapan dokumen.',
  },
  {
    question: 'Apa saja dokumen yang diperlukan?',
    answer:
      'Dokumen dasar umumnya meliputi KTP pemohon & pasangan, Kartu Keluarga (KK), bukti tempat tinggal (PBB / rekening listrik), serta bukti penghasilan. Untuk pembiayaan dengan jaminan BPKB atau pembelian kendaraan, diperlukan STNK dan BPKB asli saat verifikasi.',
  },
  {
    question: 'Berapa lama proses pengajuan?',
    answer:
      'Waktu proses pengajuan tergantung pada kelengkapan dokumen dan jadwal survei/verifikasi. Dengan bantuan sales kami yang responsif, proses verifikasi data dapat dilakukan secara efektif sesuai ketentuan operasional yang berlaku.',
  },
  {
    question: 'Apakah saya bisa melakukan simulasi?',
    answer:
      'Tentu! Anda dapat menggunakan fitur Simulator Pinjaman di website ini untuk menghitung estimasi cicilan per bulan berdasarkan pilihan plafon dan tenor. Sales kami juga dapat membuatkan rincian simulasi resmi yang lebih detail sesuai jenis kendaraan Anda.',
  },
  {
    question: 'Bagaimana cara mengetahui status pengajuan?',
    answer:
      'Sales pendamping Anda akan memberikan pembaruan (update) berkala mengenai setiap tahapan—mulai dari penerimaan berkas, proses verifikasi survei, hingga terbitnya keputusan persetujuan pembiayaan.',
  },
  {
    question: 'Apakah persyaratan setiap produk berbeda?',
    answer:
      'Ya, persyaratan dapat berbeda tergantung jenis produk (Pembiayaan Motor Baru/Bekas, Mobil, atau Multiguna Dana Tunai) serta profil calon nasabah. Silakan konsultasikan dengan sales untuk mendapatkan daftar checklist dokumen yang tepat.',
  },
  {
    question: 'Bagaimana cara menghubungi sales?',
    answer:
      'Anda dapat langsung menekan tombol "Chat Sales" berwarna hijau di pojok kanan bawah layar, mengklik tombol "AJUKAN SEKARANG", atau mengisi form konsultasi di website ini.',
  },
];

/**
 * Utility helper untuk membuat WhatsApp link langsung
 */
export function buildWhatsAppLink(message: string, phone: string = SALES_CONFIG.whatsappNumber): string {
  const encoded = encodeURIComponent(message);
  return `https://wa.me/${phone}?text=${encoded}`;
}
