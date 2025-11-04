import Hero from '../../components/Hero';
import { CheckCircle, FileText, Shield, Calculator, TrendingDown, Clock } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function TaxServices() {
  const features = [
    {
      icon: FileText,
      title: 'Tax Preparation & Filing',
      description: 'Expert preparation and filing of personal and corporate tax returns.',
    },
    {
      icon: TrendingDown,
      title: 'Tax Planning',
      description: 'Strategic planning to minimize your tax liability year-round.',
    },
    {
      icon: Shield,
      title: 'Audit Support',
      description: 'Professional representation and support during tax audits.',
    },
    {
      icon: Calculator,
      title: 'Tax Credits & Deductions',
      description: 'Identify all available credits and deductions to maximize savings.',
    },
  ];

  const benefits = [
    'Maximize tax savings with strategic planning',
    'Ensure full compliance with tax regulations',
    'Minimize risk of audits and penalties',
    'Year-round tax advice and support',
    'Expert handling of complex tax situations',
    'Peace of mind during tax season',
  ];

  const taxTypes = [
    { title: 'Personal Income Tax', description: 'Individual and family tax returns' },
    { title: 'Corporate Tax', description: 'Business and corporate tax filing' },
    { title: 'GST/HST Returns', description: 'Sales tax preparation and filing' },
    { title: 'Estate Tax', description: 'Estate and trust tax planning' },
    { title: 'International Tax', description: 'Cross-border tax compliance' },
    { title: 'Tax Amendments', description: 'Previous year adjustments' },
  ];

  return (
    <div>
      <Hero
        title="Comprehensive Tax Services"
        subtitle="Strategic tax planning and expert preparation to minimize your tax liability while ensuring full compliance. Trust our experienced team to handle all your tax needs."
        ctaText="Get Started"
        ctaLink="/contact"
        image="https://images.unsplash.com/photo-1586486855514-8c633cc6fd38?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxDYW5hZGlhbiUyMHRheCUyMGRvY3VtZW50cyUyMHBsYW5uaW5nfGVufDF8fHx8fDE3NjIxNTY4MjB8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
        compact
      />

      {/* Features */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-gray-900 mb-4">Our Tax Services</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Complete tax solutions for individuals and businesses
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-gray-50 p-8 rounded-xl">
                <div className="w-14 h-14 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
                  <feature.icon className="w-7 h-7 text-blue-600" />
                </div>
                <h3 className="text-gray-900 mb-3">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1707779491435-000c45820db2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmaW5hbmNpYWwlMjBwbGFubmluZyUyMGNhbGN1bGF0b3J8ZW58MXx8fHwxNzYxNzY1MjkwfDA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Tax Services"
                className="rounded-2xl shadow-xl"
              />
            </div>
            <div>
              <h2 className="text-gray-900 mb-6">Expert Tax Guidance You Can Trust</h2>
              <p className="text-gray-600 mb-8">
                Tax laws are complex and constantly changing. Our team stays current with all regulations to ensure you receive accurate advice and maximize your tax savings. We take a proactive approach, identifying opportunities throughout the year.
              </p>
              <div className="space-y-4">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <CheckCircle className="w-6 h-6 text-blue-600 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tax Types */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-gray-900 mb-4">Types of Tax Returns We Handle</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Comprehensive tax services for all your needs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {taxTypes.map((type, index) => (
              <div key={index} className="bg-gray-50 p-6 rounded-xl hover:bg-blue-50 hover:border-blue-200 border border-transparent transition-all">
                <h3 className="text-gray-900 mb-2">{type.title}</h3>
                <p className="text-gray-600">{type.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-gray-900 mb-4">Don't Wait Until Tax Season</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Proactive tax planning throughout the year can save you money
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: Clock,
                title: 'Year-Round Planning',
                description: 'We work with you throughout the year to optimize your tax position.',
              },
              {
                icon: Calculator,
                title: 'Strategic Advice',
                description: 'Get expert guidance on major financial decisions and their tax implications.',
              },
              {
                icon: Shield,
                title: 'Compliance Assurance',
                description: 'Rest easy knowing your taxes are accurate and filed on time.',
              },
            ].map((item, index) => (
              <div key={index} className="text-center bg-white p-8 rounded-xl border border-gray-200">
                <item.icon className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                <h3 className="text-gray-900 mb-3">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-br from-blue-600 to-blue-800 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="mb-6">Maximize Your Tax Savings</h2>
          <p className="mb-8 text-blue-100">
            Contact us today to discuss how we can help you minimize your tax liability.
          </p>
          <Link
            to="/contact"
            className="inline-block bg-white text-blue-600 px-8 py-4 rounded-lg hover:bg-gray-100 transition-colors"
          >
            Schedule a Tax Consultation
          </Link>
        </div>
      </section>
    </div>
  );
}
