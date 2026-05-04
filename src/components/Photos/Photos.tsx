import { useLanguage } from '../../i18n/LanguageContext';
import styles from './Photos.module.css';

export default function Photos() {
  const { t } = useLanguage();

  return (
    <section className={styles.section}>
      <div className={styles.label}>{t.photos.label}</div>
      <h2 className={styles.title}>{t.photos.title}</h2>
      <div className={styles.grid}>
        {[1, 2, 3, 4, 5, 6].map((n) => (
          <div
            key={n}
            className={`${styles.placeholder} ${n === 4 ? styles.tall : ''}`}
          >
            {t.photos.label} {n}
          </div>
        ))}
      </div>
    </section>
  );
}
