import { ReactNode } from 'react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

interface AnimatedSectionProps {
  children: ReactNode;
  animation?: 'fade' | 'slide-up' | 'slide-left' | 'slide-right' | 'scale';
  delay?: number;
  className?: string;
}

export default function AnimatedSection({ 
  children, 
  animation = 'slide-up',
  delay = 0,
  className = '' 
}: AnimatedSectionProps) {
  const { elementRef, isVisible } = useScrollAnimation();

  const animationClass = {
    'fade': 'animate-fade-in',
    'slide-up': 'animate-on-scroll',
    'slide-left': 'animate-slide-left',
    'slide-right': 'animate-slide-right',
    'scale': 'animate-scale',
  }[animation];

  return (
    <div 
      ref={elementRef}
      className={`${animationClass} ${isVisible ? 'animate-visible' : ''} ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
}
