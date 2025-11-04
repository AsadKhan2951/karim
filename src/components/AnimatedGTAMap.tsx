import { motion } from 'motion/react';
import { MapPin } from 'lucide-react';
import { useState } from 'react';

interface Location {
  name: string;
  x: number; // percentage position on map
  y: number; // percentage position on map
  featured?: boolean; // Show by default on mobile
}

export default function AnimatedGTAMap() {
  const [hoveredLocation, setHoveredLocation] = useState<string | null>(null);

  // GTA locations with approximate positions on the map
  const locations: Location[] = [
    { name: 'Toronto', x: 52, y: 58, featured: true },
    { name: 'Mississauga', x: 38, y: 62, featured: true },
    { name: 'Brampton', x: 35, y: 45, featured: true },
    { name: 'Markham', x: 68, y: 48, featured: true },
    { name: 'Vaughan', x: 45, y: 42, featured: true },
    { name: 'Richmond Hill', x: 52, y: 38, featured: false },
    { name: 'Oakville', x: 28, y: 70, featured: false },
    { name: 'Burlington', x: 18, y: 72, featured: false },
    { name: 'Milton', x: 20, y: 55, featured: false },
    { name: 'Ajax', x: 75, y: 65, featured: false },
    { name: 'Pickering', x: 72, y: 60, featured: false },
    { name: 'Whitby', x: 78, y: 68, featured: false },
    { name: 'Oshawa', x: 85, y: 70, featured: false },
    { name: 'Newmarket', x: 55, y: 28, featured: false },
    { name: 'Aurora', x: 50, y: 32, featured: false },
    { name: 'Stouffville', x: 65, y: 38, featured: false },
  ];

  return (
    <div className="relative w-full h-[400px] sm:h-[500px] lg:h-[600px] bg-gradient-to-br from-[#e8eaff] to-[#f0f2ff] rounded-2xl md:rounded-3xl overflow-hidden shadow-2xl">
      {/* Simplified GTA Map Background */}
      <svg
        className="absolute inset-0 w-full h-full"
        viewBox="0 0 800 600"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Water bodies (Lake Ontario) */}
        <path
          d="M 0 400 Q 200 380 400 390 T 800 400 L 800 600 L 0 600 Z"
          fill="#B3D9FF"
          opacity="0.3"
        />
        
        {/* Major highways - simplified */}
        <g stroke="#1a1f5c" strokeWidth="2" opacity="0.15" strokeDasharray="8,4">
          {/* Highway 401 */}
          <path d="M 50 280 Q 400 260 750 280" />
          {/* Highway 404/DVP */}
          <path d="M 420 100 L 420 400" />
          {/* Highway 427 */}
          <path d="M 280 150 L 280 450" />
        </g>

        {/* Grid pattern overlay */}
        <defs>
          <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
            <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#1a1f5c" strokeWidth="0.5" opacity="0.1" />
          </pattern>
        </defs>
        <rect width="800" height="600" fill="url(#grid)" />

        {/* Road connections */}
        <g opacity="0.2">
          {locations.map((loc, index) => {
            if (index === 0) return null; // Skip first location
            const prevLoc = locations[index - 1];
            return (
              <line
                key={`line-${index}`}
                x1={prevLoc.x * 8}
                y1={prevLoc.y * 6}
                x2={loc.x * 8}
                y2={loc.y * 6}
                stroke="#1a1f5c"
                strokeWidth="1.5"
                strokeDasharray="4,4"
              />
            );
          })}
        </g>
      </svg>

      {/* Location Pins */}
      {locations.map((location, index) => {
        const isHovered = hoveredLocation === location.name;
        const showLabel = isHovered;
        
        return (
          <motion.div
            key={location.name}
            className="absolute z-10"
            style={{
              left: `${location.x}%`,
              top: `${location.y}%`,
              transform: 'translate(-50%, -100%)',
            }}
            initial={{ scale: 0, opacity: 0, y: -20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            transition={{
              type: "spring",
              stiffness: 300,
              damping: 20,
              delay: index * 0.05,
            }}
            onMouseEnter={() => setHoveredLocation(location.name)}
            onMouseLeave={() => setHoveredLocation(null)}
          >
            {/* Pin */}
            <div className="relative cursor-pointer">
              {/* Main pin */}
              <motion.div
                className="flex flex-col items-center"
                whileHover={{ scale: 1.2 }}
                transition={{ type: "spring", stiffness: 400 }}
              >
                <div className={`${
                  location.featured 
                    ? 'w-8 h-8 sm:w-10 sm:h-10' 
                    : 'w-6 h-6 sm:w-8 sm:h-8'
                } bg-gradient-to-br from-[#1a1f5c] to-[#4364F7] rounded-full flex items-center justify-center shadow-xl border-2 sm:border-4 border-white transition-all duration-300 ${
                  isHovered ? 'ring-4 ring-[#4364F7]/30' : ''
                }`}>
                  <MapPin className={`${
                    location.featured 
                      ? 'w-4 h-4 sm:w-5 sm:h-5' 
                      : 'w-3 h-3 sm:w-4 sm:h-4'
                  } text-white fill-white`} />
                </div>
                
                {/* Location label - Desktop: show on hover only */}
                <motion.div
                  initial={{ opacity: 0, y: -5, scale: 0.8 }}
                  animate={{ 
                    opacity: showLabel ? 1 : 0,
                    y: showLabel ? 0 : -5,
                    scale: showLabel ? 1 : 0.8,
                  }}
                  transition={{ duration: 0.2 }}
                  className={`${
                    showLabel ? 'block' : 'hidden'
                  } mt-2 px-2.5 sm:px-3 py-1 sm:py-1.5 bg-white/95 backdrop-blur-sm rounded-lg shadow-lg border border-gray-200 whitespace-nowrap pointer-events-none`}
                >
                  <span className="text-[10px] sm:text-xs font-medium text-[#1a1f5c]">
                    {location.name}
                  </span>
                </motion.div>
              </motion.div>
            </div>
          </motion.div>
        );
      })}

      {/* Legend */}
      <motion.div
        className="absolute top-4 left-4 sm:top-6 sm:left-6 bg-white/95 backdrop-blur-sm rounded-xl sm:rounded-2xl p-4 sm:p-6 shadow-xl border border-gray-200"
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 1.5, duration: 0.5 }}
      >
        <div className="flex items-center gap-3 sm:gap-4">
          <div className="w-10 h-10 sm:w-14 sm:h-14 bg-gradient-to-br from-[#1a1f5c] to-[#4364F7] rounded-lg sm:rounded-xl flex items-center justify-center">
            <MapPin className="w-5 h-5 sm:w-7 sm:h-7 text-white" />
          </div>
          <div>
            <div className="text-lg sm:text-2xl text-[#1a1f5c] mb-0.5 sm:mb-1">
              16+ Cities
            </div>
            <p className="text-xs sm:text-sm text-black/70">Serving the GTA</p>
          </div>
        </div>
      </motion.div>
      
      {/* Hover instruction - Desktop only */}
      <motion.div
        className="hidden lg:block absolute top-6 right-6 bg-white/90 backdrop-blur-sm rounded-xl px-4 py-2 shadow-lg border border-gray-200"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 2, duration: 0.5 }}
      >
        <p className="text-xs text-black/60">Hover over pins to see city names</p>
      </motion.div>

      {/* Decorative elements */}
      <div className="absolute top-6 right-6 w-24 h-24 bg-gradient-to-br from-[#4364F7] to-[#1a1f5c] rounded-full blur-3xl opacity-20" />
      <div className="absolute bottom-32 right-20 w-32 h-32 bg-gradient-to-br from-purple-500 to-blue-500 rounded-full blur-3xl opacity-15" />
    </div>
  );
}
