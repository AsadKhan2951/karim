import Hero from '../../components/Hero';
import { CheckCircle, ClipboardList, Target, BarChart3, FileText, TrendingUp, Users } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function BusinessPlans() {
  const features = [
    {
      icon: Target,
      title: 'Strategic Planning',
      description: 'Comprehensive business strategies aligned with your vision and market opportunities.',
    },
    {
      icon: BarChart3,
      title: 'Financial Projections',
      description: 'Detailed financial forecasts including revenue, expenses, and cash flow analysis.',
    },
    {
      icon: Users,
      title: 'Market Analysis',
      description: 'In-depth market research and competitive analysis to position your business.',
    },
    {
      icon: FileText,
      title: 'Investor-Ready Documents',
      description: 'Professional business plans formatted for banks, investors, and stakeholders.',
    },
  ];

  const benefits = [
    'Clear roadmap for business growth and success',
    'Professional documentation for funding applications',
    'Data-driven financial projections and analysis',
    'Competitive market positioning strategies',
    'Risk assessment and mitigation planning',
    'Ongoing support and plan updates as needed',
  ];

  return (
    <div>
      <Hero
        title="Business Plan Development"
        subtitle="Transform your business vision into a comprehensive, investor-ready plan. We create detailed business plans that secure funding, guide growth, and position your business for success."
        ctaText="Get Started"
        ctaLink="/contact"
        image="https://images.unsplash.com/photo-1761818645907-8bed418b415b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxDYW5hZGlhbiUyMHByb2Zlc3Npb25hbCUyMHdvcmtzcGFjZXxlbnwxfHx8fDE3NjIxNTY4MTh8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
        compact
      />

      {/* Features */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-gray-900 mb-4">Comprehensive Business Planning</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              From startups to established businesses, we create plans that drive results
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
              <h2 className="text-gray-900 mb-6">Why You Need a Professional Business Plan</h2>
              <p className="text-gray-600 mb-8">
                A well-crafted business plan is essential for securing funding, attracting investors, and guiding your business toward sustainable growth. Our experienced team creates comprehensive plans that clearly articulate your vision and demonstrate your business's potential.
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
                src="https://images.unsplash.com/photo-1758519292138-a41eaa67ee55?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxib29ra2VlcGluZyUyMGxlZGdlciUyMG5vdGVib29rfGVufDF8fHx8MTc2MTgxNjA0M3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Business Plans"
                className="rounded-2xl shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* What's Included */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-gray-900 mb-4">What's Included in Your Business Plan</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Every business plan we create includes these essential components
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: 'Executive Summary', items: ['Business overview', 'Mission & vision', 'Key success factors', 'Financial highlights'] },
              { title: 'Market Analysis', items: ['Industry overview', 'Target market', 'Competitive analysis', 'Marketing strategy'] },
              { title: 'Financial Projections', items: ['Revenue forecasts', 'Expense budgets', 'Cash flow statements', 'Break-even analysis'] },
            ].map((section, index) => (
              <div key={index} className="bg-gray-50 p-8 rounded-xl">
                <h3 className="text-gray-900 mb-6">{section.title}</h3>
                <ul className="space-y-3">
                  {section.items.map((item, itemIndex) => (
                    <li key={itemIndex} className="flex items-start space-x-2">
                      <CheckCircle className="w-5 h-5 text-[#1a1f5c] flex-shrink-0 mt-0.5" />
                      <span className="text-gray-600">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-br from-[#1a1f5c] to-[#0f1b4c] text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="mb-6">Ready to Build Your Business Plan?</h2>
          <p className="mb-8 text-gray-300">
            Let's create a comprehensive plan that secures funding and drives growth.
          </p>
          <Link
            to="/contact"
            className="inline-block bg-white text-[#1a1f5c] px-8 py-4 rounded-lg hover:bg-gray-100 transition-colors shadow-md hover:shadow-lg"
          >
            Start Your Business Plan
          </Link>
        </div>
      </section>
    </div>
  );
}
