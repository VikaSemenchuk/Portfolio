import { motion } from 'framer-motion'

import Languages from "./Languages";
import Education from "./Education";

import { listContainerVariant } from "@/styles/animations";

const AboutBackground = () => {

    return (
        <motion.div className="space-y-8" variants={listContainerVariant}>
            <Languages />
            <Education />
        </motion.div>
    )
}

export default AboutBackground
