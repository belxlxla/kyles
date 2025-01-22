// Projects.jsx
import React, { useState, useRef, useEffect } from 'react'; 
import '../styles/pages/projects.css';
import arrow1 from '../../assets/arrow1.svg';
import arrow2 from '../../assets/arrow2.svg';
import kyleProjectImg from '../../assets/kylesite-projectimg.svg';
import fnbProjectImg from '../../assets/fnb-projectimg.svg';
import vnsProjectImg from '../../assets/vns-projectimg.svg';
import vdProjectImg from '../../assets/vd-projectimg.svg';
import lmProjectImg from '../../assets/lm-projectimg.svg';
import lmadmProjectImg from '../../assets/lmadm-projectimg.svg';

const Projects = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const techStackRefs = useRef([]);

 const projects = [
   {
     id: 1,
     image: kyleProjectImg, // 프로젝트 이미지
     progress: '100%', // 기여도
     period: '2024.12 ~ 지속 업데이트 (1인)', // 개발자 명 수
     title: 'Kyles Portfolio Site', // 프로젝트 명
     description: 'Spring Boot, React 로 개발한 제 개인 포트폴리오 사이트로,REST API 로 통신 구현을 확인할 수 있으며, AWS EC2로 배포 하였습니다.', // 프로젝트 타이틀
     tasks: [
       'GitHub Actions를 활용하여 도커 이미지 빌드 및 자동화된 배포 파이프라인 구성', // 개발 설명
       'AWS EC2에서 빌드된 도커 이미지를 활용하여 컨테이너 실행 및 배포 관리',
       'AWS Elastic Load Balancer를 사용한 로드 밸런싱으로 트래픽 분산과 고가용성 확보',
       'AWS S3를 통한 정적 리소스 관리 및 배포',
       'AWS RDS를 사용하여 안정적이고 안전한 데이터 저장소 운영',
       'AWS SSL 인증서를 적용하여 사용자와 서버 간 데이터 전송의 안전성을 확보',
       'AWS Route 53을 활용해 사용자 정의 도메인 연결 및 DNS 관리',
       'Spring Security와 JWT를 이용한 인증 및 권한 관리',
       '소셜 로그인 기능을 통한 간편한 사용자 인증',
       '결제(Payment) 기능을 통해 안전한 트랜잭션 처리',
       '실시간 채팅(Chat) 기능을 지원하여 사용자 간 원활한 소통 가능',
       '캘린더(Calendar) 및 지도(Map) 기능을 통한 사용자 편의성 제공',
     ],
     mainFeature: 'Prtfolio Site Build', // 주요 개발한 기능
     url: 'https://kyleportfolio.site', // URL
     techStack: ['Spring Security', 'Spring OAuth2', 'Social API', 'WebSocket', 'FastAPI (GTTS)', 'AWS (EC2,S3,RDS,ELB,Route53)', 'SSL/TLS', 'Nginx', 'GitHub Actions', 'Docker', '','','']
   },   // 기술 스택
   {
    id: 2,
    image: fnbProjectImg,
    progress: '100%',
    period: '2024.06 ~ 2024.10 (개발자 4명)',
    title: 'F&B 플랫폼 - 테이블오더',
    description: 'F&B 플랫폼 테이블오더 플랫폼 서비스 관리와 결제시스템 개발 하였으며, 보안 아키텍처 설계 및 클라우드와 POS 시스템 통합으로 결제시스템 보안을 강화했습니다.',
    tasks: [
      'Spring Boot를 활용한 관리자 페이지 서버 개발',
      '결제 처리 로직 설계 및 구현',
      'HMAC 및 JWT를 사용한 인증 및 보안 강화',
      'NCP와 Kubernetes 기반 클라우드 인프라 관리',
      'WebSocket 및 RabbitMQ을 통한 POS 시스템 통합 준비',
    ],
    mainFeature: 'Table Order Management & Payment Platform Development',
    url: 'https://api.dingdongpos.co.kr/users/login',
    techStack: ['SpringBoot', 'JWT', 'HMAC', 'NCP', 'GitHub', 'Kubernetes', 'WebSocket', 'RabbitMQ', '', '', '']
  },  
  {
    id: 3,
    image: vnsProjectImg,
    progress: '100%',
    period: '2024.04 ~ 2024.05 (개발자 2명)',
    title: 'Vanish Stereotype Official Website',
    description: 'Spring Boot와 React 로 Vanish stereotype 공식 웹사이트 내 메일 전송 기능 구현 및 AWS EC2에 안정적으로 배포 했습니다.',
    tasks: [
      '/api/send 엔드포인트를 통해 SMTP API를 활용한 채용 메일 발송 기능 구현',
      'React에서 빌드된 파일을 Spring Boot 서버에 연결해 함께 동작하도록 서버 통합',
      'AWS EC2 배포 : Gradle로 서버와 클라이언트를 빌드하여 AWS EC2에 배포 및 유지 관리',
      'SSL 인증서를 사용해 안전한 HTTPS 통신 환경 구현',
      'Nginx를 활용해 트래픽 라우팅, 로드 밸런싱, 정적 리소스 제공',
    ],
    mainFeature: 'Web, Mobile Homepage Build',
    url: 'https://vanishstereotype.com',
    techStack: ['Spring Boot', 'Gradle', 'React', 'SMTP API', 'AWS', 'Nginx', 'SSL', '', '', '']
  },  
  {
    id: 4,
    image: vdProjectImg,
    progress: '100%',
    period: '2024.03 ~ 2024.04 (1인)',
    title: 'VANDIML Official Website',
    description: '생성형 인공지능을 이용한 디스코드 베이스 플랫폼 Vandi 내 txt-to-img 플랫폼 소개 홈페이지 구축 및 유료 구독 기능을 개발 중입니다.',
    tasks: [
      '프롬프트 입력 후 이미지를 생성, 사용자 요청 기반 버튼 반환 기능제공 (Stable Diffusion 모델 연동 예정)',
      '디스코드 봇과 구독 페이지를 연동하여 유료 구독 처리 및 데이터베이스 기반의 사용자 정보 관리',
      'Google SMTP를 이용한 다국어 이메일 및 PDF 첨부 발송 기능 구현',
      'Node.js로 디스코드 봇 서버 구축, 사용자 요청 처리 및 Spring Boot 서버와의 데이터 통신 구현',
      'Spring Boot와 Thymeleaf 기반 웹사이트를 Gradle로 빌드하여 AWS EC2에 배포',
      'Nginx를 활용한 트래픽 라우팅 및 로드 밸런싱 구현',
      'SSL 인증서를 적용하여 HTTPS 기반 안전한 통신 제공',
    ],
    mainFeature: 'Web, Mobile Homepage Build',
    url: 'https://vandiml.com',
    techStack: ['Thyme leaf', 'Spring JPA', 'PostgreSQL', 'Node', 'discord', 'Mongoose', 'Discord Server', 'Discord Bot', 'Docker DB', 'AWS', 'Nginx', 'SSL', '', '', '' ]
  },  
  {
    id: 5,
    image: lmProjectImg,
    progress: '100%',
    period: '2024.02 ~ 2024.03 (개발자 2명)',
    title: 'Editor for AI Video Platform ~LUMEN~',
    description: '생성형 인공지능을 이용한 리마스터링 플랫폼 LUMEN 내 멀티모달 txt-to-img 기능, WebSocket 채팅 구현, 쿠키 인증 개발을 작업하였습니다.',
    tasks: [
      'Spring Boot와 Spring Data JPA를 활용한 서버 개발 및 데이터베이스 설계',
      'DDD(Domain-Driven Design) 원칙을 기반으로 프로젝트 구조 설계',
      'Spring Security와 JWT Token 인증 구현 (Redis와 쿠키 연동)',
      'Stable Diffusion 모델을 활용한 Text-to-Image 생성 기능 구현 (Flask API 통신)',
      'Node.js의 socket.io와 WebSocket을 이용한 실시간 채팅 기능 개발',
      'Anaconda Navigator를 활용한 AI 모델 추론 및 성능 실증',
      'Object Separation(객체 분리), Video Upscaling(영상 고해상도화)',
    ],
    mainFeature: 'Web Homepage Build',
    url: 'https://github.com/junu3148/lumen-editor',
    techStack: ['Spring Security', 'Spring JPA', 'RESTful API', 'Redis', 'WebSocket', 'Postgres SQL', 'Docker', 'FFmpeg', 'FastAPI', 'AWS', 'AI Model', '', '', '' ]
  },  
  {
    id: 6,
    image: lmadmProjectImg,
    progress: '100%',
    period: '2024.01 ~ 2024.02 (개발자 2명)',
    title: 'Admin for AI Video Platform ~LUMEN~',
    description: 'SpringBoot로 LUMEN Admin 개발, Spring Security로 보안성을 강화했습니다.',
    tasks: [
      'Spring Boot를 사용해 관리자 페이지 서버 개발',
      'MyBatis를 활용한 데이터베이스 설계 및 SQL 쿼리 작성',
      'Spring Security와 JWT Token 인증 구현 (DB 연동 및 세션 스토리지 활용)',
      'JavaMailSender를 이용해 Google SMTP 기반 이메일 발송 및 PDF 생성 후 첨부 발송',
      'React와 RESTful API를 활용해 CORS를 처리한 안정적인 통신 환경 구현',
      'SOLID 원칙 기반으로 코드 작성',
      'AOP(Aspect-Oriented Programming)를 활용한 로깅 및 예외 처리, @Transactional 적용',
      '통합 테스트 설계 및 컴포넌트 검증 테스트 수행',
    ],
    mainFeature: 'Web Homepage Build',
    url: 'https://github.com/kyle0321a/Admin',
    techStack: ['Spring Boot', 'My Batis', 'MySQL', 'RESTful API', 'SMTP API', '', '', '' ]
  },  
 ];

 useEffect(() => {
  techStackRefs.current.forEach(ref => {
    if (!ref) return;
    
    const handleWheel = (e) => {
      e.preventDefault();
      const scrollAmount = e.deltaY * 20;
      ref.scrollTo({
        left: ref.scrollLeft + scrollAmount,
        behavior: 'auto'
      });
    };

    ref.addEventListener('wheel', handleWheel, { passive: false });

    return () => {
      ref.removeEventListener('wheel', handleWheel);
    };
  });
}, [currentSlide]);

const handlePrevClick = () => {
  setCurrentSlide((prev) => (prev === 0 ? projects.length - 1 : prev - 1));
};

const handleNextClick = () => {
  setCurrentSlide((prev) => (prev === projects.length - 1 ? 0 : prev + 1));
};

return (
 <div id="projects" className="projects-container"> 
  <div className="projects-wrapper">
    <h1 className="projects-title">My Projects</h1>
    
    <div className="slider-container">
      <button className="nav-button prev" onClick={handlePrevClick}>
        <img src={arrow1} alt="Previous" />
      </button>

      {projects.map((project, index) => {
        const isActive = index === currentSlide;
        const isPrev = index === (currentSlide - 1 + projects.length) % projects.length;
        const isNext = index === (currentSlide + 1) % projects.length;

        return (
          <div 
            key={project.id} 
            className={`project-card ${isActive ? 'active' : ''} ${isPrev ? 'prev' : ''} ${isNext ? 'next' : ''}`}
            style={{ display: isActive || isPrev || isNext ? 'flex' : 'none' }}
          >
            <div className="card-image">
              <span className="progress">기여도 {project.progress}</span>
              <img src={project.image} alt={project.title} />
            </div>

            <div className="card-content">
              <div className="period">{project.period}</div>
              <h2 className="card-title">{project.title}</h2>
              <p className="pj-card-description">{project.description}</p>

              <div className="tasks-section">
                <h3 className="tasks-title">[담당 업무]</h3>
                <div className="tasks-list">
                  {project.tasks.map((task, index) => (
                    <p key={index}>• {task}</p>
                  ))}
                </div>
              </div>

              <div className="info-row">
                <span className="label">주요기능</span>
                <span className="value">{project.mainFeature}</span>
              </div>

              <div className="info-row">
                <span className="label">URL</span>
                <a href={project.url} className="value link" target="_blank" rel="noopener noreferrer">
                  {project.url}
                </a>
              </div>
              <div className="tech-stack-wrapper">
               <div className="tech-stack-overlay-left"></div>
               <div className="tech-stack-overlay-right"></div>
               <div 
                 className="tech-stack"
                 ref={el => techStackRefs.current[index] = el}  // ref 추가
               >
                 {project.techStack.map((tech, techIndex) => (
                   <span key={techIndex} className="tech-tag">
                     {tech}
                   </span>
                 ))}
               </div>
              </div>
            </div>
          </div>
        );
      })}

      <button className="nav-button next" onClick={handleNextClick}>
        <img src={arrow2} alt="Next" />
      </button>
    </div>
  </div>
 </div>
);
};

export default Projects;