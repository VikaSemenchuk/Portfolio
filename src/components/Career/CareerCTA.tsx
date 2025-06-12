import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { Mail, ArrowRight } from 'lucide-react';

const CareerCTA = () => {
  const { t } = useTranslation(['career']);
  const ctaData = t('career:cta', { returnObjects: true }) as any;

  return (
    <motion.section 
      className="section py-16"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <div className="container">
        <div className="max-w-2xl mx-auto text-center">
          
          <div className="bg-footer p-8 rounded-2xl shadow-soft border border-border">
            
            {/* Title */}
            <h3 className="text-2xl font-bold text-text mb-4">
              {ctaData.title}
            </h3>
            
            {/* Description */}
            <p className="text-lg text-text-secondary mb-6 leading-relaxed">
              {ctaData.description}
            </p>
            
            {/* Contact Button */}
            <motion.a
              href={`mailto:${ctaData.email}`}
              className="inline-flex items-center gap-3 px-8 py-4 bg-accent text-background rounded-xl font-semibold text-lg hover:bg-accent-hover transition-all duration-300 shadow-lg hover:shadow-xl"
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              <Mail className="w-5 h-5" />
              {ctaData.buttonText}
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </motion.a>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default CareerCTA;