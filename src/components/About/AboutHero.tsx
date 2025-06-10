import { motion } from "framer-motion"

import { listContainerVariant, sectionVariant } from "@/styles/animations"

import AboutAvatar from "./AboutAvatar"
import AboutHeroContent from "./AboutHeroContent";


const AboutHero = () => {

    return (
        <motion.section
            className="section pt-8 pb-16"
            variants={sectionVariant}
            initial="hidden"
            animate="visible"
        >
            <div className="container">
                <div className="max-w-6xl mx-auto">
                    <motion.div
                        className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-center"
                        variants={listContainerVariant}

                    >
                        <AboutHeroContent />
                        <AboutAvatar />

                    </motion.div>
                </div>
            </div>
        </motion.section>
    )
}

export default AboutHero;