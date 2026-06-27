/**
 * Sayt kontenti (kurslar, kitoblar, afzalliklar, statistika).
 * Matnlarni shu yerdan tahrirlash mumkin.
 */

export type Course = {
  id: string;
  title: string;
  description: string;
  /** lucide-react ikonka nomi (Courses komponentida map qilinadi) */
  icon: string;
  /** O'rganiladigan asosiy yo'nalishlar */
  highlights: string[];
  /** Hozircha barchasi "Tez orada" */
  comingSoon: boolean;
};

export const courses: Course[] = [
  {
    id: "sat",
    title: "SAT tayyorgarlik",
    description:
      "Xalqaro universitetlarga kirish uchun SAT imtihoniga to'liq tayyorgarlik — Math va English bo'limlari bo'yicha tizimli darslar.",
    icon: "GraduationCap",
    highlights: ["Math (Algebra, Geometry)", "Reading & Writing", "Sinov imtihonlari"],
    comingSoon: true,
  },
  {
    id: "olympiad",
    title: "Fan olimpiadalari",
    description:
      "Barcha fanlar bo'yicha olimpiadaga tayyorgarlik — matematika, fizika, kimyo, biologiya, informatika va boshqalar.",
    icon: "Trophy",
    highlights: ["Chuqurlashtirilgan dastur", "Masalalar yechish", "Tajribali murabbiylar"],
    comingSoon: true,
  },
  {
    id: "schools",
    title: "Prezident va ixtisoslashtirilgan maktablar",
    description:
      "Prezident, ijod va ixtisoslashtirilgan maktablarga kirish imtihonlariga maxsus tayyorgarlik kurslari.",
    icon: "School",
    highlights: ["Kirish testlari", "Mantiqiy fikrlash", "Fanlardan asoslar"],
    comingSoon: true,
  },
  {
    id: "milliy-sertifikat",
    title: "Milliy sertifikat",
    description:
      "Fanlardan Milliy sertifikat olishga yo'naltirilgan, imtihon formatiga mos amaliy tayyorgarlik.",
    icon: "BadgeCheck",
    highlights: ["Imtihon formati", "Amaliy mashqlar", "Natijaga yo'naltirilgan"],
    comingSoon: true,
  },
  {
    id: "languages",
    title: "Til o'rganish — IELTS & Multilevel",
    description:
      "Ingliz tili va xalqaro/milliy sertifikatlar (IELTS, Multilevel) uchun til ko'nikmalarini rivojlantirish kurslari.",
    icon: "Languages",
    highlights: ["Speaking & Writing", "Listening & Reading", "Mock testlar"],
    comingSoon: true,
  },
];

export type Book = {
  id: string;
  title: string;
  author: string;
  description: string;
  /** Muqova rasm yo'li (public/ ichida). Hozircha placeholder. */
  cover?: string;
  /** Muqova bo'lmasa ishlatiladigan gradient rang */
  accent: string;
  tag?: string;
  demoUrl?: string;
};

export const books: Book[] = [
  {
    id: "book-1",
    title: "Prezident va ixtisoslashtirilgan maktabga topshiruvchilar uchun qo'llanma",
    author: "Bilimnur asoschilari",
    description:
      "Prezident va ixtisoslashtirilgan maktablar imtihonlariga tayyorlanish uchun matematika fanidan mukammal qo'llanma.",
    cover: "/images/books/pr_matematika.jpg",
    accent: "from-primary-500 to-primary-800",
    tag: "Bestseller",
    demoUrl: "/docs/pr_matematika_demo.pdf",
  },
  {
    id: "book-2",
    title: "Kenguru xalqaro olimpiadasi masalalari",
    author: "Bilimnur asoschilari",
    description:
      "Kenguru xalqaro matematika olimpiadasi masalalari (O'zbek va qoraqalpoq tillarida).",
    cover: "/images/books/kenguru.jpg",
    accent: "from-accent-400 to-accent-700",
    demoUrl: "/docs/kenguru_demo.pdf",
  },
  {
    id: "book-3",
    title: "Mantiqiy savollar va tanqidiy fikrlar",
    author: "Bilimnur asoschilari",
    description:
      "Prezident maktabi imtihonlari 2-bosqichi uchun qo'llanma.",
    cover: "/images/books/logic_criticial_thinking.jpg",
    accent: "from-ink-600 to-ink-900",
    demoUrl: "/docs/logic_criticial_thinking_demo.pdf",
  },
];

export type Feature = {
  title: string;
  description: string;
  icon: string;
};

export const features: Feature[] = [
  {
    title: "Online va offline",
    description:
      "O'zingizga qulay formatda — jonli darslarda yoki masofadan turib bilim oling.",
    icon: "MonitorSmartphone",
  },
  {
    title: "Tajribali ustozlar",
    description:
      "Imtihon va olimpiadalarda tajribaga ega, natija beradigan murabbiylar jamoasi.",
    icon: "Users",
  },
  {
    title: "Natijaga yo'naltirilgan",
    description:
      "Aniq maqsad, tizimli dastur va muntazam nazorat orqali real natijaga erishasiz.",
    icon: "Target",
  },
  {
    title: "Mualliflik materiallar",
    description:
      "Asoschilar tomonidan tayyorlangan kitob va qo'llanmalar bilan mustahkam asos.",
    icon: "BookOpen",
  },
];

export const stats: { value: string; label: string }[] = [
  { value: "5+", label: "Kurs yo'nalishi" },
  { value: "3+", label: "Mualliflik kitobi" },
  { value: "100%", label: "Natijaga yo'naltirilgan" },
  { value: "2026", label: "Tez orada start" },
];
