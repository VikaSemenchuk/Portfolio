import { CareerHero, CareerTimeline, CareerSkills, CareerCTA } from '@/components';
import { useEffect } from 'react';

const CareerPathPage = () => {
  useEffect(() => {
   
    // window.scrollTo(0, 0);

   
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-in');
        }
      });
    }, observerOptions);

    
    const elementsToObserve = document.querySelectorAll(
      '.timeline-item, .skill-category, .stat-item'
    );
    
    elementsToObserve.forEach(el => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-background career-page">
    
      <CareerHero />
      <CareerTimeline />
      <CareerSkills />
      <CareerCTA />
    </div>
  );
};

export default CareerPathPage;