import { motion } from 'framer-motion';
import { MapPin } from 'lucide-react';

interface TimelineItemProps {
  item: {
    period: string;
    title: string;
    company: string;
    category: string;
    description: string;
    tasks?: string[];
  };
  index: number;
}

const TimelineItem = ({ item, index }: TimelineItemProps) => {
  return (
    <motion.div
      className={`relative flex flex-col md:flex-row items-start ${
        index % 2 === 0 ? 'md:flex-row-reverse' : ''
      }`}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
    >
      {/* Timeline Node */}
      <div className="absolute left-8 md:left-1/2 md:transform md:-translate-x-1/2 w-4 h-4 bg-accent rounded-full border-4 border-background shadow-lg z-10" />
      
      {/* Content Card */}
      <div className={`w-full md:w-5/12 ml-16 md:ml-0 ${
        index % 2 === 0 ? 'md:pr-12' : 'md:pl-12'
      }`}>
        <div className="bg-surface p-6 rounded-2xl shadow-soft border border-border hover:shadow-lg transition-all duration-300">
          
          {/* Period */}
          <div className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-semibold mb-4 ${
            item.category === 'education' ? 'text-accent bg-accent/10' :
            item.category === 'finance' ? 'text-blue-600 bg-blue-600/10' :
            item.category === 'transition' ? 'text-orange-600 bg-orange-600/10' :
            'text-green-600 bg-green-600/10'
          }`}>
            {item.period}
          </div>

          {/* Title */}
          <h3 className="text-xl font-bold text-text mb-2">
            {item.title}
          </h3>

          {/* Company */}
          <div className="flex items-center gap-2 text-text-secondary font-medium mb-4">
            <MapPin className="w-4 h-4" />
            {item.company}
          </div>

          {/* Description */}
          <div 
            className="text-text-secondary leading-relaxed mb-4"
            dangerouslySetInnerHTML={{ 
              __html: item.description.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>') 
            }}
          />

          {/* Tasks */}
          {item.tasks && (
            <ul className="space-y-2">
              {item.tasks.map((task, taskIndex) => (
                <li key={taskIndex} className="flex items-start gap-3 text-sm text-text-secondary">
                  <div className={`w-2 h-2 rounded-full mt-2 flex-shrink-0 ${
                    item.category === 'education' ? 'bg-accent' :
                    item.category === 'finance' ? 'bg-blue-600' :
                    item.category === 'transition' ? 'bg-orange-600' :
                    'bg-green-600'
                  }`} />
                  {task}
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default TimelineItem;