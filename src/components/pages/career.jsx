// Career.jsx
import React from 'react';
import '../styles/pages/career.css';
import airpassLogo from '../../assets/airpass-logo.svg';
import ioLogo from '../../assets/io-logo.svg';

const Career = () => {
  const careers = [
    {
      id: 1,
      logo: airpassLogo,
      company: "Airpass", // 회사 로고
      period: "2024.6 ~ 2024.12", // 근무 기간
      description: "KT 링고 통신 회사 사업 플랫폼 사업부 신설", // 회사 설명
      projects: [
        {
          title: "F&B 플랫폼 - 테이블오더", // 프로젝트 명
          period: "2024.06 - 2024.10", // 프로젝트 수행 기간
          details: [
            "테이블오더 기반의 F&B 플랫폼 프로젝트로, 매장 내 테이블 주문 시스템의 효율성을 높이고", // 프로젝트 설명
            "관리 및 결제 시스템을 강화하는 데 중점을 두었습니다.",
            "클라우드 네이티브 인프라와 POS 시스템 통합을 준비하여 플랫폼의 안정성과 확장성을 확보했으며,",
            "보안 아키텍처 설계를 통해 HMAC 및 JWT 기반 인증을 적용해 사용자 데이터 보호를 강화했습니다.",
            "결제 처리 로직과 관리 페이지를 설계·구현하여 주문 흐름의 최적화와 매장 운영 효율성을 높이는 성과를 달성했습니다."
          ]
        }
      ]
    },
    {
      id: 2,
      logo: ioLogo,
      company: "iO Centre",
      period: "2023.9 ~ 2024.6",
      description: "자체 솔루션 제작 및 프로젝트 Si 회사",
      projects: [
        {
          title: "Editor for AI Video Editing Platform",
          period: "2024.02 - 2024.03",
          details: [
            "생성형 AI 기술을 활용한 영상 편집 플랫폼의 에디터(Editor)를 개발한 프로젝트입니다.",
            "Stable Diffusion 모델을 기반으로 Text-to-Image 생성 기능을 제공하고", 
            "AI 기술을 접목하여 객체 분리와 영상 고해상도화 같은 고급 편집 기능을 구현했습니다.",
            "또한, 사용자 경험 강화를 위해 Redis와 쿠키 기반 인증을 도입하고", 
            "WebSocket 기반 실시간 채팅 기능을 추가하여 협업 환경을 지원했습니다.",
            "영상 편집과 AI 기술을 결합해 사용자에게 효율적이고 혁신적인 콘텐츠 제작 환경을 제공하는 데 중점을 둔 프로젝트입니다."
          ]
        }
        ,
        {
          title: "Admin Page for AI Video Editing Platform",
          period: "2024.01 - 2024.02",
          details: [
            "생성형 AI 기반 영상 편집 플랫폼의 관리자 페이지(Admin)를 개발한 프로젝트입니다.",
            "Spring Boot를 기반으로 안정적이고 효율적인 관리 시스템을 구축했으며,",
            "데이터베이스 설계와 RESTful API 개발을 통해 데이터 관리와 API 통신 환경을 최적화했습니다.",
            "또한 Spring Security와 JWT를 활용해 인증 및 보안을 강화했으며,",
            "본 프로젝트는 SOLID 원칙을 준수하며 구조적이고 유지보수 가능한 코드를 작성했으며,",
            "AOP(Aspect-Oriented Programming)를 활용해 로깅 및 예외 처리를 체계적으로 구현했습니다.",
            "통합 테스트와 컴포넌트 검증을 통해 시스템의 안정성과 신뢰성을 확보하며,",
            "관리자 기능의 전반적인 성능과 확장성을 강화한 프로젝트입니다."
          ]
        }
      ]
    }
  ];

  return (
    <div id="career" className="career-wrapper">
      <div className="career-wrapper">
        <h1 className="career-title">Career</h1>
        
        <div className="career-container">
          {careers.map((career) => (
            <div key={career.id} className="career-item">
              <div className="career-logo">
                <img src={career.logo} alt={career.company} />
              </div>
                  
              <div className="career-content-wrap">
                <div className="career-section">
                  <h2 className="career-main-title">{career.company}</h2>
                  <span className="career-period">{career.period}</span>
                  <div className="career-description">
                    <p>{career.description}</p>
                  </div>
                </div>

                <div className="career-divider"></div>

                {career.projects.map((project, index) => (
                  <div key={index} className="career-section">
                    <h2 className="career-sub-title">{project.title}</h2>
                    <span className="career-period">{project.period}</span>
                    {project.details.map((detail, i) => (
                      <p key={i} className="career-status">{detail}</p>
                    ))}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Career;