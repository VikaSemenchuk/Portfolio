import { useEffect, useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { ChevronsDown } from "lucide-react";
import { AnimatePresence, motion } from 'framer-motion';

import { useLanguageStore } from '@/store';
import { languages } from '@/constants';

const languageShortLabels = {
  'en': 'EN',
  'uk': 'UK',
  'de': 'DE'
} as const;

export default function LanguageSwitcher() {
  const { i18n } = useTranslation();
  const selectedLang = useLanguageStore((state) => state.language);
  const setLanguage = useLanguageStore((state) => state.setLanguage);

  const [isOpen, setIsOpen] = useState(false);
  const [focusedIndex, setFocusedIndex] = useState(0);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const selected = languages.find((l) => l.code === selectedLang) || languages[0];
  const otherLanguages = languages.filter((l) => l.code !== selectedLang);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
    // if (!isOpen) setFocusedIndex(-1)
  };

  const selectLanguage = (lang: typeof selected) => {
    if (lang) {
      i18n.changeLanguage(lang.code);
      setLanguage(lang.code);
    }
    setIsOpen(false);
    setFocusedIndex(-1);
  };

  //----------------------------------------------------------------------------
  const handleKeyLang = (event: React.KeyboardEvent) => {
    if (!isOpen) {
      if (
        event.key === "Enter" ||
        event.key === " " ||
        event.key === "ArrowDown"
        || event.key === "Tab"
      ) {
        event.preventDefault();
        setIsOpen(true);
        // setFocusedIndex(0);
      } else {
        selectLanguage(otherLanguages[focusedIndex]); 
      }
      return
    }

    switch (event.key) {
      case "Enter":
      case " ":
        event.preventDefault();
        selectLanguage(otherLanguages[focusedIndex]);
        break;

      case "ArrowDown":
        event.preventDefault();
        setFocusedIndex((prev) =>
          prev < otherLanguages.length - 1 ? prev + 1 : 0
        );
        break;

      case "ArrowUp":
        event.preventDefault();
        setFocusedIndex((prev) =>
          prev > 0 ? prev - 1 : otherLanguages.length - 1
        );
        break;

      case "Escape":
        event.preventDefault();
        setIsOpen(false);
        setFocusedIndex(-1);
        break;

      case "Tab":
        setFocusedIndex(-1);
        setIsOpen(false);
        break;
    }
  };
  //--------------------------------------------------------------------------

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div
      ref={dropdownRef}
      className="relative inline-flex flex-col "
      onMouseEnter={() => {
        setFocusedIndex(-1);
        setIsOpen(true)
      }
      }
      onMouseLeave={() => {
        setIsOpen(false)
        setFocusedIndex(0)
      }
      }
    >

      <button
        className="btn-control gap-1"
        onClick={toggleDropdown}
        aria-haspopup="listbox"

        onKeyDown={handleKeyLang}
        aria-expanded={isOpen}
        aria-label={`Current language: ${selected.label}. Press Enter or Space to open language menu`}
      >
        <span className="hidden lg:inline ">{selected.label}</span>
        <span className="lg:hidden">
          {
            languageShortLabels[
            selected.code as keyof typeof languageShortLabels
            ]
          }
        </span>
        <ChevronsDown
          className={`w-4 h-4 transition-transform ${isOpen ? "md:rotate-180" : " rotate-180 md:-rotate-0"
            }`}
        />
      </button>

      {/* other languages */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 4 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 4 }}
            transition={{ duration: 0.2 }}
            className="absolute left-0 bottom-full mb-2.5 md:top-full md:bottom-auto md:mt-2.5 md:mb-0 flex flex-col gap-2"
            role="listbox"
            aria-label="Language options"
          >
            {otherLanguages.map((lang, index) => (
              <motion.button
                key={lang.code}
                onClick={() => selectLanguage(lang)}
                className={`btn-control  ${focusedIndex === index ? 'ring-2 ring-accent ring-opacity-50' : ''
                  }`}
                initial={{ opacity: 0, y: lang === otherLanguages[0] ? 5 : 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: lang === otherLanguages[0] ? 5 : 10 }}
                role="option"
                aria-selected={focusedIndex === index}
                aria-label={`Switch to ${lang.label}`}
                tabIndex={focusedIndex === index ? 0 : -1}
              >
                <span className="hidden lg:inline">{lang.label}</span>
                <span className="lg:hidden">
                  {
                    languageShortLabels[
                    lang.code as keyof typeof languageShortLabels
                    ]
                  }
                </span>
              </motion.button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
