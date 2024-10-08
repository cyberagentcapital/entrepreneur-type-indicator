import type { Metadata } from "next";
import "./globals.css";
import Header from "@components/Header";
import Footer from "@components/Footer";

export const metadata: Metadata = {
  title: "起業家タイプ診断",
  description: "どんな起業が向いているか診断しよう。",
  openGraph: {
    title: "起業家タイプ診断",
    description: "どんな起業が向いているか診断しよう。",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "起業家タイプ診断",
      },
    ],
    type: "website",
    locale: "ja_JP",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <head>
        <link rel="manifest" href="/site.webmanifest" />
      </head>
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
