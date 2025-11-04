import Hero from '../../components/Hero';
import ServiceIntro from '../../components/ServiceIntro';
import { CheckCircle, Target, BarChart3, TrendingUp, PieChart, Users, Award, Clock, Shield } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Budgeting() {
  const features = [
    {
      icon: Target,
      title: 'Budget Development',
      description: 'Create comprehensive budgets aligned with your business goals.',
    },
    {
      icon: BarChart3,
      title: 'Financial Forecasting',
      description: 'Predict future financial performance and cash flow needs.',
    },
    {
      icon: TrendingUp,
      title: 'Variance Analysis',
      description: 'Compare actual results to budget and identify trends.',
    },
    {
      icon: PieChart,
      title: 'Scenario Planning',
      description: 'Model different scenarios to support decision-making.',
    },
  ];

  const benefits = [
    'Plan and predict your finances accurately',
    'Make informed business decisions',
    'Identify potential cash flow issues early',
    'Track performance against goals',
    'Optimize resource allocation',
    'Support strategic planning initiatives',
  ];

  return (
    <div>
      <Hero
        title="Budgeting & Forecasting Services"
        subtitle="Plan and predict your finances. Our budgeting and forecasting services help you plan for the future, manage cash flow, and make data-driven business decisions."
        ctaText="Get Started"
        ctaLink="/contact"
        image="https://images.unsplash.com/photo-1560428969-34a7bb7917f5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxUb3JvbnRvJTIwbW9kZXJuJTIwb2ZmaWNlJTIwaW50ZXJpb3J8ZW58MXx8fHwxNzYyMTU2ODIwfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
        compact
      />

      {/* Service Introduction - New Dynamic Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ServiceIntro
            title="Strategic Financial Planning for Future Success"
            description={[
              "Effective budgeting and forecasting are essential for business success. Our comprehensive financial planning services help you predict future performance, manage cash flow, and make data-driven decisions with confidence.",
              "From developing detailed budgets to creating sophisticated financial forecasts, we provide the tools and insights you need to plan for growth, identify opportunities, and navigate challenges before they arise.",
              "Whether you're planning for expansion, managing seasonal fluctuations, or seeking investment, our budgeting and forecasting services give you the clarity and control to achieve your business goals."
            ]}
            image="https://images.unsplash.com/photo-1560428969-34a7bb7917f5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxUb3JvbnRvJTIwbW9kZXJuJTIwb2ZmaWNlJTIwaW50ZXJpb3J8ZW58MXx8fHwxNzYyMTU2ODIwfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
            imageAlt="Budgeting & Forecasting Services"
            stats={[
              { icon: Users, value: '150+', label: 'Budgets Created' },
              { icon: Clock, value: 'Real-Time', label: 'Updates' },
              { icon: Award, value: '95%', label: 'Accuracy Rate' },
              { icon: Shield, value: 'Strategic', label: 'Planning' }
            ]}
          />
        </div>
      </section>

      {/* Features */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-gray-900 mb-4">Comprehensive Budgeting Solutions</h2>
            <p className="text-black/80 max-w-2xl mx-auto">
              Strategic financial planning and forecasting services
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
                alt="Budgeting & Forecasting"
                className="rounded-2xl shadow-xl"
              />
            </div>
            <div className="order-1 lg:order-2">
              <h2 className="text-gray-900 mb-6">Why Budgeting & Forecasting Matter</h2>
              <p className="text-black/80 mb-8">
                Take control of your financial future with strategic planning that drives growth and profitability.
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

      {/* Process */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-gray-900 mb-4">Our Planning Process</h2>
            <p className="text-black/80 max-w-2xl mx-auto">
              A systematic approach to financial planning and forecasting
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { step: '01', title: 'Analysis', description: 'Review historical data and business goals' },
              { step: '02', title: 'Development', description: 'Create comprehensive budget and forecasts' },
              { step: '03', title: 'Monitoring', description: 'Track actual vs. budget performance' },
              { step: '04', title: 'Adjustment', description: 'Update forecasts based on actuals' },
            ].map((item, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-[#1a1f5c] to-[#4364F7] text-white rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                  <span>{item.step}</span>
                </div>
                <h3 className="text-gray-900 mb-2">{item.title}</h3>
                <p className="text-black/80">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-br from-[#1a1f5c] to-[#0f1b4c] text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="mb-6">Ready to Plan for Success?</h2>
          <p className="mb-8 text-gray-300">
            Let's create a strategic budget and forecast for your business.
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
