import { useLanguage } from '../../i18n/LanguageContext';
import styles from './Trail.module.css';

export default function Trail() {
  const { t } = useLanguage();

  return (
    <section className={styles.section} id="trail">
      <div className={styles.label}>{t.trail.label}</div>
      <h2 className={styles.title}>{t.trail.title}</h2>
      <div className={styles.mapPlaceholder}>
        {t.trail.mapPlaceholder}
      </div>
      <div className={styles.stats}>
        <div>
          <div className={styles.statValue}>15</div>
          <div className={styles.statLabel}>{t.trail.km}</div>
        </div>
        <div>
          <div className={styles.statValue}>650</div>
          <div className={styles.statLabel}>{t.trail.elevation}</div>
        </div>
        <div>
          <div className={styles.statValue}>1</div>
          <div className={styles.statLabel}>{t.trail.aidStation}</div>
        </div>
      </div>
    </section>
  );
}
