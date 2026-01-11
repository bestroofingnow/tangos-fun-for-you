import type { Metadata } from 'next';
import Link from 'next/link';
import { Phone, Camera, Palette, PartyPopper, Sparkles } from 'lucide-react';
import { breadcrumbSchema } from '@/lib/schema';

export const metadata: Metadata = {
  title: 'Gallery - Face Painting & Balloon Art Photos',
  description:
    "View our gallery of face painting, balloon twisting, and party entertainment photos from events in Charlotte, NC. See why families love Tango's Fun For You Events!",
  keywords: [
    'face painting photos Charlotte',
    'balloon art gallery',
    'face painting examples',
    'party entertainment Charlotte NC',
  ],
  openGraph: {
    title: "Photo Gallery | Tango's Fun For You Events Charlotte NC",
    description:
      'Browse photos of our face painting, balloon twisting, and party entertainment work in Charlotte.',
    url: 'https://tangosfunforyou.com/gallery',
  },
  alternates: {
    canonical: 'https://tangosfunforyou.com/gallery',
  },
};

const galleryCategories = [
  {
    id: 'face-painting',
    title: 'Face Painting',
    icon: Palette,
    description: 'Stunning face painting designs for all ages',
    images: [
      { alt: 'Butterfly face painting design', placeholder: 'Butterfly Design' },
      { alt: 'Tiger face painting for kids', placeholder: 'Tiger Face' },
      { alt: 'Princess crown face painting', placeholder: 'Princess Crown' },
      { alt: 'Superhero mask face painting', placeholder: 'Superhero Mask' },
      { alt: 'Rainbow face painting', placeholder: 'Rainbow Design' },
      { alt: 'Dragon face painting', placeholder: 'Dragon Face' },
      { alt: 'Unicorn face painting', placeholder: 'Unicorn Design' },
      { alt: 'Spider web face painting', placeholder: 'Spider Web' },
    ],
  },
  {
    id: 'balloon-art',
    title: 'Balloon Art',
    icon: PartyPopper,
    description: 'Creative balloon sculptures and wearables',
    images: [
      { alt: 'Balloon dog sculpture', placeholder: 'Balloon Dog' },
      { alt: 'Balloon sword for kids', placeholder: 'Balloon Sword' },
      { alt: 'Balloon flower bouquet', placeholder: 'Flower Bouquet' },
      { alt: 'Balloon crown hat', placeholder: 'Balloon Crown' },
      { alt: 'Balloon giraffe sculpture', placeholder: 'Balloon Giraffe' },
      { alt: 'Balloon butterfly', placeholder: 'Balloon Butterfly' },
    ],
  },
  {
    id: 'events',
    title: 'Event Photos',
    icon: Camera,
    description: 'Moments from parties and events we\'ve entertained',
    images: [
      { alt: 'Birthday party face painting in Charlotte', placeholder: 'Birthday Party' },
      { alt: 'Corporate event entertainment', placeholder: 'Corporate Event' },
      { alt: 'Festival face painting booth', placeholder: 'Festival Booth' },
      { alt: 'School carnival entertainment', placeholder: 'School Carnival' },
      { alt: 'Community event face painting', placeholder: 'Community Event' },
      { alt: 'Holiday party entertainment', placeholder: 'Holiday Party' },
    ],
  },
  {
    id: 'glitter-tattoos',
    title: 'Glitter Tattoos & More',
    icon: Sparkles,
    description: 'Glitter tattoos, henna, and other services',
    images: [
      { alt: 'Glitter tattoo butterfly design', placeholder: 'Glitter Butterfly' },
      { alt: 'Henna hand design', placeholder: 'Henna Design' },
      { alt: 'Glitter tattoo star design', placeholder: 'Glitter Stars' },
      { alt: 'Temporary tattoo application', placeholder: 'Temp Tattoos' },
    ],
  },
];

export default function GalleryPage() {
  return (
    <>
      {/* Breadcrumb Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            breadcrumbSchema([
              { name: 'Home', url: 'https://tangosfunforyou.com' },
              { name: 'Gallery', url: 'https://tangosfunforyou.com/gallery' },
            ])
          ),
        }}
      />

      {/* Hero Section */}
      <section className="relative py-16 lg:py-24 bg-gradient-to-br from-secondary-50 via-white to-accent-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-secondary-100 rounded-2xl mb-6">
            <Camera className="w-8 h-8 text-secondary-600" />
          </div>
          <h1 className="text-4xl lg:text-5xl font-display font-bold text-gray-900 mb-6">
            Our <span className="gradient-text">Work</span> Gallery
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Browse photos of our face painting, balloon art, and entertainment services
            from events throughout Charlotte, NC. Every design is created with love!
          </p>
        </div>
      </section>

      {/* Gallery Sections */}
      {galleryCategories.map((category, categoryIndex) => (
        <section
          key={category.id}
          className={`section-padding ${categoryIndex % 2 === 0 ? 'bg-white' : 'bg-gray-50'}`}
        >
          <div className="text-center mb-10">
            <div className="inline-flex items-center justify-center w-14 h-14 bg-gradient-to-br from-primary-100 to-secondary-100 rounded-xl mb-4">
              <category.icon className="w-7 h-7 text-primary-600" />
            </div>
            <h2 className="text-3xl font-display font-bold text-gray-900 mb-2">
              {category.title}
            </h2>
            <p className="text-gray-600">{category.description}</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {category.images.map((image, index) => (
              <div
                key={index}
                className="aspect-square bg-gradient-to-br from-primary-100 via-secondary-100 to-accent-100 rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow group"
              >
                <div className="w-full h-full flex items-center justify-center p-4">
                  <div className="text-center">
                    <category.icon className="w-12 h-12 mx-auto text-primary-400 mb-2 group-hover:scale-110 transition-transform" />
                    <p className="text-sm text-gray-600 font-medium">{image.placeholder}</p>
                    <p className="text-xs text-gray-400 mt-1">[Add photo]</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      ))}

      {/* Add Your Photos CTA */}
      <section className="py-12 bg-white border-t">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-gray-600 mb-4">
            <strong>Note:</strong> This gallery shows placeholder images. Replace with actual photos
            of your work to showcase your talent!
          </p>
          <p className="text-sm text-gray-500">
            Tip: High-quality photos of happy kids with your face painting designs make the best
            impression on potential clients.
          </p>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gradient-to-r from-primary-600 via-secondary-600 to-accent-600 text-white text-center">
        <h2 className="text-3xl lg:text-4xl font-display font-bold mb-4">
          Want Us at Your Next Event?
        </h2>
        <p className="text-xl text-white/90 max-w-2xl mx-auto mb-8">
          Let us create magical moments at your Charlotte event! Book now and your photos could be
          featured in our gallery.
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
            className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-gray-900 text-white font-bold text-lg rounded-full hover:bg-gray-800 transition-colors"
          >
            Book Your Event
          </Link>
        </div>
      </section>
    </>
  );
}
