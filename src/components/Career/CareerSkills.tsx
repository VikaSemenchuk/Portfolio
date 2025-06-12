import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';

const CareerSkills = () => {
  const { t } = useTranslation(['career']);
  const skillsData = t('career:skills', { returnObjects: true }) as any;

  return (
    <motion.section 
      className="career-skills"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <div className="container">
        <motion.h2 
          className="skills-title"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          {skillsData.title}
        </motion.h2>
        
        <div className="skills-grid">
          {/* Frontend */}
          <motion.div
            className="skill-category"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h3 className="skill-category-title">
              {skillsData.frontend.title}
            </h3>
            <div className="skill-tags">
              {skillsData.frontend.items.map((skill: string, index: number) => (
                <motion.span
                  key={index}
                  className="skill-tag"
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.1 + index * 0.1, duration: 0.3 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -3, scale: 1.05 }}
                >
                  {skill}
                </motion.span>
              ))}
            </div>
          </motion.div>

          {/* Backend */}
          <motion.div
            className="skill-category"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h3 className="skill-category-title">
              {skillsData.backend.title}
            </h3>
            <div className="skill-tags">
              {skillsData.backend.items.map((skill: string, index: number) => (
                <motion.span
                  key={index}
                  className="skill-tag"
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.2 + index * 0.1, duration: 0.3 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -3, scale: 1.05 }}
                >
                  {skill}
                </motion.span>
              ))}
            </div>
          </motion.div>

          {/* Tools */}
          <motion.div
            className="skill-category"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h3 className="skill-category-title">
              {skillsData.tools.title}
            </h3>
            <div className="skill-tags">
              {skillsData.tools.items.map((skill: string, index: number) => (
                <motion.span
                  key={index}
                  className="skill-tag"
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.3 + index * 0.1, duration: 0.3 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -3, scale: 1.05 }}
                >
                  {skill}
                </motion.span>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default CareerSkills;