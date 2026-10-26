import { useState } from 'react';
import { OfficialGovRibbon } from './components/OfficialGovRibbon';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { AccreditationBadges } from './components/AccreditationBadges';
import { AboutOwnerSection } from './components/AboutOwnerSection';
import { ProgramCatalogue } from './components/ProgramCatalogue';
import { CertificateVerifier } from './components/CertificateVerifier';
import { ScholarshipTracks } from './components/ScholarshipTracks';
import { FacilitiesAndPlacement } from './components/FacilitiesAndPlacement';
import { FaqSection } from './components/FaqSection';
import { Footer } from './components/Footer';
import { RegistrationModal } from './components/RegistrationModal';

export default function App() {
  const [isRegisterOpen, setIsRegisterOpen] = useState(false);
  const [selectedProgramId, setSelectedProgramId] = useState<string | undefined>(undefined);

  const handleOpenRegister = (programId?: string) => {
    setSelectedProgramId(programId);
    setIsRegisterOpen(true);
  };

  const handleScrollToVerifier = () => {
    const el = document.getElementById('cek-sertifikat');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 text-slate-800">
      {/* Top Governmental Status Ribbon */}
      <OfficialGovRibbon />

      {/* Main Navbar complying with Top Bar Contract */}
      <Navbar
        onOpenRegister={() => handleOpenRegister()}
        onOpenVerifier={handleScrollToVerifier}
      />

      {/* Hero Section */}
      <main className="flex-1">
        <Hero
          onOpenRegister={() => handleOpenRegister()}
          onOpenVerifier={handleScrollToVerifier}
        />

        {/* Accreditation & Regulatory Credentials */}
        <AccreditationBadges />

        {/* Profil Lembaga & Pemilik: Skill Academy by Ruangguru */}
        <AboutOwnerSection />

        {/* Vocational Programs Catalogue */}
        <ProgramCatalogue
          onSelectProgramForRegistration={(progId) => handleOpenRegister(progId)}
        />

        {/* Certificate Verification System */}
        <CertificateVerifier />

        {/* Kemnaker Subsidized & Industrial Tracks */}
        <ScholarshipTracks
          onOpenRegister={() => handleOpenRegister()}
        />

        {/* Facilities, Labs & Industrial Placement (BKK) */}
        <FacilitiesAndPlacement />

        {/* Frequently Asked Questions */}
        <FaqSection />
      </main>

      {/* Institutional Footer */}
      <Footer
        onOpenVerifier={handleScrollToVerifier}
        onOpenRegister={() => handleOpenRegister()}
      />

      {/* Multi-step Registration Modal */}
      <RegistrationModal
        isOpen={isRegisterOpen}
        onClose={() => setIsRegisterOpen(false)}
        defaultProgramId={selectedProgramId}
      />
    </div>
  );
}
