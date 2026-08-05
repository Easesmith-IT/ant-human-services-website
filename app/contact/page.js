import ContactForm from '@/components/ContactForm';

export const metadata = {
  title: 'Contact Us | ANT Human Services - Support & Inquiries',
  description: 'Get in touch with ANT Human Services for your recruitment or staffing needs. We serve employers and candidates across India with a 2-hour response SLA.',
  alternates: {
    canonical: 'https://anthumanservices.com/contact',
  },
};

export default function ContactPage() {
  return <ContactForm />;
}
