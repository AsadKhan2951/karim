import { Star, Quote } from 'lucide-react';

interface TestimonialCardProps {
  name: string;
  role: string;
  content: string;
  rating: number;
}

export default function TestimonialCard({ name, role, content, rating }: TestimonialCardProps) {
  return (
    <div className="group relative bg-gradient-to-br from-white to-gray-50 p-8 rounded-2xl border border-gray-200 hover:border-[#e8eaff] shadow-lg hover:shadow-2xl transition-all duration-500">
      {/* Gradient glow effect on hover */}
      <div className="absolute -inset-0.5 bg-gradient-to-r from-[#1a1f5c] via-[#4a5591] to-[#1a1f5c] rounded-2xl opacity-0 group-hover:opacity-20 blur transition-opacity duration-500 -z-10"></div>
      
      {/* Quote icon decoration */}
      <div className="absolute top-6 right-6 w-12 h-12 bg-gradient-to-br from-[#f0f1ff] to-[#e8eaff] rounded-xl flex items-center justify-center opacity-50 group-hover:opacity-100 transition-opacity">
        <Quote className="w-6 h-6 text-[#1a1f5c]" />
      </div>
      
      <div className="flex mb-5">
        {[...Array(rating)].map((_, i) => (
          <Star 
            key={i} 
            className="w-5 h-5 text-yellow-400 fill-yellow-400 group-hover:scale-110 transition-transform duration-300" 
            style={{ transitionDelay: `${i * 50}ms` }}
          />
        ))}
      </div>
      
      <p className="text-gray-700 mb-8 italic leading-relaxed relative z-10">
        "{content}"
      </p>
      
      <div className="flex items-center gap-4">
        <div className="w-12 h-12 bg-gradient-to-br from-[#1a1f5c] to-[#2a3570] rounded-full flex items-center justify-center shadow-md group-hover:scale-110 transition-transform duration-300">
          <span className="text-white font-medium">{name.charAt(0)}</span>
        </div>
        <div>
          <p className="text-gray-900 font-medium">{name}</p>
          <p className="text-gray-500 text-sm">{role}</p>
        </div>
      </div>
    </div>
  );
}
