import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import AnimatedSection from '../components/AnimatedSection';
import AnimatedGTAMap from '../components/AnimatedGTAMap';
import HeroCarousel from '../components/HeroCarousel';
import TechnologyPartners from '../components/TechnologyPartners';
import { 
  Phone, MapPin, Target, TrendingUp, Search, BarChart3, 
  CheckCircle, ArrowRight, ChevronLeft, ChevronRight,
  Award, Users, Clock, Star, Quote, Calendar,
  Building2, FileText, PieChart, Shield, Calculator,
  BookOpen, CircleDollarSign, Briefcase, Check, Plus
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { useState } from 'react';

export default function Home() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const features = [
    {
      icon: Target,
      title: 'Targeted Growth',
      description: 'Strategic financial planning designed to accelerate your business expansion and market presence.',
    },
    {
      icon: TrendingUp,
      title: 'Conversion Strategy',
      description: 'Transform financial data into actionable insights that drive revenue and profitability.',
    },
    {
      icon: Search,
      title: 'Competitor Research',
      description: 'In-depth market analysis to position your business ahead of industry competitors.',
    },
    {
      icon: BarChart3,
      title: 'Marketing Strategy',
      description: 'Financial frameworks that support and optimize your marketing investments.',
    },
  ];

  const trustedCompanies = [
    { name: 'Tech Innovators', growth: '275% Growth', category: 'Technology' },
    { name: 'Health Solutions', growth: '180% Revenue', category: 'Healthcare' },
    { name: 'Retail Empire', growth: '320% Expansion', category: 'Retail' },
    { name: 'Finance Pro', growth: '195% Profit', category: 'Finance' },
    { name: 'Manufacturing Co', growth: '240% Scale', category: 'Manufacturing' },
  ];

  const services = [
    {
      image: 'https://images.unsplash.com/photo-1574884280706-7342ca3d4231?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhY2NvdW50aW5nJTIwZmluYW5jaWFsJTIwZ3JhcGglMjBpbGx1c3RyYXRpb258ZW58MXx8fHwxNzYyMTU4MzYzfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      icon: Calculator,
      title: 'Full Cycle Accounting',
      description: 'End-to-end financial management solutions tailored to your business lifecycle.',
      link: '/services/full-cycle',
    },
    {
      image: 'https://images.unsplash.com/photo-1649209979970-f01d950cc5ed?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0YXglMjBkb2N1bWVudCUyMGNhbGN1bGF0b3IlMjB3b3Jrc3BhY2V8ZW58MXx8fHwxNzYyMTU4MzYzfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      icon: FileText,
      title: 'Tax Filing',
      description: 'Swift, precise tax submissions ensuring compliance and maximizing returns.',
      link: '/services/tax-filing',
    },
    {
      icon: BookOpen,
      image: 'https://images.unsplash.com/photo-1758519292138-a41eaa67ee55?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxib29ra2VlcGluZyUyMGxlZGdlciUyMG5vdGVib29rfGVufDF8fHx8MTc2MjE1ODM2NHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      title: 'Bookkeeping',
      description: 'Meticulous financial record management for crystal-clear insights.',
      link: '/services/bookkeeping',
    },
    {
      icon: BarChart3,
      image: 'https://images.unsplash.com/photo-1748609160056-7b95f30041f0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmaW5hbmNpYWwlMjByZXBvcnQlMjBjaGFydCUyMGRhdGF8ZW58MXx8fHwxNzYyMTU4MzY0fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      title: 'Financial Reporting',
      description: 'Strategic insights through comprehensive financial analysis and reporting.',
      link: '/services/financial-reporting',
    },
    {
      icon: CircleDollarSign,
      image: 'https://images.unsplash.com/photo-1542744094-24638eff58bb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxDRk8lMjBleGVjdXRpdmUlMjBidXNpbmVzcyUyMHN0cmF0ZWd5fGVufDF8fHx8MTc2MjE1ODM2NXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      title: 'Fractional CFO Services',
      description: 'Executive-level financial strategy without full-time commitment.',
      link: '/services/fractional-cfo',
    },
    {
      icon: Users,
      image: 'https://images.unsplash.com/photo-1596248675029-bd9b0c7dc479?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwYXlyb2xsJTIwcGF5bWVudCUyMHNhbGFyeSUyMGNhbGN1bGF0aW9ufGVufDF8fHx8MTc2MjE1ODM2NXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      title: 'Payroll Management',
      description: 'Streamlined payroll processing ensuring accuracy and employee satisfaction.',
      link: '/services/payroll',
    },
    {
      icon: TrendingUp,
      image: 'https://images.unsplash.com/photo-1574884280706-7342ca3d4231?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0YXglMjBwbGFubmluZyUyMGZpbmFuY2lhbCUyMGFkdmljZXxlbnwxfHx8fDE3NjIxNTgzNjV8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      title: 'Tax Planning & Advisory',
      description: 'Proactive tax optimization strategies for sustainable wealth growth.',
      link: '/services/tax-advisory',
    },
    {
      icon: Target,
      image: 'https://images.unsplash.com/photo-1652422485224-102f6784c149?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidWRnZXQlMjBmb3JlY2FzdCUyMHBsYW5uaW5nJTIwYnVzaW5lc3N8ZW58MXx8fHwxNzYyMTU4MzY2fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      title: 'Budgeting & Forecasting',
      description: 'Data-driven financial projections to fuel informed decision-making.',
      link: '/services/budgeting',
    },
  ];

  const testimonials = [
    {
      quote: 'Karim Accounting transformed our financial operations completely. Their strategic insights and attention to detail have been instrumental in our 200% growth over the past two years.',
      name: 'Jennifer Martinez',
      role: 'CEO, TechVision Inc.',
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop',
    },
    {
      quote: 'The professionalism and expertise of Karim Accounting are unmatched. They provide proactive solutions and have become a trusted partner in our business success.',
      name: 'David Thompson',
      role: 'CFO, Global Enterprises',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop',
    },
    {
      quote: 'Working with Karim Accounting has given us the financial clarity and confidence we needed to expand our operations. Their team is responsive, knowledgeable, and genuinely invested in our success.',
      name: 'Sarah Chen',
      role: 'Founder, Innovation Labs',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop',
    },
  ];

  const blogPosts = [
    {
      image: 'https://images.unsplash.com/photo-1551135049-8a33b5883817?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMGNvbnN1bHRhdGlvbiUyMG1lZXRpbmd8ZW58MXx8fHwxNzYyMDQ4ODY2fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      date: 'November 1, 2025',
      title: 'Maximizing ROI: High Returns on Strategic Investment',
      excerpt: 'Discover proven strategies to optimize your investment portfolio and achieve exceptional returns in today\'s dynamic market.',
    },
    {
      image: 'https://images.unsplash.com/photo-1758518732175-5d608ba3abdf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBidXNpbmVzcyUyMHRlYW0lMjBtZWV0aW5nfGVufDF8fHx8MTc2MjA0ODkwMHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      date: 'October 28, 2025',
      title: 'Corporate Ethics: Building Trust in the Modern Workplace',
      excerpt: 'Learn how maintaining strong ethical standards in financial practices strengthens your organization and stakeholder relationships.',
    },
    {
      image: 'https://images.unsplash.com/photo-1759884247134-89b8fc25f726?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMHN0cmF0ZWd5JTIwcGxhbm5pbmd8ZW58MXx8fHwxNzYyMTIzMjc5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      date: 'October 25, 2025',
      title: 'Effective Business Meetings: Insights That Drive Results',
      excerpt: 'Transform your business meetings into productive sessions that generate actionable financial insights and strategic direction.',
    },
  ];

  const gtaLocations = [
    'Toronto', 'Mississauga', 'Brampton', 'Markham',
    'Vaughan', 'Richmond Hill', 'Oakville', 'Burlington',
    'Milton', 'Ajax', 'Pickering', 'Whitby',
    'Oshawa', 'Newmarket', 'Aurora', 'Stouffville'
  ];

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <div className="overflow-hidden">
      {/* 01 - Hero Section with Carousel */}
      <HeroCarousel />

      {/* 02 - Why Choose Us */}
      <section className="py-16 lg:py-24 xl:py-32 bg-white">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 xl:gap-16 items-center">
            {/* Left - Image */}
            <AnimatedSection animation="slide-right">
              <div className="relative">
                <div className="relative rounded-2xl lg:rounded-3xl overflow-hidden shadow-2xl">
                  <ImageWithFallback
                    src="https://images.unsplash.com/photo-1758518730384-be3d205838e8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMHByb2Zlc3Npb25hbCUyMGhhbmRzaGFrZSUyMGRlYWx8ZW58MXx8fHwxNzYyMTU4MzY2fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                    alt="Professional Business Partnership"
                    className="w-full h-[400px] md:h-[500px] lg:h-[550px] xl:h-[600px] object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1a1f5c]/30 to-transparent"></div>
                </div>
                
                {/* Floating Stats */}
                <div className="absolute -bottom-6 lg:-bottom-8 -left-4 lg:-left-8 bg-white rounded-xl lg:rounded-2xl shadow-2xl p-4 lg:p-6 hidden md:block">
                  <div className="flex items-center gap-3 lg:gap-4">
                    <div className="w-12 h-12 lg:w-16 lg:h-16 bg-[#1a1f5c] rounded-lg lg:rounded-xl flex items-center justify-center">
                      <CheckCircle className="w-6 h-6 lg:w-8 lg:h-8 text-white" />
                    </div>
                    <div>
                      <div className="text-2xl lg:text-3xl text-[#1a1f5c] mb-1">100%</div>
                      <p className="text-xs lg:text-sm text-black/70">Client Satisfaction</p>
                    </div>
                  </div>
                </div>
              </div>
            </AnimatedSection>

            {/* Right - Content */}
            <AnimatedSection animation="slide-left">
              <div>
                <h2 className="text-[#1a1f5c] mb-4 lg:mb-6 text-2xl sm:text-3xl lg:text-4xl">
                  15+ Years of Experience • Canadian CPA • Your Trusted Accounting Partner
                </h2>
                <p className="text-black/80 text-base lg:text-lg leading-relaxed mb-6 lg:mb-10">
                  We focus on your business needs to find solutions that fit best and drive measurable results.
                </p>

                {/* Features List */}
                <div className="space-y-4 lg:space-y-6">
                  {features.map((feature, index) => (
                    <div 
                      key={index} 
                      className="flex items-start gap-3 lg:gap-4 p-4 lg:p-5 rounded-lg lg:rounded-xl bg-[#F5F7FA] hover:bg-white hover:shadow-lg transition-all duration-300 group"
                    >
                      <div className="w-12 h-12 lg:w-14 lg:h-14 bg-[#1a1f5c] rounded-lg lg:rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-[#2a3570] transition-colors duration-300">
                        <feature.icon className="w-6 h-6 lg:w-7 lg:h-7 text-white" />
                      </div>
                      <div>
                        <h3 className="text-[#1a1f5c] mb-1 lg:mb-2 text-base lg:text-lg">
                          {feature.title}
                        </h3>
                        <p className="text-black/80 leading-relaxed text-sm lg:text-base">
                          {feature.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Technology Partners Section */}
      <TechnologyPartners />

      {/* 03 - Trusted Companies */}
      <section className="py-20 bg-[#F5F7FA]">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
          <AnimatedSection animation="fade" className="text-center mb-12">
            <h2 className="text-[#1a1f5c] mb-4">
              Trusted by the World's Fastest Growing Companies
            </h2>
            <p className="text-black/80 text-lg">
              Join 500+ companies that trust us with their financial success
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 mb-12">
            {trustedCompanies.map((company, index) => (
              <AnimatedSection 
                key={index} 
                animation="scale" 
                delay={index * 50}
              >
                <div className="bg-white rounded-xl p-6 text-center hover:shadow-xl transition-all duration-300 group">
                  <div className="w-16 h-16 bg-gray-200 rounded-full mx-auto mb-4 flex items-center justify-center group-hover:bg-[#1a1f5c] transition-colors duration-300">
                    <Building2 className="w-8 h-8 text-gray-400 group-hover:text-white transition-colors duration-300" />
                  </div>
                  <div className="text-sm text-gray-500 mb-1">{company.category}</div>
                  <div className="text-[#1a1f5c] mb-1">{company.growth}</div>
                </div>
              </AnimatedSection>
            ))}
          </div>

          <AnimatedSection animation="fade" className="text-center">
            <p className="text-gray-700 text-lg">
              Delivering excellence since 2010 • <span className="text-[#1a1f5c]">100% client retention rate</span>
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* 04 - Services */}
      <section className="py-24 lg:py-32 bg-gradient-to-br from-[#0052D4] via-[#1a1f5c] to-[#4364F7] relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-[1440px] mx-auto px-6 lg:px-12 relative z-10">
          {/* Header */}
          <AnimatedSection animation="fade" className="text-center mb-16">
            <div className="inline-block bg-white/20 backdrop-blur-sm rounded-full px-6 py-2 mb-6">
              <span className="text-white">Our Services</span>
            </div>
            <h2 className="text-white mb-4 text-4xl lg:text-5xl">
              Comprehensive Financial Solutions<br />We're Providing
            </h2>
          </AnimatedSection>

          {/* Service Cards Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {services.map((service, index) => (
              <AnimatedSection 
                key={index} 
                animation="slide-up" 
                delay={index * 100}
              >
                <Link to={service.link} className="group block h-full">
                  <div className="bg-white rounded-2xl p-8 h-full hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 flex flex-col">
                    {/* Icon */}
                    <div className="w-16 h-16 bg-white rounded-full shadow-lg flex items-center justify-center mb-6 group-hover:bg-gradient-to-br group-hover:from-[#4a5591] group-hover:to-[#2a3570] transition-all duration-300">
                      <service.icon className="w-8 h-8 text-[#1a1f5c] group-hover:text-white transition-colors duration-300" />
                    </div>

                    {/* Title */}
                    <h3 className="text-[#1a1f5c] mb-4 text-xl">
                      {service.title}
                    </h3>

                    {/* Description */}
                    <p className="text-black/80 leading-relaxed mb-6 flex-grow">
                      {service.description}
                    </p>

                    {/* CTA */}
                    <div className="flex items-center gap-2 text-[#1a1f5c] group-hover:gap-3 transition-all">
                      <span className="uppercase tracking-wide">Get In Touch</span>
                      <div className="w-6 h-6 bg-[#4a5591] rounded-full flex items-center justify-center group-hover:bg-[#2a3570] transition-colors">
                        <ArrowRight className="w-4 h-4 text-white" />
                      </div>
                    </div>
                  </div>
                </Link>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Greater Toronto Area Coverage */}
      <section className="py-24 bg-gradient-to-br from-white via-[#F5F7FA] to-white relative overflow-hidden">
        {/* Background decoration */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 left-10 w-72 h-72 bg-blue-200 rounded-full blur-3xl opacity-20"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-200 rounded-full blur-3xl opacity-20"></div>
        </div>

        <div className="max-w-[1440px] mx-auto px-6 lg:px-12 relative z-10">
          {/* Header */}
          <AnimatedSection animation="fade" className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-gray-200 mb-6">
              <MapPin className="w-4 h-4 text-[#1a1f5c]" />
              <span className="text-sm text-[#1a1f5c]">Proudly Serving the GTA</span>
            </div>

            <h2 className="text-[#1a1f5c] mb-6">
              Greater Toronto Area Coverage
            </h2>

            <p className="text-black/80 text-lg leading-relaxed max-w-3xl mx-auto">
              Delivering exceptional accounting services across Ontario's vibrant business communities. From downtown Toronto to surrounding municipalities, we're here to serve your financial needs.
            </p>
          </AnimatedSection>

          {/* Animated Map */}
          <AnimatedSection animation="scale">
            <AnimatedGTAMap />
          </AnimatedSection>

          {/* CTA Section */}
          <AnimatedSection animation="fade" className="text-center mt-16">
            <p className="text-black/80 text-lg mb-6">
              No matter where you're located in the Greater Toronto Area, our expert team is ready to help you succeed.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 bg-[#1a1f5c] text-white rounded-xl hover:bg-[#2a3570] transition-all duration-300 hover:shadow-xl hover:scale-105 group"
            >
              <span>Schedule Your Consultation</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </AnimatedSection>
        </div>
      </section>

      {/* 05 - Testimonials */}
      <section className="py-24 bg-gradient-to-br from-white to-[#F5F7FA]">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
          <AnimatedSection animation="fade" className="text-center mb-16">
            <h2 className="text-[#1a1f5c] mb-4">Testimonials from Our Clients</h2>
            <p className="text-black/80 text-lg">
              Hear what our satisfied clients have to say about our services
            </p>
          </AnimatedSection>

          <div className="max-w-4xl mx-auto">
            <div className="relative bg-white rounded-3xl shadow-xl p-12">
              {/* Quote Icon */}
              <div className="absolute top-8 left-8 w-16 h-16 bg-[#e8eaff] rounded-full flex items-center justify-center">
                <Quote className="w-8 h-8 text-[#1a1f5c]" />
              </div>

              {/* Testimonial Content */}
              <div className="relative z-10">
                <div className="mb-8 pt-8">
                  <p className="text-gray-700 text-xl leading-relaxed italic">
                    "{testimonials[currentTestimonial].quote}"
                  </p>
                </div>

                <div className="flex items-center gap-4">
                  <ImageWithFallback
                    src={testimonials[currentTestimonial].image}
                    alt={testimonials[currentTestimonial].name}
                    className="w-16 h-16 rounded-full object-cover"
                  />
                  <div>
                    <div className="text-[#1a1f5c] font-medium text-lg">
                      {testimonials[currentTestimonial].name}
                    </div>
                    <div className="text-black/70">
                      {testimonials[currentTestimonial].role}
                    </div>
                  </div>
                </div>
              </div>

              {/* Navigation */}
              <div className="flex items-center justify-between mt-8">
                <button
                  onClick={prevTestimonial}
                  className="w-12 h-12 bg-[#F5F7FA] rounded-full flex items-center justify-center hover:bg-[#1a1f5c] hover:text-white transition-colors"
                  aria-label="Previous testimonial"
                >
                  <ChevronLeft className="w-6 h-6" />
                </button>

                <div className="flex gap-2">
                  {testimonials.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentTestimonial(index)}
                      className={`h-2 rounded-full transition-all duration-300 ${
                        index === currentTestimonial 
                          ? 'bg-[#1a1f5c] w-8' 
                          : 'bg-gray-300 w-2'
                      }`}
                      aria-label={`Go to testimonial ${index + 1}`}
                    />
                  ))}
                </div>

                <button
                  onClick={nextTestimonial}
                  className="w-12 h-12 bg-[#F5F7FA] rounded-full flex items-center justify-center hover:bg-[#1a1f5c] hover:text-white transition-colors"
                  aria-label="Next testimonial"
                >
                  <ChevronRight className="w-6 h-6" />
                </button>
              </div>
            </div>
          </div>

          {/* Star Rating */}
          <div className="flex justify-center gap-2 mt-8">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-6 h-6 fill-[#1a1f5c] text-[#1a1f5c]" />
            ))}
          </div>
        </div>
      </section>

      {/* 06 - Blog Articles */}
      <section className="py-24 lg:py-32 bg-white">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
          <AnimatedSection animation="fade" className="text-center mb-16">
            <h2 className="text-[#1a1f5c] mb-4">
              Attractive Accounting Articles Updated Daily
            </h2>
            <p className="text-black/80 text-lg">
              Stay informed with our latest insights and expert advice
            </p>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <AnimatedSection 
                key={index} 
                animation="slide-up" 
                delay={index * 100}
              >
                <article className="group bg-[#F5F7FA] rounded-2xl overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
                  <div className="relative h-56 overflow-hidden">
                    <ImageWithFallback
                      src={post.image}
                      alt={post.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute top-4 left-4">
                      <div className="bg-white/90 backdrop-blur-sm px-4 py-2 rounded-lg flex items-center gap-2">
                        <Calendar className="w-4 h-4 text-[#1a1f5c]" />
                        <span className="text-sm text-gray-700">{post.date}</span>
                      </div>
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-[#1a1f5c] mb-3 text-lg leading-snug">
                      {post.title}
                    </h3>
                    <p className="text-black/80 text-sm leading-relaxed mb-4">
                      {post.excerpt}
                    </p>
                    <button className="flex items-center gap-2 text-[#1a1f5c] hover:gap-3 transition-all group">
                      <span className="text-sm">Read More</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </article>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* 07 - CTA Section */}
      <section className="py-24 bg-[#1a1f5c] text-white relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#4a5591] rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-white rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-[1440px] mx-auto px-6 lg:px-12 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <AnimatedSection animation="scale">
              <h2 className="text-white mb-6">Get a Consultation Service</h2>
              <p className="text-white/90 text-xl mb-10 leading-relaxed">
                We'll take care of your business accounting needs so you can focus on what matters most - growing your business.
              </p>
              
              <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                <Link
                  to="/contact"
                  className="px-10 py-5 bg-[#4a5591] text-white rounded-lg hover:bg-[#2a3570] transition-all duration-300 hover:shadow-2xl hover:-translate-y-0.5 inline-flex items-center gap-3"
                >
                  <span className="text-lg">Free Consultation</span>
                  <ArrowRight className="w-5 h-5" />
                </Link>
                
                <a
                  href="tel:9056077778"
                  className="flex items-center gap-3 text-white text-lg"
                >
                  <div className="w-12 h-12 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center">
                    <Phone className="w-6 h-6 text-[#4a5591]" />
                  </div>
                  <span>(905) 607-7778</span>
                </a>
              </div>

              {/* Trust Badges */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16 pt-16 border-t border-white/10">
                {[
                  { icon: Award, label: '15+ Years', sublabel: 'Experience' },
                  { icon: Users, label: '500+', sublabel: 'Happy Clients' },
                  { icon: CheckCircle, label: '100%', sublabel: 'Satisfaction' },
                  { icon: Clock, label: 'Mon-Fri', sublabel: '9AM - 5PM' },
                ].map((badge, index) => (
                  <div key={index} className="text-center">
                    <badge.icon className="w-10 h-10 text-[#4a5591] mx-auto mb-3" />
                    <div className="text-2xl mb-1">{badge.label}</div>
                    <div className="text-white/70 text-sm">{badge.sublabel}</div>
                  </div>
                ))}
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>
    </div>
  );
}
