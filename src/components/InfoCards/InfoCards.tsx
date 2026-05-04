import { useLanguage } from '../../i18n/LanguageContext';
import styles from './InfoCards.module.css';

export default function InfoCards() {
  const { t } = useLanguage();

  const cards = [
    { label: t.info.date, value: t.info.dateValue },
    { label: t.info.start, value: t.info.startValue },
    { label: t.info.distance, value: t.info.distanceValue },
    { label: t.info.location, value: t.info.locationValue },
  ];

  return (
    <section className={styles.section}>
      <div className={styles.label}>{t.info.label}</div>
      <h2 className={styles.title}>{t.info.title}</h2>
      <div className={styles.grid}>
        {cards.map((card) => (
          <div key={card.label} className={styles.card}>
            <h3 className={styles.cardLabel}>{card.label}</h3>
            <p className={styles.cardValue}>{card.value}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
