import React from 'react';
import { ArrowRight, CheckCircle2, Search, FileBadge, Building2 } from 'lucide-react';

interface HeroProps {
  onOpenRegister: () => void;
  onOpenVerifier: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenRegister, onOpenVerifier }) => {
  return (
    <section className="relative bg-slate-900 text-white overflow-hidden pt-12 pb-16 lg:pt-16 lg:pb-20">
      {/* Background ambient lighting */}
      <div className="absolute inset-0 opacity-20 pointer-events-none">
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-blue-500 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-amber-500 rounded-full blur-3xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Split Hero: Typography & Value Prop vs High-Impact 16:9 Visual */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* Left Column: Proposition & CTAs */}
          <div className="lg:col-span-7 space-y-6">
            {/* Unboxed institutional metadata with typographic separator */}
            <div className="flex flex-wrap items-center gap-2 text-xs font-semibold text-amber-400">
              <span>Skill Academy by Ruangguru</span>
              <span aria-hidden="true" className="text-slate-500">·</span>
              <span>Mitra Resmi Kemnaker RI</span>
              <span aria-hidden="true" className="text-slate-500">·</span>
              <span className="text-emerald-400">VIN: 2020.10.SA-RUANGGURU.01</span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-tight" style={{ textWrap: 'balance' }}>
              Pendidikan Vokasi & Pelatihan Kerja Skill Academy Mitra Kemnaker RI
            </h1>

            <p className="text-base sm:text-lg text-slate-300 max-w-2xl leading-relaxed">
              Platform pelatihan kerja resmi dari <strong className="text-white font-semibold">Ruangguru (PT Ruang Raya Indonesia)</strong> yang bekerjasama dengan Kementerian Ketenagakerjaan RI. Mempersiapkan tenaga kerja bersertifikat <strong className="text-white font-semibold">BNSP & Kemnaker</strong>, akses beasiswa APBN 100% gratis, dan penyaluran kerja ke 240+ mitra industri.
            </p>

            {/* Credential checkmarks */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 text-sm text-slate-200">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Terakreditasi LA-LPK Predikat &quot;A&quot; Unggul</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Uji Kompetensi & Sertifikasi Lisensi BNSP</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Bursa Kerja Khusus (BKK) Terhubung SIAPkerja</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Tersedia Beasiswa Bantuan Penuh APBN Kemnaker</span>
              </div>
            </div>

            {/* Primary & Secondary Actions */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 pt-4">
              <button
                onClick={onOpenRegister}
                className="px-6 py-3.5 text-sm font-bold text-slate-950 bg-amber-400 hover:bg-amber-300 active:bg-amber-500 rounded-lg shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-2 cursor-pointer whitespace-nowrap"
              >
                <span>Daftar Pelatihan Gelombang III</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={onOpenVerifier}
                className="px-5 py-3.5 text-sm font-semibold text-white bg-slate-800/90 hover:bg-slate-700/90 border border-slate-700 rounded-lg transition-all flex items-center justify-center gap-2 cursor-pointer whitespace-nowrap"
              >
                <Search className="w-4 h-4 text-amber-400" />
                <span>Verifikasi Sertifikat Kelulusan</span>
              </button>
            </div>

            {/* Trust badge note */}
            <div className="text-xs text-slate-400 flex items-center gap-2 pt-2">
              <Building2 className="w-4 h-4 text-slate-400 shrink-0" />
              <span>Pendaftaran Gelombang III 2026 dibuka s/d 8 Mei 2026. Kuota terbatas per kelas.</span>
            </div>
          </div>

          {/* Right Column: High-Impact Visual Asset */}
          <div className="lg:col-span-5">
            <div className="relative rounded-2xl overflow-hidden border border-slate-700/80 bg-slate-800 shadow-2xl group">
              <div className="aspect-[16/10] sm:aspect-[16/9] lg:aspect-[4/3] w-full overflow-hidden bg-slate-800">
                <img
                  src="/src/assets/images/hero_vocational_kemnaker_1792989572059.jpg"
                  alt="Laboratorium dan Workshop Pelatihan Vokasi Kemnaker RI"
                  className="w-full h-full object-cover group-hover:scale-102 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                  onError={(e) => {
                    // Fallback to stylized container if image load fails
                    e.currentTarget.style.display = 'none';
                  }}
                />
              </div>

              {/* Verified Badge overlay at bottom */}
              <div className="p-4 bg-slate-900/90 backdrop-blur-sm border-t border-slate-800 flex items-center justify-between gap-4">
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-md bg-amber-400/10 border border-amber-400/30 flex items-center justify-center text-amber-400">
                    <FileBadge className="w-4 h-4" />
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-white">Standar Workshop Industri 4.0</p>
                    <p className="text-[11px] text-slate-400">Lab Mekatronika, Robotik & Workshop Pengelasan</p>
                  </div>
                </div>
                <div className="text-right">
                  <span className="text-[11px] font-mono text-emerald-400 font-semibold uppercase tracking-wider block">Standar SKKNI</span>
                  <span className="text-[10px] text-slate-400">Lisensi BNSP</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Full-width 4-column KPI strip below the hero split */}
        <div className="mt-14 pt-10 border-t border-slate-800/80 grid grid-cols-2 md:grid-cols-4 gap-6 lg:gap-8">
          <div className="space-y-1">
            <div className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white font-mono tabular-nums tracking-tight">
              18,450+
            </div>
            <p className="text-xs sm:text-sm text-slate-400 font-medium">Lulusan Tersertifikasi BNSP</p>
            <p className="text-[11px] text-slate-500">Sejak didirikan tahun 2014</p>
          </div>

          <div className="space-y-1">
            <div className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-amber-400 font-mono tabular-nums tracking-tight">
              94.2%
            </div>
            <p className="text-xs sm:text-sm text-slate-400 font-medium">Tingkat Penyerapan Kerja</p>
            <p className="text-[11px] text-slate-500">Terserap dalam 90 hari pasca kelulusan</p>
          </div>

          <div className="space-y-1">
            <div className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white font-mono tabular-nums tracking-tight">
              240+
            </div>
            <p className="text-xs sm:text-sm text-slate-400 font-medium">Mitra Industri & BUMN</p>
            <p className="text-[11px] text-slate-500">MoU rekrutmen & pemagangan resmi</p>
          </div>

          <div className="space-y-1">
            <div className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-emerald-400 font-mono tabular-nums tracking-tight">
              100%
            </div>
            <p className="text-xs sm:text-sm text-slate-400 font-medium">Berstandar SKKNI & Kemnaker</p>
            <p className="text-[11px] text-slate-500">Diakui di pasar kerja nasional & ASEAN</p>
          </div>
        </div>
      </div>
    </section>
  );
};
