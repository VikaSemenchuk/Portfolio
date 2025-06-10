import { useTranslation } from 'react-i18next';

import { motion } from 'framer-motion'
import { FiUsers } from 'react-icons/fi';

import { listItemVariant } from '@/styles/animations';

const SoftSkills = () => {
    const { t: tPages } = useTranslation('pages');

    const softSkills = tPages('about.skills.soft', { returnObjects: true }) as string[];

    return (
        <motion.div
            className="bg-surface p-8 rounded-2xl shadow-soft"
            variants={listItemVariant}
        >
            <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center mr-4">
                    <FiUsers className="w-6 h-6 text-accent" />
                </div>
                <h3 className="text-2xl font-semibold">
                    {tPages("about.skills.softTitle")}
                </h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {softSkills.map((skill, idx) => (
                    <motion.div
                        key={idx}
                        className="flex items-center p-4 bg-background rounded-lg min-h-[3rem]"
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ delay: idx * 0.1 }}
                    >
                        <div className="w-2 h-2 bg-accent rounded-full mr-3 flex-shrink-0" />
                        <span className="text-sm font-medium leading-tight break-words">
                            {skill}
                        </span>
                    </motion.div>
                ))}
            </div>
        </motion.div>
    )
}

export default SoftSkills
