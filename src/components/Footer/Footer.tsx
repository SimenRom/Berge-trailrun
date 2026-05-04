import { useLanguage } from '../../i18n/LanguageContext';
import styles from './Footer.module.css';

export default function Footer() {
  const { t } = useLanguage();

  return (
    <footer className={styles.footer}>
      <div className={styles.logo}>Berge Trail Run</div>
      <p className={styles.text}>{t.footer.date}</p>
      <p className={styles.text}>{t.footer.contact}</p>
      <div className={styles.socialLinks}>
        <a href="#">Instagram</a>
        <a href="#">Facebook</a>
        <a href="#">Strava</a>
      </div>
    </footer>
  );
}
