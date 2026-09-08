import type { ReactNode } from "react";
import { cn } from "@/lib/cn";

type SectionProps = {
  id: string;
  title: string;
  children: ReactNode;
  className?: string;
};

export function Section({ id, title, children, className }: SectionProps) {
  return (
    <section id={id} className={cn("mt-10", className)}>
      <h2 className="mb-4 text-[0.78rem] font-bold uppercase tracking-[0.22em]">
        {title}
      </h2>
      {children}
    </section>
  );
}
