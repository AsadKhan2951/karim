import InnerPageHero from '../../components/InnerPageHero';
import ServiceIntro from '../../components/ServiceIntro';
import { CheckCircle, Calculator, FileText, BarChart3, TrendingUp, Shield, Clock, Users, Award } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function FullCycleAccounting() {
  const features = [
    {
      icon: FileText,
      title: 'Transaction Recording',
      description: 'Accurate recording of all financial transactions from day one.',
    },
    {
      icon: Calculator,
      title: 'General Ledger Management',
      description: 'Comprehensive management of your general ledger and chart of accounts.',
    },
    {
      icon: BarChart3,
      title: 'Financial Statements',
      description: 'Monthly, quarterly, and annual financial statement preparation.',
    },
    {
      icon: TrendingUp,
      title: 'Period-End Close',
      description: 'Efficient month-end and year-end closing procedures.',
    },
  ];

  const benefits = [
    'Complete accounting cycle from journal entries to financial statements',
    'Accurate and timely financial reporting',
    'Compliance with accounting standards and regulations',
    'Better financial visibility and control',
    'Streamlined processes for efficiency',
    'Expert guidance throughout the accounting cycle',
  ];

  return (
    <div>
      <InnerPageHero
        title="Full Cycle Accounting Services"
        subtitle="Complete accounting from start to finish. We handle every step of the accounting cycle, ensuring accuracy, compliance, and financial clarity for your business."
        ctaText="Get Started"
        ctaLink="/contact"
        secondaryCtaText="(905) 607-7778"
        secondaryCtaLink="tel:9056077778"
        backgroundImage="https://images.unsplash.com/photo-1603466182843-75f713ba06b3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxUb3JvbnRvJTIwaGFyYm9yJTIwc2t5bGluZXxlbnwxfHx8fDE3NjIzNDcyNzZ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
      />

      {/* Service Introduction - New Dynamic Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ServiceIntro
            title="Complete Accounting Solutions from Start to Finish"
            description={[
              "Managing the complete accounting cycle requires expertise, attention to detail, and adherence to accounting standards. Our full cycle accounting services ensure your financial records are accurate, compliant, and ready for decision-making at any time.",
              "From recording transactions to preparing financial statements, we handle every step of your accounting cycle with precision and professionalism. Our systematic approach ensures nothing falls through the cracks.",
              "Whether you're a growing startup or an established business, our full cycle accounting services provide the foundation you need for financial success and strategic planning."
            ]}
            image="https://images.unsplash.com/photo-1613155961736-d0782a58f170?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxDYW5hZGlhbiUyMGJ1c2luZXNzJTIwYWNjb3VudGluZyUyMG9mZmljZXxlbnwxfHx8fDE3NjIxNTY4MTh8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
            imageAlt="Full Cycle Accounting Services"
            stats={[
              { icon: Users, value: '200+', label: 'Businesses Served' },
              { icon: Clock, value: '15+', label: 'Years Experience' },
              { icon: Award, value: '100%', label: 'Accuracy Rate' },
              { icon: Shield, value: 'CPA', label: 'Certified Team' }
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
              End-to-end accounting services covering every aspect of your financial cycle
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
                alt="Full Cycle Accounting"
                className="rounded-2xl shadow-xl"
              />
            </div>
            <div className="order-1 lg:order-2">
              <h2 className="text-gray-900 mb-6">Why Choose Full Cycle Accounting?</h2>
              <p className="text-black/80 mb-8">
                Experience the confidence that comes with complete, accurate financial management at every stage of your business cycle.
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
            <h2 className="text-gray-900 mb-4">Our Accounting Cycle</h2>
            <p className="text-black/80 max-w-2xl mx-auto">
              A systematic approach to managing your complete accounting cycle
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { step: '01', title: 'Recording', description: 'Journal entries and transaction recording' },
              { step: '02', title: 'Posting', description: 'Update general ledger accounts' },
              { step: '03', title: 'Adjusting', description: 'Period-end adjustments and reconciliations' },
              { step: '04', title: 'Reporting', description: 'Financial statement preparation' },
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
          <h2 className="mb-6">Ready for Complete Accounting Solutions?</h2>
          <p className="mb-8 text-gray-300">
            Let's streamline your accounting cycle and ensure financial accuracy.
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
