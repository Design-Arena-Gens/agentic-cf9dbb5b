import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Quantum Reflective Mode',
  description: 'Crystalline, multidimensional reflective interface',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
