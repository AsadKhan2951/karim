import Hero from '../../components/Hero';
import ServiceIntro from '../../components/ServiceIntro';
import { CheckCircle, BarChart3, FileText, PieChart, TrendingUp, Users, Award, Clock, Shield } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function FinancialReporting() {
  const features = [
    {
      icon: BarChart3,
      title: 'Income Statements',
      description: 'Detailed profit and loss reporting for your business.',
    },
    {
      icon: PieChart,
      title: 'Balance Sheets',
      description: 'Comprehensive snapshot of your financial position.',
    },
    {
      icon: TrendingUp,
      title: 'Cash Flow Statements',
      description: 'Track cash inflows and outflows for better planning.',
    },
    {
      icon: FileText,
      title: 'Custom Reports',
      description: 'Tailored financial reports to meet your specific needs.',
    },
  ];

  const benefits = [
    'Clear financial reports to guide business decisions',
    'Timely and accurate financial statements',
    'Better understanding of your financial position',
    'Compliance with reporting requirements',
    'Insights for strategic planning',
    'Professional presentation for stakeholders',
  ];

  return (
    <div>
      <Hero
        title="Financial Reporting Services"
        subtitle="Financial reports to guide decisions. We prepare clear, accurate financial statements that provide insights into your business performance and support informed decision-making."
        ctaText="Get Started"
        ctaLink="/contact"
        image="https://images.unsplash.com/photo-1613316806864-86d8e77de03a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxUb3JvbnRvJTIwZmluYW5jaWFsJTIwZGlzdHJpY3R8ZW58MXx8fHwxNzYyMTU2ODE4fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
        compact
      />

      {/* Service Introduction - New Dynamic Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ServiceIntro
            title="Clear Financial Insights for Better Decisions"
            description={[
              "Accurate financial reporting provides the insights you need to make informed business decisions, attract investors, and demonstrate financial health to stakeholders.",
              "Our comprehensive financial reporting services deliver clear, professional statements that tell the story of your business performance. From income statements to custom analytics, we provide the data you need.",
              "Whether you need monthly reports for management or annual statements for stakeholders, our expert team ensures your financial reporting is accurate, timely, and meaningful."
            ]}
            image="https://images.unsplash.com/photo-1613316806864-86d8e77de03a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxUb3JvbnRvJTIwZmluYW5jaWFsJTIwZGlzdHJpY3R8ZW58MXx8fHwxNzYyMTU2ODE4fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
            imageAlt="Financial Reporting Services"
            stats={[
              { icon: Users, value: '250+', label: 'Reports Delivered' },
              { icon: Clock, value: 'Monthly', label: 'Regular Updates' },
              { icon: Award, value: '100%', label: 'Accuracy' },
              { icon: Shield, value: 'GAAP', label: 'Compliant' }
            ]}
          />
        </div>
      </section>

      {/* Features */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-gray-900 mb-4">Comprehensive Financial Reporting</h2>
            <p className="text-black/80 max-w-2xl mx-auto">
              Professional financial statements and custom reports
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
                src="https://images.unsplash.com/photo-1642522029691-029b5a432954?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb3Jwb3JhdGUlMjBidXNpbmVzcyUyMG1lZXRpbmd8ZW58MXx8fHwxNzYxNzIyNjI2fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Financial Reporting"
                className="rounded-2xl shadow-xl"
              />
            </div>
            <div className="order-1 lg:order-2">
              <h2 className="text-gray-900 mb-6">Why Financial Reporting Matters</h2>
              <p className="text-black/80 mb-8">
                Transform raw financial data into actionable insights that drive your business forward.
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
          <h2 className="mb-6">Get Clear Financial Insights</h2>
          <p className="mb-8 text-gray-300">
            Let's create comprehensive financial reports for your business.
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
