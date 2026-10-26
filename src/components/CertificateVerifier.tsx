import React, { useState } from 'react';
import { Search, ShieldCheck, CheckCircle2, Award, Printer, AlertCircle, FileText, QrCode } from 'lucide-react';
import { VERIFIED_CERTIFICATES, VerifiedCertificate } from '../data/mockData';

export const CertificateVerifier: React.FC = () => {
  const [inputVal, setInputVal] = useState<string>('SA-KMNK-2024-88421');
  const [activeCert, setActiveCert] = useState<VerifiedCertificate | null>(VERIFIED_CERTIFICATES[0]);
  const [notFound, setNotFound] = useState<boolean>(false);
  const [isSearching, setIsSearching] = useState<boolean>(false);

  const handleSearch = (codeToSearch: string) => {
    setIsSearching(true);
    setNotFound(false);
    const clean = codeToSearch.trim().toUpperCase();

    setTimeout(() => {
      const found = VERIFIED_CERTIFICATES.find(
        (c) =>
          c.certificateNumber.toUpperCase() === clean ||
          c.nik === clean ||
          c.registrationNumberKemnaker.toUpperCase().includes(clean)
      );

      if (found) {
        setActiveCert(found);
        setNotFound(false);
      } else {
        setActiveCert(null);
        setNotFound(true);
      }
      setIsSearching(false);
    }, 250);
  };

  const sampleCertificates = [
    { code: 'SA-KMNK-2024-88421', name: 'Rizky (Mekatronika)' },
    { code: 'SA-BNSP-99120', name: 'Dewi (Fullstack AI)' },
    { code: 'SA-K3-RI-44719', name: 'Budi (AK3U Kemnaker)' },
    { code: 'SA-WELD-2024-31', name: 'Fauzi (Welder 6G)' }
  ];

  return (
    <section id="cek-sertifikat" className="py-16 sm:py-20 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="flex items-center justify-center gap-2 text-xs font-semibold text-blue-900 mb-2">
            <span>Sistem Informasi Kredensial Kerja Nasional</span>
            <span aria-hidden="true">·</span>
            <span>SIAPkerja Kemnaker RI</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight">
            Verifikasi Keaslian Sertifikat BNSP & Kemnaker
          </h2>
          <p className="mt-3 text-slate-600 text-sm sm:text-base leading-relaxed">
            Pusat validasi data kelulusan peserta pelatihan untuk mempermudah HRD dan perusahaan mitra memverifikasi legalitas kompetensi tenaga kerja secara instan dan akurat.
          </p>
        </div>

        {/* Search Bar & Sample Pills */}
        <div className="max-w-3xl mx-auto mb-10">
          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleSearch(inputVal);
            }}
            className="flex flex-col sm:flex-row gap-2.5"
          >
            <div className="relative flex-1">
              <input
                type="text"
                value={inputVal}
                onChange={(e) => setInputVal(e.target.value)}
                placeholder="Masukkan Nomor Sertifikat (cth: KMNK-2024-88421) atau NIK..."
                className="w-full px-4 py-3.5 bg-slate-50 border border-slate-300 rounded-lg text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-900 focus:border-transparent transition-all"
              />
            </div>
            <button
              type="submit"
              disabled={isSearching}
              className="px-6 py-3.5 bg-blue-900 hover:bg-blue-800 text-white font-bold text-sm rounded-lg shadow-sm transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-70 whitespace-nowrap"
            >
              <Search className="w-4 h-4" />
              <span>{isSearching ? 'Memvalidasi...' : 'Verifikasi Sekarang'}</span>
            </button>
          </form>

          {/* Quick Sample Selector */}
          <div className="mt-3 flex flex-wrap items-center gap-2 text-xs text-slate-500">
            <span className="font-medium text-slate-700">Contoh data uji verifikasi:</span>
            {sampleCertificates.map((sample) => (
              <button
                key={sample.code}
                type="button"
                onClick={() => {
                  setInputVal(sample.code);
                  handleSearch(sample.code);
                }}
                className="px-2.5 py-1 rounded bg-slate-100 hover:bg-slate-200 text-slate-700 font-mono text-[11px] border border-slate-200 transition-colors cursor-pointer"
              >
                {sample.code} ({sample.name})
              </button>
            ))}
          </div>
        </div>

        {/* Search Result Output */}
        {notFound && (
          <div className="max-w-3xl mx-auto p-6 rounded-xl border border-red-200 bg-red-50/70 text-center">
            <AlertCircle className="w-8 h-8 text-red-500 mx-auto mb-2" />
            <h3 className="font-bold text-red-900 text-sm">Nomor Sertifikat Tidak Terdaftar</h3>
            <p className="text-xs text-red-700 mt-1">
              Nomor <strong className="font-mono">{inputVal}</strong> tidak ditemukan pada pangkalan data lulusan resmi LPK Vokasi Nusantara & Kemnaker RI. Pastikan penulisan nomor dan tanda hubung sudah benar.
            </p>
          </div>
        )}

        {activeCert && (
          <div className="max-w-4xl mx-auto bg-slate-50 rounded-2xl border border-slate-300 shadow-sm overflow-hidden animate-in fade-in duration-300">
            {/* Top official banner */}
            <div className="bg-slate-900 text-white px-6 py-4 flex flex-wrap items-center justify-between gap-3 border-b border-slate-800">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400">
                  <Award className="w-5 h-5" />
                </div>
                <div>
                  <div className="flex items-center gap-2 text-xs font-semibold text-amber-400">
                    <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                    <span>STATUS: {activeCert.status.toUpperCase()}</span>
                  </div>
                  <h3 className="text-base font-bold text-white">
                    Pangkalan Data Sertifikasi Vokasi Nasional
                  </h3>
                </div>
              </div>

              <button
                onClick={() => window.print()}
                className="px-3.5 py-1.5 text-xs font-semibold text-slate-200 bg-slate-800 hover:bg-slate-700 border border-slate-700 rounded-lg transition-colors flex items-center gap-1.5 cursor-pointer"
              >
                <Printer className="w-3.5 h-3.5" />
                <span>Cetak Lembar Verifikasi</span>
              </button>
            </div>

            {/* Certificate Dossier Body */}
            <div className="p-6 sm:p-8 space-y-6">
              {/* Credentials Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pb-6 border-b border-slate-200">
                <div className="space-y-4">
                  <div>
                    <span className="text-[11px] font-bold uppercase tracking-wider text-slate-500 block">
                      Nama Lengkap Pemegang
                    </span>
                    <span className="text-lg font-extrabold text-slate-900">
                      {activeCert.holderName}
                    </span>
                  </div>

                  <div>
                    <span className="text-[11px] font-bold uppercase tracking-wider text-slate-500 block">
                      Nomor Induk Kependudukan (NIK)
                    </span>
                    <span className="text-sm font-mono font-semibold text-slate-800">
                      {activeCert.nik.slice(0, 6)}******{activeCert.nik.slice(-4)} (Terverifikasi Dukcapil)
                    </span>
                  </div>

                  <div>
                    <span className="text-[11px] font-bold uppercase tracking-wider text-slate-500 block">
                      Program & Skema Kompetensi
                    </span>
                    <span className="text-sm font-bold text-blue-900 block">
                      {activeCert.programTitle}
                    </span>
                    <span className="text-xs text-slate-600 block mt-0.5">
                      Skema: {activeCert.scheme}
                    </span>
                  </div>
                </div>

                <div className="space-y-4">
                  <div>
                    <span className="text-[11px] font-bold uppercase tracking-wider text-slate-500 block">
                      Nomor Registrasi Sertifikat
                    </span>
                    <span className="text-sm font-mono font-bold text-slate-900 bg-white px-2.5 py-1 rounded border border-slate-200 inline-block">
                      {activeCert.certificateNumber}
                    </span>
                  </div>

                  <div>
                    <span className="text-[11px] font-bold uppercase tracking-wider text-slate-500 block">
                      Nomor Registrasi Kemnaker RI
                    </span>
                    <span className="text-xs font-mono text-slate-700">
                      {activeCert.registrationNumberKemnaker}
                    </span>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <span className="text-[11px] font-bold uppercase tracking-wider text-slate-500 block">
                        Tanggal Terbit
                      </span>
                      <span className="text-xs font-medium text-slate-800">
                        {activeCert.completionDate}
                      </span>
                    </div>
                    <div>
                      <span className="text-[11px] font-bold uppercase tracking-wider text-slate-500 block">
                        Masa Berlaku
                      </span>
                      <span className="text-xs font-medium text-slate-800">
                        s/d {activeCert.validUntil}
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Units of Competencies Passed */}
              <div>
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-2">
                    <FileText className="w-4 h-4 text-blue-900" />
                    <h4 className="text-xs font-bold uppercase tracking-wider text-slate-700">
                      Daftar Unit Kompetensi SKKNI yang Dinyatakan Kompeten (K)
                    </h4>
                  </div>
                  <span className="text-xs font-mono text-slate-500">{activeCert.skkniRef}</span>
                </div>

                <div className="bg-white rounded-xl border border-slate-200 overflow-hidden divide-y divide-slate-100">
                  {activeCert.competencyUnits.map((unit, idx) => (
                    <div key={idx} className="p-3 sm:px-4 flex items-center justify-between gap-4 text-xs">
                      <div className="flex items-center gap-3">
                        <span className="font-mono text-slate-500 shrink-0">{unit.code}</span>
                        <span className="font-medium text-slate-800">{unit.title}</span>
                      </div>
                      <span className="flex items-center gap-1 font-semibold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded text-[11px] shrink-0 border border-emerald-200">
                        <CheckCircle2 className="w-3 h-3" />
                        {unit.result}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Footer validation stamp & QR Simulator */}
              <div className="pt-4 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4 bg-white p-4 rounded-xl border">
                <div className="flex items-center gap-3 text-left">
                  <div className="w-12 h-12 bg-slate-900 rounded-lg flex items-center justify-center text-white shrink-0">
                    <QrCode className="w-7 h-7" />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-slate-900">
                      Lembaga Sertifikasi Profesi P1 Skill Academy by Ruangguru
                    </p>
                    <p className="text-[11px] text-slate-500">
                      Tervalidasi Digital Signature Kemnaker & BNSP RI · Dokumen Sah Hukum
                    </p>
                  </div>
                </div>

                <div className="text-right text-xs">
                  <span className="text-[11px] text-slate-500 block">Hasil Uji Kompetensi:</span>
                  <span className="font-bold text-emerald-800 font-mono text-sm">{activeCert.score}</span>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
