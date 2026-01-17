import type { Metadata } from 'next';
import { Fredoka, Nunito } from 'next/font/google';
import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ExitIntentPopup from '@/components/ExitIntentPopup';
import { organizationSchema } from '@/lib/schema';

const fredoka = Fredoka({
  subsets: ['latin'],
  variable: '--font-display',
  display: 'swap',
});

const nunito = Nunito({
  subsets: ['latin'],
  variable: '--font-body',
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://tangosfunforyou.com'),
  title: {
    default: "Tango's Fun For You Events | Face Painting, Balloon Twisting, Glitter Tattoos Charlotte NC & Lake Norman",
    template: "%s | Tango's Fun For You Events Charlotte NC",
  },
  description:
    'Professional face painting, balloon twisting, glitter tattoos & bling art in Charlotte NC & Lake Norman. 25+ years experience, 4.8★ rated. Birthday parties, corporate events, festivals. Book now! (704) 890-3715',
  keywords: [
    'face painting Charlotte NC',
    'balloon twisting Charlotte',
    'face painter near me',
    'balloon artist Charlotte NC',
    'birthday party entertainment Charlotte',
    'kids party entertainment',
    'corporate event entertainment Charlotte',
    'festival face painting',
    'glitter tattoos Charlotte NC',
    'bling art Charlotte',
    'face gems Charlotte NC',
    'party entertainment Matthews NC',
    'face painting Huntersville',
    'balloon animals Charlotte',
    'children entertainment Charlotte',
    'Lake Norman face painting',
    'Mooresville face painter',
    'Lake Norman party entertainment',
    'glitter tattoos Lake Norman',
    'balloon twisting Lake Norman',
    'waterproof glitter tattoos',
    'face jewels Charlotte NC',
  ],
  authors: [{ name: 'Lynn Cochran', url: 'https://tangosfunforyou.com/about' }],
  creator: "Tango's Fun For You Events",
  publisher: "Tango's Fun For You Events",
  formatDetection: {
    telephone: true,
    email: true,
    address: true,
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://tangosfunforyou.com',
    siteName: "Tango's Fun For You Events",
    title: "Tango's Fun For You Events | Face Painting, Balloon Twisting, Glitter Tattoos & Bling Art Charlotte NC",
    description:
      'Professional face painting, balloon twisting, glitter tattoos & bling art in Charlotte NC & Lake Norman. 25+ years experience. Book your event today!',
    images: [
      {
        url: '/images/og-image.jpg',
        width: 1200,
        height: 630,
        alt: "Tango's Fun For You Events - Face Painting and Balloon Art in Charlotte NC",
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: "Tango's Fun For You Events | Charlotte NC & Lake Norman Face Painting",
    description:
      'Professional face painting, balloon twisting, glitter tattoos & bling art in Charlotte NC & Lake Norman. 25+ years experience. Call (704) 890-3715',
    images: ['/images/twitter-card.jpg'],
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
  alternates: {
    canonical: 'https://tangosfunforyou.com',
  },
  verification: {
    google: 'your-google-verification-code',
  },
  category: 'Entertainment',
  other: {
    'geo.region': 'US-NC',
    'geo.placename': 'Charlotte',
    'geo.position': '35.1070;-80.9260',
    'ICBM': '35.1070, -80.9260',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${fredoka.variable} ${nunito.variable}`}>
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#d946ef" />

        {/* Schema.org Organization/LocalBusiness */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationSchema),
          }}
        />
      </head>
      <body className="min-h-screen bg-white">
        <Header />
        <main>{children}</main>
        <Footer />
        <ExitIntentPopup />

        {/* Click-to-call tracking and accessibility */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              // Track phone clicks for analytics
              document.querySelectorAll('a[href^="tel:"]').forEach(function(link) {
                link.addEventListener('click', function() {
                  if (typeof gtag !== 'undefined') {
                    gtag('event', 'click', {
                      event_category: 'Contact',
                      event_label: 'Phone Call',
                      value: 1
                    });
                  }
                });
              });
            `,
          }}
        />
      </body>
    </html>
  );
}
