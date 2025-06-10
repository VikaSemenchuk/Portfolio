import { useTranslation } from "react-i18next";

import { motion } from "framer-motion";
import { FaCode } from "react-icons/fa";

import { listItemVariant } from "@/styles/animations";

const TechSkills = () => {
    const { t: tPages } = useTranslation('pages');

    const techSkills = tPages('about.skills.technical', { returnObjects: true }) as string[];
    
    return (
        <motion.div
            className="bg-surface p-8 rounded-2xl shadow-soft"
            variants={listItemVariant}
        >
            <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center mr-4">
                    <FaCode className="w-6 h-6 text-accent" />
                </div>
                <h3 className="text-2xl font-semibold">
                    {tPages("about.skills.techTitle")}
                </h3>
            </div>
            <ul className="space-y-3">
                {techSkills.map((skill, idx) => (
                    <motion.li
                        key={idx}
                        className="flex items-start"
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: idx * 0.1 }}
                    >
                        <div className="w-2 h-2 bg-accent rounded-full mt-3 mr-3 flex-shrink-0" />
                        <span className="text-text-secondary">{skill}</span>
                    </motion.li>
                ))}
            </ul>
        </motion.div>
    )
}

export default TechSkills
