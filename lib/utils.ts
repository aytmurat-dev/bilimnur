/** Class nomlarini birlashtirish uchun kichik yordamchi (clsx o'rnida). */
export function cn(...classes: Array<string | false | null | undefined>): string {
  return classes.filter(Boolean).join(" ");
}
