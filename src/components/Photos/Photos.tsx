import { useCallback, useEffect, useState } from 'react';
import { useLanguage } from '../../i18n/useLanguage';
import styles from './Photos.module.css';

const photos = Object.entries(
  import.meta.glob<string>('../../assets/photos/*.jpeg', {
    eager: true,
    import: 'default',
  })
)
  .sort(([a], [b]) => a.localeCompare(b))
  .map(([, src]) => src);

export default function Photos() {
  const { t } = useLanguage();
  const [index, setIndex] = useState<number | null>(null);
  const isOpen = index !== null;

  const close = useCallback(() => setIndex(null), []);
  const step = useCallback(
    (delta: number) =>
      setIndex((i) =>
        i === null ? i : (i + delta + photos.length) % photos.length
      ),
    []
  );

  useEffect(() => {
    if (!isOpen) return;

    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') close();
      else if (e.key === 'ArrowRight') step(1);
      else if (e.key === 'ArrowLeft') step(-1);
    };

    window.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';

    return () => {
      window.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, [isOpen, close, step]);

  return (
    <section className={styles.section}>
      <div className={styles.label}>{t.photos.label}</div>
      <h2 className={styles.title}>{t.photos.title}</h2>
      <div className={styles.grid}>
        {photos.map((src, i) => (
          <button
            key={src}
            type="button"
            className={styles.tile}
            onClick={() => setIndex(i)}
            aria-label={`${t.photos.label} ${i + 1}`}
          >
            <img src={src} alt="" loading="lazy" decoding="async" />
          </button>
        ))}
      </div>

      {isOpen && (
        <div
          className={styles.overlay}
          onClick={close}
          role="dialog"
          aria-modal="true"
        >
          <button
            className={`${styles.nav} ${styles.prev}`}
            onClick={(e) => {
              e.stopPropagation();
              step(-1);
            }}
            aria-label="Previous"
          >
            ‹
          </button>

          <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
            <img src={photos[index]} alt={`${t.photos.label} ${index + 1}`} />
          </div>

          <button
            className={`${styles.nav} ${styles.next}`}
            onClick={(e) => {
              e.stopPropagation();
              step(1);
            }}
            aria-label="Next"
          >
            ›
          </button>

          <button className={styles.close} onClick={close} aria-label="Close">
            ✕
          </button>

          <div className={styles.counter}>
            {index + 1} / {photos.length}
          </div>
        </div>
      )}
    </section>
  );
}
