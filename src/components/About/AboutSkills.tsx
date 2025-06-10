import { motion } from 'framer-motion'

import { listContainerVariant } from '@/styles/animations'

import TechSkills from './TechSkills';
import SoftSkills from './SoftSkills';

const AboutSkills = () => {

    return (
        <motion.div className="space-y-8" variants={listContainerVariant}>
            <TechSkills />
            <SoftSkills />
        </motion.div>
    )
}

export default AboutSkills
