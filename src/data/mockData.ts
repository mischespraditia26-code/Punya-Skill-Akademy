export interface Program {
  id: string;
  category: 'teknologi' | 'otomasi' | 'k3_industri' | 'pengelasan' | 'logistik';
  title: string;
  shortDesc: string;
  duration: string;
  hours: number; // Jam Pelajaran (JP)
  certification: string;
  skkniCode: string;
  subsidyType: 'Kemnaker 100% Gratis' | 'Subsidi Parsial' | 'Mandiri / Corporate';
  quota: number;
  enrolled: number;
  batch: string;
  startDate: string;
  location: string;
  featured?: boolean;
  competencies: string[];
  equipment: string[];
  careerProspects: string[];
  entryRequirements: string[];
}

export interface VerifiedCertificate {
  certificateNumber: string;
  holderName: string;
  nik: string;
  programTitle: string;
  scheme: string;
  skkniRef: string;
  completionDate: string;
  validUntil: string;
  score: string;
  status: 'Aktif & Terverifikasi' | 'Kadaluarsa';
  certifyingBody: string;
  registrationNumberKemnaker: string;
  competencyUnits: {
    code: string;
    title: string;
    result: 'Kompeten (K)';
  }[];
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  batch: string;
  program: string;
  quote: string;
  salaryGrowth: string;
  location: string;
}

export interface InstitutionOwnerInfo {
  brandName: string;
  parentCompany: string;
  parentBrand: string;
  founders: {
    name: string;
    role: string;
    degrees: string;
    bio: string;
  }[];
  vinRegistrationKemnaker: string;
  laLpkAccreditation: string;
  siapkerjaCode: string;
  totalAlumni: string;
  establishedYear: string;
  headquarters: string;
}

export const OWNER_INFO: InstitutionOwnerInfo = {
  brandName: 'Skill Academy',
  parentCompany: 'PT Ruang Raya Indonesia',
  parentBrand: 'Ruangguru',
  founders: [
    {
      name: 'Adamas Belva Syah Devara',
      role: 'Founder & Chief Executive Officer (CEO)',
      degrees: 'M.P.A. (Harvard University), M.B.A. (Stanford University), B.B.A. (NTU Singapore)',
      bio: 'Pendiri dan CEO Ruangguru & Skill Academy, mantan Staf Khusus Presiden RI, pelopor ekosistem teknologi pendidikan dan pelatihan vokasi digital terbesar di Asia Tenggara.'
    },
    {
      name: 'Muhammad Iman Usman',
      role: 'Co-Founder & Chief of Operations (COO)',
      degrees: 'M.A. (Columbia University), S.Sos. (Universitas Indonesia)',
      bio: 'Co-Founder Ruangguru & Skill Academy, pegiat advokasi pendidikan pemuda Indonesia, memimpin operasional kemitraan ketenagakerjaan dan pengembangan kurikulum vokasi nasional.'
    }
  ],
  vinRegistrationKemnaker: 'VIN: 2020.10.SA-RUANGGURU.01',
  laLpkAccreditation: 'Terakreditasi LA-LPK Predikat &quot;A&quot; Unggul (SK: 092/LA-LPK/2023)',
  siapkerjaCode: 'ID-LPK-SKILLACADEMY-01',
  totalAlumni: '7,000,000+',
  establishedYear: '2019',
  headquarters: 'Gedung Ruangguru, Jl. Dr. Saharjo No. 161, Tebet, Jakarta Selatan 12860'
};

export const PROGRAMS_DATA: Program[] = [
  {
    id: 'prog-plc-robotika',
    category: 'otomasi',
    title: 'Teknik Mekatronika & Otomasi Industri 4.0',
    shortDesc: 'Penguasaan pemrograman PLC Siemens S7-1200/1500, HMI, SCADA, sensorika industri, dan operasional lengan robot 6-axis berstandar industri manufaktur.',
    duration: '3 Bulan (Intensif)',
    hours: 320,
    certification: 'Sertifikasi BNSP Teknisi Madya Mekatronika + Lisensi Kemnaker',
    skkniCode: 'SKKNI KEP.340/MEN/XII/2019',
    subsidyType: 'Kemnaker 100% Gratis',
    quota: 30,
    enrolled: 26,
    batch: 'Gelombang III - 2026',
    startDate: '10 Mei 2026',
    location: 'Lab Mekatronika Skill Academy - Kampus Jakarta',
    featured: true,
    competencies: [
      'Memprogram dan menguji PLC (Programmable Logic Controller) tingkat lanjut',
      'Integrasi Sensor dan Aktuator Pneumatik/Elektropneumatik Industri',
      'Konfigurasi Human Machine Interface (HMI) & Akuisisi Data SCADA',
      'Kalibrasi dan pemrograman Robotik 6-Axis Fanuc & KUKA',
      'Troubleshooting wiring diagram kontrol listrik industri dan keselamatan kerja'
    ],
    equipment: [
      'Trainer Kit PLC Siemens S7-1500 & Omron Sysmac Studio',
      'Lengan Robot Industri Articulated 6-Axis',
      'Stasiun Festo Didactic Pneumatics & Electro-Pneumatics',
      'Fluke Industrial Digital Multimeter & Digital Oscilloscope'
    ],
    careerProspects: [
      'Automation Engineer',
      'Maintenance Specialist PLC di Pabrik Otomotif & F&B',
      'Robotics Technician',
      'Field Service Engineer Sistem Kontrol'
    ],
    entryRequirements: [
      'Warga Negara Indonesia usia 18 - 30 tahun',
      'Minimal lulusan SMK Jurusan Listrik/Mesin/Elektronika atau D3/S1 Teknik',
      'Sehat jasmani dan tidak buta warna',
      'Lolos tes seleksi logika dasar dan wawancara komitmen'
    ]
  },
  {
    id: 'prog-fullstack-ai',
    category: 'teknologi',
    title: 'Fullstack Web Application & AI Engineering',
    shortDesc: 'Kurikulum rekayasa perangkat lunak modern berbasis React, TypeScript, Node.js, REST/GraphQL API, serta integrasi AI LLM bersama pakar teknologi Skill Academy.',
    duration: '3.5 Bulan (Hybrid)',
    hours: 360,
    certification: 'Sertifikasi BNSP Junior Software Engineer (SKKNI)',
    skkniCode: 'SKKNI KEP.282/MEN/IX/2020',
    subsidyType: 'Kemnaker 100% Gratis',
    quota: 35,
    enrolled: 31,
    batch: 'Gelombang III - 2026',
    startDate: '15 Mei 2026',
    location: 'Skill Academy Tech Hub & Online Lab',
    featured: true,
    competencies: [
      'Pengembangan frontend modern responsif dengan React & TypeScript',
      'Pembangunan arsitektur backend REST API dengan Node.js & Express/FastAPI',
      'Manajemen basis data relasional PostgreSQL dan NoSQL MongoDB',
      'Penerapan CI/CD, Containerization dengan Docker, dan Cloud Deployment',
      'Implementasi antarmuka LLM API Gemini dan rekayasa prompt aplikasi bisnis'
    ],
    equipment: [
      'Workstation Komputer Intel Core i7 / 32GB RAM / Dual Monitor',
      'Dedicated High-Speed Fiber Internet 1 Gbps & Private Cloud Sandbox',
      'Akses Repositori GitHub Enterprise & Cloud Computing Credit'
    ],
    careerProspects: [
      'Frontend / Backend / Fullstack Software Engineer',
      'Web Application Developer',
      'AI Integration Specialist',
      'Quality Assurance (QA) Automation Engineer'
    ],
    entryRequirements: [
      'Warga Negara Indonesia usia 18 - 32 tahun',
      'Lulusan SMA/SMK/D3/S1 semua jurusan dengan minat logika komputasi',
      'Memiliki laptop pribadi minimal RAM 8GB untuk sesi mandiri',
      'Lolos tes logika algoritma dasar'
    ]
  },
  {
    id: 'prog-welder-6g',
    category: 'pengelasan',
    title: 'Pengelasan Industri Lanjut (Welder 3G & 6G SMAW-GMAW)',
    shortDesc: 'Pelatihan juru las presisi tinggi sesuai standar ASME IX dan AWS D1.1 untuk industri migas, manufaktur perkapalan, dan konstruksi alat berat.',
    duration: '3 Bulan (Praktik Penuh)',
    hours: 340,
    certification: 'Sertifikat Juru Las BNSP & Lisensi K3 Juru Las Kemnaker RI',
    skkniCode: 'SKKNI KEP.114/MEN/IV/2018',
    subsidyType: 'Kemnaker 100% Gratis',
    quota: 24,
    enrolled: 22,
    batch: 'Gelombang III - 2026',
    startDate: '20 Mei 2026',
    location: 'Workshop Heavy Industrial Welding - Balai Surabaya',
    featured: true,
    competencies: [
      'Pengelasan pelat dan pipa posisi 1G, 2G, 3G, hingga 6G SMAW & GMAW',
      'Teknik pengelasan TIG/GTAW untuk stainless steel dan carbon steel',
      'Pembacaan simbol gambar teknik pengelasan standar internasional (WPS)',
      'Pengujian hasil las Non-Destructive Testing (Visual, Liquid Penetrant, X-Ray dasar)',
      'Standar Keselamatan dan Kesehatan Kerja Lingkungan Pengelasan Panas'
    ],
    equipment: [
      '24 Booth Pengelasan Modern dengan Exhaust Air Fume Extraction',
      'Mesin Las Multi-Process ESAB & Miller Heavy Duty',
      'Auto-Darkening Welding Helmet 3M Speedglas',
      'Mesin Bending Test & Inspection Bench standar ASME'
    ],
    careerProspects: [
      'Certified 6G Pipe Welder Industri Migas & Offshore',
      'Juru Las Galangan Kapal & Pabrikasi Baja Berat',
      'Inspector Welding Junior',
      'Penyedia Jasa Rekayasa Fabrikasi Mandiri'
    ],
    entryRequirements: [
      'Warga Negara Indonesia pria/wanita usia 18 - 30 tahun',
      'Pendidikan minimal SMA/SMK sederajat (diutamakan Teknik)',
      'Fisik prima, tidak memiliki riwayat asma akut dan tidak buta warna',
      'Lolos tes fisik dan wawancara ketahanan kerja'
    ]
  },
  {
    id: 'prog-ak3u-kemnaker',
    category: 'k3_industri',
    title: 'Pembinaan Ahli K3 Umum (AK3U) Sertifikasi Kemnaker RI',
    shortDesc: 'Pelatihan regulasi ketenagakerjaan, identifikasi bahaya kerja (HIRADC), audit SMK3 PP 50/2012, dan lisensi resmi penunjukan K3 dari Kemenaker.',
    duration: '12 Hari Intensif (120 JP)',
    hours: 120,
    certification: 'SKP & Lisensi Ahli K3 Umum Resmi Kementerian Ketenagakerjaan RI',
    skkniCode: 'Permenaker No. 02/MEN/1992',
    subsidyType: 'Subsidi Parsial',
    quota: 25,
    enrolled: 19,
    batch: 'Gelombang IV - 2026',
    startDate: '2 Juni 2026',
    location: 'Auditorium K3 Skill Academy - Balai Jakarta',
    featured: false,
    competencies: [
      'Memahami perundangan keselamatan & kesehatan kerja Republik Indonesia',
      'Penyusunan dokumen HIRADC (Hazard Identification Risk Assessment & Determining Control)',
      'Manajemen K3 Listrik, Bejana Tekan, Pesawat Angkat-Angkut, dan Bahan Kimia',
      'Penyelidikan kecelakaan kerja (Root Cause Analysis & Incident Report)',
      'Pelaksanaan internal audit SMK3 berdasarkan PP No. 50 Tahun 2012'
    ],
    equipment: [
      'Perangkat Alat Pelindung Diri (APD) Lengkap & Alat Ukur Lingkungan (Sound Level, Lux, Gas Detector)',
      'Simulator Kebakaran APAR & Ruang Tertutup (Confined Space Simulation)',
      'Modul & Perangkat Lunak Manajemen Laporan K3 Terpadu'
    ],
    careerProspects: [
      'HSE (Health, Safety & Environment) Officer',
      'Safety Supervisor di Perusahaan Konstruksi & Manufaktur',
      'Auditor Internal SMK3',
      'Konsultan K3 Lingkungan Kerja'
    ],
    entryRequirements: [
      'Minimal lulusan D3 / S1 semua jurusan (sesuai Permenaker 02/1992)',
      'Fotokopi Ijazah & Transkrip terlegalisir',
      'Surat keterangan sehat dari dokter',
      'Surat rekomendasi perusahaan (bagi utusan instansi) atau surat komitmen mandiri'
    ]
  },
  {
    id: 'prog-logistik-scm',
    category: 'logistik',
    title: 'Digital Logistics, Warehouse & Supply Chain Operations',
    shortDesc: 'Sistem operasional pergudangan modern berbasis Warehouse Management System (WMS), ERP SAP dasar, manajemen armada logistik, dan kepabeanan.',
    duration: '2.5 Bulan',
    hours: 280,
    certification: 'Sertifikasi BNSP Supervisor Pengelolaan Logistik Terpadu',
    skkniCode: 'SKKNI KEP.94/MEN/III/2019',
    subsidyType: 'Kemnaker 100% Gratis',
    quota: 30,
    enrolled: 24,
    batch: 'Gelombang III - 2026',
    startDate: '25 Mei 2026',
    location: 'Lab Simulasi Distribusi Logistik - Balai Surabaya',
    featured: false,
    competencies: [
      'Operasional Warehouse Management System (WMS) & Barcoding RFID',
      'Perencanaan persediaan (Inventory Planning & Safety Stock Analysis)',
      'Manajemen transportasi, routing armada logistik, dan SLA pengiriman',
      'Prosedur Ekspor-Impor kepabeanan (Customs Clearance) Indonesia',
      'Penerapan 5S (Seiri, Seiton, Seiso, Seiketsu, Shitsuke) di area gudang'
    ],
    equipment: [
      'Software WMS & Enterprise Simulation Server',
      'Barcode Scanner Industri & Mobile Computer Handheld Zebra',
      'Miniature Automated Racking System & Pallet Truck Trainer'
    ],
    careerProspects: [
      'Warehouse Supervisor & Logistics Coordinator',
      'Supply Chain Planner di FMCG dan E-Commerce',
      'Fleet & Transportation Dispatcher',
      'Export-Import Logistics Administrator'
    ],
    entryRequirements: [
      'WNI usia 18 - 30 tahun',
      'Minimal lulusan SMA/SMK/D3 sederajat',
      'Mampu mengoperasikan komputer dan spreadsheet',
      'Disiplin dan teliti dalam perhitungan data inventaris'
    ]
  },
  {
    id: 'prog-ev-automotive',
    category: 'otomasi',
    title: 'Teknisi Kendaraan Listrik (EV) & Otomotif Terapan',
    shortDesc: 'Diagnostik sistem kendaraan listrik (Electric Vehicle), modul baterai lithium high-voltage, inverter motor traksi, dan keselamatan penanganan EV.',
    duration: '3 Bulan',
    hours: 320,
    certification: 'Sertifikasi BNSP Teknisi Sistem Kendaraan Listrik Ringan',
    skkniCode: 'SKKNI KEP.198/MEN/VIII/2021',
    subsidyType: 'Kemnaker 100% Gratis',
    quota: 24,
    enrolled: 21,
    batch: 'Gelombang III - 2026',
    startDate: '1 Juni 2026',
    location: 'Workshop EV & Green Mobility Skill Academy - Kampus Jakarta',
    featured: false,
    competencies: [
      'Prosedur keselamatan de-energization sistem tegangan tinggi (High Voltage EV Safety)',
      'Perakitan, pengujian cell balancing, dan diagnosis Battery Management System (BMS)',
      'Pemeriksaan Motor Traksi Listrik AC Synchronous / BLDC dan Inverter',
      'Troubleshooting wiring CAN-Bus dan scan tools diagnostik OBD-II EV',
      'Pemeliharaan stasiun pengisian daya (EV Charger AC Type 2 & DC Fast Charging)'
    ],
    equipment: [
      'Chassis Trainer EV Cutaway Model & Battery Pack Trainer',
      'Insulated High Voltage Tools 1000V Certified VDE',
      'Megger Insulation Tester & EV Diagnostic Scanner Autel MaxiSys',
      'Simulasi Wallbox Charging Station CCS2'
    ],
    careerProspects: [
      'Electric Vehicle Service Technician di Dealer Resmi',
      'Battery Pack Assembly Specialist',
      'EV Charging Infrastructure Support Technician',
      'Teknisi Konversi Kendaraan Konvensional ke Listrik'
    ],
    entryRequirements: [
      'WNI usia 18 - 30 tahun',
      'Minimal lulusan SMK Otomotif / Listrik / Elektronika atau D3 Mesin',
      'Tidak buta warna dan mengerti dasar kelistrikan AC/DC',
      'Lolos tes pemahaman teknik dan keselamatan kerja'
    ]
  }
];

export const VERIFIED_CERTIFICATES: VerifiedCertificate[] = [
  {
    certificateNumber: 'SA-KMNK-2024-88421',
    holderName: 'Rizky Pratama, A.Md.T.',
    nik: '3201290401980002',
    programTitle: 'Teknik Mekatronika & Otomasi Industri 4.0',
    scheme: 'Teknisi Madya Mekatronika (Level 4 KKNI)',
    skkniRef: 'SKKNI KEP.340/MEN/XII/2019',
    completionDate: '18 Oktober 2024',
    validUntil: '18 Oktober 2027',
    score: 'Sangat Memuaskan (Nilai Praktik: 94/100)',
    status: 'Aktif & Terverifikasi',
    certifyingBody: 'LSP Skill Academy by Ruangguru (LSP-P1) - Lisensi BNSP RI',
    registrationNumberKemnaker: 'REG.VIN/SA-RUANGGURU-KMNK/2024/09912',
    competencyUnits: [
      { code: 'MKT.ME01.001.01', title: 'Menerapkan K3 dalam Lingkungan Sistem Mekatronika', result: 'Kompeten (K)' },
      { code: 'MKT.ME02.003.01', title: 'Membuat Program Kontrol Otomasi Berbasis PLC S7', result: 'Kompeten (K)' },
      { code: 'MKT.ME02.007.01', title: 'Melakukan Integrasi Sensorika Industri & HMI Touchscreen', result: 'Kompeten (K)' },
      { code: 'MKT.ME03.002.01', title: 'Troubleshooting Sistem Mekatronika Terintegrasi Robotik', result: 'Kompeten (K)' }
    ]
  },
  {
    certificateNumber: 'SA-BNSP-99120',
    holderName: 'Dewi Anjarwati, S.Kom.',
    nik: '3174095408990001',
    programTitle: 'Fullstack Web Application & AI Engineering',
    scheme: 'Junior Software Engineer (Level 3 KKNI)',
    skkniRef: 'SKKNI KEP.282/MEN/IX/2020',
    completionDate: '24 Januari 2025',
    validUntil: '24 Januari 2028',
    score: 'Dengan Pujian (Nilai Praktik: 96/100)',
    status: 'Aktif & Terverifikasi',
    certifyingBody: 'LSP Teknologi Digital Skill Academy - Badan Nasional Sertifikasi Profesi',
    registrationNumberKemnaker: 'REG.VIN/SA-RUANGGURU-KMNK/2025/01140',
    competencyUnits: [
      { code: 'TIK.SE02.001.01', title: 'Mengimplementasikan Pemrograman Terstruktur & Berorientasi Objek', result: 'Kompeten (K)' },
      { code: 'TIK.SE02.009.01', title: 'Mengembangkan Antarmuka Web Interaktif Berbasis Komponen', result: 'Kompeten (K)' },
      { code: 'TIK.SE02.014.01', title: 'Merancang dan Mengintegrasikan RESTful API & Layanan Cloud', result: 'Kompeten (K)' },
      { code: 'TIK.SE03.003.01', title: 'Menerapkan Pengujian Perangkat Lunak Unit & Integration Testing', result: 'Kompeten (K)' }
    ]
  },
  {
    certificateNumber: 'SA-K3-RI-44719',
    holderName: 'Budi Santoso',
    nik: '3302191505960003',
    programTitle: 'Pembinaan Ahli K3 Umum (AK3U) Kemnaker RI',
    scheme: 'Ahli Keselamatan dan Kesehatan Kerja Umum (AK3U)',
    skkniRef: 'Permenaker No. 02/MEN/1992 & PP No. 50/2012',
    completionDate: '12 November 2024',
    validUntil: '12 November 2027',
    score: 'Lulus Uji Kompetensi Kemenaker RI',
    status: 'Aktif & Terverifikasi',
    certifyingBody: 'Direktorat Jenderal Pembinaan Pengawasan Ketenagakerjaan & K3 Kemnaker RI bekerjasama dengan Skill Academy',
    registrationNumberKemnaker: 'SKP.7721/BINWASK3/PNK3/XI/2024',
    competencyUnits: [
      { code: 'K3.REG.001.01', title: 'Menerapkan Kebijakan & Peraturan Perundangan K3 Nasional', result: 'Kompeten (K)' },
      { code: 'K3.MAN.002.01', title: 'Melakukan Analisa Risiko dan Hazard Identification (HIRADC)', result: 'Kompeten (K)' },
      { code: 'K3.AUD.004.01', title: 'Melakukan Audit Internal SMK3 PP No. 50 Tahun 2012', result: 'Kompeten (K)' },
      { code: 'K3.INC.005.01', title: 'Investigasi dan Pelaporan Insiden Kecelakaan Kerja', result: 'Kompeten (K)' }
    ]
  },
  {
    certificateNumber: 'SA-WELD-2024-31',
    holderName: 'Ahmad Fauzi',
    nik: '3578011203000004',
    programTitle: 'Pengelasan Industri Lanjut (Welder 3G & 6G SMAW-GMAW)',
    scheme: 'Juru Las 6G Pipa Posisi Tetap (Level 3 KKNI)',
    skkniRef: 'SKKNI KEP.114/MEN/IV/2018 & ASME IX',
    completionDate: '30 Agustus 2024',
    validUntil: '30 Agustus 2027',
    score: 'Sangat Memuaskan (Hasil Uji NDT X-Ray: Zero Defect)',
    status: 'Aktif & Terverifikasi',
    certifyingBody: 'LSP Logam & Mesin Vokasi Skill Academy - Terlisensi BNSP',
    registrationNumberKemnaker: 'REG.VIN/SA-RUANGGURU-KMNK/2024/07810',
    competencyUnits: [
      { code: 'LAS.PL02.003.01', title: 'Melaksanakan Pengelasan Pelat Baja Karbon Posisi 3G SMAW', result: 'Kompeten (K)' },
      { code: 'LAS.PP03.008.01', title: 'Melaksanakan Pengelasan Pipa Carbon Steel Posisi 6G GMAW/SMAW', result: 'Kompeten (K)' },
      { code: 'LAS.IN01.002.01', title: 'Pemeriksaan Visual Cacat Las Sesuai Standar Penerimaan WPS', result: 'Kompeten (K)' }
    ]
  }
];

export const TESTIMONIALS_DATA: Testimonial[] = [
  {
    id: 'testi-1',
    name: 'Muhammad Ilham Firmansyah',
    role: 'PLC Automation Specialist',
    company: 'PT Schneider Electric Manufacturing Batam',
    batch: 'Alumni Gelombang I 2024',
    program: 'Teknik Mekatronika & Otomasi Industri',
    quote: 'Pelatihan Skill Academy bersama Kemnaker benar-benar mengubah karir saya. Sebelum bergabung, saya kesulitan bersaing karena kurang jam terbang praktik. Fasilitas trainer PLC Siemens dan simulasi robotik di Skill Academy persis dengan di pabrik multinasional. Lewat bursa kerja BKK Skill Academy, seminggu setelah lulus saya langsung dikontrak Schneider Electric.',
    salaryGrowth: 'Naik 2.4x dari UMR awal',
    location: 'Batam, Kepulauan Riau'
  },
  {
    id: 'testi-2',
    name: 'Siti Sarah Rahmadina',
    role: 'Frontend Software Engineer',
    company: 'PT Telkom Indonesia (Persero) Tbk',
    batch: 'Alumni Gelombang II 2024',
    program: 'Fullstack Web Application & AI Engineering',
    quote: 'Saya mengambil jalur Beasiswa Penuh Bantuan Kemnaker di Skill Academy tanpa biaya sepeser pun. Instruktur Ruangguru sangat ahli, kurikulumnya up-to-date sampai ke materi AI dan cloud deployment. Sertifikat BNSP yang saya kantongi sangat diakui saat tes teknis di Telkom.',
    salaryGrowth: 'Penempatan kerja hari ke-14',
    location: 'Jakarta Selatan'
  },
  {
    id: 'testi-3',
    name: 'Dimas Satria Wibowo',
    role: 'HSE Safety Coordinator',
    company: 'PT Wijaya Karya (Persero) Tbk',
    batch: 'Alumni Gelombang III 2024',
    program: 'Pembinaan Ahli K3 Umum (AK3U) Kemnaker RI',
    quote: 'Lisensi resmi Kemnaker RI dan SKP yang diterbitkan lewat Skill Academy sangat cepat dan transparan prosesnya. Ujian evaluasi dilakukan langsung oleh pengawas ketenagakerjaan Kemnaker. Sekarang saya memegang proyek infrastruktur strategis nasional dengan kepercayaan penuh dari manajemen.',
    salaryGrowth: 'Promosi jabatan & sertifikasi resmi',
    location: 'IKN Nusantara'
  }
];

export const INDUSTRY_PARTNERS = [
  { name: 'Astra International', sector: 'Otomotif & Alat Berat' },
  { name: 'PT Telkom Indonesia Tbk', sector: 'Telekomunikasi & Digital' },
  { name: 'PT Wijaya Karya (Persero)', sector: 'Konstruksi & Infrastruktur' },
  { name: 'Schneider Electric', sector: 'Manufaktur & Energi Otomasi' },
  { name: 'PT United Tractors Tbk', sector: 'Pertambangan & Mesin Berat' },
  { name: 'PT Unilever Indonesia Tbk', sector: 'Fast Moving Consumer Goods' },
  { name: 'PT Komatsu Indonesia', sector: 'Manufaktur Alat Berat' },
  { name: 'Bank Mandiri (Persero) Tbk', sector: 'Perbankan & IT Services' }
];

export const FAQS_DATA = [
  {
    q: 'Apakah benar Skill Academy bekerjasama resmi dengan Kementerian Ketenagakerjaan?',
    a: 'Benar. Skill Academy (PT Ruang Raya Indonesia / Ruangguru) merupakan Lembaga Pelatihan Kerja (LPK) resmi terdaftar di Ditjen Binalavotas Kementerian Ketenagakerjaan RI dengan nomor VIN 2020.10.SA-RUANGGURU.01, terakreditasi LA-LPK Predikat A, dan terintegrasi penuh dengan ekosistem SIAPkerja Kemnaker serta program Bantuan Pelatihan Vokasi APBN.'
  },
  {
    q: 'Apakah ada kelas yang 100% gratis dibiayai Kementerian Ketenagakerjaan?',
    a: 'Benar. Melalui program Bantuan Pelatihan Vokasi Pemerintah Republik Indonesia (APBN) kemitraan Ditjen Binalavotas Kemnaker RI dan Skill Academy, peserta yang lolos seleksi berkas dan tes minat bakat mendapatkan fasilitas pelatihan gratis tanpa dipungut biaya pendaftaran maupun SPP bulanan, termasuk modul, seragam praktik, konsumsi harian, dan gratis biaya uji kompetensi sertifikasi BNSP.'
  },
  {
    q: 'Apakah sertifikat yang diterbitkan resmi dan diakui secara nasional & internasional?',
    a: 'Seluruh peserta yang lulus uji kompetensi menerima Sertifikat Kompetensi Kerja Nasional dari BNSP (Badan Nasional Sertifikasi Profesi) berstandar SKKNI dengan barcode verifikasi resmi, serta Lisensi/Surat Keterangan Penunjukan khusus untuk program regulasi Kemnaker RI (seperti K3 dan Pengelasan). Sertifikat ini diakui luas oleh industri dalam negeri maupun jaringan negara ASEAN MRA.'
  },
  {
    q: 'Bagaimana proses penyaluran kerja di Skill Academy?',
    a: 'Skill Academy memiliki unit Bursa Kerja Khusus (BKK) dan Career Development Center yang terintegrasi langsung dengan portal SIAPkerja Kemnaker RI dan 240+ mitra industri terkemuka. Peserta yang lulus akan langsung dijadwalkan wawancara kerja terpusat, magang industri berbayar, atau direct hiring.'
  },
  {
    q: 'Siapa pemilik dan pendiri Skill Academy?',
    a: 'Skill Academy dikembangkan dan dimiliki oleh PT Ruang Raya Indonesia (Ruangguru), yang didirikan oleh Adamas Belva Syah Devara (CEO) dan Muhammad Iman Usman (COO). Skill Academy didirikan sebagai platform pengembangan karir dan pelatihan vokasi nomor 1 di Indonesia untuk menjembatani talenta muda dengan kebutuhan nyata dunia industri.'
  }
];
