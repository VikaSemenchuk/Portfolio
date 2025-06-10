import { motion } from "framer-motion";

import AnimeAvatar from "@/assets/anime-avatar.png";

const AboutAvatar = () => {
    return (
        <div className="flex justify-center lg:justify-end">
            <motion.div
                initial={{ scale: 0.5, opacity: 0, rotateY: 20 }}
                animate={{ scale: 1, opacity: 1, rotateY: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="relative group"
            >

                <div className="absolute -inset-4 bg-gradient-to-r from-accent/20 to-accent-hover/20 rounded-full blur-lg group-hover:blur-xl transition-all duration-300" />

                <div className="relative w-48 h-48 lg:w-56 lg:h-56 xl:w-64 xl:h-64">

                    <div className="relative w-full h-full rounded-full overflow-hidden shadow-soft-lg group-hover:shadow-soft-lg transition-all duration-300">
                        <img
                            src={AnimeAvatar}
                            alt="Viktoriia Semenchuk - Anime Style Portrait"
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                        />

                        <div className="absolute inset-0 bg-gradient-to-t from-accent/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </div>

                    <div className="absolute inset-0 rounded-full border-4 border-white/20 group-hover:border-accent/30 transition-all duration-300" />

                    <div className="absolute -top-2 -right-2 w-6 h-6 bg-accent rounded-full border-4 border-background shadow-lg animate-pulse" />
                    <div className="absolute -bottom-2 -left-2 w-4 h-4 bg-accent-hover rounded-full border-2 border-background shadow-lg animate-pulse"
                        style={{ animationDelay: '1s' }} />
                </div>

                <div className="absolute bottom-4 right-4 w-6 h-6 bg-green-400 rounded-full border-4 border-background shadow-lg">
                    <div className="absolute inset-1 bg-green-500 rounded-full animate-pulse" />
                </div>
            </motion.div>
        </div>
    )
}

export default AboutAvatar