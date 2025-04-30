import type { Metadata } from 'next';
import { Geist_Mono } from 'next/font/google';
import './globals.css';
import './fonts.css';

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Bframe',
  description: 'Developed by Bizdin.ai',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`antialiased font-sf-pro`}>{children}</body>
    </html>
  );
}
