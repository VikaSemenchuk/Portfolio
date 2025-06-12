import { motion } from 'framer-motion';

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

  const getIcon = (category: string) => {
    switch (category) {
      case 'education': return '🎓';
      case 'finance': return '🏛️';
      case 'transition': return '🏢';
      case 'it': return '💻';
      default: return '📍';
    }
  };

 
  const getPeriodClass = (category: string) => {
    return `period-badge period-badge--${category}`;
  };

  return (
    <motion.div 
      className="timeline-item"
      initial={{ opacity: 0, x: 30 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ 
        delay: index * 0.1,
        duration: 0.6,
        ease: "easeOut"
      }}
      viewport={{ once: true }}
    >
     
      <motion.div 
        className={`timeline-node ${index === 4 ? 'active' : ''}`}
        whileHover={{ scale: 1.2 }}
        transition={{ type: "spring", stiffness: 300 }}
      >
        {getIcon(item.category)}
      </motion.div>

    
      <motion.div 
        className="timeline-card"
        whileHover={{ x: 15 }}
        transition={{ type: "spring", stiffness: 300 }}
      >
        <div className="timeline-card-header">
          <div className={getPeriodClass(item.category)}>
            {item.period}
          </div>
          <h3 className="timeline-card-title">{item.title}</h3>
          <div className="timeline-card-company">
            <div className="company-icon"></div>
            {item.company}
          </div>
        </div>
        
        <div className="timeline-card-content">
          <div 
            className="timeline-card-description"
            dangerouslySetInnerHTML={{ __html: item.description }}
          />
          
          {item.tasks && (
            <ul className="timeline-task-list">
              {item.tasks.map((task, taskIndex) => (
                <motion.li 
                  key={taskIndex} 
                  className="timeline-task-item"
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ 
                    delay: (index * 0.1) + (taskIndex * 0.05),
                    duration: 0.4
                  }}
                  viewport={{ once: true }}
                >
                  <span className="timeline-task-bullet"></span>
                  {task}
                </motion.li>
              ))}
            </ul>
          )}
        </div>
      </motion.div>
    </motion.div>
  );
};

export default TimelineItem;