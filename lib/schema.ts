// Schema.org structured data for SEO and AEO optimization

export const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  '@id': 'https://tangosfunforyou.com/#organization',
  name: "Tango's Fun For You Events",
  alternateName: 'Tangos Fun For You Events',
  description:
    'Professional face painting, balloon twisting, glitter tattoos, and bling art services in Charlotte NC & Lake Norman. Over 25 years of experience creating magical moments at birthday parties, corporate events, festivals, and more.',
  url: 'https://tangosfunforyou.com',
  telephone: '+1-704-890-3715',
  email: 'tangosfunforyou2@gmail.com',
  address: {
    '@type': 'PostalAddress',
    streetAddress: '14016 Loch Loyal Dr',
    addressLocality: 'Charlotte',
    addressRegion: 'NC',
    postalCode: '28273',
    addressCountry: 'US',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: 35.1070,
    longitude: -80.9260,
  },
  areaServed: [
    {
      '@type': 'City',
      name: 'Charlotte',
      containedInPlace: {
        '@type': 'State',
        name: 'North Carolina',
      },
    },
    {
      '@type': 'Place',
      name: 'Lake Norman',
      containedInPlace: {
        '@type': 'State',
        name: 'North Carolina',
      },
    },
    {
      '@type': 'City',
      name: 'Mooresville',
    },
    {
      '@type': 'City',
      name: 'Matthews',
    },
    {
      '@type': 'City',
      name: 'Huntersville',
    },
    {
      '@type': 'City',
      name: 'Cornelius',
    },
    {
      '@type': 'City',
      name: 'Davidson',
    },
    {
      '@type': 'City',
      name: 'Concord',
    },
    {
      '@type': 'City',
      name: 'Gastonia',
    },
    {
      '@type': 'City',
      name: 'Rock Hill',
    },
  ],
  openingHoursSpecification: [
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
      opens: '08:00',
      closes: '20:00',
    },
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: 'Sunday',
      opens: '11:00',
      closes: '17:30',
    },
  ],
  priceRange: '$125+',
  paymentAccepted: 'Cash, PayPal, Venmo',
  founder: {
    '@type': 'Person',
    name: 'Lynn Cochran',
    jobTitle: 'Owner & Lead Entertainer',
  },
  foundingDate: '1999',
  numberOfEmployees: {
    '@type': 'QuantitativeValue',
    minValue: 4,
    maxValue: 6,
  },
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: '4.8',
    bestRating: '5',
    worstRating: '1',
    ratingCount: '36',
    reviewCount: '36',
  },
  sameAs: [
    'https://www.linkedin.com/in/lynn-cochran-2921b698/',
    'https://www.thumbtack.com/nc/charlotte/face-painting/tangos-fun-for-you-events/service/137435784538973435',
    'https://www.gigsalad.com/tangos_fun_for_you_events_charlotte',
  ],
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Entertainment Services',
    itemListElement: [
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Face Painting',
          description: 'Professional face painting for children and adults at parties and events',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Balloon Twisting',
          description: 'Creative balloon art and sculptures for parties and events',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Glitter Tattoos',
          description: 'Waterproof glitter tattoos lasting 3-7 days, perfect for pool parties and summer events',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Bling Art',
          description: 'Face and body gems with rhinestones for festivals and special occasions',
        },
      },
    ],
  },
  image: [
    'https://tangosfunforyou.com/images/hero-face-painting.jpg',
    'https://tangosfunforyou.com/images/balloon-art.jpg',
  ],
  logo: 'https://tangosfunforyou.com/images/logo.png',
};

export const servicesSchema = [
  {
    '@context': 'https://schema.org',
    '@type': 'Service',
    serviceType: 'Face Painting',
    provider: {
      '@type': 'LocalBusiness',
      name: "Tango's Fun For You Events",
    },
    areaServed: [
      {
        '@type': 'City',
        name: 'Charlotte',
        containedInPlace: {
          '@type': 'State',
          name: 'North Carolina',
        },
      },
      {
        '@type': 'Place',
        name: 'Lake Norman',
      },
    ],
    description:
      'Professional face painting services for birthday parties, corporate events, festivals, and community gatherings in Charlotte NC and Lake Norman. Our skilled artists create everything from princess crowns to superhero masks using safe, cosmetic-grade paints.',
    offers: {
      '@type': 'Offer',
      priceSpecification: {
        '@type': 'PriceSpecification',
        price: '125',
        priceCurrency: 'USD',
        minPrice: '125',
      },
    },
  },
  {
    '@context': 'https://schema.org',
    '@type': 'Service',
    serviceType: 'Balloon Twisting',
    provider: {
      '@type': 'LocalBusiness',
      name: "Tango's Fun For You Events",
    },
    areaServed: [
      {
        '@type': 'City',
        name: 'Charlotte',
        containedInPlace: {
          '@type': 'State',
          name: 'North Carolina',
        },
      },
      {
        '@type': 'Place',
        name: 'Lake Norman',
      },
    ],
    description:
      'Expert balloon twisting and balloon art for events in Charlotte NC and Lake Norman. From simple balloon animals to elaborate sculptures, we create magical balloon creations that delight children and adults alike.',
    offers: {
      '@type': 'Offer',
      priceSpecification: {
        '@type': 'PriceSpecification',
        price: '125',
        priceCurrency: 'USD',
        minPrice: '125',
      },
    },
  },
  {
    '@context': 'https://schema.org',
    '@type': 'Service',
    serviceType: 'Glitter Tattoos',
    provider: {
      '@type': 'LocalBusiness',
      name: "Tango's Fun For You Events",
    },
    areaServed: [
      {
        '@type': 'City',
        name: 'Charlotte',
        containedInPlace: {
          '@type': 'State',
          name: 'North Carolina',
        },
      },
      {
        '@type': 'Place',
        name: 'Lake Norman',
      },
    ],
    description:
      'Stunning glitter tattoos for parties and events in Charlotte NC and Lake Norman. Waterproof and lasting 3-7 days, our glitter tattoos are perfect for pool parties, summer events, and anyone who wants to sparkle.',
    offers: {
      '@type': 'Offer',
      priceSpecification: {
        '@type': 'PriceSpecification',
        price: '125',
        priceCurrency: 'USD',
        minPrice: '125',
      },
    },
  },
  {
    '@context': 'https://schema.org',
    '@type': 'Service',
    serviceType: 'Bling Art',
    provider: {
      '@type': 'LocalBusiness',
      name: "Tango's Fun For You Events",
    },
    areaServed: [
      {
        '@type': 'City',
        name: 'Charlotte',
        containedInPlace: {
          '@type': 'State',
          name: 'North Carolina',
        },
      },
      {
        '@type': 'Place',
        name: 'Lake Norman',
      },
    ],
    description:
      'Dazzling bling art and face gems for events in Charlotte NC and Lake Norman. We apply beautiful rhinestones and gems to create eye-catching designs perfect for festivals, special occasions, and photo-worthy moments.',
    offers: {
      '@type': 'Offer',
      priceSpecification: {
        '@type': 'PriceSpecification',
        price: '125',
        priceCurrency: 'USD',
        minPrice: '125',
      },
    },
  },
];

export const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'How much does face painting cost in Charlotte, NC?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Face painting services from Tango's Fun For You Events start at $125 per event. Pricing varies based on event duration, number of guests, and services requested. Contact us for a custom quote for your Charlotte area event.",
      },
    },
    {
      '@type': 'Question',
      name: 'Do you provide balloon twisting for birthday parties in Charlotte?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Yes! Tango's Fun For You Events provides professional balloon twisting services for birthday parties throughout Charlotte, NC and surrounding areas including Matthews, Huntersville, and Concord. We create custom balloon animals, swords, flowers, and more.",
      },
    },
    {
      '@type': 'Question',
      name: 'How far in advance should I book face painting for my event?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'We recommend booking at least 2-3 weeks in advance, especially for weekend events. However, we do accommodate last-minute requests when availability allows. Contact us as soon as you have your event date to secure your booking.',
      },
    },
    {
      '@type': 'Question',
      name: 'What types of events do you serve in the Charlotte area?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "We serve all types of events in Charlotte and surrounding areas including birthday parties, corporate events, school functions, festivals, community events, holiday parties, fundraisers, grand openings, and Halloween celebrations. With 25 years of experience, we've entertained at thousands of events.",
      },
    },
    {
      '@type': 'Question',
      name: 'Are your face paints safe for children with sensitive skin?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes, we use only FDA-compliant, hypoallergenic, water-based face paints that are safe for sensitive skin. Our paints are non-toxic and easily wash off with soap and water. If your child has specific allergies, please let us know in advance.',
      },
    },
    {
      '@type': 'Question',
      name: 'How many children can you paint in an hour?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Our experienced face painters can typically paint 10-15 children per hour with full-face designs, or 15-20 with cheek art designs. For larger events, we recommend booking multiple artists to minimize wait times.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can I book both face painting and balloon twisting for my event?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Absolutely! Many clients book both face painting and balloon twisting for their events. This combination keeps kids entertained with multiple activities and is perfect for larger parties. Contact us for a combo package quote.",
      },
    },
    {
      '@type': 'Question',
      name: 'What areas around Charlotte do you serve?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "We serve Charlotte, NC, Lake Norman, and the entire Charlotte metro area including Mooresville, Matthews, Mint Hill, Huntersville, Cornelius, Davidson, Concord, Kannapolis, Gastonia, Rock Hill SC, Fort Mill SC, Indian Trail, Monroe, and surrounding communities. Contact us about your location!",
      },
    },
    {
      '@type': 'Question',
      name: 'Do you offer glitter tattoos for parties?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Yes! Our glitter tattoos are a fantastic addition to any party. They're waterproof, last 3-7 days, and use cosmetic-grade, skin-safe glitter. Perfect for pool parties, summer events, and anyone who wants to sparkle without face paint.",
      },
    },
    {
      '@type': 'Question',
      name: 'What is bling art and do you offer it?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Bling art is the application of beautiful rhinestones and gems to create dazzling face and body designs. Yes, we offer bling art services perfect for festivals, quinceañeras, dance recitals, and special occasions. It can be combined with face painting for extra sparkle!",
      },
    },
  ],
};

export const breadcrumbSchema = (items: { name: string; url: string }[]) => ({
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: items.map((item, index) => ({
    '@type': 'ListItem',
    position: index + 1,
    name: item.name,
    item: item.url,
  })),
});

export const reviewSchema = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: "Tango's Fun For You Events",
  review: [
    {
      '@type': 'Review',
      reviewRating: {
        '@type': 'Rating',
        ratingValue: '5',
        bestRating: '5',
      },
      author: {
        '@type': 'Person',
        name: 'Sarah M.',
      },
      reviewBody:
        'Lynn and her team were absolutely amazing at my daughter\'s birthday party! The face painting designs were beautiful and the balloon animals were a huge hit. Highly recommend!',
    },
    {
      '@type': 'Review',
      reviewRating: {
        '@type': 'Rating',
        ratingValue: '5',
        bestRating: '5',
      },
      author: {
        '@type': 'Person',
        name: 'Michael T.',
      },
      reviewBody:
        'We hired Tango\'s for our corporate family day and they exceeded expectations. Professional, punctual, and great with kids of all ages.',
    },
    {
      '@type': 'Review',
      reviewRating: {
        '@type': 'Rating',
        ratingValue: '5',
        bestRating: '5',
      },
      author: {
        '@type': 'Person',
        name: 'Jennifer K.',
      },
      reviewBody:
        'Best face painter in Charlotte! We\'ve used them for three years in a row for our neighborhood block party. Always a crowd favorite.',
    },
  ],
};
