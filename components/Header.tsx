'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Menu, X, Phone, Sparkles } from 'lucide-react';

const navigation = [
  { name: 'Home', href: '/' },
  { name: 'Services', href: '/services' },
  { name: 'About', href: '/about' },
  { name: 'Gallery', href: '/gallery' },
  { name: 'FAQ', href: '/faq' },
  { name: 'Contact', href: '/contact' },
];

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm shadow-sm">
      {/* Top bar with phone number */}
      <div className="bg-gradient-to-r from-primary-500 via-secondary-500 to-accent-500 text-white py-2">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-center sm:justify-end items-center gap-2">
          <Phone className="w-4 h-4" aria-hidden="true" />
          <a
            href="tel:+17048903715"
            className="font-semibold hover:underline"
            aria-label="Call us at 704-890-3715"
          >
            Call Now: (704) 890-3715
          </a>
        </div>
      </div>

      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" aria-label="Main navigation">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group">
            <div className="relative">
              <Sparkles className="w-8 h-8 text-primary-500 group-hover:text-primary-600 transition-colors" />
              <div className="absolute -top-1 -right-1 w-3 h-3 bg-accent-400 rounded-full animate-pulse" />
            </div>
            <div className="flex flex-col">
              <span className="text-xl lg:text-2xl font-display font-bold text-gray-900">
                Tango's Fun For You
              </span>
              <span className="text-xs text-gray-500 -mt-1">Events & Entertainment</span>
            </div>
          </Link>

          {/* Desktop navigation */}
          <div className="hidden lg:flex lg:items-center lg:gap-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-gray-700 hover:text-primary-600 font-medium transition-colors relative group"
              >
                {item.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary-500 group-hover:w-full transition-all duration-300" />
              </Link>
            ))}
            <Link href="/contact" className="btn-primary">
              Book Your Event
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            type="button"
            className="lg:hidden p-2 text-gray-700 hover:text-primary-600"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-expanded={mobileMenuOpen}
            aria-controls="mobile-menu"
            aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
          >
            {mobileMenuOpen ? (
              <X className="w-6 h-6" aria-hidden="true" />
            ) : (
              <Menu className="w-6 h-6" aria-hidden="true" />
            )}
          </button>
        </div>

        {/* Mobile menu */}
        {mobileMenuOpen && (
          <div id="mobile-menu" className="lg:hidden pb-4">
            <div className="flex flex-col gap-2">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="px-4 py-3 text-gray-700 hover:bg-primary-50 hover:text-primary-600 rounded-lg font-medium transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <div className="px-4 pt-2">
                <Link
                  href="/contact"
                  className="btn-primary w-full text-center"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Book Your Event
                </Link>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
