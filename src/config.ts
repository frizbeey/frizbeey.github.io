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
    `Hello! I’m Phoebe, a final year undergraduate at the University of Cambridge, reading Natural Sciences with a specialization in Plant Sciences, under the generous Jardine Foundation Scholarship.
     
     My research interests lie in the intersection of interdisciplinary biological fields, whether it is in -omics, dynamic modelling, or biomaterials engineering, spanning research institutes across Indonesia, the UK, and Switzerland.  I grew up doing competitive debating (NSDC, AHSDC), STEM olympiads (AMC, WMI, CEMC, SMO, SEAMO, APMOPS, CMS, SASMO), and accelerated research (Applied Science Academy). 
     
     On the side, I teach, play volleyball, run my tiramisu business (when I’m back home), concoct earl grey matcha lattes, and collect tiny figurines. `,
  skills: ["Computational biology", "Bioinformatics", "Mathematical modelling", "Computer vision", "Biomaterials"],
  projects: [
    {
      name: "Modelling pine wilt disease: vector seasonality, epidemic control, and stochasticity",
      description:
        "Developing deterministic and stochastic epidemiological models of pine wilt disease to simulate transmission dynamics, analyse parameter and sensitivity analyses, and evaluate control strategies.",
      link: "https://aidevroundup.com/?ref=devportfolio",
      skills: ["Python", "Epidemiological modelling", "Stochastic simulation", "Sensitivity analysis"],
    },
    {
      name: "Computer vision-guided algorithm for directed 3D cell network morphogenesis in photodegradable hydrogels",
      description:
        "Built a computer-vision pipeline that converts microscopy z-stacks into printable 3D microchannel networks, enabling biomimetic reconstruction of osteocyte lacuno-canalicular structures in photodegradable hydrogels.",
      link: "https://fullstackextensions.com/?ref=devportfolio",
      skills: ["Python", "Computer vision", "Image segmentation", "Image processing", "3D reconstruction", "CLSM", "Biomaterials"],
    },
    {
      name: "Detection, analysis, and evaluation of pathogenic/likely pathogenic novel and noncanonical variants in breast cancer using NGS and bioinformatics approaches",
      description:
        "Implemented an NGS variant-calling pipeline to identify and analyse pathogenic and noncanonical mutations in breast cancer genes from Illumina sequencing data supported with review of clinical literature.",
      link: "https://extensionkit.io/?ref=devportfolio",
      skills: ["Python", "Bioinformatics", "NGS analysis", "Variant calling", "Sequence alignment"],
    },
    {
      name: "Physical and mechanical assessment of kombucha bacteria cellulose as an epidermal drug medium with antibacterial properties of Piper betle and collagen",
      description:
        "Investigated kombucha-derived bacterial cellulose as a biomaterial for antimicrobial wound dressings by testing mechanical properties, absorbency, and antibacterial activity with plant extracts and collagen.",
      link: "https://extensionkit.io/?ref=devportfolio",
      skills: ["Biomaterials", "Antimicrobial assays", "Microbiology", "Tensile testing"],
    },
    {
      name: "Portable image analyzer for indicators with OpenCV",
      description:
        "Developed a Raspberry Pi–based computer vision device that automatically reads pH indicator strips using RGB colour analysis, published at ICTIIA 2022.",
      link: "https://extensionkit.io/?ref=devportfolio",
      skills: ["Python", "Computer vision", "Image segmentation", "Image processing"],
    },
    {
      name: "Isolation, characterization, and assessment of chitosan and melanin from the larval, pupal, and imago stages of black soldier fly (Hermetia illucens)",
      description:
        "Extracted and characterised melanin–chitosan complexes from different life stages of Hermetia illucens using FTIR, SEM-EDS, and antimicrobial assays to evaluate their bioactive properties.",
      link: "https://extensionkit.io/?ref=devportfolio",
      skills: ["FTIR spectroscopy", "SEM microscopy", "Antimicrobial assays", "Nanomaterials", "Biopolymer extraction"],
    },
//   ],
//   experience: [
//     {
//       company: "Tech Company",
//       title: "Senior Software Engineer",
//       dateRange: "Jan 2022 - Present",
//       bullets: [
//         "Led development of microservices architecture serving 1M+ users",
//         "Reduced API response times by 40% through optimization",
//         "Mentored team of 5 junior developers",
//       ],
//     },
//     {
//       company: "Startup Inc",
//       title: "Full Stack Developer",
//       dateRange: "Jun 2020 - Dec 2021",
//       bullets: [
//         "Built and launched MVP product from scratch using React and Node.js",
//         "Implemented CI/CD pipeline reducing deployment time by 60%",
//         "Collaborated with product team to define technical requirements",
//       ],
//     },
//     {
//       company: "Digital Agency",
//       title: "Frontend Developer",
//       dateRange: "Aug 2018 - May 2020",
//       bullets: [
//         "Developed responsive web applications for 20+ clients",
//         "Improved site performance scores by 35% on average",
//         "Introduced modern JavaScript frameworks to legacy codebases",
//       ],
//     },
//   ],
   education: [
     {
       school: "University of Cambridge",
       degree: "BA (Hons) in Natural Sciences",
       dateRange: "2023 - present",
       achievements: [
         "Received USD 250,000 merit-based Jardine scholarship covering tuition, college, travel, and living costs for the undergraduate and integrated master’s degree at University of Cambridge; one out of 10 students from Southeast Asia, mainland China, and Hong Kong",
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
