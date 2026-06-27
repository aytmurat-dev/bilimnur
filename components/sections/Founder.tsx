"use client";

import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { CheckCircle2, Quote, GraduationCap, Sparkles, Award } from "lucide-react";

export function Founder() {
  return (
    <section id="founder" className="relative overflow-hidden py-14 sm:py-20 lg:py-28 bg-white border-y border-ink-100">
      {/* Background glow elements */}
      <div className="pointer-events-none absolute -right-20 top-20 -z-10 h-96 w-96 rounded-full bg-primary-50/30 blur-3xl" />
      <div className="pointer-events-none absolute -left-20 bottom-20 -z-10 h-96 w-96 rounded-full bg-accent-50/20 blur-3xl" />

      <Container>
        {/* Bo'lim Sarlavhasi */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-20">
          <Reveal>
            <span className="inline-flex items-center gap-1.5 rounded-full bg-primary-50 px-3 py-1.5 text-xs font-bold text-primary-700">
              <Sparkles className="h-4 w-4 text-primary-600 animate-pulse" />
              Bizning jamoa
            </span>
          </Reveal>
          <Reveal delay={0.05}>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-ink-900 mt-4">
              Kuchli ustozlar — yuqori natijalar kafolati
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-4 text-pretty text-lg leading-relaxed text-ink-600">
              Platformamiz asoschilari va yetakchi mutaxassislarimiz har bir o'quvchining maqsadlariga yetishishi uchun tizimli dars dasturlarini taklif qiladi.
            </p>
          </Reveal>
        </div>

        {/* Ustozlar Ro'yxati */}
        <div className="space-y-16 sm:space-y-24 lg:space-y-32">
          
          {/* 1. ASOSCHI: Sadullayev Aliy */}
          <div className="grid gap-12 lg:grid-cols-12 lg:items-center">
            {/* Chap ustun: Rasm */}
            <div className="lg:col-span-5">
              <Reveal>
                <div className="relative mx-auto max-w-sm lg:max-w-none">
                  <div className="absolute -inset-4 rounded-[40px] bg-gradient-to-tr from-primary-200/50 to-accent-200/30 blur-xl opacity-70" />
                  
                  <div className="relative overflow-hidden rounded-[36px] border border-ink-100 bg-white p-3 shadow-card transition-transform duration-500 hover:scale-[1.01] hover:shadow-glow">
                    <div className="relative aspect-[4/5] w-full overflow-hidden rounded-[28px] bg-slate-50">
                      <Image
                        src="/images/founder.jpg"
                        alt="Sadullayev Aliy - BILIMNUR Asoschisi"
                        fill
                        sizes="(max-width: 768px) 100vw, 40vw"
                        className="object-cover object-center transition-transform duration-700 hover:scale-105"
                        priority
                      />
                    </div>
                  </div>
                </div>
              </Reveal>
            </div>

            {/* O'ng ustun: Batafsil ma'lumot */}
            <div className="lg:col-span-7 space-y-6">
              <Reveal delay={0.08}>
                <span className="inline-flex items-center gap-1.5 rounded-full bg-primary-50 px-3 py-1.5 text-xs font-bold text-primary-700">
                  <GraduationCap className="h-4.5 w-4.5 text-primary-600" />
                  Loyiha Asoschisi
                </span>
                
                <h3 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-ink-900 mt-3">
                  Sadullayev Aliy
                </h3>
                
                <p className="mt-1.5 text-base font-semibold text-primary-600">
                  Matematik o'qituvchi, darsliklar muallifi va xalqaro olimpiadalar murabbiysi
                </p>
              </Reveal>

              <Reveal delay={0.16}>
                <div className="text-sm sm:text-base leading-relaxed text-ink-600 space-y-4">
                  <p>
                    Sadullayev Aliy — matematika sohasida yirik tajribaga ega taniqli pedagog hamda 
                    mamlakatimizdagi o'quvchilar orasida ommalashgan ko'plab darslik va o'quv qo'llanmalarining muallifidir. 
                    Uning muallifligidagi <strong>"Mantiqiy matematika"</strong>, <strong>"Kenguru xalqaro olimpiadasi masalalari"</strong> 
                    va boshqa matematika yo'nalishidagi kitoblari bugungi kunda o'quvchilarda mustaqil va tanqidiy fikrlashni, 
                    masalalarni samarali va nostandart usullar orqali yechish ko'nikmalarini rivojlantirishga xizmat qilmoqda.
                  </p>
                  <p>
                    Ushbu to'plangan barcha boy bilim va tajribalarni yagona tizimga keltirish maqsadida <strong>BILIMNUR</strong> 
                    platformasiga asos solindi. Bizning darslarimiz va kitoblarimiz Prezident maktablari, ixtisoslashtirilgan maktablar, 
                    fan olimpiadalari hamda SAT va Milliy sertifikat imtihonlariga tayyorlanayotgan yoshlarimizning eng ishonchli hamkoridir.
                  </p>
                </div>
              </Reveal>

              <Reveal delay={0.24}>
                <div className="grid gap-3 sm:grid-cols-2 mt-2">
                  <div className="flex items-center gap-3 rounded-xl border border-ink-100 bg-ink-50/50 p-3">
                    <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-primary-50 text-primary-600">
                      <CheckCircle2 className="h-4.5 w-4.5" />
                    </span>
                    <span className="text-xs sm:text-sm font-semibold text-ink-800">Mualliflik darslik va kitoblari</span>
                  </div>
                  <div className="flex items-center gap-3 rounded-xl border border-ink-100 bg-ink-50/50 p-3">
                    <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-primary-50 text-primary-600">
                      <CheckCircle2 className="h-4.5 w-4.5" />
                    </span>
                    <span className="text-xs sm:text-sm font-semibold text-ink-800">Prezident maktabi maxsus dasturi</span>
                  </div>
                </div>
              </Reveal>

              <Reveal delay={0.3}>
                <div className="relative rounded-2xl bg-gradient-to-br from-primary-50/50 to-primary-100/10 p-5 border border-primary-100/40">
                  <Quote className="absolute right-5 top-5 h-8 w-8 text-primary-200/30" />
                  <p className="text-sm italic font-medium text-ink-700 leading-relaxed pr-6">
                    "Matematika — bu faqatgina raqamlar va formulalar emas. Bu fikrlash madaniyati, mantiqiy xulosalar chiqarish qobiliyatidir. Platformamiz orqali har bir yoshga kelajak cho'qqilarini zabt etishda kuchli poydevor yaratib berishga intilamiz."
                  </p>
                  <p className="mt-2 text-xs font-bold text-primary-700">— Sadullayev Aliy</p>
                </div>
              </Reveal>
            </div>
          </div>

          {/* 2. SHOGIRDI & USTOS: Asadbek Turdimuratov (Navbatma-navbat almashgan tartib) */}
          <div className="grid gap-12 lg:grid-cols-12 lg:items-center">
            
            {/* Chap ustun: Batafsil ma'lumot (Katta ekranda chapda, rasm o'ngda turadi) */}
            <div className="lg:col-span-7 order-2 lg:order-1 space-y-6">
              <Reveal delay={0.08}>
                <span className="inline-flex items-center gap-1.5 rounded-full bg-accent-50 px-3 py-1.5 text-xs font-bold text-accent-800">
                  <Award className="h-4.5 w-4.5 text-accent-600 animate-pulse" />
                  Loyiha ishtirokchisi
                </span>
                
                <h3 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-ink-900 mt-3">
                  Asadbek Turdimuratov
                </h3>
                
                <p className="mt-1.5 text-base font-semibold text-primary-600">
                  Loyiha yordamchisi, matematika va ingliz tili tadqiqotchisi
                </p>
              </Reveal>

              {/* Badgeler (SAT/IELTS va h.k.) */}
              <Reveal delay={0.12}>
                <div className="flex flex-wrap gap-2.5 mt-2">
                  <span className="font-mono text-xs border border-ink-100 bg-ink-50/70 p-2.5 rounded-xl text-ink-800">
                    IELTS Score: <strong className="text-primary-600">6.5</strong>
                  </span>
                  <span className="font-mono text-xs border border-ink-100 bg-ink-50/70 p-2.5 rounded-xl text-ink-800">
                    SAT Math: <strong className="text-primary-600">1320 / 1600</strong>
                  </span>
                  <span className="font-mono text-xs border border-ink-100 bg-accent-50 p-2.5 rounded-xl text-accent-900 font-bold">
                    <span aria-hidden="true">🏅 </span>Fan Olimpiadalari G&apos;olibi
                  </span>
                </div>
              </Reveal>

              <Reveal delay={0.16}>
                <div className="text-sm sm:text-base leading-relaxed text-ink-600 space-y-4">
                  <p>
                    Asadbek Turdimuratov — Nukus shahridagi 10-sinf maktab o'quvchisi bo'lib, hozirgi kunda BILIMNUR 
                    platformasida Aliy Sadullayevning eng faol yordamchisi va shogirdidir. U matematika va ingliz tili 
                    yo'nalishlarida yuqori natijalar ko'rsatib kelayotgan yosh tadqiqotchidir. Matematika bo'yicha ko'p 
                    karra fan olimpiadalari g'olibi bo'lgan Asadbek, o'rgangan bilimlarini tengdoshlari bilan ulashishga intiladi.
                  </p>
                  <p>
                    U o'zining maktab darslari bilan bir vaqtda ingliz tilidan xalqaro <strong>IELTS 6.5</strong> va 
                    matematika bo'yicha xalqaro <strong>SAT 1320</strong> ballik ko'rsatkichlarni zabt etgan. Hozirda u loyiha 
                    yordamchisi sifatida Aliy Sadullayev boshchiligidagi kitoblar ustida ishlashda va platforma kontentlarini 
                    tayyorlashda ko'maklashib kelmoqda.
                  </p>
                </div>
              </Reveal>

              <Reveal delay={0.24}>
                <div className="grid gap-3 sm:grid-cols-2 mt-2">
                  <div className="flex items-center gap-3 rounded-xl border border-ink-100 bg-ink-50/50 p-3">
                    <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-primary-50 text-primary-600">
                      <CheckCircle2 className="h-4.5 w-4.5" />
                    </span>
                    <span className="text-xs sm:text-sm font-semibold text-ink-800">Loyiha yordamchisi va koordinatori</span>
                  </div>
                  <div className="flex items-center gap-3 rounded-xl border border-ink-100 bg-ink-50/50 p-3">
                    <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-primary-50 text-primary-600">
                      <CheckCircle2 className="h-4.5 w-4.5" />
                    </span>
                    <span className="text-xs sm:text-sm font-semibold text-ink-800">Kitoblar va o'quv kontenti ustida ishlash</span>
                  </div>
                </div>
              </Reveal>

              <Reveal delay={0.3}>
                <div className="relative rounded-2xl bg-gradient-to-br from-accent-50/30 to-accent-100/10 p-5 border border-accent-100/30">
                  <Quote className="absolute right-5 top-5 h-8 w-8 text-accent-200/20" />
                  <p className="text-sm italic font-medium text-ink-700 leading-relaxed pr-6">
                    "Matematik muammolarni hal qilish va til o'rganish — bu shunchaki qobiliyat emas, bu har kuni mashq qilinishi lozim bo'lgan go'zal san'atdir. Men ustozim Aliy Sadullayevdan o'rgangan tajribam orqali kitoblar va o'quv materiallarida foydali kontentlar yaratishga hissa qo'shishdan xursandman."
                  </p>
                  <p className="mt-2 text-xs font-bold text-accent-700">— Asadbek Turdimuratov</p>
                </div>
              </Reveal>
            </div>

            {/* O'ng ustun: Rasm (Katta ekranda o'ngda, mobil ekranda tepada turadi) */}
            <div className="lg:col-span-5 order-1 lg:order-2">
              <Reveal>
                <div className="relative mx-auto max-w-sm lg:max-w-none">
                  <div className="absolute -inset-4 rounded-[40px] bg-gradient-to-tr from-accent-200/50 to-primary-200/30 blur-xl opacity-70" />
                  
                  <div className="relative overflow-hidden rounded-[36px] border border-ink-100 bg-white p-3 shadow-card transition-transform duration-500 hover:scale-[1.01] hover:shadow-glow">
                    <div className="relative aspect-[4/5] w-full overflow-hidden rounded-[28px] bg-slate-50">
                      <Image
                        src="/images/asadbek.jpg"
                        alt="Asadbek Turdimuratov - BILIMNUR Loyiha Yordamchisi"
                        fill
                        sizes="(max-width: 768px) 100vw, 40vw"
                        className="object-cover object-center transition-transform duration-700 hover:scale-105"
                      />
                    </div>
                  </div>
                </div>
              </Reveal>
            </div>

          </div>

        </div>
      </Container>
    </section>
  );
}
