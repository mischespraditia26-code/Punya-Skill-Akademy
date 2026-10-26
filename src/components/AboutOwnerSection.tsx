import React from 'react';
import { Building2, Award, Users, CheckCircle2, ExternalLink } from 'lucide-react';
import { OWNER_INFO } from '../data/mockData';

export const AboutOwnerSection: React.FC = () => {
  return (
    <section id="tentang-pengelola" className="py-16 sm:py-20 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="flex items-center justify-center gap-2 text-xs font-semibold text-blue-900 mb-2">
            <span>Profil Lembaga & Pengelola Resmi</span>
            <span aria-hidden="true" className="text-slate-400">·</span>
            <span>PT Ruang Raya Indonesia</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight">
            Skill Academy by Ruangguru
          </h2>
          <p className="mt-3 text-slate-600 text-sm sm:text-base leading-relaxed">
            Platform pelatihan kerja dan pengembangan profesional nomor 1 di Indonesia, dipercaya jutaan talenta serta menjadi mitra strategis Kementerian Ketenagakerjaan Republik Indonesia dalam mencetak tenaga kerja siap pakai berdaya saing global.
          </p>
        </div>

        {/* 2-Column Institutional & Founder Overview */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch mb-12">
          {/* Left Column: Organization & Legal Identity */}
          <div className="lg:col-span-5 bg-slate-900 text-white rounded-2xl p-6 sm:p-8 flex flex-col justify-between shadow-xl border border-slate-800">
            <div className="space-y-5">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-xl bg-blue-600 flex items-center justify-center text-white font-black text-xl shadow-md">
                  SA
                </div>
                <div>
                  <h3 className="text-xl font-extrabold text-white tracking-tight">
                    {OWNER_INFO.brandName}
                  </h3>
                  <p className="text-xs text-amber-400 font-medium">
                    Bagian dari {OWNER_INFO.parentCompany} ({OWNER_INFO.parentBrand})
                  </p>
                </div>
              </div>

              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                Skill Academy didirikan pada tahun 2019 sebagai divisi pelatihan vokasi dan upskilling profesional dari Ruangguru, perusahaan teknologi pendidikan terbesar di Asia Tenggara. Berkolaborasi secara resmi dengan Ditjen Binalavotas Kemnaker RI untuk menyelenggarakan program pelatihan bersubsidi, sertifikasi kompetensi BNSP, serta penyerapan tenaga kerja industri.
              </p>

              <div className="pt-3 border-t border-slate-800 space-y-2.5 text-xs text-slate-300">
                <div className="flex items-center justify-between">
                  <span className="text-slate-400">Nomor Registrasi VIN Kemnaker:</span>
                  <span className="font-mono font-semibold text-white">{OWNER_INFO.vinRegistrationKemnaker}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-slate-400">Akreditasi Lembaga:</span>
                  <span className="font-semibold text-emerald-400">LA-LPK Predikat &quot;A&quot; Unggul</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-slate-400">Kode Mitra SIAPkerja:</span>
                  <span className="font-mono text-white">{OWNER_INFO.siapkerjaCode}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-slate-400">Alumni Pelatihan Nasional:</span>
                  <span className="font-bold text-amber-400 font-mono">{OWNER_INFO.totalAlumni} Peserta</span>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-5 border-t border-slate-800/80 flex items-center justify-between text-xs text-slate-400">
              <span className="flex items-center gap-1.5">
                <Building2 className="w-4 h-4 text-slate-400" />
                <span>Headquarters: Jakarta Selatan</span>
              </span>
              <a
                href="https://skillacademy.com"
                target="_blank"
                rel="noreferrer"
                className="hover:text-white transition-colors flex items-center gap-1 text-blue-400"
              >
                <span>Portal Resmi</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* Right Column: Founders & Leadership Profile */}
          <div className="lg:col-span-7 bg-slate-50 rounded-2xl p-6 sm:p-8 border border-slate-200 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-slate-500 mb-4">
                <Users className="w-4 h-4 text-blue-900" />
                <span>Pendiri & Pimpinan Utama (Leadership)</span>
              </div>

              <div className="space-y-6">
                {OWNER_INFO.founders.map((founder, idx) => (
                  <div key={idx} className="p-4 sm:p-5 bg-white rounded-xl border border-slate-200 shadow-xs space-y-2">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                      <div>
                        <h4 className="text-base font-bold text-slate-900">
                          {founder.name}
                        </h4>
                        <p className="text-xs font-semibold text-blue-900">
                          {founder.role}
                        </p>
                      </div>
                      <span className="text-[11px] font-mono text-slate-500 bg-slate-100 px-2.5 py-1 rounded border border-slate-200 shrink-0 self-start sm:self-center">
                        Ruangguru & Skill Academy
                      </span>
                    </div>

                    <p className="text-[11px] font-medium text-slate-500 italic">
                      {founder.degrees}
                    </p>

                    <p className="text-xs text-slate-600 leading-relaxed pt-1">
                      {founder.bio}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Strategic Pillars */}
            <div className="mt-6 pt-5 border-t border-slate-200 grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs text-slate-700">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Mitra Resmi Pelatihan Prakerja & Kemnaker RI</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Instruktur Praktisi Industri Berlisensi BNSP</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
