import InnerPageHero from '../../components/InnerPageHero';
import ServiceIntro from '../../components/ServiceIntro';
import { CheckCircle, BookOpen, FileText, Database, TrendingUp, Calendar, Users, Award, Clock, Shield } from 'lucide-react';
import { Link } from 'react-router-dom';
import bookkeepingImage from 'figma:asset/111d644b9c67f5e792144571a0d3d42c2ff80a4c.png';

export default function Bookkeeping() {
  const features = [
    {
      icon: Database,
      title: 'Transaction Recording',
      description: 'Accurate and timely recording of all financial transactions.',
    },
    {
      icon: FileText,
      title: 'Accounts Reconciliation',
      description: 'Regular reconciliation of bank statements and accounts.',
    },
    {
      icon: TrendingUp,
      title: 'Financial Statements',
      description: 'Monthly profit & loss statements and balance sheets.',
    },
    {
      icon: Calendar,
      title: 'Regular Reporting',
      description: 'Scheduled financial reports to keep you informed.',
    },
  ];

  const benefits = [
    'Always up-to-date and accurate financial records',
    'Better visibility into your business performance',
    'Simplified tax preparation and filing',
    'Reduced risk of errors and discrepancies',
    'More time to focus on growing your business',
    'Cloud-based systems for real-time access',
  ];

  return (
    <div>
      <InnerPageHero
        title="Professional Bookkeeping Services"
        subtitle="Keep your financial records organized and accurate with our expert bookkeeping services. We handle the details so you can focus on what matters most."
        ctaText="Get Started"
        ctaLink="/contact"
        secondaryCtaText="(905) 607-7778"
        secondaryCtaLink="tel:9056077778"
        backgroundImage="https://images.unsplash.com/photo-1704925052413-f4b9a3d467f7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxUb3JvbnRvJTIwQ04lMjBUb3dlciUyMGV2ZW5pbmd8ZW58MXx8fHwxNzYyMzQ3Mjc0fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
      />

      {/* Service Introduction - New Dynamic Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ServiceIntro
            title="Expert Bookkeeping for Your Business Success"
            description={[
              "Accurate bookkeeping is the foundation of sound financial management. Our experienced team ensures your financial records are always current, accurate, and compliant, giving you the insights you need to make informed business decisions.",
              "From daily transaction recording to monthly financial statements, we handle every aspect of your bookkeeping with precision and professionalism. Our cloud-based systems provide you with real-time access to your financial data.",
              "Whether you're a small startup or an established business, our comprehensive bookkeeping services help you stay organized, save time, and focus on what you do best—growing your business."
            ]}
            image="https://images.unsplash.com/photo-1654140140199-fd32282377ac?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxUb3JvbnRvJTIwcHJvZmVzc2lvbmFsJTIwYWNjb3VudGluZyUyMHdvcmtzcGFjZSUyMGxhcHRvcHxlbnwxfHx8fDE3NjIxNTY5Mjh8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
            imageAlt="Bookkeeping Services"
            stats={[
              { icon: Users, value: '300+', label: 'Active Clients' },
              { icon: Clock, value: '15+', label: 'Years Experience' },
              { icon: Award, value: '99.9%', label: 'Accuracy Rate' },
              { icon: Shield, value: '100%', label: 'Data Security' }
            ]}
          />
        </div>
      </section>

      {/* Features */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-gray-900 mb-4">Our Comprehensive Services</h2>
            <p className="text-black/80 max-w-2xl mx-auto">
              Complete bookkeeping solutions tailored to your business needs
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
                src={bookkeepingImage}
                alt="Professional bookkeeping with calculator and financial reports"
                className="rounded-2xl shadow-xl"
              />
            </div>
            <div className="order-1 lg:order-2">
              <h2 className="text-gray-900 mb-6">Why Professional Bookkeeping Matters</h2>
              <p className="text-black/80 mb-8">
                Experience the peace of mind that comes with accurate, organized financial records managed by professionals.
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

      {/* Technology */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-gray-900 mb-4">Modern Tools & Technology</h2>
            <p className="text-black/80 max-w-2xl mx-auto">
              We leverage the latest accounting software to provide efficient, accurate bookkeeping services
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: 'Cloud-Based Systems',
                description: 'Access your financial data anytime, anywhere with secure cloud technology.',
              },
              {
                title: 'Automated Processes',
                description: 'Streamlined workflows that reduce errors and save time.',
              },
              {
                title: 'Real-Time Reporting',
                description: 'Up-to-date financial insights whenever you need them.',
              },
            ].map((item, index) => (
              <div key={index} className="text-center bg-white p-8 rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300">
                <div className="w-16 h-16 bg-gradient-to-br from-[#1a1f5c] to-[#4364F7] rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                  <BookOpen className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-gray-900 mb-3">{item.title}</h3>
                <p className="text-black/80">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-br from-[#1a1f5c] to-[#0f1b4c] text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="mb-6">Ready for Stress-Free Bookkeeping?</h2>
          <p className="mb-8 text-gray-300">
            Let us handle your bookkeeping so you can focus on growing your business.
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
