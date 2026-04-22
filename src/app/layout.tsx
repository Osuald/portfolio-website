import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { ThemeProvider } from "@/components/shared/ThemeProvider";
import ScrollProgress from "@/components/shared/ScrollProgress";
import BackToTop from "@/components/shared/BackToTop";
import { SITE } from "@/lib/constants";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: SITE.title,
    template: `%s | ${SITE.name}`,
  },
  description: SITE.description,
  keywords: SITE.keywords,
  authors: [{ name: SITE.name, url: SITE.url }],
  creator: SITE.name,
  openGraph: {
    type: "website",
    locale: "en_US",
    url: SITE.url,
    title: SITE.title,
    description: SITE.description,
    siteName: SITE.name,
  },
  twitter: {
    card: "summary_large_image",
    title: SITE.title,
    description: SITE.description,
    creator: "@osuald_dev",
  },
  robots: { index: true, follow: true },
  metadataBase: new URL(SITE.url),
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: dark)",  color: "#080808" },
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
  ],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning className="dark">
      <body className={`${inter.variable} font-sans antialiased`}>
        <ThemeProvider>
          <ScrollProgress />
          <div className="min-h-screen flex flex-col bg-surface-950 dark:bg-surface-950">
            <Header />
            <main className="flex-grow" id="main-content">
              {children}
            </main>
            <Footer />
          </div>
          <BackToTop />
        </ThemeProvider>
      </body>
    </html>
  );
}
