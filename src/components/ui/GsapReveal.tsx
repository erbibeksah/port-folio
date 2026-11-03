'use client';

import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';

interface GsapRevealProps {
  children: React.ReactNode;
  delay?: number;
  duration?: number;
  yOffset?: number;
  className?: string;
}

export const GsapReveal: React.FC<GsapRevealProps> = ({
  children,
  delay = 0,
  duration = 0.75,
  yOffset = 30,
  className = '',
}) => {
  const elRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = elRef.current;
    if (!el) return;

    // Immediately trigger if already in viewport or observe intersection
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            gsap.fromTo(
              el,
              { opacity: 0, y: yOffset, scale: 0.98 },
              {
                opacity: 1,
                y: 0,
                scale: 1,
                duration,
                delay,
                ease: 'power3.out',
                clearProps: 'transform',
              }
            );
            observer.unobserve(el);
          }
        });
      },
      { threshold: 0.05, rootMargin: '0px 0px -40px 0px' }
    );

    observer.observe(el);

    return () => observer.disconnect();
  }, [delay, duration, yOffset]);

  return (
    <div ref={elRef} className={`transition-opacity duration-300 ${className}`}>
      {children}
    </div>
  );
};
