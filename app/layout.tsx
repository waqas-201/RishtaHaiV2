import './globals.css';
import type { Metadata } from 'next';
import { Inter, Poppins } from 'next/font/google';
import { ThemeProvider } from '@/components/ThemeProvider';
import Providers from '@/providers/providers';
import SmoothScroll from '@/providers/lenis-provider';

const inter = Inter({ subsets: ['latin'] });
const poppins = Poppins({ 
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-poppins'
});

export const metadata: Metadata = {
  title: 'RishtaHai - Find Your Perfect Islamic Match in Pakistan',
  description: 'Pakistan\'s most trusted Islamic matrimonial platform. Find your life partner with Islamic values and traditions across Pakistan.'
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className} ${poppins.variable}`}>
        <ThemeProvider
          defaultTheme="system"
        >
          <SmoothScroll />
          <Providers>

          {children}
          </Providers>
        </ThemeProvider>
      </body>
    </html>
  );
}