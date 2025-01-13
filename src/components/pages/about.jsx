// About.jsx
import React from 'react';
import '../styles/pages/about.css';
import profileImg from '../../assets/profileimg.svg';
import aboutMeTitle from '../../assets/aboutme.svg';

const About = () => {
  return (
  <div id="about" className="about-container">
    <div className="about-container">
      <div className="about-wrapper">
        <div className="profile-section">
          <img 
            src={profileImg}
            alt="Profile view through window" 
            className="profile-image"
          />
        </div>
        <div className="content-section">
          <img 
            src={aboutMeTitle}
            alt="About me" 
            className="about-title"
          />
          <div className="divider"></div>


          <div className="info-list"> 
            <div className="info-item">
               {/* bella : 이름 정보 */}
              <span className="label">이름</span>
              <span className="separator">ㅣ</span>
              <span className="value korean"><b>양준우</b></span>
            </div>

            <div className="info-item">
              {/* bella : 생년월일 정보 */}
              <span className="label">생년월일</span>
              <span className="separator">ㅣ</span>
              <span className="value"><b>1989년 1월 29일</b></span>
            </div>

            <div className="info-item">
              {/* bella : 연락처 정보 */}
              <span className="label">연락처</span>
              <span className="separator">ㅣ</span>
              <div className="contact-links">
                <a href="tel:+82-2-10-6491-6909" className="value"><b>+82-2 10-5086-7705</b></a>
                <a href="mailto:menstua@naver.com" className="value underline"><b>menstua@naver.com</b></a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  );
};

export default About;