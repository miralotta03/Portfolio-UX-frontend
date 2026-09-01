import type { Metadata } from "next";
import { Fraunces, Inter } from "next/font/google";
import Link from "next/link";
import "./globals.css";

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Mira Olsson — UX & frontend",
  description: "UX-portfolio med utvalda projekt av Mira Olsson.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="sv"
      className={`${fraunces.variable} ${inter.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-paper text-ink">
        <header className="border-b border-rule">
          <div className="mx-auto max-w-4xl px-6 py-5 flex items-baseline justify-between">
            <Link href="/" className="font-display text-lg">
              Mira Olsson
            </Link>
            <nav className="flex gap-6 text-sm text-ink-soft">
              <Link href="/#projekt" className="hover:text-ink">
                Projekt
              </Link>
              <Link href="/om" className="hover:text-ink">
                Om mig
              </Link>
              <Link href="/kontakt" className="hover:text-ink">
                Kontakt
              </Link>
            </nav>
          </div>
        </header>
        <main className="flex-1">{children}</main>
        <footer className="border-t border-rule">
          <div className="mx-auto max-w-4xl px-6 py-8 text-sm text-ink-soft flex justify-between">
            <span>© {new Date().getFullYear()} Mira Olsson</span>
            <Link href="/kontakt" className="hover:text-ink">
              Säg hej →
            </Link>
          </div>
        </footer>
      </body>
    </html>
  );
}
