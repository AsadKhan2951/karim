import Hero from '../../components/Hero';
import ServiceIntro from '../../components/ServiceIntro';
import { CheckCircle, FileText, Clock, Shield, Calculator, TrendingUp, Users, Award } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function TaxFiling() {
  const features = [
    {
      icon: FileText,
      title: 'Personal Tax Returns',
      description: 'Fast and accurate filing of personal income tax returns.',
    },
    {
      icon: Calculator,
      title: 'Corporate Tax Returns',
      description: 'Comprehensive corporate tax preparation and filing services.',
    },
    {
      icon: Shield,
      title: 'Tax Compliance',
      description: 'Ensuring full compliance with CRA requirements and deadlines.',
    },
    {
      icon: TrendingUp,
      title: 'Tax Optimization',
      description: 'Identifying deductions and credits to minimize tax liability.',
    },
  ];

  const benefits = [
    'Fast, accurate tax submissions to CRA',
    'Maximize deductions and tax credits',
    'Meet all filing deadlines',
    'Reduce risk of audits and penalties',
    'Expert guidance on tax matters',
    'Year-round tax support',
  ];

  return (
    <div>
      <Hero
        title="Tax Filing Services"
        subtitle="Fast, accurate tax submissions. We handle all aspects of tax preparation and filing for individuals and businesses, ensuring compliance and maximizing your tax benefits."
        ctaText="Get Started"
        ctaLink="/contact"
        image="https://images.unsplash.com/photo-1586486855514-8c633cc6fd38?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxDYW5hZGlhbiUyMHRheCUyMGRvY3VtZW50cyUyMHBsYW5uaW5nfGVufDF8fHx8MTc2MjE1NjgyMHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
        compact
      />

      {/* Service Introduction - New Dynamic Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ServiceIntro
            title="Professional Tax Filing Services You Can Trust"
            description={[
              "Tax filing requires expertise and attention to detail. Our professional tax filing services ensure accuracy, compliance, and maximum tax benefits for you or your business.",
              "From personal income tax returns to complex corporate filings, we handle every aspect with precision and care. Our experienced team stays up-to-date with the latest CRA requirements and tax legislation.",
              "Whether you're filing for the first time or need ongoing tax support, we're here to make the process smooth, stress-free, and optimized for your financial benefit."
            ]}
            image="https://images.unsplash.com/photo-1586486855514-8c633cc6fd38?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxDYW5hZGlhbiUyMHRheCUyMGRvY3VtZW50cyUyMHBsYW5uaW5nfGVufDF8fHx8MTc2MjE1NjgyMHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
            imageAlt="Tax Filing Services"
            stats={[
              { icon: Users, value: '1000+', label: 'Tax Returns Filed' },
              { icon: Clock, value: '15+', label: 'Years Experience' },
              { icon: Award, value: '99%', label: 'Accuracy Rate' },
              { icon: Shield, value: '100%', label: 'CRA Compliant' }
            ]}
          />
        </div>
      </section>

      {/* Features */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-gray-900 mb-4">Comprehensive Tax Filing Solutions</h2>
            <p className="text-black/80 max-w-2xl mx-auto">
              Complete tax preparation and filing services for individuals and businesses
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-white p-8 rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300">
                <div className="w-14 h-14 bg-[#e8eaff] rounded-lg flex items-center justify-center mb-6">
                  <feature.icon className="w-7 h-7 text-[#1a1f5c]" />
                </div>
                <h3 className="text-gray-900 mb-3">{feature.title}</h3>
                <p className="text-black/80">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative order-2 lg:order-1">
              <img
                src="https://images.unsplash.com/photo-1758876202430-a0595cf17d3e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwZXJzb25hbCUyMGZpbmFuY2UlMjBwbGFubmluZyUyMGRlc2t8ZW58MXx8fHwxNzYxODUyNjc5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Tax Filing"
                className="rounded-2xl shadow-xl"
              />
            </div>
            <div className="order-1 lg:order-2">
              <h2 className="text-gray-900 mb-6">Why Professional Tax Filing Matters</h2>
              <p className="text-black/80 mb-8">
                Experience peace of mind with expert tax filing that maximizes your benefits while ensuring full compliance.
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

      <section className="py-20 bg-gradient-to-br from-[#1a1f5c] to-[#0f1b4c] text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="mb-6">Ready to File Your Taxes?</h2>
          <p className="mb-8 text-gray-300">
            Let our experts handle your tax filing with accuracy and efficiency.
          </p>
          <Link
            to="/contact"
            className="inline-block bg-white text-[#1a1f5c] px-8 py-4 rounded-lg hover:bg-gray-100 transition-colors shadow-md hover:shadow-lg"
          >
            Get Started Today
          </Link>
        </div>
      </section>
    </div>
  );
}
