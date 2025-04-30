import type { Metadata } from 'next';
import './globals.css';
import './fonts.css';

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
