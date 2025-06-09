import { Language } from "@/types";

export interface LanguageState {
  language: Language;
  setLanguage: (lang: Language) => void;
};
