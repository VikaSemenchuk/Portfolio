import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import { FiShield, FiUser, FiDatabase, FiMail, FiLock, FiInfo } from "react-icons/fi";

import { 
  defaultViewport, 
  listContainerVariant, 
  listItemVariant 
} from "@/styles/animations";

const DatenschutzPage = () => {
  const { t } = useTranslation('legal');


  const sections = [
    {
      id: 'overview',
      icon: FiInfo,
      title: t('datenschutz.overview.title'),
      content: t('datenschutz.overview.content')
    },
    {
      id: 'responsible',
      icon: FiUser,
      title: t('datenschutz.responsible.title'),
      content: t('datenschutz.responsible.content')
    },
    {
      id: 'data_collection',
      icon: FiDatabase,
      title: t('datenschutz.data_collection.title'),
      content: t('datenschutz.data_collection.content')
    },
    {
      id: 'hosting',
      icon: FiLock,
      title: t('datenschutz.hosting.title'),
      content: t('datenschutz.hosting.content')
    },
    {
      id: 'contact_form',
      icon: FiMail,
      title: t('datenschutz.contact_form.title'),
      content: t('datenschutz.contact_form.content')
    },
    {
      id: 'rights',
      icon: FiShield,
      title: t('datenschutz.rights.title'),
      content: t('datenschutz.rights.content')
    }
  ];

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
          variants={listItemVariant }
        >
          <h1 className="text-4xl font-bold text-text mb-4 flex items-center justify-center gap-3">
            <FiShield className="text-accent" />
            {t('datenschutz.title')}
          </h1>
          <p className="text-lg text-text-secondary max-w-2xl mx-auto">
            {t('datenschutz.subtitle')}
          </p>
        </motion.div>

       
        <motion.div 
          className="bg-accent/10 border border-accent/20 rounded-2xl p-6"
          variants={listItemVariant }
        >
          <div className="flex items-start gap-4">
            <FiInfo className="text-accent text-xl mt-1 flex-shrink-0" />
            <div>
              <h2 className="text-lg font-medium text-text mb-2">
                {t('datenschutz.quick_info.title')}
              </h2>
              <p className="text-text-secondary">
                {t('datenschutz.quick_info.content')}
              </p>
            </div>
          </div>
        </motion.div>

       
        <div className="space-y-8">
          {sections.map((section) => (
            <motion.section
              key={section.id}
              className="bg-surface rounded-2xl p-8 shadow-soft"
              variants={listItemVariant }
            >
              <h2 className="text-2xl font-semibold text-accent mb-6 flex items-center gap-3">
                <section.icon className="text-accent" />
                {section.title}
              </h2>
              
              <div className="prose prose-lg max-w-none">
                <div 
                  className="text-text-secondary leading-relaxed whitespace-pre-line"
                  dangerouslySetInnerHTML={{ __html: section.content }}
                />
              </div>
            </motion.section>
          ))}
        </div>

       
        <motion.section
          className="bg-accent/5 border border-accent/20 rounded-2xl p-8"
          variants={listItemVariant }
        >
          <h2 className="text-2xl font-semibold text-accent mb-6 flex items-center gap-3">
            <FiMail className="text-accent" />
            {t('datenschutz.contact.title')}
          </h2>
          
          <div className="space-y-4">
            <p className="text-text-secondary">
              {t('datenschutz.contact.content')}
            </p>
            
            <div className="flex items-center gap-3">
              <FiMail className="text-accent" />
              <a 
                href="mailto:viktoriia.semenchuk.dev@gmail.com"
                className="text-accent hover:text-accent-hover transition-colors font-medium"
              >
                viktoriia.semenchuk.dev@gmail.com
              </a>
            </div>
          </div>
        </motion.section>

      
        <motion.div 
          className="text-center pt-8 border-t border-border"
          variants={listItemVariant }
        >
          <p className="text-sm text-text-secondary">
            {t('datenschutz.last_updated')}
          </p>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default DatenschutzPage;