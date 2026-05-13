import { createContext } from 'react';
import nn from './nn.json';
import nb from './nb.json';
import en from './en.json';

export type Language = 'nn' | 'nb' | 'en';

export const translations = { nn, nb, en } as const;

export type Translations = typeof nn;

export interface LanguageContextType {
  lang: Language;
  t: Translations;
  setLang: (lang: Language) => void;
}

export const LanguageContext = createContext<LanguageContextType | null>(null);
