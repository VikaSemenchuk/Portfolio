import { useTranslation } from "react-i18next";

import { motion } from "framer-motion";

import { listItemVariant } from "@/styles/animations";

const AboutHeroContent = () => {

    const { t: tPages } = useTranslation('pages');

    return (
        <div className="lg:col-span-2 text-center lg:text-left space-y-6">
            <motion.h1
                className="text-4xl md:text-5xl xl:text-6xl font-bold mb-6"
                variants={listItemVariant}

            >
                {tPages("about.name")}
            </motion.h1>

            <motion.h2
                className="text-xl md:text-2xl text-accent font-medium mb-8"
                variants={listItemVariant}

            >
                {tPages("home.hero.title")}
            </motion.h2>

            <motion.p
                className="text-lg md:text-xl text-text-secondary leading-relaxed"
                variants={listItemVariant}

            >
                {tPages("about.intro")}
            </motion.p>
        </div>
    )
}

export default AboutHeroContent;