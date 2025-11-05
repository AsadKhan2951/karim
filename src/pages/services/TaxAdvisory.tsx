import InnerPageHero from '../../components/InnerPageHero';
import ServiceIntro from '../../components/ServiceIntro';
import { CheckCircle, TrendingUp, Shield, Calculator, FileText, Users, Award, Clock } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function TaxAdvisory() {
  const features = [
    {
      icon: TrendingUp,
      title: 'Tax Planning Strategies',
      description: 'Proactive tax planning to minimize your tax liability.',
    },
    {
      icon: Calculator,
      title: 'Tax Optimization',
      description: 'Identify opportunities for tax savings and credits.',
    },
    {
      icon: Shield,
      title: 'Compliance Advisory',
      description: 'Stay compliant with changing tax laws and regulations.',
    },
    {
      icon: FileText,
      title: 'Tax Structure Review',
      description: 'Optimize your business structure for tax efficiency.',
    },
  ];

  const benefits = [
    'Smart tax-saving strategies throughout the year',
    'Minimize tax liability legally and ethically',
    'Proactive planning vs. reactive filing',
    'Expert advice on complex tax matters',
    'Stay ahead of tax law changes',
    'Strategic guidance for major financial decisions',
  ];

  return (
    <div>
      <InnerPageHero
        title="Tax Planning & Advisory Services"
        subtitle="Smart tax-saving strategies. Our tax advisory services help you minimize tax liability through proactive planning, strategic guidance, and expert knowledge of tax laws."
        ctaText="Get Started"
        ctaLink="/contact"
        secondaryCtaText="(905) 607-7778"
        secondaryCtaLink="tel:9056077778"
        backgroundImage="https://images.unsplash.com/photo-1516468851383-af0e988c3782?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxUb3JvbnRvJTIwY2l0eXNjYXBlJTIwZHVza3xlbnwxfHx8fDE3NjIzNDcyNzh8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
      />

      {/* Service Introduction - New Dynamic Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ServiceIntro
            title="Proactive Tax Planning for Maximum Savings"
            description={[
              "Don't wait until tax season to think about taxes. Our proactive tax advisory services help you minimize tax liability through strategic planning, expert guidance, and year-round support.",
              "From tax optimization strategies to compliance advisory, we provide comprehensive tax planning that keeps you ahead of the curve. Our experts stay current with the latest tax laws and regulations to ensure you benefit from every available opportunity.",
              "Whether you're planning a major business decision or looking to optimize your tax position, our strategic tax advisory services provide the insights and guidance you need to make informed financial choices."
            ]}
            image="https://images.unsplash.com/photo-1594837447247-8bfc126ff9d2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxUb3JvbnRvJTIwc2t5bGluZSUyMGJ1c2luZXNzJTIwcHJvZmVzc2lvbmFsfGVufDF8fHx8MTc2MjE1NjgxNnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
            imageAlt="Tax Advisory Services"
            stats={[
              { icon: Users, value: '600+', label: 'Clients Advised' },
              { icon: Clock, value: '15+', label: 'Years Experience' },
              { icon: Award, value: '$2M+', label: 'Taxes Saved' },
              { icon: Shield, value: '100%', label: 'Compliant' }
            ]}
          />
        </div>
      </section>

      {/* Features */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-gray-900 mb-4">Strategic Tax Advisory Services</h2>
            <p className="text-black/80 max-w-2xl mx-auto">
              Proactive tax planning and optimization services
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
                alt="Tax Advisory"
                className="rounded-2xl shadow-xl"
              />
            </div>
            <div className="order-1 lg:order-2">
              <h2 className="text-gray-900 mb-6">Why Proactive Tax Planning Matters</h2>
              <p className="text-black/80 mb-8">
                Transform your tax strategy from reactive to proactive and unlock significant savings opportunities.
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
          <h2 className="mb-6">Ready to Optimize Your Tax Strategy?</h2>
          <p className="mb-8 text-gray-300">
            Let's create a proactive tax plan that maximizes your savings.
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
