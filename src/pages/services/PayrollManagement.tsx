import InnerPageHero from '../../components/InnerPageHero';
import ServiceIntro from '../../components/ServiceIntro';
import { CheckCircle, Users, FileCheck, Calendar, DollarSign, Shield, Clock, Award } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function PayrollManagement() {
  const features = [
    {
      icon: DollarSign,
      title: 'Payroll Processing',
      description: 'Accurate and timely payroll processing for all your employees.',
    },
    {
      icon: FileCheck,
      title: 'Tax Compliance',
      description: 'Full compliance with payroll tax requirements and regulations.',
    },
    {
      icon: Calendar,
      title: 'Benefits Administration',
      description: 'Management of employee benefits and deductions.',
    },
    {
      icon: Shield,
      title: 'Record Keeping',
      description: 'Secure maintenance of all payroll records and documentation.',
    },
  ];

  const benefits = [
    'Save time with automated payroll processing',
    'Ensure accurate employee payments every time',
    'Stay compliant with all payroll tax regulations',
    'Reduce risk of costly payroll errors',
    'Access detailed payroll reports and analytics',
    'Provide employees with online pay stub access',
  ];

  return (
    <div>
      <InnerPageHero
        title="Payroll Management Services"
        subtitle="Streamline your payroll operations with our comprehensive management services. We handle the complexities so you can focus on your business and employees."
        ctaText="Get Started"
        ctaLink="/contact"
        secondaryCtaText="(905) 607-7778"
        secondaryCtaLink="tel:9056077778"
        backgroundImage="https://images.unsplash.com/photo-1618694149123-4c95a5cd0657?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxUb3JvbnRvJTIwZmluYW5jaWFsJTIwZGlzdHJpY3R8ZW58MXx8fHwxNzYyMzQ3Mjc1fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
      />

      {/* Service Introduction - New Dynamic Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ServiceIntro
            title="Stress-Free Payroll Management Solutions"
            description={[
              "Payroll doesn't have to be complicated. Our expert team handles all aspects of payroll management, from processing payments to ensuring tax compliance, so you can focus on what matters most—your business and your team.",
              "From employee onboarding to year-end tax forms, we manage every detail of your payroll process with accuracy and efficiency. Our automated systems ensure your employees are paid correctly and on time, every time.",
              "Whether you have 5 employees or 500, our scalable payroll solutions grow with your business while maintaining the same high level of service and attention to detail."
            ]}
            image="https://images.unsplash.com/photo-1560428969-34a7bb7917f5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxUb3JvbnRvJTIwbW9kZXJuJTIwb2ZmaWNlJTIwaW50ZXJpb3J8ZW58MXx8fHwxNzYyMTU2ODIwfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
            imageAlt="Payroll Management Services"
            stats={[
              { icon: Users, value: '400+', label: 'Employees Managed' },
              { icon: Clock, value: 'On-Time', label: '100% Accuracy' },
              { icon: Award, value: '15+', label: 'Years Experience' },
              { icon: Shield, value: '100%', label: 'CRA Compliant' }
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
              Complete payroll solutions for businesses of all sizes
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
                src="https://images.unsplash.com/photo-1665072204431-b3ba11bd6d06?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMGhhbmRzaGFrZSUyMGRpdmVyc2V8ZW58MXx8fHwxNzYxODEzMjk5fDA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Payroll Management"
                className="rounded-2xl shadow-xl"
              />
            </div>
            <div className="order-1 lg:order-2">
              <h2 className="text-gray-900 mb-6">Simplify Your Payroll Process</h2>
              <p className="text-black/80 mb-8">
                Experience the peace of mind that comes with professional payroll management.
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

      {/* What's Included */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-gray-900 mb-4">What's Included</h2>
            <p className="text-black/80 max-w-2xl mx-auto">
              Comprehensive payroll services to meet all your needs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              'Employee onboarding and setup',
              'Bi-weekly or monthly payroll processing',
              'Direct deposit administration',
              'Tax withholding calculations',
              'Payroll tax filing and remittance',
              'T4 and year-end tax form preparation',
              'Vacation and sick time tracking',
              'Benefits and deduction management',
              'Custom payroll reporting',
            ].map((item, index) => (
              <div key={index} className="flex items-start space-x-3 bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300">
                <CheckCircle className="w-5 h-5 text-[#1a1f5c] flex-shrink-0 mt-0.5" />
                <span className="text-black/80">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-gray-900 mb-4">How It Works</h2>
            <p className="text-black/80 max-w-2xl mx-auto">
              A streamlined process for hassle-free payroll
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { step: '01', title: 'Setup', description: 'We configure your payroll system and employee data' },
              { step: '02', title: 'Processing', description: 'We calculate and process your payroll on schedule' },
              { step: '03', title: 'Payment', description: 'Employees receive their pay via direct deposit' },
              { step: '04', title: 'Reporting', description: 'You receive detailed reports and tax filings' },
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
          <h2 className="mb-6">Ready to Streamline Your Payroll?</h2>
          <p className="mb-8 text-gray-300">
            Let us handle your payroll so you can focus on growing your business.
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
