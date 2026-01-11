import type { Metadata } from 'next';
import { Phone, Mail, MapPin, Clock, MessageCircle, Calendar } from 'lucide-react';
import { breadcrumbSchema } from '@/lib/schema';
import ContactForm from '@/components/ContactForm';

export const metadata: Metadata = {
  title: 'Contact Us - Book Face Painting & Balloon Art',
  description:
    "Book Tango's Fun For You Events for face painting, balloon twisting & party entertainment in Charlotte, NC. Call (704) 890-3715 or request a free quote online.",
  keywords: [
    'book face painter Charlotte',
    'hire balloon artist NC',
    'party entertainment quote Charlotte',
    'contact face painter near me',
  ],
  openGraph: {
    title: "Contact Tango's Fun For You Events | Charlotte NC",
    description:
      'Book face painting and balloon art for your Charlotte event. Free quotes available!',
    url: 'https://tangosfunforyou.com/contact',
  },
  alternates: {
    canonical: 'https://tangosfunforyou.com/contact',
  },
};

const contactMethods = [
  {
    icon: Phone,
    title: 'Call or Text',
    value: '(704) 890-3715',
    href: 'tel:+17048903715',
    description: 'Best for quick questions and same-day bookings',
  },
  {
    icon: Mail,
    title: 'Email',
    value: 'info@tangosfunforyou.com',
    href: 'mailto:info@tangosfunforyou.com',
    description: 'For detailed inquiries and quote requests',
  },
  {
    icon: MessageCircle,
    title: 'Response Time',
    value: 'Same Day',
    description: 'We typically respond within a few hours',
  },
];

export default function ContactPage() {
  return (
    <>
      {/* Breadcrumb Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            breadcrumbSchema([
              { name: 'Home', url: 'https://tangosfunforyou.com' },
              { name: 'Contact', url: 'https://tangosfunforyou.com/contact' },
            ])
          ),
        }}
      />

      {/* Hero Section */}
      <section className="relative py-16 lg:py-24 bg-gradient-to-br from-accent-50 via-white to-primary-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl lg:text-5xl font-display font-bold text-gray-900 mb-6">
            Book Your <span className="gradient-text">Event</span> Today
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-8">
            Ready to make your Charlotte event unforgettable? Get in touch for a free quote or to
            check availability. We respond to most inquiries within a few hours!
          </p>

          {/* Quick Contact Cards */}
          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {contactMethods.map((method) => (
              <div key={method.title} className="card text-center">
                <div className="w-14 h-14 bg-gradient-to-br from-primary-100 to-secondary-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <method.icon className="w-7 h-7 text-primary-600" />
                </div>
                <h2 className="font-bold text-gray-900 mb-1">{method.title}</h2>
                {method.href ? (
                  <a
                    href={method.href}
                    className="text-lg font-semibold text-primary-600 hover:text-primary-700 transition-colors"
                  >
                    {method.value}
                  </a>
                ) : (
                  <span className="text-lg font-semibold text-primary-600">{method.value}</span>
                )}
                <p className="text-sm text-gray-500 mt-1">{method.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form & Info Section */}
      <section className="section-padding bg-white">
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div>
            <h2 className="text-2xl lg:text-3xl font-display font-bold text-gray-900 mb-6">
              Request a Free Quote
            </h2>
            <p className="text-gray-600 mb-8">
              Tell us about your event and we'll get back to you with pricing and availability.
              The more details you provide, the more accurate your quote will be!
            </p>

            <ContactForm />
          </div>

          {/* Business Info */}
          <div>
            <h2 className="text-2xl lg:text-3xl font-display font-bold text-gray-900 mb-6">
              Business Information
            </h2>

            <div className="space-y-6 mb-8">
              <div className="flex gap-4">
                <div className="w-12 h-12 bg-primary-100 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Phone className="w-6 h-6 text-primary-600" />
                </div>
                <div>
                  <h3 className="font-bold text-gray-900">Phone</h3>
                  <a
                    href="tel:+17048903715"
                    className="text-primary-600 hover:text-primary-700 font-medium"
                  >
                    (704) 890-3715
                  </a>
                  <p className="text-sm text-gray-500">Call or text anytime</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-12 h-12 bg-secondary-100 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Mail className="w-6 h-6 text-secondary-600" />
                </div>
                <div>
                  <h3 className="font-bold text-gray-900">Email</h3>
                  <a
                    href="mailto:info@tangosfunforyou.com"
                    className="text-primary-600 hover:text-primary-700 font-medium"
                  >
                    info@tangosfunforyou.com
                  </a>
                  <p className="text-sm text-gray-500">We respond within 24 hours</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-12 h-12 bg-accent-100 rounded-xl flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-6 h-6 text-accent-600" />
                </div>
                <div>
                  <h3 className="font-bold text-gray-900">Service Area</h3>
                  <p className="text-gray-600">Charlotte, NC & Surrounding Areas</p>
                  <p className="text-sm text-gray-500">
                    Matthews, Huntersville, Concord, Gastonia, Rock Hill & more
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Clock className="w-6 h-6 text-green-600" />
                </div>
                <div>
                  <h3 className="font-bold text-gray-900">Hours</h3>
                  <p className="text-gray-600">Monday - Saturday: 8 AM - 8 PM</p>
                  <p className="text-gray-600">Sunday: 11 AM - 5:30 PM</p>
                </div>
              </div>
            </div>

            {/* Payment Methods */}
            <div className="bg-gray-50 rounded-2xl p-6 mb-8">
              <h3 className="font-bold text-gray-900 mb-3">Payment Methods Accepted</h3>
              <div className="flex gap-4">
                <span className="px-4 py-2 bg-white rounded-lg text-gray-700 font-medium shadow-sm">
                  Cash
                </span>
                <span className="px-4 py-2 bg-white rounded-lg text-gray-700 font-medium shadow-sm">
                  PayPal
                </span>
                <span className="px-4 py-2 bg-white rounded-lg text-gray-700 font-medium shadow-sm">
                  Venmo
                </span>
              </div>
            </div>

            {/* Quick Booking Tips */}
            <div className="bg-primary-50 rounded-2xl p-6">
              <h3 className="font-bold text-gray-900 mb-3 flex items-center gap-2">
                <Calendar className="w-5 h-5 text-primary-600" />
                Booking Tips
              </h3>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-start gap-2">
                  <span className="text-primary-500">•</span>
                  Book 2-3 weeks in advance for best availability
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary-500">•</span>
                  Weekend dates fill up quickly - book early!
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary-500">•</span>
                  Last-minute requests? Call us - we'll try to help!
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary-500">•</span>
                  Deposits secure your date
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="bg-gray-100 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-display font-bold text-gray-900 text-center mb-8">
            Serving All of Charlotte & Beyond
          </h2>
          <div className="bg-gray-300 rounded-2xl h-[400px] flex items-center justify-center">
            <div className="text-center p-8">
              <MapPin className="w-16 h-16 mx-auto text-gray-500 mb-4" />
              <p className="text-gray-600 font-medium">
                [Embed Google Map here showing Charlotte service area]
              </p>
              <p className="text-sm text-gray-500 mt-2">
                Service radius: Charlotte metro and surrounding 30+ mile radius
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
