import { useLanguage } from '../../i18n/useLanguage';
import styles from './Hero.module.css';

export default function Hero() {
  const { t } = useLanguage();

  return (
    <section className={styles.hero}>
      <div className={styles.overlay} />
      <div className={styles.content}>
        <div className={styles.date}>{t.hero.date}</div>
        <h1 className={styles.title}>
          Berge<br />Trail Run
        </h1>
        <p className={styles.subtitle}>{t.hero.subtitle}</p>
        <a href="#signup" className={styles.cta}>{t.hero.cta}</a>
      </div>
    </section>
  );
}
