import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';

const CareerSkills = () => {
  const { t } = useTranslation(['career']);
  const skillsData = t('career:skills', { returnObjects: true }) as any;

  return (
    <motion.section 
      className="section py-16 bg-gradient-to-br from-surface/50 to-footer/50"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <div className="container">
        <div className="max-w-4xl mx-auto">
          
          <div className="bg-surface p-8 rounded-2xl shadow-soft border border-border">
            
            {/* Title */}
            <h2 className="text-3xl font-bold text-center text-text mb-8">
              {skillsData.title}
            </h2>

            {/* Skills Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              
              {/* Frontend */}
              <motion.div
                className="text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                viewport={{ once: true }}
              >
                <h3 className="text-xl font-semibold text-text mb-4">
                  {skillsData.frontend.title}
                </h3>
                <div className="flex flex-wrap justify-center gap-2">
                  {skillsData.frontend.items.map((skill: string, index: number) => (
                    <span
                      key={index}
                      className="px-3 py-2 bg-accent text-background rounded-full text-sm font-medium hover:bg-accent-hover transition-colors"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>

              {/* Backend */}
              <motion.div
                className="text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                viewport={{ once: true }}
              >
                <h3 className="text-xl font-semibold text-text mb-4">
                  {skillsData.backend.title}
                </h3>
                <div className="flex flex-wrap justify-center gap-2">
                  {skillsData.backend.items.map((skill: string, index: number) => (
                    <span
                      key={index}
                      className="px-3 py-2 bg-accent text-background rounded-full text-sm font-medium hover:bg-accent-hover transition-colors"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>

              {/* Tools */}
              <motion.div
                className="text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                viewport={{ once: true }}
              >
                <h3 className="text-xl font-semibold text-text mb-4">
                  {skillsData.tools.title}
                </h3>
                <div className="flex flex-wrap justify-center gap-2">
                  {skillsData.tools.items.map((skill: string, index: number) => (
                    <span
                      key={index}
                      className="px-3 py-2 bg-accent text-background rounded-full text-sm font-medium hover:bg-accent-hover transition-colors"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default CareerSkills;