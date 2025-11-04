import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ChevronDown, Menu, X, Calculator, Building2, BookOpen, FileText, Users, TrendingUp, Home as HomeIcon, User, Briefcase, Phone, Building, Landmark, ClipboardList, CircleDollarSign, BarChart3, PieChart, Target } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import logo from 'figma:asset/0b2bda0b0cd3691689a4f50e9f2a428b9a6e53e5.png';
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerHeader,
  DrawerTitle,
} from './ui/drawer';

export default function Navigation() {
  const [servicesOpen, setServicesOpen] = useState(false);
  const [businessOpen, setBusinessOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [mobileServicesDrawerOpen, setMobileServicesDrawerOpen] = useState(false);
  const [mobileBusinessDrawerOpen, setMobileBusinessDrawerOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    // Close dropdowns on route change
    setServicesOpen(false);
    setBusinessOpen(false);
    setMobileServicesDrawerOpen(false);
    setMobileBusinessDrawerOpen(false);
  }, [location]);

  const services = [
    { name: 'Full Cycle Accounting', path: '/services/full-cycle', icon: Calculator, description: 'Complete accounting from start to finish' },
    { name: 'Tax Filing', path: '/services/tax-filing', icon: FileText, description: 'Fast, accurate tax submissions' },
    { name: 'Bookkeeping', path: '/services/bookkeeping', icon: BookOpen, description: 'Clean, organized financial records' },
    { name: 'Financial Reporting', path: '/services/financial-reporting', icon: BarChart3, description: 'Financial reports to guide decisions' },
    { name: 'Fractional CFO Services', path: '/services/fractional-cfo', icon: CircleDollarSign, description: 'Part-time CFO for financial strategy' },
    { name: 'Payroll Management', path: '/services/payroll', icon: Users, description: 'Reliable employee payroll processing' },
    { name: 'Tax Planning & Advisory', path: '/services/tax-advisory', icon: TrendingUp, description: 'Smart tax-saving strategies' },
    { name: 'Budgeting & Forecasting', path: '/services/budgeting', icon: Target, description: 'Plan and predict your finances' },
  ];

  const businessServices = [
    { name: 'Incorporation', path: '/business/incorporation', icon: Building, description: 'Company registration services' },
    { name: 'Finance & Estate Planning', path: '/business/finance-estate', icon: Landmark, description: 'Wealth management solutions' },
    { name: 'Business Plans', path: '/business/plans', icon: ClipboardList, description: 'Strategic business planning' },
  ];

  const isActive = (path: string) => location.pathname === path;
  const isServicesActive = location.pathname.startsWith('/services');
  const isBusinessActive = location.pathname.startsWith('/business');

  return (
    <>
      {/* Desktop Navigation */}
      <nav className={`hidden lg:block fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled 
          ? 'bg-white/95 backdrop-blur-xl shadow-lg' 
          : 'bg-transparent'
      }`}>
        <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link to="/" className="flex items-center hover:opacity-80 transition-opacity">
              <img src={logo} alt="Karim Accounting" className={`h-20 w-auto transition-all duration-500 ${scrolled ? '' : 'brightness-0 invert'}`} />
            </Link>

            {/* Navigation Links */}
            <div className="flex items-center gap-2">
              <Link
                to="/"
                className={`px-5 py-2.5 rounded-full text-[15px] font-medium transition-all duration-300 ${
                  isActive('/') 
                    ? scrolled 
                      ? 'text-white bg-[#1a1f5c]' 
                      : 'text-white bg-white/20 backdrop-blur-sm'
                    : scrolled 
                      ? 'text-gray-700 hover:text-[#1a1f5c] hover:bg-gray-100'
                      : 'text-white hover:bg-white/10'
                }`}
              >
                Home
              </Link>

              <Link
                to="/about"
                className={`px-5 py-2.5 rounded-full text-[15px] font-medium transition-all duration-300 ${
                  isActive('/about') 
                    ? scrolled 
                      ? 'text-white bg-[#1a1f5c]' 
                      : 'text-white bg-white/20 backdrop-blur-sm'
                    : scrolled 
                      ? 'text-gray-700 hover:text-[#1a1f5c] hover:bg-gray-100'
                      : 'text-white hover:bg-white/10'
                }`}
              >
                About
              </Link>

              {/* Services Dropdown */}
              <div
                className="relative"
                onMouseEnter={() => setServicesOpen(true)}
                onMouseLeave={() => setServicesOpen(false)}
              >
                <button
                  className={`px-5 py-2.5 rounded-full text-[15px] font-medium transition-all duration-300 flex items-center gap-1.5 ${
                    isServicesActive 
                      ? scrolled 
                        ? 'text-white bg-[#1a1f5c]' 
                        : 'text-white bg-white/20 backdrop-blur-sm'
                      : scrolled 
                        ? 'text-gray-700 hover:text-[#1a1f5c] hover:bg-gray-100'
                        : 'text-white hover:bg-white/10'
                  }`}
                >
                  <span>Services</span>
                  <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${servicesOpen ? 'rotate-180' : ''}`} />
                </button>

                {/* Dropdown Menu */}
                <AnimatePresence>
                  {servicesOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      transition={{ duration: 0.2 }}
                      className="absolute top-full left-1/2 -translate-x-1/2 mt-3 w-[700px]"
                    >
                      <div className="bg-white/98 backdrop-blur-xl rounded-2xl shadow-2xl border border-gray-100 overflow-hidden p-6">
                        <div className="grid grid-cols-2 gap-3">
                          {services.map((service) => (
                            <Link
                              key={service.path}
                              to={service.path}
                              className="flex items-start gap-3 p-3 rounded-xl hover:bg-[#f0f1ff] transition-all duration-300 group"
                            >
                              <div className="w-10 h-10 bg-[#e8eaff] rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-[#1a1f5c] transition-all duration-300">
                                <service.icon className="w-5 h-5 text-[#1a1f5c] group-hover:text-white transition-colors duration-300" />
                              </div>
                              <div className="flex-1 min-w-0">
                                <h4 className="text-gray-900 group-hover:text-[#1a1f5c] transition-colors duration-300 font-medium text-sm mb-0.5">{service.name}</h4>
                                <p className="text-gray-500 text-xs leading-relaxed">{service.description}</p>
                              </div>
                            </Link>
                          ))}
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Business Dropdown */}
              <div
                className="relative"
                onMouseEnter={() => setBusinessOpen(true)}
                onMouseLeave={() => setBusinessOpen(false)}
              >
                <button
                  className={`px-5 py-2.5 rounded-full text-[15px] font-medium transition-all duration-300 flex items-center gap-1.5 ${
                    isBusinessActive 
                      ? scrolled 
                        ? 'text-white bg-[#1a1f5c]' 
                        : 'text-white bg-white/20 backdrop-blur-sm'
                      : scrolled 
                        ? 'text-gray-700 hover:text-[#1a1f5c] hover:bg-gray-100'
                        : 'text-white hover:bg-white/10'
                  }`}
                >
                  <span>Business</span>
                  <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${businessOpen ? 'rotate-180' : ''}`} />
                </button>

                {/* Dropdown Menu */}
                <AnimatePresence>
                  {businessOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      transition={{ duration: 0.2 }}
                      className="absolute top-full left-1/2 -translate-x-1/2 mt-3 w-[520px]"
                    >
                      <div className="bg-white/98 backdrop-blur-xl rounded-2xl shadow-2xl border border-gray-100 overflow-hidden p-6">
                        <div className="grid grid-cols-1 gap-3">
                          {businessServices.map((service) => (
                            <Link
                              key={service.path}
                              to={service.path}
                              className="flex items-start gap-3 p-3 rounded-xl hover:bg-[#f0f1ff] transition-all duration-300 group"
                            >
                              <div className="w-10 h-10 bg-[#e8eaff] rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-[#1a1f5c] transition-all duration-300">
                                <service.icon className="w-5 h-5 text-[#1a1f5c] group-hover:text-white transition-colors duration-300" />
                              </div>
                              <div className="flex-1 min-w-0">
                                <h4 className="text-gray-900 group-hover:text-[#1a1f5c] transition-colors duration-300 font-medium text-sm mb-0.5">{service.name}</h4>
                                <p className="text-gray-500 text-xs leading-relaxed">{service.description}</p>
                              </div>
                            </Link>
                          ))}
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

            </div>

            {/* Right Side - Phone & CTA */}
            <div className="flex items-center gap-4">
              <a
                href="tel:9056077778"
                className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-[15px] font-medium transition-all duration-300 ${
                  scrolled 
                    ? 'text-[#1a1f5c] hover:bg-gray-100' 
                    : 'text-white hover:bg-white/10'
                }`}
              >
                <Phone className="w-4 h-4" />
                <span>(905) 607-7778</span>
              </a>
              <Link
                to="/contact"
                className={`px-6 py-3 rounded-xl font-medium text-[15px] transition-all duration-300 hover:shadow-xl hover:scale-105 ${
                  scrolled 
                    ? 'bg-[#1a1f5c] text-white hover:bg-[#2a3570]' 
                    : 'bg-white text-[#1a1f5c] hover:bg-white/90 shadow-lg'
                }`}
              >
                Book a Consultation
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Navigation */}
      <div className="lg:hidden">
        {/* Top Bar */}
        <div className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled 
            ? 'bg-white/95 backdrop-blur-xl shadow-lg' 
            : 'bg-transparent'
        }`}>
          <div className="flex items-center justify-between px-6 h-16">
            {/* Logo on Left */}
            <Link to="/" className="flex items-center">
              <img src={logo} alt="Karim Accounting" className={`h-16 w-auto transition-all duration-500 ${scrolled ? '' : 'brightness-0 invert'}`} />
            </Link>

            {/* CTA Button */}
            <Link
              to="/contact"
              className={`px-4 py-2 rounded-lg font-medium text-sm transition-all duration-300 ${
                scrolled 
                  ? 'bg-[#1a1f5c] text-white' 
                  : 'bg-white text-[#1a1f5c] shadow-lg'
              }`}
            >
              Book Now
            </Link>
          </div>
        </div>

        {/* Bottom Navigation Bar */}
        <div className="fixed bottom-0 left-0 right-0 z-50 bg-white border-t border-gray-200 shadow-lg safe-area-inset-bottom">
          <div className="grid grid-cols-5 h-16">
            <Link
              to="/"
              className={`flex flex-col items-center justify-center gap-1 transition-all duration-300 ${
                isActive('/') ? 'text-[#1a1f5c] bg-[#f0f1ff]' : 'text-gray-600'
              }`}
            >
              <HomeIcon className="w-5 h-5" />
              <span className="text-xs font-medium">Home</span>
            </Link>

            <button
              onClick={() => setMobileServicesDrawerOpen(true)}
              className={`flex flex-col items-center justify-center gap-1 transition-all duration-300 ${
                isServicesActive ? 'text-[#1a1f5c] bg-[#f0f1ff]' : 'text-gray-600'
              }`}
            >
              <Briefcase className="w-5 h-5" />
              <span className="text-xs font-medium">Services</span>
            </button>

            <button
              onClick={() => setMobileBusinessDrawerOpen(true)}
              className={`flex flex-col items-center justify-center gap-1 transition-all duration-300 ${
                isBusinessActive ? 'text-[#1a1f5c] bg-[#f0f1ff]' : 'text-gray-600'
              }`}
            >
              <Building className="w-5 h-5" />
              <span className="text-xs font-medium">Business</span>
            </button>

            <Link
              to="/about"
              className={`flex flex-col items-center justify-center gap-1 transition-all duration-300 ${
                isActive('/about') ? 'text-[#1a1f5c] bg-[#f0f1ff]' : 'text-gray-600'
              }`}
            >
              <User className="w-5 h-5" />
              <span className="text-xs font-medium">About</span>
            </Link>

            <Link
              to="/contact"
              className={`flex flex-col items-center justify-center gap-1 transition-all duration-300 ${
                isActive('/contact') ? 'text-[#1a1f5c] bg-[#f0f1ff]' : 'text-gray-600'
              }`}
            >
              <Phone className="w-5 h-5" />
              <span className="text-xs font-medium">Contact</span>
            </Link>
          </div>
        </div>

        {/* Services Drawer */}
        <Drawer open={mobileServicesDrawerOpen} onOpenChange={setMobileServicesDrawerOpen}>
          <DrawerContent>
            <DrawerHeader className="pb-3">
              <DrawerTitle className="text-center text-gray-900">Our Services</DrawerTitle>
              <DrawerDescription className="sr-only">Browse our comprehensive accounting services</DrawerDescription>
            </DrawerHeader>
            <div className="px-5 pb-8 overflow-y-auto max-h-[calc(75vh-80px)]">
              <div className="space-y-2.5">
                {services.map((service) => (
                  <Link
                    key={service.path}
                    to={service.path}
                    onClick={() => setMobileServicesDrawerOpen(false)}
                    className={`flex items-start gap-4 p-4 rounded-2xl transition-all duration-300 border ${
                      location.pathname === service.path
                        ? 'bg-gradient-to-r from-[#1a1f5c] to-[#2a3570] text-white shadow-lg border-[#1a1f5c]/20'
                        : 'bg-white/60 backdrop-blur-sm hover:bg-white/80 border-gray-200/50 hover:border-[#1a1f5c]/30 hover:shadow-md'
                    }`}
                  >
                    <div className={`w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0 transition-all duration-300 ${
                      location.pathname === service.path
                        ? 'bg-white/20 shadow-inner'
                        : 'bg-gradient-to-br from-[#e8eaff] to-[#f0f1ff]'
                    }`}>
                      <service.icon className={`w-5 h-5 ${
                        location.pathname === service.path ? 'text-white' : 'text-[#1a1f5c]'
                      }`} />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h4 className={`font-semibold mb-0.5 text-sm ${
                        location.pathname === service.path ? 'text-white' : 'text-gray-900'
                      }`}>{service.name}</h4>
                      <p className={`text-xs leading-relaxed ${
                        location.pathname === service.path ? 'text-white/85' : 'text-gray-600'
                      }`}>{service.description}</p>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </DrawerContent>
        </Drawer>

        {/* Business Drawer */}
        <Drawer open={mobileBusinessDrawerOpen} onOpenChange={setMobileBusinessDrawerOpen}>
          <DrawerContent>
            <DrawerHeader className="pb-3">
              <DrawerTitle className="text-center text-gray-900">Business Solutions</DrawerTitle>
              <DrawerDescription className="sr-only">Browse our business planning and finance services</DrawerDescription>
            </DrawerHeader>
            <div className="px-5 pb-8 overflow-y-auto max-h-[calc(75vh-80px)]">
              <div className="space-y-2.5">
                {businessServices.map((service) => (
                  <Link
                    key={service.path}
                    to={service.path}
                    onClick={() => setMobileBusinessDrawerOpen(false)}
                    className={`flex items-start gap-4 p-4 rounded-2xl transition-all duration-300 border ${
                      location.pathname === service.path
                        ? 'bg-gradient-to-r from-[#1a1f5c] to-[#2a3570] text-white shadow-lg border-[#1a1f5c]/20'
                        : 'bg-white/60 backdrop-blur-sm hover:bg-white/80 border-gray-200/50 hover:border-[#1a1f5c]/30 hover:shadow-md'
                    }`}
                  >
                    <div className={`w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0 transition-all duration-300 ${
                      location.pathname === service.path
                        ? 'bg-white/20 shadow-inner'
                        : 'bg-gradient-to-br from-[#e8eaff] to-[#f0f1ff]'
                    }`}>
                      <service.icon className={`w-5 h-5 ${
                        location.pathname === service.path ? 'text-white' : 'text-[#1a1f5c]'
                      }`} />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h4 className={`font-semibold mb-0.5 text-sm ${
                        location.pathname === service.path ? 'text-white' : 'text-gray-900'
                      }`}>{service.name}</h4>
                      <p className={`text-xs leading-relaxed ${
                        location.pathname === service.path ? 'text-white/85' : 'text-gray-600'
                      }`}>{service.description}</p>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </DrawerContent>
        </Drawer>
      </div>
    </>
  );
}
