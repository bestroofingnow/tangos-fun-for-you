import Link from 'next/link';
import { Phone, Mail, MapPin, Clock, Linkedin, ThumbsUp, Music, Star } from 'lucide-react';

const services = [
  { name: 'Face Painting', href: '/services#face-painting' },
  { name: 'Balloon Twisting', href: '/services#balloon-twisting' },
  { name: 'Glitter Tattoos', href: '/services#glitter-tattoos' },
  { name: 'Bling Art', href: '/services#bling-art' },
];

const events = [
  'Birthday Parties',
  'Corporate Events',
  'School Functions',
  'Festivals & Fairs',
  'Community Events',
  'Holiday Parties',
];

const serviceAreas = [
  'Charlotte',
  'Lake Norman',
  'Mooresville',
  'Matthews',
  'Huntersville',
  'Cornelius',
  'Davidson',
  'Concord',
  'Gastonia',
  'Rock Hill',
  'Fort Mill',
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-gray-300">
      {/* CTA Section */}
      <div className="bg-gradient-to-r from-primary-600 via-secondary-600 to-primary-600 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-display font-bold text-white mb-4">
            Ready to Make Your Event Unforgettable?
          </h2>
          <p className="text-xl text-white/90 mb-6 max-w-2xl mx-auto">
            Book Charlotte and Lake Norman's most trusted face painting, balloon art, glitter tattoos & bling art team today!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href="tel:+17048903715"
              className="inline-flex items-center gap-2 px-8 py-4 bg-white text-primary-600 font-bold text-lg rounded-full hover:bg-gray-100 transition-colors shadow-lg"
            >
              <Phone className="w-5 h-5" />
              (704) 890-3715
            </a>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 bg-accent-400 text-gray-900 font-bold text-lg rounded-full hover:bg-accent-500 transition-colors shadow-lg"
            >
              Get a Free Quote
            </Link>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <h3 className="text-2xl font-display font-bold text-white mb-4">
              Tango's Fun For You
            </h3>
            <p className="text-gray-400 mb-6">
              Charlotte and Lake Norman's premier face painting, balloon twisting, glitter tattoos & bling art company with over 25 years of experience creating magical moments.
            </p>
            <div className="flex items-center gap-1 mb-4">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-accent-400 text-accent-400" />
              ))}
              <span className="ml-2 text-white font-semibold">4.8/5</span>
            </div>
            <p className="text-sm text-gray-400">Based on 36+ reviews</p>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-display font-bold text-white mb-4">Our Services</h4>
            <ul className="space-y-2">
              {services.map((service) => (
                <li key={service.name}>
                  <Link
                    href={service.href}
                    className="text-gray-400 hover:text-primary-400 transition-colors"
                  >
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>

            <h4 className="text-lg font-display font-bold text-white mt-6 mb-4">Events We Serve</h4>
            <ul className="space-y-1 text-sm text-gray-400">
              {events.map((event) => (
                <li key={event}>{event}</li>
              ))}
            </ul>
          </div>

          {/* Service Areas */}
          <div>
            <h4 className="text-lg font-display font-bold text-white mb-4">Service Areas</h4>
            <p className="text-gray-400 mb-3">Proudly serving Charlotte and surrounding areas:</p>
            <ul className="grid grid-cols-2 gap-1 text-sm text-gray-400">
              {serviceAreas.map((area) => (
                <li key={area}>{area}, NC</li>
              ))}
            </ul>
            <p className="mt-4 text-sm text-gray-500">
              Don't see your area? Contact us - we may still be able to serve you!
            </p>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-display font-bold text-white mb-4">Contact Us</h4>
            <ul className="space-y-4">
              <li>
                <a
                  href="tel:+17048903715"
                  className="flex items-start gap-3 text-gray-400 hover:text-primary-400 transition-colors"
                >
                  <Phone className="w-5 h-5 mt-0.5 flex-shrink-0" />
                  <span>
                    <strong className="text-white block">(704) 890-3715</strong>
                    Call or Text
                  </span>
                </a>
              </li>
              <li>
                <a
                  href="mailto:tangosfunforyou2@gmail.com"
                  className="flex items-start gap-3 text-gray-400 hover:text-primary-400 transition-colors"
                >
                  <Mail className="w-5 h-5 mt-0.5 flex-shrink-0" />
                  <span>tangosfunforyou2@gmail.com</span>
                </a>
              </li>
              <li className="flex items-start gap-3 text-gray-400">
                <MapPin className="w-5 h-5 mt-0.5 flex-shrink-0" />
                <span>
                  Charlotte, NC 28273<br />
                  <span className="text-sm">Serving the entire Charlotte Metro</span>
                </span>
              </li>
              <li className="flex items-start gap-3 text-gray-400">
                <Clock className="w-5 h-5 mt-0.5 flex-shrink-0" />
                <span>
                  <strong className="text-white block">Hours</strong>
                  Mon-Sat: 8 AM - 8 PM<br />
                  Sun: 11 AM - 5:30 PM
                </span>
              </li>
            </ul>

            {/* Social Links */}
            <div className="flex gap-3 mt-6">
              <a
                href="https://www.linkedin.com/in/lynn-cochran-2921b698/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-800 hover:bg-primary-600 transition-colors"
                aria-label="Connect on LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="https://www.thumbtack.com/nc/charlotte/face-painting/tangos-fun-for-you-events/service/137435784538973435"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-800 hover:bg-primary-600 transition-colors"
                aria-label="Find us on Thumbtack"
              >
                <ThumbsUp className="w-5 h-5" />
              </a>
              <a
                href="https://www.gigsalad.com/tangos_fun_for_you_events_charlotte"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-800 hover:bg-primary-600 transition-colors"
                aria-label="Find us on GigSalad"
              >
                <Music className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-500">
            <p>&copy; {currentYear} Tango's Fun For You Events. All rights reserved.</p>
            <div className="flex gap-6">
              <Link href="/privacy" className="hover:text-gray-300 transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms" className="hover:text-gray-300 transition-colors">
                Terms of Service
              </Link>
              <Link href="/sitemap.xml" className="hover:text-gray-300 transition-colors">
                Sitemap
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
