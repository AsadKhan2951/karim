import { ArrowRight, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';

interface HeroProps {
  title: string;
  subtitle: string;
  ctaText?: string;
  ctaLink?: string;
  image: string;
  compact?: boolean;
}

export default function Hero({ title, subtitle, ctaText, ctaLink, image, compact = false }: HeroProps) {
  return (
    <div className="relative overflow-hidden bg-gradient-to-br from-[#0052D4] via-[#1a1f5c] to-[#4364F7] min-h-[calc(100vh-80px)] md:min-h-screen pt-20 md:pt-24">
      {/* Blurred Background Orbs */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-1/4 w-64 h-64 md:w-96 md:h-96 bg-purple-500 rounded-full blur-[120px] opacity-40 animate-pulse"></div>
        <div className="absolute bottom-0 right-1/4 w-64 h-64 md:w-96 md:h-96 bg-blue-400 rounded-full blur-[120px] opacity-40 animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/2 w-64 h-64 md:w-96 md:h-96 bg-indigo-500 rounded-full blur-[120px] opacity-30 animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>

      {/* Content Container */}
      <div className="max-w-[1440px] mx-auto px-4 md:px-6 lg:px-12 relative z-10">
        <div className={`grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center ${compact ? 'py-8 md:py-12' : 'py-12 md:py-20 lg:py-28'}`}>
          
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="text-white order-2 lg:order-1"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1.5 md:px-4 md:py-2 rounded-full bg-white/20 backdrop-blur-sm border border-white/30 mb-4 md:mb-6">
              <Sparkles className="w-3.5 h-3.5 md:w-4 md:h-4 text-white" />
              <span className="text-xs md:text-sm text-white">Professional Excellence</span>
            </div>
            
            <h1 className="text-white mb-4 md:mb-6 leading-tight">
              {title}
            </h1>
            
            <p className="text-white/90 mb-6 md:mb-8 max-w-xl leading-relaxed">
              {subtitle}
            </p>
            
            {ctaText && ctaLink && (
              <Link
                to={ctaLink}
                className="group inline-flex items-center space-x-2 bg-white text-[#1a1f5c] px-6 py-3 md:px-8 md:py-4 rounded-xl hover:shadow-2xl transition-all duration-300 hover:scale-105"
              >
                <span>{ctaText}</span>
                <ArrowRight className="w-4 h-4 md:w-5 md:h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            )}
          </motion.div>

          {/* Right - Image in Rounded Container */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: 'easeOut', delay: 0.2 }}
            className="relative w-full order-1 lg:order-2"
          >
            <div className="relative bg-gradient-to-br from-purple-600/30 to-blue-600/30 rounded-2xl md:rounded-[2.5rem] p-1.5 md:p-2 backdrop-blur-sm w-full">
              <div className="relative rounded-xl md:rounded-[2rem] overflow-hidden shadow-2xl w-full aspect-[16/9] md:aspect-[4/3]">
                <img
                  src={image}
                  alt={title}
                  className="w-full h-full object-cover"
                />
                
                {/* Overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#1a1f5c]/40 via-transparent to-transparent"></div>
              </div>

              {/* Floating Stats Card */}
              <div className="absolute -bottom-4 -left-4 md:-bottom-6 md:-left-6 bg-white rounded-xl md:rounded-2xl shadow-2xl p-4 md:p-6 hidden md:block">
                <div className="flex items-center gap-3 md:gap-4">
                  <div className="w-12 h-12 md:w-14 md:h-14 bg-gradient-to-br from-[#1a1f5c] to-[#4a5591] rounded-lg md:rounded-xl flex items-center justify-center">
                    <Sparkles className="w-6 h-6 md:w-7 md:h-7 text-white" />
                  </div>
                  <div>
                    <p className="text-xl md:text-2xl text-[#1a1f5c] mb-0.5 md:mb-1">15+</p>
                    <p className="text-xs md:text-sm text-gray-600">Years Experience</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
