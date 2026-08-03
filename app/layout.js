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
  title: 'ANT Human Services | Recruitment, Staffing & Workforce Solutions',
  description: 'ANT Human Services is a leading staffing, recruitment, and workforce solutions company headquartered in Varanasi, UP. Connecting talent with top opportunities.',
  keywords: 'ANT Human Services, Recruitment agency Varanasi, Staffing solutions UP, Manpower supply, Contract staffing, Bulk hiring, Job placement, Blue collar hiring, White collar recruitment',
  openGraph: {
    title: 'ANT Human Services | Recruitment, Staffing & Workforce Solutions',
    description: 'Connecting Talent. Creating Opportunities. People -> Employment -> Opportunity -> Growth.',
    url: 'https://anthumanservices.com',
    siteName: 'ANT Human Services',
    locale: 'en_IN',
    type: 'website',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${outfit.variable} ${jakarta.variable} scroll-smooth`} suppressHydrationWarning>
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
