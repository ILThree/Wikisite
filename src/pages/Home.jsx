import { Link } from 'react-router-dom';
import wikiPages from '../data/wikiPages.js';
import styles from './Home.module.css';

const Home = () => {
  return (
    <div className={styles.home}>
      <section className={styles.hero}>
        <h2>드립과 이야기를 기록하는 열린 공간</h2>
        <p>
          드립위키는 커뮤니티에서 탄생한 다양한 드립과 밈을 체계적으로 정리해 공유하는 위키입니다.
          누구나 자유롭게 문서를 만들고 편집하여, 우리만의 역사를 함께 만들어 갈 수 있어요.
        </p>
        <div className={styles.ctaGroup}>
          <Link to="/page/welcome" className={styles.primaryCta}>
            첫 문서 보기
          </Link>
          <Link to="/recent" className={styles.secondaryCta}>
            최근 변경 살펴보기
          </Link>
        </div>
      </section>

      <section className={styles.featured}>
        <h3>추천 문서</h3>
        <div className={styles.cardGrid}>
          {wikiPages.map((page) => (
            <article key={page.slug} className={styles.card}>
              <h4>{page.title}</h4>
              <p>{page.summary}</p>
              <Link to={`/page/${page.slug}`}>문서 읽기 →</Link>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Home;
