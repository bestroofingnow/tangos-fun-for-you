import type { Metadata } from 'next';
import Link from 'next/link';
import {
  Award,
  Heart,
  Users,
  Clock,
  Shield,
  Star,
  Phone,
  Calendar,
  CheckCircle,
} from 'lucide-react';
import { breadcrumbSchema } from '@/lib/schema';

export const metadata: Metadata = {
  title: 'About Us - 25+ Years of Party Entertainment',
  description:
    "Meet Lynn Cochran and the Tango's Fun For You Events team. 25+ years experience in face painting, balloon twisting & party entertainment in Charlotte, NC.",
  keywords: [
    'Lynn Cochran Charlotte',
    'face painter Charlotte NC',
    'balloon artist near me',
    'party entertainment company Charlotte',
    'kids entertainer Charlotte',
  ],
  openGraph: {
    title: "About Tango's Fun For You Events | Charlotte NC",
    description:
      '25+ years bringing joy to Charlotte families. Meet the team behind the magic!',
    url: 'https://tangosfunforyou.com/about',
  },
  alternates: {
    canonical: 'https://tangosfunforyou.com/about',
  },
};

const milestones = [
  { year: '1999', event: 'Started entertaining at local Charlotte events' },
  { year: '2005', event: 'Expanded team to serve larger events' },
  { year: '2010', event: 'Became go-to entertainment for Charlotte festivals' },
  { year: '2017', event: 'Achieved Thumbtack Top Pro status' },
  { year: '2020', event: 'Adapted services for safe outdoor events' },
  { year: '2024', event: 'Celebrating 25+ years serving Charlotte families' },
];

const values = [
  {
    icon: Heart,
    title: 'Every Child Matters',
    description:
      '"Every child should have the experience we provide." This philosophy drives everything we do, from pricing flexibility to the care we put into each design.',
  },
  {
    icon: Star,
    title: 'Excellence in Entertainment',
    description:
      'We stay current with trends, continuously improve our skills, and bring professional-grade artistry to every event, big or small.',
  },
  {
    icon: Users,
    title: 'Building Connections',
    description:
      "We don't just provide a service—we create experiences that bring families together and give children memories they'll treasure forever.",
  },
  {
    icon: Shield,
    title: 'Safety & Trust',
    description:
      'Background-checked team members, FDA-compliant materials, and professional liability coverage give parents complete peace of mind.',
  },
];

export default function AboutPage() {
  return (
    <>
      {/* Breadcrumb Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            breadcrumbSchema([
              { name: 'Home', url: 'https://tangosfunforyou.com' },
              { name: 'About', url: 'https://tangosfunforyou.com/about' },
            ])
          ),
        }}
      />

      {/* Hero Section */}
      <section className="relative py-16 lg:py-24 bg-gradient-to-br from-secondary-50 via-white to-primary-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary-100 rounded-full text-primary-700 font-semibold text-sm mb-6">
                <Award className="w-4 h-4" />
                Serving Charlotte Since 1999
              </div>
              <h1 className="text-4xl lg:text-5xl font-display font-bold text-gray-900 mb-6">
                The Story Behind the{' '}
                <span className="gradient-text">Magic</span>
              </h1>
              <p className="text-xl text-gray-600 mb-6">
                For over 25 years, Tango's Fun For You Events has been bringing smiles to faces
                throughout Charlotte and the surrounding areas. What started as a passion for
                entertaining has grown into Charlotte's most trusted party entertainment company.
              </p>
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-accent-400 text-accent-400" />
                  ))}
                </div>
                <span className="text-gray-600">4.8/5 from 36+ reviews</span>
              </div>
            </div>

            {/* Image Placeholder */}
            <div className="relative">
              <div className="aspect-square bg-gradient-to-br from-primary-200 via-secondary-200 to-accent-200 rounded-3xl shadow-xl flex items-center justify-center">
                <div className="text-center p-8">
                  <Users className="w-20 h-20 mx-auto text-primary-500 mb-4" />
                  <p className="text-gray-600 font-medium">
                    [Add photo of Lynn Cochran here]
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Meet Lynn Section */}
      <section className="section-padding bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl lg:text-4xl font-display font-bold text-gray-900 text-center mb-12">
            Meet Lynn Cochran
          </h2>

          <div className="prose prose-lg prose-gray max-w-none">
            <p className="text-xl text-gray-600 mb-6">
              Lynn Cochran, owner and lead entertainer of Tango's Fun For You Events, has been
              described as having "the outgoing and fun personality of a natural born entertainer."
              With over 25 years of experience, Lynn has mastered the art of creating magical
              moments at events of all sizes.
            </p>

            <p className="text-gray-600 mb-6">
              What sets Lynn apart is her genuine love for what she does. "Every child should have
              the experience we provide," she says, reflecting her commitment to making entertainment
              accessible to families across Charlotte. This philosophy extends to her flexible pricing
              approach, ensuring that budget constraints don't prevent children from experiencing the
              joy of face painting and balloon art.
            </p>

            <p className="text-gray-600 mb-6">
              Lynn's expertise goes beyond artistic skill—she excels at managing crowds, keeping
              lines moving efficiently, and ensuring every guest feels special. Whether it's a
              backyard birthday party or a large corporate family day, Lynn and her team bring
              professionalism, energy, and genuine warmth to every event.
            </p>

            <blockquote className="border-l-4 border-primary-500 pl-6 py-2 my-8 bg-primary-50 rounded-r-lg">
              <p className="text-xl text-gray-700 italic mb-2">
                "I've been doing this for 25 years because I genuinely love seeing kids light up
                when they see their face transformed or receive their balloon creation. That never
                gets old."
              </p>
              <cite className="text-primary-600 font-semibold">— Lynn Cochran, Owner</cite>
            </blockquote>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gradient-to-r from-primary-500 via-secondary-500 to-accent-500">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center text-white">
            <div>
              <div className="text-5xl font-display font-bold mb-2">25+</div>
              <div className="text-white/80">Years Experience</div>
            </div>
            <div>
              <div className="text-5xl font-display font-bold mb-2">1000+</div>
              <div className="text-white/80">Events Completed</div>
            </div>
            <div>
              <div className="text-5xl font-display font-bold mb-2">4.8</div>
              <div className="text-white/80">Star Rating</div>
            </div>
            <div>
              <div className="text-5xl font-display font-bold mb-2">53</div>
              <div className="text-white/80">Hired on Thumbtack</div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="section-padding bg-gray-50">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-display font-bold text-gray-900 mb-4">
            What We Stand For
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Our values guide every interaction, every event, and every smile we create.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {values.map((value) => (
            <div key={value.title} className="card">
              <div className="w-14 h-14 bg-gradient-to-br from-primary-100 to-secondary-100 rounded-xl flex items-center justify-center mb-4">
                <value.icon className="w-7 h-7 text-primary-600" />
              </div>
              <h3 className="text-xl font-display font-bold text-gray-900 mb-2">
                {value.title}
              </h3>
              <p className="text-gray-600">{value.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Timeline */}
      <section className="section-padding bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl lg:text-4xl font-display font-bold text-gray-900 text-center mb-12">
            Our Journey
          </h2>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-primary-200 hidden md:block" />

            <div className="space-y-8">
              {milestones.map((milestone, index) => (
                <div key={milestone.year} className="flex gap-6 items-start">
                  <div className="relative">
                    <div className="w-16 h-16 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-full flex items-center justify-center text-white font-bold shadow-lg">
                      {milestone.year.slice(2)}
                    </div>
                  </div>
                  <div className="flex-1 pt-3">
                    <div className="text-sm text-primary-600 font-semibold mb-1">
                      {milestone.year}
                    </div>
                    <p className="text-gray-700 font-medium">{milestone.event}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="section-padding bg-gray-50">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl lg:text-4xl font-display font-bold text-gray-900 text-center mb-12">
            Why Charlotte Chooses Us
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: Shield, text: 'Background Checked Team' },
              { icon: Award, text: 'Thumbtack Top Pro Since 2017' },
              { icon: Clock, text: 'Same-Day Response' },
              { icon: Users, text: 'Expert Crowd Management' },
              { icon: Heart, text: 'Flexible Pricing Options' },
              { icon: Star, text: '4.8★ Customer Rating' },
              { icon: Calendar, text: 'Available 7 Days a Week' },
              { icon: CheckCircle, text: 'FDA-Compliant Materials' },
              { icon: Users, text: '4-6 Professional Artists' },
            ].map((item) => (
              <div key={item.text} className="flex items-center gap-3 p-4 bg-white rounded-xl shadow-sm">
                <item.icon className="w-6 h-6 text-primary-500 flex-shrink-0" />
                <span className="font-medium text-gray-700">{item.text}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gradient-to-r from-primary-600 to-secondary-600 text-white text-center">
        <h2 className="text-3xl lg:text-4xl font-display font-bold mb-4">
          Ready to Experience the Difference?
        </h2>
        <p className="text-xl text-white/90 max-w-2xl mx-auto mb-8">
          Join the thousands of Charlotte families who've trusted us for their special events.
          Let's create something magical together!
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
            Book Your Event
          </Link>
        </div>
      </section>
    </>
  );
}
