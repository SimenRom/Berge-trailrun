import { useLanguage } from '../../i18n/LanguageContext';
import styles from './Intro.module.css';

export default function Intro() {
  const { t } = useLanguage();

  return (
    <section className={styles.intro} id="info">
      <div className={styles.label}>{t.intro.label}</div>
      <h2 className={styles.title}>{t.intro.title}</h2>
      <p className={styles.text}>{t.intro.text}</p>
    </section>
  );
}
