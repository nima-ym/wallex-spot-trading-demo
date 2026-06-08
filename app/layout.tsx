import type { Metadata } from "next";
/* import { Geist, Geist_Mono } from "next/font/google"; */
import localFont from "next/font/local"
import "./globals.css";

const myFont = localFont({
  src: './../fonts/Roboto-Regular.ttf',
})

/* const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
}); */

export const metadata: Metadata = {
  title: "wallex spot trading",
  description: "A demo of wallex spot trading page for practising",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${myFont.className} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
