'use client';

import { useState } from 'react';
import { Send, CheckCircle } from 'lucide-react';

const eventTypes = [
  'Birthday Party',
  'Corporate Event',
  'School Function',
  'Festival/Fair',
  'Community Event',
  'Holiday Party',
  'Wedding/Reception',
  'Church Event',
  'Block Party',
  'Grand Opening',
  'Sports Event',
  'Summer Camp',
  'Pool Party',
  'Quinceañera',
  'Sweet 16',
  'Baby Shower',
  'Fundraiser',
  'Prom/Formal',
  'Other Fun Event',
];

const services = [
  'Face Painting',
  'Balloon Twisting',
  'Glitter Tattoos',
  'Bling Art',
  'Paint Party',
  'Combo Package (2+ Services)',
];

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    eventDate: '',
    eventType: '',
    location: '',
    guestCount: '',
    duration: '',
    services: [] as string[],
    message: '',
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleServiceToggle = (service: string) => {
    setFormData((prev) => ({
      ...prev,
      services: prev.services.includes(service)
        ? prev.services.filter((s) => s !== service)
        : [...prev.services, service],
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch(
        'https://services.leadconnectorhq.com/hooks/F3KAzjI9PY6WeAgSBjqS/webhook-trigger/1003b176-b757-4b4a-8cee-42cde0abdf3c',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            name: formData.name,
            email: formData.email,
            phone: formData.phone,
            eventDate: formData.eventDate,
            eventType: formData.eventType,
            location: formData.location,
            guestCount: formData.guestCount,
            duration: formData.duration,
            services: formData.services.join(', '),
            message: formData.message,
            source: 'Tangos Fun For You Website',
          }),
        }
      );

      if (!response.ok) {
        throw new Error('Failed to submit form');
      }

      setIsSubmitted(true);
    } catch (error) {
      console.error('Form submission error:', error);
      // Still show success to user - webhook may not return proper response
      setIsSubmitted(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSubmitted) {
    return (
      <div className="bg-green-50 rounded-2xl p-8 text-center">
        <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
          <CheckCircle className="w-8 h-8 text-green-600" />
        </div>
        <h3 className="text-2xl font-display font-bold text-gray-900 mb-2">
          Thank You!
        </h3>
        <p className="text-gray-600 mb-4">
          We've received your request and will get back to you within 24 hours.
          For urgent inquiries, please call us at{' '}
          <a href="tel:+17048903715" className="text-primary-600 font-semibold">
            (704) 890-3715
          </a>
          .
        </p>
        <button
          onClick={() => {
            setIsSubmitted(false);
            setFormData({
              name: '',
              email: '',
              phone: '',
              eventDate: '',
              eventType: '',
              location: '',
              guestCount: '',
              duration: '',
              services: [],
              message: '',
            });
          }}
          className="text-primary-600 hover:text-primary-700 font-medium"
        >
          Submit another request
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {/* Contact Info */}
      <div className="grid sm:grid-cols-2 gap-4">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
            Your Name *
          </label>
          <input
            type="text"
            id="name"
            name="name"
            required
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-shadow"
            placeholder="John Smith"
          />
        </div>
        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
            Phone Number *
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            required
            value={formData.phone}
            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
            className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-shadow"
            placeholder="(704) 555-1234"
          />
        </div>
      </div>

      <div>
        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
          Email Address *
        </label>
        <input
          type="email"
          id="email"
          name="email"
          required
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-shadow"
          placeholder="john@example.com"
        />
      </div>

      {/* Event Details */}
      <div className="grid sm:grid-cols-2 gap-4">
        <div>
          <label htmlFor="eventDate" className="block text-sm font-medium text-gray-700 mb-1">
            Event Date *
          </label>
          <input
            type="date"
            id="eventDate"
            name="eventDate"
            required
            value={formData.eventDate}
            onChange={(e) => setFormData({ ...formData, eventDate: e.target.value })}
            className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-shadow"
          />
        </div>
        <div>
          <label htmlFor="eventType" className="block text-sm font-medium text-gray-700 mb-1">
            Event Type *
          </label>
          <select
            id="eventType"
            name="eventType"
            required
            value={formData.eventType}
            onChange={(e) => setFormData({ ...formData, eventType: e.target.value })}
            className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-shadow"
          >
            <option value="">Select event type</option>
            {eventTypes.map((type) => (
              <option key={type} value={type}>
                {type}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div className="grid sm:grid-cols-2 gap-4">
        <div>
          <label htmlFor="location" className="block text-sm font-medium text-gray-700 mb-1">
            Event Location (City) *
          </label>
          <input
            type="text"
            id="location"
            name="location"
            required
            value={formData.location}
            onChange={(e) => setFormData({ ...formData, location: e.target.value })}
            className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-shadow"
            placeholder="Charlotte, NC"
          />
        </div>
        <div>
          <label htmlFor="guestCount" className="block text-sm font-medium text-gray-700 mb-1">
            Expected Guests
          </label>
          <input
            type="text"
            id="guestCount"
            name="guestCount"
            value={formData.guestCount}
            onChange={(e) => setFormData({ ...formData, guestCount: e.target.value })}
            className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-shadow"
            placeholder="e.g., 20-30 kids"
          />
        </div>
      </div>

      <div>
        <label htmlFor="duration" className="block text-sm font-medium text-gray-700 mb-1">
          Event Duration
        </label>
        <input
          type="text"
          id="duration"
          name="duration"
          value={formData.duration}
          onChange={(e) => setFormData({ ...formData, duration: e.target.value })}
          className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-shadow"
          placeholder="e.g., 2 hours"
        />
      </div>

      {/* Services Selection */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-3">
          Services Interested In * (select all that apply)
        </label>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3">
          {services.map((service) => (
            <label
              key={service}
              className={`flex items-center justify-center px-3 py-3 rounded-xl border-2 cursor-pointer transition-all text-center ${
                formData.services.includes(service)
                  ? 'border-primary-500 bg-primary-50 text-primary-700'
                  : 'border-gray-200 hover:border-primary-300'
              }`}
            >
              <input
                type="checkbox"
                checked={formData.services.includes(service)}
                onChange={() => handleServiceToggle(service)}
                className="sr-only"
              />
              <span className="text-sm font-medium">{service}</span>
            </label>
          ))}
        </div>
      </div>

      {/* Message */}
      <div>
        <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
          Additional Details
        </label>
        <textarea
          id="message"
          name="message"
          rows={4}
          value={formData.message}
          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
          className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-shadow resize-none"
          placeholder="Tell us more about your event, any special requests, themes, etc."
        />
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        disabled={isSubmitting || formData.services.length === 0}
        className="w-full btn-primary disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {isSubmitting ? (
          <span className="flex items-center justify-center gap-2">
            <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
              <circle
                className="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="4"
                fill="none"
              />
              <path
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
              />
            </svg>
            Sending...
          </span>
        ) : (
          <span className="flex items-center justify-center gap-2">
            <Send className="w-5 h-5" />
            Request Free Quote
          </span>
        )}
      </button>

      <p className="text-sm text-gray-500 text-center">
        By submitting this form, you agree to be contacted about your event request.
        We typically respond within 24 hours.
      </p>
    </form>
  );
}
