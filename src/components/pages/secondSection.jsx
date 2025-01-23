// SecondSection.jsx
import React, { useEffect, useRef } from 'react'; 
import '../styles/pages/secondSection.css';
import backgroundVideo from '../../assets/background.mp4';

const SecondSection = () => {
  const videoRef = useRef(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playsInline = true;
      videoRef.current.play().catch(error => {
        console.log("Video autoplay failed:", error);
      });
    }
  }, []);

  return (
    <div id="second-section" className="second-section-container">
      <section className="second-section">
        <video 
          ref={videoRef}
          className="background-video" 
          autoPlay 
          loop 
          muted 
          playsInline
          webkit-playsinline="true"
          >
          <source src={backgroundVideo} type="video/mp4" />
        </video>
      <div className="content-wrapper">
        <div className="intro-text">
          <div className="title-wrapper">
            {/* bella : 폰트 개별 적용 */}
            <span className="be">BE</span>
            <span className="dev">개발자</span>
            <span className="name">양준우</span>
          </div>
          <div className="s-description">
            <p>성장과 협업을 좋아하는 <strong>2년차 개발자</strong>입니다.</p>
            <p>백엔드 전반에 걸쳐 <strong>새로운 도전과 지식에 대한 열망</strong>이 아주 강합니다.</p>
          </div>
        </div>
      </div>
    </section>
  </div>
  );
};

export default SecondSection;