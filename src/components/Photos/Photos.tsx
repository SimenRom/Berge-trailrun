import { useState } from 'react';
import { useLanguage } from '../../i18n/useLanguage';
import styles from './Photos.module.css';

import img1 from '../../assets/photos/IMG_9042.jpeg';
import img2 from '../../assets/photos/IMG_9078.jpeg';
import img3 from '../../assets/photos/IMG_9144.jpeg';
import img4 from '../../assets/photos/IMG_9202.jpeg';
import img5 from '../../assets/photos/IMG_9220.jpeg';
import img6 from '../../assets/photos/IMG_9289.jpeg';
import img7 from '../../assets/photos/IMG_9315.jpeg';
import img8 from '../../assets/photos/IMG_9322.jpeg';
import img9 from '../../assets/photos/IMG_9332.jpeg';

const photos = [img1, img2, img3, img4, img5, img6, img7, img8, img9];

export default function Photos() {
  const { t } = useLanguage();
  const [selected, setSelected] = useState<string | null>(null);

  return (
    <section className={styles.section}>
      <div className={styles.label}>{t.photos.label}</div>
      <h2 className={styles.title}>{t.photos.title}</h2>
      <div className={styles.grid}>
        {photos.map((src, i) => (
          <div
            key={i}
            className={styles.placeholder}
            onClick={() => setSelected(src)}
          >
            <img src={src} alt={`${t.photos.label} ${i + 1}`} />
          </div>
        ))}
      </div>

      {selected && (
        <div className={styles.overlay} onClick={() => setSelected(null)}>
          <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
            <img src={selected} alt="" />
            <button
              className={styles.close}
              onClick={() => setSelected(null)}
              aria-label="Close"
            >
              ✕
            </button>
          </div>
        </div>
      )}
    </section>
  );
}
