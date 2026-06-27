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
    phone: "+998 90 123 45 67",
    phoneHref: "tel:+998901234567",
    email: "info@bilimnur.uz",
    emailHref: "mailto:info@bilimnur.uz",
    address: "Toshkent shahri, O'zbekiston",
    workHours: "Dushanba–Shanba, 09:00–19:00",
  },

  // Ijtimoiy tarmoqlar (placeholder havolalar)
  social: {
    telegram: "https://t.me/Bilimnur_edu",
    telegramHandle: "@Bilimnur_edu",
    instagram: "https://instagram.com/bilimnur",
    instagramHandle: "@bilimnur",
    youtube: "https://youtube.com/@bilimnur",
  },
} as const;

export type Site = typeof site;
