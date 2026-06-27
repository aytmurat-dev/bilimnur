# Bilimnur — ta'lim platformasi (boshlang'ich sayt)

[bilimnur.uz](https://bilimnur.uz) — online va offline kurslar olib boriladigan ta'lim
platformasining birinchi (tanishtiruv) versiyasi. Bu bitta sahifali (single-page) landing sayt:
platforma haqida ma'lumot, kurs yo'nalishlari ("Tez orada"), asoschilar kitoblari (telefon orqali
sotib olish) va bog'lanish bo'limlaridan iborat.

## Texnologiyalar

- **Next.js** (App Router) + **TypeScript**
- **Tailwind CSS v4** (design tokenlar `app/globals.css` da)
- **Inter** shrift (`next/font`)
- **framer-motion** — scrolldagi animatsiyalar
- **lucide-react** — ikonkalar

## Ishga tushirish

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build
npm run start    # production serverni ishga tushirish
```

## Loyiha tuzilmasi

```
app/
  layout.tsx        # <html lang="uz">, Inter, SEO metadata
  page.tsx          # barcha bo'limlarni yig'adi
  globals.css       # Tailwind + design tokenlar (ranglar shu yerda)
components/
  layout/           # Navbar, Footer, Logo
  sections/         # Hero, About, Courses, Books, Contact
  ui/               # Container, Button, Card, Badge, SectionHeading, Reveal, Icon, SocialIcon
lib/
  site.ts           # sayt konfiguratsiyasi: nom, telefon, telegram, instagram, email
  data.ts           # kontent: kurslar, kitoblar, afzalliklar, statistika
public/
  logo.svg          # logo (almashtiriladi)
```

## Sozlash / tahrirlash (eng muhim joylar)

| Nima | Qayerda |
|------|---------|
| Telefon, email, ijtimoiy tarmoq havolalari, manzil | `lib/site.ts` |
| Kurslar va kitoblar matni | `lib/data.ts` |
| Ranglar (brend palitrasi) | `app/globals.css` → `@theme` bloki |
| Logo | `public/logo.svg` (faylni almashtiring) |

> **Eslatma:** hozircha aloqa ma'lumotlari va kitob matnlari placeholder. Aniq qiymatlarni
> `lib/site.ts` va `lib/data.ts` dan yangilang. Rang palitrasi vaqtinchalik ko'k — logoga moslab
> `@theme` dagi `--color-primary-*` qiymatlarini o'zgartirish kifoya.

## Kelajakda

Platforma keyinchalik kengaytiriladi (kurslarga yozilish, foydalanuvchi kabineti, to'lov va h.k.) —
arxitektura shunga tayyor qilingan.
