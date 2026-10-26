import React from 'react';
import { X, Check, Award, BookOpen, Clock, Users, Wrench, Briefcase, FileCheck, ArrowRight } from 'lucide-react';
import { Program } from '../data/mockData';

interface ProgramDetailModalProps {
  program: Program | null;
  onClose: () => void;
  onApply: (programId: string) => void;
}

export const ProgramDetailModal: React.FC<ProgramDetailModalProps> = ({ program, onClose, onApply }) => {
  if (!program) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-900/60 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6 animate-in fade-in duration-200">
      <div 
        className="relative bg-white rounded-2xl max-w-3xl w-full max-h-[90vh] overflow-y-auto shadow-2xl border border-slate-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header banner */}
        <div className="sticky top-0 z-10 bg-slate-900 text-white px-6 py-5 flex items-start justify-between border-b border-slate-800">
          <div className="pr-6">
            <div className="flex items-center gap-2 text-xs font-semibold text-amber-400 mb-1">
              <span>Rencana Pelatihan Berbasis Kompetensi</span>
              <span aria-hidden="true">·</span>
              <span>{program.batch}</span>
            </div>
            <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-white">
              {program.title}
            </h2>
            <div className="mt-2 flex flex-wrap items-center gap-x-4 gap-y-1 text-xs text-slate-300">
              <span className="flex items-center gap-1 font-mono">
                <BookOpen className="w-3.5 h-3.5 text-blue-400" />
                {program.skkniCode}
              </span>
              <span className="flex items-center gap-1">
                <Clock className="w-3.5 h-3.5 text-amber-400" />
                {program.duration} ({program.hours} Jam Pelajaran)
              </span>
              <span className="flex items-center gap-1">
                <Users className="w-3.5 h-3.5 text-emerald-400" />
                {program.subsidyType}
              </span>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 text-slate-400 hover:text-white rounded-lg hover:bg-slate-800 transition-colors shrink-0"
            aria-label="Tutup modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal body */}
        <div className="p-6 space-y-6 text-sm text-slate-700">
          {/* Summary */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-2">
              Deskripsi & Standar Pelatihan
            </h3>
            <p className="text-slate-700 leading-relaxed text-base">
              {program.shortDesc}
            </p>
          </div>

          {/* Unit Kompetensi SKKNI */}
          <div className="bg-slate-50 p-5 rounded-xl border border-slate-200">
            <div className="flex items-center gap-2 mb-3">
              <Award className="w-5 h-5 text-blue-900" />
              <h3 className="font-bold text-slate-900">
                Unit Kompetensi Standar Kerja Nasional (SKKNI)
              </h3>
            </div>
            <ul className="space-y-2.5">
              {program.competencies.map((comp, idx) => (
                <li key={idx} className="flex items-start gap-2.5">
                  <span className="w-5 h-5 rounded-full bg-blue-100 text-blue-900 font-mono text-xs flex items-center justify-center shrink-0 mt-0.5">
                    {idx + 1}
                  </span>
                  <span className="text-slate-800 leading-snug">{comp}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Equipment & Facilities used */}
          <div>
            <div className="flex items-center gap-2 mb-3">
              <Wrench className="w-4 h-4 text-slate-600" />
              <h3 className="font-bold text-slate-900">
                Fasilitas Praktik & Instrumen Standar Industri
              </h3>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {program.equipment.map((item, idx) => (
                <div key={idx} className="flex items-center gap-2 p-2.5 rounded-lg border border-slate-200 bg-white text-xs">
                  <Check className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span className="text-slate-700">{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Career Prospects */}
          <div>
            <div className="flex items-center gap-2 mb-3">
              <Briefcase className="w-4 h-4 text-slate-600" />
              <h3 className="font-bold text-slate-900">
                Prospek Karir & Penempatan Kerja
              </h3>
            </div>
            <div className="flex flex-wrap gap-2">
              {program.careerProspects.map((prospect, idx) => (
                <span
                  key={idx}
                  className="px-3 py-1.5 rounded-md bg-blue-50 text-blue-950 font-medium text-xs border border-blue-100"
                >
                  {prospect}
                </span>
              ))}
            </div>
          </div>

          {/* Entry requirements */}
          <div className="p-4 rounded-xl border border-amber-200 bg-amber-50/60">
            <div className="flex items-center gap-2 mb-2">
              <FileCheck className="w-4 h-4 text-amber-700" />
              <h3 className="font-bold text-amber-900 text-xs uppercase tracking-wide">
                Persyaratan Calon Peserta Pelatihan
              </h3>
            </div>
            <ul className="space-y-1.5 text-xs text-amber-950">
              {program.entryRequirements.map((req, idx) => (
                <li key={idx} className="flex items-start gap-2">
                  <span className="text-amber-600 font-bold">·</span>
                  <span>{req}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Modal footer with action buttons */}
        <div className="sticky bottom-0 bg-white border-t border-slate-200 px-6 py-4 flex flex-col sm:flex-row items-center justify-between gap-3">
          <div className="text-xs text-slate-500 text-center sm:text-left">
            <span>Mulai Pelatihan: </span>
            <strong className="text-slate-900">{program.startDate}</strong>
            <span className="hidden sm:inline"> ({program.location})</span>
          </div>
          <div className="flex items-center gap-3 w-full sm:w-auto">
            <button
              onClick={onClose}
              className="flex-1 sm:flex-none px-4 py-2.5 text-xs font-semibold text-slate-700 hover:text-slate-900 border border-slate-300 rounded-lg transition-colors"
            >
              Kembali
            </button>
            <button
              onClick={() => {
                onClose();
                onApply(program.id);
              }}
              className="flex-1 sm:flex-none px-5 py-2.5 text-xs font-bold text-white bg-blue-900 hover:bg-blue-800 rounded-lg shadow-sm transition-all flex items-center justify-center gap-1.5"
            >
              <span>Daftar Sekarang</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
