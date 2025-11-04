import { motion } from 'motion/react';
import { LucideIcon } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import AnimatedSection from './AnimatedSection';

interface ServiceIntroProps {
  title: string;
  description: string[];
  image: string;
  imageAlt: string;
  stats?: Array<{
    icon: LucideIcon;
    value: string;
    label: string;
  }>;
}

export default function ServiceIntro({ title, description, image, imageAlt, stats }: ServiceIntroProps) {
  return (
    <div className="relative">
      {/* Background Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-[#4364F7]/10 to-[#1a1f5c]/5 rounded-full blur-3xl" />
        <div className="absolute top-60 -left-40 w-96 h-96 bg-gradient-to-br from-[#D4A574]/10 to-[#C89960]/5 rounded-full blur-3xl" />
      </div>

      <div className="relative grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
        {/* Left Side - Content */}
        <AnimatedSection animation="slide-right">
          <div className="space-y-6 px-4 md:px-0">
            {/* Title with gradient underline */}
            <div>
              <h2 className="text-[#1a1f5c] mb-4 text-2xl md:text-3xl lg:text-4xl">
                {title}
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-[#1a1f5c] to-[#4364F7] rounded-full" />
            </div>

            {/* Description */}
            <div className="space-y-4">
              {description.map((paragraph, index) => (
                <motion.p
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="text-black/80 text-base md:text-lg leading-relaxed"
                >
                  {paragraph}
                </motion.p>
              ))}
            </div>

            {/* Stats Grid - Optional */}
            {stats && stats.length > 0 && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="grid grid-cols-2 gap-4 pt-6"
              >
                {stats.map((stat, index) => (
                  <div
                    key={index}
                    className="bg-gradient-to-br from-[#f0f1ff] to-white p-5 rounded-2xl border border-[#e8eaff] hover:border-[#1a1f5c]/20 transition-all duration-300 hover:shadow-lg group"
                  >
                    <div className="flex items-start gap-3">
                      <div className="w-12 h-12 bg-gradient-to-br from-[#1a1f5c] to-[#4364F7] rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                        <stat.icon className="w-6 h-6 text-white" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="text-[#1a1f5c] mb-1">{stat.value}</div>
                        <p className="text-black/60 text-sm leading-snug">{stat.label}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </motion.div>
            )}
          </div>
        </AnimatedSection>

        {/* Right Side - Image with decorative elements */}
        <AnimatedSection animation="slide-left">
          <div className="relative group">
            {/* Decorative border frame */}
            <div className="absolute -inset-4 bg-gradient-to-br from-[#1a1f5c]/20 via-[#4364F7]/10 to-[#D4A574]/20 rounded-3xl blur-2xl group-hover:blur-3xl transition-all duration-500 opacity-50" />
            
            {/* Main image container */}
            <div className="relative rounded-2xl md:rounded-3xl overflow-hidden shadow-2xl">
              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-tr from-[#1a1f5c]/10 to-transparent z-10 pointer-events-none" />
              
              {/* Image */}
              <ImageWithFallback
                src={image}
                alt={imageAlt}
                className="w-full h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px] object-cover transform group-hover:scale-105 transition-transform duration-700"
              />
              
              {/* Floating badge */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8, y: 20 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
                className="absolute bottom-6 right-6 z-20"
              >
                <div className="bg-white/95 backdrop-blur-xl rounded-2xl px-6 py-4 shadow-2xl border border-white/20">
                  <div className="flex items-center gap-3">
                    <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />
                    <div>
                      <p className="text-[#1a1f5c] text-sm">Available Now</p>
                      <p className="text-black/60 text-xs">Book Your Consultation</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Decorative geometric shapes */}
            <div className="absolute -top-6 -left-6 w-24 h-24 bg-gradient-to-br from-[#4364F7] to-[#1a1f5c] rounded-2xl opacity-20 rotate-12 blur-sm group-hover:rotate-[20deg] transition-transform duration-500" />
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-gradient-to-br from-[#D4A574] to-[#C89960] rounded-full opacity-20 blur-sm group-hover:scale-110 transition-transform duration-500" />
          </div>
        </AnimatedSection>
      </div>
    </div>
  );
}
