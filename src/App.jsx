// App.jsx
import React, { useEffect, useRef } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';  // useLocation 추가
import Header from './components/layout/header';
import Main from './components/pages/main';
import SecondSection from './components/pages/secondSection';
import About from './components/pages/about';
import Skill from './components/pages/skill';
import Archiving from './components/pages/archiving';
import Projects from './components/pages/projects';
import Career from './components/pages/career';
import Contact from './components/pages/contact';
import Login from './components/pages/login';
import Payments from './components/pages/payments';
import Map from './components/pages/map';
import Chat from './components/pages/chat';
import Editor from './components/pages/editor';
import Calendar from './components/pages/calendar';
import AI from './components/pages/ai';
import './styles/smoothScroll.css';

function App() {
  // eslint-disable-next-line no-unused-vars
  const sectionsRef = useRef([]);
  const location = useLocation(); 

  useEffect(() => {
    window.scrollTo(0, 0);
  
    const timer = setTimeout(() => {
      const sections = document.querySelectorAll('.scroll-section');
      if (sections.length > 0) {
        sections[0].classList.add('in-view');
      }
    }, 100);

    return () => clearTimeout(timer);
  }, [location.pathname]); 

  useEffect(() => {
    let isScrolling = false;
    let lastScrollTop = 0;
    const scrollThreshold = 3000; // 스크롤 민감도 여기서 설정하세요
    const scrollDelay = 1500;

    const preventContextMenu = (e) => {
      if (e.target.tagName === 'IMG') {
        e.preventDefault();
      }
    };
    
    const preventSave = (e) => {
      if (!e.target.closest('.nav-button')) {
        e.preventDefault();
        return false;
      }
    };

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('in-view');
          } else {
            entry.target.classList.remove('in-view');
          }
        });
      },
      {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
      }
    );

    const handleScroll = () => {
      if (document.activeElement.tagName === 'INPUT' || 
          document.activeElement.tagName === 'TEXTAREA') {
        return;
      }

      if (isScrolling) return;

      const currentScrollTop = window.scrollY;
      const scrollDelta = Math.abs(currentScrollTop - lastScrollTop);

      if (scrollDelta > scrollThreshold) {
        isScrolling = true;
        
        const direction = currentScrollTop > lastScrollTop ? 1 : -1;
        const sections = Array.from(document.querySelectorAll('.scroll-section'));
        const currentSection = sections.findIndex(section => {
          const rect = section.getBoundingClientRect();
          return rect.top <= 0 && rect.bottom > 0;
        });

        const nextSectionIndex = currentSection + direction;
        if (nextSectionIndex >= 0 && nextSectionIndex < sections.length) {
          sections[nextSectionIndex].scrollIntoView({ 
            behavior: 'smooth',
            block: 'start'
          });
        }

        setTimeout(() => {
          isScrolling = false;
          lastScrollTop = window.scrollY;
        }, scrollDelay);
      }
    };

    const throttledHandleScroll = (e) => {
      requestAnimationFrame(() => handleScroll(e));
    };

    // 이벤트 리스너
    document.addEventListener('contextmenu', preventContextMenu);
    window.addEventListener('scroll', throttledHandleScroll);
    
    const images = document.querySelectorAll('img:not(.nav-button img)');
    images.forEach(img => {
      img.addEventListener('touchstart', preventSave, { passive: false });
      img.addEventListener('contextmenu', preventSave);
    });

    // Observer 등록
    setTimeout(() => {
      document.querySelectorAll('.scroll-section').forEach(section => {
        observer.observe(section);
      });
    }, 100);
  
    return () => {
      document.removeEventListener('contextmenu', preventContextMenu);
      window.removeEventListener('scroll', throttledHandleScroll);
      images.forEach(img => {
        img.removeEventListener('touchstart', preventSave);
        img.removeEventListener('contextmenu', preventSave);
      });
      observer.disconnect();
    };
  }, [location.pathname]);  // location이 변경될 때마다 effect 재실행

  const wrapWithScrollSection = (Component) => (
    <div className="scroll-section">
      <Component />
    </div>
  );

  const MainRoute = () => (
    <>
      <Header />
      <div className="main-content">
        {wrapWithScrollSection(Main)}
        {wrapWithScrollSection(SecondSection)}
        {wrapWithScrollSection(About)}
        {wrapWithScrollSection(Skill)}
        {wrapWithScrollSection(Archiving)}
        {wrapWithScrollSection(Projects)}
        {wrapWithScrollSection(Career)}
        {wrapWithScrollSection(Contact)}
      </div>
    </>
  );

  return (
    <Routes>
      <Route path="/login" element={<><Header />{wrapWithScrollSection(Login)}</>} />
      <Route path="/" element={<MainRoute />} />
      <Route path="/payments" element={<><Header />{wrapWithScrollSection(Payments)}</>} />
      <Route path="/map" element={<><Header />{wrapWithScrollSection(Map)}</>} />
      <Route path="/chat" element={<><Header />{wrapWithScrollSection(Chat)}</>} />
      <Route path="/editor" element={<><Header />{wrapWithScrollSection(Editor)}</>} />
      <Route path="/calendar" element={<><Header />{wrapWithScrollSection(Calendar)}</>} />
      <Route path="/ai" element={<><Header />{wrapWithScrollSection(AI)}</>} />
    </Routes>
  );
}

export default App;