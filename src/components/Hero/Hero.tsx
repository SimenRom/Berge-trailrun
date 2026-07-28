import { useEffect, useRef, useState } from 'react';
import { useLanguage } from '../../i18n/useLanguage';
import styles from './Hero.module.css';
import heroBg from '../../assets/hero-fjord.jpeg';
import heroVideo from '../../assets/hero-drone.mp4';

const REDUCED_MOTION = '(prefers-reduced-motion: reduce)';
const PLAYBACK_RATE = 0.7;

export default function Hero() {
  const { t } = useLanguage();
  const videoRef = useRef<HTMLVideoElement>(null);
  const [reduceMotion, setReduceMotion] = useState(
    () => window.matchMedia(REDUCED_MOTION).matches
  );

  useEffect(() => {
    const mq = window.matchMedia(REDUCED_MOTION);
    const onChange = () => setReduceMotion(mq.matches);
    mq.addEventListener('change', onChange);
    return () => mq.removeEventListener('change', onChange);
  }, []);

  const slowDown = () => {
    if (videoRef.current) videoRef.current.playbackRate = PLAYBACK_RATE;
  };

  return (
    <section
      className={styles.hero}
      style={{ backgroundImage: `url(${heroBg})` }}
    >
      {!reduceMotion && (
        <video
          ref={videoRef}
          className={styles.video}
          src={heroVideo}
          poster={heroBg}
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          aria-hidden="true"
          tabIndex={-1}
          onLoadedMetadata={slowDown}
          onPlay={slowDown}
        />
      )}
      <div className={styles.overlay} />
      <div className={styles.content}>
        <div className={styles.date}>{t.hero.date}</div>
        <h1 className={styles.title}>
          Berge<br />Trailrun
        </h1>
        <p className={styles.subtitle}>{t.hero.subtitle}</p>
        <a href="#signup" className={styles.cta}>{t.hero.cta}</a>
      </div>
    </section>
  );
}
