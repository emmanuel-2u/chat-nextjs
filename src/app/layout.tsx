import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { config } from '@fortawesome/fontawesome-svg-core';
import '@fortawesome/fontawesome-svg-core/styles.css';

import "./globals.css";
import "@/../chat-nextjs.css";

const inter = Inter({ subsets: ["latin"] });

config.autoAddCss = false;

export const metadata: Metadata = {
  description: "A simple real-time chat app"
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`m-2 is-flex is-flex-direction-column is-justify-content-center is-align-items-center ${inter.className}`}>{children}</body>
    </html>
  );
}
