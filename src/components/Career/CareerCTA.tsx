import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { Mail, ArrowRight } from 'lucide-react';

const CareerCTA = () => {
  const { t } = useTranslation(['career']);
  const ctaData = t('career:cta', { returnObjects: true }) as any;

  return (
    <motion.section 
      className="career-cta"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <div className="container">
        <div className="cta-content">
          <motion.h2 
            className="cta-title"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            {ctaData.title}
          </motion.h2>
          
          <motion.p 
            className="cta-description"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            viewport={{ once: true }}
          >
            {ctaData.description}
          </motion.p>
          
          <motion.a
            href={`mailto:${ctaData.email}`}
            className="cta-button"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            viewport={{ once: true }}
            whileHover={{ y: -3 }}
            whileTap={{ scale: 0.95 }}
          >
            <Mail className="w-5 h-5" />
            {ctaData.buttonText}
            <ArrowRight className="w-5 h-5" />
          </motion.a>
        </div>
      </div>
    </motion.section>
  );
};

export default CareerCTA;