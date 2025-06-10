import { useTranslation } from 'react-i18next';

import { motion } from 'framer-motion'
import { FiGlobe, FiMapPin } from 'react-icons/fi'

import { listItemVariant } from '@/styles/animations'

const Languages = () => {
    const { t: tPages } = useTranslation('pages');

    const languages = tPages('about.skills.languages', { returnObjects: true }) as string[];
    return (
        <motion.div
            className="bg-surface p-8 rounded-2xl shadow-soft"
            variants={listItemVariant}
        >
            <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center mr-4">
                    <FiGlobe className="w-6 h-6 text-accent" />
                </div>
                <h3 className="text-2xl font-semibold">
                    {tPages("about.skills.languagesTitle")}
                </h3>
            </div>
            <ul className="space-y-4">
                {languages.map((lang, idx) => (
                    <motion.li
                        key={idx}
                        className="flex items-center p-4 bg-background rounded-lg"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: idx * 0.1 }}
                    >
                        <FiMapPin className="w-4 h-4 text-accent mr-3 flex-shrink-0" />
                        <span>{lang}</span>
                    </motion.li>
                ))}
            </ul>
        </motion.div>
    )
}

export default Languages
