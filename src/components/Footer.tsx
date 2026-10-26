import React from 'react';
import { MapPin, Phone, Mail, Clock, ShieldCheck, ExternalLink } from 'lucide-react';

interface FooterProps {
  onOpenVerifier: () => void;
  onOpenRegister: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenVerifier, onOpenRegister }) => {
  return (
    <footer className="bg-slate-950 text-slate-400 border-t border-slate-800 text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10">
          {/* Col 1: Wordmark & Identity */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-blue-600 text-white flex items-center justify-center font-bold text-lg">
                SA
              </div>
              <div>
                <span className="text-base font-bold text-white block">
                  Skill Academy
                </span>
                <span className="text-[11px] text-amber-400 font-medium">
                  by Ruangguru (PT Ruang Raya Indonesia) · Mitra Kemnaker RI
                </span>
              </div>
            </div>

            <p className="text-slate-400 text-xs leading-relaxed">
              Lembaga Pelatihan Kerja (LPK) dan Tempat Uji Kompetensi (TUK) mandiri berlisensi BNSP di bawah naungan PT Ruang Raya Indonesia (Ruangguru), didirikan oleh Adamas Belva Syah Devara dan Muhammad Iman Usman untuk melahirkan tenaga kerja terampil berstandar global.
            </p>

            <div className="pt-2 text-[11px] space-y-1 font-mono text-slate-500">
              <p>No. Registrasi VIN Kemnaker: <span className="text-slate-300">2020.10.SA-RUANGGURU.01</span></p>
              <p>Akreditasi LA-LPK: <span className="text-emerald-400 font-semibold">Predikat &quot;A&quot; Unggul</span></p>
              <p>Lisensi LSP-P1 BNSP: <span className="text-slate-300">BNSP-LSP-894-ID</span></p>
            </div>
          </div>

          {/* Col 2: Navigation & Programs */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">
              Kejuruan Unggulan
            </h4>
            <ul className="space-y-2 text-slate-400">
              <li>
                <a href="#program-pelatihan" className="hover:text-white transition-colors">
                  Teknik Mekatronika & Otomasi
                </a>
              </li>
              <li>
                <a href="#program-pelatihan" className="hover:text-white transition-colors">
                  Fullstack Web & AI Engineering
                </a>
              </li>
              <li>
                <a href="#program-pelatihan" className="hover:text-white transition-colors">
                  Welding 3G & 6G SMAW/GMAW
                </a>
              </li>
              <li>
                <a href="#program-pelatihan" className="hover:text-white transition-colors">
                  Ahli K3 Umum (AK3U) Kemnaker
                </a>
              </li>
              <li>
                <a href="#program-pelatihan" className="hover:text-white transition-colors">
                  Teknisi Kendaraan Listrik (EV)
                </a>
              </li>
              <li>
                <a href="#program-pelatihan" className="hover:text-white transition-colors">
                  Digital Logistics & SCM
                </a>
              </li>
            </ul>
          </div>

          {/* Col 3: Layanan & Tautan Resmi */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">
              Layanan Siswa & Mitra
            </h4>
            <ul className="space-y-2 text-slate-400">
              <li>
                <button
                  onClick={onOpenRegister}
                  className="hover:text-white transition-colors text-left cursor-pointer"
                >
                  Pendaftaran Gelombang III
                </button>
              </li>
              <li>
                <button
                  onClick={onOpenVerifier}
                  className="hover:text-white transition-colors text-left cursor-pointer"
                >
                  Verifikasi Sertifikat BNSP
                </button>
              </li>
              <li>
                <a href="#jalur-beasiswa" className="hover:text-white transition-colors">
                  Jalur Beasiswa APBN Kemnaker
                </a>
              </li>
              <li>
                <a href="#penyaluran-kerja" className="hover:text-white transition-colors">
                  Bursa Kerja Khusus (BKK)
                </a>
              </li>
              <li>
                <a
                  href="https://siapkerja.kemnaker.go.id"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-white transition-colors flex items-center gap-1"
                >
                  <span>Portal SIAPkerja</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </li>
              <li>
                <a
                  href="https://bnsp.go.id"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-white transition-colors flex items-center gap-1"
                >
                  <span>Website Resmi BNSP</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </li>
            </ul>
          </div>

          {/* Col 4: Campus Locations & Contact */}
          <div className="lg:col-span-4 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">
              Lokasi Balai & Workshop
            </h4>
            
            <div className="space-y-3 text-xs text-slate-400">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                <div>
                  <strong className="text-white block">Balai Pelatihan Vokasi Jakarta (Pusat):</strong>
                  <span>Kawasan Industri Pulogadung, Jl. Rawa Gelam IV No. 12, Cakung, Jakarta Timur 13930</span>
                </div>
              </div>

              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                <div>
                  <strong className="text-white block">Workshop Pelatihan Surabaya:</strong>
                  <span>Kawasan Industri SIER, Jl. Rungkut Industri Raya No. 45, Surabaya 60293</span>
                </div>
              </div>

              <div className="pt-2 flex flex-col sm:flex-row gap-4 border-t border-slate-800/80">
                <div className="flex items-center gap-2">
                  <Phone className="w-3.5 h-3.5 text-blue-400 shrink-0" />
                  <span>(021) 489-2180 / 0812-3456-7890</span>
                </div>
                <div className="flex items-center gap-2">
                  <Mail className="w-3.5 h-3.5 text-blue-400 shrink-0" />
                  <span>vokasi@skillacademy.com</span>
                </div>
              </div>

              <div className="flex items-center gap-2 text-slate-500 text-[11px]">
                <Clock className="w-3.5 h-3.5 shrink-0" />
                <span>Pelayanan Terpadu Satu Pintu: Senin – Jumat 08.00 – 16.30 WIB</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom copyright row */}
        <div className="mt-12 pt-8 border-t border-slate-800/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-slate-500">
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-emerald-400" />
            <span>&copy; {new Date().getFullYear()} Skill Academy by Ruangguru (PT Ruang Raya Indonesia). Kemitraan Resmi Kementerian Ketenagakerjaan RI.</span>
          </div>

          <div className="flex items-center gap-4">
            <span className="hover:text-slate-400 cursor-pointer">Kebijakan Privasi</span>
            <span aria-hidden="true">·</span>
            <span className="hover:text-slate-400 cursor-pointer">Pedoman Uji Kompetensi</span>
            <span aria-hidden="true">·</span>
            <span className="hover:text-slate-400 cursor-pointer">SOP Keselamatan Workshop</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
