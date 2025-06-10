import { useTranslation } from "react-i18next";

import { motion } from 'framer-motion'

import { LuGraduationCap } from "react-icons/lu"
import { FiCalendar } from 'react-icons/fi';

import { listItemVariant } from "@/styles/animations"

const Education = () => {
    const { t: tPages } = useTranslation('pages');

    const education = tPages('about.education', { returnObjects: true }) as {
        program: string;
        institution: string;
        dates: string;
    }[];

    return (
        <motion.div
            className="bg-surface p-8 rounded-2xl shadow-soft"
            variants={listItemVariant}
        >
            <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center mr-4">
                    <LuGraduationCap className="w-6 h-6 text-accent" />
                </div>
                <h3 className="text-2xl font-semibold">
                    {tPages("about.educationTitle")}
                </h3>
            </div>
            <div className="space-y-6">
                {education.map((edu, idx) => (
                    <motion.div
                        key={idx}
                        className="relative pl-6 border-l-2 border-accent/20 last:border-l-0"
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: idx * 0.2 }}
                    >
                        <div className="absolute -left-2 top-0 w-4 h-4 bg-accent rounded-full" />
                        <div className="pb-6">
                            <h4 className="font-bold text-lg mb-2">
                                {edu.program}
                            </h4>
                            <p className="text-text-secondary mb-1">
                                {edu.institution}
                            </p>
                            <div className="flex items-center text-sm text-accent">
                                <FiCalendar className="w-4 h-4 mr-2" />
                                {edu.dates}
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>
        </motion.div>
    )
}

export default Education
