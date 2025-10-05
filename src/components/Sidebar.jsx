import { NavLink } from 'react-router-dom';
import wikiPages from '../data/wikiPages.js';
import styles from './Sidebar.module.css';

const Sidebar = () => {
  return (
    <aside className={styles.sidebar}>
      <div className={styles.section}>
        <h2>문서 탐색</h2>
        <input className={styles.searchInput} type="search" placeholder="문서 검색 (준비중)" disabled />
      </div>
      <div className={styles.section}>
        <h2>주요 문서</h2>
        <ul className={styles.pageList}>
          {wikiPages.slice(0, 5).map((page) => (
            <li key={page.slug}>
              <NavLink to={`/page/${page.slug}`} className={({ isActive }) => (isActive ? styles.active : '')}>
                {page.title}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
      <div className={styles.section}>
        <h2>바로가기</h2>
        <ul className={styles.links}>
          <li>
            <NavLink to="/recent" className={({ isActive }) => (isActive ? styles.active : '')}>
              최근 변경
            </NavLink>
          </li>
          <li>
            <NavLink to="/random" className={({ isActive }) => (isActive ? styles.active : '')}>
              랜덤 문서
            </NavLink>
          </li>
          <li>
            <NavLink to="/about" className={({ isActive }) => (isActive ? styles.active : '')}>
              위키 소개
            </NavLink>
          </li>
        </ul>
      </div>
    </aside>
  );
};

export default Sidebar;
