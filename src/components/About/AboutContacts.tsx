import { useTranslation } from "react-i18next";

import { motion } from "framer-motion"
import { FiGithub, FiLinkedin, FiMail } from "react-icons/fi";

import { defaultViewport, listContainerVariant, listItemVariant, sectionVariant } from "@/styles/animations"


const AboutContacts = () => {
    const { t: tPages } = useTranslation('pages');

    const contacts = tPages('about.contacts', { returnObjects: true }) as {
        email: string;
        github: string;
        linkedin: string;
    };
    return (
        <motion.section
            className="section py-12 bg-surface"
            viewport={defaultViewport}
            variants={sectionVariant}
            initial="hidden"
            whileInView="visible"
        >
            <div className="container">
                <div className="max-w-4xl mx-auto">
                    <motion.div
                        className="grid grid-cols-1 md:grid-cols-3 gap-6"
                        variants={listContainerVariant}
                    >
                        <motion.a
                            href={`mailto:${contacts.email}`}
                            className="group p-6 bg-background rounded-2xl shadow-soft hover:shadow-soft-lg transition-all duration-300 hover:scale-105"
                            variants={listItemVariant}
                            whileHover={{ y: -5 }}
                        >
                            <FiMail className="w-8 h-8 text-accent mb-4 group-hover:scale-110 transition-transform" />
                            <h3 className="font-semibold mb-2">Email</h3>
                            <p className="text-sm text-text-secondary break-all">
                                {contacts.email}
                            </p>
                        </motion.a>

                        <motion.a
                            href={contacts.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group p-6 bg-background rounded-2xl shadow-soft hover:shadow-soft-lg transition-all duration-300 hover:scale-105"
                            variants={listItemVariant}
                            whileHover={{ y: -5 }}
                        >
                            <FiGithub className="w-8 h-8 text-accent mb-4 group-hover:scale-110 transition-transform" />
                            <h3 className="font-semibold mb-2">GitHub</h3>
                            <p className="text-sm text-text-secondary">VikaSemenchuk</p>
                        </motion.a>

                        <motion.a
                            href={contacts.linkedin}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group p-6 bg-background rounded-2xl shadow-soft hover:shadow-soft-lg transition-all duration-300 hover:scale-105"
                            variants={listItemVariant}
                            whileHover={{ y: -5 }}
                        >
                            <FiLinkedin className="w-8 h-8 text-accent mb-4 group-hover:scale-110 transition-transform" />
                            <h3 className="font-semibold mb-2">LinkedIn</h3>
                            <p className="text-sm text-text-secondary">Connect with me</p>
                        </motion.a>
                    </motion.div>
                </div>
            </div>
        </motion.section>
    )
}

export default AboutContacts