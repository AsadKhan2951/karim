import { Link } from 'react-router-dom';
import { ArrowRight, LucideIcon } from 'lucide-react';

interface ServiceCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  link: string;
}

export default function ServiceCard({ icon: Icon, title, description, link }: ServiceCardProps) {
  return (
    <Link
      to={link}
      className="group relative bg-white rounded-2xl p-6 lg:p-8 border border-gray-200 hover:border-[#e8eaff] overflow-hidden transition-all duration-500 hover:shadow-2xl"
    >
      {/* Gradient overlay on hover */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#f0f1ff] via-white to-[#e8eaff] opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10"></div>
      
      {/* Animated gradient border effect */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#1a1f5c] via-[#4a5591] to-[#1a1f5c] opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl -z-20"></div>
      <div className="absolute inset-[2px] bg-white rounded-2xl -z-10"></div>
      
      <div className="relative z-10">
        <div className="w-14 h-14 lg:w-16 lg:h-16 bg-gradient-to-br from-[#1a1f5c] to-[#2a3570] rounded-xl lg:rounded-2xl flex items-center justify-center mb-5 lg:mb-6 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 shadow-lg">
          <Icon className="w-7 h-7 lg:w-8 lg:h-8 text-white" />
        </div>
        
        <h3 className="text-gray-900 mb-3 group-hover:text-[#1a1f5c] transition-colors text-base lg:text-lg">{title}</h3>
        <p className="text-gray-600 mb-4 lg:mb-5 text-sm lg:text-base leading-relaxed">{description}</p>
        
        <div className="flex items-center gap-2 text-[#1a1f5c] group-hover:gap-3 transition-all">
          <span className="font-medium text-sm lg:text-base">Explore Service</span>
          <ArrowRight className="w-4 h-4 lg:w-5 lg:h-5 group-hover:translate-x-2 transition-transform duration-300" />
        </div>
      </div>
    </Link>
  );
}
