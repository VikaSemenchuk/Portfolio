import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';

const CareerHero = () => {
  const { t } = useTranslation(['career']);

  return (
    <motion.section 
      className="section pt-8 pb-16 bg-gradient-to-br from-accent/5 to-accent-hover/5"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="container">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h1 
            className="text-4xl md:text-5xl font-bold mb-6 text-text"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            {t('career:title')}
          </motion.h1>
          
          <motion.p 
            className="text-lg md:text-xl text-text-secondary max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            {t('career:subtitle')}
          </motion.p>
        </div>
      </div>
    </motion.section>
  );
};

export default CareerHero;