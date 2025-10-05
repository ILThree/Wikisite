import { useParams } from 'react-router-dom';
import PropTypes from 'prop-types';
import styles from './Page.module.css';

const Page = ({ pages }) => {
  const { slug } = useParams();
  const page = pages.find((item) => item.slug === slug);

  if (!page) {
    return (
      <div className={styles.notFound}>
        <h2>문서를 찾을 수 없습니다</h2>
        <p>요청한 문서는 아직 작성되지 않았습니다. 새로운 문서를 만들어 보는 건 어떨까요?</p>
      </div>
    );
  }

  return (
    <article className={styles.page}>
      <header>
        <h2>{page.title}</h2>
        <p className={styles.summary}>{page.summary}</p>
      </header>
      <section className={styles.placeholder}>
        <p>문서 본문은 아직 준비 중입니다. 여러분이 첫 편집자가 되어 내용을 채워 주세요!</p>
      </section>
    </article>
  );
};

Page.propTypes = {
  pages: PropTypes.arrayOf(
    PropTypes.shape({
      slug: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      summary: PropTypes.string.isRequired
    })
  ).isRequired
};

export default Page;
