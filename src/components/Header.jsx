import { NavLink } from 'react-router-dom';
import styles from './Header.module.css';

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.brand}>
        <span className={styles.logo} aria-hidden>📚</span>
        <div>
          <h1 className={styles.title}>드립위키</h1>
          <p className={styles.subtitle}>모두가 참여하는 지식 저장소</p>
        </div>
      </div>
      <nav className={styles.nav}>
        <NavLink to="/" end className={({ isActive }) => (isActive ? styles.active : '')}>
          대문
        </NavLink>
        <NavLink to="/recent" className={({ isActive }) => (isActive ? styles.active : '')}>
          최근 변경
        </NavLink>
        <NavLink to="/random" className={({ isActive }) => (isActive ? styles.active : '')}>
          랜덤 문서
        </NavLink>
        <NavLink to="/about" className={({ isActive }) => (isActive ? styles.active : '')}>
          소개
        </NavLink>
      </nav>
    </header>
  );
};

export default Header;
