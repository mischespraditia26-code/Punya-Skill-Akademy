import React, { useState, useMemo } from 'react';
import { Clock, ShieldCheck, ArrowRight, BookOpen, Search } from 'lucide-react';
import { Program, PROGRAMS_DATA } from '../data/mockData';
import { ProgramDetailModal } from './ProgramDetailModal';

interface ProgramCatalogueProps {
  onSelectProgramForRegistration: (programId: string) => void;
}

export const ProgramCatalogue: React.FC<ProgramCatalogueProps> = ({ onSelectProgramForRegistration }) => {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [selectedDetailProgram, setSelectedDetailProgram] = useState<Program | null>(null);

  const categories = [
    { id: 'all', label: 'Semua Bidang' },
    { id: 'otomasi', label: 'Otomasi & Robotika' },
    { id: 'teknologi', label: 'Teknologi & AI' },
    { id: 'pengelasan', label: 'Pengelasan Industri' },
    { id: 'k3_industri', label: 'K3 & Lingkungan Kerja' },
    { id: 'logistik', label: 'Logistik & SCM' }
  ];

  const filteredPrograms = useMemo(() => {
    return PROGRAMS_DATA.filter((prog) => {
      const matchCategory = activeCategory === 'all' || prog.category === activeCategory;
      const matchSearch =
        prog.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        prog.shortDesc.toLowerCase().includes(searchQuery.toLowerCase()) ||
        prog.skkniCode.toLowerCase().includes(searchQuery.toLowerCase());
      return matchCategory && matchSearch;
    });
  }, [activeCategory, searchQuery]);

  return (
    <section id="program-pelatihan" className="py-16 sm:py-20 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
          <div className="max-w-2xl">
            <div className="flex items-center gap-2 text-xs font-semibold text-blue-900 mb-2">
              <span>Kurikulum Terakreditasi Nasional</span>
              <span aria-hidden="true" className="text-slate-400">·</span>
              <span>Standar Kerja SKKNI Kemnaker RI</span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight">
              Program Pelatihan Berbasis Kompetensi (PBK)
            </h2>
            <p className="mt-3 text-slate-600 text-sm sm:text-base leading-relaxed">
              Pilihan program kejuruan unggulan dengan kurikulum link-and-match kebutuhan industri manufaktur, teknologi, keselamatan kerja, dan logistik modern.
            </p>
          </div>

          {/* Search Box */}
          <div className="w-full md:w-72 relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-slate-400">
              <Search className="w-4 h-4" />
            </div>
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Cari kejuruan atau SKKNI..."
              className="w-full pl-9 pr-4 py-2.5 bg-white border border-slate-300 rounded-lg text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-900 focus:border-transparent transition-all"
            />
          </div>
        </div>

        {/* Category Tabs (Segmented Control Buttons) */}
        <div className="flex items-center gap-1.5 overflow-x-auto pb-3 mb-8 no-scrollbar">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-4 py-2 text-xs font-semibold rounded-lg transition-colors whitespace-nowrap shrink-0 cursor-pointer ${
                activeCategory === cat.id
                  ? 'bg-blue-900 text-white shadow-sm'
                  : 'bg-white text-slate-600 hover:text-slate-900 hover:bg-slate-100 border border-slate-200'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Programs Grid */}
        {filteredPrograms.length === 0 ? (
          <div className="bg-white p-12 text-center rounded-2xl border border-slate-200">
            <p className="text-slate-500 text-sm">Tidak ditemukan program pelatihan yang sesuai pencarian.</p>
            <button
              onClick={() => {
                setActiveCategory('all');
                setSearchQuery('');
              }}
              className="mt-3 text-xs font-semibold text-blue-900 hover:underline"
            >
              Reset Filter Pencarian
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredPrograms.map((program) => {
              const remainingSeats = program.quota - program.enrolled;
              const fillPercentage = Math.round((program.enrolled / program.quota) * 100);

              return (
                <div
                  key={program.id}
                  className="bg-white rounded-xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between overflow-hidden group"
                >
                  <div className="p-6">
                    {/* Unboxed Header Metadata */}
                    <div className="flex items-center justify-between text-xs text-slate-500 mb-3">
                      <span className="font-semibold text-blue-900">{program.batch}</span>
                      <span className="font-mono">{program.duration}</span>
                    </div>

                    <h3 className="text-lg font-bold text-slate-900 group-hover:text-blue-900 transition-colors leading-snug">
                      {program.title}
                    </h3>

                    <p className="mt-2 text-xs text-slate-600 leading-relaxed line-clamp-3">
                      {program.shortDesc}
                    </p>

                    {/* Certification & Standard */}
                    <div className="mt-4 pt-3 border-t border-slate-100 space-y-2 text-xs">
                      <div className="flex items-start gap-2 text-slate-700">
                        <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                        <span className="font-medium leading-tight">{program.certification}</span>
                      </div>
                      <div className="flex items-center gap-2 text-slate-500">
                        <Clock className="w-4 h-4 text-amber-500 shrink-0" />
                        <span>{program.hours} Jam Pelajaran (JP) Praktek & Teori</span>
                      </div>
                    </div>

                    {/* Seat status strip */}
                    <div className="mt-5 bg-slate-50 p-3 rounded-lg border border-slate-100">
                      <div className="flex items-center justify-between text-xs mb-1.5">
                        <span className="text-slate-600 font-medium">{program.subsidyType}</span>
                        <span className="text-slate-900 font-bold font-mono">
                          {program.enrolled}/{program.quota} Siswa
                        </span>
                      </div>
                      <div className="w-full bg-slate-200 h-1.5 rounded-full overflow-hidden">
                        <div
                          className={`h-full rounded-full transition-all duration-300 ${
                            fillPercentage >= 85 ? 'bg-amber-500' : 'bg-blue-900'
                          }`}
                          style={{ width: `${fillPercentage}%` }}
                        ></div>
                      </div>
                      <div className="mt-1.5 flex items-center justify-between text-[11px] text-slate-500">
                        <span>Sisa kuota pendaftaran:</span>
                        <span className="font-semibold text-amber-700 font-mono">
                          {remainingSeats} kursi tersisa
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Card Actions */}
                  <div className="p-4 bg-slate-50/70 border-t border-slate-200 flex items-center gap-2.5">
                    <button
                      onClick={() => setSelectedDetailProgram(program)}
                      className="flex-1 px-3 py-2 text-xs font-semibold text-slate-700 bg-white hover:bg-slate-100 border border-slate-300 rounded-lg transition-colors flex items-center justify-center gap-1.5 cursor-pointer whitespace-nowrap"
                    >
                      <BookOpen className="w-3.5 h-3.5 text-slate-500" />
                      <span>Silabus & SKKNI</span>
                    </button>

                    <button
                      onClick={() => onSelectProgramForRegistration(program.id)}
                      className="flex-1 px-3.5 py-2 text-xs font-bold text-white bg-blue-900 hover:bg-blue-800 rounded-lg shadow-sm transition-all flex items-center justify-center gap-1 cursor-pointer whitespace-nowrap"
                    >
                      <span>Daftar</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        )}

        {/* Modal for detail */}
        {selectedDetailProgram && (
          <ProgramDetailModal
            program={selectedDetailProgram}
            onClose={() => setSelectedDetailProgram(null)}
            onApply={(id) => {
              setSelectedDetailProgram(null);
              onSelectProgramForRegistration(id);
            }}
          />
        )}
      </div>
    </section>
  );
};
