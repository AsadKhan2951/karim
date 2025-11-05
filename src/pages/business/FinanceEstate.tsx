import InnerPageHero from '../../components/InnerPageHero';
import { CheckCircle, Landmark, Shield, TrendingUp, FileText, Users, LineChart } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function FinanceEstate() {
  const features = [
    {
      icon: TrendingUp,
      title: 'Wealth Management',
      description: 'Strategic planning to grow and protect your assets for the long term.',
    },
    {
      icon: Shield,
      title: 'Estate Planning',
      description: 'Comprehensive estate planning to ensure your legacy is protected and transferred smoothly.',
    },
    {
      icon: LineChart,
      title: 'Investment Strategy',
      description: 'Personalized investment advice aligned with your financial goals and risk tolerance.',
    },
    {
      icon: FileText,
      title: 'Tax-Efficient Planning',
      description: 'Minimize tax liabilities while maximizing wealth transfer to beneficiaries.',
    },
  ];

  const benefits = [
    'Comprehensive financial and estate planning strategies',
    'Tax-efficient wealth transfer solutions',
    'Protection of assets for future generations',
    'Professional guidance on complex financial decisions',
    'Customized plans tailored to your unique situation',
    'Ongoing support and plan adjustments as needed',
  ];

  return (
    <div>
      <InnerPageHero
        title="Finance & Estate Planning"
        subtitle="Secure your financial future and protect your legacy. Our comprehensive planning services help you build wealth, minimize taxes, and ensure smooth wealth transfer to future generations."
        ctaText="Get Started"
        ctaLink="/contact"
        secondaryCtaText="(905) 607-7778"
        secondaryCtaLink="tel:9056077778"
        backgroundImage="https://images.unsplash.com/photo-1743978432782-762c7a9b22a3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxUb3JvbnRvJTIwY2l0eSUyMGxpZ2h0c3xlbnwxfHx8fDE3NjIzNDcyNzh8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
      />

      {/* Features */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-gray-900 mb-4">Comprehensive Planning Services</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Strategic financial and estate planning to secure your family's future
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
              <h2 className="text-gray-900 mb-6">Why Plan Your Financial Future?</h2>
              <p className="text-gray-600 mb-8">
                Proper financial and estate planning ensures your wealth is protected, grows efficiently, and transfers smoothly to your beneficiaries. Our team provides expert guidance to navigate complex financial decisions and create a comprehensive plan for your future.
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
                src="https://images.unsplash.com/photo-1598139384902-5a8217874645?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMGNvbnN1bHRpbmclMjBhZHZpc29yfGVufDF8fHx8MTc2MTc4MzM1N3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Finance & Estate Planning"
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
            <h2 className="text-gray-900 mb-4">Our Planning Process</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              A comprehensive approach to securing your financial future
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { step: '01', title: 'Assessment', description: 'Review your current financial situation' },
              { step: '02', title: 'Strategy', description: 'Develop customized planning strategy' },
              { step: '03', title: 'Implementation', description: 'Execute your financial plan' },
              { step: '04', title: 'Monitoring', description: 'Regular reviews and adjustments' },
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
          <h2 className="mb-6">Secure Your Financial Future Today</h2>
          <p className="mb-8 text-gray-300">
            Let's create a comprehensive plan to protect and grow your wealth.
          </p>
          <Link
            to="/contact"
            className="inline-block bg-white text-[#1a1f5c] px-8 py-4 rounded-lg hover:bg-gray-100 transition-colors shadow-md hover:shadow-lg"
          >
            Start Planning Now
          </Link>
        </div>
      </section>
    </div>
  );
}
