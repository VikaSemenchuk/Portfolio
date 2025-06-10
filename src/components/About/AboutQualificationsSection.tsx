import { motion } from 'framer-motion'

import { defaultViewport, sectionVariant } from "@/styles/animations";

import AboutSkills from "./AboutSkills";
import AboutBackground from "./AboutBackground";

const AboutQualificationsSection = () => {
    return (
        <motion.section
            className="section py-16"
            initial="hidden"
            whileInView="visible"
            viewport={defaultViewport}
            variants={sectionVariant}
        >
            <div className="container">
                <div className="max-w-6xl mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">

                        <AboutSkills />
                        <AboutBackground />

                    </div>
                </div>
            </div>
        </motion.section>
    )
}

export default AboutQualificationsSection
