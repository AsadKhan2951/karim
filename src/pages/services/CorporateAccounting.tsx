import InnerPageHero from '../../components/InnerPageHero';
import { CheckCircle, Building2, BarChart, FileCheck, Users, DollarSign } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function CorporateAccounting() {
  const features = [
    {
      icon: BarChart,
      title: 'Financial Reporting',
      description: 'Comprehensive financial statements and reports to drive informed business decisions.',
    },
    {
      icon: FileCheck,
      title: 'Corporate Tax Compliance',
      description: 'Expert tax preparation and filing for corporations, ensuring full regulatory compliance.',
    },
    {
      icon: DollarSign,
      title: 'Cash Flow Management',
      description: 'Strategic cash flow analysis and optimization to improve your bottom line.',
    },
    {
      icon: Users,
      title: 'Controller Services',
      description: 'Part-time or full-time controller services to manage your accounting operations.',
    },
  ];

  const benefits = [
    'Accurate financial reporting for better decision-making',
    'Strategic tax planning to minimize corporate tax liability',
    'Improved cash flow and working capital management',
    'Compliance with all regulatory requirements',
    'Scalable solutions that grow with your business',
    'Access to experienced CPAs and financial experts',
  ];

  return (
    <div>
      <InnerPageHero
        title="Corporate Accounting Solutions"
        subtitle="Comprehensive accounting services for businesses of all sizes. From startups to established corporations, we provide the financial expertise you need to thrive."
        ctaText="Get Started"
        ctaLink="/contact"
        secondaryCtaText="(905) 607-7778"
        secondaryCtaLink="tel:9056077778"
        backgroundImage="https://images.unsplash.com/photo-1622217122667-701eff45443c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxUb3JvbnRvJTIwd2F0ZXJmcm9udCUyMGNpdHlzY2FwZXxlbnwxfHx8fDE3NjIzNDcyNzR8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
      />

      {/* Features */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-gray-900 mb-4">Our Corporate Services</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Full-service accounting solutions designed for modern businesses
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
                src="https://images.unsplash.com/photo-1642522029691-029b5a432954?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBidXNpbmVzcyUyMG1lZXRpbmd8ZW58MXx8fHwxNzYxNzE2ODA0fDA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Corporate Accounting"
                className="rounded-2xl shadow-xl"
              />
            </div>
            <div>
              <h2 className="text-gray-900 mb-6">Partner With Financial Experts</h2>
              <p className="text-gray-600 mb-8">
                Your business deserves more than just number crunching. Our corporate accounting services provide strategic insights and expert guidance to help your business grow and succeed in today's competitive landscape.
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

      {/* Industries */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-gray-900 mb-4">Industries We Serve</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Specialized expertise across diverse sectors
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              'Technology',
              'Healthcare',
              'Manufacturing',
              'Retail',
              'Real Estate',
              'Professional Services',
              'Construction',
              'Hospitality',
            ].map((industry, index) => (
              <div key={index} className="bg-gray-50 p-6 rounded-lg text-center hover:bg-blue-50 hover:border-blue-200 border border-transparent transition-all">
                <Building2 className="w-8 h-8 text-blue-600 mx-auto mb-3" />
                <p className="text-gray-900">{industry}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-br from-blue-600 to-blue-800 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="mb-6">Elevate Your Business Finances</h2>
          <p className="mb-8 text-blue-100">
            Discover how our corporate accounting services can help your business achieve its financial goals.
          </p>
          <Link
            to="/contact"
            className="inline-block bg-white text-blue-600 px-8 py-4 rounded-lg hover:bg-gray-100 transition-colors"
          >
            Request a Consultation
          </Link>
        </div>
      </section>
    </div>
  );
}
