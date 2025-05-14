import { Language } from "../language";

export interface LanguageState {
  language: Language;
  setLanguage: (lang: Language) => void;
};
