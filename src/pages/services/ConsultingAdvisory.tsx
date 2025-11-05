import InnerPageHero from '../../components/InnerPageHero';
import { CheckCircle, TrendingUp, Target, Lightbulb, BarChart3, Users } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function ConsultingAdvisory() {
  const features = [
    {
      icon: Target,
      title: 'Strategic Planning',
      description: 'Develop comprehensive financial strategies aligned with your business goals.',
    },
    {
      icon: BarChart3,
      title: 'Financial Analysis',
      description: 'In-depth analysis of your financial performance and opportunities.',
    },
    {
      icon: TrendingUp,
      title: 'Growth Strategy',
      description: 'Expert guidance to scale your business sustainably and profitably.',
    },
    {
      icon: Lightbulb,
      title: 'Business Optimization',
      description: 'Identify and implement improvements to maximize efficiency and profitability.',
    },
  ];

  const benefits = [
    'Make informed decisions with expert financial insights',
    'Identify new opportunities for growth and profitability',
    'Optimize operations to reduce costs and improve efficiency',
    'Navigate complex business challenges with confidence',
    'Access to seasoned financial professionals',
    'Customized strategies tailored to your unique situation',
  ];

  const services = [
    { title: 'Business Valuations', description: 'Professional valuations for sales, acquisitions, or planning' },
    { title: 'Mergers & Acquisitions', description: 'Expert guidance through M&A transactions' },
    { title: 'Cash Flow Management', description: 'Strategies to optimize working capital' },
    { title: 'Financial Forecasting', description: 'Detailed projections to guide decision-making' },
    { title: 'Risk Management', description: 'Identify and mitigate financial risks' },
    { title: 'Succession Planning', description: 'Plan for smooth business transitions' },
  ];

  return (
    <div>
      <InnerPageHero
        title="Consulting & Advisory Services"
        subtitle="Strategic financial guidance to help your business thrive. Our experienced consultants provide insights and solutions tailored to your unique challenges and opportunities."
        ctaText="Get Started"
        ctaLink="/contact"
        secondaryCtaText="(905) 607-7778"
        secondaryCtaLink="tel:9056077778"
        backgroundImage="https://images.unsplash.com/photo-1603466184602-1915265e1142?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxUb3JvbnRvJTIwY2l0eSUyMGFlcmlhbHxlbnwxfHx8fDE3NjIzNDcyNzV8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
      />

      {/* Features */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-gray-900 mb-4">Our Advisory Services</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Expert financial consulting to drive business success
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
                alt="Consulting & Advisory"
                className="rounded-2xl shadow-xl"
              />
            </div>
            <div>
              <h2 className="text-gray-900 mb-6">Your Trusted Financial Advisor</h2>
              <p className="text-gray-600 mb-8">
                Every business faces unique challenges and opportunities. Our consulting and advisory services provide you with the strategic insights and practical solutions you need to navigate complexity, seize opportunities, and achieve sustainable growth.
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

      {/* Specialized Services */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-gray-900 mb-4">Specialized Advisory Services</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Expert guidance for your most important business decisions
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <div key={index} className="bg-gray-50 p-6 rounded-xl hover:bg-blue-50 hover:border-blue-200 border border-transparent transition-all">
                <h3 className="text-gray-900 mb-2">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Approach */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-gray-900 mb-4">Our Approach</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              A proven methodology for delivering results
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { step: '01', title: 'Discovery', description: 'Understand your business, goals, and challenges' },
              { step: '02', title: 'Analysis', description: 'Deep dive into your financials and operations' },
              { step: '03', title: 'Strategy', description: 'Develop actionable recommendations' },
              { step: '04', title: 'Implementation', description: 'Support you in executing the plan' },
            ].map((item, index) => (
              <div key={index} className="text-center bg-white p-8 rounded-xl border border-gray-200">
                <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-4">
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
      <section className="py-20 bg-gradient-to-br from-blue-600 to-blue-800 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="mb-6">Ready to Take Your Business Further?</h2>
          <p className="mb-8 text-blue-100">
            Let's discuss how our consulting and advisory services can help you achieve your goals.
          </p>
          <Link
            to="/contact"
            className="inline-block bg-white text-blue-600 px-8 py-4 rounded-lg hover:bg-gray-100 transition-colors"
          >
            Schedule a Consultation
          </Link>
        </div>
      </section>
    </div>
  );
}
