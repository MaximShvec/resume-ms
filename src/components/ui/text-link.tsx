import type { ComponentPropsWithoutRef } from "react";
import { cn } from "@/lib/cn";

type TextLinkProps = ComponentPropsWithoutRef<"a"> & {
  external?: boolean;
};

export function TextLink({
  className,
  external = false,
  rel,
  target,
  ...props
}: TextLinkProps) {
  return (
    <a
      className={cn(
        "underline decoration-transparent underline-offset-[0.18em] transition-[text-decoration-color,text-decoration-thickness] hover:decoration-current hover:decoration-2",
        className,
      )}
      rel={external ? "noopener noreferrer" : rel}
      target={external ? "_blank" : target}
      {...props}
    />
  );
}
