// Archiving.jsx
import React from 'react';
import '../styles/pages/archiving.css';
import githubIcon from '../../assets/github-icon.svg';
import tistoryIcon from '../../assets/tistory-icon.svg';
import notionIcon from '../../assets/notion-icon.svg';

const Archiving = () => {
  return (
<div id="archiving" className="archiving-wrapper">
<div className="archiving-container">
         {/* bella : 섹션 타이틀 */}
        <h1 className="archiving-title">Archiving</h1>
        <div className="cards-wrapper">
          {/* bella : GitHub 카드 */}
          <div className="card">
            <div className="card-header">
              <img src={githubIcon} alt="GitHub" />
            </div>
            <a href="https://github.com/junu3148" className="card-link" target="_blank" rel="noopener noreferrer">
              https://github.com/junu3148
            </a>
            <div className="card-description">소스코드 저장소</div>
            <ul className="card-list">
              <li>과거 프로젝트, 프로그램, 플랫폼 소스코드</li>
              <li>멘토링 중인 오거나이제이션의 소스코드</li>
              <li>라이브러리 활동 내역 등</li>
            </ul>
            <span className="arrow">→</span>
          </div>

          {/* bella : Tistory 카드 */}
          <div className="card">
            <div className="card-header">
              <img src={tistoryIcon} alt="Tistory" />
            </div>
            <a href="https://navis.tistory.com/" className="card-link" target="_blank" rel="noopener noreferrer">
            https://navis.tistory.com
            </a>
            <div className="card-description">스터디 및 지식공유 목적의 블로그</div>
            <ul className="card-list">
              <li>공부한 내용을 머리로 정리하고 작성한 기록</li>
              <li>한층 더 상장한 개발자가 되기 위한 노력</li>
              <li>이미 알고 있는 지식을 공유하고 피드백을 받기 위한 자리</li>
            </ul>
            <span className="arrow">→</span>
          </div>

          {/* bella : Notion 카드 */}
          <div className="card coming-soon">
            <div className="card-header">
              <img src={notionIcon} alt="Notion" />
            </div>
            <a href="https://url.kr/w65dzp" className="card-link" target="_blank" rel="noopener noreferrer">
              https://url.kr/w65dzp
            </a>
            <div className="card-description">개발문서 Notion 정리</div>
            <ul className="card-list">
              <li>프로젝트와 개발 관련 문서를 정리한 노션 페이지</li>
            </ul>
            <span className="arrow">→</span>
          </div>
        </div>
      </div>
  </div>
  );
};

export default Archiving;