import { useLanguage } from '../../i18n/useLanguage';
import styles from './Footer.module.css';

export default function Footer() {
  const { t } = useLanguage();

  return (
    <footer className={styles.footer}>
      <div className={styles.logo}>Berge Trailrun</div>
      <p className={styles.text}>{t.footer.date}</p>
      <p className={styles.text}>
        {t.footer.contact}{' '}
        <a href="mailto:bergetrailrun@gmail.com">bergetrailrun@gmail.com</a>
      </p>
      <div className={styles.socialLinks}>
        <a href="https://www.instagram.com/bergetrailrun" target="_blank" rel="noopener noreferrer">Instagram</a>
        <a href="https://strava.app.link/R6g1rV9un3b" target="_blank" rel="noopener noreferrer">Strava – Knut</a>
        <a href="https://strava.app.link/jdAR1Agvn3b" target="_blank" rel="noopener noreferrer">Strava – Lars</a>
      </div>
    </footer>
  );
}
