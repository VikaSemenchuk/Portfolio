import { useTranslation } from 'react-i18next';
import { useLanguageStore } from '../store/useLanguageStore';
import { languages } from '../constants/languages';
import { AnimatePresence, motion } from 'framer-motion';
import { useState } from 'react';

export default function LanguageSwitcher() {
  const { i18n } = useTranslation();
  const selectedLang = useLanguageStore((state) => state.language);
  const setLanguage = useLanguageStore((state) => state.setLanguage);

  const [isOpen, setIsOpen] = useState(false);

  const selected = languages.find((l) => l.code === selectedLang) || languages[0];

  const otherLanguages = languages.filter((l) => l.code !== selectedLang);


  const handleChange = (lang: typeof selected) => {
    i18n.changeLanguage(lang.code);
    setLanguage(lang.code);
    setIsOpen(false);
  };

  return (
    <div
      className="relative inline-flex flex-col items-start"
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
    >
      {/* Current language */}
      <button className="btn-secondary relative">
        {selected.label}
      </button>

      {/* other languages */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -4 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -4 }}
            transition={{ duration: 0.2 }}
            className=" absolute left-0 top-full flex flex-col gap-2 mt-2.5 "
          >
            {otherLanguages.map((lang) => (
              <motion.button
                key={lang.code}
                onClick={() => handleChange(lang)}
                className="btn-secondary"
                initial={{ opacity: 0, y: -5 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -5 }}
              >
                {lang.label}
              </motion.button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
