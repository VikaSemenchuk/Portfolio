import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import TimelineItem from './TimelineItem';

const CareerTimeline = () => {
  const { t } = useTranslation(['career']);
  const timelineItems = t('career:timeline', { returnObjects: true }) as any[];

  return (
    <motion.section 
      className="section py-16"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <div className="container">
        <div className="max-w-4xl mx-auto">
          
          {/* Timeline */}
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-8 md:left-1/2 md:transform md:-translate-x-1/2 w-0.5 bg-accent/30 h-full" />
            
            {/* Timeline Items */}
            <div className="space-y-12">
              {timelineItems.map((item, index) => (
                <TimelineItem 
                  key={index} 
                  item={item} 
                  index={index} 
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default CareerTimeline;