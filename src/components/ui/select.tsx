"use client";

import { useEffect, useId, useRef, useState } from "react";
import { cn } from "@/lib/cn";
import { controlClass } from "@/components/ui/field";

export type SelectOption<T extends string> = {
  value: T;
  label: string;
};

type SelectProps<T extends string> = {
  id: string;
  value: T;
  options: readonly SelectOption<T>[];
  onChange: (value: T) => void;
  onBlur?: () => void;
};

export function Select<T extends string>({
  id,
  value,
  options,
  onChange,
  onBlur,
}: SelectProps<T>) {
  const [open, setOpen] = useState(false);
  const rootRef = useRef<HTMLDivElement>(null);
  const listId = useId();
  const selected = options.find((option) => option.value === value) ?? options[0];

  useEffect(() => {
    if (!open) {
      return;
    }

    const onPointerDown = (event: PointerEvent) => {
      if (!rootRef.current?.contains(event.target as Node)) {
        setOpen(false);
        onBlur?.();
      }
    };

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpen(false);
        onBlur?.();
      }
    };

    document.addEventListener("pointerdown", onPointerDown);
    document.addEventListener("keydown", onKeyDown);

    return () => {
      document.removeEventListener("pointerdown", onPointerDown);
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [open, onBlur]);

  return (
    <div ref={rootRef} className="relative">
      <button
        id={id}
        type="button"
        data-control
        aria-haspopup="listbox"
        aria-expanded={open}
        aria-controls={listId}
        className={cn(controlClass, "flex items-center justify-between gap-3 text-left")}
        onClick={() => setOpen((current) => !current)}
      >
        <span>{selected.label}</span>
        <span
          aria-hidden
          className={cn(
            "text-[0.6rem] leading-none text-muted transition-transform duration-200",
            open && "rotate-180",
          )}
        >
          ▼
        </span>
      </button>

      {open ? (
        <ul
          id={listId}
          role="listbox"
          className="absolute inset-x-0 top-[calc(100%+2px)] z-20 border border-line bg-paper"
        >
          {options.map((option) => {
            const isActive = option.value === value;

            return (
              <li key={option.value} role="option" aria-selected={isActive}>
                <button
                  type="button"
                  className={cn(
                    "w-full px-3 py-2 text-left text-sm transition-colors duration-150 hover:bg-soft",
                    isActive && "font-semibold",
                  )}
                  onClick={() => {
                    onChange(option.value);
                    setOpen(false);
                    onBlur?.();
                  }}
                >
                  {option.label}
                </button>
              </li>
            );
          })}
        </ul>
      ) : null}
    </div>
  );
}
