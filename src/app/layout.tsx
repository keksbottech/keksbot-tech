import type { Metadata } from "next";
import { Kanit } from "next/font/google";
import "./globals.css";
import Script from "next/script";
import Footer from "@/sections/footer/Footer";
import Header from "@/sections/header/Header";
import { register } from 'swiper/element/bundle';
import Head from "next/head";

register();

const kanit = Kanit({
  subsets: ['latin'],
  weight: ['200', '300', '400', '500', '600', '700', '800', '900'],
  variable: '--font-kanit'
});

export const metadata: Metadata = {
  title: "Keksbot Tech",
  description: "Software Company",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Head key={0}>
        <link rel="stylesheet" href="https://unpkg.com/leaflet@1.9.4/dist/leaflet.css"
          integrity="sha256-p4NxAoJBhIIN+hmNHrzRCf9tD/miZyoHS5obTRR9BMY="
        />
      </Head>
      <Script src="https://kit.fontawesome.com/20b8edb75e.js" ></Script>
      <Script src="https://unpkg.com/leaflet@1.9.4/dist/leaflet.js"
        integrity="sha256-20nQCchB9co0qIjJZRGuk2/Z9VM+kNiyxNV1lvTlZBo="
      ></Script>
      <body className={kanit.className} >
        <Header />
        {children}
        <Footer />
      </body>

    </html>
  );
}
