import type {Metadata} from 'next';
import { Inter, Bebas_Neue } from 'next/font/google';
import './globals.css'; // Global styles

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
});

const bebasNeue = Bebas_Neue({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-display',
});

export const metadata: Metadata = {
  title: 'Fusion Elite | Martial Arts Dojo',
  description: 'Train Hard. Rise Elite. Martial arts for kids, families, and teens.',
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="en" className={`${inter.variable} ${bebasNeue.variable} scroll-smooth`}>
      <body className="font-sans bg-black text-white antialiased selection:bg-red-600 selection:text-white" suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}
