import type { ButtonHTMLAttributes } from "react";
import { cn } from "@/lib/cn";
import { variant } from "@/lib/variants";

type ButtonVariant = "primary" | "ghost";

const buttonVariants = {
  primary: "bg-ink text-paper hover:bg-black",
  ghost: "border border-line bg-transparent text-ink hover:border-ink",
} as const satisfies Record<ButtonVariant, string>;

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: ButtonVariant;
};

export function Button({
  className,
  variant: variantName = "primary",
  type = "button",
  ...props
}: ButtonProps) {
  return (
    <button
      type={type}
      className={cn(
        "inline-flex h-10 items-center justify-center px-4 text-sm font-semibold tracking-wide transition-colors disabled:cursor-not-allowed disabled:opacity-60",
        variant(buttonVariants, variantName),
        className,
      )}
      {...props}
    />
  );
}
