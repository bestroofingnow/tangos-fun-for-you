import type { Metadata } from 'next';
import Link from 'next/link';
import {
  Palette,
  PartyPopper,
  CheckCircle,
  Phone,
  Star,
  Sparkles,
  Gem,
} from 'lucide-react';
import { servicesSchema, breadcrumbSchema } from '@/lib/schema';

export const metadata: Metadata = {
  title: 'Face Painting, Balloon Twisting, Glitter Tattoos & Bling Art Services',
  description:
    'Professional face painting, balloon twisting, glitter tattoos & bling art in Charlotte NC & Lake Norman. 25+ years experience. Starting at $125. Book now!',
  keywords: [
    'face painting Charlotte NC',
    'balloon twisting Charlotte',
    'face painter near me',
    'balloon artist Charlotte NC',
    'party entertainment services',
    'kids entertainment Charlotte',
    'glitter tattoos Charlotte NC',
    'bling art Charlotte',
    'temporary tattoos kids party',
    'Lake Norman face painting',
    'Mooresville face painter',
    'kids party entertainment Lake Norman',
  ],
  openGraph: {
    title: "Entertainment Services | Tango's Fun For You Events",
    description:
      'Professional face painting, balloon twisting, glitter tattoos & bling art in Charlotte NC & Lake Norman. Perfect for birthday parties, corporate events, and festivals.',
    url: 'https://tangosfunforyou.com/services',
  },
  alternates: {
    canonical: 'https://tangosfunforyou.com/services',
  },
};

const services = [
  {
    id: 'face-painting',
    icon: Palette,
    title: 'Face Painting',
    subtitle: 'Charlotte\'s Premier Face Painting Artists',
    description:
      'Transform your event with stunning face painting that brings imagination to life. Our professional face painters create everything from delicate butterfly designs to fierce tiger faces, princess tiaras to superhero masks.',
    longDescription: `Our face painting service is perfect for birthday parties, festivals, corporate events, and any celebration in the Charlotte area. Using only FDA-compliant, hypoallergenic water-based paints, we ensure safe and beautiful results for guests of all ages.

Each design is carefully crafted to delight, with options ranging from quick cheek art (perfect for high-volume events) to elaborate full-face transformations. Our artists stay current with popular characters and trends while also offering timeless classics.`,
    features: [
      'Full face designs (butterflies, tigers, princesses, superheroes)',
      'Quick cheek art for high-volume events',
      'Festival and theatrical styles',
      'Character themes (current & classic)',
      'Adult-friendly sophisticated designs',
      'Safe cosmetic-grade, FDA-compliant paints',
    ],
    perfectFor: [
      'Birthday parties',
      'School carnivals',
      'Corporate family days',
      'Community festivals',
      'Halloween events',
      'Sports events',
    ],
    faq: [
      {
        q: 'How many kids can you paint per hour?',
        a: 'Our experienced artists can paint 10-15 children per hour with full-face designs, or 15-20+ with cheek art. For larger events, we recommend multiple artists.',
      },
      {
        q: 'Is the face paint safe for sensitive skin?',
        a: 'Yes! We use only FDA-compliant, hypoallergenic, water-based paints. Please let us know about any specific allergies in advance.',
      },
    ],
  },
  {
    id: 'balloon-twisting',
    icon: PartyPopper,
    title: 'Balloon Twisting',
    subtitle: 'Amazing Balloon Art & Sculptures',
    description:
      'Watch amazement spread across faces as our balloon artists create incredible sculptures right before your eyes. From classic balloon animals to elaborate wearable creations, our balloon twisting brings pure joy to any event.',
    longDescription: `Balloon twisting is an interactive entertainment that captivates children and adults alike. Our skilled balloon artists can create everything from simple balloon dogs and swords to complex multi-balloon sculptures, princess crowns, and custom requests.

The magic of balloon twisting lies in the performance - watching a simple balloon transform into a beloved character or animal creates lasting memories. Our artists engage with each guest, making them part of the creative process.`,
    features: [
      'Classic balloon animals (dogs, giraffes, monkeys)',
      'Swords, lightsabers, and wands',
      'Wearable creations (hats, bracelets, crowns)',
      'Paint Parties',
      'Character balloons (popular themes)',
      'Custom requests and designs',
    ],
    perfectFor: [
      'Birthday parties',
      'Restaurant entertainment',
      'Grand openings',
      'Trade shows',
      'Festivals',
      'Holiday celebrations',
    ],
    faq: [
      {
        q: 'Can you make specific characters or custom designs?',
        a: 'Absolutely! Our artists can create custom balloon designs including popular characters, logos, and special requests. Let us know what you have in mind!',
      },
      {
        q: 'How many balloons can you make per hour?',
        a: 'For simple designs like animals and swords, we can create 15-25 per hour. Complex designs take longer, so we recommend discussing your event size.',
      },
    ],
  },
  {
    id: 'glitter-tattoos',
    icon: Sparkles,
    title: 'Glitter Tattoos',
    subtitle: 'Sparkle & Shine Entertainment',
    description:
      'Add some sparkle to your event with our stunning glitter tattoos! These long-lasting, waterproof temporary tattoos are perfect for kids and adults who want to shine without the commitment of face paint.',
    longDescription: `Glitter tattoos are a fantastic alternative or addition to face painting. Using cosmetic-grade glitter and skin-safe adhesive, we create dazzling designs that last 3-7 days and are waterproof - perfect for pool parties and summer events!

Our glitter tattoo collection includes hundreds of stencil designs from popular characters to elegant patterns. They're quick to apply, making them ideal for high-volume events where you want every guest to leave with something special.`,
    features: [
      'Waterproof - lasts 3-7 days',
      'Cosmetic-grade, skin-safe glitter',
      'Hundreds of stencil designs',
      'Quick application (1-2 minutes each)',
      'Perfect for all ages',
      'Great for pool parties & outdoor events',
    ],
    perfectFor: [
      'Birthday parties',
      'Pool parties',
      'School events',
      'Summer camps',
      'Sports events',
      'Teen parties',
    ],
    faq: [
      {
        q: 'How long do glitter tattoos last?',
        a: 'Glitter tattoos typically last 3-7 days depending on placement and care. They are waterproof and can withstand swimming and bathing!',
      },
      {
        q: 'Are glitter tattoos safe for sensitive skin?',
        a: 'Yes! We use only cosmetic-grade glitter and skin-safe adhesive. However, if your child has adhesive sensitivities, please let us know.',
      },
    ],
  },
  {
    id: 'bling-art',
    icon: Gem,
    title: 'Bling Art',
    subtitle: 'Dazzling Face & Body Gems',
    description:
      'Elevate any look with our stunning bling art service! We apply beautiful rhinestones and gems to create eye-catching designs that add glamour and sparkle to faces, arms, and more.',
    longDescription: `Bling art takes face decoration to the next level with gorgeous rhinestones, gems, and jewels arranged in stunning patterns. Perfect for festivals, special occasions, and anyone who wants to stand out!

Our bling art designs range from simple accent gems to elaborate face jewelry arrangements. Using skin-safe adhesive, we create custom looks that complement face painting or stand beautifully on their own.`,
    features: [
      'High-quality rhinestones & gems',
      'Skin-safe adhesive',
      'Custom designs available',
      'Complements face painting',
      'Festival-ready looks',
      'Perfect for photos & special occasions',
    ],
    perfectFor: [
      'Festival events',
      'Dance recitals',
      'Quinceañeras',
      'Sweet 16 parties',
      'Photo shoots',
      'Prom & formal events',
    ],
    faq: [
      {
        q: 'How long does bling art last?',
        a: 'Bling art typically lasts throughout your event and can last 1-3 days with care. Avoid rubbing the area and they will stay put!',
      },
      {
        q: 'Can bling art be combined with face painting?',
        a: 'Absolutely! Bling art and face painting go perfectly together. Many clients choose to add gems as accents to their face painting designs for extra sparkle.',
      },
    ],
  },
];

export default function ServicesPage() {
  return (
    <>
      {/* Schema.org Service structured data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(servicesSchema),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            breadcrumbSchema([
              { name: 'Home', url: 'https://tangosfunforyou.com' },
              { name: 'Services', url: 'https://tangosfunforyou.com/services' },
            ])
          ),
        }}
      />

      {/* Hero Section */}
      <section className="relative py-16 lg:py-24 bg-gradient-to-br from-primary-50 via-white to-secondary-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl lg:text-5xl font-display font-bold text-gray-900 mb-6">
            Entertainment Services in{' '}
            <span className="gradient-text">Charlotte & Lake Norman</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Professional face painting, balloon twisting, glitter tattoos & bling art that brings magic to any event. 25+ years of experience serving Charlotte & Lake Norman. Starting at just $125!
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href="tel:+17048903715" className="btn-primary">
              <Phone className="w-5 h-5 mr-2" />
              (704) 890-3715
            </a>
            <Link href="/contact" className="btn-secondary">
              Get a Free Quote
            </Link>
          </div>
        </div>
      </section>

      {/* Quick Navigation */}
      <nav className="sticky top-[104px] z-40 bg-white shadow-sm py-4 border-b" aria-label="Service navigation">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-2">
            {services.map((service) => (
              <a
                key={service.id}
                href={`#${service.id}`}
                className="px-4 py-2 text-sm font-medium text-gray-600 hover:text-primary-600 hover:bg-primary-50 rounded-full transition-colors"
              >
                {service.title}
              </a>
            ))}
          </div>
        </div>
      </nav>

      {/* Services Detail Sections */}
      {services.map((service, index) => (
        <section
          key={service.id}
          id={service.id}
          className={`section-padding ${index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}`}
        >
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
              {/* Service Icon & Title */}
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-primary-100 to-secondary-100 rounded-2xl flex items-center justify-center">
                  <service.icon className="w-8 h-8 text-primary-600" />
                </div>
                <div>
                  <h2 className="text-3xl lg:text-4xl font-display font-bold text-gray-900">
                    {service.title}
                  </h2>
                  <p className="text-primary-600 font-medium">{service.subtitle}</p>
                </div>
              </div>

              <p className="text-xl text-gray-600 mb-6">{service.description}</p>

              <div className="prose prose-gray max-w-none mb-8">
                {service.longDescription.split('\n\n').map((paragraph, i) => (
                  <p key={i} className="text-gray-600">
                    {paragraph}
                  </p>
                ))}
              </div>

              {/* Features */}
              <div className="mb-8">
                <h3 className="text-xl font-display font-bold text-gray-900 mb-4">
                  What's Included
                </h3>
                <ul className="grid sm:grid-cols-2 gap-3">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-600">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Perfect For */}
              <div>
                <h3 className="text-xl font-display font-bold text-gray-900 mb-4">
                  Perfect For
                </h3>
                <div className="flex flex-wrap gap-2">
                  {service.perfectFor.map((event) => (
                    <span
                      key={event}
                      className="px-3 py-1 bg-primary-100 text-primary-700 rounded-full text-sm font-medium"
                    >
                      {event}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* FAQ & Image Column */}
            <div className={index % 2 === 1 ? 'lg:order-1' : ''}>
              {/* Image Placeholder */}
              <div className="aspect-[4/3] bg-gradient-to-br from-primary-200 via-secondary-200 to-accent-200 rounded-2xl shadow-lg mb-8 flex items-center justify-center">
                <div className="text-center p-6">
                  <service.icon className="w-16 h-16 mx-auto text-primary-500 mb-3" />
                  <p className="text-gray-600 font-medium">
                    [Add {service.title.toLowerCase()} photos here]
                  </p>
                </div>
              </div>

              {/* FAQ */}
              <div className="bg-white rounded-2xl shadow-lg p-6">
                <h3 className="text-xl font-display font-bold text-gray-900 mb-4">
                  Common Questions
                </h3>
                <div className="space-y-4">
                  {service.faq.map((item, i) => (
                    <div key={i}>
                      <h4 className="font-semibold text-gray-900 mb-2">{item.q}</h4>
                      <p className="text-gray-600 text-sm">{item.a}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
      ))}

      {/* Pricing Section */}
      <section className="section-padding bg-gradient-to-br from-primary-500 via-secondary-500 to-accent-500 text-white">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl lg:text-4xl font-display font-bold mb-6">
            Affordable Entertainment for Charlotte Events
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Our services start at just <strong>$125 per event</strong>. We work with your budget
            to create the perfect entertainment package for your celebration.
          </p>

          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 mb-8">
            <div className="grid sm:grid-cols-3 gap-6 text-center">
              <div>
                <div className="text-4xl font-display font-bold mb-2">$125+</div>
                <div className="text-white/80">Starting Price</div>
              </div>
              <div>
                <div className="text-4xl font-display font-bold mb-2">Custom</div>
                <div className="text-white/80">Package Deals</div>
              </div>
              <div>
                <div className="text-4xl font-display font-bold mb-2">Flexible</div>
                <div className="text-white/80">Payment Options</div>
              </div>
            </div>
          </div>

          <p className="text-white/80 mb-6">
            We accept Cash, PayPal, and Venmo for your convenience.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+17048903715"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-primary-600 font-bold text-lg rounded-full hover:bg-gray-100 transition-colors"
            >
              <Phone className="w-5 h-5" />
              Get a Quote
            </a>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-gray-900 text-white font-bold text-lg rounded-full hover:bg-gray-800 transition-colors"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
