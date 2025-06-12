import { CareerHero, CareerTimeline, CareerSkills, CareerCTA } from '@/components';

const CareerPathPage = () => {
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