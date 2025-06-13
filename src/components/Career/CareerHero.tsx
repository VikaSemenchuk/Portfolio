import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';

const CareerHero = () => {
  const { t } = useTranslation(['career']);

  return (
    <>
     
      <motion.section 
        className="career-hero"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="container">
          <div className="career-hero-content">
            <motion.h1 
              className="career-hero-title"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              {t('career:title')}
            </motion.h1>
            
            <motion.p 
              className="career-hero-subtitle"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              {t('career:subtitle')}
            </motion.p>
          </div>
        </div>
      </motion.section>

     
      <motion.section 
        className="career-stats"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6, duration: 0.6 }}
      >
        <div className="container">
          <div className="stats-grid">
            <motion.div 
              className="stat-item"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.7 }}
            >
              <span className="stat-number">2+</span>
              <span className="stat-label">Jahren in ІТ</span>
            </motion.div>
            <motion.div 
              className="stat-item"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.8 }}
            >
              <span className="stat-number">3+</span>
              <span className="stat-label">Projecten</span>
            </motion.div>
            <motion.div 
              className="stat-item"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.9 }}
            >
              <span className="stat-number">8+</span>
              <span className="stat-label">Technologien</span>
            </motion.div>
            <motion.div 
              className="stat-item"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1.0 }}
            >
              <span className="stat-number">100%</span>
              <span className="stat-label">Motivation</span>
            </motion.div>
          </div>
        </div>
      </motion.section>
    </>
  );
};

export default CareerHero;