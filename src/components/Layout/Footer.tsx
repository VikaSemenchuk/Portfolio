import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { FiGithub } from "react-icons/fi";

const Footer = () => {
  const { t: tNavigation } = useTranslation('navigation');
  const { t: tLegal } = useTranslation('legal')
  
  return (
    <footer className="bg-surface border-t border-border">
      <div className="container mx-auto px-4 py-8">
        <motion.div
          className="flex flex-col md:flex-row justify-between items-center gap-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >

          
         <div className="flex flex-col sm:flex-row items-center gap-4">
            <p className="text-sm text-text-secondary text-center sm:text-left">
              {tNavigation("footer.copyright")}
            </p>
           
            <a
              href="https://github.com/VikaSemenchuk/portfolio"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm text-text-secondary hover:text-accent transition-colors group"
              title="View source code on GitHub"
            >
              <FiGithub className="h-4 w-4 group-hover:scale-110 transition-transform" />
              <span className="hidden sm:inline">Source Code</span>
            </a>
          </div>

        
          <div className="flex gap-6">
            <Link
              to="/impressum"
              className="text-sm text-text-secondary hover:text-accent transition-colors"
            >
              {tLegal("impressum.title")}
            </Link>
            <Link
              to="/datenschutz"
              className="text-sm text-text-secondary hover:text-accent transition-colors"
            >
              {tLegal("datenschutz.title")}
            </Link>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}

export default Footer;