/**
 * Sayt konfiguratsiyasi — bitta manba (single source of truth).
 * Aniq raqam/havolalarni shu yerda yangilang.
 */
export const site = {
  name: "Bilimnur",
  domain: "bilimnur.uz",
  url: "https://bilimnur.uz",
  tagline: "Bilim — kelajak kaliti",
  description:
    "Bilimnur — SAT, fan olimpiadalari, Prezident va ixtisoslashtirilgan maktablarga tayyorgarlik, Milliy sertifikat hamda til o'rganish (IELTS, Multilevel) bo'yicha online va offline kurslar olib boruvchi ta'lim platformasi.",

  // Aloqa ma'lumotlari (placeholder — keyin aniq qiymatlarga almashtiriladi)
  contact: {
    phone: "+998 94 594 96 69",
    phoneHref: "tel:+998945949669",
    email: "info@bilimnur.uz",
    emailHref: "mailto:info@bilimnur.uz",
    address: "Toshkent shahri, O'zbekiston",
    workHours: "Dushanba–Shanba, 09:00–19:00",
  },

  // Kitob do'koni uchun alohida aloqa ma'lumotlari
  bookstore: {
    phone: "+998 97 829 00 81",
    phoneHref: "tel:+998978290081",
    address: "Nukus shahri, markaziy bozor kitob do'koni",
  },

  // Ijtimoiy tarmoqlar (placeholder havolalar)
  social: {
    telegram: "https://t.me/Bilimnur_edu",
    telegramHandle: "@Bilimnur_edu",
    instagram: "https://www.instagram.com/bilimnur_edu",
    instagramHandle: "@bilimnur_edu",
    youtube: "https://youtube.com/@bilimnur",
  },
} as const;

export type Site = typeof site;
