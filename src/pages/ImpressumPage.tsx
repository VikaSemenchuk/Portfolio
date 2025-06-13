import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import { FiMail, FiMapPin, FiUser, FiPhone } from "react-icons/fi";

import { 
  defaultViewport, 
  listContainerVariant, 
  listItemVariant 
} from "@/styles/animations";

const ImpressumPage = () => {
  const { t } = useTranslation('legal');

  return (
    <motion.div
      className="container mx-auto px-4 py-12 max-w-4xl"
      variants={listContainerVariant}
      initial="hidden"
      animate="visible"
      viewport={defaultViewport}
    >
      <div className="space-y-12">
       
        <motion.div 
          className="text-center pb-8 border-b border-border"
          variants={listItemVariant}
        >
          <h1 className="text-4xl font-bold text-text mb-4">
            {t('impressum.title')}
          </h1>
          <p className="text-lg text-text-secondary max-w-2xl mx-auto">
            {t('impressum.subtitle')}
          </p>
        </motion.div>

       
        <motion.section 
          className="bg-surface rounded-2xl p-8 shadow-soft"
          variants={listItemVariant}
        >
          <h2 className="text-2xl font-semibold text-accent mb-6 flex items-center gap-3">
            <FiUser className="text-accent" />
            {t('impressum.provider.title')}
          </h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <FiUser className="text-accent mt-1" />
                <div>
                  <p className="font-medium text-text">{t('impressum.provider.name')}</p>
                  <p className="text-text-secondary text-sm">{t('impressum.provider.title_person')}</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <FiMapPin className="text-accent mt-1" />
                <div>
                  <p className="text-text">{t('impressum.provider.address.street')}</p>
                  <p className="text-text">{t('impressum.provider.address.city')}</p>
                  <p className="text-text">{t('impressum.provider.address.country')}</p>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <FiMail className="text-accent" />
                <a 
                  href={`mailto:${t('impressum.provider.contact.email')}`}
                  className="text-accent hover:text-accent-hover transition-colors"
                >
                  {t('impressum.provider.contact.email')}
                </a>
              </div>
              
              <div className="flex items-center gap-3">
                <FiPhone className="text-accent" />
                <a 
                  href={`tel:${t('impressum.provider.contact.phone')}`}
                  className="text-accent hover:text-accent-hover transition-colors"
                >
                  {t('impressum.provider.contact.phone')}
                </a>
              </div>
            </div>
          </div>
        </motion.section>

    
        <motion.section 
          className="bg-surface rounded-2xl p-8 shadow-soft"
          variants={listItemVariant}
        >
          <h2 className="text-2xl font-semibold text-accent mb-6">
            {t('impressum.legal.title')}
          </h2>
          
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-medium text-text mb-2">
                {t('impressum.legal.responsibility.title')}
              </h3>
              <p className="text-text-secondary">
                {t('impressum.legal.responsibility.content')}
              </p>
            </div>

            <div>
              <h3 className="text-lg font-medium text-text mb-2">
                {t('impressum.legal.liability.title')}
              </h3>
              <p className="text-text-secondary mb-3">
                {t('impressum.legal.liability.content')}
              </p>
              <p className="text-text-secondary">
                {t('impressum.legal.liability.links')}
              </p>
            </div>

            <div>
              <h3 className="text-lg font-medium text-text mb-2">
                {t('impressum.legal.copyright.title')}
              </h3>
              <p className="text-text-secondary">
                {t('impressum.legal.copyright.content')}
              </p>
            </div>
          </div>
        </motion.section>

     
        <motion.section 
          className="bg-surface rounded-2xl p-8 shadow-soft"
          variants={listItemVariant}
        >
          <h2 className="text-2xl font-semibold text-accent mb-6">
            {t('impressum.dispute.title')}
          </h2>
          <p className="text-text-secondary mb-4">
            {t('impressum.dispute.odr_platform')}
          </p>
          <p className="text-text-secondary">
            {t('impressum.dispute.not_obligated')}
          </p>
        </motion.section>

       
        <motion.div 
          className="text-center pt-8 border-t border-border"
          variants={listItemVariant}
        >
          <p className="text-sm text-text-secondary">
            {t('impressum.footer')}
          </p>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default ImpressumPage;