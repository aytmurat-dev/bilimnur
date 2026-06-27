"use client";

import { motion, useReducedMotion, type Variants } from "framer-motion";
import { cn } from "@/lib/utils";

const variants: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: (delay: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut", delay },
  }),
};

/**
 * Scrollda paydo bo'luvchi yengil animatsiya o'rovchi (wrapper).
 * Server komponentlardan ham bemalol ishlatish mumkin.
 */
export function Reveal({
  children,
  delay = 0,
  className,
  as = "div",
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
  as?: "div" | "li" | "span";
}) {
  const reduceMotion = useReducedMotion();
  const MotionTag = motion[as] as typeof motion.div;

  // Harakatni kamaytirish so'ralsa: animatsiyasiz, darrov to'liq ko'rinadigan holatda
  // ko'rsatamiz (kontent hech qachon ko'rinmay qolib ketmasligi uchun ham muhim).
  if (reduceMotion) {
    return (
      <MotionTag className={cn(className)} initial={false} animate={{ opacity: 1, y: 0 }}>
        {children}
      </MotionTag>
    );
  }

  return (
    <MotionTag
      className={cn(className)}
      variants={variants}
      custom={delay}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-80px" }}
    >
      {children}
    </MotionTag>
  );
}
