import React from 'react';
import { Award, ShieldCheck, CheckCircle, FileCheck, Layers } from 'lucide-react';

export const AccreditationBadges: React.FC = () => {
  const credentials = [
    {
      title: 'Kementerian Ketenagakerjaan RI',
      sub: 'Binaan Resmi Ditjen Binalavotas',
      ref: 'VIN: 2020.10.SA-RUANGGURU.01',
      icon: Award,
      color: 'text-amber-600 bg-amber-50 border-amber-200'
    },
    {
      title: 'Badan Nasional Sertifikasi Profesi',
      sub: 'LSP Skill Academy by Ruangguru',
      ref: 'Lisensi BNSP-LSP-894-ID',
      icon: ShieldCheck,
      color: 'text-blue-700 bg-blue-50 border-blue-200'
    },
    {
      title: 'Akreditasi LA-LPK',
      sub: 'Tingkat Unggul Nasional (Predikat A)',
      ref: 'SK No. 092/LA-LPK/2023',
      icon: CheckCircle,
      color: 'text-emerald-700 bg-emerald-50 border-emerald-200'
    },
    {
      title: 'Portal SIAPkerja Terintegrasi',
      sub: 'Mitra Resmi Pelatihan Kemnaker RI',
      ref: 'Kode: ID-LPK-SKILLACADEMY-01',
      icon: FileCheck,
      color: 'text-indigo-700 bg-indigo-50 border-indigo-200'
    },
    {
      title: 'Standar Manajemen Mutu',
      sub: 'ISO 9001:2015 Mutu Pelatihan Vokasi',
      ref: 'Cert ID: QA-ID-2023-8891',
      icon: Layers,
      color: 'text-slate-700 bg-slate-50 border-slate-200'
    }
  ];

  return (
    <section className="bg-white border-b border-slate-200 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-6">
          <p className="text-xs font-bold uppercase tracking-wider text-slate-500">
            Legalitas & Akreditasi Penyelenggaraan Pendidikan Vokasi
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
          {credentials.map((cred, idx) => {
            const Icon = cred.icon;
            return (
              <div
                key={idx}
                className="p-4 rounded-xl border border-slate-200 bg-slate-50/60 hover:bg-slate-50 transition-colors flex flex-col justify-between"
              >
                <div className="flex items-start gap-3">
                  <div className={`w-9 h-9 rounded-lg border flex items-center justify-center shrink-0 ${cred.color}`}>
                    <Icon className="w-5 h-5" />
                  </div>
                  <div className="min-w-0">
                    <h3 className="text-xs font-bold text-slate-900 leading-snug truncate">
                      {cred.title}
                    </h3>
                    <p className="text-[11px] text-slate-500 leading-tight mt-0.5">
                      {cred.sub}
                    </p>
                  </div>
                </div>
                <div className="mt-3 pt-2.5 border-t border-slate-200/80 flex items-center justify-between text-[10px] font-mono text-slate-500">
                  <span>Reg:</span>
                  <span className="font-semibold text-slate-700 truncate ml-1">{cred.ref}</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
