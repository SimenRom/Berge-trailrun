import { useLanguage, type Language } from '../../i18n/LanguageContext';
import styles from './LanguageSwitcher.module.css';

const options: { value: Language; label: string }[] = [
  { value: 'nn', label: 'NN' },
  { value: 'nb', label: 'NB' },
  { value: 'en', label: 'EN' },
];

export default function LanguageSwitcher() {
  const { lang, setLang } = useLanguage();

  return (
    <div className={styles.switcher}>
      {options.map((opt) => (
        <button
          key={opt.value}
          className={`${styles.btn} ${lang === opt.value ? styles.active : ''}`}
          onClick={() => setLang(opt.value)}
        >
          {opt.label}
        </button>
      ))}
    </div>
  );
}
