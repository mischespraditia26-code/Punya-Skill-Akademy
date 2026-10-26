import React from 'react';
import { ShieldCheck, ExternalLink, Award } from 'lucide-react';

export const OfficialGovRibbon: React.FC = () => {
  return (
    <div className="bg-slate-900 text-slate-200 border-b border-slate-800 text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2 flex flex-col sm:flex-row items-center justify-between gap-2">
        <div className="flex items-center gap-2 text-center sm:text-left">
          <span className="flex items-center gap-1.5 text-amber-400 font-medium shrink-0">
            <Award className="w-4 h-4 text-amber-400" />
            <span>Skill Academy by Ruangguru · Mitra Kemnaker RI</span>
          </span>
          <span className="hidden md:inline text-slate-500">·</span>
          <span className="hidden md:inline text-slate-300">
            Terdaftar Ditjen Binalavotas Kemnaker RI (VIN: 2020.10.SA-RUANGGURU.01) · Terakreditasi LA-LPK &quot;A&quot; Unggul
          </span>
        </div>
        
        <div className="flex items-center gap-4 text-slate-400 shrink-0">
          <a
            href="https://siapkerja.kemnaker.go.id"
            target="_blank"
            rel="noreferrer"
            className="hover:text-amber-400 transition-colors flex items-center gap-1"
          >
            <span>Portal SIAPkerja</span>
            <ExternalLink className="w-3 h-3" />
          </a>
          <span className="text-slate-700">|</span>
          <span className="flex items-center gap-1 text-emerald-400 font-medium">
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>LSP-P1 Lisensi BNSP</span>
          </span>
        </div>
      </div>
    </div>
  );
};
