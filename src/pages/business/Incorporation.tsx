import InnerPageHero from '../../components/InnerPageHero';
import { CheckCircle, Building, FileText, Scale, Shield, Clock, TrendingUp } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Incorporation() {
  const features = [
    {
      icon: Building,
      title: 'Federal & Provincial Incorporation',
      description: 'Complete registration services for both federal and provincial incorporation across Canada.',
    },
    {
      icon: FileText,
      title: 'Name Search & Registration',
      description: 'Comprehensive name availability search and registration with government authorities.',
    },
    {
      icon: Scale,
      title: 'Legal Structure Guidance',
      description: 'Expert advice on choosing the right business structure for your needs.',
    },
    {
      icon: Shield,
      title: 'Compliance Support',
      description: 'Ongoing support to ensure your corporation remains compliant with all regulations.',
    },
  ];

  const benefits = [
    'Limited liability protection for shareholders',
    'Tax advantages and income splitting opportunities',
    'Enhanced business credibility and professionalism',
    'Easier access to capital and business financing',
    'Perpetual existence independent of ownership',
    'Expert guidance throughout the incorporation process',
  ];

  return (
    <div>
      <InnerPageHero
        title="Business Incorporation Services"
        subtitle="Start your business on the right foundation. We handle all aspects of federal and provincial incorporation, ensuring your business is properly structured from day one."
        ctaText="Get Started"
        ctaLink="/contact"
        secondaryCtaText="(905) 607-7778"
        secondaryCtaLink="tel:9056077778"
        backgroundImage="https://images.unsplash.com/photo-1560982014-81fd498f57e9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxUb3JvbnRvJTIwc2t5bGluZSUyMGJsdWUlMjBob3VyfGVufDF8fHx8MTc2MjM0NzI3OHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
      />

      {/* Features */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-gray-900 mb-4">Comprehensive Incorporation Services</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              From name registration to final incorporation documents, we manage every step
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-gray-50 p-8 rounded-xl">
                <div className="w-14 h-14 bg-[#e8eaff] rounded-lg flex items-center justify-center mb-6">
                  <feature.icon className="w-7 h-7 text-[#1a1f5c]" />
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
            <div>
              <h2 className="text-gray-900 mb-6">Why Incorporate Your Business?</h2>
              <p className="text-gray-600 mb-8">
                Incorporation provides numerous advantages for growing businesses. Our experienced team guides you through the entire process, ensuring your business is structured for success and compliant with all regulatory requirements.
              </p>
              <div className="space-y-4">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <CheckCircle className="w-6 h-6 text-[#1a1f5c] flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1642522029691-029b5a432954?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb3Jwb3JhdGUlMjBidXNpbmVzcyUyMG1lZXRpbmd8ZW58MXx8fHwxNzYxNzIyNjI2fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Business Incorporation"
                className="rounded-2xl shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-gray-900 mb-4">Our Incorporation Process</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              A streamlined, efficient approach to getting your business incorporated
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { step: '01', title: 'Consultation', description: 'Discuss your business structure and goals' },
              { step: '02', title: 'Name Search', description: 'Conduct name availability search' },
              { step: '03', title: 'Documentation', description: 'Prepare and file incorporation documents' },
              { step: '04', title: 'Finalization', description: 'Deliver your incorporation certificate' },
            ].map((item, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-[#1a1f5c] text-white rounded-full flex items-center justify-center mx-auto mb-4">
                  <span>{item.step}</span>
                </div>
                <h3 className="text-gray-900 mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-br from-[#1a1f5c] to-[#0f1b4c] text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="mb-6">Ready to Incorporate Your Business?</h2>
          <p className="mb-8 text-gray-300">
            Let's get your business properly structured and positioned for growth.
          </p>
          <Link
            to="/contact"
            className="inline-block bg-white text-[#1a1f5c] px-8 py-4 rounded-lg hover:bg-gray-100 transition-colors shadow-md hover:shadow-lg"
          >
            Start Your Incorporation
          </Link>
        </div>
      </section>
    </div>
  );
}
