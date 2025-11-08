import './global.css';
import type { Metadata } from 'next';
import { Navbar } from './components/nav';
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/next';
import Footer from './components/footer';
import { baseUrl } from './sitemap';
import Experience from './components/experience';
import Technologies from './components/technologies';
import Recent from './components/recent';
import Education from './components/education';
import Contact from './components/contact';

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: {
    default: 'Personal Portfolio - Luiz Fillipe',
    template: 'Portfolio - Luiz Fillipe',
  },
  description: 'This is my personal portfolio.',
  openGraph: {
    title: 'My Portfolio',
    description: 'This is my portfolio.',
    url: baseUrl,
    siteName: 'My Portfolio',
    locale: 'en_US',
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

// const cx = (...classes) => classes.filter(Boolean).join(' ');

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="h-full scroll-smooth">
      <body className="h-full bg-amber-50 antialiased">
        <main className="">
          <Navbar />
          <div className="pt-12" />
          {children}
          <Recent />
          <Technologies />
          <Experience />
          <Education />
          <Contact />
          <Footer /> <Analytics />
          <SpeedInsights />
        </main>
      </body>
    </html>
  );
}
