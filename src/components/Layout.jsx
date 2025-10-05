import PropTypes from 'prop-types';
import { Outlet } from 'react-router-dom';
import Header from './Header.jsx';
import Sidebar from './Sidebar.jsx';
import styles from './Layout.module.css';

const Layout = ({ children }) => {
  return (
    <div className={styles.appShell}>
      <Header />
      <div className={styles.body}>
        <Sidebar />
        <main className={styles.content}>{children ?? <Outlet />}</main>
      </div>
      <footer className={styles.footer}>
        © {new Date().getFullYear()} 드립위키. 모두의 지식이 모이는 곳.
      </footer>
    </div>
  );
};

Layout.propTypes = {
  children: PropTypes.node
};

export default Layout;
