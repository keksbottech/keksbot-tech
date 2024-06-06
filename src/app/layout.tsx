import type { Metadata } from "next";
import { Kanit } from "next/font/google";
import "./globals.css";
import Script from "next/script";
import Head from "next/head";

const kanit = Kanit({
  subsets: ['latin'],
  weight: ['200', '400', '500', '600', '700', '800', '900'],
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
      <Script src="https://kit.fontawesome.com/20b8edb75e.js" ></Script>

      <body className={kanit.className} >
        {children}
      </body>

    </html>
  );
}
