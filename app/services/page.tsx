import type { Metadata } from 'next';
import Link from 'next/link';
import {
  Palette,
  PartyPopper,
  CheckCircle,
  Phone,
  Star,
} from 'lucide-react';
import { servicesSchema, breadcrumbSchema } from '@/lib/schema';

export const metadata: Metadata = {
  title: 'Face Painting, Balloon Twisting & Entertainment Services',
  description:
    'Professional face painting and balloon twisting services in Charlotte, NC. 25+ years experience. Starting at $125. Book now for your party or event!',
  keywords: [
    'face painting Charlotte NC',
    'balloon twisting Charlotte',
    'face painter near me',
    'balloon artist Charlotte NC',
    'party entertainment services',
    'kids entertainment Charlotte',
  ],
  openGraph: {
    title: "Entertainment Services | Tango's Fun For You Events",
    description:
      'Professional face painting and balloon twisting in Charlotte, NC. Perfect for birthday parties, corporate events, and festivals.',
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
      'FDA-compliant, hypoallergenic paints',
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
      'Elaborate multi-balloon sculptures',
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
    subtitle: 'Sparkle That Lasts for Days',
    description:
      'Add extra sparkle to your event with our dazzling glitter tattoos! These eye-catching, waterproof temporary tattoos last 3-7 days and are perfect for guests who want lasting event memories.',
    longDescription: `Glitter tattoos are a fantastic addition to any party or event. Using cosmetic-grade glitter and skin-safe adhesive, we create stunning designs that shimmer and shine. Unlike face paint that washes off the same day, glitter tattoos last through multiple showers and daily activities.

With hundreds of design options from butterflies and hearts to sports themes and popular characters, there's something for everyone. Glitter tattoos are perfect for tweens and teens who may feel they've "outgrown" face painting but still want to participate in the fun.`,
    features: [
      'Hundreds of design options',
      'Waterproof - lasts 3-7 days',
      'Cosmetic-grade, skin-safe materials',
      'Multiple glitter color options',
      'Perfect for all ages',
      'Quick application (2-3 minutes)',
    ],
    perfectFor: [
      'Pool parties',
      'Beach events',
      'Teen birthdays',
      'Festivals',
      'Sports events',
      'Summer camps',
    ],
    faq: [
      {
        q: 'How long do glitter tattoos last?',
        a: 'Glitter tattoos typically last 3-7 days depending on placement and care. They\'re waterproof and can withstand swimming and showering.',
      },
      {
        q: 'Are glitter tattoos safe for children?',
        a: 'Yes! We use only cosmetic-grade glitter and skin-safe adhesive designed specifically for body art. However, avoid applying on sensitive or broken skin.',
      },
    ],
  },
  {
    id: 'henna',
    icon: Flower2,
    title: 'Henna Tattoos',
    subtitle: 'Beautiful Traditional Body Art',
    description:
      'Experience the ancient art of henna with beautiful, intricate designs. Our henna artists create stunning patterns that develop into a rich brown color and last 1-3 weeks.',
    longDescription: `Henna (mehndi) is a traditional body art form that has been practiced for thousands of years. Our artists create beautiful designs ranging from traditional Indian and Arabic patterns to modern, contemporary styles.

Using natural henna paste, we apply intricate designs that initially appear orange and deepen to a rich brown color over 24-48 hours. Henna is perfect for bridal showers, cultural celebrations, and guests who appreciate this elegant art form.`,
    features: [
      'Traditional Indian & Arabic designs',
      'Modern contemporary patterns',
      'Bridal and wedding designs',
      'Natural henna paste',
      'Lasts 1-3 weeks',
      'Customizable designs',
    ],
    perfectFor: [
      'Bridal showers',
      'Wedding events',
      'Cultural celebrations',
      'Teen parties',
      'Festivals',
      'Special occasions',
    ],
    faq: [
      {
        q: 'How long does henna take to dry?',
        a: 'Henna paste needs to stay on skin for 2-4 hours minimum for best color development. We recommend keeping it on overnight for the darkest results.',
      },
      {
        q: 'Is henna safe for everyone?',
        a: 'We use natural henna without harmful additives. However, we recommend a patch test for those with sensitive skin. Avoid if pregnant or have G6PD deficiency.',
      },
    ],
  },
  {
    id: 'caricatures',
    icon: PenTool,
    title: 'Caricature Art',
    subtitle: 'Fun & Memorable Portraits',
    description:
      'Give your guests a unique keepsake with professional caricature art! Our talented artists capture personalities in fun, exaggerated drawings that make perfect party favors.',
    longDescription: `Caricature art adds a unique entertainment element to any event while providing guests with a personalized keepsake to take home. Our artists quickly capture the essence of each subject, creating fun, flattering caricatures that guests treasure for years.

Whether you want individual portraits, couples, or group caricatures, our artists work efficiently while maintaining quality. Caricatures are particularly popular at corporate events, weddings, and milestone birthday parties.`,
    features: [
      'Individual and group portraits',
      'Color or black & white options',
      'Custom backgrounds available',
      'Quick turnaround (3-5 minutes per person)',
      'Digital options available',
      'Great party keepsake',
    ],
    perfectFor: [
      'Corporate events',
      'Wedding receptions',
      'Bar/Bat Mitzvahs',
      'Milestone birthdays',
      'Trade shows',
      'Company parties',
    ],
    faq: [
      {
        q: 'How long does each caricature take?',
        a: 'Most individual caricatures take 3-5 minutes. Couples take about 5-7 minutes, and groups may take 10-15 minutes depending on size.',
      },
      {
        q: 'Can you do digital caricatures?',
        a: 'Yes! We offer digital caricature options that can be printed on-site or emailed to guests. Great for tech-savvy events!',
      },
    ],
  },
  {
    id: 'temporary-tattoos',
    icon: Stamp,
    title: 'Temporary Tattoos',
    subtitle: 'Quick & Easy Application',
    description:
      'Our airbrush and temporary tattoo station is perfect for high-volume events where you want to serve lots of guests quickly. Professional designs, fast application!',
    longDescription: `Temporary tattoos offer a quick, efficient way to provide entertainment at high-volume events. Our collection includes a wide variety of designs suitable for all ages, from cute animals and flowers to sports themes and popular characters.

For events where speed is essential, temporary tattoos can be applied in under a minute, allowing us to serve many guests in a short time. They're also a great add-on service to complement face painting or balloon twisting at your event.`,
    features: [
      'Wide variety of designs',
      'Quick application (under 1 minute)',
      'Perfect for high-volume events',
      'All-age appropriate options',
      'Affordable add-on service',
      'Easy to remove',
    ],
    perfectFor: [
      'Large festivals',
      'School events',
      'Sports tournaments',
      'Community gatherings',
      'Quick entertainment needs',
      'Add-on to other services',
    ],
    faq: [
      {
        q: 'How long do temporary tattoos last?',
        a: 'Our temporary tattoos typically last 2-5 days depending on placement and exposure to water and friction.',
      },
      {
        q: 'Can we choose specific designs?',
        a: 'Yes! Let us know your event theme and we\'ll bring a curated selection of appropriate designs.',
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
            <span className="gradient-text">Charlotte, NC</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Professional face painting and balloon twisting that brings magic to any event. 25+ years of experience. Starting at just $125!
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
