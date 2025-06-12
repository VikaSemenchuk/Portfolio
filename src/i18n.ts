import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import enCommon from '@/locales/en/common.json';
import enNavigation from '@/locales/en/navigation.json';
import enPages from '@/locales/en/pages.json';
import enPetsProject from '@/locales/en/projects/pets.json';
import enNewsProject from '@/locales/en/projects/news.json';
import enImagesProject from '@/locales/en/projects/images.json';
import enMoviesProject from '@/locales/en/projects/movies.json';
import enCareer from '@/locales/en/career.json';


import ukCommon from '@/locales/uk/common.json';
import ukNavigation from '@/locales/uk/navigation.json';
import ukPages from '@/locales/uk/pages.json';
import ukPetsProject from '@/locales/uk/projects/pets.json';
import ukNewsProject from '@/locales/uk/projects/news.json';
import ukImagesProject from '@/locales/uk/projects/images.json';
import ukMoviesProject from '@/locales/uk/projects/movies.json';
import ukCareer from '@/locales/uk/career.json';


import deCommon from '@/locales/de/common.json';
import deNavigation from '@/locales/de/navigation.json';
import dePages from '@/locales/de/pages.json';
import dePetsProject from '@/locales/de/projects/pets.json';
import deNewsProject from '@/locales/de/projects/news.json';
import deImagesProject from '@/locales/de/projects/images.json';
import deMoviesProject from '@/locales/de/projects/movies.json';
import deCareer from '@/locales/de/career.json';
import { getStoredValue } from '@/utils';

const currentLanguage = getStoredValue('language', ['en', 'uk', 'de'], 'en');

i18n
  .use(initReactI18next)
  .init({
    resources: {
      en: {
        common: enCommon,
        navigation: enNavigation,
        pages: enPages,
        petsProject: enPetsProject,
        newsProject: enNewsProject,
        imagesProject: enImagesProject,
        moviesProject: enMoviesProject,  
        career: enCareer
      },
      uk: {
        common: ukCommon,
        navigation: ukNavigation,
        pages: ukPages,
        petsProject: ukPetsProject,
        newsProject: ukNewsProject,
        imagesProject: ukImagesProject,
        moviesProject: ukMoviesProject,
        career: ukCareer
      },
      de: {
        common: deCommon,
        navigation: deNavigation,
        pages: dePages,
        petsProject: dePetsProject,
        newsProject: deNewsProject,
        imagesProject: deImagesProject,
        moviesProject: deMoviesProject,
        career: deCareer
      }
    },
    fallbackLng: 'en',
    lng: currentLanguage,
    
    
    interpolation: {
      escapeValue: false,
    },
     react: {
      useSuspense: false,
    },
  });

export default i18n;