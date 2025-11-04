import { useEffect, useRef, useState } from 'react';
import AnimatedSection from './AnimatedSection';
import xeroLogo from 'figma:asset/ae5488fcc1f858719206d9255ef06f3fb3216134.png';
import quickBooksLogo from 'figma:asset/4a3d0c2a16455d539fe696b0969eb1fe00bac389.png';
import sageLogo from 'figma:asset/f3427d430f4cd063ff1ad66d6c4c04db09ef3095.png';
import squareLogo from 'figma:asset/9390d396093386bda27cb8b33688a1ffc8ee1cec.png';
import dextLogo from 'figma:asset/6f9fe2f3fb07fbe17abf253f7a1c027b2155300d.png';
import telpayLogo from 'figma:asset/b1e2be7bc1e359249f49d4731160824fa8f7f5ab.png';
import woltersKluwerLogo from 'figma:asset/66fab6b758639fd347125291988b140ec2db0164.png';

export default function TechnologyPartners() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const technologies = [
    { 
      name: 'Xero', 
      logo: xeroLogo,
    },
    { 
      name: 'QuickBooks', 
      logo: quickBooksLogo,
    },
    { 
      name: 'Sage', 
      logo: sageLogo,
    },
    { 
      name: 'Square', 
      logo: squareLogo,
    },
    { 
      name: 'Dext', 
      logo: dextLogo,
    },
    { 
      name: 'Telpay', 
      logo: telpayLogo,
    },
    { 
      name: 'Wolters Kluwer', 
      logo: woltersKluwerLogo,
    },
  ];

  // Auto-scroll carousel effect for mobile
  useEffect(() => {
    if (isPaused) return;
    
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % technologies.length);
    }, 3000); // Change slide every 3 seconds

    return () => clearInterval(interval);
  }, [isPaused, technologies.length]);

  return (
    <section className="py-16 lg:py-24 bg-gradient-to-br from-gray-50 via-white to-blue-50/30">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
        {/* Header */}
        <AnimatedSection animation="fade" className="text-center mb-16">
          <h2 className="text-[#1a1f5c] mb-4">
            Technology We Use
          </h2>
          <p className="text-black/70 max-w-2xl mx-auto">
            We integrate seamlessly with the industry's leading accounting and financial software platforms
          </p>
        </AnimatedSection>

        {/* Mobile Carousel - Single logo auto-slider */}
        <div className="md:hidden mb-12">
          <div className="relative overflow-hidden max-w-xs mx-auto">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
              onMouseEnter={() => setIsPaused(true)}
              onMouseLeave={() => setIsPaused(false)}
            >
              {technologies.map((tech, index) => (
                <div key={index} className="flex-shrink-0 w-full px-4">
                  <div className="bg-white rounded-2xl border border-gray-200 p-8 h-[140px] flex items-center justify-center shadow-lg mx-auto max-w-[200px]">
                    <img 
                      src={tech.logo} 
                      alt={`${tech.name} logo`}
                      className="w-full h-full object-contain opacity-90"
                    />
                  </div>
                </div>
              ))}
            </div>
            
            {/* Carousel Indicators */}
            <div className="flex justify-center gap-2 mt-6">
              {technologies.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    index === currentIndex 
                      ? 'w-8 bg-[#1a1f5c]' 
                      : 'w-2 bg-gray-300 hover:bg-gray-400'
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Desktop Grid Layout - 4 on top, 3 on bottom */}
        <div className="hidden md:block max-w-5xl mx-auto mb-12">
          {/* Top Row - 4 logos */}
          <div className="flex justify-center gap-6 lg:gap-8 mb-6 lg:mb-8 flex-wrap">
            {technologies.slice(0, 4).map((tech, index) => (
              <AnimatedSection 
                key={index}
                animation="fade"
                delay={index * 100}
              >
                <div className="group relative">
                  {/* Card Container with fixed dimensions */}
                  <div className="bg-white rounded-2xl border border-gray-200 p-6 lg:p-8 h-[120px] w-[140px] lg:h-[140px] lg:w-[160px] flex items-center justify-center transition-all duration-300 hover:shadow-xl hover:border-[#4364F7]/30 hover:-translate-y-1">
                    <img 
                      src={tech.logo} 
                      alt={`${tech.name} logo`}
                      className="w-full h-full object-contain opacity-75 group-hover:opacity-100 transition-opacity duration-300"
                    />
                  </div>
                  
                  {/* Hover Gradient Effect */}
                  <div className="absolute inset-0 bg-gradient-to-br from-[#4364F7]/0 to-[#1a1f5c]/0 group-hover:from-[#4364F7]/5 group-hover:to-[#1a1f5c]/5 rounded-2xl transition-all duration-300 pointer-events-none"></div>
                </div>
              </AnimatedSection>
            ))}
          </div>
          
          {/* Bottom Row - 3 logos (centered) */}
          <div className="flex justify-center gap-6 lg:gap-8">
            {technologies.slice(4, 7).map((tech, index) => (
              <AnimatedSection 
                key={index + 4}
                animation="fade"
                delay={(index + 4) * 100}
              >
                <div className="group relative">
                  {/* Card Container with fixed dimensions */}
                  <div className="bg-white rounded-2xl border border-gray-200 p-6 lg:p-8 h-[120px] w-[140px] lg:h-[140px] lg:w-[160px] flex items-center justify-center transition-all duration-300 hover:shadow-xl hover:border-[#4364F7]/30 hover:-translate-y-1">
                    <img 
                      src={tech.logo} 
                      alt={`${tech.name} logo`}
                      className="w-full h-full object-contain opacity-75 group-hover:opacity-100 transition-opacity duration-300"
                    />
                  </div>
                  
                  {/* Hover Gradient Effect */}
                  <div className="absolute inset-0 bg-gradient-to-br from-[#4364F7]/0 to-[#1a1f5c]/0 group-hover:from-[#4364F7]/5 group-hover:to-[#1a1f5c]/5 rounded-2xl transition-all duration-300 pointer-events-none"></div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>

        {/* Bottom Text */}
        <AnimatedSection animation="fade" className="text-center">
          <p className="text-black/60">
            And many more platforms to support your business needs
          </p>
        </AnimatedSection>
      </div>
    </section>
  );
}
