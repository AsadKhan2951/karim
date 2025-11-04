import { ImageWithFallback } from '../../components/figma/ImageWithFallback';
import AnimatedSection from '../../components/AnimatedSection';
import ServiceIntro from '../../components/ServiceIntro';
import { CheckCircle, FileText, Calculator, TrendingUp, Shield, Phone, Mail, ArrowRight, Download, ChevronRight, Clock, Users, Award, Target, Send, Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useState } from 'react';

export default function PersonalAccounting() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  
  const [showMobileServices, setShowMobileServices] = useState(false);

  // All services for sidebar navigation
  const allServices = [
    { name: 'Personal Accounting', path: '/services/personal-accounting', active: true },
    { name: 'Corporate Accounting', path: '/services/corporate-accounting', active: false },
    { name: 'Bookkeeping Services', path: '/services/bookkeeping', active: false },
    { name: 'Tax Services', path: '/services/tax-services', active: false },
    { name: 'Payroll Management', path: '/services/payroll-management', active: false },
    { name: 'Consulting & Advisory', path: '/services/consulting-advisory', active: false },
  ];

  const features = [
    {
      icon: FileText,
      title: 'Personal Tax Returns',
      description: 'Comprehensive tax preparation and filing services to maximize your refund.',
    },
    {
      icon: Calculator,
      title: 'Income & Expense Tracking',
      description: 'Organized record-keeping to help you understand your financial position.',
    },
    {
      icon: TrendingUp,
      title: 'Financial Planning',
      description: 'Strategic advice to help you achieve your personal financial goals.',
    },
    {
      icon: Shield,
      title: 'Tax Optimization',
      description: 'Identify deductions and credits to minimize your tax liability.',
    },
  ];

  const benefits = [
    'Maximize your tax refund with expert guidance',
    'Stay organized with professional financial record-keeping',
    'Receive personalized advice tailored to your situation',
    'Save time and reduce stress during tax season',
    'Ensure compliance with all tax regulations',
    'Access year-round support from our team',
  ];

  const processSteps = [
    { step: '01', title: 'Consultation', description: 'We discuss your financial situation and goals' },
    { step: '02', title: 'Analysis', description: 'We review your financial documents and records' },
    { step: '03', title: 'Strategy', description: 'We develop a personalized plan for you' },
    { step: '04', title: 'Execution', description: 'We implement and manage your financial plan' },
  ];

  const whyChooseUs = [
    {
      icon: Clock,
      title: '15+ Years Experience',
      description: 'Proven track record of delivering exceptional personal accounting services',
    },
    {
      icon: Users,
      title: 'Expert Team',
      description: 'Certified accountants with deep knowledge of personal tax and finance',
    },
    {
      icon: Award,
      title: '98% Success Rate',
      description: 'Consistently helping clients maximize refunds and achieve goals',
    },
    {
      icon: Target,
      title: 'Personalized Approach',
      description: 'Tailored solutions designed specifically for your unique situation',
    },
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Handle form submission
  };

  return (
    <div className="bg-white">
      {/* Hero/Banner Section */}
      <section className="relative bg-[#1a1f5c] pt-28 md:pt-32 pb-16 md:pb-20 overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
            backgroundSize: '40px 40px'
          }}></div>
        </div>

        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12 relative z-10">
          {/* Breadcrumb */}
          <AnimatedSection animation="fade">
            <nav className="flex items-center gap-2 text-xs sm:text-sm mb-4 sm:mb-6 text-white/70">
              <Link to="/" className="hover:text-white transition-colors">Home</Link>
              <ChevronRight className="w-3 h-3 sm:w-4 sm:h-4" />
              <Link to="/#services" className="hover:text-white transition-colors">Services</Link>
              <ChevronRight className="w-3 h-3 sm:w-4 sm:h-4" />
              <span className="text-white truncate">Personal Accounting</span>
            </nav>
          </AnimatedSection>

          <AnimatedSection animation="slide-up">
            <h1 className="text-white max-w-3xl text-3xl sm:text-4xl md:text-5xl lg:text-6xl">
              Personal Accounting Services
            </h1>
          </AnimatedSection>
        </div>
      </section>

      {/* Main Content Section */}
      <section className="py-12 md:py-20 pb-24 md:pb-20">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12">
          <div className="grid lg:grid-cols-12 gap-6 md:gap-12">
            {/* Left Sidebar - Hidden on mobile by default, shown in bottom sheet */}
            <div className="hidden lg:block lg:col-span-4">
              <div className="sticky top-24 space-y-6">
                {/* Services Navigation */}
                <AnimatedSection animation="slide-right">
                  <div className="bg-[#F5F7FA] rounded-2xl p-8">
                    <h3 className="text-[#1a1f5c] mb-6">Accounting services</h3>
                    <div className="space-y-3">
                      {allServices.map((service, index) => (
                        <Link
                          key={index}
                          to={service.path}
                          className={`flex items-center justify-between px-0 py-3 border-b border-gray-300 transition-all duration-300 group ${
                            service.active
                              ? 'text-[#1a1f5c]'
                              : 'text-black/60 hover:text-[#1a1f5c]'
                          }`}
                        >
                          <span className="transition-colors">
                            {service.name}
                          </span>
                          <ArrowRight className={`w-5 h-5 transition-transform group-hover:translate-x-1 ${
                            service.active ? 'text-[#1a1f5c]' : 'text-black/40'
                          }`} />
                        </Link>
                      ))}
                    </div>
                  </div>
                </AnimatedSection>

                {/* Customer Care Contact Card */}
                <AnimatedSection animation="scale" delay={100}>
                  <div className="bg-gradient-to-br from-[#1a1f5c] to-[#2a3570] rounded-2xl p-8 text-white">
                    <div className="flex items-start gap-4 mb-2">
                      <div className="w-14 h-14 bg-[#D4A574] rounded-full flex items-center justify-center flex-shrink-0">
                        <Phone className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <p className="text-white/80 text-sm mb-1">Customer care?</p>
                        <a href="tel:9056077778" className="text-white text-xl hover:text-white/90 transition-colors">
                          (905) 607-7778
                        </a>
                      </div>
                    </div>
                  </div>
                </AnimatedSection>

                {/* Get a Free Consultation Form */}
                <AnimatedSection animation="scale" delay={200}>
                  <div className="bg-[#F5F7FA] rounded-2xl p-8">
                    <h3 className="text-[#1a1f5c] mb-6">Get a free consultation?</h3>
                    <form onSubmit={handleSubmit} className="space-y-4">
                      <div>
                        <input
                          type="text"
                          placeholder="Your name*"
                          value={formData.name}
                          onChange={(e) => setFormData({...formData, name: e.target.value})}
                          className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg focus:outline-none focus:border-[#1a1f5c] transition-colors text-black/80 placeholder:text-black/40"
                          required
                        />
                      </div>
                      <div>
                        <input
                          type="email"
                          placeholder="Your email*"
                          value={formData.email}
                          onChange={(e) => setFormData({...formData, email: e.target.value})}
                          className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg focus:outline-none focus:border-[#1a1f5c] transition-colors text-black/80 placeholder:text-black/40"
                          required
                        />
                      </div>
                      <div>
                        <input
                          type="tel"
                          placeholder="Your phone*"
                          value={formData.phone}
                          onChange={(e) => setFormData({...formData, phone: e.target.value})}
                          className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg focus:outline-none focus:border-[#1a1f5c] transition-colors text-black/80 placeholder:text-black/40"
                          required
                        />
                      </div>
                      <div>
                        <textarea
                          placeholder="Your message"
                          value={formData.message}
                          onChange={(e) => setFormData({...formData, message: e.target.value})}
                          rows={4}
                          className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg focus:outline-none focus:border-[#1a1f5c] transition-colors text-black/80 placeholder:text-black/40 resize-none"
                        ></textarea>
                      </div>
                      <button
                        type="submit"
                        className="w-full px-6 py-3 bg-gradient-to-r from-[#1a1f5c] to-[#2a3570] text-white rounded-lg hover:shadow-lg transition-all duration-300 flex items-center justify-center gap-2 group"
                      >
                        <span>Send Message</span>
                        <Send className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </button>
                    </form>
                  </div>
                </AnimatedSection>
              </div>
            </div>

            {/* Right Content Area */}
            <div className="lg:col-span-8 space-y-10 md:space-y-16">
              {/* Mobile Quick Actions Bar */}
              <div className="lg:hidden fixed top-20 left-0 right-0 z-40 bg-white/95 backdrop-blur-lg border-b border-gray-200 px-4 py-3 shadow-lg">
                <div className="flex items-center gap-3">
                  <button
                    onClick={() => setShowMobileServices(!showMobileServices)}
                    className="flex-1 flex items-center justify-center gap-2 px-4 py-3 bg-[#1a1f5c] text-white rounded-xl text-sm active:scale-95 transition-transform"
                  >
                    <Menu className="w-4 h-4" />
                    <span>All Services</span>
                  </button>
                  <a
                    href="tel:9056077778"
                    className="flex-1 flex items-center justify-center gap-2 px-4 py-3 bg-gradient-to-r from-[#D4A574] to-[#C89960] text-white rounded-xl text-sm active:scale-95 transition-transform"
                  >
                    <Phone className="w-4 h-4" />
                    <span>Call Now</span>
                  </a>
                </div>
              </div>

              {/* Mobile Services Overlay */}
              {showMobileServices && (
                <div className="lg:hidden fixed inset-0 z-50 bg-black/50 backdrop-blur-sm" onClick={() => setShowMobileServices(false)}>
                  <div className="absolute bottom-0 left-0 right-0 bg-white rounded-t-3xl shadow-2xl max-h-[80vh] overflow-y-auto" onClick={(e) => e.stopPropagation()}>
                    <div className="sticky top-0 bg-white border-b border-gray-200 px-6 py-4 flex items-center justify-between rounded-t-3xl">
                      <h3 className="text-[#1a1f5c]">Our Services</h3>
                      <button onClick={() => setShowMobileServices(false)} className="w-8 h-8 flex items-center justify-center bg-gray-100 rounded-full active:scale-95 transition-transform">
                        <X className="w-5 h-5 text-[#1a1f5c]" />
                      </button>
                    </div>
                    <div className="p-4 pb-8">
                      {allServices.map((service, index) => (
                        <Link
                          key={index}
                          to={service.path}
                          onClick={() => setShowMobileServices(false)}
                          className={`flex items-center justify-between px-5 py-4 rounded-xl mb-2 transition-all active:scale-95 ${
                            service.active
                              ? 'bg-gradient-to-r from-[#1a1f5c] to-[#2a3570] text-white shadow-lg'
                              : 'bg-[#F5F7FA] text-black/80'
                          }`}
                        >
                          <span>{service.name}</span>
                          <ArrowRight className="w-5 h-5" />
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              )}

              {/* Spacer for mobile quick actions */}
              <div className="lg:hidden h-16"></div>

              {/* Service Introduction - New Dynamic Section */}
              <ServiceIntro
                title="Expert Financial Management for Individuals"
                description={[
                  "Managing your personal finances shouldn't be complicated. Our team of experienced accountants provides personalized service to help you make informed financial decisions and achieve your goals.",
                  "From tax preparation to financial planning, we offer comprehensive personal accounting services designed to simplify your financial life. Whether you need help with tax returns, expense tracking, or long-term financial planning, we're here to provide expert guidance every step of the way.",
                  "Our approach is simple: we take the time to understand your unique situation, identify opportunities for savings and growth, and provide clear, actionable advice that puts you in control of your financial future."
                ]}
                image="https://images.unsplash.com/photo-1761818645907-8bed418b415b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxDYW5hZGlhbiUyMHByb2Zlc3Npb25hbCUyMHdvcmtzcGFjZXxlbnwxfHx8fDE3NjIxNTY4MTh8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                imageAlt="Personal Accounting Services"
                stats={[
                  { icon: Users, value: '500+', label: 'Happy Clients' },
                  { icon: Award, value: '15+', label: 'Years Experience' },
                  { icon: Target, value: '98%', label: 'Success Rate' },
                  { icon: Clock, value: '24/7', label: 'Support Available' }
                ]}
              />

              {/* What We Offer */}
              <AnimatedSection animation="fade">
                <div className="px-4 md:px-0">
                  <h2 className="text-[#1a1f5c] mb-3 md:mb-4 text-2xl md:text-3xl lg:text-4xl">What We Offer</h2>
                  <p className="text-black/80 text-base md:text-lg mb-6 md:mb-10">
                    Comprehensive personal accounting services designed to simplify your financial life
                  </p>

                  <div className="grid sm:grid-cols-2 gap-4 md:gap-6">
                    {features.map((feature, index) => (
                      <div 
                        key={index}
                        className="bg-[#F5F7FA] rounded-2xl p-6 md:p-8 hover:shadow-xl transition-all duration-300 group active:scale-[0.98]"
                      >
                        <div className="w-14 h-14 md:w-16 md:h-16 bg-gradient-to-br from-[#1a1f5c] to-[#4364F7] rounded-xl flex items-center justify-center mb-4 md:mb-5 group-hover:scale-110 transition-transform">
                          <feature.icon className="w-7 h-7 md:w-8 md:h-8 text-white" />
                        </div>
                        <h3 className="text-[#1a1f5c] mb-2 md:mb-3 text-lg md:text-xl">{feature.title}</h3>
                        <p className="text-black/80 leading-relaxed text-sm md:text-base">{feature.description}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </AnimatedSection>

              {/* Why Choose Us */}
              <AnimatedSection animation="slide-up">
                <div className="bg-gradient-to-br from-[#F5F7FA] to-white rounded-2xl md:rounded-3xl p-6 md:p-10 lg:p-12 border border-gray-200 mx-4 md:mx-0">
                  <h2 className="text-[#1a1f5c] mb-3 md:mb-4 text-2xl md:text-3xl lg:text-4xl">Why Choose Our Personal Accounting Services</h2>
                  <p className="text-black/80 text-base md:text-lg mb-6 md:mb-10">
                    We deliver exceptional results backed by expertise, dedication, and a commitment to your success
                  </p>

                  <div className="grid sm:grid-cols-2 gap-6 md:gap-8">
                    {whyChooseUs.map((item, index) => (
                      <div key={index} className="flex items-start gap-3 md:gap-4">
                        <div className="w-12 h-12 md:w-14 md:h-14 bg-[#1a1f5c] rounded-xl flex items-center justify-center flex-shrink-0">
                          <item.icon className="w-6 h-6 md:w-7 md:h-7 text-white" />
                        </div>
                        <div>
                          <h4 className="text-[#1a1f5c] mb-1 md:mb-2 text-base md:text-lg">{item.title}</h4>
                          <p className="text-black/80 leading-relaxed text-sm md:text-base">{item.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </AnimatedSection>

              {/* Key Benefits */}
              <AnimatedSection animation="fade">
                <div className="px-4 md:px-0">
                  <h2 className="text-[#1a1f5c] mb-3 md:mb-4 text-2xl md:text-3xl lg:text-4xl">Key Benefits</h2>
                  <p className="text-black/80 text-base md:text-lg mb-6 md:mb-8">
                    Here's what you gain when you partner with us
                  </p>

                  <div className="grid sm:grid-cols-2 gap-4 md:gap-5">
                    {benefits.map((benefit, index) => (
                      <div key={index} className="flex items-start gap-3 md:gap-4 bg-white rounded-xl p-4 md:p-5 border border-gray-200 hover:shadow-lg transition-all active:scale-[0.98]">
                        <CheckCircle className="w-5 h-5 md:w-6 md:h-6 text-[#1a1f5c] flex-shrink-0 mt-0.5" />
                        <span className="text-black/80 leading-relaxed text-sm md:text-base">{benefit}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </AnimatedSection>

              {/* Our Process */}
              <AnimatedSection animation="slide-up">
                <div className="px-4 md:px-0">
                  <h2 className="text-[#1a1f5c] mb-3 md:mb-4 text-2xl md:text-3xl lg:text-4xl">Our Process</h2>
                  <p className="text-black/80 text-base md:text-lg mb-8 md:mb-12">
                    A simple, straightforward approach to managing your personal finances
                  </p>

                  <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
                    {processSteps.map((item, index) => (
                      <div key={index} className="relative group">
                        <div className="bg-white border-2 border-gray-200 rounded-2xl p-4 md:p-6 hover:border-[#1a1f5c] transition-all hover:shadow-xl active:scale-[0.98]">
                          <div className="w-12 h-12 md:w-16 md:h-16 bg-gradient-to-br from-[#1a1f5c] to-[#4364F7] text-white rounded-xl flex items-center justify-center mb-3 md:mb-5 shadow-lg group-hover:scale-110 transition-transform">
                            <span className="text-lg md:text-xl">{item.step}</span>
                          </div>
                          <h4 className="text-[#1a1f5c] mb-1 md:mb-2 text-sm md:text-base">{item.title}</h4>
                          <p className="text-black/70 text-xs md:text-sm leading-relaxed">{item.description}</p>
                        </div>
                        
                        {/* Arrow connector (hidden on mobile and last item) */}
                        {index < processSteps.length - 1 && (
                          <div className="hidden lg:block absolute top-10 -right-3 z-10">
                            <ChevronRight className="w-6 h-6 text-[#4364F7]" />
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              </AnimatedSection>

              {/* Image Gallery / Additional Content */}
              <AnimatedSection animation="scale">
                <div className="grid sm:grid-cols-2 gap-4 md:gap-6 px-4 md:px-0">
                  <div className="rounded-2xl overflow-hidden shadow-xl">
                    <ImageWithFallback
                      src="https://images.unsplash.com/photo-1692133226337-55e513450a32?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhY2NvdW50YW50JTIwcHJvZmVzc2lvbmFsJTIwb2ZmaWNlfGVufDF8fHx8MTc2MTgxMzI5OHww&ixlib=rb-4.1.0&q=80&w=1080"
                      alt="Professional Accounting"
                      className="w-full h-[200px] sm:h-[250px] md:h-[300px] object-cover"
                    />
                  </div>
                  <div className="rounded-2xl overflow-hidden shadow-xl">
                    <ImageWithFallback
                      src="https://images.unsplash.com/photo-1554224311-beee1ac91c7a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080"
                      alt="Financial Planning"
                      className="w-full h-[200px] sm:h-[250px] md:h-[300px] object-cover"
                    />
                  </div>
                </div>
              </AnimatedSection>

              {/* CTA Section - Desktop */}
              <AnimatedSection animation="fade">
                <div className="hidden md:block bg-gradient-to-br from-[#1a1f5c] to-[#2a3570] rounded-3xl p-10 lg:p-12 text-center relative overflow-hidden">
                  {/* Decorative elements */}
                  <div className="absolute top-0 right-0 w-64 h-64 bg-blue-400 rounded-full blur-3xl opacity-20"></div>
                  <div className="absolute bottom-0 left-0 w-64 h-64 bg-purple-400 rounded-full blur-3xl opacity-20"></div>

                  <div className="relative z-10">
                    <h2 className="text-white mb-4">Ready to Take Control of Your Finances?</h2>
                    <p className="text-white/90 text-lg mb-8 max-w-2xl mx-auto leading-relaxed">
                      Let's discuss how our personal accounting services can help you achieve your financial goals. Schedule a free consultation today.
                    </p>
                    <div className="flex flex-wrap gap-4 justify-center">
                      <Link
                        to="/contact"
                        className="inline-flex items-center gap-2 px-8 py-4 bg-white text-[#1a1f5c] rounded-xl hover:bg-gray-100 transition-all duration-300 hover:shadow-xl hover:scale-105 group"
                      >
                        <span>Schedule a Consultation</span>
                        <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                      </Link>
                      <a
                        href="tel:9056077778"
                        className="inline-flex items-center gap-2 px-8 py-4 bg-transparent border-2 border-white text-white rounded-xl hover:bg-white hover:text-[#1a1f5c] transition-all duration-300"
                      >
                        <Phone className="w-5 h-5" />
                        <span>(905) 607-7778</span>
                      </a>
                    </div>
                  </div>
                </div>
              </AnimatedSection>

              {/* Mobile Contact Form */}
              <div className="lg:hidden px-4">
                <AnimatedSection animation="scale">
                  <div className="bg-[#F5F7FA] rounded-2xl p-6 shadow-lg">
                    <h3 className="text-[#1a1f5c] mb-2 text-xl">Get a Free Consultation</h3>
                    <p className="text-black/60 text-sm mb-6">Fill out the form and we'll get back to you shortly</p>
                    <form onSubmit={handleSubmit} className="space-y-4">
                      <div>
                        <input
                          type="text"
                          placeholder="Your name*"
                          value={formData.name}
                          onChange={(e) => setFormData({...formData, name: e.target.value})}
                          className="w-full px-4 py-3 bg-white border border-gray-300 rounded-xl focus:outline-none focus:border-[#1a1f5c] transition-colors text-black/80 placeholder:text-black/40"
                          required
                        />
                      </div>
                      <div>
                        <input
                          type="email"
                          placeholder="Your email*"
                          value={formData.email}
                          onChange={(e) => setFormData({...formData, email: e.target.value})}
                          className="w-full px-4 py-3 bg-white border border-gray-300 rounded-xl focus:outline-none focus:border-[#1a1f5c] transition-colors text-black/80 placeholder:text-black/40"
                          required
                        />
                      </div>
                      <div>
                        <input
                          type="tel"
                          placeholder="Your phone*"
                          value={formData.phone}
                          onChange={(e) => setFormData({...formData, phone: e.target.value})}
                          className="w-full px-4 py-3 bg-white border border-gray-300 rounded-xl focus:outline-none focus:border-[#1a1f5c] transition-colors text-black/80 placeholder:text-black/40"
                          required
                        />
                      </div>
                      <div>
                        <textarea
                          placeholder="Your message"
                          value={formData.message}
                          onChange={(e) => setFormData({...formData, message: e.target.value})}
                          rows={3}
                          className="w-full px-4 py-3 bg-white border border-gray-300 rounded-xl focus:outline-none focus:border-[#1a1f5c] transition-colors text-black/80 placeholder:text-black/40 resize-none"
                        ></textarea>
                      </div>
                      <button
                        type="submit"
                        className="w-full px-6 py-4 bg-gradient-to-r from-[#1a1f5c] to-[#2a3570] text-white rounded-xl hover:shadow-lg transition-all duration-300 flex items-center justify-center gap-2 group active:scale-95"
                      >
                        <span>Send Message</span>
                        <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                      </button>
                    </form>
                  </div>
                </AnimatedSection>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Fixed Mobile Bottom CTA */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-lg border-t border-gray-200 px-4 py-4 shadow-2xl">
        <div className="flex gap-3">
          <Link
            to="/contact"
            className="flex-1 flex items-center justify-center gap-2 px-6 py-4 bg-gradient-to-r from-[#1a1f5c] to-[#2a3570] text-white rounded-xl shadow-lg active:scale-95 transition-transform"
          >
            <Mail className="w-5 h-5" />
            <span>Contact Us</span>
          </Link>
          <a
            href="tel:9056077778"
            className="flex-1 flex items-center justify-center gap-2 px-6 py-4 bg-gradient-to-r from-[#D4A574] to-[#C89960] text-white rounded-xl shadow-lg active:scale-95 transition-transform"
          >
            <Phone className="w-5 h-5" />
            <span>Call Now</span>
          </a>
        </div>
      </div>
    </div>
  );
}
