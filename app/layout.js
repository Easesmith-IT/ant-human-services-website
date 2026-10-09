import { Outfit, Plus_Jakarta_Sans } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const outfit = Outfit({
  subsets: ['latin'],
  variable: '--font-outfit',
  display: 'swap',
  preload: true,
});

const jakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  variable: '--font-jakarta',
  display: 'swap',
  preload: true,
});

export const metadata = {
  metadataBase: new URL('https://anthumanservices.com'),
  title: 'ANT Human Services | Recruitment, Staffing & Workforce Solutions',
  description: 'ANT Human Services is a leading staffing, recruitment, and workforce solutions company headquartered in Varanasi, UP. Connecting talent with top opportunities.',
  keywords: 'ANT Human Services, Recruitment agency Varanasi, Staffing solutions UP, Manpower supply, Contract staffing, Bulk hiring, Job placement, Blue collar hiring, White collar recruitment',
  icons: {
    icon: [
      { url: '/images/ant-icon.png' },
      { url: '/favicon.ico' },
    ],
    apple: [
      { url: '/images/ant-icon.png' },
    ],
    shortcut: ['/images/ant-icon.png'],
  },
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'ANT Human Services | Recruitment, Staffing & Workforce Solutions',
    description: 'Connecting Talent. Creating Opportunities. People -> Employment -> Opportunity -> Growth.',
    url: 'https://anthumanservices.com',
    siteName: 'ANT Human Services',
    locale: 'en_IN',
    type: 'website',
    images: [
      {
        url: '/images/logo.png',
        width: 1024,
        height: 154,
        alt: 'ANT Human Services Logo',
      },
      {
        url: '/images/indian_workforce.jpg',
        width: 1200,
        height: 630,
        alt: 'ANT Human Services',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'ANT Human Services | Recruitment, Staffing & Workforce Solutions',
    description: 'Connecting Talent. Creating Opportunities. People -> Employment -> Opportunity -> Growth.',
    images: ['/images/logo.png'],
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'EmploymentAgency',
  name: 'ANT Human Services',
  image: 'https://anthumanservices.com/images/indian_workforce.jpg',
  logo: 'https://anthumanservices.com/images/logo.png',
  '@id': 'https://anthumanservices.com',
  url: 'https://anthumanservices.com',
  telephone: ['+917021982747', '+917007336359'],
  email: 'anthumanservices@gmail.com',
  address: {
    '@type': 'PostalAddress',
    streetAddress: '17/142 - P - 4, Rani Nagar Colony, Shivpur, Indrapur',
    addressLocality: 'Varanasi',
    addressRegion: 'Uttar Pradesh',
    postalCode: '221003',
    addressCountry: 'IN'
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${outfit.variable} ${jakarta.variable} scroll-smooth`} suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="flex flex-col min-h-screen" suppressHydrationWarning>
        <Navbar />

        {/* MAIN CONTAINER WITH TOP PADDING FOR FIXED HEADER */}
        <main className="flex-grow pt-16 sm:pt-20">
          {children}
        </main>

        <Footer />
      </body>
    </html>
  );
}
