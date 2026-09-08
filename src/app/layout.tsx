import type { Metadata } from "next";
import { Manrope, Unbounded } from "next/font/google";
import { QueryProvider } from "@/components/providers/query-provider";
import { profile } from "@/lib/resume";
import "./globals.css";

const manrope = Manrope({
  subsets: ["latin", "cyrillic"],
  variable: "--font-manrope",
  display: "swap",
});

const unbounded = Unbounded({
  subsets: ["latin", "cyrillic"],
  weight: ["500", "600"],
  variable: "--font-unbounded",
  display: "swap",
});

export const metadata: Metadata = {
  title: profile.title,
  description: profile.description,
  authors: [{ name: `${profile.name[0]} ${profile.name[1]}` }],
  openGraph: {
    title: profile.title,
    description: profile.description,
    locale: "ru_RU",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <body className={`${manrope.variable} ${unbounded.variable} font-sans antialiased`}>
        <a
          href="#content"
          className="absolute left-3 top-[-3rem] z-10 bg-ink px-3 py-1.5 text-paper focus:top-3"
        >
          К содержанию
        </a>
        <QueryProvider>
          <div id="content">{children}</div>
        </QueryProvider>
      </body>
    </html>
  );
}
