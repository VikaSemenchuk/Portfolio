import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { useEffect } from 'react';

const CareerTimeline = () => {
  const { t } = useTranslation(['career']);
  const timelineItems = t('career:timeline', { returnObjects: true }) as any[];

 
  const getIcon = (category: string) => {
    switch (category) {
      case 'education': return '🎓';
      case 'finance': return '🏛️';
      case 'transition': return '🏢';
      case 'it': return '💻';
      default: return '📍';
    }
  };

  useEffect(() => {
  
    const animateNumbers = () => {
      const numbers = document.querySelectorAll('.stat-number');
      numbers.forEach(number => {
        const finalNumber = number.textContent || '';
        const isPercentage = finalNumber.includes('%');
        const isPlus = finalNumber.includes('+');
        const numValue = parseInt(finalNumber);
        
        if (isNaN(numValue)) return;
        
        let current = 0;
        const increment = numValue / 50;
        const timer = setInterval(() => {
          current += increment;
          if (current >= numValue) {
            current = numValue;
            clearInterval(timer);
          }
          number.textContent = Math.floor(current) + (isPercentage ? '%' : '') + (isPlus ? '+' : '');
        }, 30);
      });
    };

    
    const addActiveNode = () => {
      const nodes = document.querySelectorAll('.timeline-node');
      if (nodes.length > 0) {
        nodes[nodes.length - 1].classList.add('active');
      }
    };

    const timer = setTimeout(() => {
      animateNumbers();
      addActiveNode();
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <motion.section 
      className="career-timeline"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <div className="container">
        {/* <motion.h2 
          className="section-title"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          {t('career:timeline.professionalPath')}
        </motion.h2> */}
        
        <div className="timeline-wrapper">
          <div className="timeline-line"></div>
          
          {timelineItems.map((item, index) => (
            <div key={index} className="timeline-item">
              <div className={`timeline-node ${index === timelineItems.length - 1 ? 'active' : ''}`}>
                {getIcon(item.category)}
              </div>
              <div className="timeline-card">
                <div className="timeline-card-header">
                  <div className="period-badge">{item.period}</div>
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
                      {item.tasks.map((task: string, taskIndex: number) => (
                        <li key={taskIndex} className="timeline-task-item">
                          <span className="timeline-task-bullet"></span>
                          {task}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default CareerTimeline;