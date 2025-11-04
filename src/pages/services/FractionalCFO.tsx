import Hero from '../../components/Hero';
import ServiceIntro from '../../components/ServiceIntro';
import { CheckCircle, CircleDollarSign, TrendingUp, BarChart3, Target, Users, Award, Clock, Shield } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function FractionalCFO() {
  const features = [
    {
      icon: TrendingUp,
      title: 'Strategic Financial Planning',
      description: 'Long-term financial strategy and business planning.',
    },
    {
      icon: BarChart3,
      title: 'Financial Analysis',
      description: 'In-depth analysis of financial performance and trends.',
    },
    {
      icon: Target,
      title: 'Cash Flow Management',
      description: 'Optimize cash flow and working capital management.',
    },
    {
      icon: CircleDollarSign,
      title: 'Fundraising Support',
      description: 'Assistance with raising capital and investor relations.',
    },
  ];

  const benefits = [
    'Part-time CFO expertise for financial strategy',
    'Cost-effective alternative to full-time CFO',
    'Strategic guidance for growth and profitability',
    'Financial leadership and team mentoring',
    'Investor-ready financial presentations',
    'Flexible engagement tailored to your needs',
  ];

  return (
    <div>
      <Hero
        title="Fractional CFO Services"
        subtitle="Part-time CFO for financial strategy. Get expert CFO-level guidance without the full-time cost. We provide strategic financial leadership to drive your business growth."
        ctaText="Get Started"
        ctaLink="/contact"
        image="https://images.unsplash.com/photo-1698762954345-0c4d58f79b1c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxUb3JvbnRvJTIwQ04lMjBUb3dlciUyMGJ1c2luZXNzfGVufDF8fHx8MTc2MjE1NjgxOXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
        compact
      />

      {/* Service Introduction - New Dynamic Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ServiceIntro
            title="Strategic CFO Leadership for Growing Businesses"
            description={[
              "Get the strategic financial leadership your business needs without the cost of a full-time CFO. Our fractional CFO services provide expert guidance, financial strategy, and business insights to drive growth and profitability.",
              "From financial planning and analysis to fundraising support and investor relations, our experienced CFOs bring executive-level expertise to your business on a flexible, part-time basis.",
              "Whether you're scaling rapidly, seeking investment, or need strategic financial guidance, our fractional CFO services give you the leadership you need at a fraction of the cost."
            ]}
            image="https://images.unsplash.com/photo-1698762954345-0c4d58f79b1c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxUb3JvbnRvJTIwQ04lMjBUb3dlciUyMGJ1c2luZXNzfGVufDF8fHx8MTc2MjE1NjgxOXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
            imageAlt="Fractional CFO Services"
            stats={[
              { icon: Users, value: '50+', label: 'Companies Served' },
              { icon: Clock, value: '20+', label: 'Years Experience' },
              { icon: Award, value: '$50M+', label: 'Capital Raised' },
              { icon: Shield, value: 'CPA/CFA', label: 'Certified Team' }
            ]}
          />
        </div>
      </section>

      {/* Features */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-gray-900 mb-4">Strategic CFO Services</h2>
            <p className="text-black/80 max-w-2xl mx-auto">
              Executive-level financial expertise tailored to your business
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
                alt="Fractional CFO"
                className="rounded-2xl shadow-xl"
              />
            </div>
            <div className="order-1 lg:order-2">
              <h2 className="text-gray-900 mb-6">Why Choose a Fractional CFO?</h2>
              <p className="text-black/80 mb-8">
                Access executive-level financial expertise that drives growth without the full-time commitment.
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
          <h2 className="mb-6">Get Strategic Financial Leadership</h2>
          <p className="mb-8 text-gray-300">
            Let's discuss how our fractional CFO services can drive your business forward.
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
