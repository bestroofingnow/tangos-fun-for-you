import type { Metadata } from 'next';
import Link from 'next/link';
import { Phone, HelpCircle, ChevronDown } from 'lucide-react';
import { faqSchema, breadcrumbSchema } from '@/lib/schema';

export const metadata: Metadata = {
  title: 'FAQ - Face Painting & Balloon Twisting Questions Answered',
  description:
    'Get answers to common questions about face painting, balloon twisting, pricing, booking, and party entertainment services in Charlotte, NC. Call (704) 890-3715.',
  keywords: [
    'face painting FAQ Charlotte',
    'balloon twisting questions',
    'how much does face painting cost',
    'book face painter Charlotte',
    'party entertainment FAQ',
  ],
  openGraph: {
    title: "Frequently Asked Questions | Tango's Fun For You Events",
    description:
      'Answers to common questions about face painting, balloon art & party entertainment in Charlotte NC.',
    url: 'https://tangosfunforyou.com/faq',
  },
  alternates: {
    canonical: 'https://tangosfunforyou.com/faq',
  },
};

const faqCategories = [
  {
    title: 'Pricing & Booking',
    faqs: [
      {
        question: 'How much does face painting cost in Charlotte, NC?',
        answer:
          "Face painting services from Tango's Fun For You Events start at $125 per event. Final pricing depends on the duration of your event, number of expected guests, and services requested. We offer flexible pricing because we believe every child should have the experience we provide. Contact us for a personalized quote for your Charlotte area event.",
      },
      {
        question: 'How far in advance should I book for my event?',
        answer:
          "We recommend booking 2-3 weeks in advance, especially for weekend events which fill up quickly. However, we understand that sometimes events come up last-minute - don't hesitate to call us at (704) 890-3715 to check our availability. We'll do our best to accommodate your needs!",
      },
      {
        question: 'Do you require a deposit to book?',
        answer:
          'Yes, we require a deposit to secure your date. This ensures we reserve time specifically for your event. The deposit amount varies based on the size and scope of your event. The remaining balance is due on the day of your event.',
      },
      {
        question: 'What payment methods do you accept?',
        answer:
          'We accept Cash, PayPal, and Venmo for your convenience. Payment is due upon completion of services unless other arrangements have been made in advance.',
      },
      {
        question: 'What is your cancellation policy?',
        answer:
          'We understand plans change! Please notify us at least 48 hours before your event if you need to cancel or reschedule. Deposits are typically transferable to a future date. For cancellations with less than 48 hours notice, the deposit may be forfeited.',
      },
    ],
  },
  {
    title: 'Face Painting',
    faqs: [
      {
        question: 'Is the face paint safe for children with sensitive skin?',
        answer:
          'Absolutely! We use only FDA-compliant, hypoallergenic, water-based face paints specifically designed for use on skin. Our paints are non-toxic and easily wash off with soap and water. If your child has known allergies or very sensitive skin, please let us know in advance so we can do a small patch test.',
      },
      {
        question: 'How many kids can you paint per hour?',
        answer:
          'Our experienced face painters can typically paint 10-15 children per hour with full-face designs (like butterflies, tigers, or superheroes), or 15-20+ children per hour with quick cheek art designs. For larger events, we recommend booking multiple artists to minimize wait times and keep all your guests happy.',
      },
      {
        question: 'Do you paint adults too?',
        answer:
          "Of course! Face painting isn't just for kids. We offer sophisticated designs for adults including festival-style looks, sports team themes, holiday designs, and more. Many corporate events and festivals include adult face painting as a fun activity for guests of all ages.",
      },
      {
        question: 'How long does face paint last?',
        answer:
          "Our professional-grade face paints typically last until you're ready to wash them off - usually at bath time. They may smudge if touched repeatedly, so we recommend letting the paint dry completely (about 1-2 minutes) before touching. The paint washes off easily with soap and water.",
      },
      {
        question: 'Can you do specific characters or themes?',
        answer:
          'Yes! We stay current with popular characters and trends. Whether your child wants a PAW Patrol design, Disney princess, superhero mask, or unicorn transformation, we can create it. Let us know your party theme when booking and we\'ll come prepared with designs that match.',
      },
    ],
  },
  {
    title: 'Balloon Twisting',
    faqs: [
      {
        question: 'What kind of balloon creations can you make?',
        answer:
          'Our balloon artists can create a wide variety of designs! Classic options include balloon dogs, swords, flowers, butterflies, and various animals. We also make wearable items like balloon hats, bracelets, and crowns. For special requests, let us know in advance and we\'ll work to accommodate custom designs.',
      },
      {
        question: 'How many balloon creations can you make per hour?',
        answer:
          'For simple designs like basic animals and swords, we can create 15-25 balloons per hour. More complex multi-balloon sculptures take longer, typically 5-10 minutes each. We recommend discussing your expected guest count with us so we can plan accordingly.',
      },
      {
        question: 'Are balloon animals safe for young children?',
        answer:
          'Balloon animals are generally safe, but as with any balloon, they should be used under adult supervision, especially for children under 3 years old. Popped balloon pieces can be a choking hazard. We use high-quality balloons that are less likely to pop, and we\'re happy to create designs that are more durable for younger children.',
      },
    ],
  },
  {
    title: 'Other Services',
    faqs: [
      {
        question: 'Do you offer glitter tattoos and henna in addition to face painting?',
        answer:
          "Yes! In addition to face painting and balloon twisting, we offer glitter tattoos, henna tattoos, temporary tattoos, and caricature art. These services can be combined for an unforgettable party experience. Glitter tattoos are especially popular for pool parties since they're waterproof and last 3-7 days!",
      },
      {
        question: 'Can we book multiple services for one event?',
        answer:
          'Absolutely! Many clients book multiple services - for example, face painting AND balloon twisting for a birthday party. We can have one artist providing multiple services or bring multiple artists for larger events. Package deals are available when you combine services.',
      },
      {
        question: 'How long do glitter tattoos last?',
        answer:
          'Glitter tattoos typically last 3-7 days depending on placement, skin type, and how much the area is exposed to friction and water. They\'re waterproof, so swimming and showering won\'t affect them. To remove, simply apply baby oil or rubbing alcohol and gently rub off.',
      },
    ],
  },
  {
    title: 'Event Logistics',
    faqs: [
      {
        question: 'What types of events do you serve in Charlotte?',
        answer:
          "We serve all types of events throughout Charlotte and surrounding areas! This includes birthday parties, corporate family days, school functions, festivals, community events, holiday parties, church events, fundraisers, grand openings, summer camps, and Halloween celebrations. With 25 years of experience, we've entertained at thousands of diverse events.",
      },
      {
        question: 'What areas around Charlotte do you serve?',
        answer:
          'We proudly serve Charlotte, NC and the entire Charlotte metro area including Matthews, Mint Hill, Huntersville, Cornelius, Davidson, Concord, Kannapolis, Gastonia, Rock Hill SC, Fort Mill SC, Indian Trail, Monroe, Pineville, Ballantyne, and surrounding communities. Not sure if we serve your area? Contact us!',
      },
      {
        question: 'What do you need from us for the event?',
        answer:
          'We need a shaded area with access to electricity (for fans in hot weather), a table and two chairs, and access to water for cleaning brushes between guests. For indoor events, good lighting is helpful. We bring all our own supplies including paints, balloons, and any other materials needed.',
      },
      {
        question: 'Do you do events indoors and outdoors?',
        answer:
          'Yes! We can set up indoors or outdoors. For outdoor events, we require a shaded area - either natural shade or a tent/canopy. This protects both our artists and the paint quality. In extreme weather conditions (heavy rain, strong winds, extreme heat), we may need to set up indoors or reschedule.',
      },
      {
        question: 'How early do you arrive before the event?',
        answer:
          'We typically arrive 15-30 minutes before the scheduled start time to set up our station. This ensures we\'re ready to start painting or twisting as soon as your event begins. For larger events or those requiring multiple stations, we may arrive earlier.',
      },
    ],
  },
];

export default function FAQPage() {
  return (
    <>
      {/* FAQ Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqSchema),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            breadcrumbSchema([
              { name: 'Home', url: 'https://tangosfunforyou.com' },
              { name: 'FAQ', url: 'https://tangosfunforyou.com/faq' },
            ])
          ),
        }}
      />

      {/* Hero Section */}
      <section className="relative py-16 lg:py-24 bg-gradient-to-br from-primary-50 via-white to-accent-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-primary-100 rounded-2xl mb-6">
            <HelpCircle className="w-8 h-8 text-primary-600" />
          </div>
          <h1 className="text-4xl lg:text-5xl font-display font-bold text-gray-900 mb-6">
            Frequently Asked <span className="gradient-text">Questions</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Everything you need to know about booking face painting, balloon twisting, and party entertainment in Charlotte, NC.
          </p>
        </div>
      </section>

      {/* Quick Answer Section - AEO Optimized */}
      <section className="py-12 bg-white border-b">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-primary-50 to-secondary-50 rounded-2xl p-6 lg:p-8">
            <h2 className="text-xl font-display font-bold text-gray-900 mb-4">
              Quick Answers
            </h2>
            <div className="grid sm:grid-cols-2 gap-4 text-sm">
              <div>
                <strong className="text-gray-900">Starting Price:</strong>
                <span className="text-gray-600 ml-2">$125 per event</span>
              </div>
              <div>
                <strong className="text-gray-900">Booking Lead Time:</strong>
                <span className="text-gray-600 ml-2">2-3 weeks recommended</span>
              </div>
              <div>
                <strong className="text-gray-900">Kids Painted/Hour:</strong>
                <span className="text-gray-600 ml-2">10-15 (full face)</span>
              </div>
              <div>
                <strong className="text-gray-900">Experience:</strong>
                <span className="text-gray-600 ml-2">25+ years</span>
              </div>
              <div>
                <strong className="text-gray-900">Service Area:</strong>
                <span className="text-gray-600 ml-2">Charlotte & 30mi radius</span>
              </div>
              <div>
                <strong className="text-gray-900">Payment:</strong>
                <span className="text-gray-600 ml-2">Cash, PayPal, Venmo</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Categories */}
      <section className="section-padding bg-gray-50">
        <div className="max-w-4xl mx-auto">
          {faqCategories.map((category) => (
            <div key={category.title} className="mb-12 last:mb-0">
              <h2 className="text-2xl font-display font-bold text-gray-900 mb-6 pb-2 border-b-2 border-primary-200">
                {category.title}
              </h2>
              <div className="space-y-4">
                {category.faqs.map((faq, index) => (
                  <details
                    key={index}
                    className="group bg-white rounded-xl shadow-sm overflow-hidden"
                  >
                    <summary className="flex items-center justify-between p-6 cursor-pointer hover:bg-gray-50 transition-colors">
                      <h3 className="text-lg font-semibold text-gray-900 pr-4">
                        {faq.question}
                      </h3>
                      <ChevronDown className="w-5 h-5 text-gray-500 flex-shrink-0 group-open:rotate-180 transition-transform" />
                    </summary>
                    <div className="px-6 pb-6">
                      <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                    </div>
                  </details>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Still Have Questions CTA */}
      <section className="section-padding bg-gradient-to-r from-primary-600 to-secondary-600 text-white">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl lg:text-4xl font-display font-bold mb-4">
            Still Have Questions?
          </h2>
          <p className="text-xl text-white/90 mb-8">
            We're here to help! Reach out and we'll get back to you quickly.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+17048903715"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-primary-600 font-bold text-lg rounded-full hover:bg-gray-100 transition-colors"
            >
              <Phone className="w-5 h-5" />
              (704) 890-3715
            </a>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-accent-400 text-gray-900 font-bold text-lg rounded-full hover:bg-accent-500 transition-colors"
            >
              Send Us a Message
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
