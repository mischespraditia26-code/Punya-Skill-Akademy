import React from 'react';
import { Building2, Award, Quote, CheckCircle2, Briefcase, Users, Cpu, ShieldCheck } from 'lucide-react';
import { TESTIMONIALS_DATA, INDUSTRY_PARTNERS } from '../data/mockData';

export const FacilitiesAndPlacement: React.FC = () => {
  return (
    <div className="space-y-16 py-16 sm:py-20 bg-white">
      {/* SECTION 1: Facilities & Modern Industrial Workshop */}
      <section id="fasilitas-workshop" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="flex items-center justify-center gap-2 text-xs font-semibold text-blue-900 mb-2">
            <span>Standar Sarana & Prasarana Industri 4.0</span>
            <span aria-hidden="true">·</span>
            <span>Balai Latihan Kemnaker</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight">
            Fasilitas Laboratorium & Workshop Praktik Presisi
          </h2>
          <p className="mt-3 text-slate-600 text-sm sm:text-base leading-relaxed">
            Peralatan berstandar manufaktur dan teknologi terkini untuk menjamin setiap peserta terbiasa dengan lingkungan kerja industri sesungguhnya.
          </p>
        </div>

        {/* 2-Column Workshop Visual Feature */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {/* Facility 1: Lab Mekatronika & Otomasi */}
          <div className="rounded-2xl border border-slate-200 overflow-hidden bg-slate-50 shadow-sm flex flex-col group">
            <div className="aspect-[4/3] w-full overflow-hidden bg-slate-200 relative">
              <img
                src="/src/assets/images/vocational_tech_lab_1792989572067.jpg"
                alt="Laboratorium Mekatronika dan Otomasi Industri"
                className="w-full h-full object-cover group-hover:scale-102 transition-transform duration-500"
                referrerPolicy="no-referrer"
              />
              <div className="absolute top-3 left-3 bg-slate-900/85 backdrop-blur-sm text-white px-3 py-1 rounded text-xs font-mono">
                Lab Mekatronika & Otomasi 4.0
              </div>
            </div>
            <div className="p-6 flex-1 flex flex-col justify-between">
              <div>
                <h3 className="text-lg font-bold text-slate-900 mb-2">
                  Laboratorium Kontrol PLC & Robotika Industri
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Dilengkapi dengan 30 modul trainer PLC Siemens S7-1200/1500, robot articulated 6-axis, modul pneumatik Festo Didactic, serta integrasi sistem SCADA untuk simulasi otomasi pabrik cerdas.
                </p>
              </div>
              <div className="mt-4 pt-3 border-t border-slate-200 flex flex-wrap gap-2 text-[11px] text-slate-600 font-mono">
                <span className="px-2 py-0.5 bg-white border border-slate-200 rounded">Siemens S7-1500</span>
                <span className="px-2 py-0.5 bg-white border border-slate-200 rounded">KUKA & Fanuc Robot</span>
                <span className="px-2 py-0.5 bg-white border border-slate-200 rounded">Festo Pneumatics</span>
              </div>
            </div>
          </div>

          {/* Facility 2: Workshop Pengelasan Industri */}
          <div className="rounded-2xl border border-slate-200 overflow-hidden bg-slate-50 shadow-sm flex flex-col group">
            <div className="aspect-[4/3] w-full overflow-hidden bg-slate-200 relative">
              <img
                src="/src/assets/images/vocational_welding_industrial_1792989573568.jpg"
                alt="Workshop Pengelasan Industri Standar ASME dan Kemnaker"
                className="w-full h-full object-cover group-hover:scale-102 transition-transform duration-500"
                referrerPolicy="no-referrer"
              />
              <div className="absolute top-3 left-3 bg-slate-900/85 backdrop-blur-sm text-white px-3 py-1 rounded text-xs font-mono">
                Workshop Pengelasan Presisi (ASME)
              </div>
            </div>
            <div className="p-6 flex-1 flex flex-col justify-between">
              <div>
                <h3 className="text-lg font-bold text-slate-900 mb-2">
                  Bengkel Las Standar ASME IX & Lisensi Juru Las
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  24 bilik (booth) pengelasan individual dengan exhaust filter udara bertekanan, mesin multi-proses ESAB & Miller, uji lengkung (bending test), dan sarana uji visual/NDT sesuai standar ketenagakerjaan.
                </p>
              </div>
              <div className="mt-4 pt-3 border-t border-slate-200 flex flex-wrap gap-2 text-[11px] text-slate-600 font-mono">
                <span className="px-2 py-0.5 bg-white border border-slate-200 rounded">ESAB Multi-Process</span>
                <span className="px-2 py-0.5 bg-white border border-slate-200 rounded">AWS D1.1 & ASME IX</span>
                <span className="px-2 py-0.5 bg-white border border-slate-200 rounded">Safety Exhaust System</span>
              </div>
            </div>
          </div>
        </div>

        {/* Ancillary facilities grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-xs">
          <div className="p-4 rounded-xl border border-slate-200 bg-white space-y-1">
            <Cpu className="w-5 h-5 text-blue-900 mb-2" />
            <h4 className="font-bold text-slate-900">Lab Komputer AI & Cloud</h4>
            <p className="text-slate-500">60 unit PC Core i7, 32GB RAM, fiber internet 1 Gbps terdedikasi.</p>
          </div>
          <div className="p-4 rounded-xl border border-slate-200 bg-white space-y-1">
            <ShieldCheck className="w-5 h-5 text-emerald-700 mb-2" />
            <h4 className="font-bold text-slate-900">Simulator K3 & Fire Safety</h4>
            <p className="text-slate-500">Peralatan simulasi tanggap darurat, confined space, dan uji gas beracun.</p>
          </div>
          <div className="p-4 rounded-xl border border-slate-200 bg-white space-y-1">
            <Building2 className="w-5 h-5 text-amber-600 mb-2" />
            <h4 className="font-bold text-slate-900">Asrama Peserta Didik</h4>
            <p className="text-slate-500">Kapasitas 160 tempat tidur lengkap dengan pengawasan 24 jam & kafetaria.</p>
          </div>
          <div className="p-4 rounded-xl border border-slate-200 bg-white space-y-1">
            <Users className="w-5 h-5 text-indigo-700 mb-2" />
            <h4 className="font-bold text-slate-900">Pusat Asesmen BNSP</h4>
            <p className="text-slate-500">Tempat Uji Kompetensi (TUK) mandiri berlisensi resmi BNSP RI.</p>
          </div>
        </div>
      </section>

      {/* SECTION 2: Industry Placement & Special Job Exchange (BKK) */}
      <section id="penyaluran-kerja" className="bg-slate-900 text-white py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Visual of proud certified graduates */}
            <div className="lg:col-span-5 order-2 lg:order-1">
              <div className="relative rounded-2xl overflow-hidden border border-slate-700 shadow-2xl">
                <div className="aspect-[4/3] w-full overflow-hidden bg-slate-800">
                  <img
                    src="/src/assets/images/vocational_graduates_success_1792989573466.jpg"
                    alt="Alumni Lulusan Tersertifikasi BNSP Kemnaker RI Siap Kerja"
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div className="p-4 bg-slate-950/90 border-t border-slate-800">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-xs font-bold text-white">Lulusan Kompeten & Terserap</p>
                      <p className="text-[11px] text-slate-400">94.2% Bekerja dalam 3 Bulan Pasca Kelulusan</p>
                    </div>
                    <span className="text-xs font-mono font-bold text-emerald-400 bg-emerald-950/60 px-2.5 py-1 rounded border border-emerald-800">
                      BKK SIAPkerja
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Information about BKK & Hiring process */}
            <div className="lg:col-span-7 order-1 lg:order-2 space-y-6">
              <div className="flex items-center gap-2 text-xs font-semibold text-amber-400">
                <Briefcase className="w-4 h-4" />
                <span>Bursa Kerja Khusus (BKK) Terpadu</span>
                <span aria-hidden="true" className="text-slate-500">·</span>
                <span>Terhubung Portal SIAPkerja</span>
              </div>

              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-white leading-tight">
                Jembatan Langsung Menuju Karir di Perusahaan Terkemuka
              </h2>

              <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                Kami tidak sekadar melatih teori, melainkan mengawal karir peserta hingga penempatan kerja. Unit BKK Skill Academy by Ruangguru bekerjasama erat dengan Kemnaker RI dan jejaring industri untuk mengadakan rekrutmen terpusat (campus hiring), magang berbayar, dan asesmen langsung oleh HRD mitra.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs text-slate-200">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Program Campus Hiring Berkala Tiap Bulan</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Database Alumni Terhubung SIAPkerja Kemnaker</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Bimbingan Portofolio & Simulasi Wawancara HRD</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Rekomendasi Resmi untuk Rekrutmen BUMN & PMA</span>
                </div>
              </div>

              {/* Partner Logos Pill Grid */}
              <div className="pt-4 border-t border-slate-800">
                <p className="text-[11px] font-bold uppercase tracking-wider text-slate-400 mb-3">
                  Sebagian Mitra Penyerapan Kerja & Rekrutmen:
                </p>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
                  {INDUSTRY_PARTNERS.map((partner, idx) => (
                    <div
                      key={idx}
                      className="p-2.5 rounded-lg bg-slate-800/80 border border-slate-700/80 text-center"
                    >
                      <p className="text-xs font-bold text-white truncate">{partner.name}</p>
                      <p className="text-[10px] text-slate-400 truncate">{partner.sector}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Testimonials */}
          <div className="mt-16 pt-12 border-t border-slate-800">
            <div className="text-center max-w-2xl mx-auto mb-8">
              <p className="text-xs font-bold uppercase tracking-wider text-amber-400">
                Kisah Sukses Alumni
              </p>
              <h3 className="text-xl sm:text-2xl font-bold text-white mt-1">
                Bukti Nyata Transformasi Karir Vokasi
              </h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {TESTIMONIALS_DATA.map((testi) => (
                <div
                  key={testi.id}
                  className="p-6 rounded-xl bg-slate-800/70 border border-slate-700 flex flex-col justify-between"
                >
                  <div className="space-y-3">
                    <Quote className="w-6 h-6 text-amber-400 opacity-60" />
                    <p className="text-xs text-slate-300 leading-relaxed italic">
                      &quot;{testi.quote}&quot;
                    </p>
                  </div>

                  <div className="mt-6 pt-4 border-t border-slate-700/80 flex items-center justify-between">
                    <div>
                      <h4 className="text-xs font-bold text-white">{testi.name}</h4>
                      <p className="text-[11px] text-amber-400">{testi.role}</p>
                      <p className="text-[10px] text-slate-400">{testi.company}</p>
                    </div>
                    <div className="text-right">
                      <span className="text-[10px] font-mono text-emerald-400 font-semibold block">
                        {testi.salaryGrowth}
                      </span>
                      <span className="text-[10px] text-slate-500">{testi.batch}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
