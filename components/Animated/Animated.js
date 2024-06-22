'use client'
import { useEffect, useRef } from 'react';

const Animated = ({ children, animationClass }) => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add(animationClass);
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1 });

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, [animationClass]);

  return (
    <div ref={sectionRef} className="animate-on-scroll opacity-0">
      {children}
    </div>
  );
};

export default Animated;

