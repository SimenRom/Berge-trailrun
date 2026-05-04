import { useState } from 'react';
import { useLanguage } from '../../i18n/LanguageContext';
import LanguageSwitcher from '../LanguageSwitcher/LanguageSwitcher';
import styles from './Nav.module.css';

export default function Nav() {
  const { t } = useLanguage();
  const [open, setOpen] = useState(false);

  return (
    <nav className={styles.nav}>
      <div className={styles.logo}>Berge Trail Run</div>
      <ul className={`${styles.links} ${open ? styles.open : ''}`}>
        <li><a href="#info" onClick={() => setOpen(false)}>{t.nav.practicalInfo}</a></li>
        <li><a href="#trail" onClick={() => setOpen(false)}>{t.nav.trail}</a></li>
        <li><a href="#story" onClick={() => setOpen(false)}>{t.nav.background}</a></li>
        <li><a href="#signup" onClick={() => setOpen(false)}>{t.nav.signup}</a></li>
      </ul>
      <div className={styles.right}>
        <LanguageSwitcher />
        <button
          className={styles.hamburger}
          onClick={() => setOpen(!open)}
          aria-label="Menu"
        >
          {open ? '✕' : '☰'}
        </button>
      </div>
    </nav>
  );
}
