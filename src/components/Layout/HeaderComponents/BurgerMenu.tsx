import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { AnimatePresence, motion } from 'framer-motion';
import {  Menu, X } from 'lucide-react';

import { ThemeToggle, LanguageSwitcher } from '@/components/UI';

import Navigation from './Navigation';
import DocumentsDownload from './DocumentsDownload';

const MobileMenu = () => {
  // const { t: tCommon } = useTranslation('common');
  const { t: tNavigation } = useTranslation('navigation');
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  return (
    <div className="flex items-center justify-between md:hidden">

      <button
        onClick={toggleMenu}
        className="p-2 rounded-lg hover:bg-footer/50 transition-colors"
        aria-label="Toggle menu"
      >
        {isOpen ? (
          <X className="h-6 w-6" />
        ) : (
          <Menu className="h-6 w-6" />
        )}
      </button>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={closeMenu}
              className="fixed inset-0 bg-black/50 z-40"
            />

            {/* Menu Panel */}
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 20, stiffness: 300 }}
              className="fixed top-0 right-0 h-full w-80 max-w-[80vw] bg-background shadow-xl z-50 flex flex-col"
            >
              {/* Header with close button */}
              <div className="flex justify-between items-center p-6 border-b border-footer/20">
                <h3 className="text-lg font-semibold">{tNavigation("header.menu")}</h3>
                <button
                  onClick={closeMenu}
                  className="p-2 rounded-lg hover:bg-footer/50 transition-colors"
                  aria-label="Close menu"
                >
                  <X className="h-6 w-6" />
                </button>
              </div>

              {/* Navigation Links */}
              <div className='flex-1'>

                <div className=' p-6'>
                  <Navigation />
                </div>

                <div className="mt-6 p-6 border-t border-footer/20">
                  <DocumentsDownload />
                  {/* <a
                    href="https://drive.google.com/file/d/1aLLC6eeCE27seZS7uUGr7bXT13kdzfsD/view?usp=drive_link"
                    target="_blank"
                    rel="noreferrer noopener"
                    className="flex items-center gap-3  rounded-lg hover:bg-footer/50 transition-colors"
                    onClick={closeMenu}
                  >
                    {/* <PdfIcon className="w-5 h-5" /> */}
                    {/* <FileText className="mr-2 h-5 w-5" />
                    <span>{tCommon("buttons.cvDocuments")}</span>
                  </a> */} 
                </div>
              </div>

              <div className="p-6 border-t border-footer/20 space-y-4">
                <div className="flex items-center justify-end gap-3">
                  <ThemeToggle />
                  <div className="relative">
                    <LanguageSwitcher />
                  </div>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
};

export default MobileMenu; 