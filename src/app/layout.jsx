import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Providers from './providers';

import { Suspense } from 'react';
import Loading from './loading';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata = {
  title: 'Next Shop | Buy Your Favorite Products',
  description: 'Next Shop is a best online shopping platform in Bangladesh.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Providers>
          <Navbar />

          <div className="min-h-screen">
            <Suspense fallback={<Loading />}>{children}</Suspense>
          </div>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
