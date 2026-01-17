import Link from 'next/link';
import Image from 'next/image';
import {
  Palette,
  PartyPopper,
  Star,
  Phone,
  CheckCircle,
  Award,
  Users,
  Calendar,
  Heart,
  Shield,
  Clock,
} from 'lucide-react';
import { reviewSchema } from '@/lib/schema';

const services = [
  {
    icon: Palette,
    title: 'Face Painting',
    description:
      'Transform any event with our professional face painting. From princess crowns to superhero masks, our skilled artists create stunning designs that wow kids and adults alike.',
    features: ['Full face designs', 'Cheek art', 'Festival styles', 'Character themes'],
  },
  {
    icon: PartyPopper,
    title: 'Balloon Twisting',
    description:
      'Amazing balloon art that brings smiles to every face! Our balloon artists create everything from simple animals to elaborate sculptures and wearable balloon creations.',
    features: ['Balloon animals', 'Swords & wands', 'Balloon hats', 'Custom sculptures'],
  },
];

const testimonials = [
  {
    name: 'Sarah M.',
    event: 'Birthday Party',
    location: 'Charlotte, NC',
    rating: 5,
    text: "Lynn and her team were absolutely amazing at my daughter's birthday party! The face painting designs were beautiful and the balloon animals were a huge hit. Highly recommend for any party in Charlotte!",
  },
  {
    name: 'Michael T.',
    event: 'Corporate Event',
    location: 'Matthews, NC',
    rating: 5,
    text: "We hired Tango's for our corporate family day and they exceeded expectations. Professional, punctual, and great with kids of all ages. Will definitely book again!",
  },
  {
    name: 'Jennifer K.',
    event: 'Community Festival',
    location: 'Huntersville, NC',
    rating: 5,
    text: "Best face painter in Charlotte! We've used them for three years in a row for our neighborhood block party. Always a crowd favorite and manages the line perfectly.",
  },
];

const stats = [
  { value: '25+', label: 'Years Experience' },
  { value: '1000+', label: 'Events Completed' },
  { value: '4.8', label: 'Star Rating' },
  { value: '36+', label: 'Happy Reviews' },
];

const eventTypes = [
  'Birthday Parties',
  'Corporate Events',
  'School Functions',
  'Festivals & Fairs',
  'Holiday Parties',
  'Community Events',
  'Church Events',
  'Grand Openings',
  'Fundraisers',
  'Halloween Events',
  'Summer Camps',
  'Block Parties',
];

export default function HomePage() {
  return (
    <>
      {/* Schema.org Reviews */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(reviewSchema),
        }}
      />

      {/* Hero Section */}
      <section className="relative hero-gradient overflow-hidden">
        <div className="absolute inset-0 confetti-bg" />
        <div className="relative section-padding">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-center lg:text-left">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/80 rounded-full text-primary-600 font-semibold text-sm mb-6">
                <Award className="w-4 h-4" />
                Top Pro Since 2017 • 25+ Years Experience
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold text-gray-900 mb-6 text-balance">
                Charlotte's #1{' '}
                <span className="gradient-text">Face Painting</span> &{' '}
                <span className="gradient-text">Balloon Art</span>
              </h1>
              <p className="text-xl text-gray-600 mb-8 max-w-xl mx-auto lg:mx-0">
                Make your next event unforgettable with professional entertainment that kids and adults love.
                Serving Charlotte, NC and surrounding areas.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8">
                <a href="tel:+17048903715" className="btn-primary">
                  <Phone className="w-5 h-5 mr-2" />
                  (704) 890-3715
                </a>
                <Link href="/contact" className="btn-secondary">
                  Get a Free Quote
                </Link>
              </div>

              {/* Trust Signals */}
              <div className="flex flex-wrap gap-4 justify-center lg:justify-start text-sm text-gray-600">
                <div className="flex items-center gap-1">
                  <Shield className="w-4 h-4 text-green-500" />
                  Background Checked
                </div>
                <div className="flex items-center gap-1">
                  <Clock className="w-4 h-4 text-primary-500" />
                  Same-Day Response
                </div>
                <div className="flex items-center gap-1">
                  <Star className="w-4 h-4 text-accent-500" />
                  4.8★ Rating
                </div>
              </div>
            </div>

            {/* Hero Image */}
            <div className="relative">
              <div className="aspect-square max-w-lg mx-auto rounded-3xl shadow-2xl overflow-hidden">
                <Image
                  src="/hero-face-paint.jpg"
                  alt="Child with beautiful face painting by Tango's Fun For You"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
              {/* Floating elements */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-accent-300 rounded-full floating-animation opacity-50" />
              <div className="absolute -bottom-8 -left-8 w-32 h-32 bg-primary-300 rounded-full floating-animation opacity-50" style={{ animationDelay: '1s' }} />
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 bg-white border-y border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-4xl lg:text-5xl font-display font-bold gradient-text mb-2">
                  {stat.value}
                </div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="section-padding bg-gray-50" id="services">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-display font-bold text-gray-900 mb-4">
            Our Entertainment Services in Charlotte, NC
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            From face painting to balloon art, we offer a variety of entertainment options to make your event magical.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {services.map((service) => (
            <article key={service.title} className="service-card p-8">
              <div className="w-16 h-16 bg-gradient-to-br from-primary-100 to-secondary-100 rounded-2xl flex items-center justify-center mb-6">
                <service.icon className="w-8 h-8 text-primary-600" />
              </div>
              <h3 className="text-2xl font-display font-bold text-gray-900 mb-3">
                {service.title}
              </h3>
              <p className="text-gray-600 mb-4">{service.description}</p>
              <ul className="space-y-2">
                {service.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-2 text-gray-600">
                    <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                    {feature}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>

        <div className="text-center mt-10">
          <Link href="/services" className="btn-primary">
            Learn More About Our Services
          </Link>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="section-padding bg-white">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl lg:text-4xl font-display font-bold text-gray-900 mb-6">
              Why Charlotte Families Choose Tango's Fun For You
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              For over 25 years, Lynn Cochran and her team have been the trusted choice for party entertainment in the Charlotte metro area.
            </p>

            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="w-12 h-12 bg-primary-100 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Award className="w-6 h-6 text-primary-600" />
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 mb-1">25+ Years of Experience</h3>
                  <p className="text-gray-600">
                    Thousands of events completed with expertise that only comes from decades in the business.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-12 h-12 bg-secondary-100 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Shield className="w-6 h-6 text-secondary-600" />
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 mb-1">Background Checked & Insured</h3>
                  <p className="text-gray-600">
                    Your family's safety is our priority. All team members are background checked.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-12 h-12 bg-accent-100 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Heart className="w-6 h-6 text-accent-600" />
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 mb-1">We Love What We Do</h3>
                  <p className="text-gray-600">
                    "Every child should have the experience we provide" - that's our guiding philosophy.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Users className="w-6 h-6 text-green-600" />
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 mb-1">Expert Crowd Management</h3>
                  <p className="text-gray-600">
                    We know how to keep lines moving and kids happy, no matter the event size.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Image placeholder */}
          <div className="relative">
            <div className="aspect-[4/5] bg-gradient-to-br from-secondary-200 via-primary-200 to-accent-200 rounded-3xl shadow-xl flex items-center justify-center">
              <div className="text-center p-8">
                <Users className="w-20 h-20 mx-auto text-secondary-500 mb-4" />
                <p className="text-gray-600 font-medium">
                  [Add photo of Lynn or team at an event]
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Events We Serve */}
      <section className="section-padding bg-gradient-to-br from-primary-50 via-white to-secondary-50">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-display font-bold text-gray-900 mb-4">
            Events We Serve in Charlotte & Beyond
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            From intimate birthday parties to large corporate gatherings, we bring the fun to any occasion.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {eventTypes.map((event) => (
            <div
              key={event}
              className="flex items-center gap-3 p-4 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow"
            >
              <Calendar className="w-5 h-5 text-primary-500 flex-shrink-0" />
              <span className="font-medium text-gray-700">{event}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="section-padding bg-white">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-display font-bold text-gray-900 mb-4">
            What Charlotte Parents Are Saying
          </h2>
          <div className="flex items-center justify-center gap-1 mb-2">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-6 h-6 fill-accent-400 text-accent-400" />
            ))}
          </div>
          <p className="text-gray-600">4.8 out of 5 based on 36+ reviews</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <article key={index} className="card">
              <div className="flex items-center gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-accent-400 text-accent-400" />
                ))}
              </div>
              <blockquote className="text-gray-600 mb-4">"{testimonial.text}"</blockquote>
              <footer>
                <cite className="not-italic">
                  <span className="font-bold text-gray-900 block">{testimonial.name}</span>
                  <span className="text-sm text-gray-500">
                    {testimonial.event} • {testimonial.location}
                  </span>
                </cite>
              </footer>
            </article>
          ))}
        </div>
      </section>

      {/* Service Area Section */}
      <section className="section-padding bg-gray-900 text-white">
        <div className="text-center">
          <h2 className="text-3xl lg:text-4xl font-display font-bold mb-4">
            Serving the Greater Charlotte Metro Area
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            We proudly provide face painting, balloon twisting, and entertainment services throughout Charlotte and surrounding communities.
          </p>

          <div className="flex flex-wrap justify-center gap-3 mb-10">
            {[
              'Charlotte',
              'Matthews',
              'Mint Hill',
              'Huntersville',
              'Cornelius',
              'Davidson',
              'Concord',
              'Kannapolis',
              'Gastonia',
              'Rock Hill, SC',
              'Fort Mill, SC',
              'Indian Trail',
              'Monroe',
              'Pineville',
              'Ballantyne',
            ].map((city) => (
              <span
                key={city}
                className="px-4 py-2 bg-white/10 rounded-full text-sm font-medium"
              >
                {city}
              </span>
            ))}
          </div>

          <p className="text-gray-400 mb-6">
            Don't see your area? Contact us - we likely serve your community too!
          </p>

          <a href="tel:+17048903715" className="btn-accent">
            <Phone className="w-5 h-5 mr-2" />
            Call (704) 890-3715
          </a>
        </div>
      </section>

      {/* Final CTA */}
      <section className="section-padding bg-gradient-to-r from-primary-500 via-secondary-500 to-accent-500 text-white text-center">
        <h2 className="text-3xl lg:text-4xl font-display font-bold mb-4">
          Ready to Book Your Event?
        </h2>
        <p className="text-xl text-white/90 max-w-2xl mx-auto mb-8">
          Join thousands of happy Charlotte families who've trusted us to make their events magical.
          Pricing starts at just $125!
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="tel:+17048903715"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-primary-600 font-bold text-lg rounded-full hover:bg-gray-100 transition-colors shadow-lg"
          >
            <Phone className="w-5 h-5" />
            (704) 890-3715
          </a>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-gray-900 text-white font-bold text-lg rounded-full hover:bg-gray-800 transition-colors shadow-lg"
          >
            Get Your Free Quote
          </Link>
        </div>
      </section>
    </>
  );
}
