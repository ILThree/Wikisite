import { useMemo } from 'react';
import { Link } from 'react-router-dom';
import wikiPages from '../data/wikiPages.js';
import styles from './RandomPage.module.css';

const RandomPage = () => {
  const page = useMemo(() => wikiPages[Math.floor(Math.random() * wikiPages.length)], []);

  return (
    <div className={styles.randomPage}>
      <h2>랜덤 문서</h2>
      <article>
        <h3>{page.title}</h3>
        <p>{page.summary}</p>
        <Link to={`/page/${page.slug}`} className={styles.link}>
          문서 전체 읽기
        </Link>
      </article>
      <p className={styles.note}>새로고침(F5)을 눌러 다른 문서를 만나보세요!</p>
    </div>
  );
};

export default RandomPage;
