import ThemeProvider from "@/components/ThemeProvider";
import "./globals.css";

export const metadata = {
  title: "Osuald Iradukunda | Software & Computer Engineer",
  description:
    "Software and Computer Engineering student building scalable systems, IoT platforms, and impactful technology for Africa.",
  keywords: [
    "Osuald Iradukunda",
    "Software & Computer Engineer",
    "Software & Computer Engineering",
    "Software & Computer Engineer Rwanda",
    "Software & Computer Engineering Rwanda",
    "Software Engineer Rwanda",
    "Kai Osuald",
    "Kai Osuald Iradukunda",
    "Osuald University of Rwanda",
    "Osuald CMU Africa",
    "Osuald Portfolio",
    "Next.js Developer",
    "Software Engineer",
    "Software Engineer Rwanda",
    "Computer Engineering",
    "Next.js Portfolio",
    "CMU Africa",
  ],
  authors: [{ name: "Osuald Iradukunda" }],

  openGraph: {
    title: "Osuald Iradukunda | Portfolio",
    description:
      "Building scalable systems and accessible technology for Africa.",
    url: "https://osuald.vercel.app",
    siteName: "Osuald Portfolio",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Osuald Iradukunda Portfolio",
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
