import Hero from '../components/Hero';
import { Target, Eye, Award, Users, CheckCircle, TrendingUp, Shield, Clock } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function About() {
  const values = [
    {
      icon: Target,
      title: 'Our Mission',
      description: 'To deliver precise, innovative accounting solutions that empower businesses to thrive financially while maintaining the highest standards of integrity and professionalism.',
    },
    {
      icon: Eye,
      title: 'Our Vision',
      description: 'To be the most trusted accounting partner in the Greater Toronto Area, recognized for our expertise, innovation, and unwavering commitment to client success.',
    },
    {
      icon: Award,
      title: 'Our Expertise',
      description: 'Certified professionals with extensive experience across all aspects of accounting, taxation, and financial management, dedicated to delivering exceptional results.',
    },
    {
      icon: Users,
      title: 'Our Commitment',
      description: 'Building lasting relationships through personalized service, transparent communication, and a genuine dedication to helping our clients achieve their financial goals.',
    },
  ];

  const whyChooseUs = [
    {
      icon: Shield,
      title: 'Trusted Expertise',
      description: 'Years of experience serving businesses and individuals across the Greater Toronto Area',
    },
    {
      icon: TrendingUp,
      title: 'Growth-Focused',
      description: 'Strategic financial guidance designed to drive business growth and profitability',
    },
    {
      icon: Clock,
      title: 'Timely Service',
      description: 'Fast, reliable service with attention to detail and commitment to deadlines',
    },
    {
      icon: CheckCircle,
      title: 'Comprehensive Solutions',
      description: 'Full-service accounting from bookkeeping to CFO-level strategic advisory',
    },
  ];

  const benefits = [
    'Personalized service tailored to your unique needs',
    'Proactive financial planning and tax strategies',
    'Deep understanding of Canadian tax laws and regulations',
    'Modern technology for efficient, accurate accounting',
    'Transparent pricing with no hidden fees',
    'Year-round support and guidance',
  ];

  return (
    <div>
      {/* Hero Section */}
      <Hero
        title="About Karim Accounting"
        subtitle="Your trusted partner for professional accounting services. We combine expertise, integrity, and innovation to deliver exceptional financial solutions that drive your success."
        image="https://images.unsplash.com/photo-1713113310084-0d8eb4933ffd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxUb3JvbnRvJTIwb2ZmaWNlJTIwYnVzaW5lc3MlMjBtZWV0aW5nfGVufDF8fHx8MTc2MjE1NjgxN3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
        compact
      />

      {/* Our Story */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-gray-900 mb-6">Welcome to Karim Accounting</h2>
              <div className="space-y-4 text-black/80">
                <p>
                  At Karim Accounting, we believe that sound financial management is the foundation of every successful business and secure financial future. Our mission is to provide comprehensive accounting and financial services that go beyond numbers—we partner with you to build strategies that drive growth, ensure compliance, and create lasting financial success.
                </p>
                <p>
                  Whether you're a small business owner navigating your first tax season, a growing enterprise looking to scale, or an individual seeking to optimize your personal finances, we're here to guide you every step of the way.
                </p>
                <p>
                  With a team of dedicated professionals and a commitment to excellence, we've built our reputation on trust, accuracy, and personalized service. We stay current with the latest regulations, technologies, and best practices to ensure you receive the most effective and efficient service possible.
                </p>
              </div>
            </div>
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1663602003573-d2a029baa5fc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxUb3JvbnRvJTIwc2t5bGluZSUyMENOJTIwVG93ZXJ8ZW58MXx8fHwxNzYyMTYzMTkwfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Toronto Skyline - Karim Accounting"
                className="rounded-2xl shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* What Sets Us Apart */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-gray-900 mb-4">What Sets Us Apart</h2>
            <p className="text-black/80 max-w-2xl mx-auto">
              Experience the Karim Accounting difference
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {whyChooseUs.map((item, index) => (
              <div key={index} className="bg-white p-6 rounded-xl border border-gray-200 hover:shadow-lg transition-all duration-300">
                <div className="w-14 h-14 bg-[#e8eaff] rounded-lg flex items-center justify-center mb-4">
                  <item.icon className="w-7 h-7 text-[#1a1f5c]" />
                </div>
                <h3 className="text-gray-900 mb-2">{item.title}</h3>
                <p className="text-black/80 text-sm">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-gray-900 mb-4">Our Core Values</h2>
            <p className="text-black/80 max-w-2xl mx-auto">
              The principles that guide everything we do
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {values.map((value, index) => (
              <div key={index} className="bg-gray-50 p-8 rounded-xl">
                <div className="w-14 h-14 bg-[#e8eaff] rounded-lg flex items-center justify-center mb-6">
                  <value.icon className="w-7 h-7 text-[#1a1f5c]" />
                </div>
                <h3 className="text-gray-900 mb-3">{value.title}</h3>
                <p className="text-black/80">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Benefits */}
      <section className="py-20 bg-gradient-to-br from-[#f0f1ff] to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative order-2 lg:order-1">
              <img
                src="https://images.unsplash.com/photo-1642522029691-029b5a432954?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb3Jwb3JhdGUlMjBidXNpbmVzcyUyMG1lZXRpbmd8ZW58MXx8fHwxNzYxNzIyNjI2fDA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Professional Accounting Services"
                className="rounded-2xl shadow-xl"
              />
            </div>
            <div className="order-1 lg:order-2">
              <h2 className="text-gray-900 mb-6">Why Businesses Trust Karim Accounting</h2>
              <p className="text-black/80 mb-8">
                We understand that choosing an accounting partner is an important decision. Here's what makes us different:
              </p>
              <div className="space-y-4">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <CheckCircle className="w-6 h-6 text-[#1a1f5c] flex-shrink-0 mt-0.5" />
                    <span className="text-black/80">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-br from-[#1a1f5c] to-[#0f1b4c] text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="mb-6">Ready to Experience the Difference?</h2>
          <p className="mb-8 text-gray-300">
            Let's discuss how we can help you achieve your financial goals. Contact us today for a free consultation.
          </p>
          <Link
            to="/contact"
            className="inline-block bg-white text-[#1a1f5c] px-8 py-4 rounded-lg hover:bg-gray-100 transition-colors shadow-md hover:shadow-lg"
          >
            Get In Touch
          </Link>
        </div>
      </section>
    </div>
  );
}
