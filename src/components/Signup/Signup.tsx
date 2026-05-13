import { useLanguage } from '../../i18n/useLanguage';
import styles from './Signup.module.css';

const SIGNUP_URL = '#';

export default function Signup() {
  const { t } = useLanguage();

  return (
    <section className={styles.section} id="signup">
      <div className={styles.label}>{t.signup.label}</div>
      <h2 className={styles.title}>{t.signup.title}</h2>
      <p className={styles.text}>{t.signup.text}</p>
      <a href={SIGNUP_URL} className={styles.cta} target="_blank" rel="noopener noreferrer">
        {t.signup.cta}
      </a>
    </section>
  );
}
