export const siteConfig = {
  name: "Phoebe Bintoro",
  title: "Natural Sciences (Plant Sciences) @ Cambridge",
  description: "Portfolio website of Phoebe Bintoro",
  accentColor: "#1d4ed8",
  social: {
    email: "pb836@cam.ac.uk",
    linkedin: "https://linkedin.com/in/phoebebintoro",
    github: "https://github.com/frizbeey",
  },
  aboutMe:
    `I’m a final year undergraduate at the University of Cambridge, reading Natural Sciences with a specialization in Plant Sciences, under the generous Jardine Foundation Scholarship.
     
     My research interests lie in the intersection of interdisciplinary biological fields, whether it is in -omics, dynamic modelling, or biomaterials engineering, spanning research institutes across Indonesia, the UK, and Switzerland.  I grew up doing competitive debating (NSDC, AHSDC), STEM olympiads (AMC, WMI, CEMC, SMO, SEAMO, APMOPS, CMS, SASMO), and accelerated research (Applied Science Academy). 
     
     On the side, I teach, play volleyball, run my tiramisu business (when I’m back home), concoct earl grey matcha lattes, and collect tiny figurines. `,
  skills: ["Computational biology", "Bioinformatics", "Mathematical modelling", "Computer vision", "Biomaterials"],
  projects: [
    {
      name: "Semi-discrete modelling of pine wilt disease: vector seasonality, parameter sensitivity, and epidemic control",
      description:
        "Developing deterministic and stochastic epidemiological models of pine wilt disease to simulate transmission dynamics, analyse parameter and sensitivity analyses, and evaluate control strategies.",
      image: "/projects/tau_leap_30.png",
      skills: ["Python", "Epidemiological modelling", "Stochastic simulation", "Sensitivity analysis"],
    },
    {
      name: "Computer vision-guided algorithm for directed 3D cell network morphogenesis in photodegradable hydrogels",
      description:
        "Built a computer-vision pipeline that converts microscopy z-stacks into printable 3D microchannel networks, enabling biomimetic reconstruction of osteocyte lacuno-canalicular structures in photodegradable hydrogels.",
      image: "/projects/3D_reconstruction.gif",
      skills: ["Python", "Computer vision", "Image segmentation", "Image processing", "3D reconstruction", "CLSM", "Biomaterials"],
    },
    {
      name: "Detection, analysis, and evaluation of pathogenic/likely pathogenic novel and noncanonical variants in breast cancer using NGS and bioinformatics approaches",
      description:
        "Implemented an NGS variant-calling pipeline to identify and analyse pathogenic and noncanonical mutations in breast cancer genes from Illumina sequencing data supported with review of clinical literature.",
      image: "/projects/EGFR_lollipop.png",
      skills: ["Python", "Bioinformatics", "NGS analysis", "Variant calling", "Sequence alignment"],
    },
    {
      name: "Physical and mechanical assessment of kombucha bacteria cellulose as an epidermal drug medium with antibacterial properties of Piper betle and collagen",
      description:
        "Investigated kombucha-derived bacterial cellulose as a biomaterial for antimicrobial wound dressings by testing mechanical properties, absorbency, and antibacterial activity with plant extracts and collagen.",
      image: "/projects/Screen Shot 2022-11-02 at 20.34.42.png",
      skills: ["Biomaterials", "Antimicrobial assays", "Microbiology", "Tensile testing"],
    },
    {
      name: "Portable image analyzer for indicators with OpenCV",
      description:
        "Developed a Raspberry Pi–based computer vision device that automatically reads pH indicator strips using RGB colour analysis, published at ICTIIA 2022.",
      link: "https://ieeexplore.ieee.org/document/9935895/",
      image: "/projects/2022-03-10-182856_647x748_scrot.png",
      skills: ["Python", "Computer vision", "Image segmentation", "Image processing"],
    },
    {
      name: "Isolation, characterization, and assessment of chitosan and melanin from the larval, pupal, and imago stages of black soldier fly (Hermetia illucens)",
      description:
        "Extracted and characterised melanin–chitosan complexes from different life stages of Hermetia illucens using FTIR, SEM-EDS, and antimicrobial assays to evaluate their bioactive properties.",
      image: "/projects/2500.Jpg",
      skills: ["FTIR spectroscopy", "SEM microscopy", "Antimicrobial assays", "Nanomaterials", "Biopolymer extraction"],
    },
   ],
  experience: [
    {
      company: "Jardine Scholars Council",
      title: "President (Nov 2025 - Present); Cambridge Vice President, Treasurer (Nov 2024 - 25); Treasurer, Social Media Manager (Nov 2023 - 24)",
      dateRange: "Nov 2023 - Present",
      bullets: [
        "Coordinating outreach, educational, and recreational events with the team for a community of 400+ Jardine Scholars (undergraduates, postgraduates, alumni) in the University of Cambridge and Oxford, and internationally",
        "Publishing monthly mailing lists to current Scholars and alumni for upcoming events, news, and surveys within the community",
        "Spearheaded the 3-days 2-nights Windsor Retreat at Cumberland Lodge for personal development and recreation, moderated an alumni talk show in banking, trading, academia, medicine, energy, and law for current Scholars",
        "Organized the 2024 and 2025 end-of-year formal for 50+ participants across the UK, including transport, food and beverage, and reimbursement fees",
        "Secured £15,000 in funds from the Jardine Foundation by coordinating and reporting termly fund transfers, cost breakdowns, and reimbursements between 70+ active scholars in both universities, the Jardine Foundation, and third parties",
        "Managed the community's Instagram and Whatsapp with engaging announcements, event recaps, and profile highlights, reaching 500+ accounts and increasing net engagement by 15% in the first 3 months",
      ],
    },
    {
      company: "Freelance",
      title: "Subject and University Admissions Tutor",
      dateRange: "Oct 2023 - Present",
      bullets: [
        "Tutoring 60+ students as a subcontractor for 3 companies in Oxbridge applications (mock interviews, admissions exams, application consultation), multiple school curriculums (GCSE, A Level, IB), and STEM competitions",
        "Providing performance feedback and homework for students to consolidate material understanding, along with comprehensive evaluation and model answers for revision by tailoring teaching strategies with the students’ needs",
        "Producing and utilizing self-made learning materials in tandem with widely used textbooks during lessons",
      ],
    },
    {
      company: "PPI Cambridge (Cambridge University Indonesia Association)",
      title: "Treasurer",
      dateRange: "Oct 2024 - Nov 2025",
      bullets: [
        "Coordinated and presented for international and national outreach, educational, and recreational events regarding Indonesia and the University of Cambridge",
        "Managed the organization’s business account and reporting to the Student Union Treasurer with budget proposals, reimbursement forms, expenses tracker, and reimbursement logs for a community of 1300+ Indonesian students and professionals in Cambridge",
      ],
    },
  ],
   education: [
     {
       school: "University of Cambridge",
       degree: "BA (Hons) in Natural Sciences",
       dateRange: "2023 - present",
       achievements: [
         "Received USD 250,000 merit-based Jardine scholarship covering tuition, college, travel, and living costs for the undergraduate and integrated master’s degree; one out of 10 students from Southeast Asia, mainland China, and Hong Kong",
       ],
     },
     {
       school: "Sekolah Pelita Harapan Lippo Village",
       degree: "International Baccalaureate Diploma Programme",
       dateRange: "2019 - 2023",
       achievements: [
        "Awarded IBDP: 44/45, awarded Bilingual Diploma, A in TOK",
        "Received USD 50,000 merit-based scholarship covering tuition and administration fees for 4 years",
        "Honors in Mathematics Analysis and Approaches HL, Biology HL, Physics HL, Bahasa Indonesia Language and Literature SL, Theory of Knowledge",
        "Awarded Student Honor Roll, Scholar Athlete, and Highest Academic Achievement",
       ],
     },
   ],
 };
