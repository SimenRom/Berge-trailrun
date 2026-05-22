import { useLanguage } from '../../i18n/useLanguage';
import { useEffect } from 'react';
import styles from './Trail.module.css';

export default function Trail() {
  const { t } = useLanguage();

  useEffect(() => {
    // Load Strava embed script
    const script = document.createElement('script');
    script.src = 'https://strava-embeds.com/embed.js';
    script.async = true;
    document.body.appendChild(script);
  }, []);

  return (
    <section className={styles.section} id="trail">
      <div className={styles.label}>{t.trail.label}</div>
      <h2 className={styles.title}>{t.trail.title}</h2>
      <div
        className="strava-embed-placeholder"
        data-embed-type="route"
        data-embed-id="3492797505461560316"
        data-full-width="true"
        data-style="standard"
        data-map-hash="11.59/61.1897/5.9899"
        data-from-embed="true"
        data-token="jyffv2oXOgTSXsDYUQg_FQAs84weNOac485WxdhDvwU"
      ></div>
      <div className={styles.stats}>
        <div>
          <div className={styles.statValue}>11</div>
          <div className={styles.statLabel}>{t.trail.km}</div>
        </div>
        <div>
          <div className={styles.statValue}>768</div>
          <div className={styles.statLabel}>{t.trail.elevation}</div>
        </div>
      </div>
    </section>
  );
}
