import { useLanguage } from '../../i18n/useLanguage';
import storyImage from '../../assets/story-berge.jpg';
import styles from './Story.module.css';

export default function Story() {
  const { t } = useLanguage();

  return (
    <section className={styles.section} id="story">
      <div className={styles.layout}>
        <div>
          <div className={styles.label}>{t.story.label}</div>
          <h2 className={styles.title}>{t.story.title}</h2>
          <p className={styles.text}>{t.story.p1}</p>
          <p className={styles.text}>{t.story.p2}</p>
        </div>
        <img className={styles.image} src={storyImage} alt={t.story.imagePlaceholder} />
      </div>
    </section>
  );
}
