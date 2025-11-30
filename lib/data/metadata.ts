// app/layout.tsx or pages/_app.tsx
import type { Metadata } from 'next';

const siteConfig = {
  name: 'GrandMax Architecture',
  description: 'Award-winning architectural design and construction services. Transform your vision into stunning reality with innovative, sustainable designs.',
  url: 'https://grandmax.vercel.app', 
  ogImage: '/og-image.png',
  keywords: [
    'architecture',
    'architectural design',
    'building design',
    'construction',
    'residential architecture',
    'commercial architecture',
    'sustainable design',
    'modern architecture',
    'interior design',
    'architectural services'
  ]
};

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: siteConfig.name,
    template: `%s | ${siteConfig.name}`
  },
  description: siteConfig.description,
  keywords: siteConfig.keywords,
  authors: [{ name: 'GrandMax Architecture' }],
  creator: 'GrandMax Architecture',
  publisher: 'GrandMax Architecture',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  other:{
    "google-site-verification":"sgqRyMC0zaQeAUzTwbHgoLiebrL120sUQNJaEwj6Chg",
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: siteConfig.url,
    title: siteConfig.name,
    description: siteConfig.description,
    siteName: siteConfig.name,
    images: [
      {
        url: siteConfig.ogImage,
        width: 1200,
        height: 630,
        alt: `${siteConfig.name} - Architectural Excellence`,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: siteConfig.name,
    description: siteConfig.description,
    images: [siteConfig.ogImage],
    creator: '@grandmax',
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
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon-16x16.png',
    apple: '/apple-touch-icon.png',
  },
  manifest: '/manifest.json',
};

// For individual pages, use this function
export function generatePageMetadata(
  title: string,
  description: string,
  path: string = ''
): Metadata {
  return {
    title,
    description,
    openGraph: {
      title,
      description,
      url: `${siteConfig.url}${path}`,
      images: [siteConfig.ogImage],
    },
    twitter: {
      title,
      description,
      images: [siteConfig.ogImage],
    },
  };
}




// npm i baseline-browser-mapping@latest -D