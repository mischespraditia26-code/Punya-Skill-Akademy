import React from 'react';
import { Gift, Briefcase, UserCheck, Check, ArrowRight } from 'lucide-react';

interface ScholarshipTracksProps {
  onOpenRegister: () => void;
}

export const ScholarshipTracks: React.FC<ScholarshipTracksProps> = ({ onOpenRegister }) => {
  const tracks = [
    {
      id: 'kemnaker-subsidy',
      title: 'Jalur Bantuan Pelatihan Pemerintah (APBN)',
      badge: '100% Bebas Biaya (Gratis)',
      badgeColor: 'text-emerald-700 bg-emerald-50 border-emerald-200',
      icon: Gift,
      desc: 'Program resmi Ditjen Binalavotas Kementerian Ketenagakerjaan RI untuk meningkatkan kompetensi dan daya saing tenaga kerja muda Indonesia.',
      benefits: [
        'Bebas biaya pendaftaran dan SPP pelatihan',
        'Gratis Uji Sertifikasi Kompetensi Nasional BNSP',
        'Disediakan modul pembelajaran & seragam praktik',
        'Bantuan uang saku transportasi pelatihan',
        'Fasilitas asrama bagi peserta dari luar wilayah (kuota khusus)',
        'Penyaluran langsung lewat Bursa Kerja Khusus (BKK)'
      ],
      criteria: 'WNI, usia 18–30 tahun, lulusan SMA/SMK/D3/S1, tidak sedang kuliah/bekerja aktif.',
      actionLabel: 'Daftar Jalur Beasiswa Kemnaker',
      highlighted: true
    },
    {
      id: 'industry-track',
      title: 'Jalur Pemagangan & Kerjasama Industri',
      badge: 'On-the-Job Training & Penempatan',
      badgeColor: 'text-blue-700 bg-blue-50 border-blue-200',
      icon: Briefcase,
      desc: 'Program vokasi dual-system yang diinisiasi bersama perusahaan mitra (Astra, Schneider, United Tractors, Komatsu) untuk rekrutmen spesifik.',
      benefits: [
        'Kurikulum praktik disesuaikan langsung dengan SOP industri',
        'Magang industri berbayar (On-The-Job Training) selama 3–6 bulan',
        'Prioritas rekrutmen karyawan tetap setelah masa magang',
        'Sertifikasi ganda: Sertifikat Industri + Lisensi BNSP',
        'Mentoring langsung oleh praktisi teknis senior perusahaan'
      ],
      criteria: 'Lulusan SMK Teknik / Vokasi terkait, lolos seleksi wawancara user perusahaan.',
      actionLabel: 'Daftar Jalur Industri',
      highlighted: false
    },
    {
      id: 'regular-track',
      title: 'Jalur Mandiri & Sertifikasi Regulasi',
      badge: 'Jadwal Fleksibel & Weekend',
      badgeColor: 'text-slate-700 bg-slate-50 border-slate-200',
      icon: UserCheck,
      desc: 'Pelatihan intensif bagi tenaga profesional, pekerja aktif yang ingin up-skilling, serta sertifikasi penunjukan Kemnaker (seperti Ahli K3 Umum & Welder).',
      benefits: [
        'Pilihan kelas reguler malam hari atau weekend intensif',
        'Penerbitan SKP & Lisensi Ketenagakerjaan resmi Kemnaker RI',
        'Konsultasi persiapan portofolio asesmen kompetensi',
        'Sertifikat berstandar internasional ISO 9001:2015',
        'Akses seumur hidup ke jaringan alumni & lowongan karir BKK'
      ],
      criteria: 'Karyawan perusahaan, profesional, atau lulusan baru yang membutuhkan sertifikasi segera.',
      actionLabel: 'Daftar Kelas Mandiri',
      highlighted: false
    }
  ];

  return (
    <section id="jalur-beasiswa" className="py-16 sm:py-20 bg-slate-100/70 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="flex items-center justify-center gap-2 text-xs font-semibold text-blue-900 mb-2">
            <span>Akses Pelatihan Untuk Semua Lapisan</span>
            <span aria-hidden="true">·</span>
            <span>Didukung Dana APBN Kemnaker RI</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight">
            Pilihan Jalur Pendaftaran & Pembiayaan
          </h2>
          <p className="mt-3 text-slate-600 text-sm sm:text-base leading-relaxed">
            Pilih jalur pelatihan yang paling sesuai dengan status pendidikan dan sasaran karir Anda saat ini.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
          {tracks.map((track) => {
            const Icon = track.icon;
            return (
              <div
                key={track.id}
                className={`rounded-2xl p-6 sm:p-8 flex flex-col justify-between transition-all ${
                  track.highlighted
                    ? 'bg-white border-2 border-blue-900 shadow-lg relative'
                    : 'bg-white border border-slate-200 shadow-sm hover:shadow'
                }`}
              >
                {track.highlighted && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-blue-900 text-white text-[11px] font-bold py-1 px-4 rounded-full uppercase tracking-wider shadow-sm">
                    Paling Diminati Masyarakat
                  </div>
                )}

                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-11 h-11 rounded-xl bg-slate-100 flex items-center justify-center text-blue-900">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className={`text-[11px] font-bold px-2.5 py-1 rounded-md border ${track.badgeColor}`}>
                      {track.badge}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-slate-900 leading-snug">
                    {track.title}
                  </h3>

                  <p className="mt-2 text-xs text-slate-600 leading-relaxed">
                    {track.desc}
                  </p>

                  <div className="mt-6 pt-5 border-t border-slate-100">
                    <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-3">
                      Fasilitas yang Didapatkan:
                    </h4>
                    <ul className="space-y-2 text-xs text-slate-700">
                      {track.benefits.map((benefit, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                          <span className="leading-snug">{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="mt-6 pt-5 border-t border-slate-100 space-y-4">
                  <div className="bg-slate-50 p-3 rounded-lg text-slate-600 text-xs leading-relaxed">
                    <strong className="text-slate-900 block font-semibold mb-0.5">Kriteria:</strong>
                    {track.criteria}
                  </div>

                  <button
                    onClick={onOpenRegister}
                    className={`w-full py-3 rounded-lg text-xs font-bold transition-all flex items-center justify-center gap-1.5 cursor-pointer ${
                      track.highlighted
                        ? 'bg-blue-900 text-white hover:bg-blue-800 shadow-sm'
                        : 'bg-slate-100 text-slate-800 hover:bg-slate-200'
                    }`}
                  >
                    <span>{track.actionLabel}</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
