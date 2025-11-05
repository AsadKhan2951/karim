import { ArrowRight, Phone } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';

interface InnerPageHeroProps {
  title: string;
  subtitle: string;
  ctaText?: string;
  ctaLink?: string;
  secondaryCtaText?: string;
  secondaryCtaLink?: string;
  backgroundImage?: string;
}

export default function InnerPageHero({ 
  title, 
  subtitle, 
  ctaText = "Get Started", 
  ctaLink = "/contact",
  secondaryCtaText = "Call Us",
  secondaryCtaLink = "tel:9056077778",
  backgroundImage = "https://images.unsplash.com/photo-1602513525551-87b56bf5e9a8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxUb3JvbnRvJTIwc2t5bGluZSUyMGxhbmRzY2FwZSUyMGNpdHlzY2FwZXxlbnwxfHx8fDE3NjIzNDY3MTZ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
}: InnerPageHeroProps) {
  return (
    <div className="relative overflow-hidden min-h-[50vh] md:min-h-[60vh] pt-20 md:pt-24">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img
          src={backgroundImage}
          alt="Toronto Skyline"
          className="w-full h-full object-cover"
        />
        {/* Gradient Overlay - Navy Blue to blend with brand */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#1a1f5c]/95 via-[#1a1f5c]/85 to-[#1a1f5c]/60"></div>
        
        {/* Additional gradient overlay from bottom */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#1a1f5c]/80 via-transparent to-transparent"></div>
        
        {/* Blurred Accent Orbs */}
        <div className="absolute top-1/4 left-1/4 w-64 h-64 md:w-96 md:h-96 bg-blue-500 rounded-full blur-[120px] opacity-20 animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 md:w-96 md:h-96 bg-purple-500 rounded-full blur-[120px] opacity-20 animate-pulse" style={{ animationDelay: '1s' }}></div>
      </div>

      {/* Content */}
      <div className="max-w-[1440px] mx-auto px-4 md:px-6 lg:px-12 relative z-10 h-full flex items-center">
        <div className="py-12 md:py-16 lg:py-20 max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="text-white"
          >
            {/* Title */}
            <h1 className="text-white mb-4 md:mb-6 leading-tight">
              {title}
            </h1>
            
            {/* Subtitle */}
            <p className="text-white/90 mb-6 md:mb-8 text-lg md:text-xl leading-relaxed max-w-2xl">
              {subtitle}
            </p>
            
            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                to={ctaLink}
                className="group inline-flex items-center justify-center space-x-2 bg-white text-[#1a1f5c] px-6 py-3 md:px-8 md:py-4 rounded-xl hover:shadow-2xl transition-all duration-300 hover:scale-105"
              >
                <span>{ctaText}</span>
                <ArrowRight className="w-4 h-4 md:w-5 md:h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              
              <a
                href={secondaryCtaLink}
                className="group inline-flex items-center justify-center space-x-2 bg-white/10 backdrop-blur-sm text-white border-2 border-white/30 px-6 py-3 md:px-8 md:py-4 rounded-xl hover:bg-white/20 transition-all duration-300"
              >
                <Phone className="w-4 h-4 md:w-5 md:h-5" />
                <span>{secondaryCtaText}</span>
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
