import React, { useState, useEffect } from 'react';
import { X, CheckCircle2, ArrowRight, ArrowLeft, Printer, ShieldCheck, Download, Calendar, User, Phone, BookOpen, AlertCircle } from 'lucide-react';
import { PROGRAMS_DATA } from '../data/mockData';

interface RegistrationModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultProgramId?: string;
}

export const RegistrationModal: React.FC<RegistrationModalProps> = ({ isOpen, onClose, defaultProgramId }) => {
  const [step, setStep] = useState<number>(1);
  const [formData, setFormData] = useState({
    fullName: '',
    nik: '',
    birthDate: '',
    gender: 'Laki-laki',
    whatsapp: '',
    email: '',
    lastEducation: 'SMK',
    schoolName: '',
    major: '',
    city: 'Jakarta',
    needsDormitory: 'Ya',
    programId: defaultProgramId || PROGRAMS_DATA[0].id,
    track: 'Beasiswa Kemnaker (Gratis 100%)',
    agreement: false
  });

  const [registrationId, setRegistrationId] = useState<string>('');
  const [submittedAt, setSubmittedAt] = useState<string>('');
  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  useEffect(() => {
    if (defaultProgramId) {
      setFormData((prev) => ({ ...prev, programId: defaultProgramId }));
    }
  }, [defaultProgramId]);

  if (!isOpen) return null;

  const validateStep1 = () => {
    const err: { [key: string]: string } = {};
    if (!formData.fullName.trim()) err.fullName = 'Nama lengkap wajib diisi';
    if (!formData.nik.trim()) {
      err.nik = 'NIK 16 digit wajib diisi';
    } else if (!/^\d{16}$/.test(formData.nik.trim())) {
      err.nik = 'NIK harus berupa 16 digit angka sesuai KTP';
    }
    if (!formData.birthDate) err.birthDate = 'Tanggal lahir wajib diisi';
    if (!formData.whatsapp.trim()) {
      err.whatsapp = 'Nomor WhatsApp wajib diisi';
    } else if (formData.whatsapp.length < 9) {
      err.whatsapp = 'Nomor WhatsApp tidak valid';
    }
    setErrors(err);
    return Object.keys(err).length === 0;
  };

  const validateStep2 = () => {
    const err: { [key: string]: string } = {};
    if (!formData.schoolName.trim()) err.schoolName = 'Nama sekolah/institusi wajib diisi';
    if (!formData.major.trim()) err.major = 'Jurusan wajib diisi';
    if (!formData.city.trim()) err.city = 'Kota domisili wajib diisi';
    setErrors(err);
    return Object.keys(err).length === 0;
  };

  const validateStep3 = () => {
    const err: { [key: string]: string } = {};
    if (!formData.agreement) err.agreement = 'Anda harus menyetujui komitmen pelatihan';
    setErrors(err);
    return Object.keys(err).length === 0;
  };

  const handleNext = () => {
    if (step === 1 && validateStep1()) {
      setStep(2);
    } else if (step === 2 && validateStep2()) {
      setStep(3);
    } else if (step === 3 && validateStep3()) {
      // Generate registration code
      const rand = Math.floor(1000 + Math.random() * 9000);
      const regCode = `REG-SA-2026-${rand}`;
      setRegistrationId(regCode);
      setSubmittedAt(new Date().toLocaleDateString('id-ID', {
        day: 'numeric',
        month: 'long',
        year: 'numeric',
        hour: '2-digit',
        minute: '2-digit'
      }));
      setStep(4);
    }
  };

  const selectedProgramObj = PROGRAMS_DATA.find((p) => p.id === formData.programId) || PROGRAMS_DATA[0];

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-900/60 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6 animate-in fade-in duration-200">
      <div 
        className="relative bg-white rounded-2xl max-w-2xl w-full max-h-[92vh] overflow-y-auto shadow-2xl border border-slate-200 flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Top Header */}
        <div className="bg-slate-900 text-white px-6 py-5 flex items-center justify-between border-b border-slate-800">
          <div>
            <div className="flex items-center gap-2 text-xs font-semibold text-amber-400 mb-0.5">
              <span>Skill Academy by Ruangguru</span>
              <span aria-hidden="true">·</span>
              <span>Mitra Kemnaker RI 2026</span>
            </div>
            <h2 className="text-lg sm:text-xl font-bold tracking-tight text-white">
              Pendaftaran Pelatihan Vokasi Gelombang III
            </h2>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 text-slate-400 hover:text-white rounded-lg hover:bg-slate-800 transition-colors"
            aria-label="Tutup formulir"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Step Indicator Header (if not on finished state) */}
        {step < 4 && (
          <div className="bg-slate-50 border-b border-slate-200 px-6 py-3">
            <div className="flex items-center justify-between text-xs font-medium text-slate-600">
              <span className={step >= 1 ? 'text-blue-900 font-bold' : ''}>1. Identitas Diri</span>
              <span className="text-slate-300">/</span>
              <span className={step >= 2 ? 'text-blue-900 font-bold' : ''}>2. Pendidikan</span>
              <span className="text-slate-300">/</span>
              <span className={step >= 3 ? 'text-blue-900 font-bold' : ''}>3. Pilihan Program</span>
            </div>
            <div className="w-full bg-slate-200 h-1.5 rounded-full mt-2.5 overflow-hidden">
              <div
                className="bg-blue-900 h-full transition-all duration-300"
                style={{ width: `${(step / 3) * 100}%` }}
              ></div>
            </div>
          </div>
        )}

        {/* Modal Body */}
        <div className="p-6 space-y-5 text-sm text-slate-800 flex-1">
          {/* STEP 1: Personal Data */}
          {step === 1 && (
            <div className="space-y-4 animate-in fade-in">
              <div className="p-3 bg-blue-50/70 rounded-lg border border-blue-200 text-xs text-blue-900 leading-relaxed">
                Data KTP/NIK akan diverifikasi langsung dengan pangkalan data Dukcapil dan portal <strong>SIAPkerja Kemnaker RI</strong>.
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-600 mb-1">
                  Nama Lengkap Sesuai KTP <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  placeholder="Contoh: Muhammad Ilham Ramadhan"
                  value={formData.fullName}
                  onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                  className={`w-full px-3.5 py-2.5 bg-slate-50 border rounded-lg text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-900 ${
                    errors.fullName ? 'border-red-500' : 'border-slate-300'
                  }`}
                />
                {errors.fullName && <p className="text-xs text-red-500 mt-1">{errors.fullName}</p>}
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-600 mb-1">
                    Nomor Induk Kependudukan (NIK) <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    maxLength={16}
                    placeholder="16 digit angka KTP"
                    value={formData.nik}
                    onChange={(e) => setFormData({ ...formData, nik: e.target.value.replace(/\D/g, '') })}
                    className={`w-full px-3.5 py-2.5 bg-slate-50 border rounded-lg text-sm font-mono text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-900 ${
                      errors.nik ? 'border-red-500' : 'border-slate-300'
                    }`}
                  />
                  {errors.nik && <p className="text-xs text-red-500 mt-1">{errors.nik}</p>}
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-600 mb-1">
                    Tanggal Lahir <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="date"
                    value={formData.birthDate}
                    onChange={(e) => setFormData({ ...formData, birthDate: e.target.value })}
                    className={`w-full px-3.5 py-2.5 bg-slate-50 border rounded-lg text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-900 ${
                      errors.birthDate ? 'border-red-500' : 'border-slate-300'
                    }`}
                  />
                  {errors.birthDate && <p className="text-xs text-red-500 mt-1">{errors.birthDate}</p>}
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-600 mb-1">
                    Jenis Kelamin
                  </label>
                  <select
                    value={formData.gender}
                    onChange={(e) => setFormData({ ...formData, gender: e.target.value })}
                    className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-300 rounded-lg text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-900"
                  >
                    <option value="Laki-laki">Laki-laki</option>
                    <option value="Perempuan">Perempuan</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-600 mb-1">
                    No WhatsApp Aktif <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="tel"
                    placeholder="08123456789"
                    value={formData.whatsapp}
                    onChange={(e) => setFormData({ ...formData, whatsapp: e.target.value })}
                    className={`w-full px-3.5 py-2.5 bg-slate-50 border rounded-lg text-sm font-mono text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-900 ${
                      errors.whatsapp ? 'border-red-500' : 'border-slate-300'
                    }`}
                  />
                  {errors.whatsapp && <p className="text-xs text-red-500 mt-1">{errors.whatsapp}</p>}
                </div>
              </div>
            </div>
          )}

          {/* STEP 2: Education & Domicile */}
          {step === 2 && (
            <div className="space-y-4 animate-in fade-in">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-600 mb-1">
                    Pendidikan Terakhir
                  </label>
                  <select
                    value={formData.lastEducation}
                    onChange={(e) => setFormData({ ...formData, lastEducation: e.target.value })}
                    className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-300 rounded-lg text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-900"
                  >
                    <option value="SMK">SMK (Sekolah Menengah Kejuruan)</option>
                    <option value="SMA/MA">SMA / MA</option>
                    <option value="D3">Diploma 3 (D3)</option>
                    <option value="D4/S1">Sarjana Terapan / S1</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-600 mb-1">
                    Jurusan / Program Studi <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    placeholder="cth: Teknik Otomasi, RPL, Mesin, IPA"
                    value={formData.major}
                    onChange={(e) => setFormData({ ...formData, major: e.target.value })}
                    className={`w-full px-3.5 py-2.5 bg-slate-50 border rounded-lg text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-900 ${
                      errors.major ? 'border-red-500' : 'border-slate-300'
                    }`}
                  />
                  {errors.major && <p className="text-xs text-red-500 mt-1">{errors.major}</p>}
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-600 mb-1">
                  Nama Asal Sekolah / Universitas <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  placeholder="Contoh: SMKN 1 Jakarta / Politeknik Negeri Jakarta"
                  value={formData.schoolName}
                  onChange={(e) => setFormData({ ...formData, schoolName: e.target.value })}
                  className={`w-full px-3.5 py-2.5 bg-slate-50 border rounded-lg text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-900 ${
                    errors.schoolName ? 'border-red-500' : 'border-slate-300'
                  }`}
                />
                {errors.schoolName && <p className="text-xs text-red-500 mt-1">{errors.schoolName}</p>}
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-600 mb-1">
                    Kota / Kabupaten Domisili Saat Ini <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    placeholder="cth: Surabaya, Cikarang, Bandung"
                    value={formData.city}
                    onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                    className={`w-full px-3.5 py-2.5 bg-slate-50 border rounded-lg text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-900 ${
                      errors.city ? 'border-red-500' : 'border-slate-300'
                    }`}
                  />
                  {errors.city && <p className="text-xs text-red-500 mt-1">{errors.city}</p>}
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-600 mb-1">
                    Membutuhkan Fasilitas Asrama LPK?
                  </label>
                  <select
                    value={formData.needsDormitory}
                    onChange={(e) => setFormData({ ...formData, needsDormitory: e.target.value })}
                    className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-300 rounded-lg text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-900"
                  >
                    <option value="Ya">Ya, membutuhkan asrama gratis</option>
                    <option value="Tidak">Tidak, pulang-pergi mandiri</option>
                  </select>
                </div>
              </div>
            </div>
          )}

          {/* STEP 3: Program & Track selection */}
          {step === 3 && (
            <div className="space-y-4 animate-in fade-in">
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-600 mb-1">
                  Pilihan Kejuruan Pelatihan Vokasi
                </label>
                <select
                  value={formData.programId}
                  onChange={(e) => setFormData({ ...formData, programId: e.target.value })}
                  className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-300 rounded-lg text-sm font-semibold text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-900"
                >
                  {PROGRAMS_DATA.map((prog) => (
                    <option key={prog.id} value={prog.id}>
                      {prog.title} ({prog.duration} · {prog.subsidyType})
                    </option>
                  ))}
                </select>
                <p className="text-[11px] text-slate-500 mt-1">
                  Lokasi Praktik: {selectedProgramObj.location} · {selectedProgramObj.hours} Jam Pelajaran
                </p>
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-600 mb-1">
                  Jalur Pendaftaran
                </label>
                <select
                  value={formData.track}
                  onChange={(e) => setFormData({ ...formData, track: e.target.value })}
                  className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-300 rounded-lg text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-900"
                >
                  <option value="Beasiswa Kemnaker (Gratis 100%)">
                    Jalur Beasiswa Kemnaker RI (Gratis 100% didanai APBN)
                  </option>
                  <option value="Jalur Pemagangan Industri">
                    Jalur Kerjasama Industri & On-the-Job Training
                  </option>
                  <option value="Jalur Mandiri / Up-Skilling">
                    Jalur Mandiri Reguler / Kelas Eksekutif
                  </option>
                </select>
              </div>

              <div className="p-4 bg-slate-50 rounded-xl border border-slate-200 space-y-2 text-xs">
                <div className="font-bold text-slate-900">Ketentuan Pelatihan:</div>
                <p className="text-slate-600 leading-relaxed">
                  Peserta yang lolos diwajibkan mengikuti pelatihan secara penuh, mematuhi tata tertib workshop industri, dan bersedia mengikuti Uji Kompetensi BNSP serta program penyaluran kerja Bursa Kerja Khusus (BKK).
                </p>
                <label className="flex items-start gap-2 pt-2 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={formData.agreement}
                    onChange={(e) => setFormData({ ...formData, agreement: e.target.checked })}
                    className="mt-0.5 rounded border-slate-300 text-blue-900 focus:ring-blue-900"
                  />
                  <span className="text-slate-700 leading-snug">
                    Saya menyatakan data yang saya isi adalah benar dan saya berkomitmen mengikuti seluruh tahapan seleksi hingga tuntas.
                  </span>
                </label>
                {errors.agreement && <p className="text-xs text-red-500">{errors.agreement}</p>}
              </div>
            </div>
          )}

          {/* STEP 4: Success Ticket */}
          {step === 4 && (
            <div className="space-y-6 text-center animate-in fade-in">
              <div className="w-14 h-14 bg-emerald-100 text-emerald-700 rounded-full flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-8 h-8" />
              </div>

              <div>
                <h3 className="text-xl font-bold text-slate-900">
                  Pendaftaran Berhasil Dikirimkan!
                </h3>
                <p className="text-xs text-slate-600 mt-1 max-w-md mx-auto">
                  Data pendaftaran Anda telah tercatat pada pangkalan data seleksi penerimaan pelatihan vokasi Mitra Kemnaker RI.
                </p>
              </div>

              {/* Digital Registration Slip */}
              <div className="bg-slate-50 rounded-xl border-2 border-dashed border-slate-300 p-5 text-left text-xs space-y-3 max-w-md mx-auto">
                <div className="flex items-center justify-between pb-2 border-b border-slate-200">
                  <span className="font-bold text-slate-500 uppercase tracking-wider">
                    Nomor Bukti Registrasi
                  </span>
                  <span className="font-mono font-bold text-sm text-blue-900 bg-blue-50 px-2 py-0.5 rounded border border-blue-200">
                    {registrationId}
                  </span>
                </div>

                <div className="grid grid-cols-2 gap-2 text-slate-700">
                  <div>
                    <span className="text-slate-400 block text-[10px]">Nama Peserta:</span>
                    <strong className="text-slate-900">{formData.fullName}</strong>
                  </div>
                  <div>
                    <span className="text-slate-400 block text-[10px]">NIK Terdaftar:</span>
                    <span className="font-mono">{formData.nik.slice(0, 6)}******{formData.nik.slice(-4)}</span>
                  </div>
                  <div>
                    <span className="text-slate-400 block text-[10px]">Program Studi:</span>
                    <span className="font-medium text-slate-900">{selectedProgramObj.title}</span>
                  </div>
                  <div>
                    <span className="text-slate-400 block text-[10px]">Jalur Pendaftaran:</span>
                    <span className="font-semibold text-emerald-700">{formData.track}</span>
                  </div>
                </div>

                <div className="pt-2 border-t border-slate-200 flex items-center justify-between text-[11px] text-slate-500 font-mono">
                  <span>Waktu Kirim:</span>
                  <span>{submittedAt}</span>
                </div>
              </div>

              {/* Next steps instruction */}
              <div className="p-4 bg-amber-50 rounded-xl border border-amber-200 text-left text-xs space-y-1.5 text-amber-950">
                <strong className="block font-bold text-amber-900">Langkah Selanjutnya:</strong>
                <p>1. Simpan tangkapan layar atau cetak nomor registrasi di atas sebagai bukti pendaftaran.</p>
                <p>2. Tim administrasi Balai akan menghubungi Anda melalui WhatsApp ({formData.whatsapp}) dalam 1x24 jam untuk jadwal tes psikotes & tes logika online.</p>
                <p>3. Pengumuman seleksi tahap 1 diumumkan pada tanggal 9 Mei 2026.</p>
              </div>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
                <button
                  onClick={() => window.print()}
                  className="w-full sm:w-auto px-4 py-2.5 text-xs font-semibold text-slate-700 bg-white hover:bg-slate-100 border border-slate-300 rounded-lg transition-colors flex items-center justify-center gap-1.5 cursor-pointer"
                >
                  <Printer className="w-4 h-4" />
                  <span>Cetak Bukti Pendaftaran</span>
                </button>
                <button
                  onClick={onClose}
                  className="w-full sm:w-auto px-6 py-2.5 text-xs font-bold text-white bg-blue-900 hover:bg-blue-800 rounded-lg transition-colors cursor-pointer"
                >
                  Selesai & Kembali ke Beranda
                </button>
              </div>
            </div>
          )}
        </div>

        {/* Modal Navigation Buttons (if not step 4) */}
        {step < 4 && (
          <div className="bg-slate-50 border-t border-slate-200 px-6 py-4 flex items-center justify-between">
            {step > 1 ? (
              <button
                onClick={() => setStep(step - 1)}
                className="px-4 py-2 text-xs font-semibold text-slate-700 hover:text-slate-900 transition-colors flex items-center gap-1 cursor-pointer"
              >
                <ArrowLeft className="w-3.5 h-3.5" />
                <span>Sebelumnya</span>
              </button>
            ) : (
              <div></div>
            )}

            <button
              onClick={handleNext}
              className="px-5 py-2.5 text-xs font-bold text-white bg-blue-900 hover:bg-blue-800 rounded-lg shadow-sm transition-all flex items-center gap-1.5 cursor-pointer"
            >
              <span>{step === 3 ? 'Kirim Pendaftaran' : 'Lanjutkan'}</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
