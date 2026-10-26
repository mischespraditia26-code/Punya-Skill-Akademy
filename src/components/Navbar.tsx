import React, { useState } from 'react';
import { Menu, X, ArrowUpRight } from 'lucide-react';

interface NavbarProps {
  onOpenRegister: (programId?: string) => void;
  onOpenVerifier: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenRegister, onOpenVerifier }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-8 h-18">
          {/* Zone 1: Brand Wordmark (Single text element) */}
          <a href="#" className="flex items-center gap-3 text-slate-900 shrink-0 group">
            <div className="w-10 h-10 rounded-lg bg-blue-600 text-white flex items-center justify-center font-bold text-lg shadow-sm group-hover:bg-blue-700 transition-colors">
              SA
            </div>
            <div className="flex flex-col">
              <span className="text-lg font-bold tracking-tight text-slate-900 whitespace-nowrap leading-tight">
                Skill Academy
              </span>
              <span className="text-[11px] font-medium text-slate-500 whitespace-nowrap">
                by Ruangguru · Mitra Kemnaker RI
              </span>
            </div>
          </a>

          {/* Zone 2: 4-5 Clean single-line text navigation links */}
          <nav className="hidden md:flex items-center gap-7 text-sm font-medium text-slate-600">
            <a
              href="#tentang-pengelola"
              className="hover:text-blue-900 transition-colors whitespace-nowrap shrink-0"
            >
              Tentang Pengelola
            </a>
            <a
              href="#program-pelatihan"
              className="hover:text-blue-900 transition-colors whitespace-nowrap shrink-0"
            >
              Program Vokasi
            </a>
            <a
              href="#jalur-beasiswa"
              className="hover:text-blue-900 transition-colors whitespace-nowrap shrink-0"
            >
              Jalur Kemnaker
            </a>
            <button
              onClick={onOpenVerifier}
              className="hover:text-blue-900 transition-colors whitespace-nowrap shrink-0 text-left cursor-pointer"
            >
              Cek Sertifikat
            </button>
            <a
              href="#penyaluran-kerja"
              className="hover:text-blue-900 transition-colors whitespace-nowrap shrink-0"
            >
              Bursa Kerja (BKK)
            </a>
          </nav>

          {/* Zone 3: 1 Primary Action */}
          <div className="hidden sm:flex items-center gap-3 shrink-0">
            <button
              onClick={() => onOpenRegister()}
              className="px-5 py-2.5 text-sm font-semibold text-white bg-blue-900 rounded-lg hover:bg-blue-800 active:bg-blue-950 transition-all shadow-sm hover:shadow flex items-center gap-1.5 whitespace-nowrap cursor-pointer"
            >
              <span>Daftar Gelombang III</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="flex md:hidden items-center">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-slate-600 hover:text-slate-900 focus:outline-none"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-slate-200 bg-white px-4 pt-3 pb-6 space-y-3">
          <nav className="flex flex-col space-y-3 text-base font-medium text-slate-700">
            <a
              href="#tentang-pengelola"
              onClick={() => setMobileMenuOpen(false)}
              className="px-2 py-1.5 hover:text-blue-900 transition-colors"
            >
              Tentang Pengelola (Skill Academy)
            </a>
            <a
              href="#program-pelatihan"
              onClick={() => setMobileMenuOpen(false)}
              className="px-2 py-1.5 hover:text-blue-900 transition-colors"
            >
              Program Vokasi
            </a>
            <a
              href="#jalur-beasiswa"
              onClick={() => setMobileMenuOpen(false)}
              className="px-2 py-1.5 hover:text-blue-900 transition-colors"
            >
              Jalur Bantuan Kemnaker
            </a>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenVerifier();
              }}
              className="px-2 py-1.5 text-left hover:text-blue-900 transition-colors"
            >
              Verifikasi Sertifikat BNSP
            </button>
            <a
              href="#penyaluran-kerja"
              onClick={() => setMobileMenuOpen(false)}
              className="px-2 py-1.5 hover:text-blue-900 transition-colors"
            >
              Bursa Kerja Khusus (BKK)
            </a>
            <a
              href="#fasilitas-workshop"
              onClick={() => setMobileMenuOpen(false)}
              className="px-2 py-1.5 hover:text-blue-900 transition-colors"
            >
              Fasilitas & Workshop
            </a>
            <div className="pt-2">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenRegister();
                }}
                className="w-full py-3 text-center font-semibold text-white bg-blue-900 rounded-lg hover:bg-blue-800 transition-colors"
              >
                Daftar Gelombang III (2026)
              </button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};
