import { useState, useEffect } from "react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { motion, AnimatePresence } from "motion/react";
import {
  ChevronLeft,
  ChevronRight,
  ArrowRight,
  Phone,
} from "lucide-react";
import { Link } from "react-router-dom";
import AnimatedSection from "./AnimatedSection";

interface Slide {
  image: string;
  title: string;
  subtitle: string;
  cta: {
    text: string;
    link: string;
  };
}

const slides: Slide[] = [
  {
    image:
      "https://images.unsplash.com/photo-1663602003573-d2a029baa5fc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxUb3JvbnRvJTIwc2t5bGluZSUyMENOJTIwVG93ZXJ8ZW58MXx8fHwxNzYyMTYzMTkwfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    title: "Our Accounting Experts Waiting For You!",
    subtitle:
      "We are dedicated to providing amazing business accounting services that drive growth and financial success across the Greater Toronto Area.",
    cta: {
      text: "Contact Now",
      link: "/contact",
    },
  },
  {
    image:
      "https://images.unsplash.com/photo-1603466182843-75f713ba06b3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxUb3JvbnRvJTIwd2F0ZXJmcm9udCUyMGNpdHl8ZW58MXx8fHwxNzYyMTY5OTkzfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    title: "Certified Canadian CPAs at Your Service",
    subtitle:
      "Expert accounting and tax services for businesses across the Greater Toronto Area.",
    cta: {
      text: "View Our Services",
      link: "#services",
    },
  },
  {
    image:
      "https://images.unsplash.com/photo-1609281238306-2f6729bbb965?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxDYW5hZGElMjBmbGFnJTIwVG9yb250byUyMGNpdHlzY2FwZXxlbnwxfHx8fDE3NjIxNzYzMzJ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    title: "CRA Certified & Compliant Tax Services",
    subtitle:
      "Navigate Canadian tax regulations with confidence. Our CRA-certified professionals ensure your returns are accurate, compliant, and optimized for maximum benefits.",
    cta: {
      text: "Get Tax Assistance",
      link: "/services/tax-filing",
    },
  },
];

export default function HeroCarousel() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  // Auto-advance slides every 6 seconds
  useEffect(() => {
    if (!isAutoPlaying) return;

    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 6000);

    return () => clearInterval(timer);
  }, [isAutoPlaying]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
    setIsAutoPlaying(false);
  };

  const prevSlide = () => {
    setCurrentSlide(
      (prev) => (prev - 1 + slides.length) % slides.length,
    );
    setIsAutoPlaying(false);
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
    setIsAutoPlaying(false);
  };

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-[#0052D4] via-[#1a1f5c] to-[#4364F7] min-h-screen pt-20 pb-16 md:pb-20">
      {/* Background Image Carousel */}
      <div className="absolute inset-0">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSlide}
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.3 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
            className="absolute inset-0"
          >
            <ImageWithFallback
              src={slides[currentSlide].image}
              alt={`Toronto landscape ${currentSlide + 1}`}
              className="w-full h-full object-cover"
            />
            {/* Gradient overlay for better text readability */}
            <div className="absolute inset-0 bg-gradient-to-br from-[#0052D4]/73 via-[#1a1f5c]/73 to-[#4364F7]/73" />
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Blurred Background Orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-500 rounded-full blur-[120px] opacity-40 animate-pulse"></div>
        <div
          className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-400 rounded-full blur-[120px] opacity-40 animate-pulse"
          style={{ animationDelay: "1s" }}
        ></div>
        <div
          className="absolute top-1/2 left-1/2 w-96 h-96 bg-indigo-500 rounded-full blur-[120px] opacity-30 animate-pulse"
          style={{ animationDelay: "2s" }}
        ></div>
      </div>

      {/* Content Container */}
      <div className="max-w-[1440px] mx-auto px-6 lg:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_352px] gap-8 items-start py-16 lg:py-28">
          {/* Left Content - Text with Animation */}
          <div className="text-white order-1 lg:order-1">
            <AnimatedSection animation="slide-right">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/20 backdrop-blur-sm border border-white/30 mb-6">
                <span className="text-sm text-white">
                  Professional Excellence
                </span>
              </div>
            </AnimatedSection>

            <AnimatePresence mode="wait">
              <motion.div
                key={currentSlide}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
              >
                <h1 className="text-white mb-4 lg:mb-6 leading-tight text-3xl lg:text-6xl">
                  {slides[currentSlide].title}
                </h1>

                <p className="text-white/90 mb-6 lg:mb-8 text-base lg:text-lg max-w-xl leading-relaxed">
                  {slides[currentSlide].subtitle}
                </p>

                <div className="flex flex-wrap gap-3 lg:gap-4">
                  <Link
                    to={slides[currentSlide].cta.link}
                    className="group inline-flex items-center space-x-2 bg-white text-[#1a1f5c] px-6 lg:px-8 py-3 lg:py-4 rounded-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 active:scale-95 text-sm lg:text-base"
                  >
                    <span>{slides[currentSlide].cta.text}</span>
                    <ArrowRight className="w-4 h-4 lg:w-5 lg:h-5 group-hover:translate-x-1 transition-transform" />
                  </Link>

                  <a
                    href="tel:9056077778"
                    className="group inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm text-white border-2 border-white/50 px-6 lg:px-8 py-3 lg:py-4 rounded-xl hover:bg-white/20 transition-all duration-300 active:scale-95 text-sm lg:text-base"
                  >
                    <Phone className="w-4 h-4 lg:w-5 lg:h-5" />
                    <span className="hidden sm:inline">
                      (905) 607-7778
                    </span>
                    <span className="sm:hidden">Call Us</span>
                  </a>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Stats Section - Appears after form on mobile, below text on desktop */}
            <AnimatedSection animation="fade" delay={200} className="hidden lg:block">
              <div className="grid grid-cols-3 gap-4 lg:gap-6 mt-12 pt-12 border-t border-white/20">
                <div>
                  <div className="text-2xl lg:text-4xl mb-1 lg:mb-2">
                    15+
                  </div>
                  <div className="text-white/80 text-xs lg:text-sm">
                    Years Experience
                  </div>
                </div>
                <div>
                  <div className="text-2xl lg:text-4xl mb-1 lg:mb-2">
                    500+
                  </div>
                  <div className="text-white/80 text-xs lg:text-sm">
                    Happy Clients
                  </div>
                </div>
                <div>
                  <div className="text-2xl lg:text-4xl mb-1 lg:mb-2">
                    100%
                  </div>
                  <div className="text-white/80 text-xs lg:text-sm">
                    Success Rate
                  </div>
                </div>
              </div>
            </AnimatedSection>
          </div>

          {/* Right Content - Consultation Form - Lean & Compact */}
          <AnimatedSection
            animation="slide-left"
            className="order-2 lg:order-2"
          >
            <div className="relative w-full lg:sticky lg:top-24">
              {/* Lean Transparent Glassmorphism Form Card */}
              <div className="w-full bg-white/10 backdrop-blur-md rounded-xl shadow-2xl p-4 lg:p-5 border border-white/30">
                {/* Form Header */}
                <div className="mb-3 lg:mb-4">
                  <div className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-white/20 backdrop-blur-sm border border-white/40 mb-1.5 lg:mb-2">
                    <span className="text-[10px] lg:text-xs text-white">
                      Free Consultation
                    </span>
                  </div>
                  <h3 className="text-sm lg:text-base text-white mb-0.5 lg:mb-1">
                    Book a Consultation
                  </h3>
                  <p className="text-[10px] lg:text-xs text-white/70">
                    Get expert advice
                  </p>
                </div>

                {/* Form Fields */}
                <form
                  className="space-y-2 lg:space-y-2.5"
                  onSubmit={(e) => e.preventDefault()}
                >
                  {/* Name Field */}
                  <div>
                    <input
                      type="text"
                      id="name"
                      required
                      placeholder="Full Name *"
                      className="w-full px-3 py-2 lg:py-2.5 rounded-lg bg-white/20 backdrop-blur-sm border border-white/30 text-xs text-white placeholder-white/60 focus:outline-none focus:ring-1 focus:ring-white/50 focus:bg-white/25 focus:border-transparent transition-all"
                    />
                  </div>

                  {/* Email Field */}
                  <div>
                    <input
                      type="email"
                      id="email"
                      required
                      placeholder="Email Address *"
                      className="w-full px-3 py-2 lg:py-2.5 rounded-lg bg-white/20 backdrop-blur-sm border border-white/30 text-xs text-white placeholder-white/60 focus:outline-none focus:ring-1 focus:ring-white/50 focus:bg-white/25 focus:border-transparent transition-all"
                    />
                  </div>

                  {/* Phone Field */}
                  <div>
                    <input
                      type="tel"
                      id="phone"
                      placeholder="Phone Number"
                      className="w-full px-3 py-2 lg:py-2.5 rounded-lg bg-white/20 backdrop-blur-sm border border-white/30 text-xs text-white placeholder-white/60 focus:outline-none focus:ring-1 focus:ring-white/50 focus:bg-white/25 focus:border-transparent transition-all"
                    />
                  </div>

                  {/* Service Selection */}
                  <div>
                    <select
                      id="service"
                      className="w-full px-3 py-2 lg:py-2.5 rounded-lg bg-white/20 backdrop-blur-sm border border-white/30 text-xs text-white focus:outline-none focus:ring-1 focus:ring-white/50 focus:bg-white/25 focus:border-transparent transition-all appearance-none cursor-pointer"
                      style={{
                        backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='10' height='10' viewBox='0 0 10 10'%3E%3Cpath fill='%23ffffff' d='M5 7L1 3h8z'/%3E%3C/svg%3E")`,
                        backgroundRepeat: "no-repeat",
                        backgroundPosition:
                          "right 0.75rem center",
                      }}
                    >
                      <option
                        value=""
                        className="bg-[#1a1f5c] text-white"
                      >
                        Select a service
                      </option>
                      <option
                        value="full-cycle"
                        className="bg-[#1a1f5c] text-white"
                      >
                        Full Cycle Accounting
                      </option>
                      <option
                        value="tax-filing"
                        className="bg-[#1a1f5c] text-white"
                      >
                        Tax Filing
                      </option>
                      <option
                        value="bookkeeping"
                        className="bg-[#1a1f5c] text-white"
                      >
                        Bookkeeping
                      </option>
                      <option
                        value="cfo"
                        className="bg-[#1a1f5c] text-white"
                      >
                        Fractional CFO
                      </option>
                      <option
                        value="payroll"
                        className="bg-[#1a1f5c] text-white"
                      >
                        Payroll Management
                      </option>
                      <option
                        value="tax-advisory"
                        className="bg-[#1a1f5c] text-white"
                      >
                        Tax Advisory
                      </option>
                      <option
                        value="other"
                        className="bg-[#1a1f5c] text-white"
                      >
                        Other Services
                      </option>
                    </select>
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    className="w-full bg-white text-[#1a1f5c] py-2 lg:py-2.5 rounded-lg hover:shadow-xl transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] group flex items-center justify-center gap-1.5 text-[11px] lg:text-xs mt-2 lg:mt-3 touch-manipulation"
                  >
                    <span>Get Free Consultation</span>
                    <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                  </button>

                  {/* Trust Indicators */}
                  <div className="pt-2 lg:pt-2.5 border-t border-white/20">
                    <div className="flex items-center justify-center gap-2 text-[10px] lg:text-xs text-white/70 flex-wrap">
                      <div className="flex items-center gap-1">
                        <div className="w-1 h-1 bg-green-400 rounded-full"></div>
                        <span>No Obligation</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <div className="w-1 h-1 bg-blue-400 rounded-full"></div>
                        <span>24hr Response</span>
                      </div>
                    </div>
                  </div>
                </form>
              </div>

              {/* Decorative Elements */}
              <div
                className="absolute -top-2 -right-2 w-12 h-12 bg-gradient-to-br from-purple-400 to-blue-400 rounded-full blur-2xl opacity-30 pointer-events-none animate-pulse"
                style={{ animationDuration: "3s" }}
              ></div>
              <div
                className="absolute -bottom-2 -left-2 w-12 h-12 bg-gradient-to-br from-blue-400 to-indigo-400 rounded-full blur-2xl opacity-30 pointer-events-none animate-pulse"
                style={{ animationDuration: "4s" }}
              ></div>
            </div>
          </AnimatedSection>

          {/* Stats Section - Mobile Only (appears after form) */}
          <AnimatedSection
            animation="fade"
            delay={200}
            className="order-3 lg:hidden"
          >
            <div className="grid grid-cols-3 gap-4 mt-8 pt-8 border-t border-white/20 text-white">
              <div>
                <div className="text-2xl mb-1">
                  15+
                </div>
                <div className="text-white/80 text-xs">
                  Years Experience
                </div>
              </div>
              <div>
                <div className="text-2xl mb-1">
                  500+
                </div>
                <div className="text-white/80 text-xs">
                  Happy Clients
                </div>
              </div>
              <div>
                <div className="text-2xl mb-1">
                  100%
                </div>
                <div className="text-white/80 text-xs">
                  Success Rate
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>

      {/* Carousel Controls */}
      <div className="absolute bottom-4 md:bottom-10 left-0 right-0 z-20">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
          <div className="flex items-center justify-between lg:justify-between">
            {/* Dot Indicators - Centered on mobile, left on desktop */}
            <div className="flex gap-2 md:gap-3 mx-auto lg:mx-0">
              {slides.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`transition-all duration-300 rounded-full ${
                    currentSlide === index
                      ? "w-8 h-2.5 md:w-12 md:h-3 bg-white"
                      : "w-2.5 h-2.5 md:w-3 md:h-3 bg-white/40 hover:bg-white/60"
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>

            {/* Arrow Controls - Hidden on mobile */}
            <div className="hidden lg:flex gap-3">
              <button
                onClick={prevSlide}
                className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-sm border border-white/30 flex items-center justify-center text-white hover:bg-white/20 transition-all duration-300"
                aria-label="Previous slide"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>
              <button
                onClick={nextSlide}
                className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-sm border border-white/30 flex items-center justify-center text-white hover:bg-white/20 transition-all duration-300"
                aria-label="Next slide"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}