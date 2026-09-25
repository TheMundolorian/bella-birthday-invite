import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';

const geistSans = Geist({ variable: '--font-geist-sans', subsets: ['latin'] });
const geistMono = Geist_Mono({ variable: '--font-geist-mono', subsets: ['latin'] });

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL;

export const metadata: Metadata = {
  title: "Bella's Sweet Sixteen | You're Invited",
  description: "You're invited to Bella's House of Balloons-inspired sweet sixteen celebration.",
  icons: {
    icon: '/favicon.svg?v=2',
  },
  ...(siteUrl ? {
    metadataBase: new URL(siteUrl),
    openGraph: {
      title: "Bella's Sweet Sixteen | You're Invited",
      description: "A night in black and white celebrating Bella's sweet sixteen.",
      images: ['/og.png'],
    },
    twitter: {
      card: 'summary_large_image' as const,
      title: "Bella's Sweet Sixteen | You're Invited",
      description: "A night in black and white celebrating Bella's sweet sixteen.",
      images: ['/og.png'],
    },
  } : {}),
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body className={`${geistSans.variable} ${geistMono.variable}`}>{children}</body></html>;
}
