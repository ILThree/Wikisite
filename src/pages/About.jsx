import styles from './About.module.css';

const About = () => {
  return (
    <div className={styles.about}>
      <h2>드립위키 소개</h2>
      <p>
        드립위키는 커뮤니티 문화의 다양성을 존중하며, 그 순간의 웃음과 이야기를 기록하는 것이 목표입니다. 누구나 쉽게
        참여하고 정보를 공유할 수 있는 개방형 플랫폼을 지향합니다.
      </p>
      <section>
        <h3>우리의 목표</h3>
        <ul>
          <li>커뮤니티 밈과 드립을 체계적으로 보존하기</li>
          <li>재미있고 유익한 정보로 누구나 참여할 수 있는 공간 만들기</li>
          <li>신뢰할 수 있는 출처와 편집 과정을 통해 정보의 정확성 유지하기</li>
        </ul>
      </section>
      <section>
        <h3>참여하는 방법</h3>
        <p>
          로그인 기능과 편집 도구는 곧 제공될 예정입니다. 그동안은 커뮤니티 게시판을 통해 새로운 아이디어와 피드백을 공유해
          주세요. 오픈 베타를 준비하며 여러분의 의견을 적극 반영하겠습니다.
        </p>
      </section>
    </div>
  );
};

export default About;
