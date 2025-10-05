import { Routes, Route, Navigate } from 'react-router-dom';
import Layout from './components/Layout.jsx';
import Home from './pages/Home.jsx';
import RecentChanges from './pages/RecentChanges.jsx';
import RandomPage from './pages/RandomPage.jsx';
import About from './pages/About.jsx';
import Page from './pages/Page.jsx';
import wikiPages from './data/wikiPages.js';

const App = () => {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/recent" element={<RecentChanges />} />
        <Route path="/random" element={<RandomPage />} />
        <Route path="/about" element={<About />} />
        <Route path="/page/:slug" element={<Page pages={wikiPages} />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </Layout>
  );
};

export default App;
