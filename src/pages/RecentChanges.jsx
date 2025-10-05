import styles from './RecentChanges.module.css';

const dummyChanges = [
  {
    page: '인기 있는 드립 모음',
    user: 'wiki_master',
    time: '5분 전',
    summary: '최신 밈 추가 및 이미지 첨부'
  },
  {
    page: '커뮤니티 역사',
    user: 'historians',
    time: '1시간 전',
    summary: '2000년대 초반 커뮤니티 사건 보강'
  },
  {
    page: '편집 가이드라인',
    user: 'mod_team',
    time: '어제',
    summary: '욕설 사용 지침 업데이트'
  }
];

const RecentChanges = () => {
  return (
    <div className={styles.recentChanges}>
      <header>
        <h2>최근 변경</h2>
        <p>커뮤니티에서 방금 업데이트한 문서를 확인해 보세요.</p>
      </header>
      <ul className={styles.changeList}>
        {dummyChanges.map((change) => (
          <li key={`${change.page}-${change.time}`} className={styles.item}>
            <div>
              <h3>{change.page}</h3>
              <p>{change.summary}</p>
            </div>
            <div className={styles.meta}>
              <span>{change.user}</span>
              <time>{change.time}</time>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RecentChanges;
