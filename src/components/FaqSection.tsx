import React, { useState } from 'react';
import { ChevronDown, HelpCircle, PhoneCall } from 'lucide-react';
import { FAQS_DATA } from '../data/mockData';

export const FaqSection: React.FC = () => {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  const toggle = (idx: number) => {
    setOpenIdx(openIdx === idx ? null : idx);
  };

  return (
    <section className="py-16 sm:py-20 bg-slate-50 border-b border-slate-200">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="flex items-center justify-center gap-2 text-xs font-semibold text-blue-900 mb-2">
            <HelpCircle className="w-4 h-4" />
            <span>Pusat Informasi & Tanya Jawab</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
            Pertanyaan yang Sering Diajukan (FAQ)
          </h2>
          <p className="mt-3 text-slate-600 text-sm leading-relaxed">
            Keterangan lengkap seputar program beasiswa vokasi, legalitas sertifikasi BNSP, dan mekanisme rekrutmen kerja kemitraan Kementerian Ketenagakerjaan RI.
          </p>
        </div>

        <div className="space-y-3">
          {FAQS_DATA.map((faq, idx) => {
            const isOpen = openIdx === idx;
            return (
              <div
                key={idx}
                className="rounded-xl border border-slate-200 bg-white overflow-hidden transition-all shadow-xs"
              >
                <button
                  type="button"
                  onClick={() => toggle(idx)}
                  className="w-full p-4 sm:p-5 text-left flex items-center justify-between gap-4 font-semibold text-sm sm:text-base text-slate-900 hover:text-blue-900 transition-colors cursor-pointer"
                >
                  <span className="leading-snug">{faq.q}</span>
                  <ChevronDown
                    className={`w-5 h-5 text-slate-400 shrink-0 transition-transform duration-200 ${
                      isOpen ? 'rotate-180 text-blue-900' : ''
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="px-4 pb-5 sm:px-5 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-100 pt-3 animate-in fade-in duration-200">
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Live Help Banner */}
        <div className="mt-10 p-5 rounded-2xl bg-blue-900 text-white flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3 text-center sm:text-left">
            <div className="w-10 h-10 rounded-lg bg-blue-800 flex items-center justify-center text-amber-400 shrink-0">
              <PhoneCall className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-sm font-bold text-white">Butuh Konsultasi Program Kejuruan?</h4>
              <p className="text-xs text-blue-200">Tim konselor vokasi kami siap melayani Senin - Jumat (08.00 - 17.00 WIB)</p>
            </div>
          </div>
          <a
            href="https://wa.me/6281234567890?text=Halo%20Admin%20LPK%20Vokasi%20Nusantara,%20saya%20ingin%20bertanya%20seputar%20pendaftaran%20pelatihan%20Kemnaker"
            target="_blank"
            rel="noreferrer"
            className="px-5 py-2.5 bg-amber-400 hover:bg-amber-300 text-slate-950 font-bold text-xs rounded-lg transition-colors whitespace-nowrap cursor-pointer shadow-sm"
          >
            Hubungi Konselor via WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
};
